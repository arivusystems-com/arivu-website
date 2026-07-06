'use client'

import { Link } from '@/components/link'
import { Container } from '@/components/site/container'
import { FadeIn, Stagger, StaggerItem } from '@/components/site/motion'
import {
  CheckItem,
  Section,
  SectionHeading,
  SectionLabel,
  SectionLead,
} from '@/components/site/section'
import { demoUrl, idealFor, industries } from './data'

const industryIcons: Record<string, string> = {
  Retail:
    'M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 22a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z',
  'Real Estate':
    'M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m6 0h3a1 1 0 001-1V10',
  Education:
    'M12 14l9-5-9-5-9 5 9 5zm0 0v7',
  Healthcare:
    'M4.5 9.5h15M12 6v11M8.5 9.5V18M15.5 9.5V18',
  IT: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0-18h6m-6 0v6m6-6v6',
  'Professional Services':
    'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6',
  Manufacturing:
    'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3',
  Automotive:
    'M5 13l2-5h10l2 5M5 13v5a1 1 0 001 1h1m12-6v5a1 1 0 01-1 1h-1M7 17h10',
  Hospitality:
    'M3 10h18M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3M7 14h.01M17 14h.01',
  'Field Services':
    'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
}

export function AudienceSection() {
  return (
    <>
      <Section>
        <Container wide>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <SectionLabel>Built Around Process, Not Industry</SectionLabel>
              <SectionHeading className="mt-4">
                One platform. Different processes. Built to grow with your
                business.
              </SectionHeading>
              <SectionLead className="mt-5">
                Every industry is different. Every successful business follows a
                process. Arivu adapts to your workflows instead of rebuilding
                software for every industry.
              </SectionLead>
              <SectionLead className="mt-4">
                Whether you&apos;re in retail, real estate, education,
                healthcare, IT, professional services, manufacturing,
                automotive, hospitality, or field services, Arivu provides the
                same connected platform with processes tailored to the way you
                operate.
              </SectionLead>
            </FadeIn>

            <FadeIn delay={0.08}>
              <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {industries.map((industry) => (
                  <StaggerItem key={industry}>
                    <div className="flex flex-col items-center rounded-xl border border-border bg-surface-muted px-3 py-5 text-center transition-colors hover:border-brand/20 hover:bg-brand-light/40">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="size-6 text-ink-secondary"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={industryIcons[industry] ?? industryIcons.Retail}
                        />
                      </svg>
                      <p className="mt-2 text-[12px] font-medium text-ink-secondary">
                        {industry}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Link
                href={demoUrl}
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand data-hover:text-brand-hover"
              >
                See how Arivu fits your industry
                <span aria-hidden="true">→</span>
              </Link>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section muted>
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <SectionLabel>Who Arivu Is For</SectionLabel>
              <SectionLead className="mt-4 text-[17px] sm:text-lg">
                Arivu is built for organizations that want clarity without
                complexity.
              </SectionLead>
              <p className="mt-6 text-[15px] font-semibold text-ink">
                Ideal for:
              </p>
              <ul className="mt-4 space-y-3">
                {idealFor.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-border bg-surface p-8 shadow-card sm:p-10">
                <SectionLabel>Why Arivu</SectionLabel>
                <SectionHeading className="mt-4 text-[1.75rem] sm:text-[2rem]">
                  We don&apos;t build tools. We build business systems.
                </SectionHeading>
                <SectionLead className="mt-5">
                  Business growth isn&apos;t driven by more software. It&apos;s
                  driven by better processes, clearer execution, and connected
                  operations.
                </SectionLead>
                <SectionLead className="mt-4">
                  That&apos;s why every Arivu App is designed to work together as
                  part of one platform—helping your business operate with clarity
                  today and grow with confidence tomorrow.
                </SectionLead>
                <p className="mt-8 text-[16px] font-semibold text-ink">
                  If growth feels more complicated than it should, Arivu is built
                  for you.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
