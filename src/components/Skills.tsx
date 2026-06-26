import React from 'react';
import { skillsData } from '../data';

export const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto w-full relative">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Technical Core</h2>
        <p className="text-stone-400 max-w-2xl text-lg">
          A blend of rock-solid database engineering and modern frontend development, allowing me to build full-stack systems from the ground up.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((category, idx) => (
          <div
            key={idx}
            className={`glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 group ${category.color}`}
          >
            <div className="w-12 h-12 rounded-xl bg-warm-900 flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-600 mr-3 group-hover:bg-stone-400 transition-colors" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
