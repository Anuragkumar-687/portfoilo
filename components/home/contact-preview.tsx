'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeader } from '@/components/ui/section-header';
import { fadeIn } from '@/lib/motion';
import { siteConfig } from '@/lib/constants';

export function ContactPreview() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Open default email client with pre-filled message
		const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
		const mailtoLink = `${siteConfig.links.email}?subject=Portfolio Contact&body=${encodeURIComponent(emailBody)}`;

		window.location.href = mailtoLink;
		setFormData({ name: '', email: '', message: '' });
	};

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Get In Touch"
					description="Interested in working together or have a question? Feel free to reach out!"
					className="text-center"
				/>

				<motion.div
					variants={fadeIn('up', 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="max-w-md mx-auto mt-10"
				>
					<form onSubmit={handleFormSubmit} className="space-y-4">
						<Input
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleInputChange}
							required
						/>
						<Input
							name="email"
							type="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleInputChange}
							required
						/>
						<Textarea
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleInputChange}
							required
							className="min-h-[150px]"
						/>
						<Button type="submit" className="w-full">
							Send Message <Send className="ml-2 h-4 w-4" />
						</Button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}