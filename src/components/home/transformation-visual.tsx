'use client'

import { clsx } from 'clsx'
import {
  motion,
  type MotionValue,
  useTransform,
} from 'framer-motion'
import { useId } from 'react'
import { transformationMeta } from './data'

const INK = '#1a1f36'
const INK_SECONDARY = '#5c6370'
const INK_TERTIARY = '#8b919a'
const BORDER = '#e8eaef'
const BORDER_STRONG = '#d5d9e2'
const SURFACE_MUTED = '#f8f9fb'
const BRAND = '#4f46e5'
const BRAND_LIGHT = '#eef2ff'
const BRAND_MUTED = '#e0e7ff'

const CHAOS_TOOLS = [
  { label: 'Excel', subtitle: 'Spreadsheets', logo: '/chaos-logos/microsoft-excel.svg', x: 72, y: 58, rot: -2.5, badge: null },
  { label: 'Slack', subtitle: 'Channels', logo: '/logo-timeline/slack.svg', x: 56, y: 142, rot: 3, badge: null },
  { label: 'Forms', subtitle: 'Manual Input', logo: '/chaos-logos/google-forms.svg', x: 60, y: 252, rot: -2, badge: null },
  { label: 'WhatsApp', subtitle: 'Messages', logo: '/chaos-logos/whatsapp.svg', x: 208, y: 52, rot: 2, badge: 23 },
  { label: 'Sheets', subtitle: 'Data', logo: '/chaos-logos/google-sheets.svg', x: 202, y: 162, rot: -1.5, badge: null },
  { label: 'Shared Files', subtitle: 'Scattered', logo: '/chaos-logos/shared-files.svg', x: 196, y: 252, rot: 1.5, badge: null },
  { label: 'Gmail', subtitle: 'Email', logo: '/logo-timeline/gmail.svg', x: 352, y: 54, rot: -2, badge: 12 },
  { label: 'CRM', subtitle: 'Customer Data', logo: '/chaos-logos/crm.svg', x: 362, y: 142, rot: 2.5, badge: null },
  { label: 'Google Drive', subtitle: 'Documents', logo: '/logo-timeline/google-drive.svg', x: 332, y: 222, rot: -2, badge: null },
  { label: 'Other Tools', subtitle: 'Too Many', logo: '/chaos-logos/other-tools.svg', x: 352, y: 278, rot: 1, badge: null },
] as const

const CHAOS_LINES = [
  [0, 4], [0, 5], [0, 9], [1, 2], [1, 4], [1, 5], [2, 5], [2, 6],
  [3, 4], [3, 6], [3, 7], [4, 5], [4, 8], [5, 6], [5, 9], [6, 7],
  [6, 8], [7, 8], [7, 9], [8, 9], [0, 3], [1, 3], [2, 4], [3, 8],
  [4, 7], [5, 8], [0, 6], [2, 9], [1, 7], [3, 9],
] as const

const LINE_MARKERS = [
  { x: 132, y: 102, type: 'x' as const },
  { x: 252, y: 92, type: 'alert' as const },
  { x: 172, y: 188, type: 'ban' as const },
  { x: 292, y: 132, type: 'x' as const },
  { x: 122, y: 198, type: 'alert' as const },
  { x: 318, y: 202, type: 'ban' as const },
  { x: 232, y: 228, type: 'x' as const },
  { x: 282, y: 78, type: 'alert' as const },
] as const

const ANNOTATIONS = [
  { text: 'Where is the user data?', x: 68, y: 20, rot: -4 },
  { text: 'Outdated information', x: 58, y: 212, rot: -3 },
  { text: "Who's working on this?", x: 278, y: 82, rot: 3 },
  { text: 'Duplicate work', x: 138, y: 302, rot: -3 },
] as const

