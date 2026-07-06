'use client'

import { clsx } from 'clsx'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Container } from '@/components/site/container'
import { differentiators, differentiatorsMeta } from './data'

const NAV_OFFSET = 72
const ARIVU_MARK = '/logo/Logo_light.svg'

const heroHeadingClassName =
  'relative z-10 w-max max-w-[92vw] text-center font-normal leading-snug tracking-[-0.03em] text-white [text-shadow:0_0_1px_rgb(0_0_0/0.95),0_2px_18px_rgb(0_0_0/0.85),0_0_48px_rgb(8_0_26/0.95)]'

const leadClassName =
  'mx-auto max-w-[760px] text-center text-[20px] leading-[1.75] font-bold text-white sm:text-[19px] sm:leading-[1.8]'

function HeroHeadingScrim({ children }: { children: ReactNode }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(38vh,340px)] w-[min(96vw,940px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(4_0_14/0.88)_0%,rgb(4_0_14/0.5)_40%,transparent_72%)] blur-[20px]"
        aria-hidden="true"
      />
      {children}
    </div>
  )
}

function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#12002b]" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_72%_58%_at_50%_44%,#2e005c_0%,#1a0544_42%,#08001a_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgb(99_102_241/0.12)_0%,transparent_58%)]"
        aria-hidden="true"
      />
    </>
  )
}

function SectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <HeroBackground />
    </div>
  )
}

type DifferentiatorIcon = (typeof differentiators)[number]['icon']

