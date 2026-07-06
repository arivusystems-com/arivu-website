import { Link } from '@/components/link'
import { demoUrl } from '@/components/home/data'
import { BracketLabel } from '@/components/site/bracket-label'
import { Container } from '@/components/site/container'
import { SiteFooter } from '@/components/site/footer'
import { SiteNav, SiteNavSpacer } from '@/components/site/nav'
import { PremierCtaButton } from '@/components/site/premier-cta-button'
import {
  SectionHeading,
  SectionLead,
} from '@/components/site/section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partnerships',
  description:
    'Partner with Arivu to help businesses structure operations and scale with connected applications.',
}

export default function PartnershipsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <SiteNav theme="dark" />
      <SiteNavSpacer />

      <main className="relative flex flex-1 items-center pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pt-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgb(79_70_229/0.18),transparent)]"
          aria-hidden="true"
        />

        <Container narrow className="relative">
          <div className="text-center">
            <BracketLabel light className="text-center">
              Coming soon
            </BracketLabel>

            <SectionHeading as="h1" light className="mt-5">
              Partnerships
            </SectionHeading>

            <SectionLead light className="mx-auto mt-5 max-w-lg">
              We&apos;re building a partner program for consultants, integrators, and
              technology providers who help businesses run with clarity. Check back soon
              for program details and how to apply.
            </SectionLead>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PremierCtaButton href={demoUrl}>Get in touch</PremierCtaButton>
              <Link
                href="/"
                className="text-[15px] font-medium text-white/60 transition-colors duration-200 data-hover:text-white"
              >
                Back to home
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <SiteFooter theme="black" />
    </div>
  )
}
