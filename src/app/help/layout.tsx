import ArivuHelpAssets from './ArivuHelpAssets';
import { API_ORIGIN } from '@/lib/arivu-help';
import { SiteNav } from '@/components/site/nav';
import { SiteNavSpacer } from '@/components/site/nav';
import { SiteFooter } from '@/components/site/footer';

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  const stylesheetOrigin = API_ORIGIN.replace(/\/$/, '');

  return (
    <>
      {stylesheetOrigin ? (
        <link rel="stylesheet" href={`${stylesheetOrigin}/embed/headless-blocks.css`} />
      ) : null}
      <SiteNav />
      <SiteNavSpacer />
      <main className="mx-auto w-full max-w-[1240px] min-h-dvh px-6 lg:px-10">
        <div className="ld-help-root ld-help-embed arivu-help-chrome min-h-dvh">
          {children}
        </div>
      </main>
      <SiteFooter />
      <ArivuHelpAssets apiOrigin={API_ORIGIN} />
      <style>{`
        .arivu-help-chrome .ld-help-page,
        .arivu-help-chrome .ld-help-home,
        .arivu-help-chrome .ld-help-site {
          max-width: none;
          padding-inline: 0;
        }
      `}</style>
    </>
  );
}
