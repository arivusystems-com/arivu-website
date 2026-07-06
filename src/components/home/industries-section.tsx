'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { clsx } from 'clsx'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Link } from '@/components/link'
import { Container } from '@/components/site/container'
import { easeOut, FadeIn } from '@/components/site/motion'
import { CheckItem, SectionHeading, SectionLead } from '@/components/site/section'
import { demoUrl, industriesMeta, industryTabs } from './data'

const cardVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
    scale: 0.985,
    filter: 'blur(4px)',
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -32 : 32,
    scale: 0.99,
    filter: 'blur(2px)',
    transition: {
      duration: 0.32,
      ease: easeOut,
    },
  }),
}

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.12,
    },
  },
}

const contentItemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: easeOut },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.18, ease: easeOut },
  },
}

function BrowserMock({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-[0_8px_32px_rgb(26_31_54/0.12)]',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border/80 bg-[#f8f9fb] px-3 py-2">
        <span className="size-2 rounded-full bg-[#ff5f57]" />
        <span className="size-2 rounded-full bg-[#febc2e]" />
        <span className="size-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="480px" />
      </div>
    </div>
  )
}

export function IndustriesSection() {
  let [selectedIndex, setSelectedIndex] = useState(0)
  let [direction, setDirection] = useState(0)
  let activeIndustry = industryTabs[selectedIndex]!
  let headingParts = industriesMeta.heading.split(industriesMeta.headingHighlight)

  function handleTabChange(index: number) {
    setDirection(index > selectedIndex ? 1 : -1)
    setSelectedIndex(index)
  }

  return (
    <section id="industries" className="bg-surface py-20 sm:py-28">
      <Container wide>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading>
              {headingParts[0]}
              <span className="text-brand">{industriesMeta.headingHighlight}</span>
            </SectionHeading>
            <SectionLead className="mx-auto mt-5 max-w-2xl">
              {industriesMeta.subheading}
            </SectionLead>
          </div>
        </FadeIn>

        <TabGroup
          selectedIndex={selectedIndex}
          onChange={handleTabChange}
          className="mt-12 lg:mt-16"
        >
          <FadeIn delay={0.05}>
            <TabList className="mx-auto flex max-w-5xl gap-1 overflow-x-auto rounded-2xl bg-surface-muted p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:rounded-full sm:p-2 [&::-webkit-scrollbar]:hidden">
              {industryTabs.map((industry, index) => (
                <Tab
                  key={industry.id}
                  className={({ selected }) =>
                    clsx(
                      'relative flex shrink-0 cursor-pointer items-center gap-2 rounded-xl px-3 py-2.5 text-left transition-colors duration-300 focus:outline-none sm:rounded-full sm:px-4 sm:py-2',
                      selected ? 'text-white' : 'text-ink-secondary data-hover:text-ink',
                    )
                  }
                >
                  {selectedIndex === index && (
                    <motion.span
                      layoutId="industry-tab-pill"
                      className="absolute inset-0 rounded-xl bg-ink shadow-soft sm:rounded-full"
                      transition={{ type: 'spring', bounce: 0.12, duration: 0.55 }}
                    />
                  )}
                  <span
                    className={clsx(
                      'relative z-10 text-[11px] font-medium tabular-nums sm:text-[12px]',
                      selectedIndex === index ? 'text-white/60' : 'text-ink-tertiary',
                    )}
                  >
                    {industry.number}
                  </span>
                  <span className="relative z-10 text-[13px] font-semibold whitespace-nowrap sm:text-[14px]">
                    {industry.label}
                  </span>
                </Tab>
              ))}
            </TabList>
          </FadeIn>

          <TabPanels className="mt-8 sm:mt-10">
            <TabPanel static className="focus:outline-none">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={activeIndustry.id}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card"
                >
                  <div className="grid lg:grid-cols-2">
                    <motion.div
                      key={`content-${activeIndustry.id}`}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14"
                    >
                      <motion.span
                        variants={contentItemVariants}
                        className="inline-flex w-fit rounded-full bg-brand-light px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-brand uppercase"
                      >
                        {activeIndustry.tag}
                      </motion.span>
                      <motion.h3
                        variants={contentItemVariants}
                        className="mt-5 text-[1.65rem] leading-[1.2] font-bold tracking-[-0.02em] text-ink sm:text-[1.85rem] lg:text-[2rem]"
                      >
                        {activeIndustry.heading}
                      </motion.h3>
                      <motion.p
                        variants={contentItemVariants}
                        className="mt-4 text-[15px] leading-7 text-ink-secondary sm:text-[16px]"
                      >
                        {activeIndustry.description}
                      </motion.p>
                      <motion.ul variants={contentItemVariants} className="mt-6 space-y-3">
                        {activeIndustry.features.map((feature) => (
                          <CheckItem key={feature}>{feature}</CheckItem>
                        ))}
                      </motion.ul>
                      <motion.div variants={contentItemVariants}>
                        <Link
                          href={demoUrl}
                          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-white transition-colors data-hover:bg-ink/90"
                        >
                          {activeIndustry.cta}
                          <span aria-hidden="true">→</span>
                        </Link>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      key={`panel-${activeIndustry.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.45, ease: easeOut }}
                      className="relative flex min-h-[280px] items-center justify-center overflow-hidden px-6 py-10 sm:min-h-[360px] sm:px-10 sm:py-12 lg:min-h-[420px] lg:px-8 lg:py-10"
                      style={{ background: activeIndustry.panelBackground }}
                    >
                      <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full max-w-[520px]"
                      >
                        <BrowserMock
                          src={activeIndustry.image.src}
                          alt={activeIndustry.image.alt}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}
