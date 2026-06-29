'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'c2b06cf3-334f-400d-ad29-4dc268d3347e',
        name: (form.elements.namedItem('name') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        subject: 'New message from simpla.agency',
      }),
    })

    const json = await res.json()
    setStatus(json.success ? 'success' : 'error')
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-smoke bg-snow p-10 text-center h-full flex flex-col items-center justify-center gap-3">
        <p className="font-display font-bold text-ink text-xl tracking-tight">Message received.</p>
        <p className="text-ash text-sm max-w-xs leading-relaxed">
          We&rsquo;ll get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-smoke bg-snow p-8 flex flex-col gap-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-mono uppercase tracking-[0.14em] text-ash">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-lg border border-smoke bg-white px-4 py-3 text-sm text-ink placeholder:text-ash/60 focus:outline-none focus:border-brand transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-mono uppercase tracking-[0.14em] text-ash">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="rounded-lg border border-smoke bg-white px-4 py-3 text-sm text-ink placeholder:text-ash/60 focus:outline-none focus:border-brand transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-mono uppercase tracking-[0.14em] text-ash">
          What&rsquo;s going on
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your lifecycle setup, what's broken, or what you're trying to fix."
          className="rounded-lg border border-smoke bg-white px-4 py-3 text-sm text-ink placeholder:text-ash/60 focus:outline-none focus:border-brand transition-colors resize-none leading-relaxed"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500">Something went wrong. Try emailing us at hello@simpla.agency.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : <>Send message <ArrowRight className="w-4 h-4" /></>}
      </button>

      <p className="text-xs text-ash text-center">
        Prefer a call?{' '}
        <a
          href="https://calendly.com/hello-simpla/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink font-medium hover:text-brand transition-colors"
        >
          Book a discovery call
        </a>
      </p>
    </form>
  )
}
