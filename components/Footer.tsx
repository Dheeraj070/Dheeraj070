import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-800 mt-20 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Dheeraj Reddy K. All rights reserved.</p>
      <p className="mt-2 text-xs">Built with React, Tailwind CSS & Physics-based Interactions</p>
    </footer>
  );
};

export default Footer;