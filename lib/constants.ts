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
  role: 'Software Developer',
  discipline: 'Backend & Full Stack Engineering',

  /** The one-line promise. Outcome first, stack second. */
  headline: 'I build backend systems that survive production.',

  /** Supporting sentence — what a visitor gets by working with him. */
  subheadline:
    'Software developer specialising in backend engineering, distributed systems and REST APIs. I ship production-ready platforms, and I contribute to the open-source infrastructure other teams depend on.',

  /** Short version used in metadata and cards. */
  summary:
    'Software Developer with hands-on experience building scalable, production-ready applications and contributing to open-source software. Backend engineering, distributed systems, REST API development and full-stack delivery.',

  location: 'Sonipat, Haryana, India',
  availability: 'Open to full-time SDE roles and internships, remote or on-site',

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
  problem: string;
  /** What was actually engineered. */
  build: string;
  /** Measurable result. */
  impact: string;
  /** Headline numbers for the card. */
  metrics: { value: string; label: string }[];
  image?: string;
  tags: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'StaySync',
    subtitle: 'Role-based hostel management platform',
    period: 'December 2025',
    problem:
      'Room allocation, complaints, gate passes, payments and attendance were all handled by hand, across paper registers and spreadsheets. There was no audit trail, and no way for an administrator to see what was happening.',
    build:
      'Engineered a role-based platform with 10+ core modules serving students, administrators and security staff. Built on Next.js, Node.js, Express.js and MongoDB with JWT-based RBAC authentication, Redis caching, Razorpay payments, automated notifications and REST APIs.',
    impact:
      'Digitised hostel workflows and cut manual administrative effort by 85%, while adding secure access control and a modular backend the institution can extend.',
    metrics: [
      { value: '85%', label: 'Less manual effort' },
      { value: '10+', label: 'Core modules' },
      { value: '3', label: 'User roles' },
    ],
    image: '/images/staysync.webp',
    tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT + RBAC', 'Razorpay'],
    link: 'https://stay-sync-2muq.vercel.app/',
    repo: 'https://github.com/Anuragkumar-687/StaySync',
    featured: true,
  },
  {
    title: 'QuickKart AI',
    subtitle: 'Region-aware intelligent commerce platform',
    period: 'November 2025',
    problem:
      'Generic storefronts show every shopper the same catalogue. What is actually selling near you, right now, never reaches the page, and cataloguing products by hand does not scale.',
    build:
      'Built an AI-powered commerce platform that ingests 200+ products from 2 external APIs through automated ETL pipelines, exposed via 15+ production REST APIs with JWT auth, RBAC, server-side pagination, filtering, search, reviews, wishlist and secure checkout. A region-aware recommendation engine reads 4+ behavioural signals to drive 5+ personalisation modules: Trending Near You, Popular in Your Region, Recommended for You, Recently Viewed and Frequently Bought Together.',
    impact:
      'An event-driven analytics pipeline with Redis caching, optimised MongoDB indexing and asynchronous event processing keeps API performance and product ranking stable under high traffic.',
    metrics: [
      { value: '15+', label: 'Production REST APIs' },
      { value: '200+', label: 'Products via ETL' },
      { value: '5+', label: 'Personalisation modules' },
    ],
    image: '/images/quickkart.webp',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'ETL', 'Recommendation Engine', 'JWT + RBAC'],
    link: 'https://quick-kart-black.vercel.app',
    repo: 'https://github.com/Anuragkumar-687/QuickKart',
    featured: true,
  },
  {
    title: 'SmartCampus',
    subtitle: 'Academic management system',
    problem:
      'Attendance, enrolment, assignments and grading lived in disconnected tools with no single view for faculty or students.',
    build:
      'A centralised platform with role-based access for admins, faculty and students, covering attendance tracking, course enrolment and grading.',
    impact: 'One system of record for institutional academic operations.',
    metrics: [
      { value: '3', label: 'Roles' },
      { value: '4', label: 'Core modules' },
    ],
    image: '/images/smartcampus.webp',
    tags: ['Next.js', 'TypeScript', 'NeonDB', 'JWT Auth', 'RBAC'],
    link: 'https://smartcampussystem.vercel.app/',
    repo: 'https://github.com/Anuragkumar-687/smartcampussystem',
    featured: false,
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
    title: 'Backend & API engineering',
    description:
      'Production REST APIs with authentication, role-based access, caching and the indexing work that keeps them fast under load.',
    deliverables: ['REST API design', 'Auth & RBAC', 'Redis caching', 'Database modelling'],
  },
  {
    title: 'Full-stack product build',
    description:
      'An entire product from schema to screen, the kind of multi-role platform that StaySync and QuickKart AI are.',
    deliverables: ['Next.js + Node.js', 'Payments & notifications', 'Admin dashboards', 'Deployment'],
  },
  {
    title: 'Data pipelines & integrations',
    description:
      'Automated ETL from third-party APIs, event-driven processing and the analytics layer that makes the data useful.',
    deliverables: ['ETL pipelines', 'Third-party integrations', 'Event processing', 'Recommendations'],
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
