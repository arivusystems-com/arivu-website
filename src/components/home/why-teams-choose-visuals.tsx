'use client'

type IllustrationProps = {
  className?: string
}

function IsometricCube({
  x,
  y,
  size = 44,
  face = '#f8fafc',
  side = '#e2e8f0',
  top = '#ffffff',
  children,
}: {
  x: number
  y: number
  size?: number
  face?: string
  side?: string
  top?: string
  children?: React.ReactNode
}) {
  let h = size * 0.35
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d={`M0 ${h} L${size / 2} 0 L${size} ${h} L${size / 2} ${h * 2} Z`} fill={top} />
      <path d={`M0 ${h} L${size / 2} ${h * 2} L${size / 2} ${h * 2 + size * 0.55} L0 ${h + size * 0.55} Z`} fill={side} />
      <path
        d={`M${size} ${h} L${size / 2} ${h * 2} L${size / 2} ${h * 2 + size * 0.55} L${size} ${h + size * 0.55} Z`}
        fill={face}
      />
      {children}
    </g>
  )
}

export function WorkflowNodesIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 280" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="wf-surface" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
          <stop offset="50%" stopColor="#6366f1" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
        <filter id="wf-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="200" cy="230" rx="150" ry="18" fill="url(#wf-surface)" />
      <path
        d="M72 168 Q140 148 200 168 T328 168"
        stroke="#6366f1"
        strokeWidth="3"
        filter="url(#wf-glow)"
        opacity="0.85"
      />
      <path
        d="M200 168 L200 118"
        stroke="#6366f1"
        strokeWidth="2"
        strokeDasharray="5 4"
        opacity="0.6"
      />
      <IsometricCube x={48} y={148} size={48}>
        <circle cx="24" cy="30" r="7" fill="#6366f1" opacity="0.85" />
        <circle cx="24" cy="27" r="3" fill="#fff" />
      </IsometricCube>
      <IsometricCube x={118} y={148} size={48}>
        <path d="M18 28 L24 22 L30 28 L24 34 Z" fill="#6366f1" />
      </IsometricCube>
      <IsometricCube x={188} y={148} size={48}>
        <rect x="16" y="24" width="16" height="12" rx="2" fill="#6366f1" opacity="0.8" />
        <path d="M19 31 L22 34 L29 27" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </IsometricCube>
      <IsometricCube x={258} y={148} size={48}>
        <path d="M24 22 V34 M20 26 H28" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 34 H28" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
      </IsometricCube>
      <IsometricCube x={118} y={88} size={36} face="#818cf8" side="#6366f1" top="#a5b4fc">
        <path d="M14 22 H22 M18 18 V26" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </IsometricCube>
    </svg>
  )
}

