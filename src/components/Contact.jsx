import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { resumeData } from '../data';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setMessage('');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-10 scroll-mt-24 mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 group">
        <MessageSquare className="text-blue-500 group-hover:rotate-12 transition-transform" size={32} />
        <span className="text-gradient hover:scale-105 inline-block transition-transform">Talk With Me</span>
      </h2>

      <div className="glass p-8 md:p-10 rounded-3xl max-w-3xl mx-auto border-t-4 border-t-blue-500 shadow-2xl">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-3">Let's start a conversation</h3>
          <p className="text-gray-400">
            Feel free to reach out to me directly at <a href={`mailto:${resumeData.personalInfo.email}`} className="text-blue-400 hover:text-blue-300 transition-colors font-medium border-b border-blue-400/30 hover:border-blue-400 pb-0.5">{resumeData.personalInfo.email}</a> or send a quick message below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-5">
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              className="flex-1 bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              className="flex-1 bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500"
            />
          </div>
          <textarea 
            placeholder="Your Message..." 
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-gray-500"
          ></textarea>
          <button 
            type="submit" 
            disabled={isSent}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all mt-2 ${isSent ? 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/30' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 -translate-y-0.5'}`}
          >
            {isSent ? (
              <>Message Sent! <span role="img" aria-label="party">🎉</span></>
            ) : (
              <>Send Message <Send size={20} /></>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
