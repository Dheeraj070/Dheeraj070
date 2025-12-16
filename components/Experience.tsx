import React from 'react';
import SectionTitle from './SectionTitle';
import { Briefcase } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    role: "Full Stack Intern",
    company: "Annam.ai - IIT Ropar",
    period: "May 2025 - Oct 2025",
    tech: ["MERN", "TypeScript", "Firebase", "Socket.IO", "Ollama AI", "GCP"],
    points: [
      "Built and deployed a real-time polling web app supporting 100+ users using WebSockets & Firebase Auth.",
      "Integrated Ollama Gemma3 for automatic quiz generation from 10+ min of YouTube video/audio input.",
      "Connected 15+ RESTful APIs to a React.js frontend with Zustand and TanStack Query.",
      "Deployed the backend on Google Cloud Platform and frontend on Firebase, enabling full cloud deployment.",
      "Contributed 110+ commits, managing CI workflows, and reviewing code across modules."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex flex-row items-start justify-between mb-4 gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Briefcase size={20} className="text-cyan-400 shrink-0" />
                  {exp.role}
                </h3>
                <p className="text-cyan-400 font-medium mt-1">{exp.company}</p>
              </div>
              <span className="text-slate-400 text-xs md:text-sm font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5 shrink-0">
                {exp.period}
              </span>
            </div>
            
            <ul className="space-y-2 mb-6 text-slate-300">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1.5 text-xs">●</span>
                  <span className="text-sm md:text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-900/30 border border-cyan-800/50 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;