'use client'

import Image from 'next/image'
import { Container } from '@/components/site/container'
import { FadeIn } from '@/components/site/motion'
import {
  CheckItem,
  SectionHeading,
  SectionLabel,
  SectionLead,
} from '@/components/site/section'
import { platformPillars, workspaceScreenshot } from './data'

export function WorkspaceProofSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container wide>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated">
              <div className="flex items-center gap-2 border-b border-border bg-surface-muted px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
                <div className="mx-auto rounded-md bg-surface px-3 py-1 text-[11px] text-ink-tertiary ring-1 ring-border">
                  app.arivusystems.com
                </div>
              </div>
              <Image
                src={workspaceScreenshot.src}
                alt={workspaceScreenshot.alt}
                width={workspaceScreenshot.width}
                height={workspaceScreenshot.height}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 680px"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <SectionLabel>Connected Applications</SectionLabel>
            <SectionHeading className="mt-4">
              One connected system to run your business with clarity and grow
              with confidence.
            </SectionHeading>
            <SectionLead className="mt-5">
              Every Arivu App is built on the same platform and shares the same
              philosophy.
            </SectionLead>
            <ul className="mt-8 space-y-3">
              {platformPillars.map((pillar) => (
                <CheckItem key={pillar}>{pillar}</CheckItem>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
