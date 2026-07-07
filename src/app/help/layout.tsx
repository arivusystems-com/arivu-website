import {
  HELP_EMBED_API_ORIGIN,
  HELP_EMBED_CSS,
  HELP_EMBED_SCRIPT,
} from '@/lib/help-embed'
import type { ReactNode } from 'react'

export default function HelpLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="preconnect" href={HELP_EMBED_API_ORIGIN} />
      <link rel="dns-prefetch" href={HELP_EMBED_API_ORIGIN} />
      <link
        rel="preload"
        href={HELP_EMBED_CSS}
        as="style"
      />
      <link
        rel="stylesheet"
        href={HELP_EMBED_CSS}
        data-arivu-headless-blocks-css="true"
      />
      <link
        rel="preload"
        href={HELP_EMBED_SCRIPT}
        as="script"
      />
      {children}
    </>
  )
}
