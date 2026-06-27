import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Lifecycle Marketing Blog | Simpla',
  description:
    'Practical insights on lifecycle marketing, Customer.io implementation, user states, onboarding and retention for SaaS and digital products.',
  alternates: { canonical: 'https://simpla.agency/blog' },
  openGraph: {
    title: 'Lifecycle Marketing Blog | Simpla',
    description:
      'Practical insights on lifecycle marketing, Customer.io implementation, user states, onboarding and retention for SaaS and digital products.',
    url: 'https://simpla.agency/blog',
    type: 'website',
  },
}

export default function BlogIndex() {
  return (
    <main>
      <Nav />

      <section className="pt-36 pb-20 border-b border-smoke">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Blog</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-ink mb-6 leading-tight">
            How we think about lifecycle.
          </h1>
          <p className="text-lg text-ash leading-relaxed">
            Direct writing on user states, activation, retention and what actually works — no buzzwords.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-6 flex flex-col hover:border-brand/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[11px] text-ash">
                    {post.date} &middot; {post.readTime}
                  </span>
                  {post.draft && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brand border border-brand/30 rounded-full px-2 py-0.5">
                      Draft
                    </span>
                  )}
                </div>
                <h2 className="font-display font-semibold text-lg text-ink leading-snug mb-3 flex-1">
                  {post.title}
                </h2>
                <p className="text-sm text-ash leading-relaxed line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
