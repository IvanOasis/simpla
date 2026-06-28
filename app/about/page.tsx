import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Simpla | Lifecycle Specialists for SaaS',
  description:
    'Simpla is a boutique lifecycle agency based in Buenos Aires, working with SaaS and digital product companies across the Americas and Europe.',
  alternates: { canonical: 'https://simpla.agency/about' },
  openGraph: {
    title: 'About Simpla | Lifecycle Specialists for SaaS',
    description:
      'Boutique lifecycle agency based in Buenos Aires. Working globally with SaaS and digital product companies.',
    url: 'https://simpla.agency/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Simpla | Lifecycle Specialists for SaaS',
    description: 'Boutique lifecycle agency based in Buenos Aires. Working globally.',
  },
}

const LOGOS = [
  { src: '/assets/Logos/logotokkobroker.webp', alt: 'Tokko Broker', dark: false },
  { src: '/assets/Logos/naventlogo.png',       alt: 'Navent',       dark: false },
  { src: '/assets/Logos/metasoccer-logo.png',  alt: 'MetaSoccer',   dark: false },
  { src: '/assets/Logos/realmint.png',         alt: 'Realmint',     dark: false },
  { src: '/assets/Logos/obitus_logo.webp',     alt: 'Obitus',       dark: true  },
]

const TOOLS = [
  { label: 'Lifecycle & messaging', items: ['Customer.io', 'Intercom', 'Braze', 'OneSignal'] },
  { label: 'Product analytics',     items: ['PostHog', 'Mixpanel', 'Amplitude'] },
  { label: 'CRM',                   items: ['HubSpot', 'Attio'] },
  { label: 'Reporting',             items: ['Metabase', 'Looker Studio'] },
]

