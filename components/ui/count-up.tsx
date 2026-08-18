'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Counts a stat up when it first scrolls into view.
 *
 * IMPORTANT: this animation overwrites real numbers with intermediate ones, so
 * every exit path has to land back on the true value. If the tween stalls (a
 * backgrounded tab freezes requestAnimationFrame, which GSAP drives from) the
 * page would otherwise be left advertising "0 Engineering internships" or
 * "9+ DSA problems". That is worse than no animation at all, so:
 *
 *   - the true value is what the server renders, and what we start from
 *   - the tween never runs while the document is hidden
 *   - onComplete restores the exact source string, units included
 *   - a watchdog force-writes the true value if the tween has not finished
 *   - unmount and visibility changes both restore it too
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const settle = () => {
      el.textContent = value;
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Split "430+" / "85%" / "1,558" into number and suffix.
    const match = value.match(/^(\d[\d,]*)(.*)$/);
    if (!match) return;
    const target = parseFloat(match[1].replace(/,/g, ''));
    const suffix = match[2];
    const DURATION = 1.1;

    const obj = { n: 0 };
    let tween: gsap.core.Tween | null = null;
    let watchdog: ReturnType<typeof setTimeout> | undefined;

    const start = () => {
      if (tween || document.hidden) return;
      tween = gsap.to(obj, {
        n: target,
        duration: DURATION,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.round(obj.n).toLocaleString() + suffix;
        },
        onComplete: settle,
      });
      // If rAF stalls mid-tween, this guarantees the real number is restored.
      watchdog = setTimeout(settle, DURATION * 1000 + 900);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        start();
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    // A tab hidden mid-count would freeze on a wrong number; settle immediately.
    const onVisibility = () => {
      if (document.hidden) {
        tween?.kill();
        settle();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      io.disconnect();
      tween?.kill();
      if (watchdog) clearTimeout(watchdog);
      document.removeEventListener('visibilitychange', onVisibility);
      settle();
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
