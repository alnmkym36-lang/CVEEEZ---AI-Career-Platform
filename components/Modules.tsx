import React from 'react';
import SectionTitle from './SectionTitle';
import { getModules } from '../constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useApp } from '../contexts';

const Modules: React.FC = () => {
  const { lang, t } = useApp();
  const modules = getModules(lang);
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="modules" className="py-20 relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={t('modules.title')} 
          subtitle={t('modules.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div 
              key={module.id} 
              className="glass-card rounded-2xl p-6 group hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {module.isNew && (
                <div className="absolute top-4 start-4 bg-yellow-500/20 text-yellow-600 dark:text-yellow-300 text-xs px-2 py-1 rounded border border-yellow-500/30 flex items-center gap-1">
                   <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                  </span>
                  {t('modules.new')}
                </div>
              )}
              
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-600/10 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <module.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                {module.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed h-12 overflow-hidden">
                {module.desc}
              </p>
              
              <a 
                href={module.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
              >
                {module.cta}
                <ArrowIcon className="w-4 h-4 me-2 rtl:me-0 rtl:ms-2 ltr:ms-2 transition-transform group-hover:-translate-x-1 ltr:group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;