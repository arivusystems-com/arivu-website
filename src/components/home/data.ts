export const demoUrl = 'https://app.arivusystems.com/demo'
export const loginUrl = 'https://app.arivusystems.com/login'

/** Placeholder product screenshots — swap with real captures when ready. */
export const placeholders = {
  heroDashboard:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
  commandCenter:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  salesApp:
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
  helpdeskApp:
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80',
  projectsApp:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
  fieldApp:
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
  auditsApp:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
  inventoryApp:
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
  abstractShape:
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  teamPhoto:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  playbookCover:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
} as const

export const trustBadges = [
  'Process-first platform',
  'Built for growing teams',
  'Connected applications',
  'Ready from day one',
  'Enterprise-grade security',
  'Real-time visibility',
]

export const customerLogos = [
  { name: 'Tuple', src: '/logo-cloud/tuple.svg' },
  { name: 'Upwork', src: '/logo-cluster/upwork.svg' },
  { name: 'Dribbble', src: '/logo-cluster/dribbble.svg' },
  { name: 'LinkedIn', src: '/logo-cluster/linkedin.svg' },
  { name: 'Glassdoor', src: '/logo-cluster/glassdoor.svg' },
  { name: 'Career Builder', src: '/logo-cluster/career-builder.svg' },
]

export const apps = [
  {
    id: 'sales',
    name: 'Sales',
    description:
      'Structure your sales process from first enquiry to conversion.',
    color: 'bg-rose-100 text-rose-600',
    image: '/homepage-images/product_image.png',
    panelBackground: 'linear-gradient(160deg, #eef2ff 0%, #e0e7ff 100%)',
    features: [
      'Lead & enquiry management',
      'Quote & proposal workflows',
      'Pipeline visibility',
      'Conversion tracking',
      'Team performance dashboards',
    ],
  },
  {
    id: 'helpdesk',
    name: 'Helpdesk',
    description:
      'Keep support requests organized, accountable, and easy to resolve.',
    color: 'bg-sky-100 text-sky-600',
    image: '/homepage-images/workspace.png',
    panelBackground: 'linear-gradient(160deg, #e0f2fe 0%, #bae6fd 100%)',
    features: [
      'Ticket routing & SLAs',
      'Customer communication history',
      'Escalation workflows',
      'Resolution analytics',
      'Knowledge base integration',
    ],
  },
  {
    id: 'projects',
    name: 'Projects',
    description: 'Plan work, assign ownership, and deliver with confidence.',
    color: 'bg-emerald-100 text-emerald-600',
    image: '/homepage-images/flows.png',
    panelBackground: 'linear-gradient(160deg, #ecfdf5 0%, #d1fae5 100%)',
    features: [
      'Task & milestone tracking',
      'Resource allocation',
      'Budget vs actual reporting',
      'Approval workflows',
      'Cross-team collaboration',
    ],
  },
  {
    id: 'field',
    name: 'Field Sales',
    description: 'Coordinate on-ground activities with complete visibility.',
    color: 'bg-amber-100 text-amber-600',
    image: '/homepage-images/teams.png',
    panelBackground: 'linear-gradient(160deg, #fffbeb 0%, #fef3c7 100%)',
    features: [
      'Mobile-first field workflows',
      'Visit & activity tracking',
      'Geo-tagged check-ins',
      'Offline sync support',
      'Real-time team visibility',
    ],
  },
  {
    id: 'audits',
    name: 'Audits',
    description:
      'Run inspections, assessments, and compliance workflows with consistency.',
    color: 'bg-violet-100 text-violet-600',
    image: '/homepage-images/process.png',
    panelBackground: 'linear-gradient(160deg, #f5f3ff 0%, #ede9fe 100%)',
    features: [
      'Custom audit templates',
      'Photo & evidence capture',
      'Compliance scoring',
      'Automated follow-ups',
      'Audit trail reporting',
    ],
  },
  {
    id: 'inventory',
    name: 'Inventory',
    description: 'Track stock, movement, and allocation across your business.',
    color: 'bg-blue-100 text-blue-600',
    image: '/homepage-images/data.png',
    panelBackground: 'linear-gradient(160deg, #eff6ff 0%, #dbeafe 100%)',
    features: [
      'Stock level tracking',
      'Multi-location inventory',
      'Allocation & reservations',
      'Movement history',
      'Low-stock alerts',
    ],
  },
]

