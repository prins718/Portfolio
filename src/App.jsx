import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Global3D from './components/Global3D';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-blue-500 selection:text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 z-[-1] bg-dark-200">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-purple-600/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      </div>
      
      {/* Global 3D Mesh */}
      <Global3D />

      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 flex flex-col gap-24">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
