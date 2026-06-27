import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
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
    title: `${post.title} | Simpla`,
    description: post.excerpt,
    alternates: { canonical: `https://simpla.agency/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Simpla`,
      description: post.excerpt,
      url: `https://simpla.agency/blog/${post.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Simpla`,
      description: post.excerpt,
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
    description: post.excerpt,
    datePublished: post.date,
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
            <span className="font-mono text-[11px] text-ash">
              {post.date} &middot; {post.readTime} read
            </span>
            {post.draft && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand border border-brand/30 rounded-full px-2 py-0.5">
                Draft
              </span>
            )}
          </div>
          <h1 className="font-display font-semibold text-3xl md:text-5xl text-ink tracking-tight leading-[1.1] mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-ash leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 h-px bg-smoke" />
        </header>

        <div className="prose-post space-y-8">
          {post.sections.map((section, si) => (
            <section key={si}>
              {section.heading && (
                <h2 className="font-display font-semibold text-xl md:text-2xl text-ink tracking-tight mb-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs?.map((p, pi) => (
                <p key={pi} className="mb-4">{p}</p>
              ))}

              {section.quote && (
                <blockquote className="my-6 pl-5 border-l-2 border-brand py-1">
                  <p className="italic text-ink">{section.quote}</p>
                </blockquote>
              )}

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

              {section.numbered && (
                <ol className="space-y-3 my-4 list-none">
                  {section.numbered.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-4">
                      <span className="font-mono mt-0.5 w-6 h-6 rounded-full border border-brand/40 text-brand flex items-center justify-center shrink-0 text-xs">
                        {ii + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
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
              Customer.io lifecycle specialists —{' '}
              <Link href="/about" className="hover:text-ink transition-colors">
                About us
              </Link>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 card p-10 text-center bg-snow">
          <p className="font-display font-semibold text-2xl text-ink tracking-tight mb-3">
            Ready to find out where yours is broken?
          </p>
          <p className="text-ash mb-8 max-w-sm mx-auto leading-relaxed">
            A free 30-minute audit of your current lifecycle setup — no obligation.
          </p>
          <a href={BOOKING_URL} className="btn-primary">
            Book a free lifecycle audit <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </article>

      <Footer />
    </main>
  )
}
