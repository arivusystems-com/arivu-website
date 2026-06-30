'use client'

import { motion } from 'framer-motion'
import { easeOut } from '@/components/site/motion'
import { businessJourney } from './data'

export function HeroJourneyStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.35, ease: easeOut }}
      className="mt-20 sm:mt-24 lg:mt-32 lg:max-[2559px]:mt-auto lg:max-[2559px]:pt-16"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-6">
        <p className="shrink-0 text-[11px] font-semibold tracking-[0.12em] text-ink-tertiary uppercase">
          The Journey
        </p>

        <div
          className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-2 sm:gap-x-2.5"
          aria-label="Business journey from enquiry to analytics"
        >
          {businessJourney.map((step, index) => (
            <span key={step} className="inline-flex items-center gap-1.5 sm:gap-2">
              <span className="text-[12px] font-medium tracking-[0.01em] text-ink-secondary sm:text-[13px]">
                {step}
              </span>
              {index < businessJourney.length - 1 ? (
                <span
                  className="text-[11px] text-ink-tertiary/55 select-none sm:text-[12px]"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
