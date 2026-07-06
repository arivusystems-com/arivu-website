import { Container } from '@/components/site/container'
import { SiteFooter } from '@/components/site/footer'
import { SiteNav, SiteNavSpacer } from '@/components/site/nav'

const legalContentClassName = [
  'space-y-8 text-[15px] leading-[1.75] text-white/70 sm:text-[16px] sm:leading-[1.8]',
  '[&_strong]:font-semibold [&_strong]:text-white',
  '[&_a]:text-white [&_a]:underline [&_a]:decoration-white/30 [&_a]:underline-offset-2',
  '[&_a]:transition-colors hover:[&_a]:decoration-white/60',
  '[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-white/40',
].join(' ')

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string
  lastUpdated: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      <SiteNav theme="dark" />
      <SiteNavSpacer />
      <main className="pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pt-16">
        <Container narrow>
          <h1 className="text-[2rem] font-bold tracking-[-0.03em] text-white sm:text-[2.25rem]">
            {title}
          </h1>
          <p className="mt-3 text-[14px] text-white/45">Last updated {lastUpdated}</p>

          <div className={`${legalContentClassName} mt-12 sm:mt-14`}>{children}</div>
        </Container>
      </main>
      <SiteFooter theme="black" />
    </div>
  )
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-[15px] font-bold text-white sm:text-[16px]">{title}</h2>
      <div className="mt-3 space-y-4">{children}</div>
    </section>
  )
}
