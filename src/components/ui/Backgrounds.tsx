import React from 'react';

/**
 * Reusable Base Background Container
 * Clean ambient glow lighting system with zero grid lines, hardware-accelerated transforms (transform-gpu),
 * and zero layout shifts or clipping glitches on resize.
 */
interface BaseBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export const BaseBackground: React.FC<BaseBackgroundProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 transform-gpu ${className}`}
      aria-hidden="true"
    >
      {/* Glow Orbs & Ambient Beams */}
      {children}
    </div>
  );
};

/* =========================================================================
   PREDEFINED SECTION BACKGROUNDS (NO GRID LINES - CLEAN AMBIENT GLOWS)
   ========================================================================= */

/** 1. Home / Hero Background */
export const HomeBackground: React.FC = () => (
  <BaseBackground>
    <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[650px] sm:h-[650px] bg-white/[0.04] rounded-full blur-[120px] sm:blur-[160px] transform-gpu pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] bg-zinc-400/[0.03] rounded-full blur-[120px] sm:blur-[150px] transform-gpu pointer-events-none" />
  </BaseBackground>
);

export const HeroBackground = HomeBackground;

/** 2. About Background */
export const AboutBackground: React.FC = () => (
  <BaseBackground>
    <div className="absolute top-1/3 right-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-white/[0.03] rounded-full blur-[120px] sm:blur-[150px] transform-gpu pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-zinc-400/[0.03] rounded-full blur-[120px] sm:blur-[140px] transform-gpu pointer-events-none" />
  </BaseBackground>
);

/** 3. Skills Background */
export const SkillsBackground: React.FC = () => (
  <BaseBackground>
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-white/[0.04] rounded-full blur-[130px] sm:blur-[170px] transform-gpu pointer-events-none" />
    <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-zinc-400/[0.03] rounded-full blur-[120px] sm:blur-[150px] transform-gpu pointer-events-none" />
  </BaseBackground>
);

/** 4. Services Background */
export const ServicesBackground: React.FC = () => (
  <BaseBackground>
    <div className="absolute top-1/3 left-10 w-[320px] h-[320px] sm:w-[550px] sm:h-[550px] bg-white/[0.03] rounded-full blur-[120px] sm:blur-[150px] transform-gpu pointer-events-none" />
    <div className="absolute bottom-1/4 right-10 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] bg-zinc-400/[0.03] rounded-full blur-[120px] sm:blur-[140px] transform-gpu pointer-events-none" />
  </BaseBackground>
);

/** 5. Projects Background */
export const ProjectsBackground: React.FC = () => (
  <BaseBackground>
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] sm:w-[750px] sm:h-[750px] bg-white/[0.04] rounded-full blur-[140px] sm:blur-[170px] transform-gpu pointer-events-none" />
    <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] bg-zinc-400/[0.03] rounded-full blur-[130px] sm:blur-[160px] transform-gpu pointer-events-none" />
  </BaseBackground>
);

/** 6. Process Background */
export const ProcessBackground: React.FC = () => (
  <BaseBackground>
    <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-white/[0.03] rounded-full blur-[120px] sm:blur-[140px] transform-gpu pointer-events-none" />
    <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-zinc-400/[0.03] rounded-full blur-[120px] sm:blur-[130px] transform-gpu pointer-events-none" />
  </BaseBackground>
);

/** 7. Why Choose Me Background */
export const WhyChooseMeBackground: React.FC = () => (
  <BaseBackground>
    <div className="absolute top-1/4 right-10 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-white/[0.04] rounded-full blur-[120px] sm:blur-[150px] transform-gpu pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-zinc-400/[0.03] rounded-full blur-[120px] sm:blur-[140px] transform-gpu pointer-events-none" />
  </BaseBackground>
);

/** 8. Contact Background */
export const ContactBackground: React.FC = () => (
  <BaseBackground>
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-white/[0.04] rounded-full blur-[140px] sm:blur-[170px] transform-gpu pointer-events-none" />
    <div className="absolute bottom-10 right-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-zinc-400/[0.03] rounded-full blur-[130px] sm:blur-[150px] transform-gpu pointer-events-none" />
  </BaseBackground>
);

export interface SectionBackgroundProps {
  variant?: 'home' | 'hero' | 'about' | 'skills' | 'services' | 'projects' | 'process' | 'why' | 'contact';
}

export const SectionBackground: React.FC<SectionBackgroundProps> = ({ variant = 'home' }) => {
  switch (variant) {
    case 'home':
    case 'hero':
      return <HomeBackground />;
    case 'about':
      return <AboutBackground />;
    case 'skills':
      return <SkillsBackground />;
    case 'services':
      return <ServicesBackground />;
    case 'projects':
      return <ProjectsBackground />;
    case 'process':
      return <ProcessBackground />;
    case 'why':
      return <WhyChooseMeBackground />;
    case 'contact':
      return <ContactBackground />;
    default:
      return <HomeBackground />;
  }
};
