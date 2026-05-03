import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

const demoUrl = 'https://app.arivusystems.com/demo'

export function ComingSoonPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-3xl">
          <Subheading>{eyebrow}</Subheading>
          <Heading as="h1" className="mt-4">
            {title}
          </Heading>
          <Lead className="mt-6">{description}</Lead>
          <p className="mt-6 max-w-2xl text-base/7 text-gray-600">
            We&apos;re shaping this page with the same care as the platform
            itself. In the meantime, you can book a demo or head back home.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={demoUrl} className="min-h-12 px-7">
              Book a demo
            </Button>
            <Button variant="outline" href="/" className="min-h-12 px-7">
              Back to home
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
