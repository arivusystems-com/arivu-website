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
 *
 * Horizontal shell mirrors the nav: page padding sits outside max-w-[1240px]
 * so blog edges align with the logo / “Get a Demo” column.
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
      <main className="mx-auto w-full px-6 pt-8 pb-16 lg:px-10 lg:pt-10 lg:pb-20">
        <div className="mx-auto w-full max-w-[1240px] min-h-dvh">
          <div className="ld-blog-root ld-blog-embed arivu-blog-chrome min-h-dvh">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
      <ArivuBlogAssets apiOrigin={API_ORIGIN} />
      <style>{`
        .arivu-blog-chrome,
        .arivu-blog-chrome .ld-blog-page,
        .arivu-blog-chrome .ld-blog-home,
        .arivu-blog-chrome .ld-blog-site,
        .arivu-blog-chrome .ld-blog-root,
        .arivu-blog-chrome .ld-blog-embed,
        .arivu-blog-chrome .ld-blog-embed-root,
        .arivu-blog-chrome .ld-help-home,
        .arivu-blog-chrome .ld-help-page,
        .arivu-blog-chrome .ld-help-content {
          max-width: none;
          width: 100%;
          margin-inline: 0;
          padding-inline: 0;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
