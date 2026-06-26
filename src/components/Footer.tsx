import React from 'react';
import { Code2, Briefcase, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-warm-900/50 mt-12 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a href="https://github.com/MatejBumbera" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-warm-800 text-stone-400 hover:text-white hover:bg-warm-950 transition-colors" aria-label="GitHub">
            <Code2 className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/matej-bumbera-43288725b/?skipRedirect=true" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-warm-800 text-stone-400 hover:text-white hover:bg-warm-950 transition-colors" aria-label="LinkedIn">
            <Briefcase className="w-5 h-5" />
          </a>
          <a href="mailto:matejbumbera1@gmail.com" className="p-2 rounded-full bg-warm-800 text-stone-400 hover:text-white hover:bg-warm-950 transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
          
          <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block"></div>
          
          <a href="https://tryhackme.com/p/matejbumbera" target="_blank" rel="noreferrer" className="text-sm font-medium text-stone-500 hover:text-white transition-colors">
            TryHackMe
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Matej Bumbera — Built with React & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
};
