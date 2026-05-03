import { ComingSoonPage } from '@/components/coming-soon-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Arivu product details are coming soon.',
}

export default function Products() {
  return (
    <ComingSoonPage
      eyebrow="Products"
      title="Our product page is coming soon."
      description="We're preparing a clearer look at the systems Arivu brings together for modern teams."
    />
  )
}