function useViewport() {
  let [size, setSize] = useState({ width: 1280, height: 800 })

  useEffect(() => {
    let update = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return size
}

function DifferentiatorIconMark({ icon }: { icon: DifferentiatorIcon }) {
  return (
    <span
      className="mt-0.5 flex size-12 shrink-0 items-center justify-center rounded-[10px] border border-transparent bg-transparent transition-all duration-300 group-hover:border-brand group-hover:bg-brand"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="size-6 text-white/70 transition-colors duration-300 group-hover:text-white"
        aria-hidden="true"
      >
        {icon === 'building' ? (
          <>
            <path d="M4 21h16" strokeLinecap="round" />
            <path d="M6 21V11l6-5 6 5v10" strokeLinejoin="round" />
            <path d="M10 21v-5h4v5" strokeLinejoin="round" />
            <path d="M9 14h1.5M9 17h1.5" strokeLinecap="round" />
            <path d="M13.5 14H15M13.5 17H15" strokeLinecap="round" />
          </>
        ) : null}
        {icon === 'sparkles' ? (
          <>
            <path
              d="M12 3v2M12 19v2M4 12h2M18 12h2"
              strokeLinecap="round"
            />
            <path
              d="M12 8a4 4 0 110 8 4 4 0 010-8z"
              strokeLinejoin="round"
            />
            <path
              d="M6 6l1.5 1.5M16.5 16.5 18 18M6 18l1.5-1.5M16.5 7.5 18 6"
              strokeLinecap="round"
            />
          </>
        ) : null}
        {icon === 'rocket' ? (
          <>
            <path
              d="M12 3s-4.5 4.5-4.5 9.5a2.5 2.5 0 105 0C12.5 7.5 12 3 12 3z"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10.5" r="1.25" fill="currentColor" stroke="none" />
            <path d="M9.5 15.5h5" strokeLinecap="round" />
            <path d="M10.5 15.5v2.5M13.5 15.5v2.5" strokeLinecap="round" />
            <path
              d="M7.5 12.5 5.5 14.5M16.5 12.5l2-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : null}
        {icon === 'users' ? (
          <>
            <circle cx="9" cy="8.5" r="2.75" />
            <circle cx="16.5" cy="9.5" r="2.25" />
            <path
              d="M3.5 19.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5"
              strokeLinecap="round"
            />
            <path
              d="M14 19.5c0-2.3 1.9-4.2 4.2-4.2"
              strokeLinecap="round"
            />
            <path
              d="M19 5.5 20.25 7 22 7.25l-1.4 1.35.35 2.05L19 9.65l-1.95 1 .35-2.05L16 7.25l1.75-.25L19 5.5z"
              strokeLinejoin="round"
              strokeWidth="1.25"
            />
          </>
        ) : null}
      </svg>
    </span>
  )
}

function DifferentiatorRow({
  item,
}: {
  item: (typeof differentiators)[number]
}) {
  return (
    <div className="group relative flex flex-col gap-y-4 border-b border-white/[0.14] py-8 sm:flex-row sm:items-start sm:gap-x-10 sm:py-10 lg:gap-x-14">
      <div
        className="pointer-events-none absolute inset-x-[-12px] inset-y-2 rounded-2xl bg-[radial-gradient(ellipse_80%_120%_at_20%_50%,rgb(99_102_241/0.22),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="flex min-w-0 items-start gap-x-5 sm:w-[44%] sm:shrink-0 lg:gap-x-6">
        <DifferentiatorIconMark icon={item.icon} />
        <h3 className="relative min-w-0 pt-0.5 text-[1.35rem] font-normal leading-[1.3] tracking-normal text-white sm:text-[1.5rem] lg:text-[1.625rem]">
          {item.title}
        </h3>
      </div>

      <p className="relative min-w-0 text-[14px] leading-[1.65] font-normal text-white/75 transition-colors duration-300 group-hover:text-white/90 sm:w-[56%] sm:pt-0.5 sm:text-[15px] sm:leading-[1.7] lg:text-[16px] lg:leading-[1.75]">
        {item.description}
      </p>
    </div>
  )
}

function HeroRevealStage({
  logoY,
  logoScale,
  logoOpacity,
  glowOpacity,
  titleY,
  titleOpacity,
  titleScale,
  heroExitY,
}: {
  logoY: MotionValue<string>
  logoScale: MotionValue<number>
  logoOpacity: MotionValue<number>
  glowOpacity: MotionValue<number>
  titleY: MotionValue<string>
  titleOpacity: MotionValue<number>
  titleScale: MotionValue<number>
  heroExitY: MotionValue<string>
}) {
  return (
    <div
      className="sticky overflow-visible"
      style={{
        top: NAV_OFFSET,
        height: `calc(100dvh - ${NAV_OFFSET}px)`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-visible px-6">
        <motion.div
          style={{ y: heroExitY }}
          className="absolute inset-0 flex items-center justify-center transform-gpu"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              style={{
                y: logoY,
                scale: logoScale,
                opacity: logoOpacity,
                transformOrigin: 'center center',
              }}
              className="relative flex transform-gpu items-center justify-center"
            >
              <motion.div
                style={{ opacity: glowOpacity }}
                className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(56vh,460px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(35%_35%_at_50%_50%,rgb(255_183_98/0.28)_0%,transparent_100%),radial-gradient(50%_50%_at_50%_50%,rgb(81_0_151/0.85)_0%,transparent_100%),radial-gradient(20%_20%_at_50%_50%,rgb(255_153_98/0.4)_1%,transparent_100%)]"
                aria-hidden="true"
              />
              <img
                src={ARIVU_MARK}
                alt=""
                aria-hidden="true"
                width={418}
                height={550}
                className="relative z-0 h-[min(28vh,280px)] w-auto max-w-none"
              />
            </motion.div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <HeroHeadingScrim>
              <motion.h2
                style={{
                  y: titleY,
                  opacity: titleOpacity,
                  scale: titleScale,
                }}
                className={clsx(
                  heroHeadingClassName,
                  'text-[clamp(2.5rem,8vw,6.875rem)] transform-gpu',
                )}
              >
                {differentiatorsMeta.heading}
              </motion.h2>
            </HeroHeadingScrim>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function StaticDifferentiators() {
  return (
    <section
      id="differentiators"
      className="relative overflow-hidden"
      aria-label={differentiatorsMeta.heading}
    >
      <SectionBackground />

      <div className="relative flex min-h-[72vh] items-center justify-center px-6 py-24">
        <div className="relative h-0 w-0">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(48vh,380px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(35%_35%_at_50%_50%,rgb(255_183_98/0.22)_0%,transparent_100%),radial-gradient(50%_50%_at_50%_50%,rgb(81_0_151/0.7)_0%,transparent_100%)]"
              aria-hidden="true"
            />
            <img
              src={ARIVU_MARK}
              alt=""
              aria-hidden="true"
              width={418}
              height={550}
              className="relative z-0 h-[min(18vh,180px)] w-auto max-w-none opacity-70"
            />
          </div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <HeroHeadingScrim>
              <h2
                className={clsx(
                  heroHeadingClassName,
                  'text-[clamp(2.5rem,8vw,6.875rem)]',
                )}
              >
                {differentiatorsMeta.heading}
              </h2>
            </HeroHeadingScrim>
          </div>
        </div>
      </div>

      <div className="rounded-t-[28px] bg-black pb-20 pt-14 sm:pt-16">
        <Container wide>
          <p className={leadClassName}>
            {differentiatorsMeta.lead}
          </p>
          <div className="relative mt-12">
            {differentiators.map((item) => (
              <DifferentiatorRow key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}

export function DifferentiatorsSection() {
  let heroRef = useRef<HTMLDivElement>(null)
  let contentRef = useRef<HTMLDivElement>(null)
  let layoutRef = useRef<HTMLDivElement>(null)
  let prefersReducedMotion = useReducedMotion()
  let reduced = prefersReducedMotion ?? false
  let viewport = useViewport()
  let [layoutWidth, setLayoutWidth] = useState(1240)

  let panelStartScale =
    layoutWidth > 0 && viewport.width > 0
      ? Math.min(1, layoutWidth / viewport.width)
      : 1240 / 1280

  let { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    // Progress advances as the section enters view, so the meet finishes once the hero pins
    offset: ['start end', 'end start'],
  })

  const MEET_IN = 0.08
  const MEET_OUT = 0.32
  const HERO_EXIT_IN = 0.32
  const HERO_EXIT_OUT = 0.58
  const PANEL_IN = 0.32
  const PANEL_OUT = 0.54

  // Shared progress: logo + heading start together and finish before the hero fully pins
  let meetProgress = useTransform(
    heroProgress,
    [MEET_IN, MEET_OUT],
    [0, 1],
    { clamp: true },
  )

  let logoY = useTransform(meetProgress, [0, 1], ['-24vh', '0vh'])
  let logoScale = useTransform(meetProgress, [0, 1], [0.32, 1.12])
  let logoOpacity = useTransform(meetProgress, [0, 1], [0.65, 0.72])
  let glowOpacity = useTransform(meetProgress, [0, 1], [0.2, 0.9])

  let titleY = useTransform(meetProgress, [0, 1], ['24vh', '0vh'])
  let titleOpacity = useTransform(meetProgress, [0, 1], [0, 1])
  let titleScale = useTransform(meetProgress, [0, 1], [0.94, 1])

  // At meet completion, the full hero scrolls up (no fade) as the content panel rises
  let panelProgress = useTransform(
    heroProgress,
    [PANEL_IN, PANEL_OUT],
    [0, 1],
    { clamp: true },
  )

  let heroExitY = useTransform(
    heroProgress,
    [HERO_EXIT_IN, HERO_EXIT_OUT],
    ['0vh', '-42vh'],
    { clamp: true },
  )

  let panelScaleX = useTransform(
    panelProgress,
    [0, 0.3, 1],
    [panelStartScale, panelStartScale, 1],
  )
  let panelRadius = useTransform(
    panelProgress,
    [0, 0.3, 1],
    [
      Math.max(24, (28 * viewport.width) / Math.max(layoutWidth, 1)),
      Math.max(24, (28 * viewport.width) / Math.max(layoutWidth, 1)),
      0,
    ],
  )
  let introOpacity = useTransform(panelProgress, [0.1, 0.42], [0, 1])
  let introY = useTransform(panelProgress, [0.1, 0.42], [24, 0])
  let rowsOpacity = useTransform(panelProgress, [0.28, 0.62], [0, 1])
  let rowsY = useTransform(panelProgress, [0.28, 0.62], [28, 0])

  useEffect(() => {
    let node = layoutRef.current
    if (!node) return

    let update = () => setLayoutWidth(node.clientWidth)
    update()

    let observer = new ResizeObserver(update)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  if (reduced) {
    return <StaticDifferentiators />
  }

  return (
    <section
      id="differentiators"
      className="relative isolate overflow-hidden"
      aria-label={differentiatorsMeta.heading}
    >
      <SectionBackground />

      <div className="relative z-10">
      <div
        ref={heroRef}
        className="pointer-events-none relative hidden h-[115vh] lg:block"
      >
        <HeroRevealStage
          logoY={logoY}
          logoScale={logoScale}
          logoOpacity={logoOpacity}
          glowOpacity={glowOpacity}
          titleY={titleY}
          titleOpacity={titleOpacity}
          titleScale={titleScale}
          heroExitY={heroExitY}
        />
      </div>

      <div className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-24 lg:hidden">
        <div className="relative flex min-h-[52vh] w-full items-center justify-center">
          <div className="relative h-0 w-0">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(42vh,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(35%_35%_at_50%_50%,rgb(255_183_98/0.22)_0%,transparent_100%),radial-gradient(50%_50%_at_50%_50%,rgb(81_0_151/0.7)_0%,transparent_100%)]"
                aria-hidden="true"
              />
              <img
                src={ARIVU_MARK}
                alt=""
                aria-hidden="true"
                width={418}
                height={550}
                className="relative z-0 h-[min(16vh,150px)] w-auto max-w-none opacity-45"
              />
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <HeroHeadingScrim>
                <h2
                  className={clsx(
                    heroHeadingClassName,
                    'text-[clamp(2.5rem,12vw,3.75rem)]',
                  )}
                >
                  {differentiatorsMeta.heading}
                </h2>
              </HeroHeadingScrim>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="relative min-h-[100dvh] overflow-hidden lg:-mt-[48vh]"
      >
        <motion.div
          style={{
            scaleX: panelScaleX,
            borderTopLeftRadius: panelRadius,
            borderTopRightRadius: panelRadius,
            transformOrigin: 'center top',
          }}
          className="absolute inset-0 z-[1] size-full bg-black"
          aria-hidden="true"
        />

        <div className="relative z-[2] pb-20 pt-12 sm:pt-16 lg:pt-24">
          <Container wide>
            <div ref={layoutRef} className="w-full">
              <motion.div
                style={{ opacity: introOpacity, y: introY }}
                className="relative text-center"
              >
                <p className={leadClassName}>
                  {differentiatorsMeta.lead}
                </p>
              </motion.div>

              <motion.div
                style={{ opacity: rowsOpacity, y: rowsY }}
                className="relative mt-12"
              >
                {differentiators.map((item) => (
                  <DifferentiatorRow key={item.id} item={item} />
                ))}
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
      </div>
    </section>
  )
}
