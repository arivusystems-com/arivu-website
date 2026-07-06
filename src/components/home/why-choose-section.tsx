'use client'

import { clsx } from 'clsx'
import { Container } from '@/components/site/container'
import { FadeIn, Stagger, StaggerItem } from '@/components/site/motion'
import {
  Section,
  SectionHeading,
  SectionLabel,
  SectionLead,
} from '@/components/site/section'
import { whyChoosePrinciples } from './data'

const iconColors = [
  'bg-rose-100 text-rose-600',
  'bg-sky-100 text-sky-600',
  'bg-emerald-100 text-emerald-600',
  'bg-amber-100 text-amber-600',
  'bg-violet-100 text-violet-600',
  'bg-blue-100 text-blue-600',
]

export function WhyChooseSection() {
  return (
    <Section muted>
      <Container wide>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <SectionLabel>Why Businesses Choose Arivu</SectionLabel>
            <SectionHeading className="mt-4">
              Clarity that drives adoption.
            </SectionHeading>
            <SectionLead className="mt-5">
              Most business software is powerful—but difficult to implement and
              even harder to adopt. Arivu takes a different approach.
            </SectionLead>
          </FadeIn>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoosePrinciples.map((principle, index) => (
            <StaggerItem key={principle}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-card">
                <span
                  className={clsx(
                    'inline-flex size-10 items-center justify-center rounded-xl',
                    iconColors[index],
                  )}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="mt-4 text-[16px] font-bold text-ink">
                  {principle}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.08}>
          <p className="mx-auto mt-12 max-w-xl text-center text-[16px] font-semibold text-ink">
            Because the best system is the one your team actually uses.
          </p>
        </FadeIn>
      </Container>
    </Section>
  )
}
