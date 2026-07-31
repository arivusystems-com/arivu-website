'use client'

import { HELP_EMBED_MOUNT_CONFIG } from '@/lib/help-embed'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    ArivuHeadlessHelp?: {
      mount: (config: Record<string, unknown>) => Promise<unknown>
    }
  }
}

function waitForHelpScript(timeoutMs = 10_000) {
  if (window.ArivuHeadlessHelp) {
    return Promise.resolve()
  }

  return new Promise<void>((resolve, reject) => {
    let startedAt = Date.now()

    let intervalId = window.setInterval(() => {
      if (window.ArivuHeadlessHelp) {
        window.clearInterval(intervalId)
        resolve()
        return
      }

      if (Date.now() - startedAt >= timeoutMs) {
        window.clearInterval(intervalId)
        reject(new Error('Help embed script not loaded'))
      }
    }, 50)
  })
}

export function HelpEmbedMount() {
  let pathname = usePathname()

  useEffect(() => {
    let cancelled = false

    waitForHelpScript()
      .then(() => {
        if (cancelled || !window.ArivuHeadlessHelp) return

        return window.ArivuHeadlessHelp.mount({
          ...HELP_EMBED_MOUNT_CONFIG,
          pathname,
        })
      })
      .catch((error) => {
        console.error('[HelpEmbedMount]', error)
      })

    return () => {
      cancelled = true
    }
  }, [pathname])

  return null
}
