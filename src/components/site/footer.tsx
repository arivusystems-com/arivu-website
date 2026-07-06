'use client'

import { Disclosure, DisclosureButton } from '@headlessui/react'
import { clsx } from 'clsx'
import { useReducedMotion } from 'framer-motion'
import { type FormEvent, useId, useState } from 'react'
import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import { demoUrl, loginUrl } from '@/components/home/data'
import { ArrowIcon, Button } from '@/components/site/button'
import { BracketLabel } from '@/components/site/bracket-label'
import { Container } from '@/components/site/container'
import { easeOut, FadeIn } from '@/components/site/motion'
import { PremierCtaButton } from '@/components/site/premier-cta-button'
import { SectionHeading, SectionLead } from '@/components/site/section'

const columns = [
  {
    title: 'Platform',
    links: [
      { href: '#platform', label: 'Overview' },
      { href: '#apps', label: 'Applications' },
      { href: '#how-it-works', label: 'How it works' },
    ],
  },
  {
    title: 'Applications',
    links: [
      { href: '#apps', label: 'Sales' },
      { href: '#apps', label: 'Helpdesk' },
      { href: '#apps', label: 'Projects' },
      { href: '#apps', label: 'Inventory' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: demoUrl, label: 'Contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: demoUrl, label: 'About' },
      { href: loginUrl, label: 'Log in' },
    ],
  },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/arivusystems',
    icon: LinkedInIcon,
  },
  {
    name: 'X',
    href: 'https://x.com/arivusystems',
    icon: XIcon,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@arivusystems',
    icon: YouTubeIcon,
  },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
]

