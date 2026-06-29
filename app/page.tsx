import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, PenLine, Database, Plug, Key } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Simpla | Lifecycle Systems for SaaS and Digital Products',
  description:
    'We build lifecycle systems for SaaS and digital products. Event architecture, behavioral workflows and the messages that convert, connected to what users actually do.',
  alternates: { canonical: 'https://simpla.agency' },
  openGraph: {
    title: 'Simpla | Lifecycle Systems for SaaS and Digital Products',
    description:
      'We build lifecycle systems for SaaS and digital products. Event architecture, behavioral workflows and the messages that convert, connected to what users actually do.',
    url: 'https://simpla.agency',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simpla | Lifecycle Systems for SaaS and Digital Products',
    description:
      'We build lifecycle systems for SaaS and digital products. Event architecture, behavioral workflows and the messages that convert.',
  },
}

const TOOLS = [
  { name: 'Customer.io', href: 'https://customer.io',   logo: '/assets/Logos/tools/customerio.webp' },
  { name: 'PostHog',     href: 'https://posthog.com',   logo: '/assets/Logos/tools/posthog.svg' },
  { name: 'Intercom',    href: 'https://intercom.com',  logo: '/assets/Logos/tools/intercom.png' },
  { name: 'Braze',       href: 'https://braze.com',     logo: '/assets/Logos/tools/braze.svg' },
  { name: 'OneSignal',   href: 'https://onesignal.com', logo: '/assets/Logos/tools/onesignal.png' },
  { name: 'Mixpanel',    href: 'https://mixpanel.com',  logo: '/assets/Logos/tools/mixpanel.png' },
  { name: 'HubSpot',     href: 'https://hubspot.com',   logo: '/assets/Logos/tools/hubspot.png' },
]

const WHY_POINTS = [
  {
    n: '01',
    Icon: PenLine,
    title: 'We build the system and write the messages.',
    body: "Most lifecycle agencies hand you a configured tool and leave the copy to you. We write every message inside the workflows, crafted for the specific user state, the specific moment, and the specific action we need the user to take.",
  },
  {
    n: '02',
    Icon: Database,
    title: 'We start with your data, not your tool.',
    body: "Before we touch any platform, we design your event architecture. What to track, how to name it, what properties each event needs. Your engineering team gets a spec they can implement without back-and-forth.",
  },
  {
    n: '03',
    Icon: Plug,
    title: 'We work with the tools you already use.',
    body: "We work with Customer.io, Intercom, Braze, OneSignal and others, connected to product analytics like PostHog and Mixpanel. We'll recommend what fits your stage and budget.",
  },
  {
    n: '04',
    Icon: Key,
    title: 'You own the system when we are done.',
    body: "We document everything. Your team can run it independently after we hand it over. No lock-in.",
  },
]

const SERVICES_OVERVIEW = [
  {
    n: '01',
    name: 'Lifecycle Audit',
    body: "Find out where you're losing users and why. We review your setup from the event layer up: what's being tracked, whether the data is clean, which workflows are running and whether they're converting. You get a prioritized action plan.",
    href: '/services#audit',
  },
  {
    n: '02',
    name: 'Lifecycle Implementation',
    body: "We design your event architecture, define your user states, build the behavioral workflows, and write every message that goes inside them. You don't get a workflow template with blank copy fields. You get a working system.",
    href: '/services#implementation',
  },
  {
    n: '03',
    name: 'Ongoing Optimization',
    body: "Monthly retainer for clients post-implementation. We analyze your data in PostHog or Mixpanel, run experiments, write new messages as your product evolves, and send you a written report every month. Available to previous Simpla clients only.",
    href: '/services#optimization',
  },
]

const TESTIMONIALS = [
  {
    quote: "Working with Simpla was the first time someone actually understood our data architecture before touching our lifecycle system.",
    author: 'VP of Growth',
    company: 'SaaS startup',
  },
  {
    quote: "They don't just configure the tool. They design the logic and write the messages. That's a completely different thing.",
    author: 'Head of Product',
    company: 'Digital product company',
  },
]

