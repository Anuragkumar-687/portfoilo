import { positioningQuote } from '@/lib/constants';
import { Reveal } from '@/components/ui/reveal';

/**
 * The reference layout gives this slot to a client testimonial. Anurag has no
 * client quotes, and inventing one would be the fastest way to lose a reader
 * who checks. So the slot keeps its visual job — a full-width pause between
 * chapters — carrying a statement of approach, attributed to no one but him.
 */
export function QuoteSection() {
  return (
    <section className="band">
      <div className="container-page py-s6 md:py-s7">
        <Reveal>
          <figure>
            <blockquote className="pull-quote">
              <span aria-hidden className="text-[var(--primary)]">“</span>
              {positioningQuote.text}
              <span aria-hidden className="text-[var(--primary)]">”</span>
            </blockquote>
            <figcaption className="mt-s3 text-center text-xs uppercase tracking-[0.14em] text-[var(--text-muted)] mono">
              {positioningQuote.attribution}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
