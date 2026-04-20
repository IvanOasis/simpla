import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { posts, getPostBySlug } from '@/lib/posts'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Simpla`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Back to Simpla">
            <svg viewBox="0 0 300 300" className="w-7 h-7" aria-hidden="true">
              <defs>
                <linearGradient id="logo-g" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9E70CE" />
                  <stop offset="100%" stopColor="#5390FF" />
                </linearGradient>
              </defs>
              <circle cx="150" cy="150" r="147" fill="url(#logo-g)" />
              <path d="M231.6,209c-1.5,4.5-4.5,7.9-8.7,10.1c-2.4,1.2-5,1.9-7.7,1.9c-3.3,0-6.3-0.8-9-2.6c-2.8-1.7-5.1-4.1-6.5-7.2L150,112l-40,79.8l1.8-3.6l-11.5,23c-2.1,4.4-5.5,7.3-10,8.7c-4.5,1.6-9,1.2-13.3-0.9c-4.3-2.1-7.2-5.5-8.7-10.1c-1.6-4.6-1.2-9,0.9-13.3l65.2-130.4c1.5-2.9,3.6-5.3,6.4-7.1c2.8-1.7,5.8-2.5,9.1-2.5c3.3,0,6.4,0.8,9.2,2.5c2.8,1.7,4.9,4.1,6.4,7.1l65.1,130.4C232.9,200,233.2,204.5,231.6,209" fill="#fff" />
            </svg>
            <span className="font-headline font-bold text-lg tracking-tight text-on-surface">Simpla</span>
          </Link>

          <Link
            href="/#blog"
            className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All articles
          </Link>
        </div>
      </nav>

      {/* ── Article ── */}
      <article className="max-w-2xl mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <header className="mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
            style={{
              background: `${post.categoryColor}12`,
              color: post.categoryColor,
              border: `1px solid ${post.categoryColor}30`,
            }}
          >
            {post.category}
          </span>

          <h1 className="font-headline font-black text-3xl md:text-5xl text-on-surface leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-on-surface/70 leading-relaxed mb-8 font-medium">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 text-sm text-on-surface-variant">
            <span className="font-medium">Simpla Agency</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant" />
            <span>{post.readTime} read</span>
          </div>

          <div className="mt-8 h-px bg-outline-variant/15" />
        </header>

        {/* Body */}
        <div className="prose-simpla space-y-8">
          {post.sections.map((section, si) => (
            <section key={si}>
              {section.heading && (
                <h2 className="font-headline font-black text-xl md:text-2xl text-on-surface tracking-tight mb-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs?.map((p, pi) => (
                <p key={pi} className="text-base md:text-lg text-on-surface/80 leading-relaxed mb-4 font-medium">
                  {p}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-6 pl-5 border-l-4 rounded-r-lg py-1"
                  style={{ borderColor: post.categoryColor }}>
                  <p className="text-base md:text-lg font-semibold text-on-surface/90 italic leading-relaxed">
                    "{section.quote}"
                  </p>
                </blockquote>
              )}

              {section.list && (
                <ul className="space-y-2.5 my-4">
                  {section.list.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3">
                      <span className="mt-1.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${post.categoryColor}15` }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: post.categoryColor }} />
                      </span>
                      <span className="text-base text-on-surface/80 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.numbered && (
                <ol className="space-y-3 my-4">
                  {section.numbered.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-4">
                      <span className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-black"
                        style={{ background: `${post.categoryColor}15`, color: post.categoryColor }}>
                        {ii + 1}
                      </span>
                      <span className="text-base text-on-surface/80 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl p-10 text-center"
          style={{ background: `linear-gradient(135deg, ${post.categoryColor}10 0%, #5491ff10 100%)`,
            border: `1px solid ${post.categoryColor}20` }}>
          <p className="font-headline font-black text-2xl md:text-3xl text-on-surface tracking-tight mb-3">
            Ready to apply this to your business?
          </p>
          <p className="text-on-surface/65 font-medium mb-8 max-w-sm mx-auto">
            We work with SMBs and growing companies to turn strategy into results.
          </p>
          <Link
            href="/#contact"
            className="inline-block text-white px-8 py-3.5 rounded-full font-headline font-bold text-sm shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: `linear-gradient(135deg, ${post.categoryColor}, #5491ff)` }}
          >
            Let's talk
          </Link>
        </div>
      </article>

      {/* ── Footer ── */}
      <footer className="border-t border-outline-variant/10 py-8">
        <div className="max-w-2xl mx-auto px-6 flex items-center justify-between text-sm text-on-surface-variant">
          <span>© 2026 Simpla Agency</span>
          <Link href="/" className="hover:text-primary transition-colors font-medium">
            simpla.agency
          </Link>
        </div>
      </footer>
    </div>
  )
}
