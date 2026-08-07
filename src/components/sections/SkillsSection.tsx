import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SKILLS } from '../../data/portfolioData';
import { SkillsBackground } from '../ui/Backgrounds';
import {
  Code,
  Layout,
  MapPin,
  Terminal,
  ShieldCheck,
  Paintbrush,
  Atom,
  MessageSquare,
  Server,
  Sparkles,
  Cpu,
  Layers,
  Zap,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Design', 'Integrations'];

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

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

  // White headings become black as section enters view
  const headingColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#ffffff', '#09090b', '#09090b', '#ffffff']
  );

  // Subtitle & body text smoothly animate from light gray to dark gray
  const paragraphColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#a1a1aa', '#27272a', '#27272a', '#a1a1aa']
  );

  // Cards background transition (dark card -> crisp white card -> dark card)
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

  // Inner element background (icon box & progress track)
  const innerBgColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#0a0a0a', '#f4f4f6', '#f4f4f6', '#0a0a0a']
  );

  // Card shadow transition
  const cardShadow = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    [
      '0 20px 25px -5px rgba(0,0,0,0.5)',
      '0 20px 30px -5px rgba(0,0,0,0.06)',
      '0 20px 30px -5px rgba(0,0,0,0.06)',
      '0 20px 25px -5px rgba(0,0,0,0.5)',
    ]
  );

  const getIcon = (_iconName: string) => {
    return <Code className="w-5 h-5 text-zinc-300" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="skills"
      style={{ backgroundColor }}
      className="relative py-28 sm:py-36 overflow-hidden transition-colors duration-700"
    >
      {/* REUSABLE SKILLS BACKGROUND */}
      <SkillsBackground />
      {/* Section Content */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-12"
        >
          {/* Section Number & Category Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <motion.div variants={itemVariants} className="flex items-center space-x-4">
                <span className="text-6xl sm:text-8xl font-display font-black tracking-tighter text-zinc-500 select-none drop-shadow-md">
                  06
                </span>
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs font-bold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>06 // TECHNICAL PROFICIENCY</span>
                  </div>
                  <div className="h-[3px] w-20 bg-zinc-700 rounded-full" />
                </div>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                style={{ color: headingColor }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.1] transition-colors duration-500"
              >
                SKILLS & PROFICIENCY
              </motion.h2>

              <motion.p
                variants={itemVariants}
                style={{ color: paragraphColor }}
                className="text-base sm:text-lg leading-relaxed transition-colors duration-500"
              >
                Mastery in modern frontend frameworks, responsive UI systems, API integrations, and web performance optimization.
              </motion.p>
            </div>

            {/* Filter Tabs */}
            <motion.div
              variants={itemVariants}
              style={{
                backgroundColor: cardBgColor,
                borderColor: cardBorderColor,
              }}
              className="flex flex-wrap gap-2 p-2 rounded-2xl border transition-colors duration-500 shrink-0 shadow-sm"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-zinc-800 text-white font-bold border border-zinc-700'
                      : 'text-zinc-500 hover:text-white font-semibold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Skill Progress Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                style={{
                  backgroundColor: cardBgColor,
                  borderColor: cardBorderColor,
                  boxShadow: cardShadow,
                }}
                className="p-6 rounded-2xl border transition-colors duration-500 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3.5">
                    <motion.div
                      style={{
                        backgroundColor: innerBgColor,
                        borderColor: cardBorderColor,
                      }}
                      className="p-2.5 rounded-xl border group-hover:scale-110 transition-transform duration-300"
                    >
                      {getIcon(skill.iconName)}
                    </motion.div>
                    <div>
                      <motion.h3
                        style={{ color: headingColor }}
                        className="text-base font-display font-bold transition-colors duration-500"
                      >
                        {skill.name}
                      </motion.h3>
                      <motion.p
                        style={{ color: paragraphColor }}
                        className="text-xs transition-colors duration-500 hidden sm:block mt-0.5"
                      >
                        {skill.description}
                      </motion.p>
                    </div>
                  </div>
                  <span className="font-display font-black text-lg text-zinc-300">
                    {skill.level}%
                  </span>
                </div>

                {/* Meter Track & Animated Meter Bar */}
                <motion.div
                  style={{
                    backgroundColor: innerBgColor,
                    borderColor: cardBorderColor,
                  }}
                  className="w-full h-2.5 rounded-full overflow-hidden p-0.5 border transition-colors duration-500"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.name} proficiency level`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-zinc-300 shadow-sm"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};


