---
name: project-simpla
description: Simpla agency website — Next.js 14, lifecycle marketing positioning, ink/brand-blue design system, full page structure
metadata:
  type: project
---

Multi-page Next.js 14 (App Router, TypeScript, Tailwind CSS) site for Simpla, a lifecycle marketing agency.

**Why:** Rebuilt 2026-06 to reflect lifecycle systems positioning (not just Customer.io focused).

**How to apply:** Always read simpla-1-instructions.md, simpla-2-pages.md, simpla-3-copy.md before making content or design changes.

## Design System
- Colors: brand #5390FF (blue), purple #9E70CE, ink #0F1523, snow #F7F8FC, smoke #E4E7F0, ash #8990AB, slate #4A5270
- Fonts: Space Grotesk (display/headings), Inter (body), IBM Plex Mono (mono/eyebrows), Fraunces (CTA section only), Source Serif 4 (prose)
- `.btn-primary`: dark ink bg, white text (NOT blue)
- `.eyebrow`: font-mono, uppercase, text-brand, tiny
- `.container-page`: max-w-6xl mx-auto px-6 lg:px-8
- Hero bg: `linear-gradient(180deg, #ECF2FF 0%, #F5F0FF 35%, #FFFFFF 68%)`
- CTA bg: reverse gradient (white → purple → blue)
- Sections: card grids on snow bg, clean borders with smoke

## Site Structure (all pages live)
- `/` — Home: Hero, Trusted By (placeholder), The Problem, Services Overview (3 cards), Why Simpla (4 points), Work Teaser, Testimonials (placeholder), Tools, Final CTA
- `/services` — 3 services with deep copy + FAQ + CTA
- `/how-we-work` — 3 stages (Diagnosis, System Design, Build & Handoff) + Tools + CTA
- `/case-studies` — 2 case studies (Solana crypto wallet, B2B SaaS HubSpot/Intercom) + CTA
- `/about` — What Simpla is, Who we are, How we operate, Customer.io partnership + CTA
- `/blog` — index (reverse chron), `/blog/[slug]` — individual posts
- `/contact` — booking placeholder + FAQ
- `/approach` — redirect to /about (legacy)

## Services (lib/services.ts)
3 services replacing old 4:
- `audit` (01) — Lifecycle Audit
- `implementation` (02) — Lifecycle Implementation
- `optimization` (03) — Ongoing Optimization (previous clients only)

## Blog Posts (lib/posts.ts)
3 DRAFT posts:
- `cost-of-broken-onboarding` — 2026-05-15
- `how-to-define-user-states` — 2026-05-22
- `customerio-posthog-data-mismatch` — 2026-05-29

## Components
- Logo.tsx — real SVG isologo + PNG wordmark via next/image
- Nav.tsx — Services, How We Work, Case Studies, Blog, About, Contact + CTA button
- Footer.tsx — 3 columns (Services, Company, Partners) + bottom bar with Customer.io Certified Partner
- FAQ.tsx — client component, 7 Q&As, accordion, used on /services and /contact

## Key Files
- lib/constants.ts — `BOOKING_URL = '#book-audit'`
- lib/services.ts — Service interface + 3 services
- lib/posts.ts — Post interface + 3 posts (new: seoTitle, seoDescription, dateISO, internalLink section type)
- app/globals.css — design tokens, animations, btn classes
- tailwind.config.ts — color/font tokens

## Copy Rules
- No em-dashes — use commas, periods or colons
- English only
- No buzzwords: unlock, synergy, seamless, empower
- All CTAs use BOOKING_URL constant
- Placeholders marked with PLACEHOLDER comment
- Draft blog posts marked with DRAFT comment
