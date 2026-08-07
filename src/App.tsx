import React, { useState, useEffect, useMemo } from 'react';
import { useLenisSmoothScroll } from './lib/lenis';
import { THEME_PRESETS } from './theme/themeConfig';
import { ThemePreset, Project } from './types/portfolio';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { CursorGlow } from './components/ui/CursorGlow';
import { ProjectModal } from './components/ui/ProjectModal';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { WhyChooseMeSection } from './components/sections/WhyChooseMeSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  // Initialize Lenis Smooth Scroll
  useLenisSmoothScroll();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionIds = useMemo(
    () => ['hero', 'about', 'services', 'projects', 'why-choose-me', 'process', 'skills', 'contact'],
    []
  );
  const activeSection = useActiveSection(sectionIds, 200);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans selection:bg-white selection:text-black relative overflow-x-hidden premium-gradient">
      {/* Subtle Ambient Mouse Light Spotlight */}
      <CursorGlow />

      {/* Floating Header Navigation */}
      <Navbar
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <WhyChooseMeSection />
        <ProcessSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Spec Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
