// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for every piece of content on the site.
// All facts here are taken from the resume — keep them in sync.
// Copy rule (Guidebook §5): write outcomes, not tools.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Canonical origin. Used by metadata, sitemap, robots and JSON-LD.
 * Change this one line when the custom domain is live.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://anuragkumar-portfolio.vercel.app';

export const siteConfig = {
  name: 'Anurag Kumar',
  role: 'Full Stack Developer & AI Engineer',
  discipline: 'Full-stack products, payments and applied AI',

  /** The one-line promise. Outcome first, stack second. */
  headline: 'I build full-stack products, and the AI that runs inside them.',

  /** Supporting sentence — what a visitor gets by working with him. */
  subheadline:
    'Full-stack developer and AI engineer. I build the software businesses run on, front to back, and the AI features inside it. Most recently for a startup serving 10,000 people a day.',

  /** Short version used in metadata and cards. */
  summary:
    'Full Stack Developer and AI Engineer with hands-on experience building scalable, production-ready applications and contributing to open-source software. Full-stack delivery, payment systems, applied AI and distributed systems.',

  location: 'Sonipat, Haryana, India',
  availability: 'Taking on freelance projects now, and open to full-time roles. Remote or on-site.',

  mainNav: [
    { title: 'Home', href: '#home' },
    { title: 'Experience', href: '#experience' },
    { title: 'Work', href: '#work' },
    { title: 'Open Source', href: '#open-source' },
    { title: 'Skills', href: '#skills' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ],

  links: {
    github: 'https://github.com/Anuragkumar-687',
    linkedin: 'https://www.linkedin.com/in/anurag-kumar121',
    leetcode: 'https://leetcode.com/u/Anurag_Kumar2005/',
    email: 'mailto:anuragkumar82108@gmail.com',
    emailAddress: 'anuragkumar82108@gmail.com',
    phone: 'tel:+918210816017',
    phoneNumber: '+91 82108 16017',
    resume: '/resume.pdf',
  },
} as const;

// ─── Proof strip ──────────────────────────────────────────────────────────────
// The four numbers a recruiter should register in the first five seconds.
export const proofStats = [
  { value: '2', label: 'Engineering internships', detail: 'Backend & full stack' },
  { value: '430+', label: 'DSA problems solved', detail: '1558 contest rating' },
  { value: '2', label: 'Open-source projects', detail: 'Merged PRs upstream' },
  { value: '85%', label: 'Manual effort removed', detail: 'StaySync automation' },
] as const;

// ─── Experience ───────────────────────────────────────────────────────────────
export type Experience = {
  id: string;
  role: string;
  company: string;
  companyNote?: string;
  location: string;
  period: string;
  /** Lead with what changed, not what was touched. */
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    id: 'privatevault',
    role: 'Backend Developer Intern',
    company: 'PrivateVault AI',
    location: 'Remote',
    period: 'May 2026 to July 2026',
    summary:
      'Built and maintained backend services behind the product, from feature design through to code review and performance tuning.',
    highlights: [
      'Developed and maintained backend services using Python, SQL and FastAPI.',
      'Worked with the engineering team to design, implement and test new application features.',
      'Debugged production issues, optimised application performance and reviewed teammates’ code.',
      'Integrated REST APIs, databases and third-party services under clean-code and documentation standards.',
    ],
    stack: ['Python', 'FastAPI', 'SQL', 'REST APIs'],
  },
  {
    id: 'bizowl',
    role: 'Full Stack Developer Intern',
    company: 'Bizowl',
    companyNote: 'WhiteSense Pvt. Ltd.',
    location: 'Remote, Delhi',
    period: 'April 2026 to June 2026',
    summary:
      'Owned features end to end across the company’s web products, from the first commit to the deployed release.',
    highlights: [
      'Delivered full-stack features with React, Node.js, Express.js, MongoDB, SQL and Firebase, from development through deployment.',
      'Designed and integrated RESTful APIs and optimised backend services.',
      'Implemented Firebase for real-time data sync and authentication.',
      'Collaborated via Git/GitHub, contributing to code reviews, debugging and release best practice.',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'SQL'],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export type Project = {
  title: string;
  subtitle: string;
  period?: string;
  /** The problem the project exists to solve. */
  problem?: string;
  /** What was actually engineered. */
  build?: string;
  /** Measurable result. */
  impact?: string;
  /** Exactly what this person did. Kept to three lines so cards stay level. */
  contributions: string[];
  /** Headline numbers for the card. */
  metrics: { value: string; label: string }[];
  image?: string;
  tags: string[];
  link?: string;
  repo?: string;
  /** Marks commissioned work, so a visitor can tell it from a side project. */
  context?: string;
  /** Cards sharing a group render under one heading. */
  group?: string;
  /** For products that ship across several public surfaces. */
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  // ── Bizowl ────────────────────────────────────────────────────────────────
  // Split into its four surfaces rather than one entry: each was a distinct
  // build, and a prospective client scanning the grid should see the breadth.
  {
    title: 'Bizowl Platform',
    group: 'bizowl',
    subtitle: 'The platform 10,000+ founders use daily',
    period: '2026',
    context: 'Client work · Bizowl (WhiteSense Pvt. Ltd.)',
    contributions: [
      'Shipped the entire platform, from first commit to production.',
      'Owned the business logic and API layer behind every page, not just the UI.',
      'Carries 10,000+ users a day on the architecture I built.',
    ],
    metrics: [
      { value: '10,000+', label: 'Daily users' },
      { value: '3,000+', label: 'Startups helped' },
      { value: '500+', label: 'Providers listed' },
    ],
    image: '/images/bizowl-site.webp',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'Firebase', 'REST APIs'],
    links: [{ label: 'Visit the site', href: 'https://www.bizzowl.com/' }],
    featured: true,
  },
  {
    title: 'Startup Directory',
    group: 'bizowl',
    subtitle: 'Puts member startups in front of investors',
    period: '2026',
    context: 'Client work · Bizowl (WhiteSense Pvt. Ltd.)',
    contributions: [
      'Designed and built the whole directory: data model, search and filtering.',
      'Built the investor view that surfaces startups by sector, stage and funding need.',
      'Replaced a manual listing process with a product founders can self-serve.',
    ],
    metrics: [
      { value: '3,000+', label: 'Founders reached' },
      { value: '120+', label: 'Mentors listed' },
      { value: '500+', label: 'Providers indexed' },
    ],
    image: '/images/bizowl-directory.webp',
    tags: ['React', 'Node.js', 'MongoDB', 'Search & filters', 'REST APIs'],
    links: [{ label: 'Open the directory', href: 'https://www.bizzowl.com/startup-directory' }],
    featured: true,
  },
  {
    title: 'Founder Membership',
    group: 'bizowl',
    subtitle: 'Revenue product, live and taking payments',
    period: '2026',
    context: 'Client work · Bizowl (WhiteSense Pvt. Ltd.)',
    contributions: [
      'Built the revenue engine: the paid membership that converts free users.',
      'Integrated Razorpay end to end, so real money moves through code I wrote.',
      'Sold out 20+ founding memberships on day one of launch.',
    ],
    metrics: [
      { value: '20+', label: 'Paid on launch day' },
      { value: '2', label: 'Pricing tiers' },
      { value: '50', label: 'Founding seats' },
    ],
    image: '/images/bizowl-membership.webp',
    tags: ['React', 'Node.js', 'Razorpay', 'MongoDB', 'Payments'],
    links: [{ label: 'See the membership', href: 'https://www.bizzowl.com/founder-membership' }],
    featured: true,
  },
  {
    title: 'Client Portal',
    group: 'bizowl',
    subtitle: 'The logged-in product 1,000+ members rely on',
    period: '2026',
    context: 'Client work · Bizowl (WhiteSense Pvt. Ltd.)',
    contributions: [
      'Built the logged-in product that members use to run projects day to day.',
      'Shipped 12+ modules: projects, payments, enquiries, meetings and tickets.',
      'Role-aware access, so every member sees exactly what they are entitled to.',
    ],
    metrics: [
      { value: '1,000+', label: 'Member accounts' },
      { value: '12+', label: 'Portal modules' },
    ],
    image: '/images/bizowl-portal.webp',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'RBAC'],
    links: [{ label: 'Bizowl (login required)', href: 'https://www.bizzowl.com/' }],
    featured: true,
  },

  // ── Personal builds ───────────────────────────────────────────────────────
  {
    title: 'StaySync',
    group: 'personal',
    subtitle: 'Role-based hostel management platform',
    period: 'December 2025',
    contributions: [
      'Cut manual administrative work by 85% by digitising paper workflows.',
      'Engineered 10+ modules with JWT-based RBAC, Redis caching and payments.',
      'Built it to be handed over, with a modular backend the institution can extend.',
    ],
    metrics: [
      { value: '85%', label: 'Less manual effort' },
      { value: '10+', label: 'Core modules' },
      { value: '3', label: 'User roles' },
    ],
    image: '/images/staysync.webp',
    tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT + RBAC'],
    link: 'https://stay-sync-2muq.vercel.app/',
    repo: 'https://github.com/Anuragkumar-687/StaySync',
    featured: true,
  },
  {
    title: 'QuickKart AI',
    group: 'personal',
    subtitle: 'Region-aware intelligent commerce platform',
    period: 'November 2025',
    contributions: [
      'Built 15+ production REST APIs with auth, RBAC, pagination and search.',
      'Wrote a recommendation engine that personalises the catalogue by region.',
      'Kept it fast under load with Redis caching and tuned MongoDB indexing.',
    ],
    metrics: [
      { value: '15+', label: 'Production REST APIs' },
      { value: '200+', label: 'Products via ETL' },
      { value: '5+', label: 'Personalisation modules' },
    ],
    image: '/images/quickkart.webp',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'ETL', 'Recommendations'],
    link: 'https://quick-kart-black.vercel.app',
    repo: 'https://github.com/Anuragkumar-687/QuickKart',
    featured: true,
  },
];

