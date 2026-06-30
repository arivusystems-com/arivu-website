import {
  AudienceSection,
  CtaSection,
  HeroSection,
  PlatformSection,
  ProblemSection,
  ProcessSection,
  WhyChooseSection,
  WorkspaceProofSection,
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
        <ProblemSection />
        <PlatformSection />
        <ProcessSection />
        <WorkspaceProofSection />
        <WhyChooseSection />
        <AudienceSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
