import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FloatingCta } from '@/components/ui/floating-cta';
import { HeroSection } from '@/components/sections/hero-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { QuoteSection } from '@/components/sections/quote-section';
import { OpenSourceSection } from '@/components/sections/open-source-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
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

        {/* Evidence: paid work first, it carries the most weight */}
        <ExperienceSection />

        <div className="band-surface">
          <ProjectsSection />
        </div>

        {/* A pause between chapters */}
        <QuoteSection />

        <OpenSourceSection />

        <div className="band-surface">
          <SkillsSection />
        </div>

        {/* Offer */}
        <ServicesSection />

        {/* Background */}
        <AboutSection />

        {/* Ask */}
        <div className="band-surface">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
