import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * The site's only scroll-reveal primitive — and deliberately a *server*
 * component with no JavaScript at all.
 *
 * An IntersectionObserver version of this shipped `opacity: 0` inline on ~50
 * elements, so the prerendered HTML was technically complete but visually
 * blank until React hydrated. That defeats the point of a static export: a
 * crawler, a slow connection or a failed JS bundle would all see an empty page.
 *
 * Instead the animation is driven by a CSS view-progress timeline. Where the
 * browser supports it, content rises in as it scrolls into frame; where it does
 * not, the content is simply there. Visible is the default state, never the
 * animated one.
 *
 * Guidebook §7 — less is more.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('reveal', className)}>{children}</div>;
}
