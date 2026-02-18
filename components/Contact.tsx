import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { CONTACT_INFO, URLS } from '../constants';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useApp } from '../contexts';

const Contact: React.FC = () => {
  const { t } = useApp();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold">{t('contact.phone')}</h4>
                <p className="text-slate-600 dark:text-slate-400 dir-ltr text-right">{CONTACT_INFO.PHONE}</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold">{t('contact.email')}</h4>
                <p className="text-slate-600 dark:text-slate-400">{CONTACT_INFO.EMAIL}</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold">{t('contact.location')}</h4>
                <p className="text-slate-600 dark:text-slate-400">{CONTACT_INFO.LOCATION}</p>
              </div>
            </div>
            
             <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-500/20">
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">{t('contact.support')}</p>
                <a href={`mailto:${URLS.SUPPORT_EMAIL}`} className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                  {URLS.SUPPORT_EMAIL}
                </a>
             </div>
          </div>

          {/* Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('contact.formTitle')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.labels.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-navy-900/50 border border-slate-200 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  placeholder={t('contact.placeholders.name')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.labels.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-navy-900/50 border border-slate-200 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  placeholder={t('contact.placeholders.email')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.labels.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-navy-900/50 border border-slate-200 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  placeholder={t('contact.placeholders.message')}
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={formState !== 'idle'}
              >
                {formState === 'submitting' ? t('contact.submit.submitting') : formState === 'success' ? t('contact.submit.success') : (
                  <>
                     {t('contact.submit.idle')}
                    <Send className="ms-2 w-4 h-4 rtl:rotate-180" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;