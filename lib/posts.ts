// Placeholder/draft posts — replace with real content before launch.
// Structure is intentionally simple (array of objects) so new posts are easy to add.

export interface PostSection {
  heading?: string
  paragraphs?: string[]
  list?: string[]
  quote?: string
  numbered?: string[]
}

export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  draft?: boolean
  sections: PostSection[]
}

export const posts: Post[] = [
  {
    slug: 'real-cost-of-a-broken-onboarding-flow',
    title: 'The real cost of a broken onboarding flow',
    excerpt:
      'A welcome email is not an onboarding flow. Here is what actually leaks when there is no system guiding new users to their first real value.',
    date: 'Jun 2026',
    readTime: '6 min',
    draft: true,
    sections: [
      {
        paragraphs: [
          'Most SaaS products have an onboarding email. Very few have an onboarding system. The difference matters more than it sounds — a single email assumes every user needs the same nudge at the same time, regardless of what they did or didn’t do after signing up.',
          'A real onboarding flow reacts. It knows whether a user connected their data, invited a teammate, or sat idle for three days, and it responds differently to each of those states. Without that, you are sending the same message to someone who is one step from activation and someone who never opened the product after signup.',
        ],
      },
      {
        heading: 'Where the leak actually happens',
        paragraphs: [
          'Most teams assume churn is the expensive problem. It is not — at least not first. The expensive problem is the gap between signup and activation, because that is where you lose people before you ever get the chance to prove value.',
        ],
        list: [
          'Users who sign up and never complete the first meaningful action in the product',
          'Users who complete it but never come back a second time',
          'Users who get stuck on a step nobody is watching, with no automated nudge to unstick them',
        ],
      },
      {
        heading: 'What "fixing" onboarding actually requires',
        paragraphs: [
          'It is not more emails. It is defining what activation actually means for your product — the specific action that correlates with long-term retention — and building a system that tracks every user against that definition in real time.',
          'Once that exists, the messaging writes itself: nudge people who stalled, reinforce people who succeeded, and stay quiet for people who are progressing on their own.',
        ],
      },
    ],
  },
  {
    slug: 'what-using-customerio-actually-means',
    title: 'What "using Customer.io" actually means',
    excerpt:
      'Having the tool installed and having a lifecycle system are not the same thing. Most teams paying for Customer.io are doing the former.',
    date: 'May 2026',
    readTime: '5 min',
    draft: true,
    sections: [
      {
        paragraphs: [
          'We see this pattern constantly: a team has Customer.io (or a comparable tool) connected, a few campaigns running, and a monthly bill — but no one could draw the actual logic of what triggers what. That is not a lifecycle system. That is a tool with some wiring.',
        ],
      },
      {
        heading: 'The gap between installed and operating',
        paragraphs: [
          'A tool being installed means events are flowing somewhere. A lifecycle system being operational means those events map to defined user states, those states trigger specific workflows, and someone is watching whether those workflows actually move people forward.',
          'Most teams have the first without the second. They are paying for infrastructure they are using at a fraction of its capacity — which is a worse outcome than not having the tool at all, because it creates the impression that lifecycle marketing "doesn’t work here" when really it was never built.',
        ],
      },
      {
        heading: 'A short test',
        paragraphs: [
          'Ask whoever owns your lifecycle tool to name your five most important user states and what automatically happens when someone enters each one. If the answer takes longer than thirty seconds, you have a wiring problem, not a tool problem.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-define-user-states-for-a-b2b-saas',
    title: 'How to define user states for a B2B SaaS',
    excerpt:
      'Before you build a single workflow, you need to agree on what "new," "activated," and "at risk" actually mean for your product. Most teams skip this.',
    date: 'Apr 2026',
    readTime: '7 min',
    draft: true,
    sections: [
      {
        paragraphs: [
          'Every lifecycle system rests on one decision made early and rarely revisited: what are the states a user can be in, and what specifically moves them from one to the next? Get this wrong and every workflow built on top of it inherits the mistake.',
        ],
      },
      {
        heading: 'Start from the data you already have',
        paragraphs: [
          'Don’t start from a template. Pull the behavior of your retained accounts versus your churned accounts over their first 90 days and look for the action that separates them. That action — not a generic "logged in" event — is your real activation signal.',
        ],
      },
      {
        heading: 'A reference structure, not a rule',
        numbered: [
          'New — signed up, has not yet reached the defined activation action.',
          'Activated — completed the action correlated with retention, has not yet built a habit around it.',
          'Engaged — using the product on a recurring cadence that matches its intended use case.',
          'At risk — usage dropped below a threshold that historically precedes churn.',
          'Churned or reactivated — the account lapsed, or came back after a dedicated win-back sequence.',
        ],
      },
      {
        heading: 'Where teams go wrong',
        paragraphs: [
          'The most common mistake is defining states around product features instead of user behavior — "used Feature X" instead of "reached the outcome Feature X exists to deliver." States should describe a relationship to value, not a checklist of clicks.',
        ],
        quote:
          'If you can’t explain why a user moved from one state to another in one sentence, the state definition is wrong, not the user.',
      },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
