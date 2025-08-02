import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useLocation } from 'wouter';

export default function LanguageDetector() {
  const { setLanguage } = useLanguage();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Extract language from URL path
    const pathLanguage = location.split('/')[1];
    const supportedLanguages = ['zh', 'ja', 'ko', 'vi'];
    
    if (supportedLanguages.includes(pathLanguage)) {
      setLanguage(pathLanguage);
      return;
    }

    // Auto-detect language only on first visit (no stored preference)
    const hasVisited = localStorage.getItem('language-preference');
    if (hasVisited) return;

    // Browser language detection
    const browserLanguages = navigator.languages || [navigator.language];
    
    for (const lang of browserLanguages) {
      const langCode = lang.toLowerCase();
      
      // Chinese detection
      if (langCode.includes('zh') || langCode.includes('chinese')) {
        setLanguage('zh');
        setLocation('/zh');
        localStorage.setItem('language-preference', 'zh');
        return;
      }
      
      // Japanese detection
      if (langCode.includes('ja') || langCode.includes('japanese')) {
        setLanguage('ja');
        setLocation('/ja');
        localStorage.setItem('language-preference', 'ja');
        return;
      }
      
      // Korean detection
      if (langCode.includes('ko') || langCode.includes('korean')) {
        setLanguage('ko');
        setLocation('/ko');
        localStorage.setItem('language-preference', 'ko');
        return;
      }
      
      // Vietnamese detection
      if (langCode.includes('vi') || langCode.includes('vietnamese')) {
        setLanguage('vi');
        setLocation('/vi');
        localStorage.setItem('language-preference', 'vi');
        return;
      }
    }

    // Geolocation-based detection as fallback
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // This would typically require a geolocation service API
        // For now, we'll use timezone detection as a proxy
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        if (timezone.includes('Shanghai') || timezone.includes('Beijing') || timezone.includes('Asia/Hong_Kong')) {
          setLanguage('zh');
          setLocation('/zh');
          localStorage.setItem('language-preference', 'zh');
        } else if (timezone.includes('Tokyo') || timezone.includes('Asia/Tokyo')) {
          setLanguage('ja');
          setLocation('/ja');
          localStorage.setItem('language-preference', 'ja');
        } else if (timezone.includes('Seoul') || timezone.includes('Asia/Seoul')) {
          setLanguage('ko');
          setLocation('/ko');
          localStorage.setItem('language-preference', 'ko');
        } else if (timezone.includes('Ho_Chi_Minh') || timezone.includes('Asia/Ho_Chi_Minh')) {
          setLanguage('vi');
          setLocation('/vi');
          localStorage.setItem('language-preference', 'vi');
        }
      }, () => {
        // Geolocation failed, keep default
      });
    }
  }, [location, setLanguage, setLocation]);

  return null;
}