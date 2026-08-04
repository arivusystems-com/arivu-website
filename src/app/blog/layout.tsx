import ArivuBlogAssets from './ArivuBlogAssets';
import { SiteFooter } from '@/components/site/footer';
import { SiteNav, SiteNavSpacer } from '@/components/site/nav';

const API_ORIGIN =
  process.env.ARIVU_API_ORIGIN || 'https://app.arivusystems.com';

/**
 * Blog layout for Arivu headless content.
 *
 * Matches /help: site header + footer wrap the Arivu embed so /blog pages
 * share the same chrome as the rest of the marketing site.
 */
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const stylesheetOrigin = API_ORIGIN.replace(/\/$/, '');

  return (
    <>
      {stylesheetOrigin ? (
        <link rel="stylesheet" href={`${stylesheetOrigin}/embed/headless-blocks.css`} />
      ) : null}
      <SiteNav />
      <SiteNavSpacer />
      <main className="mx-auto w-full max-w-[1240px] min-h-dvh px-6 lg:px-10">
        <div className="ld-blog-root ld-blog-embed arivu-blog-chrome min-h-dvh">
          {children}
        </div>
      </main>
      <SiteFooter />
      <ArivuBlogAssets apiOrigin={API_ORIGIN} />
      <style>{`
        .arivu-blog-chrome .ld-blog-page,
        .arivu-blog-chrome .ld-blog-home,
        .arivu-blog-chrome .ld-blog-site,
        .arivu-blog-chrome .ld-blog-embed-root {
          max-width: none;
          padding-inline: 0;
        }
      `}</style>
    </>
  );
}
