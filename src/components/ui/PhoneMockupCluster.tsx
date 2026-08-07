import React from 'react';
import { motion } from 'motion/react';

export const PhoneMockupCluster: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 90, y: 90 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1.1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0 pointer-events-auto select-none"
    >
      {/* Background Glow */}
      <div className="absolute -inset-2 rounded-[44px] bg-gradient-to-r from-purple-600/30 via-indigo-600/25 to-blue-600/30 blur-2xl opacity-70" />

      {/* Main Glassmorphism Phone Mockup Frame */}
      <div className="relative z-20 w-full rounded-[40px] bg-[#0e0e11] p-3 border-4 border-[#26262b] shadow-2xl shadow-indigo-950/80">
        {/* Top Speaker Notch & Camera Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#1a1a20] rounded-full z-40 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-black/80 border border-zinc-700" />
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/80" />
        </div>

        {/* Screen Content Container */}
        <div className="relative w-full h-[360px] sm:h-[400px] rounded-[30px] bg-[#141418] border border-white/10 overflow-hidden pt-7 p-4 flex flex-col justify-between text-left">
          {/* Top Status Bar */}
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 px-1">
            <span>9:41</span>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>5G</span>
            </div>
          </div>

          {/* App Preview Card 1: Interactive Performance Metric */}
          <div className="p-3.5 rounded-2xl bg-[#1d1d24]/90 border border-white/10 space-y-2 mt-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Project Velocity</span>
              <span className="text-xs font-bold text-emerald-400">+98.4%</span>
            </div>
            <div className="flex items-end space-x-1.5 h-12 pt-1">
              <div className="flex-1 bg-indigo-500/30 hover:bg-indigo-500 transition-colors h-[40%] rounded-sm" />
              <div className="flex-1 bg-indigo-500/40 hover:bg-indigo-500 transition-colors h-[65%] rounded-sm" />
              <div className="flex-1 bg-indigo-500/60 hover:bg-indigo-500 transition-colors h-[50%] rounded-sm" />
              <div className="flex-1 bg-indigo-500/80 hover:bg-indigo-500 transition-colors h-[85%] rounded-sm" />
              <div className="flex-1 bg-indigo-400 hover:bg-indigo-400 transition-colors h-[100%] rounded-sm" />
            </div>
          </div>

          {/* App Preview Card 2: Live Code / Tech Stack Pill List */}
          <div className="p-3.5 rounded-2xl bg-[#1d1d24]/80 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-indigo-300 uppercase tracking-wider block">Core Architecture</span>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">React 18</span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">TypeScript</span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Tailwind</span>
            </div>
          </div>

          {/* Bottom Interactive Navigation Indicator */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between shadow-lg">
            <span className="text-[11px] font-bold tracking-wide uppercase">Deploy Ready</span>
            <span className="text-xs font-mono">100%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
