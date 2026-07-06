import {
  DifferentiatorsSection,
  FaqSection,
  FeaturesTabsSection,
  HeroSection,
  IndustriesSection,
  // LogosMarqueeSection,
  PlatformSection,
  // TestimonialsSection,
  TransformationSection,
  WhyTeamsChooseSection,
} from '@/components/home'
import { SiteFooter } from '@/components/site/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Everything to Grow',
  description:
    'Arivu is a process-first platform that helps businesses structure operations, simplify execution, and scale through connected business applications.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <TransformationSection />
        <PlatformSection />
        <WhyTeamsChooseSection />
        {/* <LogosMarqueeSection /> */}
        <FeaturesTabsSection />
        <IndustriesSection />
        {/* <TestimonialsSection /> */}
        <DifferentiatorsSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  )
}