export default function AboutPage() {
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
          <p className="eyebrow mb-4">About</p>
          <h1
            className="font-display font-bold text-ink leading-[1.06] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            <span className="text-gradient">Lifecycle specialists</span>{' '}
            for SaaS and digital products.
          </h1>
          <p className="text-lg text-ash leading-relaxed">
            One discipline. End to end. From data architecture to the messages that go inside the workflows.
          </p>
        </div>
      </section>

      {/* What we are */}
      <section className="py-20 border-b border-smoke">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash">What Simpla is</p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-ash leading-relaxed text-[1.0625rem]">
            <p>
              Simpla is a boutique agency that builds lifecycle systems for SaaS and digital product
              companies. We build the infrastructure that connects what users do in your product to
              what you say to them: event schemas, user state definitions, segmentation logic,
              behavioral workflows, and every message inside them.
            </p>
            <p>
              We scope to what the problem actually requires. Not a larger engagement than needed.
            </p>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 border-b border-smoke bg-snow">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash">Who we are</p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-ash leading-relaxed text-[1.0625rem]">
            <p>
              Simpla is a team of marketing and product professionals with over 10 years of
              hands-on experience building lifecycle systems for SaaS, Web3, and digital product
              companies. Not consultants advising from the outside: practitioners who have been
              inside those teams, defining user states, building event schemas, and writing the
              workflows from scratch.
            </p>
            <p>
              Every project is led directly. No handoffs to junior staff after the kickoff. The
              same people who scope the work are the ones who build it.
            </p>
            <p className="text-ink font-medium border-l-2 border-brand pl-4">
              Lifecycle systems are technical. They start with your data, not your copy.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 border-b border-smoke">
        <div className="container-page grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Map card */}
          <div
            className="relative rounded-2xl overflow-hidden w-full"
            style={{
              background: 'linear-gradient(135deg, #0f1523 0%, #1a2040 100%)',
              aspectRatio: '3 / 4',
              maxHeight: '460px',
            }}
          >
            {/* Grid lines */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* SVG: South America outline + location markers */}
            <svg
              viewBox="0 0 180 240"
              preserveAspectRatio="xMidYMid meet"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="baGlow" cx="44%" cy="60%" r="18%">
                  <stop offset="0%" stopColor="#7B5EFF" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#7B5EFF" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* South America landmass */}
              <path
                d="M 50,8 L 68,4 L 90,8 L 112,18 L 130,35 C 140,50 145,70 145,90 C 145,110 138,128 128,140 L 115,150 L 100,155 L 88,152 L 80,155 L 68,162 L 60,178 L 52,198 L 46,218 L 42,230 L 38,220 L 34,198 L 30,172 L 27,145 L 25,115 L 26,85 L 30,58 L 38,35 L 46,18 Z"
                fill="rgba(123,94,255,0.12)"
                stroke="rgba(123,94,255,0.45)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Buenos Aires glow */}
              <circle cx="80" cy="155" r="22" fill="url(#baGlow)" />

              {/* Buenos Aires rings */}
              <circle cx="80" cy="155" r="10" fill="none" stroke="rgba(123,94,255,0.35)" strokeWidth="1" />
              <circle cx="80" cy="155" r="5"  fill="none" stroke="rgba(123,94,255,0.55)" strokeWidth="1" />

              {/* Buenos Aires dot */}
              <circle cx="80" cy="155" r="3" fill="#7B5EFF" />

              {/* North America dot */}
              <circle cx="68" cy="52" r="2" fill="rgba(123,94,255,0.5)" />
              {/* Europe dot */}
              <circle cx="158" cy="40" r="2" fill="rgba(123,94,255,0.5)" />

              {/* Connection lines */}
              <line x1="80" y1="155" x2="68" y2="52"  stroke="rgba(123,94,255,0.18)" strokeWidth="0.8" strokeDasharray="4 3" />
              <line x1="80" y1="155" x2="158" y2="40" stroke="rgba(123,94,255,0.18)" strokeWidth="0.8" strokeDasharray="4 3" />
            </svg>

            {/* Coordinates label */}
            <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
              <p
                className="font-mono text-white/30 uppercase"
                style={{ fontSize: '0.6rem', letterSpacing: '0.12em' }}
              >
                34°36&prime;S · 58°22&prime;W
              </p>
            </div>

            {/* City + country */}
            <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
              <p className="font-display font-bold text-white text-xl leading-none">Buenos Aires</p>
              <p
                className="font-mono text-white/40 uppercase mt-1"
                style={{ fontSize: '0.65rem', letterSpacing: '0.14em' }}
              >
                Argentina
              </p>
            </div>

            {/* Global label */}
            <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem' }}>
              <p
                className="font-mono text-white/25 uppercase text-right"
                style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}
              >
                Americas · Europe
              </p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="eyebrow mb-4">Where we are</p>
            <h2
              className="font-display font-bold text-ink tracking-[-0.02em] leading-tight mb-6"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Based in LATAM. <span className="text-gradient">Working globally.</span>
            </h2>
            <div className="space-y-4 text-ash leading-relaxed text-[1.0625rem]">
              <p>
                We are based in Buenos Aires and work with companies across North America, Europe,
                and Latin America. Remote-first since day one: our clients care about outcomes,
                not time zones.
              </p>
              <p>
                Communication is async by default. Delivery is on schedule. Every handoff is
                documented so your team can continue independently, wherever they are.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Companies */}
      <section className="py-20 border-b border-smoke bg-snow">
        <div className="container-page">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash mb-10">
            Companies we&rsquo;ve worked with
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
            {LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className={`flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200 ${logo.dark ? 'bg-[#111827] rounded-xl' : ''}`}
                style={{ padding: logo.dark ? '10px 20px' : 0 }}
              >
                <div style={{ position: 'relative', width: '160px', height: '44px', flexShrink: 0 }}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 border-b border-smoke">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash mb-2">
              Tools we work with
            </p>
            <p className="text-sm text-ash leading-relaxed mt-3">
              Tool-agnostic. We recommend what fits your stage, stack, and budget.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-5">
            {TOOLS.map((cat) => (
              <div key={cat.label} className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash w-40 shrink-0">
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm text-ink px-3 py-1 rounded-full border border-smoke bg-white font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 100%, rgba(123,94,255,0.14) 0%, transparent 65%),
            linear-gradient(180deg, #ffffff 0%, #f3efff 50%, #ede8ff 100%)
          `,
        }}
      >
        <div className="container-page py-28 text-center">
          <h2
            className="font-display font-bold text-ink tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}
          >
            Want to know if we are <span className="text-gradient">the right fit?</span>
          </h2>
          <p className="text-ash text-lg mb-10 max-w-md mx-auto leading-relaxed">
            30 minutes. We look at your current setup and tell you honestly what is working,
            what is broken, and whether we can help.
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
