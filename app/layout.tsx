import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://simpla.agency'),
  title: {
    default: 'Simpla | Customer.io Lifecycle Specialists for SaaS',
    template: '%s | Simpla',
  },
  description:
    'Simpla designs, implements and optimizes Customer.io lifecycle systems for SaaS and digital products. Migration, data health, lifecycle architecture, growth ops.',
  keywords:
    'lifecycle marketing agency, customer lifecycle, Customer.io partner, SaaS onboarding, churn reduction, lifecycle system, user activation, retention marketing',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://simpla.agency',
  },
  openGraph: {
    title: 'Simpla | Customer.io Lifecycle Specialists for SaaS',
    description:
      'Simpla designs, implements and optimizes Customer.io lifecycle systems for SaaS and digital products.',
    url: 'https://simpla.agency',
    siteName: 'Simpla',
    type: 'website',
    images: [
      {
        url: '/assets/Simpla-Logo-Web.png',
        width: 1200,
        height: 630,
        alt: 'Simpla: Customer.io Lifecycle Specialists for SaaS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simpla | Customer.io Lifecycle Specialists for SaaS',
    description:
      'Simpla designs, implements and optimizes Customer.io lifecycle systems for SaaS and digital products.',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://js.hsforms.net" />
        <link rel="preconnect" href="https://forms.hsforms.com" />
        <link rel="dns-prefetch" href="https://js.hsforms.net" />
        <Script
          src="https://js.hsforms.net/forms/embed/51672874.js"
          strategy="afterInteractive"
        />
        <Script
          id="json-ld-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Simpla',
              url: 'https://simpla.agency',
              description:
                'Lifecycle marketing agency helping SaaS and digital product companies design, implement and optimize Customer.io systems that convert, activate and retain users.',
              areaServed: ['US', 'AR', 'MX', 'UY', 'GB'],
              sameAs: [
                'https://www.linkedin.com/company/simpla-agency',
                'https://www.instagram.com/simplaagency',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                url: 'https://simpla.agency/contact',
              },
            }),
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GG30BD4ZQF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GG30BD4ZQF');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
