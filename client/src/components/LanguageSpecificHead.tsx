import { useLanguage } from '../hooks/useLanguage';
import { useEffect } from 'react';

interface MetaData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  hreflang: string;
}

const languageMetaData: Record<string, MetaData> = {
  en: {
    title: "Dave Jackson | Executive English Coach | British Business English for Professionals",
    description: "Free diagnostic session + AI-built curriculum personalised to your career. British business English coaching for Finance, Medical & Sales professionals.",
    keywords: "business English coach, executive English lessons, AI ESL curriculum, British English tutor, professional English coaching, online English teacher, career English training",
    canonical: "https://talkwithdave.co.uk/",
    hreflang: "en"
  }
};

export default function LanguageSpecificHead() {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const metaData = languageMetaData[currentLanguage] || languageMetaData.en;
    
    // Update document title
    document.title = metaData.title;
    
    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', metaData.description);
    }
    
    // Update meta keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', metaData.keywords);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', metaData.canonical);
    }
    
    // Update html lang attribute
    document.documentElement.lang = metaData.hreflang.split('-')[0];
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', metaData.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', metaData.description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', metaData.canonical);
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', metaData.title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', metaData.description);
    }
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', metaData.canonical);
    }
  }, [currentLanguage]);

  return null; // This component only handles head updates
}