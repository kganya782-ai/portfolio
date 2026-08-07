import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../../data/portfolioData';
import { ServicesBackground } from '../ui/Backgrounds';
import {
  LayoutGrid,
  Rocket,
  Sparkles,
  Smartphone,
  Paintbrush,
  Settings,
  CheckCircle,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-zinc-300" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-zinc-300" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-zinc-300" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-zinc-300" />;
      case 'Paintbrush':
        return <Paintbrush className="w-6 h-6 text-zinc-300" />;
      default:
        return <Settings className="w-6 h-6 text-zinc-300" />;
    }
  };

  const getServiceColor = (_index: number) => {
    return 'from-zinc-800/40 via-zinc-900/20 to-transparent border-zinc-700/50 text-zinc-300';
  };

  // Scroll Trigger Container Variants
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

  // Staggered Children Variants (Nothing appears instantly, strictly scroll-triggered)
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

  // Cards Container Variant for Cards Staggering Upward
  const cardsGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const cardItemVariant = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-[#0a0a0a]">
      {/* REUSABLE SERVICES BACKGROUND */}
      <ServicesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Scroll Triggered Parent Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-16"
        >
          {/* Header Block following exact sequence: 1. Number -> 2. Heading -> 3. Paragraph */}
          <div className="space-y-6 max-w-3xl">
            {/* 1. LARGE ANIMATED NUMBER (02) - APPEARS FIRST */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <span className="text-7xl sm:text-9xl font-display font-black tracking-tighter text-zinc-500 select-none drop-shadow-lg">
                02
              </span>
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>02 // WHAT I DO</span>
                </div>
                <div className="h-[3px] w-20 bg-zinc-700 rounded-full" />
              </div>
            </motion.div>

            {/* 2. HEADING - APPEARS SECOND */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]"
            >
              SERVICES & <span className="text-white">SOLUTIONS</span>
            </motion.h2>

            {/* 3. PARAGRAPH - APPEARS THIRD */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal max-w-2xl"
            >
              Custom web development services engineered specifically for small businesses and growing brands looking to establish a powerful, high-converting digital presence.
            </motion.p>
          </div>

          {/* 4. CARDS GRID - APPEARS FOURTH (Cards stagger upward with glassmorphism, hover lift, shadow, glow, scale) */}
          <motion.div
            variants={cardsGridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {SERVICES.map((serv, index) => {
              const colorStyle = getServiceColor(index);
              return (
                <motion.div key={serv.id} variants={cardItemVariant}>
                  <div
                    onClick={scrollToContact}
                    className="group relative p-7 sm:p-8 rounded-3xl bg-[#161616]/70 backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] shadow-2xl shadow-black/80 hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] flex flex-col justify-between h-full overflow-hidden cursor-pointer select-none"
                  >
                    {/* Ambient Glow Gradient inside Card */}
                    <div
                      className={`absolute -top-12 -right-12 w-44 h-44 bg-gradient-to-br ${colorStyle} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                    />

                    {/* Top Content Area */}
                    <div className="space-y-5 relative z-10">
                      {/* Top Bar with Icon & Action Arrow */}
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a]/90 border border-white/15 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-300 shadow-xl">
                          {getServiceIcon(serv.icon)}
                        </div>

                        <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 group-hover:bg-indigo-600 group-hover:border-indigo-500 text-zinc-400 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                        {serv.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                        {serv.description}
                      </p>

                      {/* Key Highlights Checklist */}
                      <div className="pt-4 border-t border-white/10 space-y-2.5">
                        <span className="block text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold">
                          KEY DELIVERABLES
                        </span>
                        <ul className="space-y-2">
                          {serv.highlights.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-2.5 text-xs font-mono text-zinc-300"
                            >
                              <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Card Footer Badge */}
                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between relative z-10 text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      <div className="flex items-center space-x-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                        <span>CUSTOM BUILT</span>
                      </div>
                      <span className="text-indigo-400 group-hover:underline font-bold">
                        INQUIRE NOW →
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
