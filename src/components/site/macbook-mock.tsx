'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import type { ReactNode } from 'react'

export function MacbookMock({
  src,
  alt,
  className,
  priority,
  overlay,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  overlay?: ReactNode
}) {
  return (
    <div className={clsx('relative mx-auto w-full max-w-[720px]', className)}>
      <div className="relative rounded-t-[1.25rem] border border-white/10 bg-dark-elevated p-2 shadow-elevated sm:rounded-t-[1.5rem] sm:p-2.5">
        <div className="overflow-hidden rounded-t-xl bg-black sm:rounded-t-2xl">
          <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#1a1a22] px-4 py-2.5">
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
          </div>
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 720px"
              priority={priority}
            />
            {overlay}
          </div>
        </div>
      </div>
      <div
        className="relative mx-auto h-3 w-[92%] rounded-b-lg bg-gradient-to-b from-[#2a2a32] to-[#1a1a22] sm:h-4"
        aria-hidden="true"
      />
      <div
        className="relative mx-auto h-1 w-[16%] rounded-b-md bg-[#3a3a44]"
        aria-hidden="true"
      />
    </div>
  )
}
