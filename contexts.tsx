import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from './translations';

type Lang = 'ar' | 'en';
type Theme = 'dark' | 'light';

interface AppContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (path: string) => any;
  dir: 'rtl' | 'ltr';
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('ar');
  const [theme, setTheme] = useState<Theme>('dark');

  // Handle document attributes for Lang/Dir
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Handle document class for Theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let value: any = TRANSLATIONS[lang];
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) return path;
    }
    return value;
  };

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t, dir: lang === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};