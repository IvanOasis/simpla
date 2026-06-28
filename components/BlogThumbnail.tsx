const VARIANTS = [
  {
    bg: 'linear-gradient(135deg, #7B5EFF 0%, #9E70CE 100%)',
    blob1: 'rgba(255,255,255,0.07)',
    blob2: 'rgba(255,255,255,0.04)',
  },
  {
    bg: 'linear-gradient(135deg, #1c2540 0%, #7B5EFF 100%)',
    blob1: 'rgba(123,94,255,0.25)',
    blob2: 'rgba(255,255,255,0.04)',
  },
  {
    bg: 'linear-gradient(135deg, #5390FF 0%, #7B5EFF 100%)',
    blob1: 'rgba(255,255,255,0.08)',
    blob2: 'rgba(255,255,255,0.05)',
  },
  {
    bg: 'linear-gradient(135deg, #9E70CE 0%, #1c2540 100%)',
    blob1: 'rgba(123,94,255,0.2)',
    blob2: 'rgba(255,255,255,0.05)',
  },
]

function slugToVariant(slug: string): number {
  const sum = slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return sum % VARIANTS.length
}

interface BlogThumbnailProps {
  slug: string
  title: string
  size?: 'card' | 'hero'
}

export default function BlogThumbnail({ slug, title, size = 'card' }: BlogThumbnailProps) {
  const v = VARIANTS[slugToVariant(slug)]
  const isHero = size === 'hero'

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: v.bg }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-15%',
          width: '65%',
          paddingBottom: '65%',
          borderRadius: '50%',
          background: v.blob1,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-25%',
          left: '-10%',
          width: '45%',
          paddingBottom: '45%',
          borderRadius: '50%',
          background: v.blob2,
        }}
      />

      {/* Subtle grid lines */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ padding: isHero ? '2rem' : '1.25rem' }}
      >
        <span
          className="font-mono uppercase tracking-[0.18em] text-white/50"
          style={{ fontSize: isHero ? '0.7rem' : '0.6rem' }}
        >
          Simpla Blog
        </span>

        <p
          className="font-display font-bold text-white leading-snug"
          style={{ fontSize: isHero ? 'clamp(1.25rem, 3vw, 2rem)' : 'clamp(0.85rem, 2vw, 1rem)' }}
        >
          {title}
        </p>
      </div>
    </div>
  )
}
