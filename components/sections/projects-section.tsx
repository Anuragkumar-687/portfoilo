import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { projects, siteConfig, type Project } from '@/lib/constants';

/**
 * One card shape, repeated. Nothing else.
 *
 * Earlier versions mixed two vertical cards with one horizontal one, which read
 * as two different components sharing a section. Both of the portfolios used as
 * reference (a designer's, image-led; a developer's, text-led) differ wildly in
 * how much they show, but agree on this: a single card template, repeated.
 *
 * Every block below the image is a fixed height — one-line title row, one-line
 * subtitle, one-line stack, one stat row, one button row. Nothing wraps
 * unpredictably, so the cards line up without needing min-heights to force it.
 *
 * A fourth tile closes the 2x2 grid, so three projects do not leave an orphan.
 */

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card-interactive group flex h-full flex-col overflow-hidden">
      {project.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-elevated)]">
          <Image
            src={project.image}
            alt={`${project.title}: ${project.subtitle}`}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover object-top transition-transform duration-500 ease-[var(--ease)] group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col border-t border-[var(--line)] p-s3">
        {/* Title row */}
        <div className="flex items-baseline justify-between gap-s2">
          <h3 className="truncate text-xl font-semibold tracking-[-0.02em]">
            {project.title}
          </h3>
          {project.period && (
            <span className="mono shrink-0 text-[11px] text-[var(--text-muted)]">
              {project.period}
            </span>
          )}
        </div>

        {/* Category */}
        <p className="mt-0.5 truncate text-sm text-[var(--primary)]">{project.subtitle}</p>

        {/* Stack, as one muted line rather than a wrapping pile of pills:
            variable pill rows were the main cause of ragged card heights. */}
        <p className="mono mt-s2 truncate text-[11px] text-[var(--text-muted)]">
          {project.tags.join('  ·  ')}
        </p>

        {/* Stats. Anurag's numbers are the differentiator, so they stay, but as
            an inline row instead of a bordered grid nested inside a card. */}
        <dl className="mt-s3 flex items-stretch border-t border-[var(--line)] pt-s2">
          {project.metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`flex-1 ${i > 0 ? 'border-l border-[var(--line)] pl-s2' : ''} ${
                i < project.metrics.length - 1 ? 'pr-s2' : ''
              }`}
            >
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span className="block text-lg font-semibold leading-none text-[var(--primary)]">
                  {metric.value}
                </span>
                <span className="mt-1 block text-[11px] leading-tight text-[var(--text-muted)]">
                  {metric.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Actions pinned to the bottom edge of every card */}
        <div className="mt-auto flex gap-s1 pt-s3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary !h-9 flex-1 !text-xs"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live site
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary !h-9 flex-1 !text-xs"
            >
              <Github className="h-3.5 w-3.5" /> Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/** Fills the fourth cell so the grid closes cleanly. */
function MoreTile() {
  return (
    <a
      href={siteConfig.links.github}
      target="_blank"
      rel="noreferrer"
      className="card card-interactive group flex h-full flex-col items-start justify-center p-s4"
      style={{ background: 'var(--bg-band)' }}
    >
      <span className="section-eyebrow !mb-s2">More work</span>
      <p className="text-xl font-semibold tracking-[-0.02em]">
        Everything else lives on GitHub
      </p>
      <p className="mt-s2 max-w-[36ch] text-sm leading-relaxed text-[var(--text-secondary)]">
        Smaller builds, coursework and the open-source branches I am working on
        right now.
      </p>
      <span className="btn btn-secondary mt-s3 !h-9 !text-xs">
        <Github className="h-3.5 w-3.5" /> Anuragkumar-687
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

export function ProjectsSection() {
  return (
    <section id="work" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Platforms built to be used, not demoed"
          lead="Each of these runs end to end: authentication, payments, caching, background processing and an admin surface. Live links and source for all of them."
        />

        <div className="grid items-stretch gap-s3 md:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.title} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
          <Reveal className="h-full">
            <MoreTile />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
