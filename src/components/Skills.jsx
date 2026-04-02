import React from 'react';
import { resumeData } from '../data';
import { Code2, Database, Globe, Layers, Settings, FileCode2 } from 'lucide-react';

const getTechIcon = (skillName) => {
  const iconMap = {
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'PHP-MyAdmin': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
  };
  return iconMap[skillName] || null;
};

const Skills = () => {
  const { skills } = resumeData;
  
  const categories = [
    { name: 'Frontend', items: skills.frontend, color: 'from-blue-500 to-cyan-400', icon: <Globe className="text-blue-400 mb-2" size={24} /> },
    { name: 'Backend', items: skills.backend, color: 'from-green-500 to-emerald-400', icon: <Database className="text-green-400 mb-2" size={24} /> },
    { name: 'Programming', items: skills.programming, color: 'from-purple-500 to-pink-400', icon: <FileCode2 className="text-purple-400 mb-2" size={24} /> },
    { name: 'Databases', items: skills.databases, color: 'from-yellow-400 to-orange-500', icon: <Database className="text-yellow-400 mb-2" size={24} /> },
    { name: 'Other', items: skills.other, color: 'from-slate-400 to-slate-200', icon: <Settings className="text-slate-400 mb-2" size={24} /> },
    { name: 'Languages', items: skills.languages, color: 'from-indigo-500 to-purple-400', icon: <Layers className="text-indigo-400 mb-2" size={24} /> },
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
            {category.icon}
            <h3 className={`text-xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, i) => {
                const iconSrc = getTechIcon(skill);
                return (
                  <span 
                    key={i} 
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-slate-700/50 shadow-inner rounded-full text-sm font-medium text-slate-300 group-hover:border-slate-600 transition-colors"
                  >
                    {iconSrc ? (
                      <img src={iconSrc} alt={skill} className="w-5 h-5 object-contain filter drop-shadow-sm bg-white/10 rounded-sm p-0.5" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

