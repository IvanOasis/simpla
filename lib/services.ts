export interface ServiceSection {
  heading: string
  body: string
}

export interface Service {
  slug: string
  number: string
  name: string
  eyebrow: string
  summary: string
  situation: string
  sections: ServiceSection[]
  toolsParagraph?: string
  deliverable: string
  availabilityNote?: string
}

export const services: Service[] = [
  {
    slug: 'audit',
    number: '01',
    name: 'Lifecycle Audit',
    eyebrow: 'For SaaS and digital products with an existing setup',
    summary:
      'Find out where you are losing users and why. We review your setup from the event layer up and give you a prioritized action plan.',
    situation:
      'You have a lifecycle tool. You have some workflows running. But you don\'t know if they\'re actually working, your data feels off, or your activation and churn metrics aren\'t moving. Before you build more, you need to know what\'s broken.',
    sections: [
      {
        heading: 'Event layer',
        body: 'Are the right events firing? Are they named consistently? Do they carry the properties you need to segment and trigger correctly? This is where most lifecycle problems start and where most audits don\'t go deep enough.',
      },
      {
        heading: 'Segments',
        body: 'Are your segments built on real behavioral data or demographic assumptions? A segment built on a broken event sends your messages to the wrong people.',
      },
      {
        heading: 'Workflows',
        body: 'For each active workflow: delivery rate, open rate, click rate, goal conversion. Where are users entering, where are they dropping, is the message right and is the timing right.',
      },
      {
        heading: 'Deliverability',
        body: 'Domain reputation, SPF, DKIM and DMARC configuration, blacklist status, Google Postmaster Tools data if available. The best message doesn\'t convert if it lands in spam.',
      },
    ],
    deliverable:
      'A written report with exactly what\'s broken, what\'s missing, and what to fix first, ranked by business impact. Usable immediately whether or not you continue with us.',
  },
  {
    slug: 'implementation',
    number: '02',
    name: 'Lifecycle Implementation',
    eyebrow: 'For SaaS and digital products building from scratch or rebuilding',
    summary:
      'We design your event architecture, define your user states, build the behavioral workflows, and write every message inside them. You get a working system, not a template.',
    situation:
      'You have no lifecycle system, or the one you have was built on guesswork and time-based emails that don\'t reflect what users actually do in your product. You know users are dropping off. You don\'t have a system that responds to that in real time.',
    sections: [
      {
        heading: 'Event architecture',
        body: 'Before we touch any tool, we design your event schema. What to track, how to name each event, what properties it needs, and how it flows to your lifecycle platform. Your engineering team gets a clear spec they can implement without back-and-forth. Everything that follows is built on clean, structured data.',
      },
      {
        heading: 'User states',
        body: 'We define the behavioral stages your users move through: from new signup to activated, engaged, at-risk and churned. Each state has clear, measurable criteria based on what users actually do in your product, not on how many days have passed since they signed up.',
      },
      {
        heading: 'Behavioral workflows',
        body: 'We build the automated flows for every stage of the lifecycle. Onboarding sequences that adapt based on which features a user has or hasn\'t touched. Retention flows triggered by real churn signals, not arbitrary time intervals. Reactivation campaigns for users who have gone silent.',
      },
      {
        heading: 'Messages that convert',
        body: 'We write every message that goes inside the workflows. Not template copy with placeholders. Real messages crafted for the specific user state, the specific moment, and the specific action we need the user to take. This is the part most agencies leave to you. We don\'t.',
      },
      {
        heading: 'Goals and measurement',
        body: 'We configure goal tracking from day one so you know whether the system is working. Before we start, we capture your baseline metrics. When we hand over, you have a clear before and after.',
      },
      {
        heading: 'Documentation and handoff',
        body: 'A full written record of every workflow, every segment, every goal and how to modify them. A walkthrough recording. A training session with whoever on your team will own the system.',
      },
    ],
    toolsParagraph:
      'We work with Customer.io, Intercom, Braze, OneSignal and others for lifecycle and messaging. PostHog, Mixpanel, Metabase or whatever analytics tool you use. We\'ll recommend what fits your stage and budget.',
    deliverable:
      'A complete lifecycle system connected to real user behavior, with every message written and every workflow live.',
  },
  {
    slug: 'optimization',
    number: '03',
    name: 'Marketing Ops',
    eyebrow: 'Monthly retainer',
    summary:
      'Monthly retainer for clients post-implementation. We analyze your data, run experiments, write new messages as your product evolves, and send a written report every month.',
    situation:
      'Your lifecycle system is live. But your product keeps evolving. New features ship. User behavior shifts. What worked three months ago starts to drift. Without someone watching the data and running experiments, the system slowly stops being relevant.',
    sections: [
      {
        heading: 'Data analysis',
        body: 'We go into PostHog, Metabase or your analytics tool and analyze what the data is showing. Cohort behavior, retention curves, funnel drop-offs, message performance by segment.',
      },
      {
        heading: 'Experiments',
        body: 'We run A/B tests on message copy, timing, segmentation logic and workflow structure. Every experiment is tied to a metric that matters.',
      },
      {
        heading: 'New workflows',
        body: 'When your product ships a new feature or a new behavioral pattern surfaces in the data, we design and build the workflow that responds to it.',
      },
      {
        heading: 'Monthly report',
        body: 'A written document every month covering what we analyzed, what we tested, what we changed, and what we\'re doing next. No slides, no presentations. Just what moved the needle and what we\'re focused on.',
      },
    ],
    deliverable: 'A lifecycle system that keeps improving instead of collecting dust.',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
