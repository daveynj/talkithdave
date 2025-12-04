import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useLocation } from 'wouter';

export default function LanguageDetector() {
  const { setLanguage } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    // Extract language from URL path only
    const pathLanguage = location.split('/')[1];
    const supportedLanguages = ['zh', 'ja', 'ko', 'vi'];

    if (supportedLanguages.includes(pathLanguage)) {
      setLanguage(pathLanguage);
      return;
    }

    // Always default to English - no automatic detection
  }, [location, setLanguage]);

  return null;
}