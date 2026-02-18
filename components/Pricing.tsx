import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { getFaqs, URLS } from '../constants';
import { Plus, Minus, Check } from 'lucide-react';
import { useApp } from '../contexts';

const Pricing: React.FC = () => {
  const { lang, t } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = getFaqs(lang);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const plans = [
    { name: 'Starter', color: 'border-slate-200 dark:border-slate-700' },
    { name: 'Pro', color: 'border-blue-500', popular: true },
    { name: 'Elite', color: 'border-purple-500' }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-100 dark:bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={t('pricing.title')}
          subtitle={t('pricing.subtitle')}
        />

        {/* Pricing Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`glass-card p-8 rounded-2xl border-2 ${plan.color} relative flex flex-col items-center text-center transition-transform hover:scale-105 duration-300 ${plan.popular ? 'bg-gradient-to-b from-white to-blue-50 dark:from-navy-800 dark:to-blue-900/20 shadow-xl shadow-blue-900/10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {t('pricing.popular')}
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-slate-400 dark:text-slate-300 mb-6">—</div>
              <ul className="space-y-3 mb-8 w-full text-start text-slate-600 dark:text-slate-400">
                {(t('pricing.features') as string[]).map((feature, i) => (
                   <li key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500"/> {feature}</li>
                ))}
              </ul>
              <div className="mt-auto w-full">
                <Button 
                  href={URLS.PRICING} 
                  external 
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {t('pricing.details')}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">{t('pricing.faqTitle')}</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-lg overflow-hidden bg-white dark:bg-navy-700/50">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-start text-slate-800 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? <Minus className="w-5 h-5 text-blue-500" /> : <Plus className="w-5 h-5 text-slate-400 dark:text-slate-500" />}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <p className="text-slate-600 dark:text-slate-400">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;