import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const socials = [
  { icon: Mail, href: siteConfig.links.email, label: 'Email' },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
  { icon: Github, href: siteConfig.links.github, label: 'GitHub' },
  { icon: Code2, href: siteConfig.links.leetcode, label: 'LeetCode' },
];

const elsewhere = [
  { label: 'GitHub', href: siteConfig.links.github },
  { label: 'LinkedIn', href: siteConfig.links.linkedin },
  { label: 'LeetCode', href: siteConfig.links.leetcode },
  { label: 'Résumé (PDF)', href: siteConfig.links.resume },
];

/**
 * Closing chapter rather than a legal strip. The contact section already
 * carries the form, so the footer's job is the last impression: name, status,
 * and every route out of the page in one place.
 */
export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="container-page py-s6">
        <div className="grid gap-s5 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Identity */}
          <div>
            <p className="text-2xl font-semibold tracking-[-0.03em]">{siteConfig.name}</p>
            <p className="mt-s1 max-w-[34ch] text-sm text-[var(--text-secondary)]">
              {siteConfig.role} · {siteConfig.discipline}
            </p>

            <p className="pill pill-primary mt-s3">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              Available for SDE roles
            </p>

            <nav aria-label="Social" className="mt-s3 flex items-center gap-1">
              {socials.map(({ icon: Icon, href, label }) => {
                const external = href.startsWith('http');
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    aria-label={label}
                    className="btn btn-ghost !h-9 !w-9 !px-0"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Sections */}
          <div>
            <h2 className="section-subhead">
              Sections
            </h2>
            <ul className="mt-s2 flex flex-col gap-1.5">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline text-sm">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <h2 className="section-subhead">
              Elsewhere
            </h2>
            <ul className="mt-s2 flex flex-col gap-1.5">
              {elsewhere.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="link-underline text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>

        <div className="mt-s5 flex flex-col items-center justify-between gap-s2 border-t border-[var(--line)] pt-s3 sm:flex-row">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
          </p>
          <a href="#home" className="btn btn-ghost !h-9 !text-xs">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
