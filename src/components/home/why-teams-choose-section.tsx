'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/site/container'
import { easeOut, FadeIn, Stagger, StaggerItem } from '@/components/site/motion'
import { PremierCtaButton } from '@/components/site/premier-cta-button'
import { demoUrl, whyTeamsChooseCards, whyTeamsChooseMeta } from './data'

type CardIcon =
  | 'process'
  | 'day-one'
  | 'workflows'
  | 'teams'
  | 'connected'
  | 'growth'

const cardIcons: Record<(typeof whyTeamsChooseCards)[number]['id'], CardIcon> = {
  'process-first': 'process',
  'ready-day-one': 'day-one',
  'your-workflows': 'workflows',
  'everyday-teams': 'teams',
  'connected-apps': 'connected',
  'long-term-growth': 'growth',
}

function FeatureIconMark({ icon }: { icon: CardIcon }) {
  return (
    <div className="mt-1 w-6 shrink-0 text-[#e4e7f2]/80" aria-hidden="true">
      {icon === 'process' ? (
        <svg viewBox="0 0 28 28" fill="none" className="size-6">
          <circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="14" cy="14" r="1.5" fill="currentColor" />
        </svg>
      ) : icon === 'day-one' ? (
        <svg viewBox="0 0 28 28" fill="none" className="size-6">
          <rect x="5" y="6" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 11h18M9 4v4M19 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 16h2.5v2.5H10z" fill="currentColor" />
        </svg>
      ) : icon === 'workflows' ? (
        <svg viewBox="0 0 28 28" fill="none" className="size-6">
          <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="16" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="4" y="16" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="16" y="16" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ) : icon === 'teams' ? (
        <svg viewBox="0 0 28 28" fill="none" className="size-6">
          <path
            d="M11 21h6M11.5 24h5M14 4a7 7 0 00-3.5 13.07V19h7v-1.93A7 7 0 0014 4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : icon === 'connected' ? (
        <svg viewBox="0 0 28 28" fill="none" className="size-6">
          <path
            d="M11 15a6 6 0 008.8.65l3.6-3.6a6 6 0 00-8.48-8.48l-2.06 2.06M17 13a6 6 0 00-8.8-.65l-3.6 3.6a6 6 0 008.48 8.48l2.06-2.06"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 28 28" fill="none" className="size-6">
          <path
            d="M6 22V6M6 22h18M9 17v-3.5M14 17V10M19 17v-2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  )
}

function TitleGradientBorder() {
  return (
    <motion.div
      className="h-px w-20 origin-left bg-gradient-to-r from-[#5400E9] to-[#936AA7]"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: easeOut, delay: 0.12 }}
      aria-hidden="true"
    />
  )
}

function formatCardDescription(
  description: string,
  bullets: readonly string[],
) {
  return `${description} ${bullets.join('. ')}.`
}

export function WhyTeamsChooseSection() {
  let headingParts = whyTeamsChooseMeta.heading.split(whyTeamsChooseMeta.headingHighlight)

  return (
    <section
      id="why-arivu"
      className="scroll-mt-20 bg-black pt-24 pb-24 text-white lg:pt-64 lg:pb-32"
      aria-label="Why teams choose Arivu"
    >
      <Container wide>
        <FadeIn>
          <div className="w-fit rounded-full bg-white/10 px-4 py-2 text-[12px] leading-[15.6px] font-normal backdrop-blur-sm">
            <span>[ {whyTeamsChooseMeta.eyebrow} ]</span>
          </div>
        </FadeIn>

        <Stagger className="mt-0 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <StaggerItem>
            <h2 className="mt-4 text-balance text-[32px] leading-[41.6px] font-normal tracking-normal lg:mt-6 lg:text-[56px] lg:leading-[72px]">
              {headingParts[0]}
              <span className="text-[#a5b4fc]">{whyTeamsChooseMeta.headingHighlight}</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <PremierCtaButton href={demoUrl} className="shrink-0">
              Book a demo
            </PremierCtaButton>
          </StaggerItem>
        </Stagger>

        <Stagger className="mt-12 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-3 lg:gap-20">
          {whyTeamsChooseCards.map((card) => (
            <StaggerItem key={card.id}>
              <div className="flex items-start gap-4">
                <FeatureIconMark icon={cardIcons[card.id]} />
                <div className="space-y-6">
                  <h3 className="text-[24px] leading-[31.2px] font-normal text-white">
                    {card.title}
                  </h3>
                  <TitleGradientBorder />
                  <p className="text-pretty text-[14px] leading-[21px] font-light text-[#e4e7f2] lg:text-[16px] lg:leading-6">
                    {formatCardDescription(card.description, card.bullets)}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

/*
 * ─── Previous carousel section (commented out) ───────────────────────────────
 *
 * 'use client'
 *
 * import { clsx } from 'clsx'
 * import {
 *   motion,
 *   useMotionValue,
 *   useReducedMotion,
 *   useScroll,
 *   useTransform,
 * } from 'framer-motion'
 * import { useCallback, useEffect, useRef, useState } from 'react'
 * import { whyTeamsChooseCards, whyTeamsChooseMeta } from './data'
 * import { whyTeamsChooseIllustrations } from './why-teams-choose-visuals'
 *
 * ... (full carousel implementation preserved in git history)
 */
