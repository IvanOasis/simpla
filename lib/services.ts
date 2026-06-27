export interface Service {
  slug: string
  number: string
  name: string
  summary: string
  whoItsFor: string
  problem: string
  included: string[]
  deliverable: string
  timeline: string
}

export const services: Service[] = [
  {
    slug: 'migration',
    number: '01',
    name: 'Customer.io Migration',
    summary: 'Move your data, campaigns and workflows into Customer.io without losing history or breaking live campaigns.',
    whoItsFor: 'Teams switching from Klaviyo, Intercom, Braze or HubSpot who want a clean, complete migration with no gaps.',
    problem: 'Migrations fail when data mapping is rushed and campaigns are recreated by hand without a plan.',
    included: [
      'Data audit and field mapping',
      'Campaign and workflow recreation',
      'Segment migration',
      'Data pipeline QA',
      'Post-launch monitoring',
      'Documentation',
    ],
    deliverable: 'A live Customer.io instance with full data parity and zero campaigns left behind.',
    timeline: '2–4 weeks',
  },
  {
    slug: 'data-health',
    number: '02',
    name: 'Data Health Audit',
    summary: 'A full audit of your event tracking, segments and data pipeline — with a prioritized plan to fix what\'s broken.',
    whoItsFor: 'Teams whose lifecycle data is unreliable, inconsistent, or hard to act on.',
    problem: 'You can\'t build a reliable lifecycle system on top of bad data. The audit finds the problems before you build on top of them.',
    included: [
      'Event audit',
      'Segment logic review',
      'Data pipeline QA',
      'Benchmark against comparable SaaS products',
      'Prioritized fix plan',
    ],
    deliverable: 'A written report ranking what\'s broken, what\'s missing, and what to fix first.',
    timeline: '3–5 days',
  },
  {
    slug: 'lifecycle-architecture',
    number: '03',
    name: 'Lifecycle Architecture',
    summary: 'Full design and build of the lifecycle system — user states, events, workflows, messaging and team training.',
    whoItsFor: 'Teams with no lifecycle system, or one that needs to be rebuilt from scratch.',
    problem: 'A welcome email is not a lifecycle system. Building the real thing requires state definitions, event logic and workflows tied to actual user behavior.',
    included: [
      'User state definition',
      'Event mapping',
      'Segment creation',
      'Onboarding, activation, retention and reactivation workflows',
      'Message copywriting per user state',
      'Goal and metric configuration',
      'Documentation',
      'Team training',
    ],
    deliverable: 'A running system connected to real user behavior, plus the knowledge to operate it independently.',
    timeline: '4–6 weeks',
  },
  {
    slug: 'growth-ops',
    number: '04',
    name: 'Growth Ops',
    summary: 'A monthly retainer that keeps your lifecycle system improving as your product and users change.',
    whoItsFor: 'Teams who\'ve completed an implementation and want it actively maintained and improved over time.',
    problem: 'A lifecycle system that isn\'t maintained goes stale. Usage patterns shift, new features create new states, and what worked at launch stops working.',
    included: [
      'Monthly metrics review',
      'A/B testing of underperforming workflows',
      'New workflows as the product evolves',
      'Quarterly strategy review',
      'Monthly written report',
    ],
    deliverable: 'A lifecycle system that keeps improving instead of going stale.',
    timeline: 'Ongoing, monthly',
  },
]