export default function Home() {
  return (
    <main>
      <Nav />

      {/* ─── HERO ─── */}
      <section
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 0%, rgba(123,94,255,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 90% 20%, rgba(158,112,206,0.12) 0%, transparent 55%),
            linear-gradient(160deg, #ede8ff 0%, #f4f0ff 40%, #ffffff 72%)
          `,
        }}
      >
        <div className="container-page pt-40 pb-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="font-display font-bold text-ink leading-[1.04] tracking-[-0.03em] mb-7 anim-fade-up"
              style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5rem)' }}
            >
              We turn user behavior{' '}
              <span className="text-gradient">into revenue.</span>
            </h1>

            <p className="text-[1.125rem] text-ash leading-relaxed mb-10 max-w-2xl mx-auto anim-fade-up anim-delay-1">
              We build lifecycle systems for SaaS and digital product companies. From event
              architecture to behavioral workflows and the messages that go inside them, we connect
              what users do in your product to what you say to them.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 anim-fade-up anim-delay-2">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                Book a discovery call <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/services"
                className="btn-outline px-8 py-4"
              >
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
      <section className="py-16 border-b border-smoke bg-white">
        <div className="container-page">
          <p className="text-center text-xs font-mono uppercase tracking-[0.13em] text-ash mb-10">
            Trusted by SaaS and digital product teams
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 items-center">
            {[
              { src: '/assets/Logos/logotokkobroker.webp', alt: 'Tokko Broker', dark: false },
              { src: '/assets/Logos/naventlogo.png',       alt: 'Navent',       dark: false },
              { src: '/assets/Logos/metasoccer-logo.png',  alt: 'MetaSoccer',   dark: false },
              { src: '/assets/Logos/realmint.png',         alt: 'Realmint',     dark: false },
              { src: '/assets/Logos/obitus_logo.webp',     alt: 'Obitus',       dark: true  },
            ].map((logo) => (
              <div
                key={logo.alt}
                className={`flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200 ${logo.dark ? 'bg-[#111827] rounded-xl' : ''}`}
                style={{ padding: logo.dark ? '10px 20px' : 0 }}
              >
                {/* Fixed 160×44px box so every logo renders at the same visual size */}
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

      {/* ─── THE PROBLEM ─── */}
      <section
        className="py-24 border-b border-smoke"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fd 100%)' }}
      >
        <div className="container-page grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2
              className="font-display font-bold text-ink leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)' }}
            >
              You are not losing users because{' '}
              <span className="text-gradient">your product is bad.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ash leading-relaxed text-[1.0625rem]">
            <p>
              You are losing them because nothing connects what they do inside your product to what
              you say to them.
            </p>
            <p>
              Users sign up and go quiet. Onboarding is a welcome email you set up once and forgot.
              Churn is high but you don&rsquo;t know at which step or why. You are paying for a
              lifecycle tool and barely using it. Your team writes the same generic message to every
              user regardless of what they have done.
            </p>
            <p className="text-ink font-display font-medium leading-relaxed">
              These are not product problems. They are lifecycle infrastructure problems. And they
              are fixable.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section
        className="py-24 border-b border-smoke"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 100% 0%, rgba(158,112,206,0.06) 0%, transparent 60%),
            linear-gradient(180deg, #f8f9fd 0%, #ffffff 100%)
          `,
        }}
      >
        <div className="container-page">
          <div className="mb-14">
            <p className="eyebrow mb-3">What we do</p>
            <h2
              className="font-display font-bold text-ink leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)' }}
            >
              Three services <span className="text-gradient">built around a single idea.</span>
            </h2>
            <p className="text-ash mt-4 leading-relaxed">
              The right message, for the right user, at the right moment, based on what they actually
              did in your product.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES_OVERVIEW.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group card-md flex flex-col rounded-2xl p-8"
              >
                {/* Number pill */}
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full font-mono text-[11px] font-medium text-brand mb-6 shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #ede8ff 0%, #ede8ff 100%)',
                    border: '1px solid rgba(123,94,255,0.18)',
                  }}
                >
                  {s.n}
                </span>
                <h3 className="font-display font-bold text-ink text-xl mb-4 leading-snug group-hover:text-brand transition-colors duration-200">
                  {s.name}
                </h3>
                <p className="text-ash text-sm leading-relaxed flex-1 mb-7">{s.body}</p>
                <div className="flex items-center gap-1.5 text-ink text-sm font-body font-medium group-hover:gap-2.5 transition-all duration-200">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SIMPLA ─── */}
      <section className="py-24 border-b border-smoke bg-white">
        <div className="container-page">
          <div className="mb-14">
            <p className="eyebrow mb-3">Why Simpla</p>
            <h2
              className="font-display font-bold text-ink leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)' }}
            >
              What makes us <span className="text-gradient">different.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {WHY_POINTS.map((p) => (
              <div
                key={p.n}
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{
                  background: 'linear-gradient(145deg, #ffffff 0%, #f5f8ff 100%)',
                  border: '1px solid rgba(228,231,240,0.8)',
                  boxShadow: '0 1px 3px rgba(15,21,35,0.04), 0 6px 20px rgba(15,21,35,0.05)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #ede8ff 0%, #e4dcff 100%)',
                    border: '1px solid rgba(123,94,255,0.18)',
                  }}
                >
                  <p.Icon className="w-5 h-5 text-brand" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-lg mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-ash text-[1rem] leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK TEASER ─── */}
      <section
        className="py-24 border-b border-smoke"
        style={{
          background: `
            radial-gradient(ellipse 60% 80% at 0% 50%, rgba(123,94,255,0.07) 0%, transparent 55%),
            linear-gradient(135deg, #f3f7ff 0%, #f8f5ff 50%, #f8f9fd 100%)
          `,
        }}
      >
        <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h2
              className="font-display font-bold text-ink leading-[1.1] tracking-[-0.02em] mb-4"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)' }}
            >
              Work <span className="text-gradient">we have done</span>
            </h2>
            <p className="text-ash leading-relaxed text-[1.0625rem]">
              We have built lifecycle systems for crypto products, B2B SaaS companies and digital
              products across different stages and stacks.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/case-studies"
              className="btn-outline"
            >
              See our work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 border-b border-smoke bg-white">
        <div className="container-page">
          <h2
            className="font-display font-bold text-ink leading-[1.1] tracking-[-0.02em] mb-14"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)' }}
          >
            What our <span className="text-gradient">clients say</span>
          </h2>
          {/* PLACEHOLDER: replace with real client testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              /* PLACEHOLDER testimonial */
              <figure
                key={i}
                className="relative rounded-2xl p-9 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #7B5EFF 0%, #9E70CE 100%)',
                  boxShadow: '0 8px 32px rgba(123,94,255,0.28)',
                  border: '1px solid rgba(255,255,255,0.14)',
                }}
              >
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-40px',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />
                {/* Quote mark */}
                <div
                  className="font-display font-bold text-white/20 leading-none mb-4 select-none"
                  style={{ fontSize: '5rem', lineHeight: 0.8 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <blockquote className="text-white font-display font-medium leading-relaxed text-[1.0625rem] mb-7 relative">
                  {t.quote}
                </blockquote>
                <figcaption className="text-white/50 text-sm font-mono">
                  {t.author}, {t.company}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOOLS ─── */}
      <section
        className="py-24 border-b border-smoke"
        style={{ background: 'linear-gradient(180deg, #f8f9fd 0%, #ffffff 100%)' }}
      >
        <div className="container-page">
          <h2
            className="font-display font-bold text-ink leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)' }}
          >
            Tools we <span className="text-gradient">work with</span>
          </h2>
          <p className="text-ash mb-12 leading-relaxed">
            We work across the main lifecycle and product analytics platforms. We&rsquo;ll recommend
            what fits your stack.
          </p>
          <div className="flex flex-wrap justify-center gap-x-14 gap-y-10">
            {TOOLS.map((t) => (
              <a
                key={t.name}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200"
                aria-label={t.name}
              >
                <div style={{ position: 'relative', width: '148px', height: '40px', flexShrink: 0 }}>
                  <img
                    src={t.logo}
                    alt={t.name}
                    loading="eager"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 110%, rgba(123,94,255,0.2) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 15% 50%, rgba(158,112,206,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 40% 35% at 85% 30%, rgba(123,94,255,0.1) 0%, transparent 50%),
            linear-gradient(180deg, #ffffff 0%, #f3efff 45%, #ede8ff 100%)
          `,
        }}
      >
        <div className="container-page py-32 text-center relative">
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '200px',
              background: 'radial-gradient(ellipse, rgba(123,94,255,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <h2
            className="font-display font-bold text-ink leading-[1.1] tracking-[-0.02em] max-w-2xl mx-auto mb-6"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
          >
            Not sure where <span className="text-gradient">your lifecycle is breaking?</span>
          </h2>
          <p className="text-lg text-ash leading-relaxed max-w-lg mx-auto mb-10">
            30 minutes to look at your current setup and tell you honestly what is working, what is
            broken, and what to fix first. No pitch, no proposal until we know it makes sense.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
            Book a discovery call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Simpla',
            url: 'https://simpla.agency',
            description:
              'Lifecycle systems for SaaS and digital products. Event architecture, behavioral workflows and the messages that convert.',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'hello@simpla.agency',
              contactType: 'customer support',
            },
          }),
        }}
      />
    </main>
  )
}
