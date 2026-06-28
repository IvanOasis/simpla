import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
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
  { label: 'Lifecycle & messaging', tools: ['Customer.io', 'Intercom', 'Braze', 'OneSignal'] },
  { label: 'Product analytics', tools: ['PostHog', 'Mixpanel', 'Amplitude'] },
  { label: 'Reporting', tools: ['Metabase', 'Looker Studio'] },
  { label: 'CRM', tools: ['HubSpot', 'Attio'] },
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
            className="font-display font-bold text-ink leading-[1.06] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Three stages. <span className="text-gradient">One outcome.</span>
          </h1>
          <p className="text-lg text-ash leading-relaxed">
            A lifecycle system that works — and that your team can maintain after we leave.
          </p>
        </div>
      </section>

      {/* Stages — one connected section, structurally different per stage */}
      <section className="border-b border-smoke">

        {/* 01 Diagnosis */}
        <div id="stage-01" className="border-b border-smoke scroll-mt-20">
          <div className="container-page py-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <div
                className="font-display font-black text-gradient leading-none select-none"
                style={{ fontSize: 'clamp(5rem, 11vw, 8rem)' }}
              >
                01
              </div>
              <h2
                className="font-display font-bold text-ink tracking-[-0.02em] leading-tight mt-1 mb-2"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                Diagnosis
              </h2>
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-ash">The starting point</p>
            </div>

            <div className="lg:col-span-8 space-y-6 pt-2 lg:pt-4">
              <p className="text-ash leading-relaxed text-[1.0625rem]">
                We start with a free 30-minute call. We ask you to walk us through your product,
                your current lifecycle setup, and where you feel the problem most — churn,
                activation, users going quiet after signup, data that doesn&rsquo;t add up.
              </p>

              <div className="rounded-xl border border-smoke bg-snow p-6">
                <p className="text-xs font-mono uppercase tracking-[0.14em] text-ash mb-4">
                  During the call, we review
                </p>
                <ul className="space-y-3">
                  {[
                    'Your lifecycle tool and any existing workflows',
                    'Analytics and event tracking setup',
                    'Current email, push, or in-app configuration',
                    'Where you think the problem lives',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-ink font-medium leading-relaxed border-l-2 border-brand pl-4">
                If the problem is something you can fix yourself, we&rsquo;ll tell you. If
                we&rsquo;re not the right fit, we&rsquo;ll tell you that too.
              </p>
            </div>
          </div>
        </div>

        {/* 02 System Design */}
        <div id="stage-02" className="border-b border-smoke scroll-mt-20 bg-snow">
          <div className="container-page py-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <div
                className="font-display font-black text-gradient leading-none select-none"
                style={{ fontSize: 'clamp(5rem, 11vw, 8rem)' }}
              >
                02
              </div>
              <h2
                className="font-display font-bold text-ink tracking-[-0.02em] leading-tight mt-1 mb-2"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                System Design
              </h2>
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-ash">The plan</p>
            </div>

            <div className="lg:col-span-8 space-y-6 pt-2 lg:pt-4">
              <div className="space-y-4 text-ash leading-relaxed text-[1.0625rem]">
                <p>
                  Based on the diagnosis, we design the right system for your situation. We
                  don&rsquo;t recommend a full lifecycle build if you need one broken workflow fixed.
                  We scope to the problem.
                </p>
                <p>
                  We produce a design document you review and sign off on before we build anything.
                </p>
              </div>

              <div className="rounded-xl border border-smoke bg-white p-6">
                <p className="text-xs font-mono uppercase tracking-[0.14em] text-ash mb-5">
                  The document covers
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'User states and the behavioral criteria that define each one',
                    'Event schema your engineering team will implement',
                    'Workflow architecture across all stages',
                    'Which channels to use and why',
                    'How we will measure success',
                  ].map((item, i) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="font-mono text-[10px] text-brand shrink-0 mt-1 pt-0.5">
                        0{i + 1}
                      </span>
                      <p className="text-sm text-ink leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-ink font-medium leading-relaxed border-l-2 border-brand pl-4">
                You review it. We align on it. Then we build.
              </p>
            </div>
          </div>
        </div>

        {/* 03 Build & Handoff */}
        <div id="stage-03" className="scroll-mt-20">
          <div className="container-page py-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <div
                className="font-display font-black text-gradient leading-none select-none"
                style={{ fontSize: 'clamp(5rem, 11vw, 8rem)' }}
              >
                03
              </div>
              <h2
                className="font-display font-bold text-ink tracking-[-0.02em] leading-tight mt-1 mb-2"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                Build &amp; Handoff
              </h2>
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-ash">The work</p>
            </div>

            <div className="lg:col-span-8 space-y-6 pt-2 lg:pt-4">
              <div className="space-y-4 text-ash leading-relaxed text-[1.0625rem]">
                <p>
                  We build the system in your lifecycle tool, write every message that goes inside
                  it, coordinate with your engineering team on event implementation, and QA against
                  real user profiles before anything goes live.
                </p>
                <p>
                  When it&rsquo;s live, we monitor the first few days closely. Then we hand over.
                </p>
              </div>

              <div className="rounded-xl border border-smoke bg-snow p-6">
                <p className="text-xs font-mono uppercase tracking-[0.14em] text-ash mb-5">
                  You walk away with
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'System live in your lifecycle tool',
                    'Every message written and tested',
                    'Full written system documentation',
                    'Walkthrough recording',
                    'Team training session',
                    'Independence — or the option to keep iterating with us',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <p className="text-sm text-ink leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Tools — horizontal layout, structurally lighter */}
      <section className="py-20 border-b border-smoke">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
            <div className="lg:w-56 shrink-0">
              <h2 className="font-display font-bold text-ink tracking-[-0.02em] text-xl mb-2">
                Tools we work with
              </h2>
              <p className="text-sm text-ash leading-relaxed">
                Tool-agnostic by principle. We recommend what fits your stage, stack, and budget.
              </p>
            </div>
            <div className="flex-1 space-y-5">
              {TOOL_CATEGORIES.map((cat) => (
                <div key={cat.label} className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <span className="text-xs font-mono uppercase tracking-[0.14em] text-ash w-44 shrink-0">
                    {cat.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
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
            <span className="text-gradient">Ready to start?</span>
          </h2>
          <p className="text-ash text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The first call is free. Thirty minutes to understand your situation before anything else.
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
