'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Trophy, BookOpen, Cpu } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const aboutStats = [
  { icon: Code2, value: '400+', label: 'LeetCode Problems', color: '#14B8A6' },
  { icon: Trophy, value: '1558', label: 'Contest Rating', color: '#8B5CF6' },
  { icon: Trophy, value: '🥇', label: 'Hackathon Winner', color: '#14B8A6', isEmoji: true },
  { icon: BookOpen, value: '3rd', label: 'Year B.Tech AI', color: '#8B5CF6' },
];

function StatCard({
  icon: Icon,
  value,
  label,
  color,
  isEmoji,
  delay,
}: {
  icon: any;
  value: string;
  label: string;
  color: string;
  isEmoji?: boolean;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-5 flex flex-col items-center text-center group glass-hover"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-sm font-bold"
        style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}
      >
        {isEmoji ? value : <Icon className="w-5 h-5" />}
      </div>
      {!isEmoji && (
        <p className="text-2xl font-extrabold text-white mb-0.5" style={{ color }}>
          {value}
        </p>
      )}
      {isEmoji && (
        <p className="text-sm font-bold text-white mb-0.5">Winner</p>
      )}
      <p className="text-white/40 text-xs font-medium">{label}</p>
    </motion.div>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg-fine opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="section-label">About Me</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="section-heading mb-16"
        >
          Passionate about{' '}
          <span className="text-gradient-cyan">building things</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden max-w-sm mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div
                className="absolute inset-0 rounded-2xl z-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(20,184,166,0.1) 0%, transparent 50%, rgba(139,92,246,0.1) 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              />
              <Image
                src="/images/profile-pic.jpg"
                alt="Anurag Kumar"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505]/80 to-transparent z-10" />
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(139,92,246,0.15))',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
            />
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl -z-10"
              style={{
                background: 'rgba(20,184,166,0.08)',
                border: '1px solid rgba(20,184,166,0.15)',
              }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Computer Science (AI) student with strong problem-solving skills and experience
              building scalable full-stack applications using{' '}
              <span className="text-[#14B8A6] font-medium">Next.js</span>,{' '}
              <span className="text-[#14B8A6] font-medium">Node.js</span>,{' '}
              <span className="text-[#14B8A6] font-medium">Express.js</span>, and{' '}
              <span className="text-[#14B8A6] font-medium">MongoDB</span>.
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-8">
              I believe in shipping production-grade software — with clean architecture, proper
              authentication, scalable databases, and great UX. Currently in my 3rd year at Newton
              School of Technology, Rishihood University, with a focus on AI and web systems.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {['Problem Solver', 'Full Stack', 'AI Enthusiast', 'Open Source', 'DSA'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{
                    background: 'rgba(20,184,166,0.06)',
                    borderColor: 'rgba(20,184,166,0.2)',
                    color: 'rgba(20,184,166,0.9)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {aboutStats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} delay={0.2 + i * 0.08} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
