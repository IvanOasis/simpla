// DRAFT posts — mark with DRAFT comment. Replace with real content before launch.

export interface PostSection {
  heading?: string
  headingLevel?: 'h2' | 'h3'
  paragraphs?: string[]
  list?: string[]
  internalLink?: { href: string; label: string; text: string }
}

export interface Post {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  excerpt: string
  date: string
  dateISO: string
  readTime: string
  coverImage?: string
  draft?: boolean
  sections: PostSection[]
}

export const posts: Post[] = [
  // DRAFT
  {
    slug: 'cost-of-broken-onboarding',
    title: 'The Real Cost of a Broken Onboarding Flow',
    seoTitle: 'The Real Cost of a Broken Onboarding Flow | Simpla',
    seoDescription:
      'Most SaaS companies know their onboarding isn\'t great. Few understand what it\'s actually costing them in activation and revenue.',
    excerpt: 'Most SaaS companies know their onboarding isn\'t great. Few understand what it\'s actually costing them.',
    date: 'May 15, 2026',
    dateISO: '2026-05-15',
    readTime: '6 min',
    coverImage: '/assets/Blog/blog_automation_gears.png',
    draft: false,
    sections: [
      {
        heading: 'What "broken" actually means',
        paragraphs: [
          'Most onboarding isn\'t dramatically broken. It\'s just disconnected. A welcome email goes out. Maybe a follow-up three days later. Then silence until the user churns or converts. That\'s not a flow, it\'s a handful of time-based emails with no relationship to what the user actually did.',
        ],
      },
      {
        heading: 'The compounding math',
        paragraphs: [
          'If your activation rate is 30% and your trial-to-paid conversion is 20%, you\'re losing 70 users for every 100 who sign up before they ever get a chance to experience your product. A 10-point improvement in activation, from 30% to 40%, is a 33% increase in the pool of users who can potentially convert. At scale, that\'s not a marginal win.',
        ],
      },
      {
        heading: 'What behavioral onboarding looks like instead',
        paragraphs: [
          'The core idea is simple: your product already knows what each user has and hasn\'t done. Your lifecycle system should use that information. A user who completed step 1 but skipped step 2 needs a different message than a user who hasn\'t started at all. Customer.io makes this possible, but only if your events are correctly defined and flowing reliably.',
        ],
      },
      {
        heading: 'Where to start',
        paragraphs: [
          'Before you optimize messaging or redesign your onboarding UI, map your user states. Decide what "activated" means for your product: the specific action or combination of actions that predicts whether a user will stick around. Everything else follows from that.',
        ],
        internalLink: {
          href: '/services#implementation',
          label: 'Lifecycle Implementation',
          text: 'If you\'re not sure where your onboarding is breaking, our Lifecycle Implementation service starts with exactly that mapping.',
        },
      },
    ],
  },
  // DRAFT
  {
    slug: 'how-to-define-user-states',
    title: 'How to Define User States for a SaaS Product',
    seoTitle: 'How to Define User States for a SaaS Product | Simpla',
    seoDescription:
      'User states are the foundation of any lifecycle system. A practical framework for defining them in a SaaS or digital product, with examples.',
    excerpt: 'User states are the foundation of any lifecycle system. Here\'s a practical framework for defining them.',
    date: 'May 22, 2026',
    dateISO: '2026-05-22',
    readTime: '8 min',
    coverImage: '/assets/Blog/blog_strategy_box.png',
    draft: false,
    sections: [
      {
        heading: 'What a user state actually is',
        paragraphs: [
          'A user state is a label for where someone is in their relationship with your product, defined by what they\'ve done, not by how long they\'ve been a customer. Time-based lifecycle is a proxy for behavior. Behavior-based lifecycle is the real thing.',
        ],
      },
      {
        heading: 'The standard states most SaaS products need',
        list: [
          'New: created an account, hasn\'t reached the activation moment yet.',
          'Activated: completed the actions that predict long-term retention for your product.',
          'Engaged: actively using core features on a regular cadence.',
          'At-risk: showing signs of disengagement, reduced login frequency, key feature usage dropping.',
          'Churned: no longer active by any meaningful definition.',
        ],
      },
      {
        heading: 'How to find your activation moment',
        paragraphs: [
          'Look at your retained users, the ones still paying 90 days after signup. What did they do in their first week that churned users didn\'t? That\'s your activation moment. It\'s almost always a specific action or combination of actions, not just "logged in."',
        ],
      },
      {
        heading: 'Common mistakes',
        list: [
          'Defining too many states. Six to eight is the maximum before logic becomes unmanageable.',
          'Using time as the primary signal instead of behavior.',
          'Not defining transition criteria clearly enough for engineering to implement the tracking.',
        ],
      },
      {
        heading: 'What to do once you have them',
        paragraphs: [
          'The states themselves aren\'t the product. They\'re the input. Once defined, each state maps to a set of communications: what to say, through which channel, and what action you\'re trying to drive. That\'s where Customer.io comes in.',
        ],
        internalLink: {
          href: '/services#audit',
          label: 'Lifecycle Audit',
          text: 'Before you build flows around user states, make sure the events flowing into your lifecycle tool are clean. Our Lifecycle Audit surfaces tracking issues that make user states unreliable.',
        },
      },
    ],
  },
  // DRAFT
  {
    slug: 'customerio-posthog-data-mismatch',
    title: 'Why Your Customer.io Data Doesn\'t Match PostHog',
    seoTitle: 'Why Your Customer.io Data Doesn\'t Match PostHog | Simpla',
    seoDescription:
      'The discrepancy between Customer.io and PostHog is almost always fixable. Here are the three most common causes and how to diagnose them.',
    excerpt: 'The discrepancy is almost always fixable. But you need to understand why it\'s happening before you touch anything.',
    date: 'May 29, 2026',
    dateISO: '2026-05-29',
    readTime: '7 min',
    coverImage: '/assets/Blog/blog_seo_globe.png',
    draft: false,
    sections: [
      {
        heading: 'This is more common than you think',
        paragraphs: [
          'If you\'re looking at the same event in PostHog and Customer.io and getting different numbers, you\'re not alone. The discrepancy is almost always one of three things: events firing at different points in the user flow, inconsistent user identification, or data not flowing reliably between systems.',
        ],
      },
      {
        heading: 'The three most common causes',
        paragraphs: [],
      },
      {
        heading: '1. Events fire at different points',
        headingLevel: 'h3',
        paragraphs: [
          'PostHog often captures events on the frontend, when the user clicks something. Customer.io may receive the event from your backend, when the action is confirmed server-side. For most actions there\'s a small time lag. For some, the event never reaches Customer.io if the backend call fails. Result: PostHog shows 1,000 signups, Customer.io shows 940.',
        ],
      },
      {
        heading: '2. User identification is inconsistent',
        headingLevel: 'h3',
        paragraphs: [
          'Anonymous users in PostHog get a generated ID. When they sign up, PostHog links that anonymous ID to the real user ID. If your Customer.io integration doesn\'t receive the identify call at the right moment, you end up with ghost profiles: events attached to nobody.',
        ],
      },
      {
        heading: '3. Events aren\'t being sent at all',
        headingLevel: 'h3',
        paragraphs: [
          'An engineer implemented the Customer.io tracking in one part of the codebase. A new feature shipped that bypasses that code path. Events from the new flow never reach Customer.io. You find out when a segment that should have 5,000 users only has 3,200.',
        ],
      },
      {
        heading: 'How to diagnose it',
        paragraphs: [
          'Start with a specific event you can count definitively. Signups are usually the clearest. Compare the count in PostHog, your database, and Customer.io for the same 30-day period. If they don\'t match, you have a data integrity problem. From there, the investigation is process of elimination.',
        ],
        internalLink: {
          href: '/services#audit',
          label: 'Lifecycle Audit',
          text: 'Our Lifecycle Audit is designed to systematically diagnose exactly this kind of discrepancy and produce a clean event schema your engineering team can implement.',
        },
      },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
