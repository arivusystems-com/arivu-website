'use client'

import { BracketLabel } from '@/components/site/bracket-label'
import { Container } from '@/components/site/container'
import { FaqAccordion } from '@/components/site/faq-accordion'
import { FadeIn } from '@/components/site/motion'
import { SectionHeading, SectionLead } from '@/components/site/section'
import { faqItems } from './data'

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-y border-border/70 bg-gradient-to-b from-surface-muted via-surface to-surface py-20 sm:py-28"
      aria-label="Frequently asked questions"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgb(79_70_229/0.06),transparent)]"
        aria-hidden="true"
      />

      <Container wide className="relative">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <BracketLabel>Questions &amp; Answers</BracketLabel>
            <SectionHeading className="mt-4">
              Frequently asked{' '}
              <span className="text-brand">questions</span>
            </SectionHeading>
            {/* <SectionLead className="mx-auto mt-5 max-w-2xl">
              Everything you need to know about Arivu — from how the platform
              works to what makes it different.
            </SectionLead> */}
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-12 max-w-3xl lg:max-w-4xl">
            <FaqAccordion items={faqItems} />
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
