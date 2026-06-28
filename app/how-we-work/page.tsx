import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How We Work | Simpla',
  description:
    'Three stages: diagnosis, system design, build and handoff. How Simpla implements lifecycle systems for SaaS and digital products.',
  alternates: { canonical: 'https://simpla.agency/how-we-work' },
  openGraph: {
    title: 'How We Work | Simpla',
    description:
      'Three stages: diagnosis, system design, build and handoff. How Simpla implements lifecycle systems for SaaS and digital products.',
    url: 'https://simpla.agency/how-we-work',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Work | Simpla',
    description: 'Three stages: diagnosis, system design, build and handoff.',
  },
}

const TOOL_CATEGORIES = [
  { label: 'Lifecycle and messaging', tools: 'Customer.io, Intercom, Braze, OneSignal' },
  { label: 'Product analytics', tools: 'PostHog, Mixpanel, Amplitude' },
  { label: 'Reporting', tools: 'Metabase, Looker Studio' },
  { label: 'CRM', tools: 'HubSpot, Attio' },
]

const STAGES = [
  {
    n: '01',
    id: 'diagnosis',
    title: 'Diagnosis',
    paragraphs: [
      'We start with a free 30-minute call.',
      "We ask you to walk us through your product, your current lifecycle setup, and where you feel the problem most: churn, activation, users going quiet after signup, data that doesn't add up.",
      "We come prepared. Before the call we review whatever you can share: your current tool, your existing workflows, any analytics you have access to.",
    ],
    highlight: "If the problem is something you can fix yourself, we'll tell you. If we're not the right fit for your situation, we'll tell you that too.",
  },
  {
    n: '02',
    id: 'system-design',
    title: 'System Design',
    paragraphs: [
      "Based on what we find in the diagnosis, we design the right system for your situation.",
      "We don't recommend a full lifecycle build if you need one broken workflow fixed. We scope to the problem.",
      "The design document covers: your user states and the behavioral criteria that define each one, the event schema your engineering team will implement, the workflow architecture, which channels we'll use, and how we'll measure success.",
    ],
    highlight: "You review it. We align on it. Then we build.",
  },
  {
    n: '03',
    id: 'build-handoff',
    title: 'Build and Handoff',
    paragraphs: [
      "We build the system in your lifecycle tool, write every message that goes inside it, coordinate with your engineering team on the event implementation, and QA against real user profiles before anything goes live.",
      "When it's live, we monitor the first few days closely.",
      "Then we hand over. A full written record of the system. A walkthrough recording. A training session. When we're done, your team has everything they need to run the system independently.",
      "Some clients do exactly that. Others prefer to keep iterating with us through Ongoing Optimization. The documentation we produce is designed to support both paths.",
    ],
    highlight: null,
  },
]

export default function HowWeWorkPage() {
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
          <p className="eyebrow mb-4">How We Work</p>
          <h1
            className="font-display font-bold text-ink leading-[1.06] tracking-[-0.03em] mb-6 max-w-2xl"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            How we <span className="text-gradient">work</span>
          </h1>
          <p className="text-lg text-ash leading-relaxed max-w-xl">
            Three stages. One outcome: a lifecycle system that works when we leave.
          </p>
        </div>
      </section>

      {/* Stages */}
      {STAGES.map((stage, idx) => (
        <section
          key={stage.id}
          id={stage.id}
          className="py-20 border-b border-smoke scroll-mt-20"
          style={{
            background: idx % 2 === 0
              ? 'linear-gradient(180deg, #ffffff 0%, #f8f9fd 100%)'
              : 'linear-gradient(180deg, #f8f9fd 0%, #ffffff 100%)',
          }}
        >
          <div className="container-page grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl font-display font-bold text-brand text-lg mb-5"
                style={{
                  background: 'linear-gradient(135deg, #ede8ff 0%, #ede8ff 100%)',
                  border: '1px solid rgba(123,94,255,0.22)',
                  boxShadow: '0 2px 12px rgba(123,94,255,0.14)',
                }}
              >
                {stage.n}
              </span>
              <h2
                className="font-display font-bold text-ink tracking-[-0.02em] leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
              >
                {stage.title}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-ash leading-relaxed text-[1.0625rem]">
              {stage.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {stage.highlight && (
                <div
                  className="rounded-xl px-6 py-5 border-l-4 border-brand mt-6"
                  style={{
                    background: 'linear-gradient(135deg, #f0ecff 0%, #f7f4ff 100%)',
                    boxShadow: '0 1px 4px rgba(123,94,255,0.08), 0 4px 16px rgba(123,94,255,0.05)',
                  }}
                >
                  <p className="text-ink font-display font-medium leading-relaxed">{stage.highlight}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Tools */}
      <section
        className="py-20 border-b border-smoke"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 100% 50%, rgba(158,112,206,0.07) 0%, transparent 55%),
            linear-gradient(180deg, #f8f9fd 0%, #f5f0ff 50%, #f8f9fd 100%)
          `,
        }}
      >
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2
              className="font-display font-bold text-ink tracking-[-0.02em] leading-tight mb-6"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)' }}
            >
              Tools we work with
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {TOOL_CATEGORIES.map((cat) => (
                <div key={cat.label} className="card-sm rounded-xl p-6">
                  <p className="text-xs font-mono uppercase tracking-[0.14em] text-ash mb-2">
                    {cat.label}
                  </p>
                  <p className="text-ink font-display font-semibold text-sm leading-relaxed">
                    {cat.tools}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-ash text-sm leading-relaxed">
              We are tool-agnostic by principle. We&rsquo;ll recommend what fits your stage, your
              stack, and your budget.
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
            <span className="text-gradient">Ready to start?</span>
          </h2>
          <p className="text-ash text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The first call is free. Thirty minutes to understand your situation before anything else.
          </p>
          <a href={BOOKING_URL} className="btn-primary text-base px-8 py-4">
            Book a free audit <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
