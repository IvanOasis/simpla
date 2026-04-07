import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'Simpla — We learn your business. Then we grow it.',
  description:
    'Simpla is a full-service marketing agency for SMBs and growing businesses. We combine strategic understanding with AI-powered execution — so your marketing compounds over time, not just during office hours.',
  keywords:
    'marketing agency, SMB marketing, paid media, automation, SEO, GEO, AI marketing, LATAM marketing, content marketing, digital agency',
  openGraph: {
    title: 'Simpla — We learn your business. Then we grow it.',
    description: 'Marketing that works while you sleep.',
    type: 'website',
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
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}


