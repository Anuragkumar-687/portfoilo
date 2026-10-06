import { ArrowRight, Mail } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { siteConfig } from '@/lib/constants';

/**
 * The closing conversion moment.
 *
 * Sits between About and Contact on purpose: the page has finished making its
 * case by this point, so this is the pivot from "here is the evidence" to
 * "here is how we start", and the contact form directly below gives the
 * mechanism. Putting it after the form would have stacked two asks in a row.
 */
export function CtaSection() {
  return (
    <section className="band relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(240, 55, 75, 0.1), transparent 70%)',
        }}
      />

      <div className="container-page relative py-s7 text-center md:py-s8">
        <Reveal>
          <p className="pill pill-primary mx-auto">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            Available for new projects
          </p>
        </Reveal>

        <Reveal>
          <h2 className="mx-auto mt-s3 max-w-[18ch] text-4xl font-semibold tracking-[-0.035em]">
            Let’s build something worth{' '}
            <span className="text-[var(--primary)]">paying for</span>.
          </h2>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-s3 max-w-[52ch] text-lg leading-relaxed text-[var(--text-secondary)]">
            Tell me what you are building and what is in the way. If I am the right
            person for it, you will get a plan. If I am not, I will tell you that too.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-s4 flex flex-wrap items-center justify-center gap-s2">
            <a href="#contact" className="btn btn-primary">
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
            <a href={siteConfig.links.email} className="btn btn-secondary">
              <Mail className="h-4 w-4" /> Email me directly
            </a>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-s3 text-xs text-[var(--text-muted)]">
            Usually replies within a day · {siteConfig.location} · Remote worldwide
          </p>
        </Reveal>
      </div>
    </section>
  );
}
