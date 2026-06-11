'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories, type SkillCategory } from '@/lib/constants';

const categoryIcons: Record<string, string> = {
  programming: '{ }',
  frontend: '◈',
  backend: '⚡',
  databases: '◉',
  tools: '⚙',
  ai: '✦',
};

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const isCyan = category.color === 'cyan';
  const accentColor = isCyan ? '#14B8A6' : '#8B5CF6';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="skill-card group"
    >
      {/* Top row */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0"
          style={{
            background: `${accentColor}15`,
            border: `1px solid ${accentColor}30`,
            color: accentColor,
          }}
        >
          {categoryIcons[category.id] || '◈'}
        </div>
        <div>
          <h3 className="text-white font-semibold text-sm">{category.label}</h3>
          <p className="text-white/30 text-xs">{category.skills.length} skills</p>
        </div>
      </div>

      {/* Divider */}
      <div
        className="w-full h-px mb-5"
        style={{ background: `linear-gradient(90deg, ${accentColor}30, transparent)` }}
      />

      {/* Skills list */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.07 + i * 0.04 + 0.1, duration: 0.3 }}
            className="group/skill relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-default"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.65)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = `${accentColor}12`;
              el.style.borderColor = `${accentColor}35`;
              el.style.color = accentColor;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(255,255,255,0.04)';
              el.style.borderColor = 'rgba(255,255,255,0.07)';
              el.style.color = 'rgba(255,255,255,0.65)';
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top left, ${accentColor}06, transparent 60%)`,
        }}
      />
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background */}
      <div
        className="absolute left-0 top-0 w-1/2 h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(20,184,166,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="section-label">Skills</span>
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="section-heading"
          >
            Tech{' '}
            <span className="text-gradient-cyan">Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-white/40 text-sm max-w-sm"
          >
            Tools and technologies I use to build production-grade applications.
          </motion.p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
