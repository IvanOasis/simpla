# Simpla — Instructions for Claude Code

## Read this file first, then read simpla-pages.md and simpla-copy.md before writing any code.

---

## Visual References

Study these two sites carefully before writing a single line of code:

1. scalero.io — primary reference for layout, whitespace, typography hierarchy and overall feel
2. trypropel.ai - primery reference for another agency that offers a similar service to ours

Do NOT copy either site. Take the clean layout from Scalero and the specialist tone from trypropel. The result should feel like neither but be inspired by both.

Avoid these three generic Claude Code defaults:
- Warm cream background with serif display and terracotta accent
- Near-black background with acid-green or vermilion accent
- Broadsheet/newspaper layout with hairline rules and zero border-radius

---

## Brand Colors

Extract the exact hex colors from the Simpla logo in the project. Build the entire palette from those colors. Do not invent colors. Use them for buttons, links, highlights, text hierarchy and subtle backgrounds.

---

## Site Structure

This is a multi-page site with proper routing. Not a single-page scroll. Pages:

- / (Home)
- /services
- /how-we-work
- /case-studies
- /about
- /blog (index + /blog/[slug] for individual posts)
- /contact

Single constant at the top of the project:
const BOOKING_URL = "#book-audit"
All CTA buttons use this constant. Makes it easy to swap in a real Calendly URL later.

---

## Navigation (all pages)

Logo left · Services · How We Work · Case Studies · Blog · About · Contact
CTA button right: "Book a free audit" (uses BOOKING_URL)

---

## Footer (all pages)

Three columns:
- Services: Lifecycle Audit · Lifecycle Implementation · Ongoing Optimization
- Company: About · How We Work · Case Studies · Blog · Contact
- Partners: Customer.io [small logo badge]

Bottom row: 2026 Simpla · Customer.io Certified Partner · hello@simpla.agency

---

## Partner Logos

Use real logos. Grayscale by default, color on hover. Each logo links to the partner site in a new tab.

- Customer.io (Certified Partner) → https://customer.io/agency-partners/
  Logo: https://cdn.brandfetch.io/idDOyxSYhH/w/400/h/400/theme/dark/icon.jpeg
- PostHog → https://posthog.com
  Logo: https://posthog.com/brand/posthog-logo.svg
- Metabase → https://metabase.com
  Logo: https://www.metabase.com/images/logo.svg
- HubSpot → https://hubspot.com
  Logo: https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png
- Intercom, Braze, OneSignal, Mixpanel: use text labels if SVG logos are not easily available

All logo images: loading="lazy", descriptive alt text.

---

## SEO — Apply to Every Page

- Unique title tag per page (60 chars max)
- Unique meta description per page (150 chars max)
- One H1 per page, logical H2/H3 hierarchy
- Semantic HTML: header, nav, main, section, article, footer
- Open Graph and Twitter Card meta tags on every page
- Canonical URL tag per page
- Descriptive alt text on every image and logo
- JSON-LD Organization schema on homepage
- JSON-LD Article schema on each blog post (datePublished, author, headline)
- Internal links use descriptive anchor text, never "click here"
- Images: loading="lazy"
- Google Fonts with display=swap
- sitemap.xml scaffolded
- robots.txt scaffolded

Page-specific SEO titles and descriptions are in simpla-copy.md.

---

## Blog

- Index at /blog: post title, date, read time, 1-line excerpt, reverse chronological order
- Individual posts at /blog/[slug]: clean reading layout, H1 = post title, reading time near headline, internal links to service pages
- Each post: unique title/description, og:type=article, article:published_time, JSON-LD Article schema
- Blog content in a content array or markdown files easy to extend later
- Scaffold 3 draft posts (mark with DRAFT comment in code). Content in simpla-copy.md.

---

## Technical Requirements

- Multi-page routing, not anchor scroll
- Responsive, mobile-first
- Visible focus states for keyboard navigation
- prefers-reduced-motion respected for any animations
- No stock photography anywhere
- No unused CSS or JS
- Fast load: lazy images, fonts with display=swap
- Case studies only on /case-studies, not on homepage

---

## Copy Rules for Claude Code

- No em-dashes anywhere. Use commas, periods or colons instead.
- English only.
- Tone: direct, honest, confident. No buzzwords. No "unlock", "synergy", "seamless", "empower".
- Short sentences. No filler paragraphs.
- All CTAs use BOOKING_URL constant.
- Placeholders marked with PLACEHOLDER comment in HTML.
- Draft blog posts marked with DRAFT comment in HTML.
