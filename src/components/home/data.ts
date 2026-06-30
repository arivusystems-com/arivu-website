export const demoUrl = 'https://app.arivusystems.com/demo'

/** Temporary hero strip until customer logos are available. */
export const businessJourney = [
  'Enquiry',
  'Sales',
  'Quote',
  'Inventory',
  'Project',
  'Support',
  'Analytics',
] as const

/** Swap to a PNG capture of the real product when available. */
export const workspaceScreenshot = {
  src: '/workspace/arivu-workspace.svg',
  alt: 'Arivu unified workspace showing connected sales, support, and project processes',
  width: 2400,
  height: 1500,
}

export const apps = [
  {
    name: 'Sales',
    description:
      'Structure your sales process from first enquiry to conversion.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    name: 'Helpdesk',
    description:
      'Keep support requests organized, accountable, and easy to resolve.',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    name: 'Projects',
    description: 'Plan work, assign ownership, and deliver with confidence.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Field Sales',
    description: 'Coordinate on-ground activities with complete visibility.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    name: 'Audits',
    description:
      'Run inspections, assessments, and compliance workflows with consistency.',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    name: 'Inventory',
    description: 'Track stock, movement, and allocation across your business.',
    color: 'bg-blue-100 text-blue-600',
  },
]

export const whyChoosePrinciples = [
  'Process-first by design',
  'Ready to use from Day 1',
  'Built around your workflows',
  'Simple enough for everyday teams',
  'Connected across every application',
  'Designed for long-term growth',
]

export const howItWorks = [
  {
    step: '1',
    title: 'Understand',
    description:
      'Every business operates differently. We begin by understanding your workflows and the way your team already works.',
  },
  {
    step: '2',
    title: 'Configure',
    description:
      'Arivu Apps are configured around your business processes, allowing your team to get started quickly with minimal complexity.',
  },
  {
    step: '3',
    title: 'Grow',
    description:
      'With connected operations and structured workflows, your team gains the clarity to execute better, make faster decisions, and grow with confidence.',
  },
]

export const industries = [
  'Retail',
  'Real Estate',
  'Education',
  'Healthcare',
  'IT',
  'Professional Services',
  'Manufacturing',
  'Automotive',
  'Hospitality',
  'Field Services',
]

export const idealFor = [
  'Growing businesses',
  'Scaling teams',
  'Founders and business leaders',
  'Operations teams',
  'Organizations replacing disconnected systems',
]

export const problemItems = [
  'Teams work in silos',
  'Processes slow down',
  'Decisions lack clarity',
  'Growth becomes harder',
] as const

export const problemSolutionBridge =
  'Arivu replaces fragmentation with one connected business system.'

/** Problem section diagram — disconnected tools illustration. */
export const problemDiagram = {
  src: '/homepage-images/problem-illustration.png',
  alt: 'Disconnected business tools with no single source of truth',
  width: 3224,
  height: 1096,
  /** Bump when replacing the PNG so browsers and Next.js pick up the new file. */
  version: 4,
} as const

export const platformPillars = [
  'One platform.',
  'One process.',
  'One source of clarity.',
]
