'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Zap } from 'lucide-react';
import { projects, type Project } from '@/lib/constants';

function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="project-card group overflow-hidden"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
        {/* Image */}
        <div
          className={`relative overflow-hidden ${isEven ? '' : 'lg:col-start-2'}`}
          style={{ minHeight: '300px' }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 lg:opacity-0 lg:group-hover:opacity-40 transition-opacity duration-500" />
          {/* Shimmer on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(20,184,166,0.08) 0%, transparent 50%, rgba(139,92,246,0.08) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className={`flex flex-col justify-center p-8 lg:p-10 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
          {/* Project label */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#14B8A6' }}
            >
              Featured Project
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1 leading-tight">
            {project.title}
          </h3>
          <p className="text-white/40 text-sm font-medium mb-5">{project.subtitle}</p>

          <p className="text-white/60 text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-white/50">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#14B8A6' }}
                />
                {feature}
              </li>
            ))}
          </ul>

          {/* Impact badge */}
          {project.impact && (
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold mb-6 self-start"
              style={{
                background: 'rgba(20,184,166,0.1)',
                border: '1px solid rgba(20,184,166,0.25)',
                color: '#14B8A6',
              }}
            >
              <Zap className="w-3 h-3" />
              {project.impact}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-2.5 !px-5 !text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="btn-outline !py-2.5 !px-5 !text-xs"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SmallProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="project-card group flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-[#14B8A6] text-xs font-medium mb-3">{project.subtitle}</p>
        <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[11px] font-medium"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.45)',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 border"
              style={{
                background: 'rgba(20,184,166,0.08)',
                borderColor: 'rgba(20,184,166,0.25)',
                color: '#14B8A6',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(20,184,166,0.15)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(20,184,166,0.08)';
              }}
            >
              <ExternalLink className="w-3 h-3" /> Demo
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 border"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.5)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.06)';
                el.style.color = 'rgba(255,255,255,0.85)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.03)';
                el.style.color = 'rgba(255,255,255,0.5)';
              }}
            >
              <Github className="w-3 h-3" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(20,184,166,0.04) 0%, transparent 70%)',
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
          <span className="section-label">Projects</span>
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="section-heading"
          >
            What I've{' '}
            <span className="text-gradient-cyan">Built</span>
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            href="https://github.com/Anuragkumar-687"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-white/40 hover:text-[#14B8A6] text-sm font-medium transition-colors"
          >
            View all on GitHub <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Featured projects */}
        <div className="space-y-6 mb-12">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 mb-6"
            >
              <h3 className="text-white/40 text-sm font-medium">More Projects</h3>
              <div className="flex-1 h-px bg-white/[0.04]" />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {otherProjects.map((project, index) => (
                <SmallProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
