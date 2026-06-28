import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Book a Discovery Call | Simpla',
  description:
    "Book a free 30-minute discovery call with Simpla. We'll review your lifecycle setup and tell you honestly what's working, what's broken, and what to fix first.",
  alternates: { canonical: 'https://simpla.agency/contact' },
  openGraph: {
    title: 'Book a Discovery Call | Simpla',
    description:
      "Book a free 30-minute discovery call with Simpla. We'll review your lifecycle setup and tell you honestly what's working, what's broken, and what to fix first.",
    url: 'https://simpla.agency/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Discovery Call | Simpla',
    description: 'Book a free 30-minute discovery call. Honest read on your lifecycle setup.',
  },
}

const WHAT_WE_COVER = [
  'Where your lifecycle is losing users and what it is costing you',
  'Whether your current tool setup is working or not',
  'Which service makes sense for your situation',
  'Whether Simpla is the right fit, and if not, who might be',
]

export default function ContactPage() {
  return (
    <main>
      <Nav />

      {/* Hero + booking */}
      <section className="pt-36 pb-28 border-b border-smoke">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: copy */}
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Contact</p>
              <h1
                className="font-display font-bold text-ink leading-[1.06] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Let&rsquo;s look at{' '}
                <span className="text-gradient">your lifecycle.</span>
              </h1>
              <p className="text-lg text-ash leading-relaxed mb-8">
                Book a free 30-minute discovery call. We&rsquo;ll review your current setup, or your
                lack of one, and give you an honest read of what&rsquo;s working, what&rsquo;s
                broken, and what to prioritize. No pitch, no proposal until we know it makes sense.
              </p>

              <div className="mb-10">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash mb-4">
                  What we will cover
                </p>
                <ul className="space-y-3">
                  {WHAT_WE_COVER.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ash leading-relaxed">
                      <span className="font-mono text-brand text-[11px] shrink-0 mt-0.5">
                        0{i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-ash">
                Or email us at{' '}
                <a
                  href="mailto:hello@simpla.agency"
                  className="text-ink font-medium hover:text-brand transition-colors"
                >
                  hello@simpla.agency
                </a>
              </p>
            </div>

            {/* Right: Calendly embed */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-smoke bg-snow aspect-[4/3] flex flex-col items-center justify-center text-center p-10">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash mb-3">
                  Book your call
                </p>
                <p className="font-display font-bold text-ink text-xl mb-3">
                  Schedule your discovery call
                </p>
                <p className="text-sm text-ash mb-8 max-w-sm leading-relaxed">
                  30 minutes. No slides. Just an honest conversation about your lifecycle and
                  whether we can help.
                </p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book a discovery call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
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

      <Footer />
    </main>
  )
}
