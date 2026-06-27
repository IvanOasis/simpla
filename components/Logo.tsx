import Image from 'next/image'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Isologo — real SVG from brand assets */}
      <Image
        src="/assets/simpla-favicon.svg"
        alt=""
        aria-hidden="true"
        width={28}
        height={28}
        className="shrink-0"
        priority
      />
      {/* Wordmark PNG */}
      <Image
        src="/assets/Simpla-Logo-Web.png"
        alt="Simpla"
        width={88}
        height={22}
        className="h-[22px] w-auto"
        priority
      />
    </div>
  )
}
