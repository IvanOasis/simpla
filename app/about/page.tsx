import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Simpla | Customer.io Lifecycle Specialists',
  description:
    'Simpla is a specialist lifecycle agency focused on Customer.io for SaaS and digital products. 10+ years of hands-on lifecycle experience.',
  alternates: { canonical: 'https://simpla.agency/about' },
  openGraph: {
    title: 'About Simpla | Customer.io Lifecycle Specialists',
    description:
      'Simpla is a specialist lifecycle agency focused on Customer.io for SaaS and digital products. 10+ years of hands-on lifecycle experience.',
    url: 'https://simpla.agency/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main>
      <Nav />

      {/* Page header */}
      <section className="pt-36 pb-20 border-b border-smoke">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">About</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-ink mb-6 leading-tight">
            A specialist agency with one focus.
          </h1>
          <p className="text-lg text-ash leading-relaxed">
            We don&rsquo;t do ads, SEO, or social. We build lifecycle systems — the infrastructure that turns signups into retained customers.
          </p>
        </div>
      </section>

      {/* What we are */}
      <section className="py-20 border-b border-smoke">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">What we are</p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-ash leading-relaxed text-lg">
            <p>
              Simpla is a lifecycle marketing agency for SaaS and digital product companies. We design, implement and optimize the systems that convert new users into retained customers — using Customer.io as the primary tool.
            </p>
            <p>
              Lifecycle marketing is the entire work of building a relationship with a user over time: getting them to activate, keeping them engaged, winning them back when they drift, and knowing what to say at every stage of that journey.
            </p>
            <p className="text-ink font-medium">
              It&rsquo;s infrastructure work, not campaign work — and that distinction matters for how we approach every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 border-b border-smoke bg-snow">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Who we are</p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-ash leading-relaxed text-lg">
            <p>
              A small team with over 10 years of hands-on lifecycle work across B2B and B2C products — subscription, freemium, and usage-based models, from early-stage startups to growth-stage scale-ups.
            </p>
            <p>
              No juniors working unsupervised. No account managers in the middle. You work directly with the people doing the work.
            </p>
            <p>
              We&rsquo;ve built lifecycle systems across dozens of SaaS products and we know the patterns that repeat — the same failure modes, the same gaps between what teams think is in place and what&rsquo;s actually running.
            </p>
          </div>
        </div>
      </section>

      {/* How we operate */}
      <section className="py-20 border-b border-smoke">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">How we operate</p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-ash leading-relaxed text-lg">
            <p>
              We diagnose before we prescribe. Every engagement starts with an honest look at your current setup — events, segments, workflows, and data. We tell you what&rsquo;s broken, what&rsquo;s worth fixing, and in what order.
            </p>
            <p>
              If the right answer is a small, targeted fix, we say that. If it&rsquo;s a full rebuild, we&rsquo;ll explain exactly why before you commit to anything.
            </p>
            <p>
              The work ends with documentation written for your team — not for us — and a training session so whoever owns lifecycle on your side can operate the system independently. No lock-in. The system lives in your tools.
            </p>
          </div>
        </div>
      </section>

      {/* Customer.io partnership */}
      <section className="py-20 border-b border-smoke bg-snow">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Tooling</p>
            {/* Customer.io Certified Partner badge */}
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ash border border-smoke rounded-full px-3 py-1.5 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              Customer.io Certified Partner
            </span>
          </div>
          <div className="lg:col-span-8 space-y-5 text-ash leading-relaxed text-lg">
            <p>
              We&rsquo;re Customer.io Certified Partners — which means Customer.io has reviewed our implementation work and vouches for it directly. It&rsquo;s proof of depth with the platform, not a sales relationship we&rsquo;re pushing on you.
            </p>
            <p>
              In practice, we default to Customer.io because it&rsquo;s the tool that fits most SaaS and digital product teams we work with. But the system we design — the states, events, and workflow logic — is what actually matters, and it adapts to whatever tool fits your stack.
            </p>
            <p>
              Tool-agnostic by philosophy. Customer.io specialists by practice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-page text-center">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink mb-6">
            Want to know if we&rsquo;re the right fit?
          </h2>
          <p className="text-ash text-lg mb-10 max-w-md mx-auto">
            Start with the free audit call. No commitment — just 30 minutes and an honest read on your lifecycle.
          </p>
          <a href={BOOKING_URL} className="btn-primary">
            Book a free lifecycle audit <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
