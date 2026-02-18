import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon, Globe } from 'lucide-react';
import Button from './Button';
import { URLS } from '../constants';
import { useApp } from '../contexts';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, theme, toggleTheme, t } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.services'), href: '#modules' },
    { name: t('nav.templates'), href: URLS.TEMPLATES, external: true },
    { name: t('nav.jobs'), href: URLS.JOBS, external: true },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-slate-800 dark:text-white tracking-wider flex items-center gap-2">
              <span className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg text-white">C</span>
              CVEEEZ
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse rtl:space-x-reverse ltr:space-x-reverse">
             {/* Use margin logic for LTR/RTL support implicitly by flex direction, but space-x can be tricky. 
                 Using gap is safer. */}
             <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
             </div>

             <div className="flex items-center gap-3 border-s border-slate-200 dark:border-white/10 ps-6">
                <button 
                  onClick={toggleTheme} 
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button 
                  onClick={toggleLang}
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors flex items-center gap-1 text-sm font-bold"
                >
                  <Globe size={20} />
                  <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
                </button>
                <Button size="sm" href={URLS.LOGIN} external>
                  {t('nav.login')}
                </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
             <button 
                onClick={toggleTheme} 
                className="p-1 text-slate-600 dark:text-slate-300"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
               <button 
                  onClick={toggleLang}
                  className="p-1 text-slate-600 dark:text-slate-300 font-bold text-sm"
                >
                  {lang === 'ar' ? 'EN' : 'AR'}
                </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-navy-800 border-t border-slate-200 dark:border-white/10 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button href={URLS.LOGIN} external className="w-full justify-center">
                {t('nav.mobileCta')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;