'use client'

import { Container } from '@/components/site/container'
import { FadeIn } from '@/components/site/motion'
import { Section, SectionHeading, SectionLead } from '@/components/site/section'
import { problemSolutionBridge } from './data'
import { ProblemIllustration } from './problem-illustration'

export function ProblemSection() {
  return (
    <Section id="problem" muted>
      <Container wide>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-brand uppercase sm:text-[12px]">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-3.5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              The Problem
            </span>

            <SectionHeading className="mt-5">
              Growth breaks when everything is{' '}
              <span className="text-brand">disconnected.</span>
            </SectionHeading>

            <SectionLead className="mx-auto mt-5 max-w-2xl">
              Businesses don&apos;t struggle because they lack ambition. They
              struggle because their processes live in disconnected tools, with
              no single source of truth.
            </SectionLead>

            {/* Pain points — hidden for now
            <p className="mt-8 overflow-x-auto text-[14px] font-semibold whitespace-nowrap text-ink sm:text-[15px]">
              {problemItems.map((item, index) => (
                <span key={item}>
                  {index > 0 ? (
                    <span className="mx-3 text-brand-subtle" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                  {item}
                </span>
              ))}
            </p>
            */}
          </FadeIn>
        </div>

        <FadeIn delay={0.08} className="mt-12 w-full sm:mt-14 lg:mt-16">
          <ProblemIllustration />
        </FadeIn>

        <FadeIn delay={0.12} className="mt-8 text-center sm:mt-10">
          <p className="inline-flex items-center gap-2 overflow-x-auto text-[14px] font-semibold whitespace-nowrap text-ink sm:text-[15px]">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 shrink-0 text-brand"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {problemSolutionBridge}
          </p>
        </FadeIn>
      </Container>
    </Section>
  )
}
