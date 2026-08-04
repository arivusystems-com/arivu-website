import ArivuBlogAssets from './ArivuBlogAssets';
import { SiteFooter } from '@/components/site/footer';
import { Container } from '@/components/site/container';
import { SiteNav, SiteNavSpacer } from '@/components/site/nav';

const API_ORIGIN = process.env.ARIVU_API_ORIGIN || '';

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
      <Container wide>
        <div className="ld-blog-root ld-blog-embed arivu-blog-chrome">{children}</div>
      </Container>
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
