import { Container } from '@/components/site/container';
import { SiteFooter } from '@/components/site/footer';
import { SiteNav, SiteNavSpacer } from '@/components/site/nav';
import { API_ORIGIN } from '@/lib/arivu-help';
import ArivuHelpAssets from './ArivuHelpAssets';

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  const stylesheetOrigin = API_ORIGIN.replace(/\/$/, '');

  return (
    <>
      {stylesheetOrigin ? (
        <link rel="stylesheet" href={`${stylesheetOrigin}/embed/headless-blocks.css`} />
      ) : null}
      <div className="flex min-h-screen flex-col bg-page">
        <SiteNav />
        <SiteNavSpacer />
        <main className="flex flex-1 flex-col pb-24 pt-10 sm:pt-14">
          <Container wide>
            <div className="ld-help-site ld-help-root ld-help-embed">{children}</div>
          </Container>
        </main>
        <SiteFooter />
      </div>
      <ArivuHelpAssets apiOrigin={API_ORIGIN} />
    </>
  );
}
