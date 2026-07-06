'use client'

import { clsx } from 'clsx'
import { useCallback, useEffect, useState } from 'react'
import { Link } from '@/components/link'
import { BracketLabel } from '@/components/site/bracket-label'
import { Container } from '@/components/site/container'
import { Marquee, MarqueeItem } from '@/components/site/marquee'
import { FadeIn } from '@/components/site/motion'
import { SectionHeading } from '@/components/site/section'
import { quoteTestimonials, reviewCards } from './data'

export function TestimonialsSection() {
  let [activeQuote, setActiveQuote] = useState(0)

  let next = useCallback(() => {
    setActiveQuote((i) => (i + 1) % quoteTestimonials.length)
  }, [])

  useEffect(() => {
    let timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="overflow-hidden bg-surface py-20 sm:py-28">
      <Container wide>
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <BracketLabel>Customer Feedback</BracketLabel>
              <SectionHeading className="mt-4">
                Hear what our customers have to say
              </SectionHeading>
            </div>
            <Link
              href="#"
              className="text-[14px] font-semibold text-brand data-hover:text-brand-hover"
            >
              See all testimonials →
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative mt-12 min-h-[220px] rounded-3xl border border-border bg-surface-muted p-8 sm:p-12">
            {quoteTestimonials.map((item, index) => (
              <blockquote
                key={item.name}
                className={clsx(
                  'absolute inset-8 flex flex-col justify-center transition-all duration-700 sm:inset-12',
                  activeQuote === index
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-4 opacity-0',
                )}
              >
                <p className="max-w-3xl text-[1.25rem] leading-snug font-medium tracking-[-0.01em] text-ink sm:text-[1.5rem] lg:text-[1.75rem]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <p className="text-[15px] font-semibold text-ink">
                    {item.name}
                  </p>
                  <p className="mt-1 text-[14px] text-ink-secondary">
                    {item.role} | {item.company}
                  </p>
                </footer>
              </blockquote>
            ))}

            <div className="absolute right-6 bottom-6 flex gap-2 sm:right-10 sm:bottom-10">
              {quoteTestimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveQuote(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={clsx(
                    'size-2 rounded-full transition-all duration-300',
                    activeQuote === index
                      ? 'w-6 bg-brand'
                      : 'bg-border-strong data-hover:bg-brand/40',
                  )}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>

      <div className="mt-14 space-y-6">
        <Marquee speed={55} pauseOnHover>
          {reviewCards.map((card) => (
            <MarqueeItem key={card.company}>
              <ReviewCard {...card} />
            </MarqueeItem>
          ))}
        </Marquee>
        <p className="text-center text-[13px] font-medium text-ink-tertiary">
          Over 500+ verified reviews
        </p>
      </div>
    </section>
  )
}

function ReviewCard({
  company,
  location,
  name,
  role,
  quote,
}: (typeof reviewCards)[number]) {
  return (
    <div className="w-[320px] rounded-2xl border border-border bg-surface p-6 shadow-card sm:w-[360px]">
      <p className="text-[13px] font-semibold text-ink">{company}</p>
      <p className="text-[12px] text-ink-tertiary">{location}</p>
      <p className="mt-4 text-[14px] leading-6 text-ink-secondary">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-5 border-t border-border pt-4">
        <p className="text-[14px] font-semibold text-ink">{name}</p>
        <p className="text-[12px] text-ink-tertiary">{role}</p>
      </div>
    </div>
  )
}
