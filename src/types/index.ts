import type { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
  highlightColor: string;
}

export interface ExperienceData {
  role: string;
  company?: string;
  date: string;
  icon: ReactNode;
  description: string;
  tech: string[];
}

export interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
  color: string;
}
