import Link from 'next/link'
import type { Metadata } from 'next'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog — Simpla',
  description: 'Straight talk on marketing, automation, and growing a business.',
}

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Simpla home">
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

          <Link href="/#contact"
            className="bg-gradient-to-br from-primary to-secondary-container text-white px-5 py-2 rounded-full font-headline font-bold text-sm hover:opacity-85 transition-all">
            Let's talk
          </Link>
        </div>
      </nav>

      {/* ── Header ── */}
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-4">Blog</p>
          <h1 className="font-headline font-black text-5xl md:text-7xl tracking-tighter text-on-surface leading-[1.05] mb-4">
            How we think.
          </h1>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary-container rounded-full mb-6" />
          <p className="text-lg text-on-surface/65 font-medium max-w-lg">
            Straight talk on marketing, automation, and growing a business.
          </p>
        </div>
      </header>

      {/* ── Post grid ── */}
      <main className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-outline-variant/15 bg-white/60 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* card top accent */}
              <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${post.categoryColor}, #5491ff)` }} />

              <div className="p-6 flex flex-col flex-1">
                <span
                  className="self-start text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4"
                  style={{ background: `${post.categoryColor}10`, color: post.categoryColor, border: `1px solid ${post.categoryColor}25` }}
                >
                  {post.category}
                </span>

                <h2 className="font-headline font-bold text-on-surface text-base leading-snug mb-3 group-hover:text-primary transition-colors flex-1">
                  {post.title}
                </h2>

                <p className="text-sm text-on-surface/60 leading-relaxed mb-5 line-clamp-2 font-medium">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-outline font-medium">{post.date} · {post.readTime} read</span>
                  <svg className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-outline-variant/10 py-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-on-surface-variant">
          <span>© 2026 Simpla Agency</span>
          <Link href="/" className="hover:text-primary transition-colors font-medium">← Back to site</Link>
        </div>
      </footer>
    </div>
  )
}
