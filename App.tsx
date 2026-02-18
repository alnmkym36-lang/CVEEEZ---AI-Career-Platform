import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Button from './components/Button';
import { URLS, getServicesCats } from './constants';
import { Users, FileText, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import SectionTitle from './components/SectionTitle';
import { useApp } from './contexts';

// Small inline components for specific sections to keep App.tsx clean but structured as per single-file-ish requirements

const TrustStrip = () => {
  const { t } = useApp();
  return (
    <div className="border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-navy-800/30 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 text-center">
          <div className="animate-fade-in-up">
            <p className="text-3xl font-bold text-blue-600 dark:text-white mb-1">10,000+</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{t('trust.users')}</p>
          </div>
          <div className="w-px h-12 bg-slate-300 dark:bg-white/10 hidden md:block"></div>
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <p className="text-3xl font-bold text-blue-600 dark:text-white mb-1">10,000+</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{t('trust.cvs')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const { t } = useApp();
  const steps = t('howItWorks.steps') as any[];
  return (
    <section className="py-20 bg-white dark:bg-navy-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('howItWorks.title')} subtitle={t('howItWorks.subtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-900 to-transparent -translate-y-1/2 hidden md:block z-0" />
          {steps.map((item, idx) => (
            <div key={idx} className="relative z-10 bg-slate-50 dark:bg-navy-900 p-6 rounded-xl border border-slate-200 dark:border-white/5 shadow-xl transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 ring-4 ring-white dark:ring-navy-900 transition-all">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TemplatesHighlight = () => {
  const { t, lang } = useApp();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;
  const features = t('templates.features') as string[];
  
  return (
    <section className="py-20 relative overflow-hidden bg-slate-100 dark:bg-navy-900 transition-colors">
       <div className="absolute inset-0 bg-blue-600/5 skew-y-3 transform origin-bottom-left" />
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="w-full md:w-1/2 text-start">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('templates.title')}</h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                   {t('templates.desc')}
                </p>
                <ul className="space-y-3 mb-8 text-slate-600 dark:text-slate-400">
                   {features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500" /> {feature}</li>
                   ))}
                </ul>
                <Button href={URLS.TEMPLATES} external>
                   {t('templates.cta')}
                   <ArrowIcon className="me-2 ms-2 w-5 h-5 rtl:rotate-0 ltr:rotate-0" />
                </Button>
             </div>
             <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-white to-slate-100 dark:from-slate-700 dark:to-slate-900 p-4 rotate-2 shadow-2xl border border-slate-200 dark:border-white/10">
                   {/* Mock Template Visual */}
                   <div className="w-full h-full bg-slate-200 dark:bg-white/5 rounded flex items-center justify-center">
                      <FileText className="w-20 h-20 text-slate-400 dark:text-slate-500 opacity-50" />
                   </div>
                </div>
                <div className="absolute -bottom-4 -right-4 rtl:-right-4 ltr:-left-4 bg-white dark:bg-navy-800 p-4 rounded-lg shadow-xl border border-slate-200 dark:border-white/10">
                   <p className="text-slate-800 dark:text-white font-bold text-sm">{t('templates.badge')}</p>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

const ServicesPreview = () => {
  const { lang, t } = useApp();
  const servicesCats = getServicesCats(lang);

  return (
    <section className="py-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t('services.title')} subtitle={t('services.subtitle')} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {servicesCats.map((cat, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl text-center hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                   <cat.icon className="w-10 h-10 mx-auto text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                   <h3 className="text-slate-800 dark:text-white font-medium">{cat.title}</h3>
                </div>
             ))}
          </div>
          <div className="text-center mt-12">
             <Button href={URLS.ECOMMERCE} external variant="secondary">
                {t('services.cta')}
             </Button>
          </div>
       </div>
    </section>
  );
};

const Testimonials = () => {
  const { t } = useApp();
  return (
    <section className="py-20 bg-slate-50 dark:bg-navy-800/30">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t('testimonials.title')} subtitle={t('testimonials.subtitle')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card p-8 rounded-xl relative">
                   <div className="text-4xl text-blue-200 dark:text-blue-600/30 font-serif absolute top-4 right-6">"</div>
                   <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                      {t('testimonials.text')}
                   </p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                      <div>
                         <p className="text-slate-900 dark:text-white font-bold text-sm">{t('testimonials.name')}</p>
                         <p className="text-slate-500 text-xs">{t('testimonials.role')}</p>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 dark:bg-navy-900 dark:text-slate-200 overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Modules />
      <HowItWorks />
      <TemplatesHighlight />
      <ServicesPreview />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;