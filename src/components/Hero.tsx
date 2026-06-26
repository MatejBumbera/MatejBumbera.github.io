import React from 'react';
import { Download, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative pt-20 pb-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto w-full animate-fade-in-up">
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-crimson-500/10 border border-crimson-500/20 text-crimson-500 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-500"></span>
          </span>
          <span>Available for new opportunities</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-500 to-rust-500">Matej Bumbera</span>.<br/>
          Full-Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rust-500 to-copper-500">Database Administrator</span>.
        </h1>
        
        <p className="text-lg sm:text-xl text-stone-400 max-w-2xl leading-relaxed">
          I build robust infrastructure and elegant consumer applications. 
          2+ years of production DBA experience combined with 1+ year of full-stack startup engineering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <a href="#projects" className="group inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-warm-950 font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            View Systems & Apps
            <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a href="/MatejBumbera_CV.pdf" download="MatejBumbera_CV.pdf" className="group inline-flex items-center justify-center px-6 py-3 rounded-xl glass-card text-stone-300 font-medium transition-all duration-300 hover:bg-warm-800 hover:border-white/10 hover:scale-105">
            <Download className="mr-2 w-4 h-4 text-stone-400 group-hover:text-crimson-500 transition-colors" />
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};
