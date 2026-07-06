'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import { easeOut } from '@/components/site/motion'
import {
  NavMegaMenuMobile,
  NavMegaMenuPanel,
} from '@/components/site/nav-mega-menu'
import { demoUrl, loginUrl } from '@/components/home/data'

const links = [
  { href: '#platform', label: 'Product', dropdown: true },
  { href: '#apps', label: 'Solutions', dropdown: true },
  { href: '/blog', label: 'Learn', dropdown: true },
  { href: '/partnerships', label: 'Partnerships' },
  { href: demoUrl, label: 'Contact Us' },
] as const

const MENU_CLOSE_DELAY = 120
const brandColor = '#4f46e5'

function ChevronDown({ open }: { open?: boolean } = {}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={clsx(
        'ml-1 inline size-3 transition-transform duration-300',
        open && 'rotate-180',
      )}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="m10 11.339 5.292-5.292 1.414 1.414L10 14.167 3.294 7.461l1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const SCROLL_DELTA_THRESHOLD = 8
const GLASS_THRESHOLD = 16
const NAV_ZONE = 72

function computeNavTone() {
  let card = document.querySelector('.hero-card')
  if (!card) return 0

  let rect = card.getBoundingClientRect()
  if (rect.top >= NAV_ZONE) return 0
  if (rect.top <= 0) return 1

  return 1 - rect.top / NAV_ZONE
}

function mixRgb(
  tone: number,
  from: readonly [number, number, number],
  to: readonly [number, number, number],
) {
  let t = Math.min(Math.max(tone, 0), 1)
  return from.map((channel, index) =>
    Math.round(channel + (to[index] - channel) * t),
  ) as [number, number, number]
}

function mixAlpha(tone: number, from: number, to: number) {
  let t = Math.min(Math.max(tone, 0), 1)
  return from + (to - from) * t
}

export function SiteNav({ theme = 'default' }: { theme?: 'default' | 'dark' }) {
  let isDarkNav = theme === 'dark'
  let [visible, setVisible] = useState(true)
  let [showGlass, setShowGlass] = useState(false)
  let [navTone, setNavTone] = useState(0)
  let [activeMenu, setActiveMenu] = useState<string | null>(null)
  let [menuArrowLeft, setMenuArrowLeft] = useState(0)
  let [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null)
  let [hoveredNav, setHoveredNav] = useState<string | null>(null)
  let lastScrollY = useRef(0)
  let menuOpenRef = useRef(false)
  let megaMenuOpenRef = useRef(false)
  let frameRef = useRef<number | null>(null)
  let menuCloseTimeoutRef = useRef<number | null>(null)
  let navShellRef = useRef<HTMLDivElement>(null)
  let triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  let clearMenuCloseTimeout = useCallback(() => {
    if (menuCloseTimeoutRef.current !== null) {
      window.clearTimeout(menuCloseTimeoutRef.current)
      menuCloseTimeoutRef.current = null
    }
  }, [])

  let updateMenuArrow = useCallback((label: string) => {
    let shell = navShellRef.current
    let trigger = triggerRefs.current[label]
    if (!shell || !trigger) return

    let shellRect = shell.getBoundingClientRect()
    let triggerRect = trigger.getBoundingClientRect()
    setMenuArrowLeft(triggerRect.left - shellRect.left + triggerRect.width / 2)
  }, [])

  let openMegaMenu = useCallback(
    (label: string) => {
      clearMenuCloseTimeout()
      setActiveMenu(label)
      updateMenuArrow(label)
    },
    [clearMenuCloseTimeout, updateMenuArrow],
  )

  let scheduleMegaMenuClose = useCallback(() => {
    clearMenuCloseTimeout()
    menuCloseTimeoutRef.current = window.setTimeout(() => {
      setActiveMenu(null)
    }, MENU_CLOSE_DELAY)
  }, [clearMenuCloseTimeout])

  useEffect(() => {
    megaMenuOpenRef.current = activeMenu !== null
  }, [activeMenu])

  useEffect(() => {
    if (!activeMenu) return

    let currentMenu = activeMenu

    function onResize() {
      updateMenuArrow(currentMenu)
    }

    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [activeMenu, updateMenuArrow])

  useEffect(() => {
    function update() {
      frameRef.current = null
      let currentY = window.scrollY
      let delta = currentY - lastScrollY.current

      setShowGlass(currentY > GLASS_THRESHOLD)
      setNavTone(computeNavTone())

      if (
        menuOpenRef.current ||
        megaMenuOpenRef.current ||
        currentY <= GLASS_THRESHOLD
      ) {
        setVisible(true)
      } else if (Math.abs(delta) >= SCROLL_DELTA_THRESHOLD) {
        setVisible(delta < 0)
      }

      lastScrollY.current = currentY
    }

    function onScroll() {
      if (frameRef.current !== null) return
      frameRef.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  let effectiveTone = isDarkNav ? 1 : navTone
  let lightGlassOpacity = isDarkNav ? 0 : (1 - navTone) * (showGlass ? 1 : 0)
  let darkGlassOpacity = isDarkNav ? 1 : navTone
  let linkRgb = mixRgb(effectiveTone, [0x5c, 0x63, 0x70], [0xff, 0xff, 0xff])
  let linkColor = `rgb(${linkRgb.join(' ')})`
  let loginTextRgb = mixRgb(effectiveTone, [0x1a, 0x1f, 0x36], [0xff, 0xff, 0xff])
  let loginTextColor = `rgb(${loginTextRgb.join(' ')})`
  let loginBgColor = `rgb(255 255 255 / ${mixAlpha(effectiveTone, 0.8, 0.1)})`
  let loginHoverBgColor = `rgb(255 255 255 / ${mixAlpha(effectiveTone, 1, 0.15)})`

  return (
    <Disclosure as="header">
      {({ open }) => {
        menuOpenRef.current = open

        return (
          <>
            <div
              className={clsx(
                'fixed z-50 w-full transition-transform duration-300 ease-out will-change-transform',
                'min-h-16 lg:top-5 lg:min-h-12',
                visible
                  ? 'translate-y-0'
                  : '-translate-y-[calc(100%+1.5rem)]',
              )}
            >
              <div
                ref={navShellRef}
                className="relative mx-auto h-full max-w-[1240px] px-0 lg:px-3"
              >
                <div className="relative flex h-16 items-center justify-between gap-3 px-4 lg:h-12 lg:px-5 xl:gap-4">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl border border-black/[0.07] bg-white/68 shadow-soft backdrop-blur-2xl backdrop-saturate-150 transition-opacity duration-500 ease-out"
                    style={{ opacity: lightGlassOpacity }}
                  />
                  <div
                    aria-hidden="true"
                    className={clsx(
                      'pointer-events-none absolute inset-0 rounded-2xl border backdrop-blur-2xl backdrop-saturate-150 transition-opacity duration-500 ease-out',
                      isDarkNav
                        ? 'border-white/10 bg-black/75 shadow-[0_8px_32px_rgb(0_0_0/0.45)]'
                        : 'border-white/12 bg-black/35 shadow-[0_8px_32px_rgb(0_0_0/0.28)]',
                    )}
                    style={{ opacity: darkGlassOpacity }}
                  />

                  <div className="relative z-10 flex min-w-0 flex-1 items-center gap-2 lg:gap-4 xl:gap-6">
                    <Link
                      href="/"
                      title="Arivu home"
                      className="flex shrink-0 items-center transition-opacity data-hover:opacity-80"
                    >
                      <span
                        className="relative inline-flex h-7 lg:h-8"
                        aria-hidden="true"
                      >
                        <span
                          className="inline-flex transition-opacity duration-500 ease-out"
                          style={{ opacity: 1 - effectiveTone }}
                        >
                          <Logo className="h-full" />
                        </span>
                        <span
                          className="absolute inset-0 inline-flex transition-opacity duration-500 ease-out"
                          style={{ opacity: effectiveTone }}
                        >
                          <Logo className="h-full" light />
                        </span>
                      </span>
                    </Link>

                    <nav className="hidden h-12 items-center gap-1 py-2 lg:flex xl:gap-2">
                      {links.map((link) => {
                        let { href, label } = link
                        let dropdown = 'dropdown' in link && link.dropdown
                        let isActive = activeMenu === label
                        let isHighlighted = hoveredNav === label || isActive
                        let navItemColor = isHighlighted ? brandColor : linkColor

                        if (dropdown) {
                          return (
                            <button
                              key={label}
                              ref={(node) => {
                                triggerRefs.current[label] = node
                              }}
                              type="button"
                              className="relative cursor-pointer py-1 pr-2 text-[15px] font-normal text-nowrap transition-[color] duration-300 ease-out lg:px-1 lg:text-[14px]"
                              style={{ color: navItemColor }}
                              aria-expanded={isActive}
                              aria-haspopup="true"
                              onMouseEnter={() => {
                                setHoveredNav(label)
                                openMegaMenu(label)
                              }}
                              onMouseLeave={() => {
                                setHoveredNav(null)
                                scheduleMegaMenuClose()
                              }}
                              onFocus={() => openMegaMenu(label)}
                              onBlur={scheduleMegaMenuClose}
                            >
                              {label}
                              <ChevronDown open={isHighlighted} />
                            </button>
                          )
                        }

                        return (
                          <Link
                            key={label}
                            href={href}
                            className="relative cursor-pointer py-1 pr-2 text-[15px] font-normal text-nowrap transition-[color] duration-300 ease-out lg:px-1 lg:text-[14px]"
                            style={{ color: navItemColor } as CSSProperties}
                            onMouseEnter={() => setHoveredNav(label)}
                            onMouseLeave={() => setHoveredNav(null)}
                          >
                            {label}
                          </Link>
                        )
                      })}
                    </nav>
                  </div>

                  <div className="relative z-10 hidden items-center gap-2 lg:flex">
                    <Link
                      href={loginUrl}
                      className="inline-flex cursor-pointer items-center rounded-lg px-4 py-2 text-[15px] font-medium text-nowrap transition-[color,background-color] duration-500 ease-out lg:text-[14px]"
                      style={
                        {
                          color: loginTextColor,
                          backgroundColor: loginBgColor,
                        } as CSSProperties
                      }
                      onMouseEnter={(event) => {
                        event.currentTarget.style.backgroundColor = loginHoverBgColor
                      }}
                      onMouseLeave={(event) => {
                        event.currentTarget.style.backgroundColor = loginBgColor
                      }}
                    >
                      Login
                    </Link>
                    <Link
                        href={demoUrl}
                        className="cursor-pointer rounded-lg bg-brand px-4 py-2 text-[15px] font-medium text-nowrap text-white transition-colors duration-200 hover:bg-brand-hover lg:text-[14px]"
                      >
                        Get a Demo
                      </Link>
                  </div>

                  <DisclosureButton
                    className="relative z-10 rounded-lg p-2 transition-[color] duration-500 ease-out lg:hidden"
                    style={{ color: linkColor }}
                  >
                    <span className="sr-only">Open menu</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="size-5"
                    >
                      {open ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path d="M4 7h16M4 12h16M4 17h16" />
                      )}
                    </svg>
                  </DisclosureButton>
                </div>

                <AnimatePresence>
                  {activeMenu && (
                    <NavMegaMenuPanel
                      menuId={activeMenu}
                      arrowLeft={menuArrowLeft}
                      onMouseEnter={clearMenuCloseTimeout}
                      onMouseLeave={scheduleMegaMenuClose}
                      dark={isDarkNav}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

            <DisclosurePanel
              className={clsx(
                'fixed inset-x-0 top-16 z-40 px-6 py-5 backdrop-blur-xl lg:top-[4.25rem]',
                isDarkNav
                  ? 'border-b border-white/10 bg-black/95'
                  : 'border-b border-border/50 bg-white/95',
              )}
            >
              <nav className="mx-auto flex max-w-[1240px] flex-col gap-1">
                {links.map((link, index) => {
                  let { href, label } = link
                  let dropdown = 'dropdown' in link && link.dropdown
                  let expanded = expandedMobileMenu === label
                  let mobileItemClass = clsx(
                    'flex w-full items-center rounded-lg px-3 py-2.5 text-[16px] font-medium',
                    isDarkNav ? 'text-white' : 'text-ink',
                  )

                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.35,
                        ease: easeOut,
                      }}
                    >
                      {dropdown ? (
                        <>
                          <button
                            type="button"
                            className={mobileItemClass}
                            aria-expanded={expanded}
                            onClick={() =>
                              setExpandedMobileMenu(expanded ? null : label)
                            }
                          >
                            {label}
                            <ChevronDown open={expanded} />
                          </button>
                          {expanded && <NavMegaMenuMobile menuId={label} dark={isDarkNav} />}
                        </>
                      ) : (
                        <Link href={href} className={mobileItemClass}>
                          {label}
                        </Link>
                      )}
                    </motion.div>
                  )
                })}
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: links.length * 0.04,
                    duration: 0.35,
                    ease: easeOut,
                  }}
                  className={clsx(
                    'mt-4 flex flex-col gap-2 border-t pt-4',
                    isDarkNav ? 'border-white/10' : 'border-border/50',
                  )}
                >
                  <Link
                    href={loginUrl}
                    className={clsx(
                      'block rounded-lg px-3 py-2.5 text-center text-[16px] font-medium transition-colors',
                      isDarkNav
                        ? 'bg-white/10 text-white hover:bg-white/15'
                        : 'bg-surface text-ink hover:bg-surface-muted',
                    )}
                  >
                    Login
                  </Link>
                  <Link
                    href={demoUrl}
                    className="block rounded-lg bg-brand px-3 py-2.5 text-center text-[16px] font-medium text-white transition-colors hover:bg-brand-hover"
                  >
                    Get a Demo
                  </Link>
                </motion.div>
              </nav>
            </DisclosurePanel>
          </>
        )
      }}
    </Disclosure>
  )
}

export function SiteNavSpacer({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={clsx('h-16', compact ? 'lg:h-12' : 'lg:h-[4.25rem]')}
      aria-hidden="true"
    />
  )
}
