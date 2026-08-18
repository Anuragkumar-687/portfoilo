import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { siteConfig, proofStats, toolchain } from '@/lib/constants';
import { CountUp } from '@/components/ui/count-up';
import { HeroBackdrop } from '@/components/ui/hero-backdrop';

/**
 * Server component on purpose: the headline, the proof numbers and the CTAs are
 * all present in the static HTML. Guidebook §9 — a portfolio that renders
 * nothing until JavaScript boots is invisible to search engines and slow to
 * first paint. Entrance motion is pure CSS, so nothing waits on hydration.
 */

const heroSocials = [
  { href: siteConfig.links.github, icon: Github, label: 'GitHub profile' },
  { href: siteConfig.links.linkedin, icon: Linkedin, label: 'LinkedIn profile' },
];

export function HeroSection() {
  return (
    <>
      <section id="home" className="relative overflow-hidden pb-s6 pt-s8">
        <HeroBackdrop />
        <div aria-hidden className="pointer-events-none absolute inset-0 spotlight" />
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture" />

        <div className="container-page relative pt-s5">
          <div className="grid items-center gap-s5 lg:grid-cols-[1.15fr_0.85fr]">
            {/* ── Left: the pitch ─────────────────────────────────────── */}
            <div>
              <p className="animate-rise pill pill-primary" style={{ animationDelay: '0ms' }}>
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                Available for SDE roles
              </p>

              <h1
                className="animate-rise mt-s3 text-4xl font-semibold tracking-[-0.035em]"
                style={{ animationDelay: '60ms' }}
              >
                I build backend systems that{' '}
                <span className="text-[var(--primary)]">survive production</span>.
              </h1>

              <p
                className="animate-rise mt-s3 max-w-[54ch] text-lg text-[var(--text-secondary)]"
                style={{ animationDelay: '120ms' }}
              >
                {siteConfig.subheadline}
              </p>

              <div
                className="animate-rise mt-s4 flex flex-wrap items-center gap-s2"
                style={{ animationDelay: '180ms' }}
              >
                <a href="#work" className="btn btn-primary">
                  See the work <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.links.resume}
                  download="Anurag-Kumar-Resume.pdf"
                  className="btn btn-secondary"
                >
                  <Download className="h-4 w-4" /> Résumé
                </a>

                <div className="ml-s1 flex items-center gap-1">
                  {heroSocials.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="btn btn-ghost !h-10 !w-10 !px-0"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  ))}
                </div>
              </div>

              <p
                className="animate-rise mt-s3 flex items-center gap-1.5 text-xs text-[var(--text-muted)]"
                style={{ animationDelay: '220ms' }}
              >
                <MapPin className="h-3.5 w-3.5" />
                {siteConfig.location} · Open to remote
              </p>
            </div>

            {/* ── Right: portrait ─────────────────────────────────────── */}
            <div
              className="animate-fade relative mx-auto w-full max-w-[360px] lg:mx-0 lg:ml-auto"
              style={{ animationDelay: '160ms' }}
            >
              <div className="card relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/profile-pic.webp"
                  alt="Anurag Kumar, software developer specialising in backend engineering"
                  fill
                  priority
                  sizes="(max-width: 1024px) 360px, 400px"
                  className="object-cover object-center"
                />
              </div>

              <div className="card absolute -bottom-4 -left-4 !rounded-xl px-s3 py-s2 backdrop-blur-md">
                <p className="metric-value !text-xl"><CountUp value="430+" /></p>
                <p className="metric-label mt-1">DSA problems · 1558 rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof band ────────────────────────────────────────────────────
          The reference puts an avatar stack and a star rating here. The
          equivalent that is actually true of Anurag is his stack and his
          numbers, so that is what the slot carries. */}
      <section className="band" aria-label="At a glance">
        <div className="container-page flex flex-col items-center justify-between gap-s3 py-s3 lg:flex-row">
          <div className="flex items-center gap-s2">
            <div className="flex" aria-hidden>
              {toolchain.slice(0, 6).map((tool) => (
                <span key={tool.name} className="stack-item" title={tool.name}>
                  {tool.code}
                </span>
              ))}
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              <span className="font-medium text-[var(--text)]">15+ technologies</span> across
              backend, data and infrastructure
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-s4 gap-y-s2">
            {proofStats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-1.5">
                <CountUp
                  value={stat.value}
                  className="text-base font-semibold text-[var(--primary)]"
                />
                <span className="text-sm text-[var(--text-secondary)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
