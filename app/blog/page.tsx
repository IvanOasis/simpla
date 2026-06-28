import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BlogThumbnail from '@/components/BlogThumbnail'
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
        <div className="container-page">
          <p className="eyebrow mb-4">Blog</p>
          <h1
            className="font-display font-bold text-ink leading-[1.06] tracking-[-0.03em] mb-6 max-w-xl"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Lifecycle Marketing <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-lg text-ash leading-relaxed max-w-xl">
            Practical writing on lifecycle systems, event tracking, and retention for SaaS products.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-smoke bg-white overflow-hidden hover:border-brand/30 hover:shadow-lg transition-all duration-200"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <BlogThumbnail slug={post.slug} title={post.title} />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[11px] text-ash">{post.date}</span>
                    <span className="text-smoke select-none">·</span>
                    <span className="font-mono text-[11px] text-ash">{post.readTime} read</span>
                  </div>
                  <h2 className="font-display font-bold text-ink text-lg leading-snug mb-3 group-hover:text-brand transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ash leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-5 pt-4 border-t border-smoke flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-ink group-hover:text-brand transition-colors">
                      Read article
                    </span>
                    <span className="text-xs text-ash group-hover:text-brand group-hover:translate-x-0.5 transition-all">→</span>
                  </div>
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
