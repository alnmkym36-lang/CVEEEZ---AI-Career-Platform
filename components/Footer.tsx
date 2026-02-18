import React from 'react';
import { URLS } from '../constants';
import { useApp } from '../contexts';

const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="bg-white dark:bg-navy-900 pt-16 pb-8 border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
             <a href="#" className="text-2xl font-bold text-slate-800 dark:text-white tracking-wider flex items-center gap-2 mb-4">
              <span className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg text-white">C</span>
              CVEEEZ
            </a>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-4">
              {t('footer.slogan')}
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.home')}</a></li>
              <li><a href="#modules" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.services')}</a></li>
              <li><a href={URLS.JOBS} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.jobs')}</a></li>
              <li><a href={URLS.TEMPLATES} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.templates')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-4">{t('footer.policies')}</h4>
            <ul className="space-y-2">
              <li><a href={URLS.TERMS} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('footer.policyLinks.terms')}</a></li>
              <li><a href={URLS.PRIVACY} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('footer.policyLinks.privacy')}</a></li>
              <li><a href={URLS.REFUND} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('footer.policyLinks.refund')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;