export const personas = [
  {
    id: 'leaders',
    title: 'Founders & Leaders',
    description:
      'Unlock scalability and long-term profitability through the strategic integration of automation, connected processes, and operational control.',
    image: placeholders.abstractShape,
  },
  {
    id: 'operations',
    title: 'Operations Teams',
    description:
      'Keep every process on track from planning through delivery with tight cost control and seamless collaboration across the team.',
    image: placeholders.abstractShape,
  },
  {
    id: 'finance',
    title: 'Finance & Admin',
    description:
      'Ensure accurate, audit-ready records with streamlined accounting workflows, tight cost control, and built-in compliance at every step.',
    image: placeholders.abstractShape,
  },
]

export const quoteTestimonials = [
  {
    quote:
      'We looked at multiple platforms and Arivu was the clearest fit across the board.',
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'Northline Retail',
  },
  {
    quote:
      'Arivu\'s connected dashboard is the best I\'ve seen for a growing business.',
    name: 'Marcus Webb',
    role: 'Head of Operations',
    company: 'Summit Services',
  },
  {
    quote:
      'Now we can proactively understand and project where things are going to be.',
    name: 'Priya Sharma',
    role: 'VP Operations',
    company: 'Atlas Manufacturing',
  },
  {
    quote:
      'Arivu allows us to catch issues as soon as they happen.',
    name: 'James Okonkwo',
    role: 'Controller',
    company: 'Bridgepoint Group',
  },
  {
    quote:
      'We can pull reports in real-time, drill down into costs, and see exactly what\'s happening.',
    name: 'Elena Rodriguez',
    role: 'Finance Manager',
    company: 'Horizon Properties',
  },
  {
    quote:
      'We grew 30% with Arivu. It helped us save significant time on every project.',
    name: 'David Park',
    role: 'CFO',
    company: 'Clearpath IT',
  },
]

export const reviewCards = [
  {
    company: 'Northline Retail',
    location: 'California, United States',
    name: 'Sarah Chen',
    role: 'CEO',
    quote:
      'No one rushed us out the door. Everyone\'s been incredibly patient and committed to helping us get it right.',
  },
  {
    company: 'Summit Services',
    location: 'Colorado, United States',
    name: 'Marcus Webb',
    role: 'Head of Operations',
    quote: 'Outstanding customer support.',
  },
  {
    company: 'Atlas Manufacturing',
    location: 'Ontario, Canada',
    name: 'Priya Sharma',
    role: 'VP Operations',
    quote:
      'It\'s more than just a system; it\'s everything we didn\'t know we needed!',
  },
  {
    company: 'Bridgepoint Group',
    location: 'Texas, United States',
    name: 'James Okonkwo',
    role: 'Controller',
    quote:
      'At the end of the day, Arivu really is the backbone of our business.',
  },
  {
    company: 'Horizon Properties',
    location: 'British Columbia, Canada',
    name: 'Elena Rodriguez',
    role: 'Finance Manager',
    quote:
      'The approval process tied to project estimates is one of my favorite features.',
  },
  {
    company: 'Clearpath IT',
    location: 'Denver, CO, USA',
    name: 'David Park',
    role: 'CFO',
    quote:
      'We save up to 30–40 hours per project by managing change orders in real-time.',
  },
]

export const differentiatorsMeta = {
  heading: 'Built around your process.',
  lead:
    "We're not another software company. One connected platform built for how you work-not rigid modules.",
} as const

export const differentiators = [
  {
    id: 'process-first',
    title: 'Process-first by design',
    description:
      'Your business defines the process - not the software. Configure workflows, approvals, and automations around how you already operate, not generic templates you have to force-fit.',
    icon: 'building',
  },
  {
    id: 'modern',
    title: 'Modern, powerful, simple',
    description:
      'Enterprise-grade capability with an interface your whole team can use. Real-time visibility and automation without the complexity of traditional business software.',
    icon: 'sparkles',
  },
  {
    id: 'speed',
    title: 'Go live in days, not months',
    description:
      'Industry-ready foundations and pre-built workflows get you running quickly. Our team handles onboarding so you see value from week one-not after a six-month implementation.',
    icon: 'rocket',
  },
  {
    id: 'connected',
    title: 'One connected platform',
    description:
      'Sales, Projects, Inventory, Helpdesk, and every Arivu App share the same data and workflows. Replace disconnected tools with one source of truth your entire business runs on.',
    icon: 'users',
  },
] as const


