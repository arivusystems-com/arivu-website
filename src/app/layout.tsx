import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    template: '%s · Arivu',
    default: 'Arivu — Everything to Grow',
  },
  description:
    'Arivu is a process-first platform that helps businesses structure operations, simplify execution, and scale through connected business applications.',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Arivu Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="bg-surface font-sans text-ink antialiased [font-feature-settings:'cv01','cv03','cv04','cv11']">
        {children}
        {process.env.NEXT_PUBLIC_ARIVU_CHAT_INSTANCE_KEY ? (
          <Script
            src="https://app.arivusystems.com/embed/chat.js"
            data-instance={process.env.NEXT_PUBLIC_ARIVU_CHAT_INSTANCE_KEY}
            data-position="right"
            data-theme="light"
            data-api-origin={
              process.env.NEXT_PUBLIC_ARIVU_CHAT_API_ORIGIN ??
              'https://api.arivusystems.com'
            }
            strategy="afterInteractive"
          />
        ) : null}
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
      </body>
    </html>
  )
}
