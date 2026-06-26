import { Server, Layout, Database, Briefcase } from 'lucide-react';
import type { Project, ExperienceData, SkillCategory } from '../types';

export const projectsData: Project[] = [
  {
    title: 'Miaco',
    description: 'A mobile marketplace platform tailored for the cosplay community. Features modern architecture, smooth user onboarding, and robust third-party integrations.',
    tags: ['Ktor', 'React Native', 'Kotlin', 'TypeScript'],
    links: { live: 'https://play.google.com/store/apps/details?id=com.bumbera.app&hl=en' },
    highlightColor: 'group-hover:border-crimson-500/50'
  },
  {
    title: 'Fénix Backup System',
    description: 'Engineering project for ICS MU focusing on database backup & recovery tooling. Highlights deep database internals work and SQL optimization.',
    tags: ['PostgreSQL', 'Bash', 'System Internals', 'Security'],
    links: { live: 'https://is.muni.cz/th/ajb76/' },
    highlightColor: 'group-hover:border-copper-500/50'
  },
  {
    title: 'Online Banking System',
    description: 'Academic project simulating an online banking system built with Spring Boot. Features a robust microservice architecture for secure transaction processing and account management.',
    tags: ['Spring Boot', 'Java', 'Microservices'],
    links: {},
    highlightColor: 'group-hover:border-rust-500/50'
  }
];

export const experiencesData: ExperienceData[] = [
  {
    role: 'Startup Software Engineer',
    date: 'Jun 2025 — Present',
    icon: <Briefcase className="w-5 h-5 text-crimson-500" />,
    description: 'Focused on building highly responsive user interfaces utilizing React and developing robust backend capabilities with Kotlin. Contributed to rapid feature iteration and scalable architecture in a fast-paced environment.',
    tech: ['React', 'Kotlin', 'TypeScript']
  },
  {
    role: 'Database Administrator',
    company: 'ICS MU',
    date: 'Mar 2024 — Present',
    icon: <Database className="w-5 h-5 text-copper-500" />,
    description: 'Managed and maintained large-scale MS SQL and PostgreSQL databases. Authored complex SQL optimizations to improve query performance, automated critical system administration tasks via Bash scripts, and ensured high availability and uptime for university services.',
    tech: ['MS SQL Server', 'PostgreSQL', 'Bash', 'SQL Optimization', 'Linux']
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6 text-crimson-500" />,
    skills: ['Kotlin', 'Ktor', 'Java', 'Spring Boot'],
    color: 'hover:border-crimson-500/50',
  },
  {
    title: 'Frontend & Mobile',
    icon: <Layout className="w-6 h-6 text-rust-500" />,
    skills: ['React', 'React Native', 'TypeScript', 'Tailwind CSS'],
    color: 'hover:border-rust-500/50',
  },
  {
    title: 'Databases & Infra',
    icon: <Database className="w-6 h-6 text-copper-500" />,
    skills: [
      'PostgreSQL',
      'Microsoft SQL Server',
      'SQL optimization',
      'Bash scripting',
      'Linux/Ubuntu',
      'Git CI/CD',
    ],
    color: 'hover:border-copper-500/50',
  },
];
