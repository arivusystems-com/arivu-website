'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useId } from 'react'

const SIZE = 580
const CX = SIZE / 2
const CY = SIZE / 2
const HUB_R = 108
const HUB_LOGO_W = 52
const HUB_LOGO_H = 68
const HUB_LOGO_Y = -53
const HUB_TEXT1_Y = 35
const HUB_TEXT2_Y = 51
const ORBIT_INNER = 144
const ORBIT_OUTER = 220
const TILE_W = 88
const TILE_H = 98
const ORBIT_DURATION = 150
const ORBIT_DIRECTION: 1 | -1 = 1

const heroApps = [
  {
    name: 'Sales',
    angle: -90,
    iconBg: '#ede9fe',
    iconStroke: '#7c3aed',
    dot: '#8b5cf6',
    ring: '#ddd6fe',
    icon: 'M4 14h4V8H4v6zm6 0h4V6h-4v8zm6 0h4V4h-4v10z',
  },
  {
    name: 'Projects',
    angle: -30,
    iconBg: '#dbeafe',
    iconStroke: '#2563eb',
    dot: '#3b82f6',
    ring: '#bfdbfe',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    name: 'Audits',
    angle: 30,
    iconBg: '#ccfbf1',
    iconStroke: '#0d9488',
    dot: '#14b8a6',
    ring: '#99f6e4',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    name: 'Field Sales',
    angle: 90,
    iconBg: '#fce7f3',
    iconStroke: '#db2777',
    dot: '#ec4899',
    ring: '#fbcfe8',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    name: 'Helpdesk',
    angle: 150,
    iconBg: '#ffedd5',
    iconStroke: '#ea580c',
    dot: '#f97316',
    ring: '#fed7aa',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    name: 'Inventory',
    angle: 210,
    iconBg: '#dcfce7',
    iconStroke: '#16a34a',
    dot: '#22c55e',
    ring: '#bbf7d0',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  },
]

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    x: radius * Math.cos(rad),
    y: radius * Math.sin(rad),
  }
}

function OrbitSpin({
  direction,
  duration,
  active,
}: {
  direction: 1 | -1
  duration: number
  active: boolean
}) {
  if (!active) return null

  return (
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 0 0"
      to={`${360 * direction} 0 0`}
      dur={`${duration}s`}
      repeatCount="indefinite"
    />
  )
}

function DottedOrbit({
  radius,
  stroke = '#a5b4fc',
  opacity = 1,
}: {
  radius: number
  stroke?: string
  opacity?: number
}) {
  return (
    <circle
      cx={0}
      cy={0}
      r={radius}
      stroke={stroke}
      strokeWidth="1.5"
      strokeDasharray="2 6"
      strokeLinecap="round"
      fill="none"
      opacity={opacity}
    />
  )
}

function RadialSpoke({ angle, color }: { angle: number; color: string }) {
  const inner = polar(angle, ORBIT_INNER)
  const outer = polar(angle, ORBIT_OUTER)

  return (
    <line
      x1={inner.x}
      y1={inner.y}
      x2={outer.x}
      y2={outer.y}
      stroke={color}
      strokeOpacity="0.14"
      strokeWidth="1"
      strokeDasharray="3 4"
      strokeLinecap="round"
    />
  )
}

function InnerOrbitNode({
  angle,
  dot,
  ring,
  index,
  active,
}: {
  angle: number
  dot: string
  ring: string
  index: number
  active: boolean
}) {
  const { x, y } = polar(angle, ORBIT_INNER)

  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="6" fill="none" stroke={ring} strokeWidth="1.5" />
      <circle r="3.9" fill="#fafbff" />
      <circle r="2.4" fill={dot}>
        {active && (
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="3s"
            repeatCount="indefinite"
            begin={`${index * 0.35}s`}
          />
        )}
      </circle>
    </g>
  )
}

