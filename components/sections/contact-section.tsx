'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Code2, Send, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anuragkumar82108@gmail.com',
    href: siteConfig.links.email,
    color: '#14B8A6',
    description: 'Drop me a message',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'anurag-kumar121',
    href: siteConfig.links.linkedin,
    color: '#0A66C2',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Anuragkumar-687',
    href: siteConfig.links.github,
    color: '#fff',
    description: 'Check out my code',
  },
  {
    icon: Code2,
    label: 'LeetCode',
    value: 'Anurag_Kumar2005',
    href: siteConfig.links.leetcode,
    color: '#FFA116',
    description: 'View DSA profile',
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `${siteConfig.links.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      setSending(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(20,184,166,0.04) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="section-label">Contact</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="section-heading mb-5"
        >
          Let's Build Something{' '}
          <span className="text-gradient-cyan">Amazing Together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/40 text-base mb-16 max-w-lg"
        >
          Open to software engineering internships, full-stack development opportunities, and
          collaborations. Let's connect!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              const isEmail = link.href.startsWith('mailto');
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={isEmail ? undefined : '_blank'}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    borderColor: 'rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = `${link.color}08`;
                    el.style.borderColor = `${link.color}30`;
                    el.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(255,255,255,0.025)';
                    el.style.borderColor = 'rgba(255,255,255,0.06)';
                    el.style.transform = 'translateX(0)';
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${link.color}12`,
                      border: `1px solid ${link.color}25`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: link.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/80 font-semibold text-sm">{link.label}</p>
                    <p className="text-white/35 text-xs truncate font-mono">{link.value}</p>
                  </div>
                  <span className="text-white/20 text-xs group-hover:text-white/40 transition-colors">
                    {link.description} →
                  </span>
                </motion.a>
              );
            })}

            {/* Location */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl border mt-4"
              style={{ background: 'rgba(255,255,255,0.015)', borderColor: 'rgba(255,255,255,0.04)' }}
            >
              <MapPin className="w-4 h-4 text-white/30 flex-shrink-0" />
              <p className="text-white/30 text-xs">Sonipat, Haryana, India — Open to Remote</p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-7 rounded-2xl border"
              style={{
                background: 'rgba(255,255,255,0.025)',
                borderColor: 'rgba(255,255,255,0.06)',
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-xs font-medium block mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    required
                    className="input-premium"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs font-medium block mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    required
                    className="input-premium"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/40 text-xs font-medium block mb-1.5">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                  required
                  className="input-premium"
                />
              </div>

              <div>
                <label className="text-white/40 text-xs font-medium block mb-1.5">Message</label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  required
                  rows={5}
                  className="input-premium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
