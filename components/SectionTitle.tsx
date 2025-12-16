import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle }) => {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-cyan-500 rounded-full"></span>
      </h2>
      {subtitle && <p className="text-slate-400 mt-2">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;