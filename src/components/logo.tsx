import { clsx } from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Arivu"
      role="img"
      className={clsx(className, 'inline-flex items-center')}
    >
      <img
        src="/logo/Logo_dark.svg"
        alt=""
        width={418}
        height={550}
        className="h-full w-auto shrink-0"
      />
      <svg
        viewBox="430 0 620 550"
        width={620}
        height={550}
        aria-hidden="true"
        focusable="false"
        className="h-full w-auto shrink-0"
      >
        <image href="/logo/Logo_word_dark.svg" width="1050" height="550" />
      </svg>
    </span>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/logo/Logo_dark.svg"
      alt=""
      width={418}
      height={550}
      className={clsx(className, 'w-auto')}
    />
  )
}