function AppTileContent({
  name,
  iconBg,
  iconStroke,
  icon,
}: {
  name: string
  iconBg: string
  iconStroke: string
  icon: string
}) {
  const iconBgSize = 36
  const iconSize = 20
  const iconBgY = -29

  return (
    <>
      <rect
        x={-TILE_W / 2}
        y={-TILE_H / 2}
        width={TILE_W}
        height={TILE_H}
        rx="14"
        fill="white"
        filter="url(#tile-shadow)"
      />
      <rect
        x={-iconBgSize / 2}
        y={iconBgY}
        width={iconBgSize}
        height={iconBgSize}
        rx="10"
        fill={iconBg}
      />
      <svg
        x={-iconSize / 2}
        y={iconBgY + (iconBgSize - iconSize) / 2}
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d={icon}
          fill="none"
          stroke={iconStroke}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <text
        x={0}
        y={28}
        textAnchor="middle"
        fill="#5c6370"
        fontSize="11"
        fontWeight="700"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        {name}
      </text>
    </>
  )
}

function AppSpoke({
  app,
  index,
  active,
}: {
  app: (typeof heroApps)[number]
  index: number
  active: boolean
}) {
  const outer = polar(app.angle, ORBIT_OUTER)

  return (
    <g>
      <RadialSpoke angle={app.angle} color={app.dot} />
      <InnerOrbitNode
        angle={app.angle}
        dot={app.dot}
        ring={app.ring}
        index={index}
        active={active}
      />
      <g transform={`translate(${outer.x} ${outer.y})`}>
        <g>
          <OrbitSpin
            direction={(-ORBIT_DIRECTION) as 1 | -1}
            duration={ORBIT_DURATION}
            active={active}
          />
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <AppTileContent
              name={app.name}
              iconBg={app.iconBg}
              iconStroke={app.iconStroke}
              icon={app.icon}
            />
          </motion.g>
        </g>
      </g>
    </g>
  )
}

export function OperatingSystemIllustration() {
  const uid = useId().replace(/:/g, '')
  const reduceMotion = useReducedMotion()
  const motionEnabled = !reduceMotion

  return (
    <div className="relative mx-auto w-full max-w-[600px] px-1 sm:px-0">
      <motion.svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        fill="none"
        className="h-auto w-full overflow-visible"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <defs>
          <filter id="tile-shadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow
              dx="0"
              dy="1"
              stdDeviation="2.5"
              floodColor="#1a1f36"
              floodOpacity="0.025"
            />
            <feDropShadow
              dx="0"
              dy="1"
              stdDeviation="0.75"
              floodColor="#1a1f36"
              floodOpacity="0.015"
            />
          </filter>
          <filter id="hub-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="#1a1f36"
              floodOpacity="0.03"
            />
            <feDropShadow
              dx="0"
              dy="1"
              stdDeviation="1"
              floodColor="#1a1f36"
              floodOpacity="0.015"
            />
          </filter>
          <radialGradient id={`${uid}-hero-glow`} cx="50%" cy="50%" r="50%">
            <stop stopColor="#4f46e5" stopOpacity="0.07" />
            <stop offset="1" stopColor="#4f46e5" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={CX} cy={CY} r="252" fill={`url(#${uid}-hero-glow)`} />

        {/* Single rotating system — dots, spokes, and cards stay aligned */}
        <g transform={`translate(${CX} ${CY})`}>
          <g>
            <OrbitSpin
              direction={ORBIT_DIRECTION}
              duration={ORBIT_DURATION}
              active={motionEnabled}
            />
            <DottedOrbit radius={ORBIT_INNER} stroke="#c7d2fe" opacity={0.95} />
            <DottedOrbit radius={ORBIT_OUTER} stroke="#818cf8" opacity={0.7} />
            {heroApps.map((app, i) => (
              <AppSpoke key={app.name} app={app} index={i} active={motionEnabled} />
            ))}
          </g>
        </g>

        {/* Static hub on top — content centered in circle */}
        <g transform={`translate(${CX} ${CY})`}>
          <motion.g
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <circle r={HUB_R} fill="white" filter="url(#hub-shadow)" />
            <image
              href="/logo/Logo_dark.svg"
              x={-HUB_LOGO_W / 2}
              y={HUB_LOGO_Y}
              width={HUB_LOGO_W}
              height={HUB_LOGO_H}
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x={0}
              y={HUB_TEXT1_Y}
              textAnchor="middle"
              fill="#1a1f36"
              fontSize="11"
              fontWeight="600"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              One Platform.
            </text>
            <text
              x={0}
              y={HUB_TEXT2_Y}
              textAnchor="middle"
              fill="#5c6370"
              fontSize="10"
              fontWeight="500"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Every Process.
            </text>
          </motion.g>
        </g>
      </motion.svg>
    </div>
  )
}
