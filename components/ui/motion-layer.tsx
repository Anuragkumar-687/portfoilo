'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

/**
 * The site's motion layer: smooth scrolling, staggered scroll reveals,
 * parallax on project imagery and magnetic primary buttons.
 *
 * Two rules it has to obey, both learned the hard way earlier in this build:
 *
 *   1. Nothing is hidden in the HTML. Every initial state is set here, in JS,
 *      after the element is found. A previous version shipped `opacity: 0` in
 *      the markup, so a failed bundle left the page blank for the visitor and
 *      empty for crawlers.
 *   2. `prefers-reduced-motion` exits before anything is registered, leaving a
 *      completely ordinary page behind.
 */
export function MotionLayer() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    // ── Smooth scroll ──────────────────────────────────────────────────
    // The single biggest contributor to a site feeling "designed" rather than
    // "built". Driven off GSAP's ticker so scroll position and ScrollTrigger
    // never disagree.
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
    });

    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // In-page links have to go through Lenis or they fight the smoothing.
    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -96 });
    };
    document.addEventListener('click', onAnchorClick);

    /**
     * Failsafe. These animations work by hiding ~60 elements and revealing them
     * on scroll, so any failure between "hidden" and "revealed" leaves the
     * visitor looking at an empty page. Anything still hidden inside the
     * viewport after this point is a bug, not a pending animation.
     */
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal, .section-title').forEach((el) => {
        const r = el.getBoundingClientRect();
        const inView = r.top < window.innerHeight && r.bottom > 0;
        if (inView && parseFloat(getComputedStyle(el).opacity) < 0.9) {
          gsap.set(el, { opacity: 1, y: 0 });
        }
      });
    }, 2500);

    const ctx = gsap.context(() => {
      // ── Staggered reveals ────────────────────────────────────────────
      // Grouped by section so siblings cascade instead of all firing at once,
      // which is what separates this from a plain fade-in.
      document.querySelectorAll('section').forEach((section) => {
        const items = section.querySelectorAll(':scope .reveal');
        if (!items.length) return;

        gsap.fromTo(
          items,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.07,
            scrollTrigger: { trigger: section, start: 'top 78%', once: true },
          }
        );
      });

      // ── Section headings ─────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('.section-title').forEach((title) => {
        gsap.fromTo(
          title,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: title, start: 'top 85%', once: true },
          }
        );
      });

      // ── Parallax on project imagery ──────────────────────────────────
      // Small on purpose: enough to feel alive, not enough to notice as an effect.
      gsap.utils.toArray<HTMLElement>('#work article img').forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: img.closest('article'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      });
    });

    // ── Magnetic primary buttons ───────────────────────────────────────
    // Pointer-fine only: on touch there is no cursor to be magnetic towards.
    const magnets: { el: HTMLElement; enter: () => void; move: (e: PointerEvent) => void; leave: () => void }[] = [];
    if (window.matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll<HTMLElement>('.btn-primary').forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          gsap.to(el, {
            x: (e.clientX - (r.left + r.width / 2)) * 0.25,
            y: (e.clientY - (r.top + r.height / 2)) * 0.35,
            duration: 0.4,
            ease: 'power3.out',
          });
        };
        const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
        const enter = () => {};
        el.addEventListener('pointermove', move);
        el.addEventListener('pointerleave', leave);
        magnets.push({ el, enter, move, leave });
      });
    }

    ScrollTrigger.refresh();

    return () => {
      window.clearTimeout(failsafe);
      document.removeEventListener('click', onAnchorClick);
      magnets.forEach(({ el, move, leave }) => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      });
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
