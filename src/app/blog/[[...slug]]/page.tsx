import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArivuBlogContent from '../ArivuBlogContent';
import ArivuBlogEmbed from '../ArivuBlogEmbed';
import {
  buildBlogPathname,
  buildStaticSlugParams,
  fetchHomeExport,
  pickPageHtml,
  readSyncedPageHtml,
  resolveBlogPage,
} from '../../../lib/arivu-blog';

const API_ORIGIN =
  process.env.ARIVU_API_ORIGIN || 'https://app.arivusystems.com';
const ORG =
  process.env.ARIVU_BLOG_ORG ||
  process.env.ARIVU_ORG ||
  'blog_pub_616d60dfaa9268090ceb2d922d003220';
const PATH_PREFIX = process.env.BLOG_URL_PREFIX || '/blog/';

export async function generateStaticParams() {
  return buildStaticSlugParams();
}

export const dynamicParams = true;
// Short revalidate so a bad export response doesn't pin a 404 for hours
export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug = [] } = await params;

  if (slug.length === 0) {
    const home = await fetchHomeExport();
    const meta = home?.meta;
    if (!meta) {
      return {
        title: 'Blog',
        description: 'Latest posts from Arivu.',
      };
    }
    return {
      title: meta.title,
      description: meta.description,
      alternates: meta.canonical ? { canonical: meta.canonical } : undefined,
    };
  }

  const resolved = await resolveBlogPage(slug);
  const meta = resolved?.data.meta;
  if (!meta) {
    return {};
  }
  return {
    title: meta.title,
    description: meta.description,
    alternates: meta.canonical ? { canonical: meta.canonical } : undefined,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const pathname = buildBlogPathname(PATH_PREFIX, slug);

  const syncedHtml = await readSyncedPageHtml(pathname);
  if (syncedHtml) {
    return <ArivuBlogContent html={syncedHtml} />;
  }

  // Blog index: never call notFound() — a rate-limited/failed export would
  // otherwise bake a static 404 for /blog. Always mount the embed shell.
  if (slug.length === 0) {
    return (
      <ArivuBlogEmbed
        apiOrigin={API_ORIGIN}
        org={ORG}
        pathPrefix={PATH_PREFIX}
        pathname={pathname}
      />
    );
  }

  const resolved = await resolveBlogPage(slug);
  if (!pickPageHtml(resolved?.data ?? null)) {
    notFound();
  }

  return (
    <ArivuBlogEmbed
      apiOrigin={API_ORIGIN}
      org={ORG}
      pathPrefix={PATH_PREFIX}
      pathname={pathname}
    />
  );
}
