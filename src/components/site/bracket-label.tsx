import { clsx } from 'clsx'

export function BracketLabel({
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
        'text-[13px] font-medium tracking-wide sm:text-[14px]',
        light ? 'text-white/60' : 'text-ink-tertiary',
        className,
      )}
    >
      <span aria-hidden="true">[ </span>
      {children}
      <span aria-hidden="true"> ]</span>
    </p>
  )
}
