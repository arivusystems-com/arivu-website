import { clsx } from 'clsx'

export function Container({
  className,
  children,
  narrow,
  wide,
}: {
  className?: string
  children: React.ReactNode
  narrow?: boolean
  wide?: boolean
}) {
  return (
    <div className={clsx('mx-auto w-full px-6 lg:px-10', className)}>
      <div
        className={clsx(
          'mx-auto',
          narrow && 'max-w-3xl',
          wide && 'max-w-[1240px]',
          !narrow && !wide && 'max-w-[960px]',
        )}
      >
        {children}
      </div>
    </div>
  )
}
