'use client'

import Image from 'next/image'
import { Container } from '@/components/site/container'
import { Marquee, MarqueeItem } from '@/components/site/marquee'
import { FadeIn } from '@/components/site/motion'
import { SectionHeading } from '@/components/site/section'
import { customerLogos } from './data'

export function LogosMarqueeSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container wide>
        <FadeIn>
          <SectionHeading className="mx-auto max-w-2xl text-center">
            The choice of growing businesses shaping the future
          </SectionHeading>
        </FadeIn>
      </Container>

      <div className="mt-12 space-y-8">
        <Marquee speed={45} pauseOnHover>
          {customerLogos.map((logo) => (
            <MarqueeItem key={logo.name}>
              <LogoPill name={logo.name} src={logo.src} />
            </MarqueeItem>
          ))}
        </Marquee>
        <Marquee speed={50} reverse pauseOnHover>
          {[...customerLogos].reverse().map((logo) => (
            <MarqueeItem key={`rev-${logo.name}`}>
              <LogoPill name={logo.name} src={logo.src} />
            </MarqueeItem>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

function LogoPill({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex h-16 min-w-[160px] items-center justify-center rounded-2xl border border-border bg-surface px-8 shadow-soft">
      <Image
        src={src}
        alt={name}
        width={120}
        height={40}
        className="h-8 w-auto max-w-[120px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  )
}
