import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import {
  ArrowRightIcon,
  ChartBarSquareIcon,
  ChartPieIcon,
  ClipboardDocumentListIcon,
  ComputerDesktopIcon,
  CubeIcon,
  FolderIcon,
  LifebuoyIcon,
  MegaphoneIcon,
  PencilSquareIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Arivu connects operational apps and market execution into one growth loop for modern teams.',
}

const appSystems = [
  { name: 'Sales pipeline', icon: ChartBarSquareIcon },
  { name: 'Customer support', icon: LifebuoyIcon },
  { name: 'Project delivery', icon: FolderIcon },
  { name: 'Inventory control', icon: CubeIcon },
  { name: 'Finance operations', icon: ClipboardDocumentListIcon },
]

const studioSystems = [
  { name: 'Brand strategy', icon: ChartPieIcon },
  { name: 'Website systems', icon: ComputerDesktopIcon },
  { name: 'Campaign engine', icon: MegaphoneIcon },
  { name: 'Content creation', icon: PencilSquareIcon },
  { name: 'Growth analytics', icon: UsersIcon },
]

const demoUrl = 'https://app.arivusystems.com/demo'

function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-linear-to-r from-blue-100/75 via-white to-orange-100/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10">
        <GradientBackground />
      </div>
      <div className="absolute inset-y-0 left-0 -z-10 w-1/2 bg-[radial-gradient(circle_at_1px_1px,var(--color-blue-200)_1px,transparent_0)] bg-size-[18px_18px] opacity-45" />
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(circle_at_1px_1px,var(--color-orange-200)_1px,transparent_0)] bg-size-[18px_18px] opacity-40" />

      <Container className="relative">
        <Navbar />
        <div className="relative left-1/2 w-screen -translate-x-1/2 pt-4 pb-20 sm:pt-6 sm:pb-28 md:pt-8 md:pb-36">
          <div className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-2 text-center sm:px-10 sm:pt-4 lg:pt-6">
              <div className="inline-flex rounded-full bg-linear-to-r from-blue-500/22 via-gray-950/10 to-orange-500/22 p-px">
                <p className="rounded-full bg-white/80 px-4 py-1.5 text-xs/5 font-semibold tracking-wide text-gray-950/65 uppercase">
                  Arivu Connected Growth System
                </p>
              </div>
              <h1 className="font-display mx-auto mt-4 max-w-6xl text-5xl/[1.08] font-semibold tracking-tight text-balance text-gray-950 sm:text-6xl/[1.06] lg:text-6xl/[1.06] xl:text-6xl/[1.06]">
                <span className="lg:whitespace-nowrap">
                  Run the business. Grow the market.
                </span>{' '}
                Keep both in sync.
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-lg/7 font-medium text-gray-950/60 sm:text-xl/8">
                Arivu connects operational apps and market execution into one
                growth loop for modern teams.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={demoUrl} className="min-h-12 px-7 text-lg">
                  Book a demo
                </Button>
                <Button
                  variant="outline"
                  href="#"
                  className="min-h-12 px-7 text-lg"
                >
                  See how it works
                </Button>
              </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-10 sm:px-10 sm:pt-14 sm:pb-14 lg:px-0 lg:pt-16">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_30rem_minmax(0,1fr)] lg:items-stretch lg:gap-0">
                <section className="relative z-10 flex flex-col rounded-4xl bg-white/82 p-5 ring-1 ring-blue-600/20 transition-opacity duration-200 hover:opacity-95 sm:p-6">
                  <div className="flex min-h-18 items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-600/15">
                      <Squares2X2Icon className="size-6" />
                    </div>
                    <div>
                      <p className="text-sm/6 font-medium tracking-wide text-blue-600 uppercase">
                        Operations
                      </p>
                      <h2 className="font-display mt-2 text-3xl/[1] font-medium tracking-tight text-gray-950">
                        Arivu Apps
                      </h2>
                      {/* <p className="mt-4 max-w-sm text-sm/6 font-medium text-gray-950/55">
                        The internal operating layer for sales, support,
                        delivery, inventory, and finance.
                      </p> */}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-2">
                    {appSystems.map((item) => {
                      const Icon = item.icon

                      return (
                        <div
                          key={item.name}
                          className="flex h-12 items-center gap-3 rounded-xl bg-white px-3 ring-1 ring-black/5"
                        >
                          <Icon className="size-5 text-blue-600" />
                          <span className="text-sm/6 font-medium text-gray-950">
                            {item.name}
                          </span>
                          <ArrowRightIcon className="ml-auto size-4 text-blue-600/45" />
                        </div>
                      )
                    })}
                  </div>

                  <p className="mt-6 text-sm/6 font-medium text-gray-950/50">
                    Operational clarity. Measurable results.
                  </p>
                </section>

                <div className="relative flex min-h-72 items-center justify-center py-8 lg:min-h-full lg:items-start lg:py-0">
                  <svg
                    viewBox="0 0 480 272"
                    aria-hidden="true"
                    className="absolute top-30 hidden h-68 w-full lg:block"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id="appsLineGradient"
                        x1="0"
                        y1="0"
                        x2="240"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#93c5fd" stopOpacity="0.42" />
                        <stop offset="0.65" stopColor="#60a5fa" />
                        <stop offset="1" stopColor="#2563eb" />
                      </linearGradient>
                      <linearGradient
                        id="studioLineGradient"
                        x1="240"
                        y1="0"
                        x2="480"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#f97316" />
                        <stop offset="0.3" stopColor="#fb923c" />
                        <stop
                          offset="1"
                          stopColor="#fdba74"
                          stopOpacity="0.42"
                        />
                      </linearGradient>
                      <linearGradient
                        id="orbitGradient"
                        x1="154"
                        y1="136"
                        x2="326"
                        y2="136"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2563eb" stopOpacity="0.22" />
                        <stop
                          offset="0.5"
                          stopColor="#e5e7eb"
                          stopOpacity="0.12"
                        />
                        <stop
                          offset="1"
                          stopColor="#f97316"
                          stopOpacity="0.22"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 24H152C190 24 188 96 240 96"
                      stroke="url(#appsLineGradient)"
                      strokeOpacity="0.36"
                    />
                    <path
                      d="M0 80H164C198 80 198 122 240 122"
                      stroke="url(#appsLineGradient)"
                      strokeOpacity="0.46"
                    />
                    <path
                      d="M0 136H240"
                      stroke="url(#appsLineGradient)"
                      strokeOpacity="0.5"
                    />
                    <path
                      d="M0 192H164C198 192 198 150 240 150"
                      stroke="url(#appsLineGradient)"
                      strokeOpacity="0.46"
                    />
                    <path
                      d="M0 248H152C190 248 188 176 240 176"
                      stroke="url(#appsLineGradient)"
                      strokeOpacity="0.36"
                    />
                    <path
                      d="M240 96C292 96 290 24 328 24H480"
                      stroke="url(#studioLineGradient)"
                      strokeOpacity="0.36"
                    />
                    <path
                      d="M240 122C282 122 282 80 316 80H480"
                      stroke="url(#studioLineGradient)"
                      strokeOpacity="0.46"
                    />
                    <path
                      d="M240 136H480"
                      stroke="url(#studioLineGradient)"
                      strokeOpacity="0.5"
                    />
                    <path
                      d="M240 150C282 150 282 192 316 192H480"
                      stroke="url(#studioLineGradient)"
                      strokeOpacity="0.46"
                    />
                    <path
                      d="M240 176C292 176 290 248 328 248H480"
                      stroke="url(#studioLineGradient)"
                      strokeOpacity="0.36"
                    />
                    {[24, 80, 136, 192, 248].map((cy) => (
                      <circle
                        key={`left-${cy}`}
                        cx={
                          cy === 136 ? 120 : cy === 80 || cy === 192 ? 164 : 152
                        }
                        cy={cy}
                        r="4"
                        fill="#2563eb"
                        fillOpacity="0.65"
                      />
                    ))}
                    {[24, 80, 136, 192, 248].map((cy) => (
                      <circle
                        key={`right-${cy}`}
                        cx={
                          cy === 136 ? 360 : cy === 80 || cy === 192 ? 316 : 328
                        }
                        cy={cy}
                        r="4"
                        fill="#f97316"
                        fillOpacity="0.65"
                      />
                    ))}
                    <circle
                      cx="240"
                      cy="136"
                      r="86"
                      stroke="url(#orbitGradient)"
                      strokeDasharray="4 6"
                    />
                    <circle
                      cx="240"
                      cy="136"
                      r="62"
                      stroke="url(#orbitGradient)"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 272 160"
                    aria-hidden="true"
                    className="absolute inset-x-0 top-1/2 h-40 w-full -translate-y-1/2 lg:hidden"
                    fill="none"
                  >
                    <path d="M0 80H272" stroke="#020617" strokeOpacity="0.12" />
                    <circle
                      cx="136"
                      cy="80"
                      r="58"
                      stroke="#020617"
                      strokeOpacity="0.08"
                    />
                  </svg>

                  <div className="relative flex flex-col items-center lg:mt-48">
                    <div className="flex size-34 items-center justify-center rounded-full bg-linear-to-r from-blue-50 from-50% to-orange-50 to-50% p-2 ring-1 ring-black/10 transition-transform duration-200 hover:scale-105">
                      <div className="flex size-full items-center justify-center rounded-full bg-white ring-1 ring-black/5">
                        <img
                          src="/logo/Logo_dark.svg"
                          alt=""
                          className="h-20 w-auto"
                        />
                      </div>
                    </div>
                    {/* <div className="mt-5 rounded-full bg-white px-4 py-2 text-sm/6 font-medium text-gray-950/60 ring-1 ring-black/10">
                      Connected intelligence layer
                    </div> */}
                  </div>
                </div>

                <section className="relative z-10 flex flex-col rounded-4xl bg-white/82 p-5 ring-1 ring-orange-500/20 transition-opacity duration-200 hover:opacity-95 sm:p-6 lg:text-right">
                  <div className="flex min-h-18 items-start gap-4 lg:flex-row-reverse">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 ring-1 ring-orange-500/15">
                      <PencilSquareIcon className="size-6" />
                    </div>
                    <div>
                      <p className="text-sm/6 font-medium tracking-wide text-orange-600 uppercase">
                        Market
                      </p>
                      <h2 className="font-display mt-2 text-3xl/[1] font-medium tracking-tight text-gray-950">
                        Arivu Studio
                      </h2>
                      {/* <p className="mt-4 max-w-sm text-sm/6 font-medium text-gray-950/55 lg:ml-auto">
                        The market activation layer for brand, web, campaigns,
                        content, and growth analytics.
                      </p> */}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-2">
                    {studioSystems.map((item) => {
                      const Icon = item.icon

                      return (
                        <div
                          key={item.name}
                          className="flex h-12 items-center gap-3 rounded-xl bg-white px-3 ring-1 ring-black/5 lg:flex-row-reverse"
                        >
                          <Icon className="size-5 text-orange-500" />
                          <span className="text-sm/6 font-medium text-gray-950">
                            {item.name}
                          </span>
                          <ArrowRightIcon className="size-4 text-orange-500/45 lg:mr-auto lg:rotate-180" />
                        </div>
                      )
                    })}
                  </div>

                  <p className="mt-6 text-sm/6 font-medium text-gray-950/50">
                    Market activation. Sustainable growth.
                  </p>
                </section>
              </div>

              <div className="mt-8 rounded-2xl bg-linear-to-r from-blue-500/35 via-gray-300/25 to-orange-500/35 p-px">
                <div className="grid rounded-[calc(1rem-1px)] bg-white/82 text-center sm:grid-cols-3">
                  {[
                    ['01', 'Operate with Apps'],
                    ['02', 'Connect through Arivu'],
                    ['03', 'Activate with Studio'],
                  ].map(([step, label]) => (
                    <div
                      key={step}
                      className="relative px-4 py-4 sm:after:absolute sm:after:inset-y-4 sm:after:left-0 sm:after:w-px sm:after:bg-gray-950/10 sm:first:after:hidden"
                    >
                      <p className="text-xs/5 font-medium tracking-wide text-gray-950/40">
                        {step}
                      </p>
                      <p className="mt-1 text-sm/6 font-medium text-gray-950">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Sales</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Know more about your customers than they do.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
