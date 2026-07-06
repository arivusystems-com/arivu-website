'use client'

import { clsx } from 'clsx'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { BracketLabel } from '@/components/site/bracket-label'
import { Container } from '@/components/site/container'
import { Stagger, StaggerItem } from '@/components/site/motion'
import { PremierCtaButton } from '@/components/site/premier-cta-button'
import { SectionHeading } from '@/components/site/section'

const features = [
  {
    title: 'One platform',
    description: 'All apps. One unified experience.',
    iconBg: 'bg-brand-light',
    iconColor: 'text-brand',
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <path
          d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'One process',
    description: 'Process-first design that matches how you work.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="18" cy="6" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="18" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M8 7.5l3.5 7M16 7.5l-3.5 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'One source',
    description: 'One source of truth across your entire business.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M5 6v6c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V6M5 12v6c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'One outcome',
    description: 'Clarity to execute. Confidence to grow.',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <path
          d="M4 18V6m0 12h16M8 14V10m4 6V8m4 4V12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 6l3 3-3 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const

export function PlatformSection() {
  let sectionRef = useRef<HTMLElement>(null)
  let prefersReducedMotion = useReducedMotion()
  let reduced = prefersReducedMotion ?? false

  let { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  let imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [24, -24])
  let imageOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.22],
    reduced ? [1, 1] : [0, 1],
  )
  let imageScale = useTransform(
    scrollYProgress,
    [0.08, 0.22],
    reduced ? [1, 1] : [0.96, 1],
  )

  return (
    <section
      ref={sectionRef}
      id="platform"
      className="relative overflow-hidden border-y border-border/70 bg-surface py-20 sm:py-28"
      aria-label="The Arivu Platform"
    >
      <Container wide className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1.2fr)] lg:gap-10 xl:gap-12">
          <Stagger className="max-w-[360px]">
            <StaggerItem>
              <BracketLabel>The Arivu Platform</BracketLabel>
            </StaggerItem>
            <StaggerItem>
              <SectionHeading className="mt-4 text-[1.65rem] sm:text-[1.85rem] lg:text-[1.95rem]">
                One platform.
                <br />
                <span className="text-brand">
                  Every essential{' '}
                  <span className="whitespace-nowrap">business process.</span>
                </span>
              </SectionHeading>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-4 text-[15px] leading-[1.65] text-ink-secondary">
                All your apps. One connected platform. Built around how your business
                works.
              </p>
            </StaggerItem>

            <StaggerItem>
              <ul className="mt-6 divide-y divide-border">
                {features.map((feature) => (
                  <li
                    key={feature.title}
                    className="group flex gap-3.5 py-3.5 first:pt-0 last:pb-0"
                  >
                    <span
                      className={clsx(
                        'flex size-9 shrink-0 items-center justify-center rounded-xl',
                        feature.iconBg,
                        feature.iconColor,
                      )}
                    >
                      {feature.icon}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-[15px] font-bold text-ink">{feature.title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-ink-secondary">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem>
              <PremierCtaButton href="#apps" className="mt-6">
                See how everything connects
              </PremierCtaButton>
            </StaggerItem>
          </Stagger>

          <motion.div
            style={{ opacity: imageOpacity, y: imageY, scale: imageScale }}
            className="min-w-0 origin-center lg:-mr-2 xl:-mr-4"
          >
            <Image
              src="/homepage-images/platform.png"
              alt="The Arivu Platform stack showing business apps, platform services, and shared data foundation"
              width={2926}
              height={2048}
              className="h-auto w-full lg:scale-[1.05] lg:origin-center"
              sizes="(max-width: 1024px) 100vw, 820px"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