export const faqItems = [
  {
    question: 'What is Arivu, and how does it work?',
    answer:
      'Arivu is a process-first business platform designed to help growing organizations structure operations, simplify execution, and scale through connected applications. It unifies sales, support, projects, field operations, audits, and inventory in one system — so teams can streamline workflows, improve collaboration, and make data-driven decisions.',
  },
  {
    question: 'Who is Arivu designed for?',
    answer:
      'Arivu is built for growing businesses, scaling teams, founders, operations leaders, and organizations replacing disconnected systems. Whether you manage a single location or multiple teams, Arivu adapts to your workflows instead of forcing you into rigid software.',
  },
  {
    question: 'What problems does Arivu solve?',
    answer:
      'Arivu addresses siloed data, multiple disconnected tools, inefficient manual workflows, limited visibility into operations, and communication gaps between teams. It automates processes, reduces errors, and provides real-time insights to improve efficiency and growth.',
  },
  {
    question: 'Is Arivu cloud-based?',
    answer:
      'Yes. Arivu is a fully cloud-based platform. Access your data anytime, anywhere, from any device without costly servers or IT maintenance. Automatic updates and enterprise-grade security keep your operations running smoothly.',
  },
  {
    question: 'What makes Arivu different from other business software?',
    answer:
      'Arivu delivers true connected platform functionality — unifying multiple business processes while eliminating the need for disconnected systems. With process-first design, real-time collaboration, and applications that work together natively, Arivu empowers businesses with complete operational clarity.',
  },
  {
    question: 'How much does Arivu cost?',
    answer:
      'Arivu offers flexible tiered pricing tailored to your company\'s size and needs. Contact our team for a custom quote — we work to ensure you receive the best value for your investment.',
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

export const industriesMeta = {
  heading: 'Built for how your industry works.',
  headingHighlight: 'industry works.',
  subheading:
    'Every industry has its own way of working. Arivu combines industry-ready workflows with one connected platform, so your teams can deliver faster from day one.',
} as const

export const industryTabs = [
  {
    id: 'retail',
    number: '01',
    label: 'Retail',
    tag: 'Retail',
    heading: 'Run every store and channel from one connected system.',
    description:
      'From inventory to sales to customer support, Arivu gives retail teams one platform to manage operations, track performance, and deliver consistent experiences across every location.',
    features: [
      'Multi-location inventory & stock tracking',
      'Sales pipeline and order management',
      'Customer support tied to purchase history',
    ],
    cta: 'Explore Retail',
    image: {
      src: '/homepage-images/product_image.png',
      alt: 'Arivu retail dashboard showing sales, inventory, and customer metrics',
    },
    panelBackground: 'linear-gradient(160deg, #e8f9ee 0%, #d4f0dc 100%)',
  },
  {
    id: 'real-estate',
    number: '02',
    label: 'Real Estate',
    tag: 'Real Estate',
    heading: 'Manage listings, leads, and deals with complete visibility.',
    description:
      'Track enquiries from first contact to closing. Coordinate field visits, manage projects, and keep every stakeholder aligned — all on one platform built for property businesses.',
    features: [
      'Lead & enquiry tracking with follow-up workflows',
      'Project and site visit coordination',
      'Document and approval management',
    ],
    cta: 'Explore Real Estate',
    image: {
      src: '/homepage-images/workspace.png',
      alt: 'Arivu real estate workspace showing listings and pipeline',
    },
    panelBackground: 'linear-gradient(160deg, #e8f0fe 0%, #d4e4fc 100%)',
  },
  {
    id: 'education',
    number: '03',
    label: 'Education',
    tag: 'Education',
    heading: 'Streamline admissions, operations, and student support.',
    description:
      'From enquiry to enrollment to ongoing support, Arivu helps educational institutions manage every step of the student lifecycle with structured workflows and real-time visibility.',
    features: [
      'Admissions and enquiry management',
      'Project-based program delivery tracking',
      'Helpdesk for student and parent support',
    ],
    cta: 'Explore Education',
    image: {
      src: '/homepage-images/platform.png',
      alt: 'Arivu education platform showing admissions and operations',
    },
    panelBackground: 'linear-gradient(160deg, #f3e8ff 0%, #e4d4fc 100%)',
  },
  {
    id: 'healthcare',
    number: '04',
    label: 'Healthcare',
    tag: 'Healthcare',
    heading: 'Coordinate care operations with audit-ready workflows.',
    description:
      'Manage patient enquiries, field operations, compliance audits, and internal projects on one connected platform — so your team stays organized and accountable.',
    features: [
      'Patient enquiry and appointment workflows',
      'Compliance audit templates and tracking',
      'Cross-team coordination and reporting',
    ],
    cta: 'Explore Healthcare',
    image: {
      src: '/homepage-images/hero-dashboard.png',
      alt: 'Arivu healthcare operations dashboard',
    },
    panelBackground: 'linear-gradient(160deg, #e0f7f4 0%, #c8efe8 100%)',
  },
  {
    id: 'it',
    number: '05',
    label: 'IT & Services',
    tag: 'IT & Services',
    heading: 'Deliver projects and support clients from one platform.',
    description:
      'Track sales pipelines, manage client projects, resolve support tickets, and monitor team performance — all connected so nothing falls through the cracks.',
    features: [
      'Client project and milestone tracking',
      'Integrated helpdesk and SLA management',
      'Sales pipeline with quote workflows',
    ],
    cta: 'Explore IT & Services',
    image: {
      src: '/homepage-images/data.png',
      alt: 'Arivu IT services dashboard with connected applications',
    },
    panelBackground: 'linear-gradient(160deg, #fef3e2 0%, #fde8c8 100%)',
  },
  {
    id: 'professional-services',
    number: '06',
    label: 'Professional Services',
    tag: 'Professional Services',
    heading: 'Scale client delivery without adding complexity.',
    description:
      'From proposal to delivery to billing, Arivu gives professional services firms the structure to manage clients, projects, and teams — with full visibility at every stage.',
    features: [
      'Quote and proposal workflows',
      'Resource allocation and project tracking',
      'Client communication and support history',
    ],
    cta: 'Explore Professional Services',
    image: {
      src: '/homepage-images/flows.png',
      alt: 'Arivu professional services workflow builder',
    },
    panelBackground: 'linear-gradient(160deg, #fce8ef 0%, #f5d4e0 100%)',
  },
] as const

export const idealFor = [
  'Growing businesses',
  'Scaling teams',
  'Founders and business leaders',
  'Operations teams',
  'Organizations replacing disconnected systems',
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

export const heroWorkspace = {
  src: '/homepage-images/product_image.png',
  alt: 'Arivu product dashboard showing connected business operations',
  width: 2564,
  height: 1526,
} as const

export const workspaceScreenshot = heroWorkspace

export const businessJourney = [
  'Enquiry',
  'Sales',
  'Quote',
  'Inventory',
  'Project',
  'Support',
  'Analytics',
] as const

export const whyChoosePrinciples = [
  'Process-first by design',
  'Ready to use from Day 1',
  'Built around your workflows',
  'Simple enough for everyday teams',
  'Connected across every app',
  'Designed for long-term growth',
]

export const whyTeamsChooseMeta = {
  eyebrow: 'Why teams choose Arivu',
  heading: 'Powerful software only creates value when people use it.',
  headingHighlight: 'people use it.',
  supporting:
    'Arivu is designed around the way your business already works, so adoption feels natural from day one.',
  closing: 'Because the best system is the one your team actually uses.',
  closingHighlight: 'actually uses.',
} as const

export const whyTeamsChooseCards = [
  {
    id: 'process-first',
    title: 'Process-first by design',
    description: 'Your business defines the process—not the software.',
    preview:
      'Your business defines the process—not the software.',
    bullets: [
      'Design your end-to-end flow',
      'Add approvals, rules and actions',
      'Adapt as your business evolves',
    ],
    image: {
      src: '/homepage-images/process.png',
      alt: 'Workflow diagram with Start, Condition, Approval, Action, and Done steps connected by flow lines',
      width: 1536,
      height: 1024,
      surfaceBackground:
        'linear-gradient(180deg, #050322 0%, #070528 55%, #09072d 100%)',
    },
  },
  {
    id: 'ready-day-one',
    title: 'Ready from Day 1',
    description:
      'Start with a structured system instead of months of implementation and endless configuration.',
    preview: 'Go live in days, not months.',
    bullets: [
      'Go live in days, not months',
      'Pre-built business foundations',
      'Quick onboarding for every team',
    ],
    image: {
      src: '/homepage-images/day.png',
      alt: 'Desk calendar showing Day 1 with lightning bolt and go live badge',
      width: 1536,
      height: 1024,
      surfaceBackground:
        'radial-gradient(ellipse 100% 90% at 50% 80%, #120a42 0%, #0b0434 42%, #060129 100%)',
    },
  },
  {
    id: 'your-workflows',
    title: 'Built around your workflows',
    description:
      'Configure processes, forms, approvals and automations to match how your business operates.',
    preview: 'No coding required. Flexible process configuration.',
    bullets: [
      'No coding required',
      'Flexible process configuration',
      'Adapt as your business evolves',
    ],
    image: {
      src: '/homepage-images/flows.png',
      alt: 'Drag-and-drop process builder showing a purchase approval workflow',
      width: 3072,
      height: 2048,
      panelBackground: 'linear-gradient(180deg, #f7f4fb 0%, #ebe8f9 100%)',
    },
  },
  {
    id: 'everyday-teams',
    title: 'Simple for everyday teams',
    description:
      'Powerful enough for operations. Simple enough for everyone to use every day.',
    preview: 'Intuitive interface. Minimal training required.',
    bullets: [
      'Intuitive interface',
      'Minimal training required',
      'Faster team adoption',
    ],
    image: {
      src: '/homepage-images/teams.png',
      alt: 'Team collaborating around a shared workspace interface',
      width: 3072,
      height: 2048,
      panelBackground: 'linear-gradient(180deg, #f4f2fb 0%, #e8e4f7 100%)',
    },
  },
  {
    id: 'connected-apps',
    title: 'Connected across every app',
    description:
      'Sales, Projects, Inventory, Helpdesk and every Arivu App share the same platform and data.',
    preview: 'One source of truth across every application.',
    bullets: [
      'One source of truth',
      'Shared data across apps',
      'Workflows stay connected',
    ],
    image: {
      src: '/homepage-images/data.png',
      alt: 'Connected application blocks sharing data across a unified platform',
      width: 3072,
      height: 2048,
      panelBackground: 'linear-gradient(180deg, #f6f2fc 0%, #e8e4f4 100%)',
    },
  },
  {
    id: 'long-term-growth',
    title: 'Built for long-term growth',
    description:
      'Start with what you need today. Expand as your business grows—without rebuilding your systems.',
    preview: 'Add applications. Scale confidently. Grow without adding complexity.',
    bullets: [
      'Add applications anytime',
      'Scale without complexity',
      'Grow on one platform',
    ],
    image: {
      src: '/homepage-images/growth.png',
      alt: 'Stacking blocks with an upward arrow representing long-term platform growth',
      width: 3070,
      height: 2048,
      surfaceBackground:
        'radial-gradient(ellipse 100% 85% at 50% 75%, #4a32d4 0%, #2d1a8f 45%, #1a0b58 100%)',
    },
  },
] as const

export const problemItems = [
  'Teams work in silos',
  'Processes slow down',
  'Decisions lack clarity',
  'Growth becomes harder',
] as const

export const transformationMeta = {
  lead: 'Arivu unifies your people, processes, data and applications so your business runs smarter and grows faster.',
  before: {
    badge: 'Without Arivu',
    heading: 'Disconnected. Manual. Chaotic.',
    subtext:
      'Information is scattered. Work is duplicated. Teams chase updates.',
    outcomes: [
      'Searching for information',
      'Manual updates',
      'Duplicate work',
      'Missed follow-ups',
      'No real-time visibility',
    ] as const,
  },
  after: {
    badge: 'With Arivu',
    heading: 'Connected. Automated. Clear.',
    subtext: 'One platform. One source of truth. Everything flows. Growth follows.',
    outcomes: [
      'One source of truth',
      'Real-time visibility',
      'Automated workflows',
      'Clear ownership',
      'Faster execution',
      'Scalable growth',
    ] as const,
  },
  footer: {
    text: "The shift from chaos to clarity. That's how growth happens with Arivu.",
    cta: 'See Arivu in action',
  },
} as const

/** @deprecated use transformationMeta */
export const transformationPanels = {
  before: {
    title: transformationMeta.before.badge,
    subtitle: transformationMeta.before.subtext,
  },
  after: {
    title: transformationMeta.after.badge,
    subtitle: transformationMeta.after.subtext,
  },
} as const

/** @deprecated use transformationMeta.before.outcomes */
export const transformationRows = transformationMeta.before.outcomes.map(
  (before, i) => ({
    before,
    after: transformationMeta.after.outcomes[i] ?? transformationMeta.after.outcomes[0],
  }),
)

export const problemSolutionBridge =
  'Arivu replaces fragmentation with one connected business system.'

export const problemDiagram = {
  src: '/homepage-images/problem-illustration.png',
  alt: 'Disconnected business tools with no single source of truth',
  width: 3224,
  height: 1096,
  version: 4,
} as const

export const platformPillars = [
  'One platform.',
  'One process.',
  'One source of clarity.',
]
