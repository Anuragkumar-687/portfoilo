import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { services } from '@/lib/constants';

/**
 * Guidebook §2: "your portfolio is not a gallery — it is a personal sales page."
 * This section states the offer plainly, so a visitor with a brief knows within
 * seconds whether there is a fit.
 */
export function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="How I can help"
          title="What you can hand me"
          lead="Whether you are hiring for a team or need a system built, these are the pieces of work I take end to end."
        />

        <div className="grid gap-s3 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title}>
              <div className="card card-interactive flex h-full flex-col p-s3 md:p-s4">
                <span className="mono text-xs text-[var(--primary)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-s2 text-lg font-semibold">{service.title}</h3>
                <p className="mt-s1 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {service.description}
                </p>
                <ul className="mt-s3 flex flex-col gap-1.5 border-t border-[var(--line)] pt-s2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-s1 text-xs text-[var(--text-muted)]"
                    >
                      <span
                        aria-hidden
                        className="h-1 w-1 rounded-full bg-[var(--primary)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
