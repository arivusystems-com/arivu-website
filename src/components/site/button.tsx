import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from '@/components/link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2.5',
    'bg-brand text-sm font-semibold text-white shadow-brand',
    'transition-all duration-200',
    'data-hover:bg-brand-hover',
    'data-active:scale-[0.98]',
    'data-disabled:opacity-40 data-disabled:shadow-none',
  ),
  secondary: clsx(
    'inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-2.5',
    'border border-border bg-surface text-sm font-semibold text-ink',
    'transition-all duration-200',
    'data-hover:border-border-strong data-hover:bg-surface-muted',
    'data-active:scale-[0.98]',
    'data-disabled:opacity-40',
  ),
  ghost: clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2',
    'text-sm font-medium text-ink-secondary',
    'transition-colors duration-200',
    'data-hover:text-ink',
    'data-disabled:opacity-40',
  ),
  inverse: clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5',
    'bg-white text-sm font-semibold text-brand shadow-soft',
    'transition-all duration-200',
    'data-hover:bg-white/95',
    'data-active:scale-[0.98]',
    'data-disabled:opacity-40',
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={clsx('size-4', className)}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={clsx('size-4', className)}
      aria-hidden="true"
    >
      <path d="M6.3 4.2a1 1 0 011.05-.09l8.4 5.25a1 1 0 010 1.7l-8.4 5.25A1 1 0 015 15.25V4.75a1 1 0 011.3-.55z" />
    </svg>
  )
}
