import { ComingSoonPage } from '@/components/coming-soon-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Arivu pricing details are coming soon.',
}

export default function Pricing() {
  return (
    <ComingSoonPage
      eyebrow="Pricing"
      title="Pricing is coming soon."
      description="We're finalizing packages that fit real operating teams without making the page feel like a spreadsheet."
    />
  )
}