const ringSizes = [320, 256, 192, 128]

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-block text-[14px] text-dark-muted transition-[color,transform] duration-200 data-hover:translate-x-0.5 data-hover:text-white"
    >
      {label}
    </Link>
  )
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string }[]
}) {
  return (
    <div>
      <p className="text-[13px] font-semibold tracking-wide text-white">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map(({ href, label }) => (
          <li key={label}>
            <FooterLink href={href} label={label} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function FooterLinksAccordion() {
  let reducedMotion = useReducedMotion()

  return (
    <div className="divide-y divide-dark-border overflow-hidden rounded-2xl border border-dark-border lg:hidden">
      {columns.map(({ title, links }) => (
        <FooterAccordionItem
          key={title}
          title={title}
          links={links}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  )
}

function FooterAccordionItem({
  title,
  links,
  reducedMotion,
}: {
  title: string
  links: { href: string; label: string }[]
  reducedMotion: boolean | null
}) {
  let panelId = useId()

  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <DisclosureButton
            aria-controls={panelId}
            className={clsx(
              'group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200',
              open ? 'bg-white/[0.04]' : 'data-hover:bg-white/[0.02]',
            )}
          >
            <span className="text-[14px] font-semibold text-white">{title}</span>
            <span
              className={clsx(
                'flex size-8 shrink-0 items-center justify-center rounded-lg border border-dark-border bg-white/5 text-white/60 transition-transform duration-200',
                open && 'rotate-180',
              )}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="m10 11.339 5.292-5.292 1.414 1.414L10 14.167 3.294 7.461l1.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </DisclosureButton>

          <div
            id={panelId}
            role="region"
            aria-hidden={!open}
            className={clsx(
              'grid overflow-hidden',
              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
            style={{
              transitionProperty: 'grid-template-rows',
              transitionDuration: reducedMotion ? '0ms' : '320ms',
              transitionTimingFunction: `cubic-bezier(${easeOut.join(',')})`,
            }}
          >
            <div className="min-h-0 overflow-hidden">
              <ul className="space-y-2.5 border-t border-dark-border px-5 py-4">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <FooterLink href={href} label={label} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

function FooterCtaButton({ href }: { href: string }) {
  let reducedMotion = useReducedMotion()

  return (
    <div className="relative flex shrink-0 items-center justify-center self-center lg:self-auto">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        {ringSizes.map((size, index) => (
          <div
            key={size}
            className={clsx(
              'absolute rounded-full border border-white/[0.06]',
              !reducedMotion && 'footer-ring',
            )}
            style={{
              width: size,
              height: size,
              animationDelay: `${index * 0.6}s`,
            }}
          />
        ))}
      </div>

      <Button href={href} variant="inverse" className="relative z-10 px-8 py-3">
        Let&apos;s talk
        <ArrowIcon className="text-brand" />
      </Button>
    </div>
  )
}

function FooterNewsletter() {
  let [email, setEmail] = useState('')
  let [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }

    setStatus('success')
    setEmail('')
  }

  return (
    <div>
      <p className="text-[13px] font-semibold tracking-wide text-white">Stay updated</p>

      {status === 'success' ? (
        <p className="mt-4 rounded-full border border-brand/30 bg-brand/10 px-4 py-3 text-[14px] text-white/85">
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      ) : (
        <form className="mt-4 flex gap-2" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              if (status === 'error') setStatus('idle')
            }}
            placeholder="Email address"
            aria-invalid={status === 'error'}
            aria-describedby={status === 'error' ? 'footer-email-error' : undefined}
            className={clsx(
              'min-w-0 flex-1 rounded-full border bg-white/5 px-4 py-2.5 text-[14px] text-white outline-none placeholder:text-white/40',
              'focus:border-brand focus:ring-2 focus:ring-brand-ring',
              status === 'error'
                ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20'
                : 'border-dark-border',
            )}
          />
          <button
            type="submit"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-brand transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label="Subscribe to newsletter"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      )}

      {status === 'error' ? (
        <p id="footer-email-error" className="mt-2 text-[13px] text-red-400/90">
          Please enter a valid email address.
        </p>
      ) : null}

      <div className="mt-6 flex gap-3">
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex size-9 items-center justify-center rounded-full border border-dark-border bg-white/5 text-white/50 transition-[color,background-color,border-color,transform] duration-200 data-hover:border-white/20 data-hover:bg-white/10 data-hover:text-white data-hover:scale-105"
          >
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  )
}

export function SiteFooter({ theme = 'default' }: { theme?: 'default' | 'black' }) {
  let isBlack = theme === 'black'

  return (
    <footer className={clsx('relative overflow-hidden', isBlack ? 'bg-black' : 'bg-dark')}>
      {/* Primary CTA */}
      <div className="relative py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_50%,rgb(79_70_229/0.22),transparent)]"
          aria-hidden="true"
        />

        <Container wide>
          <FadeIn>
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div>
                <BracketLabel light>Let&apos;s Connect</BracketLabel>
                <SectionHeading light className="mt-4">
                  Scale faster. Operate with clarity.
                </SectionHeading>
                <SectionLead light className="mt-5 max-w-xl">
                  Say goodbye to disconnected tools and processes and hello to operational
                  clarity and control. Talk to our product experts today.
                </SectionLead>
              </div>

              <FooterCtaButton href={demoUrl} />
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* Secondary promo bar */}
      <div
        className={clsx(
          'relative border-y border-dark-border py-5',
          isBlack ? 'bg-white/[0.03]' : 'bg-dark-elevated',
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_100%_at_100%_50%,rgb(79_70_229/0.12),transparent)]"
          aria-hidden="true"
        />
        <Container wide>
          <div className="relative flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-[15px] font-semibold text-white sm:text-left">
              10x your business with next-gen connected platform.
            </p>
            <PremierCtaButton href={demoUrl} className="shrink-0">
              Discover the advantage
            </PremierCtaButton>
          </div>
        </Container>
      </div>

      {/* Link grid */}
      <Container wide className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_1fr] lg:gap-16">
          <div>
            <Logo className="h-8" light />
            <p className="mt-5 max-w-xs text-[14px] leading-7 text-dark-muted">
              A process-first platform for growing businesses.
            </p>
          </div>

          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8">
            {columns.map(({ title, links }) => (
              <FooterLinkColumn key={title} title={title} links={links} />
            ))}
          </div>

          <FooterLinksAccordion />

          <FooterNewsletter />
        </div>
      </Container>

      {/* Legal bar */}
      <div className="border-t border-dark-border">
        <Container wide className="py-6">
          <p className="flex flex-wrap items-center gap-x-2 text-[13px] text-white/40">
            <span>&copy; {new Date().getFullYear()} Arivu Systems</span>
            {legalLinks.map(({ href, label }) => (
              <span key={label} className="inline-flex items-center gap-x-2">
                <span aria-hidden="true" className="text-white/20">
                  ·
                </span>
                <Link
                  href={href}
                  className="transition-colors duration-200 data-hover:text-white/70"
                >
                  {label}
                </Link>
              </span>
            ))}
          </p>
        </Container>
      </div>
    </footer>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M5.5 3.25A1.75 1.75 0 0 0 3.75 5v9.5a1.75 1.75 0 0 0 1.75 1.75h9.5a1.75 1.75 0 0 0 1.75-1.75V5A1.75 1.75 0 0 0 15.25 3.25h-9.5ZM6.5 8.5v6h-1.75v-6H6.5Zm-.875-2.25a1.01 1.01 0 1 1 0-2.02 1.01 1.01 0 0 1 0 2.02ZM14.25 14.5h-1.75v-2.9c0-.69-.01-1.58-.96-1.58-1.02 0-1.18.79-1.18 1.61v2.87H8.56V8.5h1.68v.8h.02c.23-.44.8-.9 1.65-.9 1.76 0 2.08 1.16 2.08 2.67v3.43Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-3.5" aria-hidden="true">
      <path d="M11.57 8.93 16.8 3H15.4l-4.53 5.15L8.04 3H3l5.46 7.84L3 17h1.4l4.78-5.45L12.5 17H17.5l-5.93-8.07Zm-1.68 1.91-1-1.43-3.98-5.7H6.4l3.22 4.6 1 1.43 4.15 5.93h1.88l-4.4-6.3Z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M17.5 6.2a2.2 2.2 0 0 0-1.55-1.56C14.7 4.25 10 4.25 10 4.25s-4.7 0-5.95.39A2.2 2.2 0 0 0 2.5 6.2 46 46 0 0 0 2.1 10a46 46 0 0 0 .4 3.8 2.2 2.2 0 0 0 1.55 1.56c1.25.39 5.95.39 5.95.39s4.7 0 5.95-.39a2.2 2.2 0 0 0 1.55-1.56 46 46 0 0 0 .4-3.8 46 46 0 0 0-.4-3.8ZM8.75 12.5v-5l4.5 2.5-4.5 2.5Z" />
    </svg>
  )
}
