'use client'

import { clsx } from 'clsx'
import { Link } from '@/components/link'

export function PremierCtaButton({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={clsx('group relative inline-flex w-full gap-1 text-white sm:w-auto', className)}
    >
      <span
        className={clsx(
          'flex h-11 flex-1 items-center justify-center text-nowrap rounded-[14px] px-6 py-3.5',
          'bg-brand/90 text-[15px] font-normal transition-colors duration-200',
          'group-hover:bg-brand group-active:bg-brand-hover',
          'sm:flex-none',
        )}
      >
        {children}
      </span>
      <span
        className={clsx(
          'relative flex aspect-square h-11 min-w-11 items-center justify-center overflow-hidden rounded-[14px]',
          'bg-brand/90 transition-colors duration-200',
          'group-hover:bg-brand group-active:bg-brand-hover',
        )}
      >
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full group-hover:-translate-y-full">
          <DiagonalArrow />
        </span>
        <span className="absolute inset-0 flex -translate-x-full translate-y-full items-center justify-center transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
          <DiagonalArrow />
        </span>
      </span>
    </Link>
  )
}

function DiagonalArrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="w-[60%]"
      aria-hidden="true"
    >
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.993 13.332 7.255-7.256"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth="1.5"
        d="M6.828 5.582h7.92v7.92"
      />
    </svg>
  )
}
