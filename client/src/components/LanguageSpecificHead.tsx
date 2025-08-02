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
    title: "Dave Jackson - Online English Teacher | ESL Conversation Practice | Business English",
    description: "Professional online English teacher offering personalized ESL lessons, conversation practice, business English, and interview preparation. Native UK speaker with 5+ years experience. Book your $20 lesson today.",
    keywords: "online English teacher, ESL tutor, conversation practice, business English, interview preparation, native English speaker, online English lessons, English conversation, professional English teacher",
    canonical: "https://talkwithdave.co.uk/",
    hreflang: "en"
  },
  zh: {
    title: "戴夫·杰克逊 - 英语老师 | 在线英语会话练习 | 商务英语",
    description: "专业在线英语老师，提供个性化ESL课程、会话练习、商务英语和面试准备。英国本土讲师，5年以上教学经验。立即预订20美元课程。",
    keywords: "在线英语老师,ESL导师,会话练习,商务英语,面试准备,英语母语者,在线英语课程,英语会话,专业英语老师,戴夫杰克逊",
    canonical: "https://talkwithdave.co.uk/zh/",
    hreflang: "zh-CN"
  },
  ja: {
    title: "デイブ・ジャクソン - 英語講師 | オンライン英会話レッスン | ビジネス英語",
    description: "プロフェッショナルなオンライン英語講師。個別のESLレッスン、英会話練習、ビジネス英語、面接準備を提供。イギリス出身のネイティブスピーカー、5年以上の経験。20ドルレッスンを今すぐ予約。",
    keywords: "オンライン英語講師,ESL講師,英会話練習,ビジネス英語,面接準備,英語ネイティブスピーカー,オンライン英語レッスン,英会話,プロ英語講師,デイブジャクソン",
    canonical: "https://talkwithdave.co.uk/ja/",
    hreflang: "ja-JP"
  },
  ko: {
    title: "데이브 잭슨 - 영어 선생님 | 온라인 영어회화 연습 | 비즈니스 영어",
    description: "전문 온라인 영어 교사가 개인맞춤 ESL 수업, 회화 연습, 비즈니스 영어, 면접 준비를 제공합니다. 영국 원어민 강사, 5년 이상 경험. 20달러 수업을 지금 예약하세요.",
    keywords: "온라인 영어 선생님,ESL 강사,영어회화 연습,비즈니스 영어,면접 준비,영어 원어민,온라인 영어 수업,영어 회화,전문 영어 교사,데이브잭슨",
    canonical: "https://talkwithdave.co.uk/ko/",
    hreflang: "ko-KR"
  },
  vi: {
    title: "Dave Jackson - Giáo viên tiếng Anh | Luyện hội thoại tiếng Anh online | Tiếng Anh thương mại",
    description: "Giáo viên tiếng Anh chuyên nghiệp cung cấp các khóa học ESL cá nhân hóa, luyện hội thoại, tiếng Anh thương mại và chuẩn bị phỏng vấn. Giáo viên bản ngữ từ Anh, 5+ năm kinh nghiệm. Đặt bài học $20 ngay hôm nay.",
    keywords: "giáo viên tiếng Anh online,gia sư ESL,luyện hội thoại,tiếng Anh thương mại,chuẩn bị phỏng vấn,người bản ngữ tiếng Anh,bài học tiếng Anh online,hội thoại tiếng Anh,giáo viên tiếng Anh chuyên nghiệp,Dave Jackson",
    canonical: "https://talkwithdave.co.uk/vi/",
    hreflang: "vi-VN"
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