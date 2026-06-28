import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Simpla',
  description:
    "Get in touch with Simpla. Book a free 30-minute discovery call or send us a message. We'll get back to you within one business day.",
  alternates: { canonical: 'https://simpla.agency/contact' },
  openGraph: {
    title: 'Contact | Simpla',
    description: 'Book a discovery call or send us a message.',
    url: 'https://simpla.agency/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Simpla',
    description: 'Book a discovery call or send us a message.',
  },
}

export default function ContactPage() {
  return (
    <main>
      <Nav />

      <section className="pt-36 pb-28 border-b border-smoke">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
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
                Send us a message and we&rsquo;ll get back to you within one business day. Or book a
                discovery call directly if you&rsquo;d rather talk.
              </p>
              <p className="text-sm text-ash">
                Email us at{' '}
                <a
                  href="mailto:hello@simpla.agency"
                  className="text-ink font-medium hover:text-brand transition-colors"
                >
                  hello@simpla.agency
                </a>
              </p>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <ContactForm />
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