// ─── Open source ──────────────────────────────────────────────────────────────
export type OpenSourceProject = {
  name: string;
  description: string;
  contribution: string;
  areas: string[];
  href: string;
};

export const openSource: OpenSourceProject[] = [
  {
    name: 'Apicurio Registry',
    description:
      'A datastore for standard event schemas and API designs, used to decouple structure from content in event-driven architectures.',
    contribution:
      'Merged and ongoing pull requests across backend infrastructure and event sourcing.',
    areas: ['Distributed Systems', 'Event Sourcing', 'Backend Infrastructure'],
    href: 'https://github.com/Apicurio/apicurio-registry',
  },
  {
    name: 'OpenEverest',
    description:
      'Cloud-native infrastructure tooling for running and operating production database workloads on Kubernetes.',
    contribution:
      'Contributions spanning Kubernetes manifests, cloud-native tooling and backend services.',
    areas: ['Kubernetes', 'Cloud Native', 'Helm'],
    href: 'https://github.com/percona/everest',
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export type SkillCategory = {
  id: string;
  label: string;
  /** Why this cluster matters — keeps the section from being a word cloud. */
  note: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    note: 'Typed and untyped, systems and scripting.',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'HTML', 'CSS'],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    note: 'Where most of my work happens.',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'Django',
      'REST APIs',
      'Postman',
      'Distributed Systems',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    note: 'Interfaces that ship with the backend.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'React Native'],
  },
  {
    id: 'data',
    label: 'Databases & Data',
    note: 'Relational, document and managed.',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Supabase', 'Firebase', 'Prisma ORM'],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    note: 'Getting it running, and keeping it running.',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Kafka', 'Linux', 'Git & GitHub'],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    note: 'Applied, not academic.',
    skills: [
      'Generative AI',
      'RAG',
      'LangChain',
      'LangGraph',
      'Hugging Face',
      'Keras',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'SciPy',
    ],
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────
export type Achievement = {
  id: string;
  title: string;
  metric?: string;
  description: string;
  href?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'leetcode',
    title: 'LeetCode: 430+ problems, 1558 rating',
    metric: '430+',
    description:
      'Solved 430+ problems and reached a contest rating of 1558, sharpening algorithmic problem-solving, optimisation and debugging.',
    href: 'https://leetcode.com/u/Anurag_Kumar2005/',
  },
  {
    id: 'open-source',
    title: 'Open Source Contributor',
    metric: '2 projects',
    description:
      'Merged and ongoing pull requests to Apicurio Registry and OpenEverest, covering distributed systems, event sourcing, backend infrastructure, Kubernetes and cloud-native development.',
    href: 'https://github.com/Anuragkumar-687',
  },
  {
    id: 'flipkart-grid',
    title: 'Flipkart GRiD 8.0 semifinalist',
    metric: 'Semifinal',
    description:
      "Advanced to the semifinal round of Flipkart's national Software Development Engineering challenge.",
  },
  {
    id: 'hack-the-hunt',
    title: 'Hack the Hunt winner',
    metric: '1st place',
    description:
      'Won a coding-based technical treasure hunt built around Git, Linux, debugging and problem-solving challenges.',
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export type Education = {
  degree: string;
  field?: string;
  institution: string;
  location?: string;
  period: string;
  grade: string;
};

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence',
    institution: 'Newton School of Technology, Rishihood University',
    location: 'Sonipat, India',
    period: '2024 to 2028',
    grade: '7.0 / 10.0',
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: 'Montfort Academy',
    period: '2022 to 2023',
    grade: '73.2%',
  },
  {
    degree: 'Matriculation (Class X)',
    institution: "Saint Joseph's School",
    period: '2020 to 2021',
    grade: '85.6%',
  },
];