const PLATFORM_NODES = [
  { name: 'Sales', angle: -90, color: BRAND, bg: BRAND_LIGHT, icon: 'M4 14h4V8H4v6zm6 0h4V6h-4v8zm6 0h4V4h-4v10z' },
  { name: 'Projects', angle: -45, color: '#4338ca', bg: BRAND_MUTED, icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { name: 'Helpdesk', angle: 0, color: '#ea580c', bg: '#ffedd5', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
  { name: 'Analytics', angle: 45, color: '#0284c7', bg: '#e0f2fe', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { name: 'Marketing', angle: 90, color: '#7c3aed', bg: '#ede9fe', icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z' },
  { name: 'Field Ops', angle: 135, color: '#ca8a04', bg: '#fef9c3', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  { name: 'Audits', angle: 180, color: '#059669', bg: '#ecfdf5', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
  { name: 'Inventory', angle: 225, color: BRAND, bg: BRAND_LIGHT, icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
] as const

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: radius * Math.cos(rad), y: radius * Math.sin(rad) }
}

function SvgIcon({
  d,
  stroke,
  x,
  y,
  size = 16,
}: {
  d: string
  stroke: string
  x: number
  y: number
  size?: number
}) {
  return (
    <svg x={x - size / 2} y={y - size / 2} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} fill="none" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PanelBadge({ variant, children }: { variant: 'before' | 'after'; children: React.ReactNode }) {
  const isBefore = variant === 'before'

  return (
    <span
      className={clsx(
        'inline-flex w-fit items-center rounded-full border px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.08em] uppercase',
        isBefore
          ? 'border-border bg-surface-muted text-ink-secondary'
          : 'border-brand/20 bg-brand-light text-brand',
      )}
    >
      {children}
    </span>
  )
}

function OutcomeGrid({
  variant,
  items,
}: {
  variant: 'before' | 'after'
  items: readonly string[]
}) {
  const isBefore = variant === 'before'

  return (
    <ul className="grid w-full max-w-lg grid-cols-2 gap-x-4 gap-y-3 text-left sm:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span
            className={clsx(
              'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
              isBefore ? 'bg-surface-muted text-ink-tertiary' : 'bg-brand-light text-brand',
            )}
            aria-hidden="true"
          >
            {isBefore ? (
              <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden="true">
                <path
                  d="M2 6h8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-3">
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
          <span className="text-[13px] leading-snug text-ink-secondary">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function LineMarker({ x, y, type }: { x: number; y: number; type: 'x' | 'alert' | 'ban' }) {
  if (type === 'x') {
    return (
      <g transform={`translate(${x} ${y})`}>
        <circle r="7" fill={SURFACE_MUTED} stroke={BORDER} strokeWidth="0.75" />
        <path
          d="M-2.5 -2.5 L2.5 2.5 M2.5 -2.5 L-2.5 2.5"
          stroke={INK_TERTIARY}
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </g>
    )
  }
  if (type === 'alert') {
    return (
      <g transform={`translate(${x} ${y})`}>
        <circle r="7" fill={SURFACE_MUTED} stroke={BORDER} strokeWidth="0.75" />
        <text y="3.5" textAnchor="middle" fill={INK_TERTIARY} fontSize="9" fontWeight="600">
          !
        </text>
      </g>
    )
  }
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="7" fill={SURFACE_MUTED} stroke={BORDER} strokeWidth="0.75" />
      <circle r="4.5" fill="none" stroke={INK_TERTIARY} strokeWidth="1.1" />
      <path d="M-3 0 L3 0" stroke={INK_TERTIARY} strokeWidth="1.1" strokeLinecap="round" />
    </g>
  )
}

function chaosCardWidth(label: string, subtitle: string) {
  const longest = Math.max(label.length, subtitle.length)
  if (longest > 12) return 128
  if (longest > 10) return 124
  if (longest > 8) return 112
  return 100
}

function ChaosTool({
  tool,
  spread,
}: {
  tool: (typeof CHAOS_TOOLS)[number]
  spread: MotionValue<number>
}) {
  const cx = useTransform(spread, (t) => tool.x + Math.sin(tool.rot) * t * 10)
  const cy = useTransform(spread, (t) => tool.y + Math.cos(tool.rot) * t * 8)
  const opacity = useTransform(spread, [0, 0.65, 1], [1, 0.94, 0.82])
  const cardW = chaosCardWidth(tool.label, tool.subtitle)
  const halfW = cardW / 2
  const textX = -halfW + 38
  const clipId = `chaos-card-${tool.label.replace(/\s+/g, '-')}`

  return (
    <motion.g style={{ x: cx, y: cy, opacity }}>
      <g transform={`rotate(${tool.rot})`}>
        <defs>
          <clipPath id={clipId}>
            <rect x={-halfW + 1} y="-21" width={cardW - 2} height="42" rx="9" />
          </clipPath>
        </defs>
        <rect
          x={-halfW}
          y="-22"
          width={cardW}
          height="44"
          rx="10"
          fill="white"
          stroke={BORDER}
          strokeWidth="1"
          filter="url(#chaos-card-shadow)"
        />
        <g clipPath={`url(#${clipId})`}>
          <image
            href={tool.logo}
            x={-halfW + 8}
            y="-14"
            width="28"
            height="28"
            preserveAspectRatio="xMidYMid meet"
          />
          <text
            x={textX}
            y="-3"
            fill={INK}
            fontSize="10"
            fontWeight="700"
            style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
          >
            {tool.label}
          </text>
          <text
            x={textX}
            y="10"
            fill={INK_SECONDARY}
            fontSize="8"
            fontWeight="500"
            style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
          >
            {tool.subtitle}
          </text>
        </g>
        {tool.badge !== null && (
          <g transform={`translate(${halfW + 3} -21)`}>
            <circle r="8" fill={INK_SECONDARY} stroke="white" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="700">
              {tool.badge}
            </text>
          </g>
        )}
      </g>
    </motion.g>
  )
}

function ChaosAnnotation({
  note,
  opacity,
}: {
  note: (typeof ANNOTATIONS)[number]
  opacity: MotionValue<number>
}) {
  return (
    <motion.g style={{ opacity }}>
      <text
        x={note.x}
        y={note.y}
        fill={INK_TERTIARY}
        fontSize="10"
        fontWeight="500"
        transform={`rotate(${note.rot} ${note.x} ${note.y})`}
        style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
      >
        {note.text}
      </text>
    </motion.g>
  )
}

function ChaosIllustration({ progress }: { progress: MotionValue<number> }) {
  const spread = useTransform(progress, [0.08, 0.52], [0, 1])
  const lineOpacity = useTransform(spread, [0, 0.5, 1], [0.55, 0.48, 0.4])
  const noteOpacity = useTransform(spread, [0, 0.5], [1, 0.8])

  return (
    <svg viewBox="0 0 440 310" className="h-full max-h-[310px] w-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="chaos-card-shadow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#64748B" floodOpacity="0.1" />
        </filter>
      </defs>

      {CHAOS_LINES.map(([a, b], i) => {
        const from = CHAOS_TOOLS[a]
        const to = CHAOS_TOOLS[b]
        const cpx = (from.x + to.x) / 2 + (i % 2 === 0 ? 32 : -26)
        const cpy = (from.y + to.y) / 2 + (i % 3 === 0 ? -22 : 24)
        return (
          <motion.path
            key={i}
            d={`M ${from.x} ${from.y} Q ${cpx} ${cpy} ${to.x} ${to.y}`}
            fill="none"
            stroke={BORDER_STRONG}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeDasharray="5 4"
            style={{ opacity: lineOpacity }}
          />
        )
      })}

      {LINE_MARKERS.map((marker) => (
        <motion.g key={`${marker.x}-${marker.y}`} style={{ opacity: lineOpacity }}>
          <LineMarker {...marker} />
        </motion.g>
      ))}

      {CHAOS_TOOLS.map((tool) => (
        <ChaosTool key={tool.label} tool={tool} spread={spread} />
      ))}

      {ANNOTATIONS.map((note) => (
        <ChaosAnnotation key={note.text} note={note} opacity={noteOpacity} />
      ))}
    </svg>
  )
}

function PlatformNode({
  node,
  index,
  cx,
  cy,
  orbit,
  assemble,
  filterId,
}: {
  node: (typeof PLATFORM_NODES)[number]
  index: number
  cx: number
  cy: number
  orbit: number
  assemble: MotionValue<number>
  filterId: string
}) {
  const target = polar(node.angle, orbit)
  const start = polar(node.angle + 20, orbit + 36)
  const nodeT = useTransform(assemble, [0, 0.08 + index * 0.055, 1], [0, 0, 1])
  const x = useTransform(nodeT, (t) => lerp(start.x + cx, target.x + cx, t))
  const y = useTransform(nodeT, (t) => lerp(start.y + cy, target.y + cy, t))
  const opacity = useTransform(nodeT, [0, 0.15, 1], [0, 0.5, 1])
  const scale = useTransform(nodeT, [0, 0.4, 1], [0.5, 0.88, 1])
  const arcOpacity = useTransform(nodeT, [0.3, 0.85], [0, 0.45])
  const arcD = useTransform([x, y], ([xv, yv]) => {
    const xVal = xv as number
    const yVal = yv as number
    const mx = (cx + xVal) / 2
    const my = (cy + yVal) / 2 - 12
    return `M ${cx} ${cy} Q ${mx} ${my} ${xVal} ${yVal}`
  })

  return (
    <g>
      <motion.path d={arcD} fill="none" stroke={node.color} strokeWidth="1.5" style={{ opacity: arcOpacity }} />
      <motion.g style={{ x, y, opacity, scale }}>
        <rect x="-30" y="-30" width="60" height="60" rx="14" fill="white" filter={`url(#${filterId})`} />
        <rect x="-17" y="-17" width="34" height="34" rx="9" fill={node.bg} />
        <SvgIcon d={node.icon} stroke={node.color} x={0} y={0} size={17} />
        <text
          x="0"
          y="24"
          textAnchor="middle"
          fill={INK_SECONDARY}
          fontSize="9.5"
          fontWeight="700"
          style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
        >
          {node.name}
        </text>
      </motion.g>
    </g>
  )
}

function PlatformIllustration({ progress }: { progress: MotionValue<number> }) {
  const uid = useId().replace(/:/g, '')
  const CX = 210
  const CY = 148
  const ORBIT = 108
  const HUB_R = 56
  const filterId = `${uid}-hub`

  const assemble = useTransform(progress, [0.18, 0.52], [0, 1])
  const hubScale = useTransform(assemble, [0, 0.22, 1], [0.7, 0.93, 1])
  const hubOpacity = useTransform(assemble, [0, 0.15], [0, 1])
  const ringOpacity = useTransform(assemble, [0.08, 0.38], [0, 0.6])

  return (
    <svg viewBox="0 0 420 300" className="h-full max-h-[280px] w-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id={filterId}>
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
        </filter>
        <radialGradient id={`${uid}-pg`} cx="50%" cy="45%" r="55%">
          <stop stopColor={BRAND} stopOpacity="0.08" />
          <stop offset="1" stopColor={BRAND} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="420" height="300" fill={`url(#${uid}-pg)`} />

      <motion.circle
        cx={CX}
        cy={CY}
        r={ORBIT + 28}
        fill="none"
        stroke={BRAND_MUTED}
        strokeWidth="1"
        strokeDasharray="5 8"
        style={{ opacity: ringOpacity }}
      />

      {PLATFORM_NODES.map((node, i) => (
        <PlatformNode
          key={node.name}
          node={node}
          index={i}
          cx={CX}
          cy={CY}
          orbit={ORBIT}
          assemble={assemble}
          filterId={filterId}
        />
      ))}

      <motion.g style={{ x: CX, y: CY, scale: hubScale, opacity: hubOpacity }}>
        <circle r={HUB_R} fill="white" filter={`url(#${filterId})`} stroke={BRAND_MUTED} strokeWidth="1" />
        <image href="/logo/Logo_dark.svg" x="-22" y="-29" width="44" height="58" preserveAspectRatio="xMidYMid meet" />
      </motion.g>
    </svg>
  )
}

function CenterDivider({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.12, 0.4], [0.6, 1])

  return (
    <div className="pointer-events-none absolute inset-0 z-30 hidden lg:block">
      <motion.div
        style={{ opacity }}
        className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-border"
        aria-hidden="true"
      />
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          style={{ opacity }}
          className="flex size-11 items-center justify-center rounded-full border border-border bg-white shadow-soft"
        >
          <img src="/logo/Logo_dark.svg" alt="" className="h-5 w-auto" />
        </motion.div>
      </div>
    </div>
  )
}

function BeforePanel({ progress }: { progress: MotionValue<number> }) {
  const { before } = transformationMeta
  const panelX = useTransform(progress, [0.08, 0.42], [0, -8])

  return (
    <motion.div
      style={{ x: panelX }}
      className="relative flex flex-col items-center border-b border-border bg-surface-muted p-5 text-center sm:p-6 lg:rounded-bl-3xl lg:rounded-tl-3xl lg:border-b-0"
    >
      <PanelBadge variant="before">{before.badge}</PanelBadge>
      <h3 className="mt-4 max-w-md text-[1.1rem] font-bold tracking-[-0.02em] text-ink sm:text-[1.25rem]">
        {before.heading}
      </h3>
      <p className="mt-2 max-w-md text-[13px] leading-relaxed text-ink-secondary sm:text-[14px]">
        {before.subtext}
      </p>

      <div className="relative my-5 flex w-full min-h-[250px] flex-1 items-center justify-center sm:min-h-[290px] lg:my-6">
        <ChaosIllustration progress={progress} />
      </div>

      <OutcomeGrid variant="before" items={before.outcomes} />
    </motion.div>
  )
}

function AfterPanel({ progress }: { progress: MotionValue<number> }) {
  const { after } = transformationMeta
  const panelX = useTransform(progress, [0.22, 0.55], [8, 0])

  return (
    <motion.div
      style={{ x: panelX }}
      className="relative flex flex-col items-center bg-white p-5 text-center sm:p-6 lg:rounded-br-3xl lg:rounded-tr-3xl"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-brand-light/25"
        aria-hidden="true"
      />
      <div className="relative flex w-full flex-col items-center">
        <PanelBadge variant="after">{after.badge}</PanelBadge>
        <h3 className="mt-4 max-w-md text-[1.1rem] font-bold tracking-[-0.02em] text-ink sm:text-[1.25rem]">
          {after.heading}
        </h3>
        <p className="mt-2 max-w-md text-[13px] leading-relaxed text-ink-secondary sm:text-[14px]">
          {after.subtext}
        </p>

        <div className="relative my-5 flex w-full min-h-[220px] flex-1 items-center justify-center sm:min-h-[260px] lg:my-6">
          <PlatformIllustration progress={progress} />
        </div>

        <OutcomeGrid variant="after" items={after.outcomes} />
      </div>
    </motion.div>
  )
}

export function TransformationStage({
  progress,
  reduced,
}: {
  progress: MotionValue<number>
  reduced: boolean
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-elevated sm:rounded-3xl">
      <div className="grid bg-white lg:grid-cols-2 lg:gap-0">
        <BeforePanel progress={progress} />
        <AfterPanel progress={progress} />
      </div>
      <CenterDivider progress={progress} />

      <div className="flex justify-center border-t border-border bg-white py-3 lg:hidden">
        <div className="flex size-11 items-center justify-center rounded-full border border-border bg-white shadow-soft">
          <img src="/logo/Logo_dark.svg" alt="Arivu" className="h-6 w-auto" />
        </div>
      </div>
    </div>
  )
}

export function TransformationVisual({ progress }: { progress: MotionValue<number> }) {
  return <TransformationStage progress={progress} reduced={false} />
}
