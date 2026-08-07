import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Search,
  Map,
  Paintbrush,
  Code2,
  CheckCircle2,
  Rocket,
  Sparkles,
  ArrowRight,
  Shield,
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track scroll position inside the timeline container for animated connecting line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 75%'],
  });

  // Scale of the vertical glowing line driven by scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // The 6 timeline steps requested
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      icon: Search,
      badge: 'PHASE 01 // ANALYSIS',
      accentColor: 'from-zinc-700 to-zinc-900',
      glowColor: 'zinc-500',
      description: 'Understanding your business goals, target audience, brand identity, and project deliverables to craft a tailored strategy.',
      deliverables: ['Goal & Audience Alignment', 'Competitor Research', 'Project Scope & Roadmap'],
    },
    {
      number: '02',
      title: 'Planning',
      icon: Map,
      badge: 'PHASE 02 // ARCHITECTURE',
      accentColor: 'from-zinc-700 to-zinc-900',
      glowColor: 'zinc-500',
      description: 'Architecting site structure, component wireframes, technical stack selection, and content hierarchy for maximum impact.',
      deliverables: ['UI Wireframing & Layouts', 'Tech Stack Selection', 'Content Architecture'],
    },
    {
      number: '03',
      title: 'Design',
      icon: Paintbrush,
      badge: 'PHASE 03 // UI/UX CRAFT',
      accentColor: 'from-zinc-700 to-zinc-900',
      glowColor: 'zinc-500',
      description: 'Crafting bespoke, high-converting visual designs with modern glassmorphism, rich typography, and smooth micro-interactions.',
      deliverables: ['Dark & Light UI Aesthetics', 'Responsive Grid Systems', 'Interactive Prototypes'],
    },
    {
      number: '04',
      title: 'Development',
      icon: Code2,
      badge: 'PHASE 04 // ENGINEERING',
      accentColor: 'from-zinc-700 to-zinc-900',
      glowColor: 'zinc-500',
      description: 'Writing clean, performant TypeScript and React code with modern Tailwind CSS styling and framer-motion animations.',
      deliverables: ['Component-Driven Code', 'Smooth Motion Effects', 'Sub-second Load Optimization'],
    },
    {
      number: '05',
      title: 'Testing',
      icon: CheckCircle2,
      badge: 'PHASE 05 // QUALITY ASSURANCE',
      accentColor: 'from-zinc-700 to-zinc-900',
      glowColor: 'zinc-500',
      description: 'Rigorous cross-browser testing, mobile touch responsiveness audits, performance optimization, and link validation.',
      deliverables: ['Cross-Browser & Device Audit', 'Lighthouse 95+ Speed Check', 'Form & API Validation'],
    },
    {
      number: '06',
      title: 'Launch',
      icon: Rocket,
      badge: 'PHASE 06 // DEPLOYMENT',
      accentColor: 'from-zinc-700 to-zinc-900',
      glowColor: 'zinc-500',
      description: 'Deploying your live application to Vercel/Cloud, configuring SSL certificates, custom domain integration, and handoff.',
      deliverables: ['Production Vercel Deploy', 'Custom Domain & SSL', 'Post-Launch Support'],
    },
  ];

  // Sequence Animation Variants (Staggered scroll-trigger, nothing appears immediately)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.1,
      },
    },
  };

  // Header Items in Sequence: 1. Number -> 2. Heading -> 3. Description
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

  // Timeline Grid Stagger
  const stepsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const stepCardVariant = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Parent Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-16"
        >
          {/* Header Block in Sequence: 1. Number (05) -> 2. Heading -> 3. Description */}
          <div className="space-y-6 max-w-3xl">
            {/* 1. ANIMATED NUMBER (05) - APPEARS FIRST */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <span className="text-7xl sm:text-9xl font-display font-black tracking-tighter text-zinc-500 select-none drop-shadow-lg">
                05
              </span>
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>05 // WORKFLOW & TIMELINE</span>
                </div>
                <div className="h-[3px] w-20 bg-zinc-700 rounded-full" />
              </div>
            </motion.div>

            {/* 2. HEADING - APPEARS SECOND */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]"
            >
              THE DEVELOPMENT <span className="text-white">PROCESS</span>
            </motion.h2>

            {/* 3. DESCRIPTION - APPEARS THIRD */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal max-w-2xl"
            >
              A proven 6-step collaborative methodology engineered to deliver high-performance, custom websites efficiently with total transparency at every stage.
            </motion.p>
          </div>

          {/* 4. TIMELINE CONTAINER WITH ANIMATED CONNECTING LINES */}
          <div ref={timelineRef} className="relative pt-4">
            {/* Desktop Center Connecting Line (Hidden on Mobile) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-[#1a1a1a] rounded-full">
              {/* Scroll Animated Filling Line */}
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-zinc-400 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
            </div>

            {/* Mobile Left Connecting Line */}
            <div className="lg:hidden absolute left-6 top-0 bottom-0 w-1 bg-[#1a1a1a] rounded-full">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-zinc-400 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
            </div>

            {/* Steps Container */}
            <motion.div variants={stepsVariants} className="space-y-12 lg:space-y-16">
              {steps.map((step, index) => {
                const IconComp = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={step.number}
                    variants={stepCardVariant}
                    className={`relative flex flex-col ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } items-center justify-between gap-8 pl-14 lg:pl-0`}
                  >
                    {/* Timeline Node / Marker (Center on Desktop, Left on Mobile) */}
                    <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0a0a0a] border-2 border-zinc-700 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xs font-mono font-bold text-white">
                          {step.number}
                        </span>
                        <div className="absolute -inset-1 rounded-2xl bg-white/10 blur-md -z-10" />
                      </div>
                    </div>

                    {/* Step Content Card */}
                    <div className="w-full lg:w-[calc(50%-3rem)]">
                      <div
                        onClick={scrollToContact}
                        className="group relative p-6 sm:p-8 rounded-3xl bg-[#161616]/75 backdrop-blur-xl border border-white/10 hover:border-zinc-600 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] shadow-2xl cursor-pointer select-none overflow-hidden"
                      >
                        {/* Ambient Glow */}
                        <div className={`absolute -top-12 -right-12 w-36 h-36 bg-[#0a0a0a] rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />

                        <div className="space-y-5 relative z-10">
                          {/* Top Row: Badge & Icon */}
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                              {step.badge}
                            </span>

                            <div className={`w-11 h-11 rounded-xl bg-zinc-800 p-0.5 border border-zinc-700 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <div className="w-full h-full rounded-[10px] bg-[#0a0a0a] flex items-center justify-center">
                                <IconComp className="w-5.5 h-5.5 text-white" />
                              </div>
                            </div>
                          </div>

                          {/* Step Title */}
                          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-zinc-300 transition-colors">
                            {step.title}
                          </h3>

                          {/* Step Description */}
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                            {step.description}
                          </p>

                          {/* Key Deliverables Bullet Points */}
                          <div className="pt-4 border-t border-white/10 space-y-2">
                            <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                              KEY DELIVERABLES
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {step.deliverables.map((deliv, dIdx) => (
                                <div key={dIdx} className="flex items-center space-x-2 text-xs font-mono text-zinc-300">
                                  <Shield className="w-3 h-3 text-zinc-400 shrink-0" />
                                  <span className="truncate">{deliv}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Bottom CTA Link */}
                        <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                          <span>STEP {step.number} OF 06</span>
                          <span className="flex items-center space-x-1 font-bold">
                            <span>EXPLORE PHASE</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for 2-column alternating layout on Desktop */}
                    <div className="hidden lg:block w-[calc(50%-3rem)]" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
