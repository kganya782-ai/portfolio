import React, { useState } from 'react';
import { SectionWrapper } from '../animations/SectionWrapper';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeUp } from '../animations/FadeUp';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { CheckCircle2, ExternalLink, Compass, Sparkles, Calendar, ShieldCheck } from 'lucide-react';

interface FeaturedSpotlightProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedSpotlightSection: React.FC<FeaturedSpotlightProps> = ({ onSelectProject }) => {
  const avenewProject = PROJECTS.find((p) => p.id === 'avenew') || PROJECTS[0];
  const [activeTab, setActiveTab] = useState<'explore' | 'ai' | 'booking'>('explore');

  const tabPreviews = {
    explore: {
      title: 'Explore. Travel. Discover.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
      desc: 'Interactive search for top travel destinations with instant filters.',
    },
    ai: {
      title: 'AI Smart Itinerary Planner',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      desc: 'Generates custom trip schedules based on budget & interests.',
    },
    booking: {
      title: 'Instant Booking System',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
      desc: 'Seamless reservation simulation with date pickers & live confirmation.',
    },
  };

  return (
    <SectionWrapper id="spotlight">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Feature Highlights */}
        <div className="lg:col-span-5 space-y-6">
          <SectionHeader
            number="06"
            label="FLAGSHIP SPOTLIGHT"
            title="AVENEW PLATFORM"
            highlightText="AVENEW"
            subtitle="Avenew is my largest flagship project — a complete travel discovery platform built with React, TypeScript, and modern motion engines."
          />

          {/* Checklist */}
          <FadeUp delay={0.4}>
            <div className="space-y-3 pt-2">
              {[
                { label: 'Travel & Explore Engine', icon: <Compass className="w-4 h-4 text-indigo-400" /> },
                { label: 'AI Smart Itinerary Generator', icon: <Sparkles className="w-4 h-4 text-purple-400" /> },
                { label: 'Booking & Reservation System', icon: <Calendar className="w-4 h-4 text-emerald-400" /> },
                { label: 'Modern High-Contrast UI/UX', icon: <CheckCircle2 className="w-4 h-4 text-blue-400" /> },
                { label: 'Fully Mobile Responsive', icon: <ShieldCheck className="w-4 h-4 text-pink-400" /> },
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-3 text-sm font-semibold text-zinc-200">
                  <div className="p-1.5 rounded-lg bg-[#161616] border border-[#262626]">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={() => onSelectProject(avenewProject)}
                className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-indigo-600/30 hover:scale-105 cursor-pointer"
              >
                <span>VIEW PROJECT SPEC</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </FadeUp>
        </div>

        {/* Right Column: Interactive Laptop Frame Mockup */}
        <div className="lg:col-span-7">
          <FadeUp delay={0.3}>
            <div className="relative rounded-3xl bg-[#0a0a0a] border border-[#262626] p-4 sm:p-6 shadow-2xl overflow-hidden group">
              {/* Laptop Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tab Switcher */}
                <div className="flex space-x-1 bg-[#161616] p-1 rounded-xl border border-[#262626]">
                  <button
                    onClick={() => setActiveTab('explore')}
                    className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                      activeTab === 'explore' ? 'bg-indigo-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Explore
                  </button>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                      activeTab === 'ai' ? 'bg-indigo-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    AI Hub
                  </button>
                  <button
                    onClick={() => setActiveTab('booking')}
                    className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                      activeTab === 'booking' ? 'bg-indigo-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Booking
                  </button>
                </div>
              </div>

              {/* Screen Display Frame */}
              <div className="relative mt-4 aspect-video rounded-2xl overflow-hidden border border-[#262626] group">
                <img
                  src={tabPreviews[activeTab].image}
                  alt={tabPreviews[activeTab].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-mono uppercase text-indigo-400 font-bold">
                    AVENEW // Preview Mode
                  </span>
                  <h3 className="text-2xl font-display font-extrabold text-white">
                    {tabPreviews[activeTab].title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 max-w-md">
                    {tabPreviews[activeTab].desc}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </SectionWrapper>
  );
};

