import type { Metadata } from 'next'
import { ArrowRight, Check } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { services } from '@/lib/services'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Lifecycle Marketing Services | Simpla',
  description:
    'Customer.io migration, data health audits, lifecycle architecture and growth operations for SaaS and digital product companies.',
  alternates: { canonical: 'https://simpla.agency/services' },
  openGraph: {
    title: 'Lifecycle Marketing Services | Simpla',
    description:
      'Customer.io migration, data health audits, lifecycle architecture and growth operations for SaaS and digital product companies.',
    url: 'https://simpla.agency/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Nav />

      {/* Page header */}
      <section className="pt-36 pb-20 border-b border-smoke">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Services</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-ink mb-6 leading-tight">
            What we build, step by step.
          </h1>
          <p className="text-lg text-ash leading-relaxed">
            Four services that cover the full lifecycle system — from understanding what&rsquo;s broken to keeping the system sharp month over month. Each one stands alone; together they&rsquo;re the whole infrastructure.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map((s) => (
        <section
          key={s.slug}
          id={s.slug}
          className="py-20 border-b border-smoke scroll-mt-20"
        >
          <div className="container-page">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left: headline + meta */}
              <div className="lg:col-span-4">
                <span className="font-mono text-sm text-brand block mb-3">{s.number}</span>
                <h2 className="font-display font-semibold text-3xl text-ink tracking-tight mb-4">
                  {s.name}
                </h2>
                <p className="text-ash leading-relaxed mb-8">{s.problem}</p>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash border border-smoke rounded-full px-3 py-1.5 inline-block">
                  Timeline: {s.timeline}
                </span>
              </div>

              {/* Right: detail */}
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-10">
                <div>
                  <p className="eyebrow mb-3">Who it&rsquo;s for</p>
                  <p className="text-sm text-ash leading-relaxed mb-8">{s.whoItsFor}</p>

                  <p className="eyebrow mb-3">Walk away with</p>
                  <p className="text-sm text-ash leading-relaxed">{s.deliverable}</p>
                </div>

                <div>
                  <p className="eyebrow mb-3">Included</p>
                  <ul className="space-y-3">
                    {s.included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ash leading-relaxed">
                        <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24">
        <div className="container-page text-center">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink mb-6">
            Not sure which one you need?
          </h2>
          <p className="text-ash text-lg mb-10 max-w-md mx-auto">
            The audit is the right starting point. 30 minutes to find out exactly where things stand.
          </p>
          <a href={BOOKING_URL} className="btn-primary">
            Book a free lifecycle audit <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
