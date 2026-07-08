import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArivuHelpEmbed from '../ArivuHelpEmbed';
import {
  API_ORIGIN,
  ORG,
  PATH_PREFIX,
  buildHelpPathname,
  buildStaticSlugParams,
  fetchHomeExport,
  resolveHelpPage,
} from '../../../lib/arivu-help';

export async function generateStaticParams() {
  return buildStaticSlugParams();
}

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug = [] } = await params;

  if (slug.length === 0) {
    const home = await fetchHomeExport();
    const meta = home?.meta;
    if (!meta) return {};
    return {
      title: meta.title,
      description: meta.description,
      alternates: meta.canonical ? { canonical: meta.canonical } : undefined,
    };
  }

  const resolved = await resolveHelpPage(slug);
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

export default async function HelpPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const pathname = buildHelpPathname(PATH_PREFIX, slug);

  if (!API_ORIGIN || !ORG) {
    notFound();
  }

  return (
    <ArivuHelpEmbed
      apiOrigin={API_ORIGIN}
      org={ORG}
      pathPrefix={PATH_PREFIX}
      pathname={pathname}
    />
  );
}
