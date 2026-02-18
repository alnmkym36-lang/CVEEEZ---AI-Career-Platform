import React from 'react';
import { CheckCircle, Zap, ShieldCheck, FileCheck, Star } from 'lucide-react';
import Button from './Button';
import { URLS } from '../constants';
import { useApp } from '../contexts';

const Hero: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients - Adjusted for light/dark */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/50 dark:bg-blue-900/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-100/50 dark:bg-indigo-900/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          {t('hero.badge')}
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6 animate-fade-in-up [animation-delay:200ms]">
          {t('hero.title')} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
             {t('hero.titleHighlight')}
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
          <Button href={URLS.LOGIN} external size="lg" className="w-full sm:w-auto shadow-blue-600/20">
            <Zap className="me-2 w-5 h-5 rtl:ms-2" />
            {t('hero.ctaPrimary')}
          </Button>
          <Button href={URLS.JOBS} external variant="outline" size="lg" className="w-full sm:w-auto">
            {t('hero.ctaSecondary')}
          </Button>
        </div>

        {/* Feature Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-6 text-slate-600 dark:text-slate-400 text-sm sm:text-base animate-fade-in-up [animation-delay:800ms]">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span>{t('hero.badges.ats')}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>{t('hero.badges.verified')}</span>
          </div>
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span>{t('hero.badges.pdf')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            <span>{t('hero.badges.quality')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;