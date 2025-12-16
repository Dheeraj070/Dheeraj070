import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { FolderGit2, X, Github, ExternalLink, Maximize2 } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "Online Library Management System",
    period: "Oct 2025 - Present",
    tech: ["React.js", "Node.js", "MySQL 8.0", "Firebase Auth", "Aiven Cloud"],
    description: [
      "Engineered a Full-stack Library Management System with 15 REST endpoints connecting frontend to cloud database.",
      "Designed 4 normalized database schemas (3NF) with foreign key constraints."
    ],
    longDescription: "A comprehensive digital solution designed to modernize library operations. This full-stack application streamlines the management of books, members, and transactions. By deploying the database on Aiven Cloud and utilizing Firebase for secure authentication, the system ensures high availability and data integrity. The backend architecture supports complex queries for real-time book availability checking and fine calculation.",
    links: {
      github: "https://github.com/Dheeraj070"
    }
  },
  {
    title: "Full-stack RAG Chatbot using FAISS",
    period: "Feb 2025 - Mar 2025",
    tech: ["Flask", "React.js", "Gemini API", "FAISS", "JWT", "Firebase", "Python"],
    description: [
      "Developed AI chatbot with Flask backend, React frontend, and Gemini API.",
      "Leveraged FAISS vector search reducing latency 50x across 50,000+ embeddings."
    ],
    longDescription: "An intelligent chatbot capable of Retrieval-Augmented Generation (RAG). It processes uploaded PDF documents, creates high-dimensional vector embeddings, and stores them using FAISS for ultra-fast similarity search. Users can ask context-aware questions about their documents, and the system retrieves relevant sections to generate accurate answers using the Google Gemini API. Security is handled via JWT tokens.",
    links: {
      github: "https://github.com/Dheeraj070"
    }
  },
  {
    title: "Battery SOH and RUL Prediction",
    period: "Mar 2025",
    tech: ["Python", "LSTM", "XGBoost", "DDPG", "TensorFlow", "Pandas"],
    description: [
      "Implemented predictive modeling pipelines using 50,000+ records from NASA battery datasets.",
      "Trained LSTM and XGBoost models on real-world battery data, achieving error <5%."
    ],
    longDescription: "This research-oriented project focuses on predicting the State of Health (SOH) and Remaining Useful Life (RUL) of Lithium-ion batteries. By analyzing extensive datasets from NASA, I developed deep learning models (LSTM) and ensemble methods (XGBoost) to forecast battery degradation. Additionally, Deep Deterministic Policy Gradient (DDPG) reinforcement learning was explored to optimize charging cycles for extended battery life.",
    links: {
      github: "https://github.com/Dheeraj070"
    }
  },
  {
    title: "Transformer Health Monitoring",
    period: "Feb 2025 - Mar 2025",
    tech: ["ESP32", "IoT", "Sensors", "Blynk", "Embedded C"],
    description: [
      "Designed an IoT-based health monitoring system using ESP32 and 4+ industrial sensors.",
      "Implemented real-time data logging and alerting through Blynk."
    ],
    longDescription: "A robust IoT solution for monitoring critical parameters of electrical transformers such as oil temperature, humidity, and load current. The system uses an ESP32 microcontroller to collect sensor data and transmits it wirelessly to the Blynk cloud platform. Real-time dashboards allowing for predictive maintenance and immediate alert generation in case of anomalies, significantly reducing downtime risks.",
    links: {
      github: "https://github.com/Dheeraj070"
    }
  },
  {
    title: "Real-Time GPS Tracking System",
    period: "Sep 2024 - Dec 2024",
    tech: ["STM32", "GPS Module", "UART", "Bluetooth", "HAL Drivers"],
    description: [
      "Interfaced STM32 microcontroller with GPS module using UART to decode 1,500+ NMEA strings.",
      "Developed firmware using Embedded C to transmit location data."
    ],
    longDescription: "An embedded systems project focused on precise location tracking. It involves low-level driver development for the STM32 microcontroller to parse NMEA data streams from a GPS module. The parsed coordinates are transmitted via Bluetooth to a mobile interface. This project demonstrates proficiency in UART communication, interrupt handling, and memory-constrained programming in Embedded C.",
    links: {
      github: "https://github.com/Dheeraj070"
    }
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20">
      <SectionTitle>Projects</SectionTitle>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="glass-card p-6 md:p-8 rounded-xl hover:bg-slate-800/40 transition-all cursor-pointer group border border-transparent hover:border-cyan-500/30"
            onClick={() => setSelectedProject(project)}
          >
            <div className="flex justify-between items-start mb-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 shrink-0 group-hover:text-cyan-400 transition-colors">
                  <FolderGit2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                 <span className="text-sm font-mono text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50 whitespace-nowrap hidden sm:block">
                  {project.period}
                </span>
                <Maximize2 size={18} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4 ml-0 md:ml-12">
              {project.tech.slice(0, 4).map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300 border border-slate-600/50">
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-xs px-2 py-1 rounded bg-slate-700/30 text-slate-400 border border-slate-600/30">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>

            <p className="text-sm text-slate-400 ml-0 md:ml-12 line-clamp-2">
               {project.longDescription || project.description[0]}
            </p>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-24 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 md:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mt-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 pr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                <span className="text-cyan-400 font-mono text-sm bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-900/50 w-fit">
                  {selectedProject.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className="text-sm px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Project Overview</h3>
                  <p className="text-slate-300 leading-relaxed text-base">
                    {selectedProject.longDescription || "No detailed description available."}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Highlights</h3>
                  <ul className="space-y-3">
                    {selectedProject.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 bg-slate-800/30 p-3 rounded-lg border border-slate-800">
                        <span className="text-cyan-500 mt-1">●</span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.links && (
                   <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4">
                      {selectedProject.links.github && (
                        <a 
                          href={selectedProject.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
                        >
                          <Github size={20} />
                          View Source
                        </a>
                      )}
                      {selectedProject.links.demo && (
                         <a 
                          href={selectedProject.links.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors font-medium shadow-lg shadow-cyan-900/20"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      )}
                   </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;