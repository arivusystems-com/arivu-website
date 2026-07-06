'use client'

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { BracketLabel } from '@/components/site/bracket-label'
import { Container } from '@/components/site/container'
import { FadeIn } from '@/components/site/motion'
import { PremierCtaButton } from '@/components/site/premier-cta-button'
import { SectionHeading, SectionLead } from '@/components/site/section'
import { demoUrl, transformationMeta } from './data'
import { TransformationStage } from './transformation-visual'

export function TransformationSection() {
  let containerRef = useRef<HTMLElement>(null)
  let prefersReducedMotion = useReducedMotion()
  let reduced = prefersReducedMotion ?? false
  let staticProgress = useMotionValue(1)

  let { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  let stageProgress = reduced ? staticProgress : scrollYProgress

  let stageOpacity = useTransform(
    stageProgress,
    [0.05, 0.22],
    reduced ? [1, 1] : [0, 1],
  )
  let stageY = useTransform(
    stageProgress,
    [0.05, 0.22],
    reduced ? [0, 0] : [36, 0],
  )

  return (
    <section
      ref={containerRef}
      id="transformation"
      className="relative overflow-hidden border-y border-border/70 bg-gradient-to-br from-surface-muted via-[#f6f7fc] to-brand-light/35 py-20 sm:py-28"
      aria-label="From disconnected work to connected growth"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_78%_48%,rgb(79_70_229/0.08),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_36%_30%_at_12%_22%,rgb(224_231_255/0.45),transparent)]"
        aria-hidden="true"
      />

      <Container wide className="relative">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <BracketLabel>The Transformation</BracketLabel>
            <SectionHeading className="mt-4">
              From disconnected work to{' '}
              <span className="text-brand">connected growth.</span>
            </SectionHeading>
            <SectionLead className="mx-auto mt-5 max-w-2xl">
              {transformationMeta.lead}
            </SectionLead>
          </div>
        </FadeIn>

        <motion.div
          style={{ opacity: stageOpacity, y: stageY }}
          className="relative mt-12 w-full sm:mt-16"
        >
          <TransformationStage progress={stageProgress} reduced={reduced} />
        </motion.div>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-6 text-center sm:mt-12">
            <p className="max-w-xl text-[15px] leading-relaxed text-ink-secondary sm:text-[16px]">
              {transformationMeta.footer.text}
            </p>
            <PremierCtaButton href={demoUrl}>
              {transformationMeta.footer.cta}
            </PremierCtaButton>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
