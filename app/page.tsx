import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FloatingCta } from '@/components/ui/floating-cta';
import { MotionLayer } from '@/components/ui/motion-layer';
import { HeroSection } from '@/components/sections/hero-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { QuoteSection } from '@/components/sections/quote-section';
import { OpenSourceSection } from '@/components/sections/open-source-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';

/**
 * Server component. An earlier version held the whole page behind an 1800ms
 * fake loading screen, so the static export shipped an empty document.
 *
 * Order follows Guidebook §2 — a portfolio is a sales page, so the sequence is
 * proof → evidence → offer → ask. Sections alternate between the base tone and
 * a `band` tone so the page reads as distinct chapters rather than one scroll.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* Proof: who, and why believe it (hero renders its own proof band) */}
        <HeroSection />

        {/* Evidence first. A prospective client wants to see what was built
            before they care where it was built, and leading with Experience
            put the word "Intern" directly above 10,000 daily users. */}
        <div className="band-surface">
          <ProjectsSection />
        </div>

        {/* The offer, while the work is still fresh */}
        <ServicesSection />

        {/* A pause between chapters */}
        <QuoteSection />

        {/* Credibility: real teams, real deadlines */}
        <ExperienceSection />

        <OpenSourceSection />

        <div className="band-surface">
          <SkillsSection />
        </div>

        {/* Background */}
        <AboutSection />

        {/* The pivot from evidence to action, directly above the form */}
        <CtaSection />

        {/* Ask */}
        <div className="band-surface">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <FloatingCta />
      {/* Smooth scroll, staggered reveals, parallax and magnetic buttons.
          Mounts last and renders nothing; the page is complete without it. */}
      <MotionLayer />
    </>
  );
}
