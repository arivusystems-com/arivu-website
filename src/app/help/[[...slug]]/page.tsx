import { Container } from '@/components/site/container'
import { HelpEmbedMount } from '@/components/site/help-embed-mount'
import { SiteFooter } from '@/components/site/footer'
import { SiteNav, SiteNavSpacer } from '@/components/site/nav'
import {
  HELP_EMBED_API_ORIGIN,
  HELP_EMBED_SCRIPT,
} from '@/lib/help-embed'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Browse articles, guides, and answers in the Arivu Help Center.',
}

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      <SiteNav />
      <SiteNavSpacer />
      <main className="flex min-h-[calc(100dvh-4rem)] flex-1 flex-col pb-24 pt-10 sm:pt-14 lg:min-h-[calc(100dvh-4.25rem)]">
        <Container wide>
          <div id="arivu-help" />
          <HelpEmbedMount />
        </Container>
      </main>
      <SiteFooter />
      <Script
        src={HELP_EMBED_SCRIPT}
        data-api-origin={HELP_EMBED_API_ORIGIN}
        data-target="#arivu-help"
        data-path-prefix="/help/"
        data-title="Help Center"
        strategy="afterInteractive"
      />
    </div>
  )
}
