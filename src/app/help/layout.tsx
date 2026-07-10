import ArivuHelpAssets from './ArivuHelpAssets';
import { SiteNav } from '@/components/site/nav';
import { SiteNavSpacer } from '@/components/site/nav';
import { Container } from '@/components/site/container';
import { SiteFooter } from '@/components/site/footer';

const API_ORIGIN = process.env.ARIVU_API_ORIGIN || '';

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  const stylesheetOrigin = API_ORIGIN.replace(/\/$/, '');

  return (
    <>
      {stylesheetOrigin ? (
        <link rel="stylesheet" href={`${stylesheetOrigin}/embed/headless-blocks.css`} />
      ) : null}
      <SiteNav />
      <SiteNavSpacer />
      <Container wide>
        <div className="ld-help-root ld-help-embed arivu-help-chrome">{children}</div>
      </Container>
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
