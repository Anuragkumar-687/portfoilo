// ─── Site Configuration ───────────────────────────────────────────────────────
export const siteConfig = {
  name: 'Anurag Kumar',
  title: 'Full Stack Developer & AI Undergraduate',
  tagline: 'Building scalable web applications and solving complex problems.',
  description:
    'Computer Science (AI) student with strong problem-solving skills and experience building full-stack applications using Next.js, Node.js, Express.js, and MongoDB.',
  mainNav: [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Education', href: '#education' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Achievements', href: '#achievements' },
    { title: 'Contact', href: '#contact' },
  ],
  links: {
    github: 'https://github.com/Anuragkumar-687',
    linkedin: 'https://www.linkedin.com/in/anurag-kumar121',
    leetcode: 'https://leetcode.com/u/Anurag_Kumar2005/',
    email: 'mailto:anuragkumar82108@gmail.com',
  },
};

// ─── Hero Stats ───────────────────────────────────────────────────────────────
export const heroStats = [
  { value: '400+', label: 'LeetCode Problems' },
  { value: '1558', label: 'Contest Rating' },
  { value: '2', label: 'Production Projects' },
  { value: '1', label: 'Hackathon Win' },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  impact?: string;
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'StaySync',
    subtitle: 'Smart Hostel Management System',
    description:
      'Engineered a scalable full-stack Smart Hostel & PG Management System with real-time workflow automation. Features JWT-based RBAC authentication, QR gate passes, Razorpay payment gateway, automated notifications, and a comprehensive analytics dashboard.',
    image: '/images/staysync.png',
    tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT & RBAC', 'Razorpay'],
    features: [
      'JWT Authentication & RBAC',
      'QR Gate Pass System',
      'Razorpay Payment Integration',
      'Analytics Dashboard',
      'Automated Notifications',
    ],
    impact: 'Reduced manual hostel operations by 85%',
    link: 'https://stay-sync-2muq.vercel.app/',
    repo: 'https://github.com/Anuragkumar-687/StaySync',
    featured: true,
  },
  {
    title: 'QuickKart',
    subtitle: 'Full Stack E-Commerce Platform',
    description:
      'Developed a full-stack e-commerce platform using Next.js, Express, and MongoDB with responsive design. Built an intuitive UI with product filtering, dynamic cart system, and secure user authentication.',
    image: '/images/quickkart.png',
    tags: ['Next.js', 'Express', 'MongoDB', 'Prisma ORM', 'REST APIs'],
    features: [
      'Secure Authentication',
      'Product Management',
      'Order Management',
      'Admin Dashboard',
      'RESTful APIs',
    ],
    impact: 'Full-featured production e-commerce platform',
    link: 'https://quick-kart-black.vercel.app',
    repo: 'https://github.com/Anuragkumar-687/QuickKart',
    featured: true,
  },
  {
    title: 'SmartCampus',
    subtitle: 'Academic Management System',
    description:
      'Centralized platform streamlining institutional operations including attendance, course enrollment, assignments, and grading with RBAC for Admin, Faculty, and Students.',
    image: '/images/smartcampus.png',
    tags: ['Next.js', 'TypeScript', 'JWT Auth', 'RBAC', 'NeonDB'],
    features: [
      'Attendance Tracking',
      'Course Enrollment',
      'Role-based Access',
      'Grading System',
    ],
    link: 'https://smartcampussystem.vercel.app/',
    repo: 'https://github.com/Anuragkumar-687/smartcampussystem',
    featured: false,
  },
  {
    title: 'Food Website',
    subtitle: 'Responsive Food Ordering UI',
    description:
      'Responsive food ordering website with smooth menu navigation and a dynamic cart system.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: ['Dynamic Cart', 'Menu Navigation', 'Responsive Layout'],
    link: 'https://portfolio-3x92.vercel.app/',
    repo: 'https://github.com/Anuragkumar-687/Food-Website',
    featured: false,
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export type Education = {
  degree: string;
  field: string;
  institution: string;
  shortInstitution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description: string;
};

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence',
    institution: 'Newton School of Technology, Rishihood University',
    shortInstitution: 'Newton School of Technology',
    location: 'Sonipat, India',
    startDate: '2024',
    endDate: '2028',
    gpa: '7.0',
    description:
      'Pursuing B.Tech in AI with focus on full-stack development, data structures, algorithms, and machine learning. Active member of the coding club with consistent coding practice.',
  },
  {
    degree: 'Intermediate (Class XII)',
    field: 'Science',
    institution: 'Montfort Academy',
    shortInstitution: 'Montfort Academy',
    location: 'India',
    startDate: '2022',
    endDate: '2023',
    gpa: '73.2%',
    description: 'Completed higher secondary education in science stream.',
  },
  {
    degree: 'Matriculation (Class X)',
    field: 'General',
    institution: "Saint Joseph's School",
    shortInstitution: "Saint Joseph's School",
    location: 'India',
    startDate: '2020',
    endDate: '2021',
    gpa: '85.6%',
    description: 'Completed secondary education with strong academic performance.',
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export type SkillCategory = {
  id: string;
  label: string;
  icon: string;
  skills: string[];
  color: 'cyan' | 'purple' | 'white';
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    icon: '{ }',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java'],
    color: 'cyan',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⬡',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
    color: 'purple',
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚡',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
    color: 'cyan',
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '◈',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase', 'Firebase'],
    color: 'purple',
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: '⚙',
    skills: ['Git', 'GitHub', 'Docker', 'Prisma ORM'],
    color: 'cyan',
  },
  {
    id: 'ai',
    label: 'AI & ML',
    icon: '◈',
    skills: ['Generative AI', 'Hugging Face', 'RAG'],
    color: 'purple',
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────
export type Achievement = {
  id: string;
  icon: string;
  title: string;
  metric?: string;
  description: string;
  color: 'cyan' | 'purple';
};

export const achievements: Achievement[] = [
  {
    id: 'leetcode-problems',
    icon: '⚡',
    title: '400+ LeetCode Problems Solved',
    metric: '400+',
    description:
      'Solved 400+ DSA problems covering arrays, trees, graphs, dynamic programming, greedy algorithms, and advanced interview topics.',
    color: 'cyan',
  },
  {
    id: 'contest-rating',
    icon: '🏆',
    title: 'LeetCode Contest Rating 1558',
    metric: '1558',
    description:
      'Achieved a contest rating of 1558 and ranked within the top 30% of participants globally.',
    color: 'purple',
  },
  {
    id: 'hackathon',
    icon: '🥇',
    title: 'Hack The Hunt Winner',
    metric: '1st',
    description:
      'Won a coding-based treasure hunt competition involving GitHub workflows, terminal commands, debugging, and problem solving.',
    color: 'cyan',
  },
  {
    id: 'projects',
    icon: '🚀',
    title: 'Production-Level Full Stack Projects',
    metric: '2+',
    description:
      'Built StaySync and QuickKart with authentication, APIs, database integration, and scalable architecture.',
    color: 'purple',
  },
  {
    id: 'streak',
    icon: '🔥',
    title: '100 Days Coding Badge',
    metric: '100+',
    description:
      'Maintained long-term consistency in coding and problem solving with a 100-day streak badge.',
    color: 'cyan',
  },
  {
    id: 'club',
    icon: '👥',
    title: 'Active Coding Club Member',
    description:
      'Participate in coding contests, peer learning sessions, and technical discussions at the college coding club.',
    color: 'purple',
  },
];

export const achievementStats = [
  { value: '400+', label: 'Problems Solved' },
  { value: '1558', label: 'Contest Rating' },
  { value: '2', label: 'Major Projects' },
  { value: '1', label: 'Hackathon Win' },
];

// Legacy skills export for backwards compatibility
export type Skill = {
  name: string;
  level: number;
  category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
  { name: 'JavaScript', level: 9, category: 'technical' },
  { name: 'TypeScript', level: 8, category: 'technical' },
  { name: 'Python', level: 8, category: 'technical' },
  { name: 'Java', level: 7, category: 'technical' },
  { name: 'React', level: 9, category: 'software' },
  { name: 'Next.js', level: 9, category: 'software' },
  { name: 'Node.js', level: 8, category: 'software' },
  { name: 'Express.js', level: 8, category: 'software' },
  { name: 'MongoDB', level: 8, category: 'software' },
  { name: 'MySQL', level: 8, category: 'software' },
  { name: 'PostgreSQL', level: 7, category: 'software' },
  { name: 'Prisma ORM', level: 8, category: 'software' },
  { name: 'Git', level: 9, category: 'software' },
  { name: 'GitHub', level: 9, category: 'software' },
  { name: 'Problem Solving', level: 8, category: 'soft' },
  { name: 'Team Collaboration', level: 9, category: 'soft' },
  { name: 'English', level: 8, category: 'language' },
  { name: 'Hindi', level: 10, category: 'language' },
];
