'use strict';

const DEFAULT_MAX_RETRIES = 5;
const DEFAULT_BASE_DELAY_MS = 1000;
const DEFAULT_MAX_DELAY_MS = 30000;

function buildContentBase(apiOrigin, org) {
  const origin = String(apiOrigin || '').replace(/\/$/, '');
  const orgKey = String(org || '').trim();
  if (!origin || !orgKey) {
    throw new Error('apiOrigin and org are required');
  }
  return `${origin}/api/public/v1/content/${encodeURIComponent(orgKey)}`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseRetryAfterMs(headerValue) {
  if (!headerValue) return null;
  const asSeconds = Number(headerValue);
  if (Number.isFinite(asSeconds) && asSeconds >= 0) {
    return Math.min(asSeconds * 1000, DEFAULT_MAX_DELAY_MS);
  }
  const asDate = Date.parse(headerValue);
  if (!Number.isNaN(asDate)) {
    return Math.min(Math.max(asDate - Date.now(), 0), DEFAULT_MAX_DELAY_MS);
  }
  return null;
}

function isRetryableStatus(status) {
  return status === 429 || status === 502 || status === 503 || status === 504;
}

function backoffDelayMs(attempt, response) {
  const retryAfter = parseRetryAfterMs(response?.headers?.get?.('retry-after'));
  if (retryAfter != null) return retryAfter;
  const exp = Math.min(DEFAULT_BASE_DELAY_MS * 2 ** attempt, DEFAULT_MAX_DELAY_MS);
  const jitter = Math.floor(Math.random() * 250);
  return exp + jitter;
}

async function fetchWithRetry(url, options = {}) {
  const maxRetries = options.maxRetries ?? DEFAULT_MAX_RETRIES;
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    const response = await fetch(url, options.init);
    if (!isRetryableStatus(response.status) || attempt === maxRetries) {
      return response;
    }

    const delayMs = backoffDelayMs(attempt, response);
    console.warn(
      `[arivu-sync] ${response.status} from ${url} — retry ${attempt + 1}/${maxRetries} in ${delayMs}ms`,
    );
    await sleep(delayMs);
    lastError = response;
  }

  return lastError;
}

async function fetchJson(url) {
  const response = await fetchWithRetry(url);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload?.success) {
    const error = new Error(payload?.message || `Request failed (${response.status})`);
    error.status = response.status;
    throw error;
  }
  return payload;
}

async function fetchBuffer(url) {
  const response = await fetchWithRetry(url);
  if (!response.ok) {
    const error = new Error(`Asset download failed (${response.status})`);
    error.status = response.status;
    throw error;
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  return {
    buffer,
    contentType: response.headers.get('content-type') || 'application/octet-stream',
  };
}

async function fetchText(url) {
  const response = await fetchWithRetry(url);
  if (!response.ok) {
    const error = new Error(`Request failed (${response.status})`);
    error.status = response.status;
    throw error;
  }
  return response.text();
}

async function fetchManifest(client, pathPrefix) {
  const params = new URLSearchParams();
  if (pathPrefix) params.set('pathPrefix', pathPrefix);
  const suffix = params.toString() ? `?${params.toString()}` : '';
  const payload = await fetchJson(`${client.contentBase}/manifest.json${suffix}`);
  return payload.data;
}

async function fetchExport(client, slug, options = {}) {
  const params = new URLSearchParams();
  if (options.pathPrefix) params.set('pathPrefix', options.pathPrefix);
  if (options.articleLinkPrefix) params.set('articleLinkPrefix', options.articleLinkPrefix);
  if (options.fragment) params.set('fragment', '1');
  if (options.chrome) params.set('chrome', '1');
  const suffix = params.toString() ? `?${params.toString()}` : '';
  const payload = await fetchJson(
    `${client.contentBase}/articles/${encodeURIComponent(slug)}/export${suffix}`,
  );
  return payload.data;
}

async function fetchHomeExport(client, pathPrefix, options = {}) {
  const params = new URLSearchParams();
  if (pathPrefix) params.set('pathPrefix', pathPrefix);
  if (options.fragment) params.set('fragment', '1');
  if (options.chrome) params.set('chrome', '1');
  const suffix = params.toString() ? `?${params.toString()}` : '';
  const payload = await fetchJson(`${client.contentBase}/export/home${suffix}`);
  return payload.data;
}

async function fetchCollectionExport(client, slug, options = {}) {
  const params = new URLSearchParams();
  if (options.pathPrefix) params.set('pathPrefix', options.pathPrefix);
  if (options.parentSlug) params.set('parent', options.parentSlug);
  if (options.fragment) params.set('fragment', '1');
  if (options.chrome) params.set('chrome', '1');
  const suffix = params.toString() ? `?${params.toString()}` : '';
  const payload = await fetchJson(
    `${client.contentBase}/export/collections/${encodeURIComponent(slug)}${suffix}`,
  );
  return payload.data;
}

async function fetchStaticSitemap(client, pathPrefix, siteOrigin = '') {
  const params = new URLSearchParams();
  if (pathPrefix) params.set('pathPrefix', pathPrefix);
  if (siteOrigin) params.set('siteOrigin', siteOrigin);
  const suffix = params.toString() ? `?${params.toString()}` : '';
  return fetchText(`${client.contentBase}/export/sitemap.xml${suffix}`);
}

function createClient({ apiOrigin, org }) {
  const contentBase = buildContentBase(apiOrigin, org);
  return {
    apiOrigin: String(apiOrigin || '').replace(/\/$/, ''),
    org: String(org || '').trim(),
    contentBase,
    fetchManifest: (pathPrefix) => fetchManifest({ contentBase }, pathPrefix),
    fetchExport: (slug, options) => fetchExport({ contentBase }, slug, options),
    fetchHomeExport: (pathPrefix, options) => fetchHomeExport({ contentBase }, pathPrefix, options),
    fetchCollectionExport: (slug, options) => fetchCollectionExport({ contentBase }, slug, options),
    fetchStaticSitemap: (pathPrefix, siteOrigin) => fetchStaticSitemap({ contentBase }, pathPrefix, siteOrigin),
    fetchBuffer,
  };
}

module.exports = {
  buildContentBase,
  createClient,
  fetchJson,
  fetchBuffer,
  fetchText,
  fetchManifest,
  fetchExport,
  fetchHomeExport,
  fetchCollectionExport,
  fetchStaticSitemap,
  fetchWithRetry,
};
