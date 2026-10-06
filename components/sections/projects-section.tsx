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
        {/* Provenance. Commissioned work carries more weight with a prospective
            client than a side project, so it is labelled rather than inferred. */}
        {project.context && (
          <p className="pill pill-primary mb-s2 self-start !text-[10px]">
            {project.context}
          </p>
        )}

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

        {/* What this person actually did. The single most useful block for a
            prospective client, who is trying to separate "I was on the team"
            from "I built it". Fixed at three lines so cards stay level. */}
        <ul className="mt-s2 flex flex-col gap-1.5">
          {project.contributions.map((point) => (
            <li
              key={point}
              className="flex gap-s1 text-[13px] leading-snug text-[var(--text-secondary)]"
            >
              <span
                aria-hidden
                className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Stack, as one muted line rather than a wrapping pile of pills:
            variable pill rows were the main cause of ragged card heights. */}
        <p className="project-stack mono mt-s3 truncate text-[11px] text-[var(--text-muted)]">
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
          {project.links ? (
            // Products that ship across several public surfaces get one button
            // each, so a client can open the actual thing rather than a repo.
            project.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`btn !h-9 min-w-0 flex-1 !px-2 !text-xs ${
                  i === 0 ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{l.label}</span>
              </a>
            ))
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="work" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Software people pay to use"
          lead="Built for a real company with paying customers, not for a portfolio. Every link below opens the running product, so you can judge the work before you hire me."
          action={
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              All repositories <ArrowUpRight className="h-4 w-4" />
            </a>
          }
        />

        {/* Grouped, because four separate Bizowl cards read as four small jobs.
            Under one heading they read as what they actually were: one
            company's entire platform, built by one person. */}
        <Reveal>
          <h3 className="section-subhead">Bizowl · one company, four products</h3>
        </Reveal>

        <div className="mt-s3 grid items-stretch gap-s3 md:grid-cols-2">
          {projects
            .filter((p) => p.group === 'bizowl')
            .map((project) => (
              <Reveal key={project.title} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
        </div>

        <Reveal>
          <h3 className="section-subhead mt-s6">Built on my own</h3>
        </Reveal>

        <div className="mt-s3 grid items-stretch gap-s3 md:grid-cols-2">
          {projects
            .filter((p) => p.group !== 'bizowl')
            .map((project) => (
              <Reveal key={project.title} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
