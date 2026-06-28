import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Case Studies | Simpla',
  description:
    'Lifecycle systems we have built for crypto wallets, B2B SaaS and digital product companies. Real implementations, real outcomes.',
  alternates: { canonical: 'https://simpla.agency/case-studies' },
  openGraph: {
    title: 'Case Studies | Simpla',
    description:
      'Lifecycle systems we have built for crypto wallets, B2B SaaS and digital product companies. Real implementations, real outcomes.',
    url: 'https://simpla.agency/case-studies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Simpla',
    description: 'Real lifecycle implementations for crypto wallets, B2B SaaS and digital products.',
  },
}

const CS1_SECTIONS = [
  {
    heading: 'Tool selection',
    body: "We evaluated the stack and recommended Customer.io for email, OneSignal for in-app messages and push notifications, and PostHog for product analytics. The combination covered all communication channels while keeping data centralized for segmentation.",
  },
  {
    heading: 'User states',
    body: "We defined the user states that reflected the crypto trading journey: new user, KYC completed, first trade executed, active trader, at-risk, churned. Each state had clear behavioral criteria based on product events.",
  },
  {
    heading: 'Event schema',
    body: "We listed and documented every event to track across the product: account creation, KYC steps, deposit events, trade events, withdrawal events, session activity. The spec went to engineering for implementation.",
  },
  {
    heading: 'Segments',
    body: "We created segments in Customer.io, OneSignal and PostHog based on the user states and event data, so every communication could be targeted to the right behavioral group.",
  },
  {
    heading: 'Workflows',
    body: "We built workflows in Customer.io and OneSignal for each user state: onboarding sequences for new users, activation flows for users who hadn't executed their first trade, retention campaigns for active traders, and reactivation flows for users showing signs of disengagement.",
  },
  {
    heading: 'Dashboards',
    body: "We built PostHog dashboards to track user state distribution, funnel performance, workflow conversion and retention curves. The team had real visibility into user behavior for the first time.",
  },
]

const CS2_SECTIONS = [
  {
    heading: 'Stack definition',
    body: "We defined the roles of each tool: HubSpot for the sales pipeline and marketing automation for leads and MQLs, Intercom for in-product communication based on user behavior, with both tools synced so the sales team had visibility into product engagement.",
  },
  {
    heading: 'User states and segmentation',
    body: "We defined the B2B lifecycle stages: trial user, activated (completed key setup steps), paying customer, expansion candidate, at-risk of churning. Each stage mapped to specific behavioral signals.",
  },
  {
    heading: 'Workflows',
    body: "We built onboarding sequences in Intercom triggered by product actions, not time intervals. Activation flows for users who hadn't reached the setup milestone. Expansion campaigns for customers showing high engagement signals. Churn prevention for accounts with dropping activity.",
  },
  {
    heading: 'HubSpot integration',
    body: "We set up the sync between product behavior and HubSpot so the sales team could see which accounts were most engaged and prioritize outreach accordingly.",
  },
]

export default function CaseStudiesPage() {
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
          <p className="eyebrow mb-4">Case Studies</p>
          <h1
            className="font-display font-bold text-ink leading-[1.06] tracking-[-0.03em] max-w-2xl"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Work <span className="text-gradient">we have done</span>
          </h1>
        </div>
      </section>

      {/* Case Study 1 */}
      <section
        id="crypto-wallet"
        className="py-20 border-b border-smoke"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fd 100%)' }}
      >
        <div className="container-page">

          {/* Header */}
          <div className="mb-12 pb-12 border-b border-smoke">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ash mb-5">
              01 — Crypto wallet, B2C
            </p>
            <div className="grid lg:grid-cols-12 gap-10">
              <h2
                className="lg:col-span-7 font-display font-bold text-ink tracking-[-0.02em] leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Building a lifecycle system from scratch for a well-known Solana trading wallet
              </h2>
              <div className="lg:col-span-5 lg:pt-2">
                <p className="text-ash leading-relaxed text-[1.0625rem]">
                  A well-known crypto wallet for Solana traders had no lifecycle system in place. Users
                  were downloading the app, and beyond an initial onboarding email, there was no
                  communication based on what they actually did inside the product.
                </p>
              </div>
            </div>
          </div>

          {/* What we built */}
          <div className="mb-10">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash mb-6">What we built</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CS1_SECTIONS.map((s) => (
                <div key={s.heading} className="card-sm rounded-2xl p-7">
                  <h3 className="font-display font-bold text-ink text-base mb-3 leading-snug">
                    {s.heading}
                  </h3>
                  <p className="text-ash text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="card-dark rounded-2xl p-8 relative overflow-hidden">
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-60px',
                right: '-60px',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <p className="text-xs font-mono uppercase tracking-[0.14em] text-white/50 mb-3">
              Outcome
            </p>
            <p className="font-display font-medium leading-relaxed text-white text-[1.0625rem] max-w-2xl">
              The company went from no lifecycle infrastructure to a fully operational system covering
              all communication channels, connected to real product data, with dashboards for ongoing
              monitoring. The foundation was in place to iterate and improve from real behavioral data.
            </p>
          </div>

        </div>
      </section>

      {/* Case Study 2 */}
      <section
        id="b2b-saas"
        className="py-20 border-b border-smoke"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 0% 50%, rgba(158,112,206,0.06) 0%, transparent 55%),
            linear-gradient(180deg, #f8f9fd 0%, #ffffff 100%)
          `,
        }}
      >
        <div className="container-page">

          {/* Header */}
          <div className="mb-12 pb-12 border-b border-smoke">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ash mb-5">
              02 — B2B SaaS, HubSpot + Intercom
            </p>
            <div className="grid lg:grid-cols-12 gap-10">
              <h2
                className="lg:col-span-7 font-display font-bold text-ink tracking-[-0.02em] leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Lifecycle implementation for a B2B SaaS with HubSpot and Intercom
              </h2>
              <div className="lg:col-span-5 lg:pt-2">
                <p className="text-ash leading-relaxed text-[1.0625rem]">
                  A B2B SaaS company needed to build out their lifecycle marketing infrastructure. The
                  team had HubSpot for CRM and sales, but no systematic approach to communicating with
                  users based on their behavior in the product.
                </p>
              </div>
            </div>
          </div>

          {/* What we built */}
          <div className="mb-10">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-ash mb-6">What we built</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {CS2_SECTIONS.map((s) => (
                <div key={s.heading} className="card-sm rounded-2xl p-7">
                  <h3 className="font-display font-bold text-ink text-base mb-3 leading-snug">
                    {s.heading}
                  </h3>
                  <p className="text-ash text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="card-dark rounded-2xl p-8 relative overflow-hidden">
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-60px',
                right: '-60px',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <p className="text-xs font-mono uppercase tracking-[0.14em] text-white/50 mb-3">
              Outcome
            </p>
            <p className="font-display font-medium leading-relaxed text-white text-[1.0625rem] max-w-2xl">
              The company moved from generic time-based emails to a behavioral lifecycle system that
              differentiated communication by user stage. Sales had product engagement data in HubSpot.
              The lifecycle was running on real signals for the first time.
            </p>
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
            Want to build <span className="text-gradient">something like this?</span>
          </h2>
          <a href={BOOKING_URL} className="btn-primary text-base px-8 py-4">
            Book a discovery call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
