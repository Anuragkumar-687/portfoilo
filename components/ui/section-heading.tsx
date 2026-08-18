import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/reveal';

/**
 * Every section opens exactly the same way: eyebrow, title, optional lead.
 * Guidebook §4 — alignment builds trust, consistency makes design feel premium.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  /** Optional right-aligned link (e.g. "All repositories"). */
  action?: ReactNode;
}) {
  return (
    <div className="mb-s5 flex flex-col gap-s3 md:mb-s6 md:flex-row md:items-end md:justify-between">
      <div>
        <Reveal>
          <p className="section-eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal>
          <h2 className="section-title">{title}</h2>
        </Reveal>
        {lead && (
          <Reveal>
            <p className="section-lead">{lead}</p>
          </Reveal>
        )}
      </div>
      {action && (
        <Reveal>
          <div className="shrink-0">{action}</div>
        </Reveal>
      )}
    </div>
  );
}
