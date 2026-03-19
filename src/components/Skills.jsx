import React from 'react';
import { resumeData } from '../data';
import { Code2 } from 'lucide-react';

const Skills = () => {
  const { skills } = resumeData;
  
  const categories = [
    { name: 'Frontend', items: skills.frontend, color: 'from-blue-500 to-cyan-400' },
    { name: 'Backend', items: skills.backend, color: 'from-green-500 to-emerald-400' },
    { name: 'Programming', items: skills.programming, color: 'from-purple-500 to-pink-400' },
    { name: 'Databases', items: skills.databases, color: 'from-yellow-400 to-orange-500' },
    { name: 'Other', items: skills.other, color: 'from-slate-400 to-slate-200' },
    { name: 'Languages', items: skills.languages, color: 'from-indigo-500 to-purple-400' },
  ];

  return (
    <section id="skills" className="py-10 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 group">
        <Code2 className="text-purple-500 group-hover:rotate-12 transition-transform" size={32} />
        <span className="text-gradient group-hover:translate-x-1 transition-transform inline-block">Technical Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="glass p-6 rounded-2xl hover:bg-slate-800/50 transition-colors group">
            <h3 className={`text-xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-slate-900/80 border border-slate-700/50 shadow-inner rounded-full text-sm font-medium text-slate-300 group-hover:border-slate-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
