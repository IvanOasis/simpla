import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://simpla.agency'),
  title: 'Simpla — Performance Marketing Agency',
  description:
    'Simpla is a performance marketing agency running paid ads on Meta, Google, TikTok, LinkedIn and more. We treat your business like our own.',
  keywords:
    'performance marketing agency, Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, paid advertising, LATAM agency, performance agency',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://simpla.agency',
  },
  openGraph: {
    title: 'Simpla — Performance Marketing Agency',
    description: 'Meta, Google, TikTok, LinkedIn and more. One team that handles your strategy, your creatives, and your spend.',
    url: 'https://simpla.agency',
    siteName: 'Simpla',
    type: 'website',
    images: [
      {
        url: '/assets/Simpla-Logo-Web.png',
        width: 1200,
        height: 630,
        alt: 'Simpla — Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simpla — Performance Marketing Agency',
    description: 'Meta, Google, TikTok, LinkedIn and more. One team that handles your strategy, your creatives, and your spend.',
    images: ['/assets/Simpla-Logo-Web.png'],
  },
  icons: {
    icon: '/assets/simpla-favicon.svg',
    shortcut: '/assets/simpla-favicon.svg',
    apple: '/assets/simpla-favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
        <Script
          id="json-ld-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MarketingAgency',
              name: 'Simpla',
              url: 'https://simpla.agency',
              logo: 'https://simpla.agency/assets/Simpla-Logo-Web.png',
              description:
                'Full-service marketing agency for SMBs and growing businesses. Strategy, content, paid media, automation and SEO.',
              areaServed: ['AR', 'ES', 'MX', 'US', 'GB'],
              sameAs: ['https://www.linkedin.com/company/simpla-agency'],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                url: 'https://simpla.agency/#contact',
              },
            }),
          }}
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-GG30BD4ZQF" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GG30BD4ZQF');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}


