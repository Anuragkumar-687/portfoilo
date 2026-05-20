// Site configuration and constants
export const siteConfig = {
	name: "Anurag's Portfolio",
	description: 'A professional portfolio website template for engineering students.',
	mainNav: [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
		{ title: 'Education', href: '/education' },
		{ title: 'Skills', href: '/skills' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Contact', href: '/contact' },
	],
	links: {
		github: 'https://github.com/Anuragkumar-687',
		linkedin: 'https://www.linkedin.com/in/anurag-kumar121',
		leetcode: 'https://leetcode.com/u/Anurag_Kumar2005/',
		email: 'mailto:anuragkumar82108@gmail.com',
	},
};

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

// My projects
export const projects: Project[] = [
	{
		title: 'StaySync',
		description:
			'Engineered a scalable full-stack Smart Hostel & PG Management System with real-time workflow automation. Features JWT-based RBAC authentication, QR gate passes, Razorpay payment gateway, automated notifications, and a comprehensive analytics dashboard, digitizing operations and reducing manual work by 85%.',
		image: '/images/staysync.png',
		tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT & RBAC', 'Razorpay'],
		link: 'https://stay-sync-2muq.vercel.app/',
		repo: 'https://github.com/Anuragkumar-687/StaySync',
	},
	{
		title: 'QuickKart',
		description:
			'Developed a full-stack e-commerce platform using Next.js, Express, and MongoDB with responsive design. Built an intuitive UI with product filtering, dynamic cart system, and secure user authentication.',
		image: '/images/quickkart.png',
		tags: ['Next.js', 'Express', 'MongoDB', 'Prisma ORM', 'RESTful APIs'],
		link: 'https://ecommercee-webiste.vercel.app/',
		repo: 'https://github.com/Anuragkumar-687/QuickKart',
	},
	{
		title: 'SmartCampus',
		description:
			'Developed a centralized Academic Management System to streamline institutional operations including attendance tracking, course enrollment, assignments, and grading. Features a modular, scalable architecture supporting role-aware access control (RBAC) for Admin, Faculty, and Students, eliminating process fragmentation.',
		image: '/images/smartcampus.png',
		tags: ['Next.js', 'React', 'TypeScript', 'JWT Auth', 'RBAC', 'NeonDB'],
		link: 'https://smartcampussystem.vercel.app/',
		repo: 'https://github.com/Anuragkumar-687/smartcampussystem',
	},
	{
		title: 'Food Website',
		description:
			'Developed a responsive food ordering website using HTML, CSS, and JavaScript. Built an intuitive UI with smooth menu navigation and a dynamic cart system.',
		image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
		tags: ['HTML', 'CSS', 'JavaScript'],
		link: 'https://portfolio-3x92.vercel.app/',
		repo: 'https://github.com/Anuragkumar-687/Food-Website',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

// Educational background
export const education: Education[] = [
	{
		degree: 'Bachelor of Technology',
		field: 'Artificial Intelligence',
		institution: 'Newton School Of Technology, Rishihood University',
		location: 'Sonipat, India',
		startDate: '2024',
		endDate: '2028',
		gpa: '6.85/10.0',
		achievements: [],
	},
	{
		degree: 'Intermediate (Class XII)',
		field: 'Science',
		institution: 'Montfort Academy',
		location: 'India',
		startDate: '2022',
		endDate: '2023',
		gpa: '73.2%',
		achievements: [],
	},
	{
		degree: 'Matriculation (Class X)',
		field: 'General',
		institution: "Saint Joseph's School",
		location: 'India',
		startDate: '2020',
		endDate: '2021',
		gpa: '85.6%',
		achievements: [],
	},
];

export type Skill = {
	name: string;
	level: number;
	category: 'technical' | 'software' | 'soft' | 'language';
};

// Skills organized by category
export const skills: Skill[] = [
	// Programming languages
	{ name: 'JavaScript', level: 9, category: 'technical' },
	{ name: 'CSS', level: 9, category: 'technical' },
	{ name: 'HTML', level: 9, category: 'technical' },
	{ name: 'Python', level: 9, category: 'technical' },

	// Frameworks and tools
	{ name: 'MongoDB', level: 8, category: 'software' },
	{ name: 'MySQL', level: 8, category: 'software' },
	{ name: 'Express JS', level: 8, category: 'software' },
	{ name: 'Node.js', level: 8, category: 'software' },
	{ name: 'React', level: 8, category: 'software' },
	{ name: 'Next.js', level: 7, category: 'software' },
	{ name: 'Prisma ORM', level: 8, category: 'software' },
	{ name: 'Figma', level: 7, category: 'software' },
	{ name: 'Pandas', level: 7, category: 'software' },
	{ name: 'Excel', level: 8, category: 'software' },
	{ name: 'Git', level: 8, category: 'software' },
	{ name: 'GitHub', level: 8, category: 'software' },

	// Soft skills
	{ name: 'Problem Solving', level: 7, category: 'soft' },
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Project Management', level: 8, category: 'soft' },
	{ name: 'Technical Writing', level: 8, category: 'soft' },

	// Languages
	{ name: 'English', level: 7, category: 'language' },
	{ name: 'Hindi', level: 9, category: 'language' },
];
