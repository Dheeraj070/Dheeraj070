import React from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Github, Linkedin, MapPin, Phone, Twitter, Instagram, Code, GraduationCap } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 mb-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Connect</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, innovative projects, and collaborations.
            </p>
            
            {/* Primary Action */}
            <a 
              href="mailto:dheerajreddy070@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-slate-900 font-bold rounded-xl hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 mb-12"
            >
              <Mail size={20} />
              <span>Say Hello</span>
            </a>

            {/* Social Links Row */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12">
                <a href="https://github.com/Dheeraj070" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-cyan-400 transition-all border border-slate-700 group" title="GitHub">
                    <Github size={24} />
                </a>
                <a href="http://www.linkedin.com/in/dheerajreddy070" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-cyan-400 transition-all border border-slate-700 group" title="LinkedIn">
                    <Linkedin size={24} />
                </a>
                <a href="https://leetcode.com/u/dheerajreddy070/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-yellow-500 transition-all border border-slate-700 group" title="LeetCode">
                    <Code size={24} />
                </a>
                <a href="https://x.com/Dheeraj_7x" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-all border border-slate-700 group" title="X (Twitter)">
                    <Twitter size={24} />
                </a>
                <a href="https://www.instagram.com/dheeraj_7x/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-pink-500 transition-all border border-slate-700 group" title="Instagram">
                    <Instagram size={24} />
                </a>
                <a href="tel:+917396189606" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-green-400 transition-all border border-slate-700 group" title="Phone">
                    <Phone size={24} />
                </a>
            </div>

            {/* Contact Details Centered */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/5 pt-8">
                 <div className="flex flex-col items-center p-2">
                     <div className="flex items-center gap-2 text-cyan-400 mb-2">
                        <MapPin size={16} />
                        <h3 className="text-white font-semibold text-sm">Location</h3>
                     </div>
                     <p className="text-slate-400 text-sm">Karimnagar, Telangana</p>
                 </div>

                 <div className="flex flex-col items-center p-2">
                     <div className="flex items-center gap-2 text-cyan-400 mb-2">
                        <GraduationCap size={16} />
                        <h3 className="text-white font-semibold text-sm">Education</h3>
                     </div>
                     <p className="text-slate-400 text-sm text-center">Student @ NIT AP</p>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;