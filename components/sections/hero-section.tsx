'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, ChevronDown } from 'lucide-react';
import { siteConfig, heroStats } from '@/lib/constants';

const floatingIcons = [
  { name: 'TS', color: '#3178C6', bg: 'rgba(49,120,198,0.15)', delay: 0, position: { top: '12%', right: '8%' } },
  { name: 'NX', color: '#14B8A6', bg: 'rgba(20,184,166,0.15)', delay: 0.5, position: { top: '30%', right: '-4%' } },
  { name: 'MG', color: '#47A248', bg: 'rgba(71,162,72,0.15)', delay: 1, position: { bottom: '28%', right: '2%' } },
  { name: 'GH', color: '#888', bg: 'rgba(136,136,136,0.15)', delay: 0.8, position: { bottom: '12%', right: '18%' } },
  { name: 'PY', color: '#F7C948', bg: 'rgba(247,201,72,0.15)', delay: 0.3, position: { top: '18%', left: '2%' } },
  { name: 'JS', color: '#F7DF1E', bg: 'rgba(247,223,30,0.15)', delay: 0.7, position: { bottom: '22%', left: '6%' } },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial spotlight */}
      <div className="absolute inset-0 hero-spotlight pointer-events-none" />
      <div className="absolute inset-0 purple-spotlight pointer-events-none" />

      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#14B8A6]/25 bg-[#14B8A6]/8 mb-6 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
              <span className="text-[#14B8A6] text-xs font-medium tracking-wide">
                Open to Internships & Full-time
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-3"
            >
              Anurag{' '}
              <span className="text-gradient-cyan inline-block">Kumar</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg sm:text-xl text-white/60 font-medium mb-4"
            >
              Full Stack Developer &amp; AI Undergraduate
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-base text-white/40 max-w-md leading-relaxed mb-8"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => handleScroll('#projects')}
                className="btn-primary"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/resume.pdf"
                download="Resume-Anurag-Kumar.pdf"
                className="btn-outline"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-3 mb-12"
            >
              {[
                { href: siteConfig.links.github, icon: Github, label: 'GitHub' },
                { href: siteConfig.links.linkedin, icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg border border-white/[0.08] text-white/40 hover:text-white/90 hover:border-[#14B8A6]/40 hover:bg-[#14B8A6]/6 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <span className="text-white/20 text-xs ml-1">anuragkumar82108@gmail.com</span>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]"
            >
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + i * 0.07 }}
                  className="flex flex-col items-center justify-center p-4 bg-[#050505] hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-white/40 text-xs text-center font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative flex items-center justify-center"
          >
            {/* Outer glow ring */}
            <div
              className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full pointer-events-none animate-glow-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)',
              }}
            />

            {/* Rotating border */}
            <div
              className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full border border-dashed border-[#14B8A6]/20 animate-spin-slow pointer-events-none"
              style={{ width: '22rem', height: '22rem' }}
            />
            <div
              className="absolute rounded-full border border-dashed border-[#8B5CF6]/15 animate-spin-slow pointer-events-none"
              style={{
                width: '26rem',
                height: '26rem',
                animationDuration: '12s',
                animationDirection: 'reverse',
              }}
            />

            {/* Profile card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 0 0 1px rgba(20,184,166,0.2), 0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(20,184,166,0.08)',
                }}
              >
                {/* Inner glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent z-10 pointer-events-none" />
                <Image
                  src="/images/profile-focus.png"
                  alt="Anurag Kumar — Full Stack Developer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 256px, 288px"
                />
              </div>
            </motion.div>

            {/* Floating tech icons */}
            {floatingIcons.map((icon, i) => (
              <motion.div
                key={icon.name}
                className="absolute z-20 pointer-events-none"
                style={icon.position as any}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + icon.delay, duration: 0.5, ease: 'backOut' }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: icon.delay,
                  }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold border"
                  style={{
                    background: icon.bg,
                    borderColor: `${icon.color}30`,
                    color: icon.color,
                    backdropFilter: 'blur(8px)',
                    boxShadow: `0 4px 20px ${icon.color}20`,
                  }}
                >
                  {icon.name}
                </motion.div>
              </motion.div>
            ))}

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-6 -left-6 z-20 glass-card px-4 py-3"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 flex items-center justify-center">
                  <span className="text-[#8B5CF6] text-xs font-bold">🏆</span>
                </div>
                <div>
                  <p className="text-white/90 text-xs font-semibold">Hackathon Winner</p>
                  <p className="text-white/40 text-[10px]">Hack The Hunt</p>
                </div>
              </div>
            </motion.div>

            {/* LeetCode badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute top-6 -right-4 z-20 glass-card px-4 py-3"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#14B8A6]/20 border border-[#14B8A6]/30 flex items-center justify-center">
                  <span className="text-[#14B8A6] text-xs font-bold">⚡</span>
                </div>
                <div>
                  <p className="text-white/90 text-xs font-semibold">400+ Problems</p>
                  <p className="text-white/40 text-[10px]">LeetCode</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/25 text-xs tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-white/25" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
