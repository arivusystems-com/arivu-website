'use client'

import { clsx } from 'clsx'
import type { ReactNode } from 'react'

export function Marquee({
  children,
  className,
  reverse,
  speed = 40,
  pauseOnHover,
}: {
  children: ReactNode
  className?: string
  reverse?: boolean
  speed?: number
  pauseOnHover?: boolean
}) {
  return (
    <div
      className={clsx(
        'group/marquee relative flex overflow-hidden',
        pauseOnHover && '[&:hover_.marquee-track]:[animation-play-state:paused]',
        className,
      )}
    >
      <div
        className={clsx(
          'marquee-track flex min-w-max shrink-0 items-center gap-8',
          reverse ? 'animate-[marquee-reverse_var(--marquee-duration)_linear_infinite]' : 'animate-[marquee_var(--marquee-duration)_linear_infinite]',
        )}
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

export function MarqueeItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={clsx('flex shrink-0 items-center', className)}>
      {children}
    </div>
  )
}
