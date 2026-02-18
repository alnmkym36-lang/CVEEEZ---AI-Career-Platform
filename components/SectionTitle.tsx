import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-start'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mb-4" />
      )}
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;