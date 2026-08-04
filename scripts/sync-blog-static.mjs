import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { loadEnvFiles } = require(path.join(__dirname, '../help-sync/lib/loadEnv.js'));
loadEnvFiles();

const org = process.env.ARIVU_BLOG_ORG || process.env.ARIVU_ORG || '';
const apiOrigin = process.env.ARIVU_API_ORIGIN || '';
const dest = process.env.ARIVU_SYNC_DEST || './public';
const pathPrefix = process.env.BLOG_URL_PREFIX || '/blog/';
const siteOrigin = process.env.SITE_ORIGIN || '';
const syncMode = process.env.ARIVU_SYNC_MODE || 'layout';
const failOnError = process.env.ARIVU_SYNC_FAIL_ON_ERROR === '1';

if (syncMode === 'layout' || syncMode === 'isr') {
  console.log(
    `[arivu-blog-sync] ${syncMode} mode — pages served by Next.js (no static HTML write at build)`,
  );
  process.exit(0);
}

if (!org || !apiOrigin) {
  console.warn(
    '[arivu-blog-sync] Skipping blog static sync: set ARIVU_BLOG_ORG (or ARIVU_ORG) and ARIVU_API_ORIGIN',
  );
  process.exit(0);
}

if (syncMode === 'hybrid') {
  console.log(
    '[arivu-blog-sync] Hybrid mode — writing static HTML; App Router serves it when present, else live embed',
  );
}

try {
  const { syncFull } = require(path.join(__dirname, '../help-sync/lib/sync.js'));
  const result = await syncFull({
    apiOrigin,
    org,
    dest,
    pathPrefix,
    siteOrigin,
    addon: 'blog',
    mirrorAssets: process.env.ARIVU_MIRROR_ASSETS !== '0',
  });
  console.log(
    `[arivu-blog-sync] Wrote ${result.count} pages to ${dest} (manifest ${result.version || 'unknown'})`,
  );
} catch (error) {
  const status = error?.status;
  const message = error?.message || String(error);
  console.warn(
    `[arivu-blog-sync] Static sync failed${status ? ` (${status})` : ''}: ${message}`,
  );
  if (failOnError) {
    process.exit(1);
  }
  // Never fail the site build for rate limits / transient API errors.
  // Layout/ISR routes can still serve content from the API at runtime.
  console.warn('[arivu-blog-sync] Continuing build without static HTML (set ARIVU_SYNC_FAIL_ON_ERROR=1 to hard-fail)');
  process.exit(0);
}
