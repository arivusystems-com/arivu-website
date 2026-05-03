import { ComingSoonPage } from '@/components/coming-soon-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Arivu solution details are coming soon.',
}

export default function Solutions() {
  return (
    <ComingSoonPage
      eyebrow="Solutions"
      title="Our solutions page is coming soon."
      description="We're mapping the use cases, workflows, and team outcomes this section should cover."
    />
  )
}
