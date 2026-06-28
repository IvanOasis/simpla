import type { Metadata } from 'next'
import Image from 'next/image'
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
            <span className="text-gradient">Lifecycle specialists.</span>{' '}
            Not a full-service agency.
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
              companies. We don&rsquo;t do social media, paid ads, or brand strategy. We build the
              infrastructure that connects what users do in your product to what you say to them.
            </p>
            <p>
              That means event schemas, user state definitions, segmentation logic, behavioral
              workflows, and every message inside them. We scope to what the problem actually
              requires — not a larger engagement.
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
              Simpla was founded by someone who spent over a decade inside SaaS, Web3, and digital
              product companies — not as an external consultant observing from the outside, but as the
              person responsible for making the system work. Defining the user states, writing the
              event specs, implementing the tools, and building the workflows from scratch.
            </p>
            <p>
              Every project at Simpla is led directly. The same person who scopes the work designs
              and builds it. No hand-offs to junior staff after the kickoff call.
            </p>
            <p className="text-ink font-medium border-l-2 border-brand pl-4">
              Lifecycle systems are technical. They start with your data, not your copy. We approach
              every engagement as practitioners, not strategists.
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
              aspectRatio: '4 / 3',
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
                backgroundSize: '36px 36px',
              }}
            />

            {/* Lat lines decoration */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'linear-gradient(rgba(123,94,255,0.06) 1px, transparent 1px)',
                backgroundSize: '100% 25%',
              }}
            />

            {/* Buenos Aires glow */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '62%',
                left: '36%',
                width: 200,
                height: 200,
                background: 'radial-gradient(circle, rgba(123,94,255,0.4) 0%, transparent 65%)',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
              }}
            />

            {/* Outer ring */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '62%',
                left: '36%',
                width: 48,
                height: 48,
                border: '1px solid rgba(123,94,255,0.35)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Inner ring */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '62%',
                left: '36%',
                width: 24,
                height: 24,
                border: '1px solid rgba(123,94,255,0.6)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Dot */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '62%',
                left: '36%',
                width: 8,
                height: 8,
                background: '#7B5EFF',
                borderRadius: '50%',
                boxShadow: '0 0 14px rgba(123,94,255,0.9)',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Secondary dots — other regions */}
            <div aria-hidden="true" style={{ position: 'absolute', top: '30%', left: '27%', width: 4, height: 4, background: 'rgba(123,94,255,0.45)', borderRadius: '50%', boxShadow: '0 0 6px rgba(123,94,255,0.5)' }} />
            <div aria-hidden="true" style={{ position: 'absolute', top: '24%', right: '20%', width: 4, height: 4, background: 'rgba(123,94,255,0.45)', borderRadius: '50%', boxShadow: '0 0 6px rgba(123,94,255,0.5)' }} />
            <div aria-hidden="true" style={{ position: 'absolute', top: '38%', right: '10%', width: 4, height: 4, background: 'rgba(123,94,255,0.35)', borderRadius: '50%' }} />

            {/* Coordinates label */}
            <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
              <p
                className="font-mono text-white/30 uppercase"
                style={{ fontSize: '0.6rem', letterSpacing: '0.12em' }}
              >
                34°36′S · 58°22′W
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
                and Latin America. Remote-first since day one — our clients don&rsquo;t care where
                we are located, they care that the system works.
              </p>
              <p>
                Communication is async by default. Delivery is on schedule. Every handoff is
                documented so your team can continue independently, wherever they are.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Companies we've worked with */}
      <section className="py-20 border-b border-smoke bg-snow">
        <div className="container-page">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash mb-10">
            Companies we&rsquo;ve worked with
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-8">
            {LOGOS.map((logo) => (
              <div key={logo.alt} className="flex items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={36}
                  className="object-contain"
                  style={{
                    maxHeight: '32px',
                    width: 'auto',
                    filter: logo.dark ? 'invert(1) brightness(0.4)' : 'brightness(0) opacity(0.45)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 border-b border-smoke">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash mb-2">
                Tools we work with
              </p>
              <p className="text-sm text-ash leading-relaxed mt-3">
                Tool-agnostic. We recommend what fits your stage, stack, and budget — not what we prefer.
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
            30 minutes. We look at your current setup and tell you honestly what is working, what is
            broken, and whether we can help.
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
