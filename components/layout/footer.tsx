'use client';

import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#14B8A6] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-sm">
              AK
            </div>
            <div>
              <p className="text-white/90 font-semibold text-sm">Anurag Kumar</p>
              <p className="text-white/40 text-xs">Full Stack Developer & AI Undergraduate</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: Mail, href: siteConfig.links.email, label: 'Email' },
              { icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
              { icon: Github, href: siteConfig.links.github, label: 'GitHub' },
              { icon: Code2, href: siteConfig.links.leetcode, label: 'LeetCode' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg text-white/40 hover:text-[#14B8A6] hover:bg-[#14B8A6]/8 border border-transparent hover:border-[#14B8A6]/20 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-white/30 text-xs text-center md:text-right">
            © {new Date().getFullYear()} Anurag Kumar. Built with Next.js & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}