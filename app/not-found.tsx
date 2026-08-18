import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export const metadata = {
  title: 'Page not found',
};

/**
 * Without this, Next.js serves its own 404 — light-themed and unstyled, which
 * looks broken next to the rest of the site.
 */
export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 spotlight" />
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture" />

      <div className="container-page relative text-center">
        <p className="mono text-sm text-[var(--primary)]">404</p>

        <h1 className="mt-s2 text-4xl font-semibold tracking-[-0.035em]">
          This page doesn’t exist.
        </h1>

        <p className="mx-auto mt-s3 max-w-[46ch] text-lg text-[var(--text-secondary)]">
          The link may be out of date. Everything on this site lives on one page, so
          head back and scroll.
        </p>

        <div className="mt-s4 flex flex-wrap items-center justify-center gap-s2">
          <Link href="/" className="btn btn-primary">
            <ArrowLeft className="h-4 w-4" /> Back to the portfolio
          </Link>
          <a href={siteConfig.links.email} className="btn btn-secondary">
            Email me
          </a>
        </div>
      </div>
    </main>
  );
}
