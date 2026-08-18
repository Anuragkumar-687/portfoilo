'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Persistent "get in touch" pill, mirroring the reference site's floating CTA.
 * Appears once the reader is past the hero and hides again over the contact
 * section, where it would only duplicate what is already on screen.
 */
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.8;
      const contact = document.getElementById('contact');
      const atContact = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      setVisible(past && !atContact);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#contact"
      className="floating-cta btn btn-primary"
      data-visible={visible}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      Let’s talk <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
