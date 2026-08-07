import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ArrowUpRight, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { ProjectImageFrame } from '../ui/ProjectImageFrame';
import { ProjectsBackground } from '../ui/Backgrounds';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  // Container stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  // Section intro fade-up item variant
  const introItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Individual Project card reveal animation variant
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: 'blur(10px)',
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="projects" className="relative py-28 sm:py-36 overflow-hidden bg-[#0a0a0a] text-white">
      {/* REUSABLE PROJECTS BACKGROUND (NO GRID LINES, MATCHES PROCESS AMBIENT GLOWS) */}
      <ProjectsBackground />

      {/* Main Section Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-20 lg:space-y-28"
        >
          {/* SECTION INTRO - Sequential Animation Order */}
          <div className="max-w-3xl space-y-4">
            {/* 1. Large Number 03 */}
            <motion.div variants={introItemVariants} className="flex items-center space-x-4">
              <span className="text-7xl sm:text-9xl font-display font-black tracking-tighter text-zinc-500 select-none drop-shadow-xl">
                03
              </span>
              <div className="space-y-1.5">
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-[11px] font-bold uppercase tracking-widest backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-zinc-300" />
                  <span>PROJECT SHOWCASE</span>
                </span>
                <div className="h-[2px] w-16 bg-zinc-700 rounded-full" />
              </div>
            </motion.div>

            {/* 2. Heading */}
            <motion.h2
              variants={introItemVariants}
              className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Featured <span className="text-white">Projects</span>
            </motion.h2>

            {/* 3. Description */}
            <motion.p
              variants={introItemVariants}
              className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal"
            >
              A selection of digital experiences engineered with meticulous attention to detail, high-performance architecture, and award-grade aesthetics.
            </motion.p>
          </div>

          {/* PROJECT LAYOUT - THREE PROJECTS WITH ALTERNATING DESKTOP LAYOUT */}
          <div className="space-y-24 sm:space-y-32">
            {PROJECTS.map((project, index) => {
              const isEven = index % 2 === 0; // P1 (0) Image left, P2 (1) Image right, P3 (2) Image left

              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="group relative"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    
                    {/* BROWSER WINDOW MOCKUP CONTAINER */}
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative rounded-2xl sm:rounded-3xl bg-[#121216]/90 backdrop-blur-xl border border-white/10 group-hover:border-zinc-500/50 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[0.5deg] group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.85)] overflow-hidden">
                        {/* Glass Sheen Light Reflection Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30" />

                        {/* Realistic Browser Window Controls Bar */}
                        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/10 bg-[#0a0a0e]/80">
                          <div className="flex items-center space-x-2">
                            <span className="w-3 h-3 rounded-full bg-zinc-600" />
                            <span className="w-3 h-3 rounded-full bg-zinc-600" />
                            <span className="w-3 h-3 rounded-full bg-zinc-600" />
                          </div>

                          {/* Address Bar */}
                          <div className="flex items-center space-x-2 px-4 py-1 rounded-lg bg-[#18181d] border border-white/10 text-[11px] font-mono text-zinc-400 max-w-[240px] truncate">
                            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                            <span className="truncate">https://{project.id}.kganya.dev</span>
                          </div>

                          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
                            BROWSER
                          </span>
                        </div>

                        {/* Project Image Display Window */}
                        <ProjectImageFrame image={project.image} title={project.title} />
                      </div>
                    </div>

                    {/* PROJECT INFORMATION CONTAINER */}
                    <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      {/* Status Badge & Subtitle */}
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-zinc-800 text-zinc-300 border border-zinc-700`}>
                          {project.status}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          {project.subtitle}
                        </span>
                      </div>

                      {/* Project Name */}
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Feature List */}
                      <div className="space-y-2.5 pt-2">
                        {project.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-3 text-xs sm:text-sm text-zinc-200">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 shrink-0">
                              <Check className="w-3 h-3" />
                            </span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-[#141419] border border-white/10 text-zinc-300 font-mono text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Call To Action Button - View Case Study */}
                      <div className="pt-4">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                        >
                          <span>VIEW CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4 text-black" />
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
};
