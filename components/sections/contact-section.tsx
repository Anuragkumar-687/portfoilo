'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Code2, Send, Phone, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { siteConfig } from '@/lib/constants';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.links.emailAddress,
    href: siteConfig.links.email,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.links.phoneNumber,
    href: siteConfig.links.phone,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'anurag-kumar121',
    href: siteConfig.links.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Anuragkumar-687',
    href: siteConfig.links.github,
  },
  {
    icon: Code2,
    label: 'LeetCode',
    value: 'Anurag_Kumar2005',
    href: siteConfig.links.leetcode,
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  /**
   * The site is a static export, so there is no server to post to. Rather than
   * fake a submission, the form composes a pre-filled email in the visitor's
   * own client — honest about where the message actually goes.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio enquiry from ${form.name || 'a visitor'}`;
    const body = `${form.message}\n\nFrom ${form.name}\n${form.email}`;
    window.location.href = `${siteConfig.links.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Have something that needs building?"
          lead={siteConfig.availability}
        />

        <div className="grid gap-s4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-s5">
          {/* ── Direct channels ───────────────────────────────────────── */}
          <Reveal>
            <div className="flex flex-col gap-1">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const external = href.startsWith('http');
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    className="group flex items-center gap-s2 rounded-lg border border-transparent px-s2 py-s2 transition-colors hover:border-[var(--line)] hover:bg-[var(--bg-surface)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--bg-surface)]">
                      <Icon className="h-4 w-4 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--primary)]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-[var(--text-muted)]">{label}</span>
                      <span className="mono block break-all text-sm text-[var(--text)]">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-muted)] opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* ── Message form ──────────────────────────────────────────── */}
          <Reveal>
            <form onSubmit={handleSubmit} className="card p-s3 md:p-s4">
              <div className="grid gap-s2 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="field-label">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    className="field"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="field-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="field"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="mt-s2">
                <label htmlFor="contact-message" className="field-label">
                  What do you need built?
                </label>
                <textarea
                  id="contact-message"
                  className="field resize-none"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="A short brief, a role description, or just a question."
                />
              </div>

              <button type="submit" className="btn btn-primary mt-s3 w-full">
                <Send className="h-4 w-4" /> Send message
              </button>

              <p className="mt-s2 text-center text-xs text-[var(--text-muted)]">
                Opens in your email client. Nothing is stored on this site.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
