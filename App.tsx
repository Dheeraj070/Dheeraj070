import React from 'react';
import PhysicsBackground from './components/PhysicsBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-200">
      <PhysicsBackground />
      
      <Navbar />
      
      <main className="container mx-auto px-6 md:px-12 relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;