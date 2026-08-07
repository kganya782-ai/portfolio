import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Layers, AlertCircle, Lightbulb, ShieldAlert, GraduationCap, Code } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { ProjectImageFrame } from './ProjectImageFrame';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            layoutId={`project-container-${project.id}`}
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#0f0f13] border border-white/10 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#08080a] shrink-0">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-zinc-600" />
                <span className="w-3 h-3 rounded-full bg-zinc-500" />
                <span className="w-3 h-3 rounded-full bg-zinc-400" />
                <span className="ml-2 text-xs font-mono text-zinc-400 uppercase tracking-widest hidden sm:inline">
                  CASE STUDY // {project.title.toUpperCase()}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {project.status}
                </span>

                <button
                  onClick={onClose}
                  aria-label="Close case study modal"
                  className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto space-y-10 custom-scrollbar">
              {/* Large Project Image Banner */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#050508] shadow-2xl">
                <ProjectImageFrame
                  image={project.image}
                  title={project.title}
                  aspectRatio="aspect-[21/9] sm:aspect-[21/8]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-[#0f0f13]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 pointer-events-none z-20">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-1">
                    {project.subtitle}
                  </span>
                  <h2 id="case-study-title" className="text-3xl sm:text-5xl font-display font-black text-white">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Main Case Study Sections Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Main Content Area (8 Cols) */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Overview */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                      <Layers className="w-5 h-5 text-zinc-400" />
                      <span>Project Overview</span>
                    </h3>
                    <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                      {project.caseStudy?.overview || project.fullDescription}
                    </p>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                      <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span>Problem</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {project.caseStudy?.problem || 'Addressing user friction and delivering a high-performance web experience for modern users.'}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                      <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span>Solution</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {project.caseStudy?.solution || 'Engineered an intuitive interface with optimized client performance and sleek design architecture.'}
                      </p>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-zinc-400" />
                      <span>Key Features</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center space-x-3 text-xs sm:text-sm text-zinc-200">
                          <span className="w-2 h-2 rounded-full bg-zinc-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Lessons Learned */}
                  <div className="space-y-6 pt-2 border-t border-white/10">
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span>Technical Challenges</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {project.caseStudy?.challenges || 'Optimizing rendering performance and ensuring flawless responsiveness across all viewports.'}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span>Lessons Learned</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {project.caseStudy?.lessonsLearned || 'Modular code structure and disciplined typography scales make codebases significantly more scalable.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar (4 Cols) - Technologies & Metadata */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Technologies Card */}
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                      <Code className="w-4 h-4 text-zinc-400" />
                      <span>Technologies</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-[#08080a] border border-white/10 text-xs font-mono text-zinc-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status & Details Box */}
                  <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold block">
                      PROJECT STATUS
                    </span>
                    <p className="text-sm text-zinc-200 font-medium">
                      {project.status === 'In Development'
                        ? 'Actively being refined and expanded with upcoming integrations.'
                        : 'Fully completed with production-ready codebase.'}
                    </p>
                    <button
                      onClick={onClose}
                      className="w-full mt-4 py-3 px-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg"
                    >
                      Close Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
