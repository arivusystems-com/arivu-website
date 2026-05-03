'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

const loginUrl = 'https://app.arivusystems.com/login'
const demoUrl = 'https://app.arivusystems.com/demo'

const links = [
  { href: '/products', label: 'Product' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about-us', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply transition-colors duration-200 data-hover:bg-black/2.5"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
      <PlusGridItem className="relative flex items-center pl-3">
        <Link
          href={loginUrl}
          className="inline-flex items-center justify-center rounded-full bg-white/20 px-5 py-2.5 text-base font-medium whitespace-nowrap text-gray-950 ring-1 ring-gray-950/8 backdrop-blur-sm transition-colors duration-200 data-hover:bg-white/35"
        >
          Login
        </Link>
      </PlusGridItem>
      <PlusGridItem className="relative flex items-center pl-3">
        <Link
          href={demoUrl}
          className="inline-flex items-center justify-center rounded-full bg-gray-950 px-5 py-2.5 text-base font-medium whitespace-nowrap text-white transition-colors duration-200 data-hover:bg-gray-800"
        >
          Book a demo
        </Link>
      </PlusGridItem>
    </nav>
  )
}

function MobileNavButton({ open }: { open: boolean }) {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg text-gray-950 transition-colors duration-200 data-hover:bg-black/5 lg:hidden"
      aria-label={open ? 'Close main menu' : 'Open main menu'}
    >
      {open ? (
        <XMarkIcon className="size-6" />
      ) : (
        <Bars2Icon className="size-6" />
      )}
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="fixed inset-x-0 top-[91px] bottom-0 isolate z-[110] border-y border-black/5 bg-white shadow-xl ring-1 shadow-gray-950/8 ring-black/5 lg:hidden">
      <div className="mx-auto flex h-full max-w-2xl flex-col px-6 sm:px-8">
        <nav className="flex flex-col gap-1 pt-8">
          {links.map(({ href, label }, linkIndex) => (
            <motion.div
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
                rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
              }}
              key={href}
            >
              <Link
                href={href}
                className="block rounded-xl px-4 py-3 text-lg font-medium text-gray-950 transition-colors duration-200 data-hover:bg-gray-950/5 data-hover:text-gray-700"
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="mt-auto grid gap-3 border-t border-gray-950/10 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: links.length * 0.1 },
            }}
          >
            <Link
              href={loginUrl}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-white px-5 text-base font-medium text-gray-950 ring-1 ring-gray-950/10 transition-colors duration-200 data-hover:bg-gray-50"
            >
              Login
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: (links.length + 1) * 0.1 },
            }}
          >
            <Link
              href={demoUrl}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-gray-950 px-5 text-base font-medium text-white transition-colors duration-200 data-hover:bg-gray-800"
            >
              Book a demo
            </Link>
          </motion.div>
        </div>
      </div>
    </DisclosurePanel>
  )
}

function MobileNavScrollLock({ open }: { open: boolean }) {
  useEffect(() => {
    if (!open) {
      return
    }

    let scrollY = window.scrollY
    let originalOverflow = document.body.style.overflow
    let originalPaddingRight = document.body.style.paddingRight
    let originalPosition = document.body.style.position
    let originalTop = document.body.style.top
    let originalWidth = document.body.style.width
    let scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
      document.body.style.position = originalPosition
      document.body.style.top = originalTop
      document.body.style.width = originalWidth
      window.scrollTo(0, scrollY)
    }
  }, [open])

  return null
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  let [isMounted, setIsMounted] = useState(false)
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let animationFrame = requestAnimationFrame(() => {
      setIsMounted(true)
    })

    function handleScroll() {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  let navbar = (
    <Disclosure as="header">
      {({ open }) => (
        <div
          className={clsx(
            'fixed inset-x-0 top-0 z-[100] px-6 transition-[background-color,backdrop-filter] duration-300 lg:px-8',
            open ? 'bg-white' : isScrolled && 'bg-white/65 backdrop-blur-md',
          )}
        >
          <MobileNavScrollLock open={open} />
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <PlusGrid>
              <PlusGridRow className="relative flex justify-between">
                <div className="relative flex gap-6">
                  <PlusGridItem className="py-3">
                    <Link href="/" title="Home">
                      <Logo className="h-12" />
                    </Link>
                  </PlusGridItem>
                  {banner && (
                    <div className="relative hidden items-center py-3 lg:flex">
                      {banner}
                    </div>
                  )}
                </div>
                <DesktopNav />
                <MobileNavButton open={open} />
              </PlusGridRow>
            </PlusGrid>
            <MobileNav />
          </div>
        </div>
      )}
    </Disclosure>
  )

  return (
    <>
      {isMounted ? createPortal(navbar, document.body) : navbar}
      <div aria-hidden="true" className="h-[138px] sm:h-[154px]" />
    </>
  )
}
