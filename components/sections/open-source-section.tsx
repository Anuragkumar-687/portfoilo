import { ArrowUpRight, GitPullRequest } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { openSource, siteConfig } from '@/lib/constants';

/**
 * Open source is the strongest differentiator on the résumé: contributing to
 * infrastructure that other companies run in production is a much harder
 * signal to fake than a personal project. It gets its own section for that reason.
 */
export function OpenSourceSection() {
  return (
    <section id="open-source" className="section">
      {/* Tonal shift so this section reads as a distinct chapter. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 0%, var(--secondary-soft), transparent 70%)',
        }}
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Open source"
          title="Contributing to infrastructure others run in production"
          lead="Merged and ongoing pull requests to distributed-systems and cloud-native projects, written inside codebases I do not own, to standards I did not set."
          action={
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <GitPullRequest className="h-4 w-4" /> GitHub
            </a>
          }
        />

        <div className="grid gap-s3 md:grid-cols-2">
          {openSource.map((project, i) => (
            <Reveal key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="card card-interactive group flex h-full flex-col p-s3 md:p-s4"
              >
                <div className="flex items-start justify-between gap-s2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--primary)]" />
                </div>

                <p className="mt-s2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>

                <p className="mt-s2 flex gap-s1 text-sm text-[var(--text)]">
                  <GitPullRequest className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  <span>{project.contribution}</span>
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-s3">
                  {project.areas.map((area) => (
                    <span key={area} className="pill">
                      {area}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
