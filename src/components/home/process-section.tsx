'use client'

import { Container } from '@/components/site/container'
import { FadeIn } from '@/components/site/motion'
import {
  Section,
  SectionHeading,
  SectionLabel,
  SectionLead,
} from '@/components/site/section'
import { howItWorks } from './data'

const stepIcons = [
  'M12 6v6l4 2',
  'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
  'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
]

export function ProcessSection() {
  return (
    <Section id="how-it-works" muted>
      <Container wide>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeIn>
            <SectionLabel>Built for the Way Your Business Works</SectionLabel>
            <SectionHeading className="mt-4">
              Every business follows a process.
            </SectionHeading>
            <SectionLead className="mt-5">
              Arivu helps you define, standardize, and improve that process
              without forcing you into rigid software.
            </SectionLead>
            <SectionLead className="mt-4">
              Because software should adapt to your business—not the other way
              around.
            </SectionLead>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
              <SectionLabel>How Arivu Works</SectionLabel>
              <div className="mt-8 grid gap-8 sm:grid-cols-3">
                {howItWorks.map((step, index) => (
                  <div key={step.title} className="relative text-center">
                    {index < howItWorks.length - 1 && (
                      <div
                        className="absolute top-7 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-border sm:block"
                        aria-hidden="true"
                      />
                    )}
                    <div className="mx-auto flex size-14 items-center justify-center rounded-full border-2 border-brand/20 bg-brand-light">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="size-6 text-brand"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={stepIcons[index]}
                        />
                      </svg>
                    </div>
                    <p className="mt-4 text-[11px] font-bold tracking-wide text-brand uppercase">
                      Step {step.step}
                    </p>
                    <p className="mt-1 text-[16px] font-bold text-ink">
                      {step.title}
                    </p>
                    <p className="mt-2 text-[13px] leading-6 text-ink-secondary">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
