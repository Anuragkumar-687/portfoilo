'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { skills } from '@/lib/constants';
import { staggerContainer, fadeIn } from '@/lib/motion';

export function SkillsPreview() {
	// Combine Technical and Software skills for the main preview
	const displaySkills = skills.filter(
		skill => skill.category === 'technical' || skill.category === 'software'
	);

	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="My Tech Stack"
					description="A collection of the languages, tools, and frameworks I use to build scalable applications."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10"
				>
					{displaySkills.map((skill, index) => (
						<motion.div
							key={index}
							variants={fadeIn('up', 0.1 * index)}
							whileHover={{ scale: 1.05 }}
							className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-primary transition-colors"
						>
							<span className="font-semibold text-sm md:text-base">{skill.name}</span>
						</motion.div>
					))}
				</motion.div>

				<div className="flex justify-center mt-10">
					<Button asChild>
						<Link href="/skills">
							View All Skills <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}