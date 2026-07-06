'use client'

import { Disclosure, DisclosureButton } from '@headlessui/react'
import { clsx } from 'clsx'
import { useReducedMotion } from 'framer-motion'
import { useId } from 'react'
import { easeOut } from '@/components/site/motion'

function FaqItem({
  item,
}: {
  item: { question: string; answer: string }
}) {
  let panelId = useId()
  let reducedMotion = useReducedMotion()

  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <DisclosureButton
            aria-controls={panelId}
            className={clsx(
              'group flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors duration-300 sm:px-8 sm:py-6',
              open ? 'bg-brand-light/40' : 'data-hover:bg-surface-muted/70',
            )}
            style={{ transitionTimingFunction: `cubic-bezier(${easeOut.join(',')})` }}
          >
            <span
              className={clsx(
                'text-[16px] leading-snug transition-[font-weight,color] duration-300 sm:text-[17px]',
                open ? 'font-semibold text-ink' : 'font-medium text-ink',
              )}
            >
              {item.question}
            </span>
            <span
              className={clsx(
                'flex size-10 shrink-0 items-center justify-center rounded-[10px] transition-all duration-300',
                open
                  ? 'bg-brand text-white shadow-brand'
                  : 'bg-brand-light text-brand group-data-hover:bg-brand/15',
              )}
              style={{ transitionTimingFunction: `cubic-bezier(${easeOut.join(',')})` }}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={clsx(
                  'size-[18px] transition-transform duration-300',
                  open && 'rotate-180',
                )}
                style={{ transitionTimingFunction: `cubic-bezier(${easeOut.join(',')})` }}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="m10 11.339 5.292-5.292 1.414 1.414L10 14.167 3.294 7.461l1.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </DisclosureButton>

          <div
            id={panelId}
            role="region"
            aria-hidden={!open}
            className={clsx(
              'grid overflow-hidden',
              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
            style={{
              transitionProperty: 'grid-template-rows',
              transitionDuration: reducedMotion ? '0ms' : '420ms',
              transitionTimingFunction: `cubic-bezier(${easeOut.join(',')})`,
            }}
          >
            <div className="min-h-0 overflow-hidden">
              <div
                className={clsx(
                  'border-t border-brand/10 bg-brand-light/20 px-6 pb-6 sm:px-8 sm:pb-8',
                  !reducedMotion && 'transition-opacity duration-300',
                  open ? 'opacity-100' : 'opacity-0',
                )}
                style={
                  reducedMotion
                    ? undefined
                    : {
                        transitionDelay: open ? '80ms' : '0ms',
                        transitionTimingFunction: `cubic-bezier(${easeOut.join(',')})`,
                      }
                }
              >
                <p className="max-w-3xl pt-5 text-[15px] leading-7 text-ink-secondary sm:text-[16px] sm:leading-8">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
      {items.map((item) => (
        <FaqItem key={item.question} item={item} />
      ))}
    </div>
  )
}
