'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Github, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { siteConfig } from '@/lib/constants';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Create mailto link to open user's email client
		const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
		const mailtoLink = `${siteConfig.links.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

		window.location.href = mailtoLink;
		setFormData({ name: '', email: '', subject: '', message: '' });
	};

	const contactLinks = [
		{ icon: Mail, href: siteConfig.links.email, label: siteConfig.links.email.replace('mailto:', '') },
		{ icon: Linkedin, href: siteConfig.links.linkedin, label: 'anurag-kumar121' },
		{ icon: Github, href: siteConfig.links.github, label: 'Anuragkumar-687' },
		{ icon: Code2, href: siteConfig.links.leetcode, label: 'Anurag_Kumar2005' },
	];

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto"
				>
					<motion.div variants={fadeIn('down', 0.2)} className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
						<p className="text-lg text-muted-foreground">
							Have a question or want to work together? Feel free to reach out!
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div variants={fadeIn('right', 0.3)}>
							<Card className="card-gradient h-full">
								<CardContent className="p-6">
									<h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
									<div className="space-y-4">
										{contactLinks.map((link, index) => {
											const Icon = link.icon;
											const isEmail = link.icon === Mail;

											return (
												<a
													key={index}
													href={link.href}
													{...(!isEmail && { target: '_blank', rel: 'noopener noreferrer' })}
													className="flex items-center group"
												>
													<Icon className="h-5 w-5 text-primary mr-3 group-hover:text-primary transition-colors" />
													<span className="text-muted-foreground group-hover:text-primary transition-colors">
														{link.label}
													</span>
												</a>
											);
										})}
										<div className="flex items-center">
											<MapPin className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">Sonipat, Haryana</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={fadeIn('left', 0.3)}>
							<form onSubmit={handleFormSubmit} className="space-y-4">
								<Input
									placeholder="Your Name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									required
								/>
								<Input
									type="email"
									placeholder="Your Email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
								/>
								<Input
									placeholder="Subject"
									name="subject"
									value={formData.subject}
									onChange={handleInputChange}
									required
								/>
								<Textarea
									placeholder="Your Message"
									name="message"
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
				</motion.div>
			</div>
		</div>
	);
}