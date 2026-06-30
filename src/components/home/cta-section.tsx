'use client'

import { ArrowIcon, Button } from '@/components/site/button'
import { Container } from '@/components/site/container'
import { FadeIn } from '@/components/site/motion'
import { SectionHeading, SectionLead } from '@/components/site/section'
import { demoUrl } from './data'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgb(255_255_255/0.12),transparent_40%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-[8%] hidden size-72 -translate-y-1/2 rounded-full border border-white/10 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-[12%] hidden size-52 -translate-y-1/2 rounded-full border border-white/10 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-[16%] hidden size-32 -translate-y-1/2 rounded-full border border-white/10 lg:block"
        aria-hidden="true"
      />

      <Container wide>
        <FadeIn>
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <SectionHeading light>Everything to Grow.</SectionHeading>
              <div className="mt-4 space-y-1">
                <SectionLead light>Run your business with clarity.</SectionLead>
                <SectionLead light>Scale with confidence.</SectionLead>
                <SectionLead light className="font-semibold text-white">
                  Grow with Arivu.
                </SectionLead>
              </div>
            </div>

            <Button href={demoUrl} variant="inverse" className="px-8 py-3">
              Talk to Arivu
              <ArrowIcon />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
