import React from 'react';
import SectionTitle from './SectionTitle';
import { GraduationCap, Award, BookOpen, Users, Cpu, FileCode, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="flex flex-col gap-16">
        
        {/* Education Section - List View */}
        <div className="w-full">
          <SectionTitle>Education</SectionTitle>
          <div className="flex flex-col gap-6">
            <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-cyan-500 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none z-0">
                <GraduationCap size={200} />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-4">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">B.Tech in Electrical & Electronics Engineering</h3>
                    <p className="text-cyan-400 font-medium mb-2 text-sm md:text-base">Minor in Software Engineering</p>
                    <div className="text-slate-300 text-base md:text-lg">National Institute of Technology, Andhra Pradesh</div>
                    <span className="inline-block mt-3 px-3 py-1 bg-slate-800 rounded-full text-cyan-400 text-xs md:text-sm border border-slate-700">GPA: 8.19/10</span>
                </div>
                <div className="md:text-right shrink-0 w-full md:w-auto flex justify-end">
                    <span className="block text-slate-400 font-mono text-xs md:text-sm bg-slate-800/50 px-2 py-1 rounded">Expected May 2026</span>
                </div>
              </div>
            </div>

             <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-slate-500 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none z-0">
                <BookOpen size={200} />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-4">
                 <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Intermediate Education</h3>
                    <p className="text-slate-400 font-medium mb-2 text-sm md:text-base">MPC (Maths, Physics, Chemistry)</p>
                    <div className="text-slate-300 text-base md:text-lg">Alphores Junior College, Karimnagar</div>
                    <span className="inline-block mt-3 px-3 py-1 bg-slate-800 rounded-full text-slate-300 text-xs md:text-sm border border-slate-700">Score: 98.2%</span>
                 </div>
                 <div className="md:text-right shrink-0 w-full md:w-auto flex justify-end">
                     <span className="block text-slate-400 font-mono text-xs md:text-sm bg-slate-800/50 px-2 py-1 rounded">Jun 2020 - Jun 2022</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section - List View */}
        <div id="certifications" className="w-full">
          <SectionTitle>Certifications & Courses</SectionTitle>
          <div className="flex flex-col gap-4">
                        <a 
              href="https://nptel.ac.in/noc/E_Certificate/NPTEL25EE106S66960026810303360"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl hover:bg-slate-800/40 transition-colors flex flex-row items-start justify-between gap-4 border-l-2 border-l-purple-500 group"
            >
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 hidden sm:block">
                    <Award size={24} />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-white leading-tight pr-2 flex items-center gap-2 group-hover:text-purple-400 transition-colors">
                      VLSI Design Flow: RTL to GDS
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <p className="text-slate-400 text-sm">NPTEL - IIIT Delhi</p>
                    </div>
                 </div>
              </div>
              <span className="text-xs md:text-sm font-mono text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                Jul 2025 - Oct 2025
              </span>
            </a>

            <a 
              href="https://www.udemy.com/certificate/UC-57c3d4ed-178e-4d4f-ad98-8afa6d2862b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl hover:bg-slate-800/40 transition-colors flex flex-row items-start justify-between gap-4 border-l-2 border-l-green-500 group"
            >
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-green-500/10 rounded-lg text-green-400 hidden sm:block">
                    <Award size={24} />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-white leading-tight pr-2 flex items-center gap-2 group-hover:text-green-400 transition-colors">
                      Machine Learning A-Z: AI, Python & R
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <p className="text-slate-400 text-sm">Udemy</p>
                    </div>
                 </div>
              </div>
              <span className="text-xs md:text-sm font-mono text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                Oct 2024 - Dec 2024
              </span>
            </a>

            <a 
              href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S106210035703872584"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl hover:bg-slate-800/40 transition-colors flex flex-row items-start justify-between gap-4 border-l-2 border-l-blue-500 group"
            >
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 hidden sm:block">
                    <Award size={24} />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-white leading-tight pr-2 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                      Cloud Computing
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <p className="text-slate-400 text-sm">NPTEL - IIT Kharagpur</p>
                    </div>
                 </div>
              </div>
              <span className="text-xs md:text-sm font-mono text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                Jul 2024 - Oct 2024
              </span>
            </a>

            <a 
              href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=829b8fda-0869-4852-ad20-7e37f2482c08&"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl hover:bg-slate-800/40 transition-colors flex flex-row items-start justify-between gap-4 border-l-2 border-l-orange-500 group"
            >
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-orange-500/10 rounded-lg text-orange-400 hidden sm:block">
                    <FileCode size={24} />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-white leading-tight pr-2 flex items-center gap-2 group-hover:text-orange-400 transition-colors">
                      MATLAB Onramp
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <p className="text-slate-400 text-sm">MATLAB</p>
                    </div>
                 </div>
              </div>
              <span className="text-xs md:text-sm font-mono text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                Mar 2024
              </span>
            </a>

          </div>
        </div>

        {/* Split Section: Workshops (Left) & Positions (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Workshops Column */}
            <div className="flex flex-col gap-6">
                <SectionTitle>Workshops</SectionTitle>
                <div className="flex flex-col gap-6">
                    <div className="glass-card p-5 rounded-xl border-l-2 border-l-orange-500">
                        <div className="flex justify-between items-start mb-2 gap-4">
                             <h4 className="font-bold text-white text-lg">NVIDIA DLI Workshop</h4>
                             <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded shrink-0">Mar 2025</span>
                        </div>
                        <p className="text-slate-400 text-sm">Deep Learning fundamentals and transformer-based NLP architectures.</p>
                    </div>

                    <div className="glass-card p-5 rounded-xl border-l-2 border-l-red-500">
                        <div className="flex justify-between items-start mb-2 gap-4">
                             <h4 className="font-bold text-white text-lg">MATLAB Simulink</h4>
                             <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded shrink-0">Apr 2024</span>
                        </div>
                        <p className="text-slate-400 text-sm">Modeled 5+ real-world systems under DRDO Scientist guidance.</p>
                    </div>

                    <div className="glass-card p-5 rounded-xl border-l-2 border-l-yellow-500">
                        <div className="flex justify-between items-start mb-2 gap-4">
                             <h4 className="font-bold text-white text-lg">PCB Design</h4>
                             <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded shrink-0">Mar 2024</span>
                        </div>
                        <p className="text-slate-400 text-sm">PCB layout design for complex electric circuits.</p>
                    </div>
                </div>
            </div>

            {/* Positions of Responsibility Column */}
            <div className="flex flex-col gap-6">
                <SectionTitle>Positions of Responsibility</SectionTitle>
                <div className="flex flex-col gap-6">
                    <div className="glass-card p-5 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                            <Users size={24} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-white text-lg">Senior Executive Member</h4>
                                <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded shrink-0 ml-2">Jul 2024 - Apr 2025</span>
                            </div>
                            <p className="text-cyan-500 text-sm font-medium">EESA, NIT AP</p>
                        </div>
                    </div>

                    <div className="glass-card p-5 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                            <Cpu size={24} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-white text-lg">Team Lead</h4>
                                <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded shrink-0 ml-2">Aug 2024 - Nov 2024</span>
                            </div>
                            <p className="text-cyan-500 text-sm font-medium">Smart India Hackathon</p>
                        </div>
                    </div>

                    <div className="glass-card p-5 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                            <Users size={24} />
                        </div>
                        <div className="flex-1">
                             <div className="flex justify-between items-start">
                                <h4 className="font-bold text-white text-lg">Team Lead</h4>
                                <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded shrink-0 ml-2">Jul 2024 - Dec 2024</span>
                            </div>
                            <p className="text-cyan-500 text-sm font-medium">EPICS Project</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Education;