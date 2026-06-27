'use client'

import { motion, useReducedMotion } from 'framer-motion'

const NODES = [
  { x: 70, label: 'New' },
  { x: 280, label: 'Activated' },
  { x: 490, label: 'Engaged' },
  { x: 700, label: 'At risk' },
  { x: 880, label: 'Reactivated' },
]

const Y = 70

export default function StateDiagram() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 950 160"
        className="w-full h-auto"
        role="img"
        aria-label="A user lifecycle diagram showing states from New through Activated, Engaged, At risk, to Reactivated, with the Engaged to At risk transition highlighted as the point of intervention."
      >
        {/* base edges */}
        {NODES.slice(0, -1).map((n, i) => {
          const next = NODES[i + 1]
          const isHighlighted = i === 2
          return (
            <line
              key={i}
              x1={n.x + 26}
              y1={Y}
              x2={next.x - 26}
              y2={Y}
              stroke={isHighlighted ? '#F2A93C' : '#2A3148'}
              strokeWidth={isHighlighted ? 2 : 1.5}
              strokeDasharray={isHighlighted ? undefined : '3 5'}
            />
          )
        })}

        {/* traveling pulse on the highlighted edge */}
        {!reduceMotion && (
          <motion.circle
            r={4}
            fill="#F2A93C"
            cy={Y}
            initial={{ cx: NODES[2].x + 26, opacity: 0 }}
            animate={{
              cx: [NODES[2].x + 26, NODES[2].x + 26, NODES[3].x - 26, NODES[3].x - 26],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
          />
        )}

        {/* nodes */}
        {NODES.map((n, i) => {
          const isAtRisk = i === 3
          return (
            <g key={n.label}>
              <circle
                cx={n.x}
                cy={Y}
                r={isAtRisk ? 11 : 9}
                fill={isAtRisk ? '#F2A93C' : '#161B2C'}
                stroke={isAtRisk ? '#F2A93C' : '#8C92A8'}
                strokeWidth={1.5}
              />
              <text
                x={n.x}
                y={Y + 36}
                textAnchor="middle"
                className="font-mono"
                fontSize="12"
                fill={isAtRisk ? '#F2A93C' : '#8C92A8'}
                letterSpacing="0.04em"
              >
                {n.label.toUpperCase()}
              </text>
            </g>
          )
        })}

        {/* annotation for the highlighted transition */}
        <text x={(NODES[2].x + NODES[3].x) / 2} y={Y - 22} textAnchor="middle" className="font-mono" fontSize="11" fill="#F2A93C" letterSpacing="0.04em">
          INTERVENTION POINT
        </text>
      </svg>
    </div>
  )
}
