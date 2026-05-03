'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
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
  { href: '/pricing', label: 'Pricing' },
  { href: '/company', label: 'Company' },
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

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
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
              className="text-base font-medium text-gray-950 transition-colors duration-200 data-hover:text-gray-600"
            >
              {label}
            </Link>
          </motion.div>
        ))}
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
            className="inline-flex items-center justify-center rounded-full bg-white/20 px-5 py-2.5 text-base font-medium text-gray-950 ring-1 ring-gray-950/8 backdrop-blur-sm transition-colors duration-200 data-hover:bg-white/35"
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
            className="inline-flex items-center justify-center rounded-full bg-gray-950 px-5 py-2.5 text-base font-medium text-white transition-colors duration-200 data-hover:bg-gray-800"
          >
            Book a demo
          </Link>
        </motion.div>
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
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
    <Disclosure
      as="header"
      className={clsx(
        'fixed inset-x-0 top-0 z-[100] transition-[background-color,backdrop-filter] duration-300',
        isScrolled && 'bg-white/65 backdrop-blur-md',
      )}
    >
      <div className="px-6 lg:px-8">
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
              <MobileNavButton />
            </PlusGridRow>
          </PlusGrid>
          <MobileNav />
        </div>
      </div>
    </Disclosure>
  )

  return (
    <>
      {isMounted ? createPortal(navbar, document.body) : navbar}
      <div aria-hidden="true" className="h-[138px] sm:h-[154px]" />
    </>
  )
}
