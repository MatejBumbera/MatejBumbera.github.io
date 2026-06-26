import React from 'react';
import { experiencesData } from '../data';

export const Experience: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-3xl mx-auto w-full">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
        <p className="text-stone-400 text-lg">
          My journey through database administration and full-stack engineering.
        </p>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-warm-800 before:to-transparent">
        {experiencesData.map((exp, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-warm-950 bg-warm-900 text-stone-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300 z-10">
              {exp.icon}
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl group-hover:border-white/10 transition-colors">
              <div className="mb-4">
                <h3 className="font-bold text-white text-lg leading-tight mb-2">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <time className="w-fit inline-block text-xs font-medium px-3 py-1 bg-warm-900/80 rounded-full text-stone-400 whitespace-nowrap">
                    {exp.date}
                  </time>
                  {exp.company && (
                    <span className="text-sm font-medium text-crimson-500">{exp.company}</span>
                  )}
                </div>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-medium text-stone-500">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
