'use client'

import { PremierCtaButton } from '@/components/site/premier-cta-button'
import { Container } from '@/components/site/container'
import { Marquee, MarqueeItem } from '@/components/site/marquee'
import { FadeIn } from '@/components/site/motion'
import { SectionHeading, SectionLead } from '@/components/site/section'
import { demoUrl, trustBadges } from './data'

export function IntroSection() {
  return (
    <section className="relative z-10 -mt-[12lvh] overflow-hidden bg-page py-20 sm:py-28 lg:mt-0">
      <Container wide>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading>
              Industry-leading process-first business platform
            </SectionHeading>
            <SectionLead className="mt-5">
              Control operations, cash flow, and growth with one connected
              platform. Unite your teams and processes in a single easy-to-use,
              modern system.
            </SectionLead>
            <div className="mt-8 flex justify-center">
              <PremierCtaButton href={demoUrl}>Talk to Arivu</PremierCtaButton>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export function TrustMarqueeSection() {
  return (
    <section className="border-y border-border bg-surface-muted py-8">
      <Container wide>
        <FadeIn>
          <p className="mb-6 text-center text-[14px] font-semibold text-ink-secondary">
            Trusted by growing businesses
          </p>
        </FadeIn>
      </Container>
      <Marquee speed={35} pauseOnHover>
        {trustBadges.map((badge) => (
          <MarqueeItem key={badge}>
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2.5 text-[13px] font-semibold text-ink-secondary shadow-soft">
              {badge}
            </span>
          </MarqueeItem>
        ))}
      </Marquee>
    </section>
  )
}
