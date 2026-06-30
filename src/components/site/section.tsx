import { clsx } from 'clsx'

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-semibold tracking-[0.08em] text-brand uppercase">
      {children}
    </p>
  )
}

export function SectionHeading({
  children,
  className,
  as: Element = 'h2',
  light,
}: {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  light?: boolean
}) {
  return (
    <Element
      className={clsx(
        'text-[2rem] leading-[1.15] font-bold tracking-[-0.03em] text-balance sm:text-[2.5rem] sm:leading-[1.12] lg:text-[2.75rem]',
        light ? 'text-white' : 'text-ink',
        className,
      )}
    >
      {children}
    </Element>
  )
}

export function SectionLead({
  children,
  className,
  light,
}: {
  children: React.ReactNode
  className?: string
  light?: boolean
}) {
  return (
    <p
      className={clsx(
        'text-[16px] leading-[1.7] sm:text-[17px] sm:leading-[1.75]',
        light ? 'text-white/75' : 'text-ink-secondary',
        className,
      )}
    >
      {children}
    </p>
  )
}

export function Section({
  id,
  children,
  className,
  muted,
}: {
  id?: string
  children: React.ReactNode
  className?: string
  muted?: boolean
}) {
  return (
    <section
      id={id}
      className={clsx(
        'py-20 sm:py-28',
        muted ? 'bg-surface-muted' : 'bg-surface',
        className,
      )}
    >
      {children}
    </section>
  )
}

export function CheckItem({
  children,
  light,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={clsx(
          'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
          light ? 'bg-white/15 text-white' : 'bg-brand-light text-brand',
        )}
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="size-3">
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span
        className={clsx(
          'text-[15px] leading-7',
          light ? 'text-white/85' : 'text-ink-secondary',
        )}
      >
        {children}
      </span>
    </li>
  )
}
