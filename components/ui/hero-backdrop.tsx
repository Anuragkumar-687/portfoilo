'use client';

import dynamic from 'next/dynamic';

/**
 * Client boundary for the three.js backdrop.
 *
 * The hero itself stays a server component so its copy is in the static HTML,
 * and `dynamic(..., { ssr: false })` cannot be called from one. This file is
 * the smallest possible island that can.
 */
const HeroCanvas = dynamic(
  () => import('@/components/ui/hero-canvas').then((m) => m.HeroCanvas),
  { ssr: false }
);

export function HeroBackdrop() {
  return <HeroCanvas />;
}
