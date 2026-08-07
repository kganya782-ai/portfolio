import React from 'react';
import { THEME_PRESETS } from '../../theme/themeConfig';
import { ThemePreset } from '../../types/portfolio';
import { Palette } from 'lucide-react';

interface ThemeCustomizerProps {
  currentTheme: ThemePreset;
  onSelectTheme: (theme: ThemePreset) => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  currentTheme,
  onSelectTheme,
}) => {
  const presets: { id: ThemePreset; label: string; color: string }[] = [
    { id: 'purple', label: 'Neon Purple', color: THEME_PRESETS.purple.primary },
    { id: 'emerald', label: 'Emerald Green', color: THEME_PRESETS.emerald.primary },
    { id: 'amber', label: 'Amber Gold', color: THEME_PRESETS.amber.primary },
    { id: 'cyan', label: 'Cyber Cyan', color: THEME_PRESETS.cyan.primary },
    { id: 'rose', label: 'Rose Pink', color: THEME_PRESETS.rose.primary },
  ];

  return (
    <div className="flex items-center space-x-1.5 bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl p-1.5 rounded-full shadow-xl">
      <div className="pl-2 pr-1 text-zinc-400 hidden sm:flex items-center space-x-1 text-xs font-medium">
        <Palette className="w-3.5 h-3.5 text-zinc-300" />
        <span>Accent:</span>
      </div>
      <div className="flex items-center space-x-1">
        {presets.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelectTheme(p.id)}
            title={p.label}
            className={`relative w-5 h-5 rounded-full transition-transform duration-200 transform hover:scale-125 focus:outline-none ${
              currentTheme === p.id ? 'ring-2 ring-white ring-offset-2 ring-offset-zinc-900 scale-110' : 'opacity-70 hover:opacity-100'
            }`}
            style={{ backgroundColor: p.color }}
          >
            {currentTheme === p.id && (
              <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ backgroundColor: p.color }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
