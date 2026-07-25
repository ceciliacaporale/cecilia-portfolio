import React, { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGES, type Language } from './i18n/translations';

const isLanguage = (value: string | null): value is Language =>
  !!value && (LANGUAGES as readonly string[]).includes(value);

interface Props {
  children: React.ReactNode;
}

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

const LanguageWrapper: React.FC<Props> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('language');
    setLanguageState(isLanguage(stored) ? stored : 'en');
    setIsHydrated(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  if (!isHydrated) return null;

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageWrapper;
