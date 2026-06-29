import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import { services } from '@/lib/services'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Lifecycle Marketing Services | Simpla',
  description:
    'Lifecycle audit, implementation and ongoing optimization for SaaS and digital product companies. We build the system and write the messages.',
  alternates: { canonical: 'https://simpla.agency/services' },
  openGraph: {
    title: 'Lifecycle Marketing Services | Simpla',
    description:
      'Lifecycle audit, implementation and ongoing optimization for SaaS and digital product companies. We build the system and write the messages.',
    url: 'https://simpla.agency/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lifecycle Marketing Services | Simpla',
    description: 'Lifecycle audit, implementation and ongoing optimization for SaaS.',
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -5%, rgba(123,94,255,0.16) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 85% 30%, rgba(158,112,206,0.10) 0%, transparent 50%),
            linear-gradient(180deg, #ede8ff 0%, #f5f0ff 40%, #ffffff 70%)
          `,
        }}
      >
        <div className="container-page pt-36 pb-20">
          <p className="eyebrow mb-4">Services</p>
          <h1
            className="font-display font-bold text-ink leading-[1.06] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Three services. <span className="text-gradient">One goal.</span>
          </h1>
          <p className="text-lg text-ash leading-relaxed max-w-xl">
            The right message, for the right user, at the right moment. Based on what they actually
            did in your product.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map((s, idx) => (
        <section
          key={s.slug}
          id={s.slug}
          className="py-20 border-b border-smoke scroll-mt-20"
          style={{
            background: idx % 2 === 0
              ? 'linear-gradient(180deg, #ffffff 0%, #f8f9fd 100%)'
              : 'linear-gradient(180deg, #f8f9fd 0%, #ffffff 100%)',
          }}
        >
          <div className="container-page">
            {/* Service header */}
            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                {/* Number + heading inline */}
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-sm font-semibold text-brand shrink-0">
                    {s.number}
                  </span>
                  <h2
                    className="font-display font-bold text-ink tracking-[-0.02em] leading-tight"
                    style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}
                  >
                    {s.name}
                  </h2>
                </div>
                {/* Eyebrow as plain gray descriptor, not blue mono */}
                <p className="text-sm text-ash leading-relaxed pl-[calc(1rem+12px)]">
                  {s.eyebrow}
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-ash leading-relaxed text-[1.0625rem] mb-6">{s.situation}</p>
                {s.availabilityNote && (
                  <div
                    className="rounded-xl px-5 py-4 text-sm text-slate leading-relaxed"
                    style={{
                      background: 'linear-gradient(135deg, #ece8ff 0%, #ede8ff 100%)',
                      border: '1px solid rgba(123,94,255,0.2)',
                      boxShadow: '0 1px 4px rgba(123,94,255,0.08)',
                    }}
                  >
                    {s.availabilityNote}
                  </div>
                )}
              </div>
            </div>

            {/* What we look at / build / do */}
            <div className="mb-12">
              <p className="text-sm font-semibold text-ash pb-5 border-b border-smoke">
                {s.slug === 'audit'
                  ? 'What we look at'
                  : s.slug === 'implementation'
                  ? 'What we build'
                  : 'What we do every month'}
              </p>
              <div className="divide-y divide-smoke">
                {s.sections.map((section) => (
                  <div key={section.heading} className="grid lg:grid-cols-12 gap-4 lg:gap-12 py-7">
                    <h3 className="lg:col-span-4 font-display font-bold text-ink text-base leading-snug">
                      {section.heading}
                    </h3>
                    <p className="lg:col-span-8 text-ash text-[1rem] leading-relaxed">{section.body}</p>
                  </div>
                ))}
              </div>
            </div>


            {/* Deliverable */}
            <div
              className="card-dark rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="flex-1">
                <p className="text-xs font-mono uppercase tracking-[0.13em] text-white/55 mb-2">
                  Deliverable
                </p>
                <p className="font-display font-medium leading-relaxed text-white">{s.deliverable}</p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 font-body font-semibold text-sm px-5 py-3 rounded-lg transition-all duration-200 hover:bg-white/90"
                style={{
                  background: 'rgba(255,255,255,1)',
                  color: '#7B5EFF',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                }}
              >
                Get started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section
        className="py-24 border-b border-smoke"
        style={{ background: 'linear-gradient(180deg, #f8f9fd 0%, #ffffff 100%)' }}
      >
        <div className="container-page max-w-3xl">
          <h2
            className="font-display font-bold text-ink tracking-[-0.02em] mb-12"
            style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}
          >
            Common questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 100%, rgba(123,94,255,0.15) 0%, transparent 65%),
            linear-gradient(180deg, #ffffff 0%, #f3efff 50%, #ede8ff 100%)
          `,
        }}
      >
        <div className="container-page py-28 text-center">
          <h2
            className="font-display font-bold text-ink tracking-[-0.02em] leading-tight mb-6"
            style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}
          >
            Not sure <span className="text-gradient">which service fits?</span>
          </h2>
          <p className="text-ash text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Book a free 30-minute discovery call. We&rsquo;ll look at your situation and tell you which
            service makes sense, or tell you honestly if none of them do.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
            Book a discovery call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
