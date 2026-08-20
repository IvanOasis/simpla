import Link from 'next/link'
import Logo from './Logo'

const SERVICES_LINKS = [
  { href: '/services#audit', label: 'Lifecycle Audit' },
  { href: '/services#implementation', label: 'Lifecycle Implementation' },
  { href: '/services#optimization', label: 'Marketing Ops' },
]

const COMPANY_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/how-we-work', label: 'How We Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-smoke">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-ash leading-relaxed">
              Lifecycle systems for SaaS and digital products.
            </p>
          </div>

          {/* Services column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.14em] text-ink font-medium mb-4">
              Services
            </p>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ash hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.14em] text-ink font-medium mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ash hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-smoke">
          <p className="text-sm text-ash">&copy; 2026 Simpla</p>
          <a
            href="mailto:hello@simpla.agency"
            className="text-sm text-ash hover:text-ink transition-colors"
          >
            hello@simpla.agency
          </a>
        </div>
      </div>
    </footer>
  )
}
