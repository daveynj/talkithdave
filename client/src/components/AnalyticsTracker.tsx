import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useLocation } from 'wouter';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function AnalyticsTracker() {
  const { currentLanguage } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    // Track language selection events
    if (window.gtag) {
      window.gtag('event', 'language_change', {
        'custom_parameter': currentLanguage,
        'event_category': 'engagement',
        'event_label': `Language switched to ${currentLanguage}`
      });
    }
  }, [currentLanguage]);

  useEffect(() => {
    // Track page views for different language routes
    if (window.gtag) {
      window.gtag('config', 'G-PJ2XKCFZWS', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'language',
          'custom_parameter_2': 'market'
        }
      });

      // Track custom events based on language/market
      const marketMap: Record<string, string> = {
        'zh': 'China',
        'ja': 'Japan', 
        'ko': 'South Korea',
        'vi': 'Vietnam',
        'en': 'Global'
      };

      window.gtag('event', 'page_view_multilingual', {
        'language': currentLanguage,
        'market': marketMap[currentLanguage] || 'Global',
        'page_path': location,
        'event_category': 'multilingual_tracking'
      });
    }
  }, [location, currentLanguage]);

  return null;
}