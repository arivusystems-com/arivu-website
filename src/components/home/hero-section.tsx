'use client'

import { motion } from 'framer-motion'
import { ArrowIcon, Button, PlayIcon } from '@/components/site/button'
import { Container } from '@/components/site/container'
import { easeOut } from '@/components/site/motion'
import { SiteNav, SiteNavSpacer } from '@/components/site/nav'
import { demoUrl } from './data'
import { HeroJourneyStrip } from './hero-journey-strip'
import { OperatingSystemIllustration } from './operating-system-illustration'

export function HeroSection() {
  return (
    <>
      <SiteNav />
      <SiteNavSpacer />

      <div className="relative flex w-full flex-col overflow-x-clip bg-[#fafbff] lg:max-[2559px]:min-h-[calc(100vh-72px)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgb(79_70_229/0.07),transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 h-[280px] w-[420px] opacity-35"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgb(79 70 229 / 0.14) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 100% 100%, black, transparent)',
          }}
        />

        <Container wide className="relative flex flex-col justify-center py-10 sm:py-12 lg:max-[2559px]:flex-1 lg:max-[2559px]:py-14 lg:max-[2559px]:pb-16">
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:grid-cols-[minmax(0,1fr)_600px] xl:gap-10">
            {/* Left column — copy and CTAs */}
            <div className="min-w-0 max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: easeOut }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-brand uppercase sm:text-[12px]">
                  <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                  Process-first platform
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
                className="mt-5 text-[3rem] leading-[1.05] font-bold tracking-[-0.035em] text-balance text-ink sm:mt-6 sm:text-[3.625rem] lg:mt-7 lg:text-[4.25rem] xl:text-[4.5rem]"
              >
                Everything to{' '}
                <span className="text-brand">Grow.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
                className="mt-4 max-w-sm text-[17px] leading-[1.55] font-semibold text-ink sm:mt-5 sm:text-[18px] lg:mt-6 lg:text-[19px] lg:leading-[1.5]"
              >
                One connected system to run your business with clarity and grow
                with confidence.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
                className="mt-3 max-w-sm text-[16px] leading-[1.65] text-ink-secondary sm:mt-4 sm:text-[17px] lg:mt-5 lg:text-[18px] lg:leading-[1.6]"
              >
                Arivu connects your people, processes, and applications into one
                operating system - so your business runs better, every day.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
                className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center lg:mt-8"
              >
                <Button href={demoUrl} className="px-6">
                  Talk to Arivu
                  <ArrowIcon />
                </Button>
                <Button href="#platform" variant="secondary" className="px-6">
                  <span className="flex size-6 items-center justify-center rounded-full border border-border bg-surface-muted text-brand">
                    <PlayIcon className="size-3" />
                  </span>
                  See the platform
                </Button>
              </motion.div>
            </div>

            {/* Right column — illustration */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: easeOut }}
              className="mx-auto w-full min-w-0 max-w-[600px] lg:mx-0 lg:max-w-none lg:self-center"
            >
              <OperatingSystemIllustration />
            </motion.div>
          </div>

          <HeroJourneyStrip />
        </Container>
      </div>
    </>
  )
}
