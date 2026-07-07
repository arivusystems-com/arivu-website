import { Container } from '@/components/site/container'
import { HelpEmbed } from '@/components/site/help-embed'
import { SiteFooter } from '@/components/site/footer'
import { SiteNav, SiteNavSpacer } from '@/components/site/nav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Browse articles, guides, and answers in the Arivu Help Center.',
}

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      <SiteNav />
      <SiteNavSpacer />
      <main className="flex flex-1 flex-col pb-24 pt-10 sm:pt-14">
        <Container wide>
          <HelpEmbed />
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}
