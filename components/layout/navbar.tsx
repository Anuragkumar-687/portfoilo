'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const sectionIds = siteConfig.mainNav.map((item) => item.href.slice(1));

/** Compact set for the pill — a floating bar cannot carry seven links legibly. */
const primaryLinks = siteConfig.mainNav.filter((item) =>
  ['#work', '#experience', '#open-source', '#about'].includes(item.href)
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <a href="#work" className="skip-link">
        Skip to content
      </a>

      {/* Floating, centred pill rather than a full-width bar — it keeps the
          page edge-to-edge and lets the bands behind it read as full chapters. */}
      <header className="fixed inset-x-0 top-s2 z-50 flex justify-center px-s3">
        <div className="nav-shell" data-scrolled={scrolled}>
          <a href="#home" className="flex shrink-0 items-center gap-2 pl-1 pr-2">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white"
              style={{ background: 'var(--primary)' }}
            >
              AK
            </span>
            <span className="text-sm font-semibold">Anurag</span>
          </a>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {primaryLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={active === item.href.slice(1)}
              >
                {item.title}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-primary !h-9 !px-4 !text-xs">
            Contact
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="btn btn-ghost !h-9 !w-9 !px-0 md:!hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu className="h-[18px] w-[18px]" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              aria-label="Mobile"
              className="absolute inset-x-s2 top-s2 flex flex-col rounded-xl border border-[var(--line-strong)] bg-[var(--bg-surface)] p-s2"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-s1 flex items-center justify-between pl-s1">
                <span className="text-sm font-semibold">Menu</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-ghost !h-9 !w-9 !px-0"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {siteConfig.mainNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-s2 py-s2 text-sm text-[var(--text-secondary)] transition-colors hover:bg-white/[0.05] hover:text-[var(--text)]"
                >
                  {item.title}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-40" />
                </a>
              ))}

              <a
                href={siteConfig.links.resume}
                download="Anurag-Kumar-Resume.pdf"
                className="btn btn-primary mt-s2 w-full"
              >
                Download résumé
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
