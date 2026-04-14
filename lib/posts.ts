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
  category: string
  categoryColor: string
  date: string
  readTime: string
  sections: PostSection[]
}

export const posts: Post[] = [
  {
    slug: 'geo-seo-missing-channel-2025',
    title: 'GEO: Why your SEO strategy is missing the most important channel of 2025',
    excerpt:
      "ChatGPT, Perplexity, and Google AI Overviews are now answering your customers' questions. If your business isn't showing up there, someone else is.",
    category: 'Web & Visibility',
    categoryColor: '#7346a1',
    date: 'Apr 2025',
    readTime: '6 min',
    sections: [
      {
        paragraphs: [
          "Something changed in how people search for things — and most businesses haven't noticed yet. A growing percentage of your potential customers no longer scroll through a list of blue links to find an answer. They type a question into ChatGPT, Perplexity, or Google's AI Overviews and read the response. If your business isn't in that response, you don't exist for them.",
          "This is the core premise of GEO — Generative Engine Optimization — and it's becoming one of the most important levers in digital marketing.",
        ],
      },
      {
        heading: 'What is GEO?',
        paragraphs: [
          'GEO is the practice of optimizing your content so that AI-powered search engines cite your business when users ask relevant questions. Traditional SEO gets you ranked in the ten blue links. GEO gets you cited in the AI-generated answer that often appears before those links — or replaces the search results entirely.',
          'The two disciplines overlap but are not the same. A page can rank #1 on Google and never get cited by an AI engine. A page that ranks #5 might be cited repeatedly because it answers a specific question more directly.',
        ],
      },
      {
        heading: 'Why it matters right now',
        paragraphs: [
          "The numbers are hard to ignore. Google AI Overviews now appear in a significant percentage of commercial searches. ChatGPT has over 100 million weekly active users asking research-grade questions. Perplexity is growing at a rate that suggests it won't be a niche tool for much longer.",
          "Your customers are using these tools to discover products, compare vendors, understand pricing, and make buying decisions. If your brand doesn't show up in those answers, you're invisible to a portion of the market that is only going to grow.",
        ],
      },
      {
        heading: 'How AI engines decide what to cite',
        paragraphs: [
          "AI engines don't just pull from high-ranking pages. They look for signals that a source is authoritative, accurate, and clearly written. In practice, this means:",
        ],
        list: [
          'Topical authority — do you own a subject, and do other credible sources reference you?',
          'Structured, direct content that answers specific questions without burying the answer',
          'Fresh, consistently updated information',
          'Your brand being mentioned as a named entity across credible sources',
          'Technical clarity — schema markup, clean structure, fast load times',
        ],
      },
      {
        paragraphs: [
          "A page that ranks #4 in Google might get cited by ChatGPT more often than the #1 result if it's written more directly. That's a fundamentally different optimization challenge than traditional SEO.",
        ],
      },
      {
        heading: 'What GEO looks like in practice',
        paragraphs: ['GEO is not a checklist. It is a content philosophy. Here is how we approach it:'],
        numbered: [
          'Question mapping — We identify every question your ideal customer might ask an AI, including the long-tail, specific ones that reflect real buying intent.',
          'Answer-first writing — Each piece of content leads with a direct, clear answer before expanding into depth. AI engines favor this structure.',
          'Entity building — We build your brand\'s presence across credible sources so AI models recognize you as a real, trustworthy entity worth citing.',
          'Technical optimization — Schema markup and clean information architecture that makes it easy for AI models to parse and extract your content.',
        ],
      },
      {
        heading: 'The window is now',
        paragraphs: [
          "GEO is still early. Most businesses haven't started. That's the opportunity — the same window that existed with SEO in 2008 before everyone figured it out. The brands that invest now will own these answers for years. The ones that wait will find themselves paying to compete for placements that early movers have already locked in.",
          "If your current SEO strategy doesn't include a plan for AI search, it's not a complete strategy. It's half of one.",
        ],
      },
    ],
  },
  {
    slug: 'agency-trap-packages-killing-roi',
    title: 'The agency trap: why packages are killing your marketing ROI',
    excerpt:
      "Most agencies sell you a bundle and run the same playbook they ran last month. Here's what to ask for instead.",
    category: 'Strategy',
    categoryColor: '#5491ff',
    date: 'Mar 2025',
    readTime: '5 min',
    sections: [
      {
        paragraphs: [
          "Walk into almost any digital agency and you'll be offered a package. The Bronze Plan. The Growth Bundle. The Performance Package. They come with fixed deliverables, fixed hours, and a fixed monthly fee. The problem isn't the price. The problem is the premise — that every business needs the same things.",
          "A startup acquiring its first thousand customers doesn't need the same marketing stack as a mid-sized company defending market share. A local services business doesn't need a content calendar built for a DTC brand. Packages don't make that distinction. They can't.",
        ],
      },
      {
        heading: 'What actually happens inside an agency on retainer',
        paragraphs: [
          "Here's what most clients don't see: inside a typical agency, your account is one of 20 to 30 active retainers. Account managers are managing volume. Execution teams are following templates. The strategy call in month one becomes the strategy call in month six — the same slides with updated numbers.",
          "This isn't a character flaw. It's the economics of the model. High volume, standardized delivery, maximum margin. The package is not designed around your results. It's designed around their operations.",
        ],
      },
      {
        heading: 'The metrics problem',
        paragraphs: [
          "Agencies that sell packages also tend to measure success in ways that are disconnected from your actual business outcomes. Impressions. Reach. Engagement rate. These are easy to report, easy to optimize, and easy to present in a slide — but they don't tell you whether your marketing is moving revenue.",
        ],
        quote:
          "If an agency has never asked you what your actual business goal is — not your 'marketing goal,' your business goal — that's a warning sign.",
      },
      {
        heading: 'What a real partnership looks like',
        paragraphs: [
          'Working with a marketing partner who actually understands your business looks different. The differences are visible from the first conversation:',
        ],
        list: [
          'The first meeting is about your business model, your customers, and your bottlenecks — not your current ad spend',
          'The strategy is built around your specific constraint, not a general channel mix',
          'The success metrics are tied to revenue or pipeline, not reach and impressions',
          'Reporting includes what is not working, and what is being done about it',
          'The strategy evolves as the business evolves — not on an annual review cycle',
        ],
      },
      {
        paragraphs: [
          "This kind of partnership takes more time upfront. It is less efficient at scale. That's exactly why most agencies don't do it — and why it tends to produce better results for clients who find it.",
        ],
      },
      {
        heading: 'Questions to ask before you sign',
        paragraphs: [
          'Before engaging any marketing agency, these four questions will tell you quickly whether you are buying a package or a partnership:',
        ],
        numbered: [
          "What metrics will we use to define success, and how do they connect to revenue?",
          "What is your process for understanding a new client's business before any work begins?",
          "Can I see examples of strategies you have built for businesses in a situation similar to mine?",
          "If something is not working in month three, what does that conversation look like?",
        ],
      },
      {
        paragraphs: [
          "A package-focused agency will struggle to answer those questions well. A real partner will have clear answers ready because they have already thought about them.",
        ],
      },
    ],
  },
  {
    slug: 'marketing-while-you-sleep-automation-smbs',
    title: 'Marketing that works while you sleep: a guide to automation for SMBs',
    excerpt:
      "You don't need a big team to have a 24/7 marketing operation. You need the right systems. Here's where to start.",
    category: 'Automation',
    categoryColor: '#7346a1',
    date: 'Feb 2025',
    readTime: '7 min',
    sections: [
      {
        paragraphs: [
          "Most small businesses run their marketing manually. Someone writes the posts, someone sends the emails, someone follows up with leads. It works — until it doesn't. When that person gets busy, the marketing slows. When they leave, the knowledge goes with them.",
          "The result is a marketing operation that's entirely dependent on human bandwidth. That's fragile, and it scales poorly. The fix isn't hiring more people. It's building systems.",
        ],
      },
      {
        heading: "What 'automation' actually means for a small business",
        paragraphs: [
          "Automation doesn't mean replacing your team with robots. For a growing business, it means removing the steps that don't require human judgment — so the humans can focus on the steps that do.",
          "A lead fills out a form and automatically receives a personalized follow-up sequence. A prospect visits your pricing page three times and gets flagged in your CRM for a sales call. A client's project closes and 30 days later they receive a check-in email. None of these require AI. They just require setting up the right workflow once and letting it run.",
        ],
      },
      {
        heading: 'The three automations every SMB should build first',
        paragraphs: [
          "In our work with small and growing businesses, these are consistently the highest-ROI starting points:",
        ],
        numbered: [
          'Lead capture and follow-up sequence — A form-to-email sequence that nurtures new leads in the first 72 hours, when intent is highest. Most businesses have the form. Almost none have the sequence. That gap is leaving money on the table.',
          'Abandoned inquiry recovery — If someone starts a purchase or inquiry and doesn\'t complete it, a well-timed follow-up email recovers a meaningful percentage of those leads. One sequence, set up once, running indefinitely.',
          'Customer reactivation — A simple automated email to past customers at the 60 or 90-day mark. It feels personal but runs on its own. Customer lifetime value increases without adding headcount.',
        ],
      },
      {
        heading: 'Where AI fits into the picture',
        paragraphs: [
          "The current wave of AI tools adds a layer of personalization and speed on top of basic automation. Instead of sending every lead the same email sequence, you can now tailor the content to what you know about them. Instead of manually reformatting a blog post into ten social media formats, AI does it in seconds.",
          "The businesses winning with AI aren't replacing their marketing. They're making it compound faster. Each piece of content does more. Each lead interaction is more relevant. Each system gets smarter over time.",
        ],
        quote:
          "You don't need a sophisticated AI stack to start. You need one workflow that currently requires a person, automated so that person can focus on something harder.",
      },
      {
        heading: 'How to start without getting overwhelmed',
        paragraphs: [
          "Don't try to automate everything at once. The businesses that fail at automation try to build a full system before proving any single piece works.",
        ],
        list: [
          'Pick one workflow that currently requires manual effort',
          'Map it out on paper before touching any tool',
          'Build it in whatever system you already use — most CRMs have basic automation built in',
          'Measure the result for 30 days',
          'Then move to the next workflow',
        ],
      },
      {
        paragraphs: [
          "The goal isn't a fully automated marketing machine on day one. The goal is one less thing that requires someone's attention every week — and one more thing that runs while you sleep.",
        ],
      },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
