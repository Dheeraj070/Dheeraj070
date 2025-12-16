import React from 'react';
import SectionTitle from './SectionTitle';
import { SkillCategory } from '../types';
import { Cpu, Globe, Brain, Terminal, Layers, Cloud, Wrench } from 'lucide-react';

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "C++", "SQL"]
  },
  {
    category: "Web Development",
    items: ["JavaScript", "TypeScript", "React.js", "Node.js", "MongoDB", "Firebase", "RESTful APIs"]
  },
  {
    category: "AI/ML",
    items: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "TensorFlow", "Pandas", "NumPy", "Computer Vision"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Google Cloud Platform", "Firebase", "CI/CD", "GitHub Actions"]
  },
  {
    category: "Embedded Systems",
    items: ["STM32", "ESP32", "UART", "Embedded C", "Arduino IDE", "IoT"]
  },
  {
    category: "Tools & Others",
    items: ["MATLAB", "Simulink", "VLSI Design", "Git", "Blackbox Optimization"]
  }
];

const getIcon = (category: string) => {
    switch (category) {
        case "Programming Languages": return <Terminal size={20} />;
        case "Web Development": return <Globe size={20} />;
        case "Embedded Systems": return <Cpu size={20} />;
        case "AI/ML": return <Brain size={20} />;
        case "Cloud & DevOps": return <Cloud size={20} />;
        case "Tools & Others": return <Wrench size={20} />;
        default: return <Layers size={20} />;
    }
}

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((skill, index) => (
          <div key={index} className="glass-card p-6 rounded-xl border-t-2 border-t-transparent hover:border-t-cyan-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 text-cyan-400">
                {getIcon(skill.category)}
                <h3 className="text-lg font-bold text-white">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <span key={idx} className="px-3 py-1.5 text-sm bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;