import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import BlogThumbnail from '@/components/BlogThumbnail'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { posts, getPostBySlug } from '@/lib/posts'
import { BOOKING_URL } from '@/lib/constants'

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
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `https://simpla.agency/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://simpla.agency/blog/${post.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
    },
    other: {
      'article:published_time': post.dateISO,
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.dateISO,
    author: {
      '@type': 'Organization',
      name: 'Simpla',
      url: 'https://simpla.agency',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Simpla',
      url: 'https://simpla.agency',
    },
  }

  return (
    <main>
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-ash hover:text-ink transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All articles
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            {post.draft && (
              /* DRAFT */
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand border border-brand/30 rounded-full px-2 py-0.5">
                Draft
              </span>
            )}
          </div>
          <h1
            className="font-display font-bold text-ink tracking-[-0.02em] leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {post.title}
          </h1>
          <p className="text-lg text-ash leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 h-px bg-smoke" />

          <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mt-10">
            <BlogThumbnail slug={post.slug} title={post.title} size="hero" />
          </div>
        </header>

        <div className="prose-post space-y-8">
          {post.sections.map((section, si) => (
            <section key={si}>
              {section.heading &&
                (section.headingLevel === 'h3' ? (
                  <h3 className="font-display font-bold text-ink text-xl mb-4 leading-snug">
                    {section.heading}
                  </h3>
                ) : (
                  <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-4 leading-snug">
                    {section.heading}
                  </h2>
                ))}

              {section.paragraphs?.map((p, pi) => (
                <p key={pi} className="mb-4">
                  {p}
                </p>
              ))}

              {section.list && (
                <ul className="space-y-2.5 my-4 list-none">
                  {section.list.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.internalLink && (
                <div className="my-6 rounded-xl border border-brand/25 bg-brand/5 p-5">
                  <p className="text-sm text-slate leading-relaxed mb-3">
                    {section.internalLink.text}
                  </p>
                  <Link
                    href={section.internalLink.href}
                    className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-brand hover:text-brand/80 transition-colors"
                  >
                    {section.internalLink.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Author block */}
        <div className="mt-16 pt-8 border-t border-smoke flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-smoke flex items-center justify-center text-ash text-xs font-mono shrink-0">
            SL
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Simpla</p>
            <p className="text-xs text-ash">
              Lifecycle specialists for SaaS and digital products.{' '}
              <Link href="/about" className="hover:text-ink transition-colors">
                About us
              </Link>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-smoke p-10 text-center bg-snow">
          <p className="font-display font-bold text-2xl text-ink tracking-tight mb-3">
            Ready to find out where your lifecycle is breaking?
          </p>
          <p className="text-ash mb-8 max-w-sm mx-auto leading-relaxed">
            A free 30-minute discovery call. We&rsquo;ll look at your setup and tell you honestly what to fix first.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a discovery call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </article>

      <Footer />
    </main>
  )
}
