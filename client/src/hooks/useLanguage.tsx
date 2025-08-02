import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getTranslation, Translation } from '../data/translations';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Detect language from URL path or localStorage
  const getInitialLanguage = () => {
    const path = window.location.pathname;
    const urlLang = path.split('/')[1];
    const supportedLangs = ['zh', 'ja', 'ko', 'vi'];
    
    if (supportedLangs.includes(urlLang)) {
      return urlLang;
    }
    
    return localStorage.getItem('preferredLanguage') || 'en';
  };

  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage);

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferredLanguage', language);
    
    // Update URL path
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);
    const supportedLangs = ['zh', 'ja', 'ko', 'vi'];
    
    // Remove existing language prefix if it exists
    if (supportedLangs.includes(pathSegments[0])) {
      pathSegments.shift();
    }
    
    // Add new language prefix if not English
    const newPath = language === 'en' 
      ? '/' + pathSegments.join('/')
      : '/' + language + '/' + pathSegments.join('/');
    
    window.history.pushState(null, '', newPath);
  };

  const t = getTranslation(currentLanguage);

  useEffect(() => {
    // Update document language attribute
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const value = {
    currentLanguage,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};