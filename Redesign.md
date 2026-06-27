Visual Reference — Critical

Study scalero.io thoroughly before writing any code. This is not a loose reference — it is the primary visual and structural inspiration. Replicate:


Clean white background, generous whitespace between sections
Large confident hero headline, simple subheadline beneath
Service cards: minimal borders, no heavy shadows, clear hierarchy
Partner badges: clean horizontal logo row, grayscale default, color on hover
Case study cards: quote, client name/role, metric pills
Footer: multi-column organized layout
Nav: logo left, links center, CTA button right
Overall feel: premium, specialist, confident


Do NOT use: gradient backgrounds, blob animations, dark mode as primary, heavy shadows, generic SaaS illustration style, overuse of accent color.

Brand Colors

Extract exact hex colors from the Simpla logo in this project. Build the entire palette from it. Do not invent colors.

SEO — Apply to Every Page


Unique <title> (60 chars max) and <meta name="description"> (150 chars max) per page
One <h1> per page, logical <h2>/<h3> hierarchy
Semantic HTML: <header>, <nav>, <main>, <section>, <article>, <footer>
Open Graph and Twitter Card meta tags on every page
Canonical URL tag per page
Descriptive alt text on every image and logo
JSON-LD Organization schema on homepage
JSON-LD Article schema on each blog post (datePublished, author, headline)
Internal links use descriptive anchor text — never "click here"
Images: loading="lazy"
Google Fonts with &display=swap
sitemap.xml and robots.txt scaffolded


Technical


Multi-page routing — not single-page scroll
Single constant at top: const BOOKING_URL = "#book-audit" — all CTAs use this
Blog content in array or markdown structure, easy to extend
Responsive, mobile-first
Visible :focus states
prefers-reduced-motion respected
No stock photography


Site Structure

Nav (all pages)

Logo left · Services · About · Blog · Contact · CTA: "Book a free audit"

Page 1: Home (/)

SEO title: Simpla | Customer.io Lifecycle Specialists for SaaS
SEO desc: Simpla designs, implements and optimizes Customer.io lifecycle systems for SaaS and digital products. Migration, data health, onboarding, retention.

Sections in order:


Hero — H1 + subheadline + two CTAs + Customer.io Certified Partner badge
Trusted by — 5 gray placeholder logo blocks labeled "Client logo" in code comments
Services overview — 4 cards with name, 1-line desc, "Learn more →" link to /services anchor. See simpla-content.md for copy.
Partners — Real logos, grayscale default, color on hover, links open new tab:

Customer.io → https://customer.io/agency-partners/ | logo: https://cdn.brandfetch.io/idDOyxSYhH/w/400/h/400/theme/dark/icon.jpeg
PostHog → https://posthog.com | logo: https://posthog.com/brand/posthog-logo.svg
Metabase → https://metabase.com | logo: https://www.metabase.com/images/logo.svg
HubSpot → https://hubspot.com | logo: https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png



Case studies — 2 cards. See simpla-content.md. Mark with <!-- PLACEHOLDER --> comment.
Testimonials — 2 quote cards. See simpla-content.md. Mark with <!-- PLACEHOLDER --> comment.
Final CTA — "Ready to fix your lifecycle?" + booking button


Footer: Services col · Company col · Partners col · © 2026 Simpla

Page 2: Services (/services)

SEO title: Lifecycle Marketing Services | Simpla
SEO desc: Customer.io migration, data health audits, lifecycle architecture and growth operations for SaaS and digital product companies.

4 service sections with anchor IDs: #migration, #data-health, #lifecycle-architecture, #growth-ops
Full copy in simpla-content.md. Each section: H2 name, who it's for, problem, included (bullets), deliverable, timeline.
End with CTA section.

Page 3: About (/about)

SEO title: About Simpla | Customer.io Lifecycle Specialists
SEO desc: Simpla is a specialist lifecycle agency focused on Customer.io for SaaS and digital products. 10+ years of hands-on lifecycle experience.

Full copy in simpla-content.md. Sections: what we are, who we are, how we operate, Customer.io partnership with badge.

Page 4: Blog index (/blog) + post template (/blog/[slug])

SEO title index: Lifecycle Marketing Blog | Simpla
SEO desc index: Practical insights on lifecycle marketing, Customer.io implementation, user states, onboarding and retention for SaaS and digital products.

Blog index: post title, date, read time, 1-line excerpt, reverse chronological.
Post template: clean reading layout, H1 = post title, reading time near headline, author block at bottom, internal links to service pages.
Each post SEO: unique title/desc, og:type=article, article:published_time, article:author, JSON-LD Article schema.

3 draft posts in simpla-content.md. Mark with <!-- DRAFT --> comment.

Page 5: Contact (/contact)

SEO title: Book a Free Lifecycle Audit | Simpla
SEO desc: Book a free 30-minute audit with Simpla. We'll review your Customer.io setup and tell you what's broken and what to fix first.

H1 + body copy + Calendly placeholder (BOOKING_URL) + fallback email: hello@simpla.agency
Full copy in simpla-content.md.