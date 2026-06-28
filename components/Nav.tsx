'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { BOOKING_URL } from '@/lib/constants'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-smoke">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" aria-label="Simpla home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2"
          aria-label="Main navigation"
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-ash hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={BOOKING_URL}
            className="btn-primary text-sm px-5 py-2.5"
          >
            Book a discovery call <span aria-hidden="true">›</span>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-ink"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-smoke bg-white" aria-label="Mobile navigation">
          <div className="container-page py-4 flex flex-col gap-1">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-sm font-medium text-ash hover:text-ink transition-colors border-b border-smoke last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Book a discovery call
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
