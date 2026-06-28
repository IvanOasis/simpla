import world from '@svg-maps/world'

// Buenos Aires: -34.6°S, -58.4°W → approx (341, 461) in 1010×666 Natural Earth viewBox
const BA_X = 341
const BA_Y = 461

export default function WorldMap() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1220 0%, #141c35 100%)',
        aspectRatio: '1010 / 666',
      }}
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          pointerEvents: 'none',
        }}
      />

      {/* World SVG */}
      <svg
        viewBox={world.viewBox}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        {world.locations.map((loc: { id: string; path: string }) => (
          <path
            key={loc.id}
            d={loc.path}
            fill={loc.id === 'ar' ? 'rgba(123,94,255,0.35)' : 'rgba(255,255,255,0.07)'}
            stroke={loc.id === 'ar' ? 'rgba(123,94,255,0.6)' : 'rgba(255,255,255,0.05)'}
            strokeWidth={loc.id === 'ar' ? 0.8 : 0.4}
          />
        ))}

        {/* Buenos Aires glow */}
        <circle cx={BA_X} cy={BA_Y} r={22} fill="rgba(123,94,255,0.2)" />

        {/* Rings */}
        <circle cx={BA_X} cy={BA_Y} r={12} fill="none" stroke="rgba(123,94,255,0.4)" strokeWidth={0.8} />
        <circle cx={BA_X} cy={BA_Y} r={6}  fill="none" stroke="rgba(123,94,255,0.65)" strokeWidth={0.8} />

        {/* Dot */}
        <circle cx={BA_X} cy={BA_Y} r={3} fill="#7B5EFF" />
      </svg>

      {/* Coordinates */}
      <div style={{ position: 'absolute', top: '1rem', left: '1.25rem' }}>
        <p className="font-mono text-white/30 uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.12em' }}>
          34°36&prime;S · 58°22&prime;W
        </p>
      </div>

      {/* City label */}
      <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem' }}>
        <p className="font-display font-bold text-white leading-none" style={{ fontSize: '1.1rem' }}>
          Buenos Aires
        </p>
        <p className="font-mono text-white/40 uppercase mt-1" style={{ fontSize: '0.6rem', letterSpacing: '0.14em' }}>
          Argentina
        </p>
      </div>

      {/* Global label */}
      <div style={{ position: 'absolute', bottom: '1rem', right: '1.25rem' }}>
        <p className="font-mono text-white/25 uppercase text-right" style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>
          Americas · Europe
        </p>
      </div>
    </div>
  )
}
