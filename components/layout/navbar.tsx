'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = siteConfig.mainNav.map((n) => n.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick('#home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#14B8A6] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-sm">
                AK
              </div>
              <span className="font-semibold text-white/90 text-sm tracking-tight hidden sm:block">
                Anurag Kumar
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {siteConfig.mainNav.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`nav-link-item px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-[#14B8A6] bg-[#14B8A6]/8'
                        : 'text-white/50 hover:text-white/90 hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </nav>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-white/50 hover:text-white/90 hover:bg-white/[0.06] transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-white/50 hover:text-white/90 hover:bg-white/[0.06] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                download="Resume-Anurag-Kumar.pdf"
                className="btn-primary !py-2 !px-4 !text-xs"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.06] transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#0a0a0a] border-l border-white/[0.06] p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#14B8A6] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-sm">
                    AK
                  </div>
                  <span className="font-semibold text-white/90 text-sm">Anurag Kumar</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 flex-1">
                {siteConfig.mainNav.map((item, i) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => handleNavClick(item.href)}
                      className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? 'text-[#14B8A6] bg-[#14B8A6]/8 border border-[#14B8A6]/20'
                          : 'text-white/60 hover:text-white/90 hover:bg-white/[0.04]'
                      }`}
                    >
                      {item.title}
                    </motion.button>
                  );
                })}
              </nav>

              <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg text-white/50 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg text-white/50 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.links.email}
                  className="p-2.5 rounded-lg text-white/50 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="/resume.pdf"
                  download="Resume-Anurag-Kumar.pdf"
                  className="flex-1 btn-primary !py-2.5 !px-4 !text-xs justify-center"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}