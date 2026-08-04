import ArivuHelpAssets from './ArivuHelpAssets';
import { API_ORIGIN } from '@/lib/arivu-help';
import { SiteNav } from '@/components/site/nav';
import { SiteNavSpacer } from '@/components/site/nav';
import { SiteFooter } from '@/components/site/footer';

/**
 * Horizontal shell mirrors the nav: page padding sits outside max-w-[1240px]
 * so article edges align with the logo / “Get a Demo” column.
 */
export default function HelpLayout({ children }: { children: React.ReactNode }) {
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
          <div className="ld-help-root ld-help-embed arivu-help-chrome min-h-dvh">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
      <ArivuHelpAssets apiOrigin={API_ORIGIN} />
      <style>{`
        .arivu-help-chrome,
        .arivu-help-chrome .ld-help-page,
        .arivu-help-chrome .ld-help-home,
        .arivu-help-chrome .ld-help-site,
        .arivu-help-chrome .ld-help-root,
        .arivu-help-chrome .ld-help-embed,
        .arivu-help-chrome .ld-help-embed-root,
        .arivu-help-chrome .ld-help-content,
        .arivu-help-chrome .ld-article {
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
