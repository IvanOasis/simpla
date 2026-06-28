import world from '@svg-maps/world'

// City coordinates calibrated to the @svg-maps/world Natural Earth projection
// Formula: x = 2.918 * lon + 475.3, y = -3.094 * lat + 463.1
const PINS = [
  { x: 305, y: 570 }, // Argentina  – Buenos Aires
  { x: 311, y: 571 }, // Uruguay    – Montevideo
  { x: 339, y: 536 }, // Brazil     – São Paulo
  { x: 259, y: 449 }, // Colombia   – Bogotá
  { x: 186, y: 403 }, // Mexico     – Mexico City
  { x: 259, y: 337 }, // USA        – New York
  { x: 244, y: 328 }, // Canada     – Toronto
  { x: 475, y: 304 }, // England    – London
  { x: 514, y: 301 }, // Germany    – Berlin
  { x: 512, y: 333 }, // Italy      – Rome
  { x: 465, y: 338 }, // Spain      – Madrid
  { x: 688, y: 404 }, // India      – Mumbai
  { x: 883, y: 353 }, // Japan      – Tokyo
  { x: 778, y: 459 }, // Singapore
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
            <circle cx={pin.x} cy={pin.y} r={6} fill="rgba(123,94,255,0.2)" />
            <circle cx={pin.x} cy={pin.y} r={2.5} fill="#7B5EFF" />
          </g>
        ))}
      </svg>
    </div>
  )
}
