'use client'

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { PremierCtaButton } from '@/components/site/premier-cta-button'
import { SiteNav } from '@/components/site/nav'
import { easeOut } from '@/components/site/motion'
import { demoUrl, heroWorkspace } from './data'

const loadEase = easeOut

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: loadEase },
  },
}

const productEnter: Variants = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: loadEase, delay: 0.55 },
  },
}

function HeroVideoBackground({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean | null
}) {
  return (
    <div className="hero-video-wrap absolute inset-0 overflow-hidden bg-black" aria-hidden="true">
      <video
        autoPlay={!prefersReducedMotion}
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 size-full object-cover [transform:translateZ(0)] [backface-visibility:hidden]"
        src="/motion/herobg.mp4"
      />
    </div>
  )
}

function measureLayoutInsetX() {
  let maxWidth = 1240
  let padding = window.innerWidth >= 1024 ? 32 : 16
  let cardWidth = Math.min(maxWidth, window.innerWidth - padding * 2)
  return Math.max(padding, (window.innerWidth - cardWidth) / 2)
}

function getHeroCardTop() {
  return window.innerWidth >= 1024 ? 92 : 64
}

function useIsLgUp() {
  let [isLgUp, setIsLgUp] = useState(false)

  useEffect(() => {
    let media = window.matchMedia('(min-width: 1024px)')
    let update = () => setIsLgUp(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return isLgUp
}

// Animations span nearly the full hero scroll — no static hold phase.
const CARD_EXPAND_SCROLL = 0.32
const PRODUCT_EXPAND_START = 0.15
const PRODUCT_EXPAND_END = 0.95
const TEXT_FADE_START = 0.05
const TEXT_FADE_END = 0.3
const HERO_EXIT_START = 0.88

function scrollProgressToHeroT(progress: number, reduced: boolean) {
  if (reduced) return 0
  return Math.min(Math.max(progress / CARD_EXPAND_SCROLL, 0), 1)
}

function scrollProgressToHeroExitT(progress: number, reduced: boolean) {
  if (reduced) return 0
  return Math.min(Math.max((progress - HERO_EXIT_START) / (1 - HERO_EXIT_START), 0), 1)
}

export function HeroSection() {
  let containerRef = useRef<HTMLDivElement>(null)
  let cardRef = useRef<HTMLDivElement>(null)
  let prefersReducedMotion = useReducedMotion()
  let reducedMotion = prefersReducedMotion ?? false
  let isLgUp = useIsLgUp()

  let { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  function setHeroScrollT(progress: number) {
    let card = cardRef.current
    let container = containerRef.current
    if (!card || !container) return

    let t = scrollProgressToHeroT(progress, reducedMotion)
    let exitT = scrollProgressToHeroExitT(progress, reducedMotion)
    container.style.setProperty('--hero-scroll-t', String(t))
    container.style.setProperty('--hero-exit-t', String(exitT))
    card.style.setProperty('--hero-scroll-t', String(t))
    card.style.setProperty('--hero-exit-t', String(exitT))

    if (t === 0) {
      card.style.removeProperty('top')
      card.style.removeProperty('bottom')
      card.style.removeProperty('left')
      card.style.removeProperty('right')
      card.style.removeProperty('border-radius')
      card.style.removeProperty('box-shadow')
      return
    }

    let insetX = measureLayoutInsetX()
    card.style.top = `${getHeroCardTop() * (1 - t)}px`
    card.style.bottom = '0'
    card.style.left = `${insetX * (1 - t)}px`
    card.style.right = `${insetX * (1 - t)}px`
    card.style.borderRadius = `${24 * (1 - t)}px`

    // Drop frame shadow once full-bleed — avoids a semi-transparent gray band over video on exit
    if (t >= 1 || exitT > 0) {
      card.style.boxShadow = 'none'
    } else {
      card.style.removeProperty('box-shadow')
    }
  }

  useLayoutEffect(() => {
    if (window.scrollY === 0) {
      let card = cardRef.current
      let container = containerRef.current
      container?.style.setProperty('--hero-scroll-t', '0')
      container?.style.setProperty('--hero-exit-t', '0')
      card?.style.setProperty('--hero-scroll-t', '0')
      card?.style.setProperty('--hero-exit-t', '0')
      card?.style.removeProperty('top')
      card?.style.removeProperty('bottom')
      card?.style.removeProperty('left')
      card?.style.removeProperty('right')
      card?.style.removeProperty('border-radius')
      card?.style.removeProperty('box-shadow')
      return
    }

    let frame = requestAnimationFrame(() => {
      setHeroScrollT(scrollYProgress.get())
    })

    return () => cancelAnimationFrame(frame)
  }, [reducedMotion, scrollYProgress])

  useMotionValueEvent(scrollYProgress, 'change', setHeroScrollT)

  let textY = useTransform(
    scrollYProgress,
    [0, TEXT_FADE_START, TEXT_FADE_END],
    prefersReducedMotion ? ['0rem', '0rem', '0rem'] : ['1.5rem', '1rem', '-4rem'],
  )
  let textOpacity = useTransform(
    scrollYProgress,
    [0, TEXT_FADE_START, 0.2, TEXT_FADE_END],
    prefersReducedMotion ? [1, 1, 1, 1] : [1, 1, 0.35, 0],
  )

  let heroExitY = useTransform(
    scrollYProgress,
    [HERO_EXIT_START, 1],
    prefersReducedMotion ? ['0vh', '0vh'] : ['0vh', '-6vh'],
  )

  // Product: peek from below — mobile shows a larger slice at rest
  let productY = useTransform(
    scrollYProgress,
    [0, PRODUCT_EXPAND_START, PRODUCT_EXPAND_END],
    prefersReducedMotion
      ? ['0%', '0%', '0%']
      : isLgUp
        ? ['48%', '48%', '10%']
        : ['22%', '22%', '6%'],
  )
  let productScale = useTransform(
    scrollYProgress,
    [0, PRODUCT_EXPAND_START, PRODUCT_EXPAND_END],
    prefersReducedMotion
      ? [0.72, 0.72, 0.82]
      : isLgUp
        ? [0.72, 0.72, 0.82]
        : [0.92, 0.92, 1],
  )
  let productWidth = useTransform(
    scrollYProgress,
    [0, PRODUCT_EXPAND_START, PRODUCT_EXPAND_END],
    prefersReducedMotion
      ? ['92%', '92%', '93%']
      : isLgUp
        ? ['92%', '92%', '93%']
        : ['100%', '100%', '100%'],
  )
  let productPadding = useTransform(
    scrollYProgress,
    [0, PRODUCT_EXPAND_START, PRODUCT_EXPAND_END],
    prefersReducedMotion
      ? ['8%', '8%', '11%']
      : isLgUp
        ? ['8%', '8%', '11%']
        : ['2%', '2%', '6%'],
  )

  return (
    <>
      <SiteNav />

      <div
        id="hero-scroll"
        ref={containerRef}
        className="relative h-[118lvh] w-full bg-black sm:h-[124lvh] lg:h-[145lvh]"
      >
        <div className="sticky top-0 h-[100lvh] min-h-[100dvh] overflow-hidden">
          <HeroVideoBackground prefersReducedMotion={prefersReducedMotion} />

          {/* Expanding hero card — transparent; page frame via box-shadow in CSS */}
          <motion.div
            ref={cardRef}
            style={{ y: heroExitY }}
            className="hero-card absolute z-[1] will-change-[top,bottom,left,right,border-radius,transform]"
          >
            <div className="absolute inset-0 overflow-hidden [border-radius:inherit]">
              <div className="relative z-10 flex h-full min-h-0 flex-col">
              {/* Workspace — full card layer so it can expand to the top on scroll */}
              <motion.div
                style={{ paddingBottom: productPadding }}
                className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center overflow-hidden select-none"
              >
                <motion.div
                  variants={reducedMotion ? undefined : productEnter}
                  initial={reducedMotion ? false : 'hidden'}
                  animate={reducedMotion ? undefined : 'visible'}
                  className="relative w-full flex justify-center"
                >
                  <motion.div
                    style={{
                      y: productY,
                      scale: productScale,
                      width: productWidth,
                    }}
                    className="relative origin-bottom overflow-hidden rounded-t-2xl border border-white/10 shadow-[0_-24px_80px_rgb(0_0_0/0.5)] will-change-transform sm:rounded-t-[1.25rem]"
                  >
                    <Image
                      src={heroWorkspace.src}
                      alt={heroWorkspace.alt}
                      width={heroWorkspace.width}
                      height={heroWorkspace.height}
                      className="block h-auto w-full"
                      sizes="100vw"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className="absolute inset-x-0 top-0 z-20 flex flex-col items-center px-4 pt-6 pb-2 text-center text-white sm:px-6 sm:pt-10 sm:pb-4 lg:pt-11"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[min(52%,22rem)] bg-gradient-to-b from-black/50 via-black/20 to-transparent lg:hidden"
                  aria-hidden="true"
                />
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                  className="relative flex max-w-3xl flex-col items-center"
                >
                  <motion.span variants={fadeUp} className="inline-flex text-white">
                    <CloudMark />
                  </motion.span>

                  <motion.p
                    variants={fadeUp}
                    className="mt-2 text-[13px] font-light sm:mt-4 sm:text-[15px] lg:text-[17px]"
                  >
                    #1 Process-first Business Platform
                  </motion.p>

                  <motion.h1
                    variants={fadeUp}
                    className="mt-1.5 text-[30px] leading-[1.08] font-semibold tracking-[-0.02em] sm:mt-2 sm:text-[40px] sm:leading-10 lg:mt-4 lg:text-[56px] lg:leading-[1.05]"
                  >
                    Everything to Grow.
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="mt-3 max-w-xl px-1 text-[13px] leading-relaxed font-light sm:mt-4 sm:px-0 lg:text-[17px] lg:leading-7"
                  >
                    One connected system to run your business with clarity and grow with confidence.

                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="mt-4 w-full max-w-[17.5rem] sm:mt-6 sm:w-72 lg:mt-8 lg:w-auto"
                  >
                    <PremierCtaButton href={demoUrl}>
                      Get a Demo
                    </PremierCtaButton>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

function CloudMark() {
  return (
    <svg
      viewBox="0 0 62 27"
      fill="none"
      className="h-7 w-8 lg:h-8"
      aria-hidden="true"
    >
      <g fill="currentColor" clipPath="url(#arivu-cloud)">
        <path d="M8.425 26.614c4.653 0 8.424-3.723 8.424-8.316s-3.771-8.316-8.424-8.316S0 13.705 0 18.298s3.772 8.316 8.425 8.316M62 18.298c0-4.593-3.772-8.316-8.425-8.316q-.665.001-1.3.098C50.714 4.618 45.63.614 39.596.614c-5.607 0-10.394 3.459-12.295 8.333l-8.77 17.666h35.38v-.007C58.409 26.432 62 22.78 62 18.297" />
      </g>
      <defs>
        <clipPath id="arivu-cloud">
          <path fill="#fff" d="M0 .614h62v26H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
