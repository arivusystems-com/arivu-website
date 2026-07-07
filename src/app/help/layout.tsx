import {
  HELP_EMBED_API_ORIGIN,
  HELP_EMBED_CSS,
  HELP_EMBED_SCRIPT,
} from '@/lib/help-embed'
import type { ReactNode } from 'react'

export default function HelpLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="preload" href={HELP_EMBED_CSS} as="style" />
      <link rel="stylesheet" href={HELP_EMBED_CSS} />
      {children}
    </>
  )
}
