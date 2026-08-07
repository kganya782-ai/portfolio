import { ThemePreset } from '../types/portfolio';

export interface ThemeColors {
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryGlow: string;
  accent: string;
}

export const THEME_PRESETS: Record<ThemePreset, ThemeColors> = {
  purple: {
    primary: '#6366f1', // Indigo 500 (Elegant Dark accent)
    primaryHover: '#4f46e5', // Indigo 600
    primaryLight: '#818cf8', // Indigo 400
    primaryGlow: 'rgba(99, 102, 241, 0.35)',
    accent: '#c7d2fe',
  },
  emerald: {
    primary: '#10b981', // Emerald 500
    primaryHover: '#059669', // Emerald 600
    primaryLight: '#34d399', // Emerald 400
    primaryGlow: 'rgba(16, 185, 129, 0.35)',
    accent: '#a7f3d0',
  },
  amber: {
    primary: '#f59e0b', // Amber 500
    primaryHover: '#d97706', // Amber 600
    primaryLight: '#fbbf24', // Amber 400
    primaryGlow: 'rgba(245, 158, 11, 0.35)',
    accent: '#fde68a',
  },
  cyan: {
    primary: '#06b6d4', // Cyan 500
    primaryHover: '#0891b2', // Cyan 600
    primaryLight: '#22d3ee', // Cyan 400
    primaryGlow: 'rgba(6, 182, 212, 0.35)',
    accent: '#a5f3fc',
  },
  rose: {
    primary: '#f43f5e', // Rose 500
    primaryHover: '#e11d48', // Rose 600
    primaryLight: '#fb7185', // Rose 400
    primaryGlow: 'rgba(244, 63, 94, 0.35)',
    accent: '#fecdd3',
  },
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const TYPOGRAPHY = {
  fontFamily: {
    sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
    display: ['Syne', 'Outfit', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  scale: {
    hero: 'clamp(2.5rem, 6vw, 4.5rem)',
    h1: 'clamp(2rem, 4vw, 3.25rem)',
    h2: 'clamp(1.5rem, 3vw, 2.25rem)',
    h3: 'clamp(1.25rem, 2vw, 1.65rem)',
    body: '1rem',
    small: '0.875rem',
  },
};