export function DayOneIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 280" className={className} fill="none" aria-hidden="true">
      <ellipse cx="180" cy="220" rx="90" ry="12" fill="#6366f1" opacity="0.15" />
      <IsometricCube x={100} y={120} size={160} face="#f1f5f9" side="#cbd5e1" top="#ffffff">
        <rect x="20" y="18" width="120" height="28" rx="4" fill="#6366f1" opacity="0.15" />
        <text x="80" y="78" textAnchor="middle" fill="#1e1b4b" fontSize="22" fontWeight="800" fontFamily="system-ui">
          DAY 1
        </text>
        <rect x="30" y="92" width="100" height="6" rx="3" fill="#6366f1" opacity="0.2" />
        <rect x="40" y="106" width="80" height="6" rx="3" fill="#6366f1" opacity="0.12" />
      </IsometricCube>
      <path
        d="M290 100 L310 72 L318 80 L302 108 Z"
        fill="#818cf8"
      />
      <path
        d="M304 72 V112 M292 88 L304 72 L316 88"
        stroke="#c7d2fe"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ProcessBuilderIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 280" className={className} fill="none" aria-hidden="true">
      <rect x="60" y="80" width="280" height="140" rx="16" fill="#111827" stroke="#312e81" strokeWidth="1.5" />
      <rect x="80" y="110" width="80" height="48" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x="180" y="110" width="80" height="48" rx="10" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
      <rect x="280" y="110" width="40" height="48" rx="10" fill="#312e81" stroke="#6366f1" strokeWidth="1" opacity="0.6" />
      <path d="M168 134 H172 M174 134 H178" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
      <path d="M268 134 H272 M274 134 H278" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
      <rect x="90" y="178" width="56" height="24" rx="6" fill="#4f46e5" opacity="0.35" />
      <rect x="154" y="178" width="56" height="24" rx="6" fill="#6366f1" opacity="0.2" />
      <circle cx="310" cy="96" r="14" fill="#6366f1" opacity="0.25" />
      <path d="M304 96 H316 M310 90 V102" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function TeamCollaborationIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 280" className={className} fill="none" aria-hidden="true">
      <ellipse cx="200" cy="220" rx="120" ry="14" fill="#6366f1" opacity="0.12" />
      <rect x="90" y="90" width="220" height="120" rx="14" fill="#111827" stroke="#312e81" strokeWidth="1.5" />
      <rect x="110" y="110" width="180" height="10" rx="4" fill="#312e81" />
      <rect x="110" y="130" width="130" height="8" rx="3" fill="#6366f1" opacity="0.35" />
      <rect x="110" y="146" width="150" height="8" rx="3" fill="#6366f1" opacity="0.2" />
      <circle cx="140" cy="182" r="16" fill="#4f46e5" />
      <circle cx="200" cy="182" r="16" fill="#6366f1" />
      <circle cx="260" cy="182" r="16" fill="#818cf8" />
      <circle cx="140" cy="178" r="5" fill="#fff" />
      <circle cx="200" cy="178" r="5" fill="#fff" />
      <circle cx="260" cy="178" r="5" fill="#fff" />
    </svg>
  )
}

export function ConnectedAppsIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 280" className={className} fill="none" aria-hidden="true">
      <path d="M200 70 V110 M150 90 H250 M170 130 H230" stroke="#6366f1" strokeWidth="1.5" opacity="0.45" />
      <IsometricCube x={80} y={52} size={52} face="#e0e7ff" side="#c7d2fe" top="#fff" />
      <IsometricCube x={268} y={52} size={52} face="#e0e7ff" side="#c7d2fe" top="#fff" />
      <IsometricCube x={80} y={148} size={52} face="#e0e7ff" side="#c7d2fe" top="#fff" />
      <IsometricCube x={268} y={148} size={52} face="#e0e7ff" side="#c7d2fe" top="#fff" />
      <IsometricCube x={174} y={96} size={52} face="#818cf8" side="#6366f1" top="#a5b4fc">
        <circle cx="26" cy="28" r="8" fill="#fff" opacity="0.9" />
      </IsometricCube>
      <path d="M120 78 L170 108 M280 78 L230 108 M120 178 L170 148 M280 178 L230 148" stroke="#818cf8" strokeWidth="2" opacity="0.55" />
    </svg>
  )
}

export function GrowthBlocksIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 280" className={className} fill="none" aria-hidden="true">
      <ellipse cx="170" cy="220" rx="80" ry="12" fill="#6366f1" opacity="0.15" />
      <IsometricCube x={100} y={168} size={44} face="#6366f1" side="#4f46e5" top="#818cf8" />
      <IsometricCube x={130} y={138} size={44} face="#6366f1" side="#4f46e5" top="#818cf8" />
      <IsometricCube x={160} y={108} size={44} face="#6366f1" side="#4f46e5" top="#818cf8" />
      <IsometricCube x={190} y={78} size={44} face="#818cf8" side="#6366f1" top="#a5b4fc" />
      <path
        d="M280 200 L280 80 M280 80 L268 94 M280 80 L292 94"
        stroke="#818cf8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const whyTeamsChooseIllustrations = [
  WorkflowNodesIllustration,
  DayOneIllustration,
  ProcessBuilderIllustration,
  TeamCollaborationIllustration,
  ConnectedAppsIllustration,
  GrowthBlocksIllustration,
] as const
