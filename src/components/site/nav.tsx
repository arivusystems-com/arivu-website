'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import { ArrowIcon, Button } from '@/components/site/button'
import { Container } from '@/components/site/container'
import { easeOut } from '@/components/site/motion'

const loginUrl = 'https://app.arivusystems.com/login'
const demoUrl = 'https://app.arivusystems.com/demo'

const links = [
  { href: '#platform', label: 'Platform' },
  { href: '#apps', label: 'Applications', dropdown: true },
  { href: '#how-it-works', label: 'Solutions', dropdown: true },
  { href: '/blog', label: 'Resources', dropdown: true },
  { href: demoUrl, label: 'Pricing' },
]

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={clsx('size-3.5 text-ink-tertiary', className)}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function SiteNav() {
  let [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Disclosure as="header">
      {({ open }) => (
        <>
          <div
            className={clsx(
              'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300',
              open || scrolled
                ? 'border-border/50 bg-white/65 shadow-soft backdrop-blur-xl backdrop-saturate-150'
                : 'border-transparent bg-[#fafbff]/75 backdrop-blur-[2px]',
            )}
          >
            <Container wide>
              <div className="grid h-[72px] grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-8">
                <Link
                  href="/"
                  title="Arivu home"
                  className="flex h-full shrink-0 items-center transition-opacity data-hover:opacity-80"
                >
                  <Logo className="h-9" />
                </Link>

                <nav className="hidden items-center justify-center gap-0.5 lg:flex">
                  {links.map(({ href, label, dropdown }) => (
                    <Link
                      key={label}
                      href={href}
                      className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-medium text-ink-secondary transition-colors data-hover:text-ink"
                    >
                      {label}
                      {dropdown && <ChevronDown />}
                    </Link>
                  ))}
                </nav>

                <div className="hidden items-center justify-end gap-3 lg:flex">
                  <Button href={loginUrl} variant="ghost">
                    Log in
                  </Button>
                  <Button href={demoUrl} className="rounded-xl px-5">
                    Talk to Arivu
                    <ArrowIcon />
                  </Button>
                </div>

                <DisclosureButton className="justify-self-end rounded-lg p-2 text-ink lg:hidden">
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
            </Container>
          </div>

          <DisclosurePanel className="fixed inset-x-0 top-[72px] z-40 border-b border-border/50 bg-white/70 px-6 py-5 backdrop-blur-xl backdrop-saturate-150 lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map(({ href, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.35, ease: easeOut }}
                >
                  <Link
                    href={href}
                    className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 grid gap-2 border-t border-border pt-4">
                <Button href={loginUrl} variant="ghost" className="w-full">
                  Log in
                </Button>
                <Button href={demoUrl} className="w-full">
                  Talk to Arivu
                </Button>
              </div>
            </nav>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export function SiteNavSpacer() {
  return <div className="h-[72px]" aria-hidden="true" />
}
