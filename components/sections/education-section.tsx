'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, Award } from 'lucide-react';
import { education } from '@/lib/constants';

export function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(139,92,246,0.05) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 grid-bg-fine opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="section-label">Education</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="section-heading mb-16"
        >
          Academic{' '}
          <span className="text-gradient-purple-cyan">Journey</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-6 top-6 bottom-6 w-px origin-top"
            style={{ background: 'linear-gradient(to bottom, rgba(20,184,166,0.5), rgba(139,92,246,0.2), transparent)' }}
          />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 flex flex-col items-center" style={{ width: '13px', marginLeft: '0px' }}>
                  <div
                    className="w-[13px] h-[13px] rounded-full mt-5 flex-shrink-0 relative z-10"
                    style={{
                      background: index === 0 ? '#14B8A6' : 'rgba(255,255,255,0.2)',
                      boxShadow: index === 0 ? '0 0 0 3px rgba(20,184,166,0.2), 0 0 16px rgba(20,184,166,0.4)' : 'none',
                      border: index !== 0 ? '2px solid rgba(255,255,255,0.15)' : 'none',
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="flex-1 mb-2 group"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '16px',
                    padding: '24px',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(20,184,166,0.2)';
                    el.style.background = 'rgba(20,184,166,0.025)';
                    el.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(255,255,255,0.06)';
                    el.style.background = 'rgba(255,255,255,0.025)';
                    el.style.transform = 'translateX(0)';
                  }}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap className="w-4 h-4 text-[#14B8A6]" />
                        <h3 className="text-white font-bold text-lg leading-tight">
                          {edu.shortInstitution}
                        </h3>
                      </div>
                      <p className="text-[#14B8A6] text-sm font-medium">
                        {edu.degree} · {edu.field}
                      </p>
                    </div>

                    {edu.gpa && (
                      <div className="flex-shrink-0">
                        <div
                          className="px-3 py-1.5 rounded-lg text-xs font-bold"
                          style={{
                            background: index === 0 ? 'rgba(20,184,166,0.12)' : 'rgba(255,255,255,0.04)',
                            border: index === 0 ? '1px solid rgba(20,184,166,0.3)' : '1px solid rgba(255,255,255,0.08)',
                            color: index === 0 ? '#14B8A6' : 'rgba(255,255,255,0.5)',
                          }}
                        >
                          {index === 0 ? `CGPA ${edu.gpa}` : edu.gpa}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-white/40 text-xs">
                      <Calendar className="w-3 h-3" />
                      {edu.startDate} – {edu.endDate}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/40 text-xs">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/45 text-sm leading-relaxed">{edu.description}</p>

                  {/* B.Tech specific highlights */}
                  {index === 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Data Structures', 'Algorithms', 'Machine Learning', 'Full Stack Dev', 'Coding Club'].map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium"
                          style={{
                            background: 'rgba(20,184,166,0.06)',
                            border: '1px solid rgba(20,184,166,0.15)',
                            color: 'rgba(20,184,166,0.8)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
