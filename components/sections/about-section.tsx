import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { achievements, education } from '@/lib/constants';

/**
 * Structure note. Two earlier attempts both wasted the right-hand side:
 * first by running bio + Recognition down one column with Education alone
 * opposite it, then by putting the bio on a 62ch measure with nothing beside
 * it at all, which left a 554x384 hole in a 1180px container.
 *
 * Education is short (three entries, ~330px) and the bio is ~384px, so they
 * pair naturally on one row. Recognition has four cards of uneven length, so
 * it reads best full width as a 2x2 grid where each row self-levels.
 */

function AchievementCard({ item }: { item: (typeof achievements)[number] }) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-s2">
        <h4 className="text-sm font-semibold text-[var(--text)]">{item.title}</h4>
        {item.href && (
          <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--primary)]" />
        )}
      </div>
      <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
        {item.description}
      </p>
    </>
  );

  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="card card-interactive group flex h-full flex-col p-s3"
    >
      {body}
    </a>
  ) : (
    <div className="card flex h-full flex-col p-s3">{body}</div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="About" title="Background" />

        {/* Row 1: bio and education, paired so neither side is left empty */}
        <div className="grid gap-s5 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-s6">
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
                I am a software developer studying B.Tech in Artificial Intelligence at{' '}
                <span className="text-[var(--text)]">Newton School of Technology</span>,
                Rishihood University. Most of my work sits on the backend: REST APIs,
                authentication and access control, caching, and the database design that
                decides whether any of it holds up.
              </p>
            </Reveal>

            <Reveal>
              <p className="mt-s3 leading-relaxed text-[var(--text-secondary)]">
                Two internships taught me the part that personal projects cannot: working
                in a codebase somebody else designed, having my code reviewed, and shipping
                to a deadline. Contributing to Apicurio Registry and OpenEverest took that
                further, writing against standards set by maintainers I have never met.
              </p>
            </Reveal>

            <Reveal>
              <p className="mt-s3 leading-relaxed text-[var(--text-secondary)]">
                Alongside that, 430+ solved problems and a 1558 contest rating on LeetCode
                keep the fundamentals sharp. I care about software that is reliable and
                fast, and that solves a problem somebody actually has.
              </p>
            </Reveal>
          </div>

          {/* Education */}
          <div>
            <Reveal>
              <h3 className="section-subhead">Education</h3>
            </Reveal>

            <ol className="mt-s3 flex flex-col">
              {education.map((entry, i) => (
                <li
                  key={entry.degree}
                  className={
                    i !== education.length - 1 ? 'border-b border-[var(--line)]' : undefined
                  }
                >
                  <Reveal className="flex flex-col gap-1 py-s3">
                    <div className="flex items-baseline justify-between gap-s2">
                      <h4 className="text-sm font-semibold">{entry.degree}</h4>
                      <span className="mono shrink-0 text-xs text-[var(--text-muted)]">
                        {entry.period}
                      </span>
                    </div>
                    {entry.field && (
                      <p className="text-sm text-[var(--primary)]">{entry.field}</p>
                    )}
                    <p className="text-sm text-[var(--text-secondary)]">
                      {entry.institution}
                      {entry.location && (
                        <span className="text-[var(--text-muted)]"> · {entry.location}</span>
                      )}
                    </p>
                    <p className="mono text-xs text-[var(--text-muted)]">{entry.grade}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Row 2: recognition, full width so the four cards level in pairs */}
        <div className="mt-s6">
          <Reveal>
            <h3 className="section-subhead">Recognition</h3>
          </Reveal>

          <div className="mt-s3 grid items-stretch gap-s2 md:grid-cols-2">
            {achievements.map((item) => (
              <Reveal key={item.id} className="h-full">
                <AchievementCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
