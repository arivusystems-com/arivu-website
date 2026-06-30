import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import { Container } from '@/components/site/container'

const demoUrl = 'https://app.arivusystems.com/demo'

const columns = [
  {
    title: 'Platform',
    links: [
      { href: '#platform', label: 'Overview' },
      { href: '#how-it-works', label: 'How it works' },
      { href: demoUrl, label: 'Pricing' },
    ],
  },
  {
    title: 'Applications',
    links: [
      { href: '#apps', label: 'All apps' },
      { href: '#apps', label: 'Sales' },
      { href: '#apps', label: 'Projects' },
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
      { href: 'https://app.arivusystems.com/login', label: 'Log in' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container wide className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_1fr] lg:gap-16">
          <div>
            <Logo className="h-8" />
            <p className="mt-5 max-w-xs text-[14px] leading-7 text-ink-secondary">
              A process-first platform for growing businesses.
            </p>
            <p className="mt-8 text-[13px] text-ink-tertiary">
              &copy; {new Date().getFullYear()} Arivu Systems
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map(({ title, links }) => (
              <div key={title}>
                <p className="text-[13px] font-semibold text-ink">{title}</p>
                <ul className="mt-4 space-y-2.5">
                  {links.map(({ href, label }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[14px] text-ink-secondary transition-colors data-hover:text-brand"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[13px] font-semibold text-ink">Stay updated</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 rounded-full border border-border bg-surface px-4 py-2.5 text-[14px] text-ink outline-none placeholder:text-ink-tertiary focus:border-brand focus:ring-2 focus:ring-brand-ring"
              />
              <button
                type="button"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-brand"
                aria-label="Subscribe"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
            <div className="mt-6 flex gap-3">
              {['LinkedIn', 'X', 'YouTube'].map((network) => (
                <span
                  key={network}
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-surface text-[11px] font-medium text-ink-tertiary"
                  aria-label={network}
                >
                  {network.charAt(0)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
