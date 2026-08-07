import React from 'react';
import { motion } from 'motion/react';
import { Code2, ExternalLink, Sparkles, Layout, Zap } from 'lucide-react';

export const Hero3DGraphicCluster: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center pointer-events-auto select-none">
      {/* Background Soft Lighting */}
      <div className="absolute inset-0 rounded-3xl bg-indigo-600/10 blur-3xl" />

      {/* Main Glass Browser Window Mockup */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        className="relative w-full rounded-2xl bg-[#121216]/95 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden p-4 sm:p-6"
      >
        {/* Browser Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>https://avenew.travel</span>
          </div>
          <ExternalLink className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Browser Mockup Body - Product Layered Components */}
        <div className="pt-4 space-y-4">
          <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 to-purple-950/40 border border-indigo-500/20 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold block">
                FLAGSHIP PROJECT
              </span>
              <h4 className="text-sm font-display font-bold text-white">Avenew Travel Platform</h4>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-indigo-600 text-white font-mono text-[10px] font-bold">
              LIVE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center space-x-1.5 text-xs text-zinc-300 font-semibold">
                <Layout className="w-3.5 h-3.5 text-indigo-400" />
                <span>Responsive</span>
              </div>
              <p className="text-[10px] font-mono text-zinc-400">Mobile to 4K</p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center space-x-1.5 text-xs text-zinc-300 font-semibold">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Lighthouse</span>
              </div>
              <p className="text-[10px] font-mono text-emerald-400">98/100 Speed</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
