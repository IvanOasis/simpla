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
    slug: 'why-meta-ads-stopped-working',
    title: 'Why your Meta Ads stopped working (and how to fix it)',
    excerpt:
      'The ads were working. Then, gradually or suddenly, they stopped. Most people blame the platform. The real problem is almost always in the account.',
    category: 'Meta Ads',
    categoryColor: '#5491ff',
    date: 'May 2025',
    readTime: '6 min',
    sections: [
      {
        paragraphs: [
          'There is a version of this story that almost every business owner knows. The ads were working. Leads were coming in, sales were happening, the cost per result was something you could defend. Then, gradually or suddenly, it stopped. The same budget, the same targeting, the same creative — but the results are gone.',
          'Most people blame the platform. Meta changed the algorithm. iOS 14 broke tracking. Competition is up. These things are true but they are rarely the real problem. The real problem is almost always in the account.',
        ],
      },
      {
        heading: 'Ad fatigue is real and most accounts ignore it',
        paragraphs: [
          'An ad creative has a lifespan. Once a significant portion of your target audience has seen it three or four times, performance drops. Click-through rates fall, costs rise, and the algorithm starts spending your budget less efficiently. The solution is not to run the same creative indefinitely and hope. It is to have a system that refreshes creative before fatigue sets in.',
          'Most accounts do not have that system. They have two or three ads that were set up months ago and have never been touched.',
        ],
      },
      {
        heading: 'Your audience has been over-targeted',
        paragraphs: [
          "Facebook's targeting pools are not infinite. If you have been running ads to the same custom audiences and lookalikes for months, you have probably reached most of the people in them. Diminishing returns are not a platform problem — they are a math problem.",
          'The fix is not to widen your targeting blindly. It is to build a proper full-funnel structure: new cold audiences at the top, warm retargeting in the middle, and conversion campaigns at the bottom. Each layer does a different job.',
        ],
      },
      {
        heading: 'The four things we check first',
        list: [
          'Frequency: if your frequency is above 3 on a cold audience campaign, your creative needs refreshing',
          'CPM trends: rising CPMs usually mean your relevance score is dropping',
          'Landing page conversion rate: if the ad is getting clicks but not conversions, the problem is not the ad',
          'Attribution window: if you changed your attribution settings, your reported results may have changed without your actual results changing',
        ],
      },
      {
        heading: 'What good account health looks like',
        paragraphs: [
          'A healthy Meta Ads account has clear campaign objectives that match each stage of the funnel, fresh creative rotating in at least every three to four weeks, consistent pixel health with proper event tracking, and landing pages that match the specific promise of each ad.',
          'None of this is complicated. It is just rarely done consistently.',
        ],
      },
      {
        heading: 'Where to start',
        paragraphs: [
          'Pull your frequency report for the last 30 days on your top-spending campaigns. If any cold audience campaign is above 3, that is your first problem to fix. New creative, same audience. Run both in parallel and let the data decide.',
          'If frequency looks fine, check your landing page conversion rate. A Meta ad that gets a 2% CTR but a 0.5% landing page conversion rate has a landing page problem, not an ad problem. These are different issues with different solutions — and confusing them is one of the most expensive mistakes in paid advertising.',
        ],
      },
    ],
  },
  {
    slug: 'creative-is-70-percent-of-performance',
    title: 'The creative is 70% of your ad performance. Here is how we think about it.',
    excerpt:
      'Most advertisers spend most of their time on the other 30%. Targeting, bidding, campaign structure. These things matter — but the performance gap almost always lives in the creative.',
    category: 'Ad Creative',
    categoryColor: '#7346a1',
    date: 'Apr 2025',
    readTime: '5 min',
    sections: [
      {
        paragraphs: [
          'There is a number that gets cited often in paid advertising: the creative accounts for somewhere between 60 and 70 percent of campaign performance. The rest is targeting, bidding, and account structure.',
          'Most advertisers spend most of their time on the other 30 percent. They obsess over audience targeting, bid strategies, and campaign architecture. These things matter, but they are not where most of the performance gap lives. The performance gap lives in the creative.',
        ],
      },
      {
        heading: "What 'creative' actually means",
        paragraphs: [
          'In the context of paid ads, creative means everything the user sees and hears before they click. The image or video. The headline. The first line of body copy. The call to action. Each of these elements is doing a job, and when one of them fails, the whole ad fails.',
          'A common mistake is treating the creative as the last step — something you put together quickly after the targeting and budget decisions are made. In a well-run account, it is the first thing you think about.',
        ],
      },
      {
        heading: 'The three jobs a good ad creative does',
        numbered: [
          'It stops the scroll. The first frame of a video or the visual of a static ad has roughly one to two seconds to earn attention. If it does not stop someone mid-scroll, nothing else matters. This is not about being loud or flashy. It is about relevance — showing something that the right person immediately recognizes as being for them.',
          'It delivers the message. Once you have attention, you have a few seconds to communicate your offer clearly. The best performing ads tend to be direct: here is what we do, here is who it is for, here is why it is worth your time.',
          'It earns the click. The call to action has to match the offer. If the ad promises a free consultation, the CTA should say "Book your free call" — not "Learn More." Alignment between the ad promise and the CTA is one of the most consistently underestimated factors in conversion rate.',
        ],
      },
      {
        heading: 'How to test creative properly',
        paragraphs: [
          'Testing one variable at a time is the standard advice, and it is correct. If you change the visual, the headline, and the CTA in the same test, you do not know what moved the needle.',
          'A practical structure for most businesses: run three to four creative variants against the same audience with the same budget split, let them run for seven to ten days or until you have meaningful data, then cut the bottom performers and iterate on the winner. The goal is not to find one great ad and run it forever. The goal is to build a testing rhythm that consistently finds new winners before the current ones burn out.',
        ],
      },
      {
        heading: 'What most businesses get wrong',
        paragraphs: [
          'They run one or two creatives for months. They make changes based on gut feel rather than data. They confuse high reach with high performance. And when results drop, they assume the platform is broken rather than looking at their creative.',
        ],
        quote:
          'The businesses that consistently win at paid advertising treat creative as an ongoing operation, not a one-time task. It is not about producing more content. It is about having a system.',
      },
    ],
  },
  {
    slug: 'how-to-cut-cost-per-lead',
    title: 'How to cut your cost per lead without cutting your budget',
    excerpt:
      "When CPL goes up, the instinct is to reduce spend. It feels logical. It is also usually the wrong move — because cutting budget doesn't fix a broken campaign.",
    category: 'Strategy',
    categoryColor: '#5491ff',
    date: 'Mar 2025',
    readTime: '7 min',
    sections: [
      {
        paragraphs: [
          'When cost per lead goes up, the instinct for most businesses is to reduce the budget. Spend less, lose less. It feels logical. It is also usually the wrong move.',
          'Cutting budget in a struggling campaign does not fix the campaign. It just means you are spending less on something that is not working. The goal is to find out what is not working and fix it — and in most cases, the issue is one of four things.',
        ],
      },
      {
        heading: 'Where CPL actually comes from',
        paragraphs: [
          'Cost per lead is the product of two numbers: your cost per click and your landing page conversion rate. CPL equals CPC divided by CVR. This is worth writing down, because it tells you exactly where to look when CPL is too high.',
          'If your CPC is high, the problem is in the ad — the creative, the targeting, or both. If your CPC is acceptable but your conversion rate is low, the problem is on the landing page. These are different problems with different fixes, and treating them as the same thing wastes time and money.',
        ],
      },
      {
        heading: 'The four levers',
        list: [
          'Creative relevance: ads that closely match what your audience is thinking about get lower CPCs through better relevance scores. A generic ad costs more to deliver than a specific one.',
          'Audience precision: broad targeting can lower CPMs but increase CPL if the audience does not convert. Narrowing to people who have shown actual intent usually improves CPL even as CPM rises.',
          'Landing page conversion rate: a 1% improvement in CVR cuts your CPL significantly if your CPC stays constant. This is often the highest-leverage fix available and the most ignored.',
          'Offer clarity: a vague offer gets fewer conversions than a specific one. "Get a free consultation" outperforms "Contact us." Specificity reduces friction at every step.',
        ],
      },
      {
        heading: 'A practical example',
        paragraphs: [
          'A business is running Meta Ads with a CPL of $45. Their target is $20. They have two options: cut budget, or diagnose.',
          'On diagnosis: their CPC is $2.50, which is reasonable for their industry. Their landing page conversion rate is 5.5%. Plugging in the formula: $2.50 divided by 0.055 equals $45.45. To hit $20, they need either a lower CPC or a higher CVR — or some combination of both.',
          'They ran two landing page tests over three weeks. The first changed the headline to directly match the language in the ad. The second added a single testimonial above the form. CVR went to 9.8%. New CPL: $25.50. Still above target, but moving in the right direction without touching the budget.',
        ],
      },
      {
        heading: 'Where to start this week',
        paragraphs: [
          'Calculate your actual CPL breakdown. Take your last 30 days of spend, divide by leads, then check your landing page conversion rate in analytics. If your CVR is below 8%, start there. If your CPC is the outlier, start with the creative.',
        ],
        quote:
          'Most accounts have one obvious lever that is being ignored. Finding it is usually a 20-minute exercise. Fixing it is what takes the work.',
      },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
