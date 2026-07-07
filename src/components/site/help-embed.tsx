'use client'

import { HelpEmbedSkeleton } from '@/components/site/help-embed-skeleton'
import {
  HELP_EMBED_API_ORIGIN,
  HELP_EMBED_ORG,
  HELP_EMBED_SCRIPT,
} from '@/lib/help-embed'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    ArivuHeadlessHelp?: {
      mount: (config: Record<string, unknown>) => Promise<unknown>
    }
  }
}

function loadEmbedScript() {
  if (window.ArivuHeadlessHelp) {
    return Promise.resolve()
  }

  let existing = document.querySelector<HTMLScriptElement>(
    `script[src="${HELP_EMBED_SCRIPT}"]`,
  )

  if (existing) {
    return new Promise<void>((resolve, reject) => {
      if (window.ArivuHeadlessHelp) {
        resolve()
        return
      }

      existing!.addEventListener('load', () => resolve(), { once: true })
      existing!.addEventListener(
        'error',
        () => reject(new Error('Failed to load help embed')),
        { once: true },
      )
    })
  }

  return new Promise<void>((resolve, reject) => {
    let script = document.createElement('script')
    script.src = HELP_EMBED_SCRIPT
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load help embed'))
    document.body.appendChild(script)
  })
}

function waitForPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve())
    })
  })
}

export function HelpEmbed() {
  let pathname = usePathname()
  let mountRef = useRef<HTMLDivElement>(null)
  let [loading, setLoading] = useState(true)
  let [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    let cancelled = false
    let mountEl = mountRef.current
    if (!mountEl) return

    setLoading(true)
    setShowOverlay(true)
    mountEl.replaceChildren()

    loadEmbedScript()
      .then(() => {
        if (cancelled || !mountRef.current || !window.ArivuHeadlessHelp) return

        return window.ArivuHeadlessHelp.mount({
          org: HELP_EMBED_ORG,
          target: mountRef.current,
          apiOrigin: HELP_EMBED_API_ORIGIN,
          pathPrefix: '/help/',
          title: 'Help Center',
          searchEnabled: true,
          showSidebar: true,
          showBreadcrumbs: true,
          pathname,
        })
      })
      .then(() => waitForPaint())
      .then(() => {
        if (!cancelled) setLoading(false)
      })
      .catch((error) => {
        console.error('[HelpEmbed]', error)
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [pathname])

  return (
    <div className="relative min-h-[28rem] sm:min-h-[32rem]">
      <div
        ref={mountRef}
        id="arivu-help"
        aria-busy={loading}
        aria-live="polite"
        className={clsx(
          'transition-opacity duration-500 ease-out motion-reduce:transition-none',
          loading ? 'opacity-0' : 'opacity-100',
        )}
      />
      {showOverlay ? (
        <div
          aria-hidden={!loading}
          className={clsx(
            'absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none',
            loading
              ? 'opacity-100'
              : 'pointer-events-none opacity-0',
          )}
          onTransitionEnd={(event) => {
            if (
              event.propertyName === 'opacity' &&
              !loading &&
              event.currentTarget === event.target
            ) {
              setShowOverlay(false)
            }
          }}
        >
          {loading ? <p className="sr-only">Loading help center…</p> : null}
          <HelpEmbedSkeleton />
        </div>
      ) : null}
    </div>
  )
}
