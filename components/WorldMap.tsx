import world from '@svg-maps/world'

// Coordinates approximated in 1010×666 Natural Earth viewBox
// Formula: x = (lon + 180) / 360 * 1010, y = (90 - lat) / 180 * 666
const PINS = [
  // Americas
  { x: 341, y: 461 }, // Argentina – Buenos Aires
  { x: 349, y: 459 }, // Uruguay – Montevideo
  { x: 374, y: 421 }, // Brazil – São Paulo
  { x: 295, y: 318 }, // Colombia – Bogotá
  { x: 227, y: 261 }, // Mexico – Mexico City
  { x: 297, y: 183 }, // USA – New York
  { x: 265, y: 167 }, // Canada – Toronto
  // Europe
  { x: 503, y: 143 }, // England – London
  { x: 541, y: 140 }, // Germany – Berlin
  { x: 537, y: 179 }, // Italy – Rome
  { x: 490, y: 184 }, // Spain – Madrid
  // Asia
  { x: 706, y: 262 }, // India – Mumbai
  { x: 893, y: 205 }, // Japan – Tokyo
  { x: 793, y: 330 }, // Singapore
]

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
        {/* Country fills */}
        {world.locations.map((loc: { id: string; path: string }) => (
          <path
            key={loc.id}
            d={loc.path}
            fill="rgba(255,255,255,0.07)"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={0.4}
          />
        ))}

        {/* Client pins */}
        {PINS.map((pin, i) => (
          <g key={i}>
            <circle cx={pin.x} cy={pin.y} r={6} fill="rgba(123,94,255,0.18)" />
            <circle cx={pin.x} cy={pin.y} r={2.5} fill="#7B5EFF" />
          </g>
        ))}
      </svg>
    </div>
  )
}
