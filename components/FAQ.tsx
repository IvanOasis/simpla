'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: "What's the difference between Simpla and an email marketing agency?",
    answer:
      "Email marketing agencies produce campaigns: copy, design, sends. We build the infrastructure that decides which campaign runs, for which user, at which moment, based on what they actually did in your product. The email is the output. We work on everything that comes before it, including the messages themselves.",
  },
  {
    question: 'Do I need to already have a lifecycle tool installed?',
    answer:
      "No. We'll help you evaluate which tool fits your stage and set it up from scratch if needed.",
  },
  {
    question: "What if my data is a mess?",
    answer:
      "That's the most common situation we start from. The Lifecycle Audit is designed specifically for that: we find exactly what's broken before recommending what to build.",
  },
  {
    question: 'Do you work with B2B or B2C?',
    answer:
      "Both, as long as you have a digital product with recurring users. We don't work with ecommerce or service businesses.",
  },
  {
    question: "What happens after the implementation is done?",
    answer:
      "You get full documentation and a handoff training session. Your team can run the system independently. Ongoing Optimization is available as a monthly retainer if you want us to keep improving it.",
  },
  {
    question: 'How do you measure results?',
    answer:
      "We configure goal tracking in your lifecycle tool from day one. Before we start, we document your baseline metrics. When we hand over, there's a clear before and after.",
  },
  {
    question: 'Which tools do you work with?',
    answer:
      "We work with Customer.io, Intercom, Braze and OneSignal for lifecycle and messaging, and PostHog, Mixpanel and Metabase for product analytics. We'll recommend what fits your situation.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-smoke">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-display font-medium text-ink text-base leading-snug">
              {item.question}
            </span>
            <span className="shrink-0 text-ash">
              {open === i ? (
                <Minus className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </span>
          </button>
          {open === i && (
            <p className="pb-6 text-ash text-sm leading-relaxed max-w-2xl">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
