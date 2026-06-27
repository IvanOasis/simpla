import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, RefreshCw, Search, Layers, TrendingUp } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { services } from '@/lib/services'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Simpla | Customer.io Lifecycle Specialists for SaaS',
  description:
    'Simpla designs, implements and optimizes Customer.io lifecycle systems for SaaS and digital products. Migration, data health, onboarding, retention.',
  alternates: { canonical: 'https://simpla.agency' },
  openGraph: {
    title: 'Simpla | Customer.io Lifecycle Specialists for SaaS',
    description: 'Simpla designs, implements and optimizes Customer.io lifecycle systems for SaaS and digital products.',
    url: 'https://simpla.agency',
    type: 'website',
  },
}

const PARTNERS = [
  { name: 'Customer.io', href: 'https://customer.io/agency-partners/', logo: 'https://cdn.brandfetch.io/idDOyxSYhH/w/400/h/400/theme/dark/icon.jpeg' },
  { name: 'PostHog', href: 'https://posthog.com', logo: 'https://posthog.com/brand/posthog-logo.svg' },
  { name: 'Metabase', href: 'https://metabase.com', logo: 'https://www.metabase.com/images/logo.svg' },
  { name: 'HubSpot', href: 'https://hubspot.com', logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png' },
]

const SERVICE_META = [
  { slug: 'migration',             icon: RefreshCw, tags: ['Migration', 'Implementation'], cta: 'Learn more' },
  { slug: 'data-health',           icon: Search,    tags: ['Audit', 'Data'],               cta: 'Dive in'    },
  { slug: 'lifecycle-architecture',icon: Layers,    tags: ['Strategy', 'Architecture'],    cta: 'Learn more' },
  { slug: 'growth-ops',            icon: TrendingUp,tags: ['Retainer', 'Growth'],          cta: 'Learn more' },
]

export default function Home() {
  return (
    <main>
      <Nav />

      {/* ─── HERO — Scalero-style: gradient bg, centered, serif headline ─── */}
      <section style={{ background: 'linear-gradient(180deg, #ECF2FF 0%, #F5F0FF 35%, #FFFFFF 68%)' }}>
        <div className="container-page pt-40 pb-20 text-center">

          <h1 className="font-display font-bold text-ink leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto mb-7"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)' }}>
            The Customer.io lifecycle<br />specialists for SaaS{' '}
            <span className="text-brand">✦</span>
          </h1>

          <p className="text-lg text-ash leading-relaxed max-w-xl mx-auto mb-10">
            From strategy to execution, we bring deep expertise in Customer.io lifecycle systems —
            migration, data health, full architecture, and ongoing growth ops.
          </p>

          <a href={BOOKING_URL} className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
            Let&rsquo;s talk <ArrowRight className="w-4 h-4" />
          </a>

          {/* Partner strip */}
          <div className="mt-20 pt-10 border-t border-smoke/60">
            <p className="font-grotesk font-semibold text-ink text-sm mb-8">
              Tools we work with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16">
              {PARTNERS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300"
                  aria-label={p.name}
                >
                  <img src={p.logo} alt={p.name} loading="lazy"
                    style={{ maxHeight: '28px', width: 'auto', maxWidth: '110px' }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES — 2×2 card grid, Scalero-style ─── */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="mb-14">
            <p className="eyebrow mb-3">What we do</p>
            <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Our services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s) => {
              const meta = SERVICE_META.find((m) => m.slug === s.slug)!
              const Icon = meta.icon
              return (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className="group flex flex-col bg-snow rounded-2xl p-8 hover:bg-[#EEF3FF] transition-colors duration-200 border border-transparent hover:border-smoke"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {meta.tags.map((tag) => (
                      <span key={tag}
                        className="inline-flex items-center gap-1.5 border border-smoke rounded-full px-3.5 py-1.5 text-xs font-grotesk font-medium text-ink bg-white">
                        <Icon className="w-3 h-3 text-brand" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-ink text-2xl mb-3 leading-snug">
                    {s.name}
                  </h3>
                  <p className="text-ash text-sm leading-relaxed flex-1 mb-7">
                    {s.summary}
                  </p>

                  <div className="flex items-center gap-1.5 text-ink text-sm font-grotesk font-medium group-hover:gap-2.5 transition-all">
                    {meta.cta} <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK — 3 steps, clean ─── */}
      <section className="py-24 border-t border-smoke">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left */}
            <div className="lg:col-span-4">
              <p className="eyebrow mb-3">How it works</p>
              <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.02em] mb-5"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Three stages.<br />No guesswork.
              </h2>
              <p className="text-ash text-base leading-relaxed mb-8">
                Every engagement starts with a free diagnostic call.
                We tell you what&rsquo;s wrong before you commit to anything.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-grotesk font-medium text-ink hover:text-brand transition-colors">
                How we operate <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Steps */}
            <div className="lg:col-span-8 space-y-4">
              {[
                {
                  n: '01',
                  title: 'Diagnosis',
                  body: 'A free 30-minute call. We look at your setup, ask the right questions, and tell you what\'s wrong — before you commit to anything.',
                },
                {
                  n: '02',
                  title: 'System design',
                  body: 'We design the states, events and workflows your product needs — sized to your stage, not a generic template.',
                },
                {
                  n: '03',
                  title: 'Build & handoff',
                  body: 'We build it, test it against real behavior, document it in plain language, and train your team to run it without us.',
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-6 bg-snow rounded-2xl p-7">
                  <span className="font-mono text-[11px] text-brand font-medium shrink-0 mt-0.5">{step.n}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink text-xl mb-2">{step.title}</h3>
                    <p className="text-ash text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA — Scalero-style: same gradient as hero, centered, serif headline ─── */}
      <section style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F0FF 40%, #ECF2FF 100%)' }}>
        <div className="container-page py-28 text-center">
          <h2 className="font-fraunces font-bold text-ink leading-[1.1] tracking-[-0.02em] max-w-2xl mx-auto mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Let&rsquo;s do this
          </h2>
          <p className="text-lg text-ash leading-relaxed max-w-lg mx-auto mb-10">
            Simpla can help you build the lifecycle system your SaaS needs,
            no matter where you are in the process.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={BOOKING_URL} className="btn-primary text-base px-8 py-4">
              Book an intro call <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:hello@simpla.agency"
              className="text-sm font-grotesk text-ash hover:text-ink transition-colors">
              hello@simpla.agency
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
