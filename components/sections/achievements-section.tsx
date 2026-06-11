'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements, achievementStats } from '@/lib/constants';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(139,92,246,0.05) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 grid-bg-fine opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="section-label">Achievements</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="section-heading mb-5"
        >
          Milestones &{' '}
          <span className="text-gradient-purple-cyan">Recognition</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/40 text-base mb-16 max-w-xl"
        >
          A collection of accomplishments that reflect my dedication to continuous learning and
          building.
        </motion.p>

        {/* Achievement cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {achievements.map((achievement, index) => {
            const isCyan = achievement.color === 'cyan';
            const accentColor = isCyan ? '#14B8A6' : '#8B5CF6';

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="achievement-card group relative"
              >
                {/* Icon + metric */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: `${accentColor}10`,
                      border: `1px solid ${accentColor}25`,
                    }}
                  >
                    {achievement.icon}
                  </div>
                  {achievement.metric && (
                    <span
                      className="text-2xl font-extrabold"
                      style={{ color: accentColor }}
                    >
                      {achievement.metric}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base mb-3 leading-snug">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-white/45 text-sm leading-relaxed">{achievement.description}</p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${accentColor}05, transparent 60%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Top border gradient */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(20,184,166,0.4), rgba(139,92,246,0.4), transparent)' }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4">
            {achievementStats.map((stat, i) => {
              const numericValue = parseInt(stat.value.replace('+', '').replace(',', ''));
              const hasSuffix = stat.value.includes('+');

              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center justify-center py-8 px-4 text-center ${
                    i < achievementStats.length - 1 ? 'border-r border-white/[0.04] md:border-r' : ''
                  } ${i === 1 ? 'border-r-0 md:border-r' : ''}`}
                >
                  <p
                    className="text-3xl md:text-4xl font-extrabold mb-1 tabular-nums"
                    style={{ color: i % 2 === 0 ? '#14B8A6' : '#8B5CF6' }}
                  >
                    <AnimatedCounter target={numericValue} suffix={hasSuffix ? '+' : ''} />
                  </p>
                  <p className="text-white/40 text-xs font-medium tracking-wide">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
