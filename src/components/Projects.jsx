import React from 'react';
import { resumeData } from '../data';
import { Layout } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-10 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 group">
        <Layout className="text-green-500 group-hover:rotate-12 transition-transform" size={32} />
        <span className="text-gradient group-hover:translate-x-1 transition-transform inline-block">Personal Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {resumeData.projects.map((project, index) => (
          <div key={index} className="glass p-8 rounded-3xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                {project.name}
              </h3>
            </div>
            <p className="text-slate-300 mb-6 font-medium bg-slate-800/80 shadow-inner border border-slate-700/50 inline-block px-4 py-1.5 rounded-full text-sm w-max">
              {project.description}
            </p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                  <span className="text-green-500 mt-1 flex-shrink-0 font-bold">▹</span>
                  <span className="text-sm md:text-base">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
