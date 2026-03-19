import React from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { resumeData } from '../data';

const Contact = () => {
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
            Send me a direct message by securely filling out the form below. 
            It goes straight to my inbox!
          </p>
        </div>

        {/* Standard HTML Form Submission to FormSubmit */}
        <form action="https://formsubmit.co/prinsdesai786@gmail.com" method="POST" className="flex flex-col gap-5">
          
          {/* Honeypot to prevent spam bots */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          
          {/* Disable Captcha for smoother user experience */}
          <input type="hidden" name="_captcha" value="false" />
          
          {/* Redirect back to the portfolio after sending */}
          <input type="hidden" name="_next" value={window.location.href} />
          
          {/* Email Subject Line */}
          <input type="hidden" name="_subject" value="New Portfolio Message!" />

          <div className="flex flex-col md:flex-row gap-5">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              required
              className="flex-1 bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500"
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              required
              className="flex-1 bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500"
            />
          </div>
          
          <textarea 
            name="message"
            placeholder="Your Message..." 
            rows="5"
            required
            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-gray-500"
          ></textarea>
          
          <button 
            type="submit" 
            className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all mt-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
          >
            Send Message Now <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
