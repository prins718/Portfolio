import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 mt-20 py-12 bg-slate-900/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-400 font-medium mb-3">
          Designed & Built dynamically with React & Tailwind CSS
        </p>
        <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
          &copy; {new Date().getFullYear()} Prins Desai. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
