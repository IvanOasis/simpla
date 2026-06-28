import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Simpla | Lifecycle Specialists for SaaS',
  description:
    'Simpla is a boutique lifecycle agency for SaaS and digital products. 10 years of hands-on experience building lifecycle systems from scratch.',
  alternates: { canonical: 'https://simpla.agency/about' },
  openGraph: {
    title: 'About Simpla | Lifecycle Specialists for SaaS',
    description:
      'Simpla is a boutique lifecycle agency for SaaS and digital products. 10 years of hands-on experience building lifecycle systems from scratch.',
    url: 'https://simpla.agency/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Simpla | Lifecycle Specialists for SaaS',
    description: 'Boutique lifecycle agency for SaaS and digital products.',
  },
}

export default function AboutPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-20 border-b border-smoke">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">About</p>
          <h1
            className="font-display font-bold text-ink leading-[1.06] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            <span className="text-gradient">Lifecycle specialists.</span>{' '}
            Not a full-service agency.
          </h1>
        </div>
      </section>

      {/* What Simpla is */}
      <section className="py-20 border-b border-smoke">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash mb-3">What Simpla is</p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-ash leading-relaxed text-[1.0625rem]">
            <p>
              Simpla is a boutique agency that builds lifecycle systems for SaaS and digital product
              companies. We don&rsquo;t do social media, paid ads or brand strategy. We build the
              infrastructure that connects what users do in your product to what you say to them.
            </p>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 border-b border-smoke bg-snow">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash mb-3">Who we are</p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-ash leading-relaxed text-[1.0625rem]">
            <p>
              Our founder has 10 years of hands-on experience in SaaS, Web3 and digital products,
              not as a consultant observing from the outside but as the person inside those companies
              defining user states, building event schemas, implementing lifecycle tools, and writing
              the messages that go inside the workflows.
            </p>
            <p className="text-ink font-medium">
              That background matters because lifecycle work is technical. It starts with your data,
              not your copy.
            </p>
          </div>
        </div>
      </section>

      {/* How we operate */}
      <section className="py-20 border-b border-smoke">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash mb-3">How we operate</p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-ash leading-relaxed text-[1.0625rem]">
            <p>
              We coordinate the logic and documentation. Your engineering team implements the events.
              We define exactly what they need to build, in a format they can act on without
              back-and-forth.
            </p>
            <p className="text-ink font-medium">
              When we are done, you own the system. We document everything so your team can run it
              independently.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-page text-center">
          <h2
            className="font-display font-bold text-ink tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}
          >
            Want to know if we are <span className="text-gradient">the right fit?</span>
          </h2>
          <p className="text-ash text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Start with a discovery call. No commitment. Just 30 minutes and an honest read on your
            lifecycle.
          </p>
          <a href={BOOKING_URL} className="btn-primary text-base px-8 py-4">
            Book a discovery call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
