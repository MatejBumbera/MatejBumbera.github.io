import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { projectsData } from '../data';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-stone-400 max-w-2xl text-lg">
          A selection of recent work spanning consumer mobile apps, public utilities, and core database infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, idx) => (
          <div key={idx} className={`glass-card rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 group ${project.highlightColor}`}>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-stone-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-stone-400 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-full bg-warm-900 border border-white/5 text-xs font-medium text-stone-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 text-stone-400">
                {project.links.github && (
                  <a href={project.links.github} className="hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <Code2 className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} className="hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
