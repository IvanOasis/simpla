import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Lifecycle Marketing Blog | Simpla',
  description:
    'Practical writing on lifecycle systems, event tracking, user states, onboarding and retention for SaaS and digital products.',
  alternates: { canonical: 'https://simpla.agency/blog' },
  openGraph: {
    title: 'Lifecycle Marketing Blog | Simpla',
    description:
      'Practical writing on lifecycle systems, event tracking, user states, onboarding and retention for SaaS and digital products.',
    url: 'https://simpla.agency/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lifecycle Marketing Blog | Simpla',
    description: 'Practical writing on lifecycle systems for SaaS and digital products.',
  },
}

export default function BlogIndex() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  )

  return (
    <main>
      <Nav />

      <section className="pt-36 pb-20 border-b border-smoke">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Blog</p>
          <h1
            className="font-display font-bold text-ink leading-[1.06] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Lifecycle Marketing <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-lg text-ash leading-relaxed">
            Practical writing on lifecycle systems, event tracking, user states, onboarding and
            retention for SaaS and digital products.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page max-w-3xl">
          <div className="divide-y divide-smoke">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 py-10 hover:no-underline"
              >
                <div className="shrink-0 sm:w-28 sm:pt-1">
                  <span className="font-mono text-[11px] text-ash block">{post.date}</span>
                  <span className="font-mono text-[11px] text-ash block">{post.readTime} read</span>
                  {post.draft && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brand border border-brand/30 rounded-full px-2 py-0.5 mt-2 inline-block">
                      Draft
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="font-display font-bold text-ink text-xl leading-snug mb-3 group-hover:text-brand transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ash leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
