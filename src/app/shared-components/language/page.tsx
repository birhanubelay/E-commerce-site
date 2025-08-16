
"use client";
import { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from './translations';
type Language = 'en' | 'sw';
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const t = (key: keyof typeof translations.en) => translations[language][key] || translations.en[key];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};