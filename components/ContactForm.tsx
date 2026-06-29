'use client'

import Script from 'next/script'

export default function ContactForm() {
  return (
    <>
      <Script
        src="https://js.hsforms.net/forms/embed/51672874.js"
        strategy="afterInteractive"
      />
      <div
        className="hs-form-frame"
        data-region="na1"
        data-form-id="b53f167d-882c-460b-8411-0f49192bbf2f"
        data-portal-id="51672874"
      />
    </>
  )
}
