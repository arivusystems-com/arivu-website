'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { Link } from '@/components/link'
import { apps, demoUrl, industries, personas } from '@/components/home/data'
import { easeOut } from '@/components/site/motion'

type MenuItem = {
  label: string
  href: string
  icon: ReactNode
  iconBg: string
}

type MenuColumn = {
  title: string
  items: MenuItem[]
}

type NavMenu = {
  id: string
  columns: MenuColumn[]
}

function IconSquare({
  bg,
  children,
}: {
  bg: string
  children: ReactNode
}) {
  return (
    <span
      className={clsx(
        'flex size-7 shrink-0 items-center justify-center rounded-md text-white [&_svg]:size-4',
        bg,
      )}
    >
      {children}
    </span>
  )
}

const appIconColors: Record<string, string> = {
  sales: 'bg-rose-500',
  helpdesk: 'bg-sky-500',
  projects: 'bg-emerald-500',
  field: 'bg-amber-500',
  audits: 'bg-violet-500',
  inventory: 'bg-blue-500',
}

const appIcons: Record<string, ReactNode> = {
  sales: (
    <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
      <path
        d="M3 12V6l5-3 5 3v6l-5 3-5-3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  helpdesk: (
    <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
      <path
        d="M3 4.5h10v7H8.5L6 13.5V11.5H3v-7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
      <path
        d="M4 4h8v8H4zM6 7h4M6 9.5h2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  field: (
    <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
      <path
        d="M8 2.5v11M5 12.5l3 1.5 3-1.5M5.5 6.5l2.5-1.5 2.5 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  audits: (
    <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
      <path
        d="M4 3.5h8v9H4zM6 7h4M6 9.5h2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.5 11.5l1 1 2.5-2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  inventory: (
    <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
      <path
        d="M3 5.5 8 3l5 2.5v5L8 13l-5-2.5v-5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 8v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
}

export const navMenus: NavMenu[] = [
  {
    id: 'Product',
    columns: [
      {
        title: 'Applications',
        items: apps.map((app) => ({
          label: app.name,
          href: '#apps',
          icon: appIcons[app.id],
          iconBg: appIconColors[app.id] ?? 'bg-brand',
        })),
      },
      {
        title: 'Platform',
        items: [
          {
            label: 'Overview',
            href: '#platform',
            iconBg: 'bg-brand',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <rect x="3" y="3" width="4.5" height="4.5" rx="1" fill="currentColor" />
                <rect x="8.5" y="3" width="4.5" height="4.5" rx="1" fill="currentColor" opacity="0.65" />
                <rect x="3" y="8.5" width="4.5" height="4.5" rx="1" fill="currentColor" opacity="0.65" />
                <rect x="8.5" y="8.5" width="4.5" height="4.5" rx="1" fill="currentColor" />
              </svg>
            ),
          },
          {
            label: 'Command Center',
            href: '#command-center',
            iconBg: 'bg-pink-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M3 11V5l5-2 5 2v6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5 11V8.5h3V11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ),
          },
          {
            label: 'How it works',
            href: '#how-it-works',
            iconBg: 'bg-teal-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <circle cx="4" cy="8" r="1.25" fill="currentColor" />
                <circle cx="8" cy="8" r="1.25" fill="currentColor" />
                <circle cx="12" cy="8" r="1.25" fill="currentColor" />
                <path
                  d="M5.25 8h1.5M9.25 8h1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ),
          },
          {
            label: 'Transformation',
            href: '#transformation',
            iconBg: 'bg-orange-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M4 11V5l4-2 4 2v6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 7v4M6.5 9h3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ),
          },
        ],
      },
      {
        title: 'Capabilities',
        items: [
          {
            label: 'Automation',
            href: '#how-it-works',
            iconBg: 'bg-violet-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M9 2.5 6.5 8H10l-2.5 5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
          {
            label: 'Analytics',
            href: '#command-center',
            iconBg: 'bg-pink-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M4 11V8M8 11V5.5M12 11V7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ),
          },
          {
            label: 'Approvals',
            href: '#apps',
            iconBg: 'bg-emerald-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M4 8.5 6.5 11 12 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
          {
            label: 'Audit trails',
            href: '#apps',
            iconBg: 'bg-sky-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M5 3.5h6v9H5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7h4M7 9.5h2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ),
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'All features',
            href: '#apps',
            iconBg: 'bg-gradient-to-br from-rose-500 via-violet-500 to-sky-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <rect x="3" y="3" width="4" height="4" rx="0.75" fill="currentColor" />
                <rect x="9" y="3" width="4" height="4" rx="0.75" fill="currentColor" />
                <rect x="3" y="9" width="4" height="4" rx="0.75" fill="currentColor" />
                <rect x="9" y="9" width="4" height="4" rx="0.75" fill="currentColor" />
              </svg>
            ),
          },
          {
            label: 'Watch demo',
            href: demoUrl,
            iconBg: 'bg-neutral-400',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path d="M6.5 5.5v5l4.5-2.5-4.5-2.5z" fill="currentColor" />
              </svg>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 'Solutions',
    columns: [
      {
        title: 'Who we serve',
        items: personas.map((persona, index) => ({
          label: persona.title,
          href: demoUrl,
          iconBg: ['bg-brand', 'bg-emerald-500', 'bg-amber-500'][index] ?? 'bg-brand',
          icon: (
            <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
              <circle cx="8" cy="5.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M4 13c0-2.2 1.8-4 4-4s4 1.8 4 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ),
        })),
      },
      {
        title: 'Industries',
        items: industries.slice(0, 6).map((industry, index) => ({
          label: industry,
          href: demoUrl,
          iconBg:
            ['bg-rose-500', 'bg-sky-500', 'bg-emerald-500', 'bg-violet-500', 'bg-amber-500', 'bg-blue-500'][
              index % 6
            ] ?? 'bg-brand',
          icon: (
            <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
              <path
                d="M4 12V6l4-2.5L12 6v6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M7 12V9.5h2V12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ),
        })),
      },
      {
        title: 'Use cases',
        items: [
          {
            label: 'Replace disconnected tools',
            href: '#transformation',
            iconBg: 'bg-brand',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M10 4.5 12.5 7 10 9.5M6 11.5 3.5 9 6 6.5M12.5 7h-5M3.5 9h5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
          {
            label: 'Scale operations',
            href: '#how-it-works',
            iconBg: 'bg-emerald-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M4 11V8.5M8 11V6M12 11V4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ),
          },
          {
            label: 'Multi-team coordination',
            href: '#apps',
            iconBg: 'bg-violet-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <circle cx="5" cy="6" r="1.5" fill="currentColor" />
                <circle cx="11" cy="6" r="1.5" fill="currentColor" />
                <circle cx="8" cy="11" r="1.5" fill="currentColor" />
              </svg>
            ),
          },
          {
            label: 'Field operations',
            href: '#apps',
            iconBg: 'bg-amber-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M8 3.5c-2 0-3.5 1.5-3.5 3.5 0 2.5 3.5 5.5 3.5 5.5s3.5-3 3.5-5.5C11.5 5 10 3.5 8 3.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle cx="8" cy="7" r="1.25" fill="currentColor" />
              </svg>
            ),
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Customer stories',
            href: '#',
            iconBg: 'bg-pink-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M4 5.5h8M4 8h5.5M4 10.5h6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ),
          },
          {
            label: 'Talk to sales',
            href: demoUrl,
            iconBg: 'bg-neutral-400',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M3.5 6.5c0-1.5 1.35-2.5 3-2.5h3c1.65 0 3 1 3 2.5v3c0 1.5-1.35 2.5-3 2.5h-.75L8 13.5 6.75 12H6c-1.65 0-3-1-3-2.5v-3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 'Learn',
    columns: [
      {
        title: 'Resources',
        items: [
          {
            label: 'Blog',
            href: '/blog',
            iconBg: 'bg-brand',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M5 3.5h6v9H5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7h4M7 9.5h2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ),
          },
          {
            label: 'FAQ',
            href: '#',
            iconBg: 'bg-violet-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <circle cx="8" cy="8" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M6.25 6.25c0-1 .75-1.75 1.75-1.75s1.75.6 1.75 1.5c0 1.25-1.75 1.25-1.75 2.5M8 11.25v.25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ),
          },
          {
            label: 'Implementation guide',
            href: demoUrl,
            iconBg: 'bg-emerald-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M4 4.5h8v7H4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5 8.5 7.75 9.75 10 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
        ],
      },
      {
        title: 'Company',
        items: [
          {
            label: 'About Arivu',
            href: demoUrl,
            iconBg: 'bg-sky-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <circle cx="8" cy="8" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M8 7v3.5M8 5.75v.25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ),
          },
          {
            label: 'Contact us',
            href: demoUrl,
            iconBg: 'bg-amber-500',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path
                  d="M3.5 6.5c0-1.5 1.35-2.5 3-2.5h3c1.65 0 3 1 3 2.5v3c0 1.5-1.35 2.5-3 2.5h-.75L8 13.5 6.75 12H6c-1.65 0-3-1-3-2.5v-3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
        ],
      },
      {
        title: 'Get started',
        items: [
          {
            label: 'Book a demo',
            href: demoUrl,
            iconBg: 'bg-brand',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <rect x="3.5" y="4" width="9" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 3v2M10 3v2M3.5 7h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ),
          },
          {
            label: 'Watch demo',
            href: demoUrl,
            iconBg: 'bg-neutral-400',
            icon: (
              <svg viewBox="0 0 16 16" className="size-3" aria-hidden="true">
                <path d="M6.5 5.5v5l4.5-2.5-4.5-2.5z" fill="currentColor" />
              </svg>
            ),
          },
        ],
      },
    ],
  },
]

export function NavMegaMenuPanel({
  menuId,
  arrowLeft,
  onMouseEnter,
  onMouseLeave,
  dark = false,
}: {
  menuId: string
  arrowLeft: number
  onMouseEnter: () => void
  onMouseLeave: () => void
  dark?: boolean
}) {
  let menu = navMenus.find((entry) => entry.id === menuId)
  if (!menu) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18, ease: easeOut }}
      className="absolute inset-x-0 top-[calc(100%+6px)] z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={clsx(
          'relative overflow-visible rounded-2xl border',
          dark
            ? 'border-white/10 bg-neutral-950 shadow-[0_12px_40px_rgb(0_0_0/0.55)]'
            : 'border-black/[0.07] bg-white shadow-[0_12px_40px_rgb(26_31_54/0.12)]',
        )}
      >
        <div
          className={clsx(
            'pointer-events-none absolute -top-[5px] size-[10px] -translate-x-1/2 rotate-45 border-t border-l',
            dark ? 'border-white/10 bg-neutral-950' : 'border-black/[0.07] bg-white',
          )}
          style={{ left: arrowLeft }}
          aria-hidden="true"
        />

        <div className="grid gap-x-6 gap-y-8 px-7 py-6 sm:grid-cols-2 lg:grid-cols-5">
          {menu.columns.map((column) => (
            <div key={column.title} className="min-w-0">
              <p
                className={clsx(
                  'text-[11px] font-semibold tracking-[0.08em] uppercase',
                  dark ? 'text-white/45' : 'text-ink-tertiary',
                )}
              >
                {column.title}
              </p>
              <ul className="mt-3 space-y-1">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={clsx(
                        'group flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors',
                        dark ? 'data-hover:bg-white/5' : 'data-hover:bg-surface-muted',
                      )}
                    >
                      <IconSquare bg={item.iconBg}>{item.icon}</IconSquare>
                      <span
                        className={clsx(
                          'text-[14px] font-medium transition-colors',
                          dark
                            ? 'text-white/75 group-data-hover:text-white'
                            : 'text-ink group-data-hover:text-brand',
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function NavMegaMenuMobile({
  menuId,
  dark = false,
}: {
  menuId: string
  dark?: boolean
}) {
  let menu = navMenus.find((entry) => entry.id === menuId)
  if (!menu) return null

  return (
    <div
      className={clsx(
        'mt-1 mb-2 space-y-4 border-l pl-4',
        dark ? 'border-white/15' : 'border-border/60',
      )}
    >
      {menu.columns.map((column) => (
        <div key={column.title}>
          <p
            className={clsx(
              'text-[11px] font-semibold tracking-[0.08em] uppercase',
              dark ? 'text-white/45' : 'text-ink-tertiary',
            )}
          >
            {column.title}
          </p>
          <ul className="mt-2 space-y-1">
            {column.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={clsx(
                    'flex items-center gap-2.5 rounded-lg py-1.5 text-[15px] font-medium',
                    dark ? 'text-white/70' : 'text-ink-secondary',
                  )}
                >
                  <IconSquare bg={item.iconBg}>{item.icon}</IconSquare>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
