'use client'

import { clsx } from 'clsx'
import { Link } from '@/components/link'
import { Container } from '@/components/site/container'
import { FadeIn, Stagger, StaggerItem } from '@/components/site/motion'
import {
  Section,
  SectionHeading,
  SectionLabel,
  SectionLead,
} from '@/components/site/section'
import { apps } from './data'

export function PlatformSection() {
  return (
    <Section id="platform">
      <Container wide>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn className="max-w-2xl">
            <SectionLabel>The Arivu Platform</SectionLabel>
            <SectionHeading className="mt-4">
              One platform. Every essential business process.
            </SectionHeading>
            <div className="mt-5 space-y-4">
              <SectionLead>
                Arivu Apps are designed around how businesses actually
                work—not how software expects them to.
              </SectionLead>
              <SectionLead>
                Every application is process-first, easy to adopt, and built on
                the same connected platform.
              </SectionLead>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Link
              href="#apps"
              className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-semibold text-brand data-hover:text-brand-hover"
            >
              Explore all applications
              <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>

        <SectionLead className="mt-6 max-w-3xl">
          Whether you&apos;re managing sales, projects, field operations, audits,
          inventory, or support, every Arivu App works together as one system.
        </SectionLead>

        <div id="apps" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Stagger className="contents">
          {apps.map((app) => (
            <StaggerItem key={app.name}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-elevated">
                <span
                  className={clsx(
                    'inline-flex size-11 items-center justify-center rounded-xl text-[16px] font-bold',
                    app.color,
                  )}
                >
                  {app.name.charAt(0)}
                </span>
                <p className="mt-4 text-[17px] font-bold text-ink">
                  {app.name}
                </p>
                <p className="mt-2 text-[14px] leading-7 text-ink-secondary">
                  {app.description}
                </p>
              </div>
            </StaggerItem>
          ))}
          </Stagger>
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-8">
            {['One platform.', 'One process.', 'One source of clarity.'].map(
              (line) => (
                <p key={line} className="text-[15px] font-semibold text-ink">
                  {line}
                </p>
              ),
            )}
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
