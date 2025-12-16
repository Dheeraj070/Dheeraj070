import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-start pt-20 pb-10">
      <div className="space-y-4">
        <div className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
          Open to Work
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          Dheeraj Reddy K
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-400 font-light">
          Software Developer & <br className="hidden md:block" />
          <span className="text-cyan-400 font-normal"> AI/ML Enthusiast</span>
        </h2>
        <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mt-6">
          Passionate Software Developer with experience in building robust Full Stack applications and intelligent AI/ML solutions. 
          Dedicated to solving complex problems through clean code, modern architectures, and continuous learning.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="mailto:dheerajreddy070@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-sm">
            <Mail size={16} className="text-cyan-400" />
            <span>dheerajreddy070@gmail.com</span>
          </a>
          <a href="http://www.linkedin.com/in/dheerajreddy070" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-sm">
            <Linkedin size={16} className="text-blue-400" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Dheeraj070" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-sm">
            <Github size={16} className="text-purple-400" />
            <span>GitHub</span>
          </a>
          <a href="https://leetcode.com/u/dheerajreddy070/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-sm">
            <Code size={16} className="text-yellow-500" />
            <span>LeetCode</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;