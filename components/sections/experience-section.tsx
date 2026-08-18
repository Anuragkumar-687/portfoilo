import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { experience } from '@/lib/constants';

/**
 * Professional experience — the single most persuasive block on the page for
 * a hiring manager, and the one the previous site was missing entirely.
 * Laid out as a timeline so the reader can scan roles before reading detail.
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Shipped inside real engineering teams"
          lead="Two internships spent on production codebases, writing backend services, reviewing teammates' code and taking features all the way to deployment."
        />

        <div className="relative">
          {/* Spine. Hidden on mobile where the cards already read top-to-bottom. */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px md:block"
            style={{
              background:
                'linear-gradient(to bottom, var(--primary-line), var(--line), transparent)',
            }}
          />

          <ol className="flex flex-col gap-s4">
            {experience.map((job, i) => (
              <li key={job.id} className="md:pl-s5">
                <Reveal>
                  <div className="relative">
                    {/* Timeline node */}
                    <span
                      aria-hidden
                      className="absolute -left-[calc(var(--space-5)-2px)] top-2 hidden h-4 w-4 items-center justify-center rounded-full border border-[var(--primary-line)] bg-[var(--bg)] md:flex"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    </span>

                    <article className="card card-interactive p-s3 md:p-s4">
                      <header className="flex flex-col gap-s1 md:flex-row md:items-baseline md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{job.role}</h3>
                          <p className="mt-1 text-sm text-[var(--text-secondary)]">
                            <span className="font-medium text-[var(--primary)]">
                              {job.company}
                            </span>
                            {job.companyNote && (
                              <span className="text-[var(--text-muted)]">
                                {' '}
                                · {job.companyNote}
                              </span>
                            )}
                            <span className="text-[var(--text-muted)]"> · {job.location}</span>
                          </p>
                        </div>
                        <p className="mono shrink-0 text-xs text-[var(--text-muted)]">
                          {job.period}
                        </p>
                      </header>

                      <p className="mt-s2 max-w-[68ch] text-[var(--text-secondary)]">
                        {job.summary}
                      </p>

                      <ul className="mt-s3 flex flex-col gap-s1">
                        {job.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex gap-s1 text-sm text-[var(--text-secondary)]"
                          >
                            <span
                              aria-hidden
                              className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]"
                            />
                            <span className="max-w-[76ch]">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-s3 flex flex-wrap gap-1.5">
                        {job.stack.map((tech) => (
                          <span key={tech} className="pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
