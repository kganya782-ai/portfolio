import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Paintbrush,
  Zap,
  Smartphone,
  Tag,
  ShieldCheck,
  Code2,
  Sparkles,
  CheckCircle,
  ArrowUpRight,
  Star,
  Cpu,
} from 'lucide-react';

export const WhyChooseMeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll position inside this section for background & text color transition
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Background transitions smoothly from dark -> light luxury slate -> dark
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#0a0a0a', '#f4f4f6', '#f4f4f6', '#0a0a0a']
  );

  // White headings become black as page changes colour
  const headingColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#ffffff', '#09090b', '#09090b', '#ffffff']
  );

  // Subtitle & paragraph text smoothly animate from light gray to dark gray
  const paragraphColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#a1a1aa', '#27272a', '#27272a', '#a1a1aa']
  );

  // Cards background transition
  const cardBgColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#161616', '#ffffff', '#ffffff', '#161616']
  );

  // Card border transition
  const cardBorderColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#262626', '#e4e4e7', '#e4e4e7', '#262626']
  );

  // Card shadow transition
  const cardShadow = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    [
      '0 20px 25px -5px rgba(0,0,0,0.5)',
      '0 20px 30px -5px rgba(0,0,0,0.08)',
      '0 20px 30px -5px rgba(0,0,0,0.08)',
      '0 20px 25px -5px rgba(0,0,0,0.5)',
    ]
  );

  // The 6 Reasons specified by user
  const reasons = [
    {
      id: 'modern-design',
      title: 'Modern Design',
      icon: Paintbrush,
      accentGradient: 'from-zinc-700 to-zinc-900',
      badge: '01 // AESTHETICS',
      description: 'Award-grade, glassmorphic UI layouts designed to captivate visitors and elevate brand perception.',
      highlight: 'Tailored Aesthetic & Motion',
    },
    {
      id: 'fast-performance',
      title: 'Fast Performance',
      icon: Zap,
      accentGradient: 'from-zinc-700 to-zinc-900',
      badge: '02 // SPEED',
      description: 'Sub-second load times optimized with Vite compilation, compressed media, and minimal bundle bloat.',
      highlight: '99+ Lighthouse Score',
    },
    {
      id: 'responsive',
      title: 'Responsive',
      icon: Smartphone,
      accentGradient: 'from-zinc-700 to-zinc-900',
      badge: '03 // ADAPTIVE',
      description: 'Flawless touch controls and fluid typography engineered across smartphones, tablets, and 4K displays.',
      highlight: 'Mobile-First Perfection',
    },
    {
      id: 'affordable',
      title: 'Affordable',
      icon: Tag,
      accentGradient: 'from-zinc-700 to-zinc-900',
      badge: '04 // VALUE',
      description: 'Transparent, competitive pricing designed specifically for small businesses and growing startups.',
      highlight: 'High ROI Investment',
    },
    {
      id: 'reliable',
      title: 'Reliable',
      icon: ShieldCheck,
      accentGradient: 'from-zinc-700 to-zinc-900',
      badge: '05 // TRUST',
      description: 'Dependable communication, strict on-time delivery, and ongoing post-launch technical support.',
      highlight: 'Direct WhatsApp Access',
    },
    {
      id: 'clean-code',
      title: 'Clean Code',
      icon: Code2,
      accentGradient: 'from-zinc-700 to-zinc-900',
      badge: '06 // ARCHITECTURE',
      description: 'Structured, semantic HTML, strict TypeScript safety, and modular components for easy future scaling.',
      highlight: 'Zero Bloat & Bug Free',
    },
  ];

  // Scroll Trigger Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Header sequence item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Cards Grid Stagger
  const cardsGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const cardItemVariant = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      ref={sectionRef}
      id="why-choose-me"
      style={{ backgroundColor }}
      className="relative py-24 sm:py-32 overflow-hidden transition-colors duration-700"
    >
      {/* Section Content */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Scroll Triggered Parent Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-16"
        >
          {/* Header Block sequence: 1. Animated Number (04) -> 2. Heading -> 3. Paragraph */}
          <div className="space-y-6 max-w-3xl">
            {/* 1. ANIMATED NUMBER (04) - APPEARS FIRST */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <span className="text-7xl sm:text-9xl font-display font-black tracking-tighter text-zinc-500 select-none drop-shadow-lg">
                04
              </span>
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>04 // VALUE PROPOSITION</span>
                </div>
                <div className="h-[3px] w-20 bg-zinc-700 rounded-full" />
              </div>
            </motion.div>

            {/* 2. HEADING - APPEARS SECOND (White headings become black as page changes colour) */}
            <motion.h2
              variants={itemVariants}
              style={{ color: headingColor }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.08] transition-colors duration-500"
            >
              WHY CHOOSE ME
            </motion.h2>

            {/* 3. PARAGRAPH - APPEARS THIRD */}
            <motion.p
              variants={itemVariants}
              style={{ color: paragraphColor }}
              className="text-base sm:text-lg leading-relaxed font-normal max-w-2xl transition-colors duration-500"
            >
              Six core pillars engineered to give your business an unfair advantage online — combining modern aesthetics, speed, and uncompromising reliability.
            </motion.p>
          </div>

          {/* 4. CARDS GRID - 6 REASONS WITH LARGE ICONS, MINIMAL TEXT, GLASSMORPHISM, HOVER LIFT */}
          <motion.div
            variants={cardsGridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {reasons.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={item.id} variants={cardItemVariant}>
                  <motion.div
                    onClick={scrollToContact}
                    style={{
                      backgroundColor: cardBgColor,
                      borderColor: cardBorderColor,
                      boxShadow: cardShadow,
                    }}
                    className="group relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] flex flex-col justify-between h-full overflow-hidden cursor-pointer select-none"
                  >
                    {/* Ambient Glow in Top Right */}
                    <div
                      className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${item.accentGradient} rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}
                    />

                    <div className="space-y-6 relative z-10">
                      {/* Top Row: LARGE ICON CONTAINER & BADGE */}
                      <div className="flex items-center justify-between">
                        {/* LARGE ICON */}
                        <div className={`w-16 h-16 rounded-2xl bg-zinc-800 p-0.5 shadow-xl border border-zinc-700 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full rounded-[14px] bg-[#0a0a0a] flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                          </div>
                        </div>

                        {/* Category Badge */}
                        <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                          {item.badge}
                        </span>
                      </div>

                      {/* TITLE (TEXT COLOUR TRANSITIONS WITH SCROLL) */}
                      <motion.h3
                        style={{ color: headingColor }}
                        className="text-2xl font-display font-extrabold tracking-tight transition-colors duration-500"
                      >
                        {item.title}
                      </motion.h3>

                      {/* MINIMAL TEXT DESCRIPTION */}
                      <motion.p
                        style={{ color: paragraphColor }}
                        className="text-sm leading-relaxed font-normal transition-colors duration-500"
                      >
                        {item.description}
                      </motion.p>
                    </div>

                    {/* Bottom Feature Pill & Interactive Arrow */}
                    <div className="mt-8 pt-4 border-t border-zinc-500/20 flex items-center justify-between relative z-10 text-xs font-mono font-semibold">
                      <div className="flex items-center space-x-1.5 text-zinc-300">
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        <span>{item.highlight}</span>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-zinc-800 group-hover:bg-white text-zinc-300 group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
