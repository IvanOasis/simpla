import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Book a Free Lifecycle Audit | Simpla',
  description:
    'Book a free 30-minute audit with Simpla. We\'ll review your Customer.io setup and tell you what\'s broken and what to fix first.',
  alternates: { canonical: 'https://simpla.agency/contact' },
  openGraph: {
    title: 'Book a Free Lifecycle Audit | Simpla',
    description:
      'Book a free 30-minute audit with Simpla. We\'ll review your Customer.io setup and tell you what\'s broken and what to fix first.',
    url: 'https://simpla.agency/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main>
      <Nav />

      <section className="pt-36 pb-28">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: copy */}
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Contact</p>
              <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-ink mb-6 leading-tight">
                Let&rsquo;s look at your lifecycle.
              </h1>
              <p className="text-lg text-ash leading-relaxed mb-8">
                Pick a time for a free 30-minute call. We&rsquo;ll look at your current setup and tell you honestly what&rsquo;s working, what&rsquo;s broken, and what to fix first — whether you work with us or not.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand mt-0.5">01</span>
                  <p className="text-sm text-ash leading-relaxed">You share what you have — current tool, team size, where users are dropping off.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand mt-0.5">02</span>
                  <p className="text-sm text-ash leading-relaxed">We review your setup and tell you what&rsquo;s actually wrong — no deck, no pitch.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand mt-0.5">03</span>
                  <p className="text-sm text-ash leading-relaxed">You leave with a clear read on what to fix first, regardless of whether you hire us.</p>
                </div>
              </div>

              <p className="mt-10 text-sm text-ash">
                Prefer email?{' '}
                <a
                  href="mailto:hello@simpla.agency"
                  className="text-ink font-medium hover:text-brand transition-colors"
                >
                  hello@simpla.agency
                </a>
              </p>
            </div>

            {/* Right: booking widget placeholder */}
            <div className="lg:col-span-7">
              <div className="card aspect-[4/3] flex flex-col items-center justify-center text-center p-10 bg-snow">
                <p className="eyebrow mb-3">Booking</p>
                <p className="font-display font-semibold text-xl text-ink mb-2">
                  Schedule your free audit
                </p>
                <p className="text-sm text-ash mb-8 max-w-sm leading-relaxed">
                  Replace this block with an embedded Calendly widget pointed at your 30-minute audit call link.
                </p>
                <a href={BOOKING_URL} className="btn-primary">
                  Book a free lifecycle audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
