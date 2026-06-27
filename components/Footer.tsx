import Link from 'next/link'
import Logo from './Logo'

const SERVICES_LINKS = [
  { href: '/services#migration', label: 'Customer.io Migration' },
  { href: '/services#data-health', label: 'Data Health Audit' },
  { href: '/services#lifecycle-architecture', label: 'Lifecycle Architecture' },
  { href: '/services#growth-ops', label: 'Growth Ops' },
]

const COMPANY_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const PARTNER_LINKS = [
  { href: 'https://customer.io/agency-partners/', label: 'Customer.io' },
  { href: 'https://posthog.com', label: 'PostHog' },
  { href: 'https://metabase.com', label: 'Metabase' },
  { href: 'https://hubspot.com', label: 'HubSpot' },
]

export default function Footer() {
  return (
    <footer className="border-t border-smoke">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-ash leading-relaxed">
              Lifecycle systems for SaaS and digital products.
            </p>
          </div>

          {/* Services column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.14em] text-ink font-medium mb-4">Services</p>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ash hover:text-ink transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.14em] text-ink font-medium mb-4">Company</p>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ash hover:text-ink transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.14em] text-ink font-medium mb-4">Partners</p>
            <ul className="space-y-3">
              {PARTNER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ash hover:text-ink transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8 border-t border-smoke">
          <p className="text-sm text-ash">&copy; 2026 Simpla</p>
        </div>
      </div>
    </footer>
  )
}
