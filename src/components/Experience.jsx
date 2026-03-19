import React from 'react';
import { resumeData } from '../data';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-10 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 group">
        <Briefcase className="text-blue-500 group-hover:rotate-12 transition-transform" size={34} />
        <span className="text-gradient inline-block group-hover:translate-x-1 transition-transform">Experience</span>
      </h2>
      
      <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-6 space-y-12">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-10">
            {/* Timeline dot */}
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            
            <div className="glass p-6 md:p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.role}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-400 mb-6 font-medium">
                <span className="text-blue-400">{exp.company}</span>
                <span className="hidden sm:inline text-gray-600">•</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-slate-500" /> {exp.location}</span>
                <span className="hidden sm:inline text-gray-600">•</span>
                <span className="flex items-center gap-2"><Calendar size={16} className="text-slate-500" /> {exp.date}</span>
              </div>
              
              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <span className="text-blue-500 mt-1 flex-shrink-0 font-bold">▹</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
