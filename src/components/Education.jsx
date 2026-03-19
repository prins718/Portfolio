import React from 'react';
import { resumeData } from '../data';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-10 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 group">
        <GraduationCap className="text-orange-500 group-hover:rotate-12 transition-transform" size={36} />
        <span className="text-gradient group-hover:translate-x-1 transition-transform inline-block">Education</span>
      </h2>
      
      <div className="grid grid-cols-1 gap-6">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="glass p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4 border-l-orange-500 hover:border-l-orange-400 transition-colors">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-lg text-blue-400 font-medium">{edu.institution}</p>
            </div>
            <div className="bg-slate-900 border border-slate-700/50 px-6 py-3 rounded-2xl shadow-inner inline-flex self-start md:self-auto items-center hover:scale-105 transition-transform">
              <span className="text-lg font-bold text-orange-400">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
