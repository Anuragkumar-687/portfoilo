import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { TechIcon } from '@/components/ui/tech-icon';
import { skillCategories } from '@/lib/constants';

/**
 * This section was six identical grey cards of grey text pills, which read as a
 * wall of nothing. Both portfolios used as reference present tooling as logo
 * tiles rather than words, because a brand mark is recognised before it is read.
 *
 * So every skill is now its real logo in its real brand colour. That also
 * supplies the colour the section was missing: the palette is deliberately two
 * tones everywhere else, and this is the one place where outside colour is
 * legitimate, because it belongs to the tools rather than to the page.
 */

const marqueeTech = [
  'TypeScript', 'Python', 'Go', 'Java', 'Node.js', 'FastAPI', 'Next.js', 'React',
  'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Docker', 'Kubernetes', 'Helm',
  'Linux', 'Django', 'Express.js', 'Prisma ORM', 'LangChain',
];

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Capabilities"
          title="The stack I reach for"
          lead="Grouped by what I use it for, rather than by how confident a progress bar would claim I am."
        />

        <div className="grid items-start gap-s3 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Reveal key={category.id} className="h-full">
              <div className="card card-interactive flex h-full flex-col p-s3">
                <h3 className="text-base font-semibold">{category.label}</h3>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{category.note}</p>

                <ul className="mt-s3 flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="tech-chip">
                      <TechIcon name={skill} className="h-3.5 w-3.5 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Logo marquee, full bleed. Pauses on hover so it stays readable. */}
      <div className="marquee mt-s5 overflow-hidden border-t border-[var(--line)] pt-s4">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {marqueeTech.map((tech) => (
                <span
                  key={`${copy}-${tech}`}
                  className="flex items-center gap-2 px-s3 text-sm text-[var(--text-secondary)]"
                >
                  <TechIcon name={tech} className="h-4 w-4" />
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
