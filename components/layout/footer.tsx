import Link from 'next/link';
import { Linkedin, Github, Mail, Code2 } from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Footer() {
	const socialLinks = [
		{ icon: <Mail className="h-5 w-5" />, href: siteConfig.links.email, label: 'Email' },
		{ icon: <Linkedin className="h-5 w-5" />, href: siteConfig.links.linkedin, label: 'LinkedIn' },
		{ icon: <Github className="h-5 w-5" />, href: siteConfig.links.github, label: 'GitHub' },
		{ icon: <Code2 className="h-5 w-5" />, href: siteConfig.links.leetcode, label: 'LeetCode' },
	];

	const navColumns = [
		{
			title: 'About',
			links: [
				{ title: 'About Me', href: '/about' },
				{ title: 'Education', href: '/education' },
				{ title: 'Skills', href: '/skills' },
			],
		},
		{
			title: 'Work',
			links: [
				{ title: 'Projects', href: '/projects' },
			],
		},
		{
			title: 'Connect',
			links: [
				{ title: 'Contact', href: '/contact' },
				{ title: 'Resume', href: '/resume.pdf', download: true },
			],
		},
	];

	return (
		<footer className="bg-card py-8 border-t">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
					<div className="md:col-span-1">
						<Link href="/" className="inline-block group">
							<span className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
								Portfolio
							</span>
						</Link>
						<p className="mt-5 text-sm text-muted-foreground leading-relaxed">
							A professional portfolio showcasing my skills, projects, and achievements in engineering.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							{socialLinks.map((link, index) => (
								<Button
									key={index}
									size="icon"
									variant="outline"
									asChild
									className="hover:scale-110 hover:border-primary transition-all duration-200"
								>
									<Link href={link.href} aria-label={link.label} target="_blank" rel="noreferrer">
										{link.icon}
									</Link>
								</Button>
							))}
						</div>
					</div>

					<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
						{navColumns.map((column, index) => (
							<div key={index}>
								<h3 className="font-semibold text-base mb-4 text-foreground">{column.title}</h3>
								<ul className="space-y-3">
									{column.links.map((link, linkIndex) => (
										<li key={linkIndex}>
											<Link
												href={link.href}
												className="text-muted-foreground hover:text-primary text-sm transition-colors relative inline-block group"
												{...(link.download ? { download: true } : {})}
											>
												{link.title}
												<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}