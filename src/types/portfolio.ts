export interface CaseStudyData {
  overview: string;
  problem: string;
  solution: string;
  challenges: string;
  lessonsLearned: string;
}

export interface Project {
  id: string;
  title: string;
  status: 'In Development' | 'Completed' | string;
  subtitle: string;
  category: 'web-dev' | 'ui-ux' | 'fullstack' | 'landing';
  description: string;
  fullDescription: string;
  tags: string[];
  features: string[];
  image: string;
  accentColor: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  caseStudy?: CaseStudyData;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Design' | 'Backend' | 'Soft Skills' | 'Integrations';
  level: number; // 0 - 100
  iconName: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface ContactInfo {
  phone?: string;
  whatsapp: string;
  email: string;
  location: string;
  availability: string;
  socials: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export type ThemePreset = 'purple' | 'emerald' | 'amber' | 'cyan' | 'rose';
