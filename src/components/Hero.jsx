import React from 'react';
import { resumeData } from '../data';
import { Github, Linkedin, Mail, MapPin, Phone, Download } from 'lucide-react';

const Hero = () => {
  const { personalInfo } = resumeData;

  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center animate-fade-in-up relative z-10">
      <div className="max-w-4xl relative pointer-events-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Hi, I'm <br className="md:hidden" /><span className="text-gradient hover:scale-105 inline-block transition-transform cursor-default">{personalInfo.name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
          {personalInfo.role}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
          {personalInfo.summary}
        </p>

        <div className="flex flex-wrap gap-6 mb-10 text-gray-400">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <MapPin size={20} className="text-blue-500" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full hover:border-blue-500/50 transition-colors">
            <Phone size={20} className="text-green-500" />
            <a href={`tel:${personalInfo.phone.replace(/ /g, '')}`} className="hover:text-white transition-colors">{personalInfo.phone}</a>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500 text-white shadow-lg">
            <Github size={24} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500 text-white shadow-lg">
            <Linkedin size={24} />
          </a>
          <a href="/Prins_N_Desai_Resume.pdf" download="Prins_N_Desai_Resume.pdf" className="ml-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-semibold transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500 shadow-lg flex items-center gap-2 text-white">
            <Download size={20} />
            <span className="hidden sm:inline">Download</span> Resume
          </a>
          <a href="#contact" className="ml-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-transform hover:-translate-y-1 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center gap-2 text-white">
            <Mail size={20} />
            <span className="hidden sm:inline">Talk With Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