// ─── What I can be hired for ──────────────────────────────────────────────────
// Guidebook §2: a portfolio is a sales page. State the offer plainly.
export type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    title: 'A full-stack product, built and shipped',
    description:
      'You describe the business, I deliver the working software: database, APIs, interface and deployment. The way I built Bizowl and StaySync.',
    deliverables: ['Full product build', 'Database & API design', 'Admin dashboards', 'Deployed and handed over'],
  },
  {
    title: 'Payments that actually collect',
    description:
      'Checkout, subscriptions and memberships wired end to end, with the verification and access logic behind them. Real money has moved through the integrations I have shipped.',
    deliverables: ['Razorpay integration', 'Subscriptions & tiers', 'Entitlement logic', 'Invoices & receipts'],
  },
  {
    title: 'AI features that earn their place',
    description:
      'Recommendations, retrieval and assistants wired into the product properly, not bolted on. I built the region-aware engine behind QuickKart AI and study AI at degree level.',
    deliverables: ['RAG & document Q&A', 'Recommendation engines', 'LLM integration', 'LangChain & LangGraph'],
  },
];

// ─── Positioning quote ────────────────────────────────────────────────────────
// The reference site gives a client testimonial this slot. Without real client
// quotes to show, the honest equivalent is a plain statement of how I work —
// nothing here is attributed to anyone else.
export const positioningQuote = {
  text: 'Anything can be made to work once. The engineering is in what happens on the thousandth request, on the payment that fails halfway, and on the one user who should never have had access.',
  attribution: 'How I think about building',
};

// ─── Toolchain ────────────────────────────────────────────────────────────────
// Shown as a single row, the way the reference site shows its tools.
// `code` is the badge label — slicing the name gives nonsense ("Ty", "No"),
// so the abbreviations are written out.
export const toolchain: { name: string; code: string }[] = [
  { name: 'TypeScript', code: 'TS' },
  { name: 'Python', code: 'PY' },
  { name: 'Go', code: 'GO' },
  { name: 'Node.js', code: 'JS' },
  { name: 'Kubernetes', code: 'K8' },
  { name: 'PostgreSQL', code: 'PG' },
  { name: 'Docker', code: 'DK' },
];
