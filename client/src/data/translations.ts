export interface Translation {
  hero: {
    headline: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    socialProof: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    testimonials: string;
    faq: string;
    contact: string;
    booking: string;
  };
  about: {
    title: string;
    subtitle: string;
    experience: string;
    innovation: string;
    credentials: string;
  };
  services: {
    title: string;
    subtitle: string;
    conversation: {
      title: string;
      description: string;
    };
    business: {
      title: string;
      description: string;
    };
    interview: {
      title: string;
      description: string;
    };
    price: string;
    duration: string;
    includes: string[];
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  faq: {
    title: string;
    subtitle: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    social: string;
  };
  booking: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    hero: {
      headline: "Struggling to Sound Professional in English? Get Fluent Fast",
      subtitle: "1-on-1 personalized English lessons with Dave, your native-speaking online ESL teacher and creator of Plan Wise ESL - teaching software used by 500+ teachers worldwide.",
      description: "Learn from someone who doesn't just teach English, but innovates how English is taught online.",
      ctaPrimary: "Book Your First Lesson for $20",
      ctaSecondary: "Learn More",
      socialProof: "Join 150+ students who improved their English"
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services", 
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact",
      booking: "Book Lesson"
    },
    about: {
      title: "Meet Your English Teacher",
      subtitle: "Native UK speaker with 10+ years of teaching experience",
      experience: "With over a decade of teaching experience and a background in business, I specialize in helping students achieve their English language goals.",
      innovation: "As the creator of Plan Wise ESL, I combine traditional teaching methods with cutting-edge technology to deliver personalized learning experiences.",
      credentials: "Bachelor's in Business Administration from University of Southampton, 5+ years teaching in China, creator of AI-powered teaching platform used by 500+ educators worldwide."
    },
    services: {
      title: "English Learning Services",
      subtitle: "Choose the perfect lesson type for your goals",
      conversation: {
        title: "Conversation Practice",
        description: "Improve your speaking fluency and confidence through natural conversations"
      },
      business: {
        title: "Business English",
        description: "Master professional communication, presentations, and workplace English"
      },
      interview: {
        title: "Interview Preparation", 
        description: "Practice job interviews and learn industry-specific vocabulary"
      },
      price: "$20",
      duration: "30 minutes",
      includes: ["Personalized feedback", "Custom materials", "Homework assignments", "Progress tracking"]
    },
    testimonials: {
      title: "What Students Say",
      subtitle: "Real feedback from learners around the world"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about learning English with Dave",
      questions: [
        {
          question: "Are you a qualified native English teacher?",
          answer: "Yes, I'm a native English speaker from the UK with over 10 years of teaching experience. I have a Bachelor's degree in Business Administration from the University of Southampton and specialize in ESL conversation practice, business English, and interview preparation."
        },
        {
          question: "How much do your lessons cost?",
          answer: "All my lessons are $20 for 30 minutes, whether it's conversation practice, business English, or interview preparation. This includes personalized feedback, customized learning materials, homework assignments, and progress tracking."
        },
        {
          question: "Can you help with business English and job interviews?",
          answer: "Absolutely! With my business degree and professional experience, I specialize in business English including email writing, presentation skills, meeting participation, and professional communication. For interview preparation, I conduct mock interviews, teach industry-specific vocabulary, and provide detailed feedback."
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to start your English learning journey?",
      email: "Email",
      social: "Follow on Twitter"
    },
    booking: {
      title: "Book Your Lesson",
      subtitle: "Choose a time that works for you",
      description: "Select your preferred time slot and let's start improving your English together. All lessons are conducted via video call.",
      button: "Schedule Now"
    }
  },
  zh: {
    hero: {
      headline: "英语表达不够专业？快速提升流利度",
      subtitle: "与英国本土ESL教师戴夫进行一对一个性化英语课程。他是Plan Wise ESL创始人，该教学软件被全球500+教师使用。",
      description: "跟随不仅教授英语，更革新在线英语教学方式的专业老师学习。",
      ctaPrimary: "预订首节课程仅需20美元",
      ctaSecondary: "了解更多",
      socialProof: "加入150+已提升英语水平的学生行列"
    },
    nav: {
      home: "首页",
      about: "关于",
      services: "服务",
      testimonials: "学生评价", 
      faq: "常见问题",
      contact: "联系",
      booking: "预订课程"
    },
    about: {
      title: "认识您的英语老师",
      subtitle: "英国本土讲师，10+年教学经验",
      experience: "拥有十多年教学经验和商务背景，专注于帮助学生实现英语学习目标。",
      innovation: "作为Plan Wise ESL的创始人，我将传统教学方法与前沿技术相结合，提供个性化学习体验。",
      credentials: "南安普顿大学工商管理学士学位，5+年中国教学经验，创建的AI教学平台被全球500+教育工作者使用。"
    },
    services: {
      title: "英语学习服务",
      subtitle: "选择适合您目标的完美课程类型",
      conversation: {
        title: "对话练习",
        description: "通过自然对话提高口语流利度和自信心"
      },
      business: {
        title: "商务英语", 
        description: "掌握专业沟通、演示和职场英语技能"
      },
      interview: {
        title: "面试准备",
        description: "练习求职面试并学习行业专业词汇"
      },
      price: "20美元",
      duration: "30分钟",
      includes: ["个性化反馈", "定制材料", "家庭作业", "进度跟踪"]
    },
    testimonials: {
      title: "学生评价",
      subtitle: "来自世界各地学习者的真实反馈"
    },
    faq: {
      title: "常见问题",
      subtitle: "与戴夫学习英语需要了解的一切",
      questions: [
        {
          question: "您是合格的英语母语教师吗？",
          answer: "是的，我是来自英国的英语母语者，拥有超过10年的教学经验。我持有南安普顿大学工商管理学士学位，专长于ESL对话练习、商务英语和面试准备。"
        },
        {
          question: "课程费用是多少？",
          answer: "我的所有课程都是30分钟20美元，无论是对话练习、商务英语还是面试准备。这包括个性化反馈、定制学习材料、家庭作业和进度跟踪。"
        },
        {
          question: "您能帮助商务英语和求职面试吗？",
          answer: "当然可以！凭借我的商学学位和专业经验，我专门从事商务英语教学，包括邮件写作、演示技巧、会议参与和专业沟通。对于面试准备，我进行模拟面试，教授行业专业词汇，并提供详细反馈。"
        }
      ]
    },
    contact: {
      title: "联系我们",
      subtitle: "准备开始您的英语学习之旅了吗？",
      email: "邮箱",
      social: "关注Twitter"
    },
    booking: {
      title: "预订课程",
      subtitle: "选择适合您的时间",
      description: "选择您偏好的时间段，让我们一起开始提升您的英语水平。所有课程均通过视频通话进行。",
      button: "立即预约"
    }
  },
  ja: {
    hero: {
      headline: "英語でプロフェッショナルに聞こえない？流暢さを素早く向上",
      subtitle: "イギリス人ネイティブESL教師デイブとの1対1パーソナライズ英語レッスン。世界500+の教師が使用するPlan Wise ESLの創設者です。",
      description: "英語を教えるだけでなく、オンライン英語教育を革新する専門家から学びましょう。",
      ctaPrimary: "初回レッスンを20ドルで予約",
      ctaSecondary: "詳細を見る",
      socialProof: "英語を向上させた150+名の生徒に参加"
    },
    nav: {
      home: "ホーム",
      about: "講師紹介",
      services: "サービス",
      testimonials: "生徒の声",
      faq: "よくある質問", 
      contact: "お問い合わせ",
      booking: "レッスン予約"
    },
    about: {
      title: "英語教師のご紹介",
      subtitle: "イギリス人ネイティブスピーカー、10年以上の指導経験",
      experience: "10年以上の指導経験とビジネス背景を持ち、生徒の英語学習目標達成を専門としています。",
      innovation: "Plan Wise ESLの創設者として、従来の指導方法と最先端技術を組み合わせ、パーソナライズされた学習体験を提供します。",
      credentials: "サウサンプトン大学経営学学士、中国での5年以上の指導経験、世界500+の教育者が使用するAI教育プラットフォームの創設者。"
    },
    services: {
      title: "英語学習サービス",
      subtitle: "あなたの目標に最適なレッスンタイプを選択",
      conversation: {
        title: "会話練習",
        description: "自然な会話を通じてスピーキングの流暢さと自信を向上"
      },
      business: {
        title: "ビジネス英語",
        description: "プロフェッショナルなコミュニケーション、プレゼンテーション、職場英語をマスター"
      },
      interview: {
        title: "面接対策",
        description: "就職面接の練習と業界特有の語彙を学習"
      },
      price: "20ドル",
      duration: "30分",
      includes: ["パーソナライズフィードバック", "カスタム教材", "宿題", "進捗追跡"]
    },
    testimonials: {
      title: "生徒の声",
      subtitle: "世界中の学習者からの実際のフィードバック"
    },
    faq: {
      title: "よくある質問",
      subtitle: "デイブと英語を学ぶために知っておくべきすべて",
      questions: [
        {
          question: "あなたは資格のある英語ネイティブ教師ですか？",
          answer: "はい、私は10年以上の指導経験を持つイギリス出身の英語ネイティブスピーカーです。サウサンプトン大学で経営学学士号を取得し、ESL会話練習、ビジネス英語、面接対策を専門としています。"
        },
        {
          question: "レッスン料金はいくらですか？",
          answer: "すべてのレッスンは30分20ドルです。会話練習、ビジネス英語、面接対策のいずれでも同料金です。パーソナライズフィードバック、カスタム学習教材、宿題、進捗追跡が含まれます。"
        },
        {
          question: "ビジネス英語と就職面接のサポートはできますか？",
          answer: "もちろんです！私の経営学学位と職業経験により、メール作成、プレゼンテーションスキル、会議参加、プロフェッショナルコミュニケーションを含むビジネス英語を専門としています。面接対策では、模擬面接を実施し、業界特有の語彙を教え、詳細なフィードバックを提供します。"
        }
      ]
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "英語学習の旅を始める準備はできていますか？",
      email: "メール",
      social: "Twitterをフォロー"
    },
    booking: {
      title: "レッスン予約",
      subtitle: "あなたに合った時間を選択",
      description: "お好みの時間枠を選択し、一緒に英語向上を始めましょう。すべてのレッスンはビデオ通話で行われます。",
      button: "今すぐスケジュール"
    }
  },
  ko: {
    hero: {
      headline: "영어로 전문적으로 들리지 않나요? 빠르게 유창해지세요",
      subtitle: "영국 출신 ESL 원어민 교사 데이브와 함께하는 1:1 맞춤형 영어 레슨. 전 세계 500+명의 교사가 사용하는 Plan Wise ESL 창시자입니다.",
      description: "영어를 가르치는 것뿐만 아니라 온라인 영어 교육을 혁신하는 전문가로부터 배워보세요.",
      ctaPrimary: "첫 레슨 $20로 예약하기",
      ctaSecondary: "자세히 보기",
      socialProof: "영어 실력을 향상시킨 150+명의 학생들과 함께하세요"
    },
    nav: {
      home: "홈",
      about: "소개",
      services: "서비스",
      testimonials: "수강후기",
      faq: "자주 묻는 질문",
      contact: "연락처",
      booking: "레슨 예약"
    },
    about: {
      title: "영어 선생님을 만나보세요",
      subtitle: "영국 원어민 화자, 10년 이상의 교육 경험",
      experience: "10년 이상의 교육 경험과 비즈니스 배경을 바탕으로 학생들의 영어 학습 목표 달성을 전문으로 합니다.",
      innovation: "Plan Wise ESL의 창시자로서 전통적인 교육 방법과 최첨단 기술을 결합하여 개인화된 학습 경험을 제공합니다.",
      credentials: "사우샘프턴 대학교 경영학 학사, 중국에서 5년 이상 교육 경험, 전 세계 500+명의 교육자가 사용하는 AI 교육 플랫폼 창시자."
    },
    services: {
      title: "영어 학습 서비스",
      subtitle: "목표에 맞는 완벽한 레슨 유형을 선택하세요",
      conversation: {
        title: "회화 연습",
        description: "자연스러운 대화를 통해 말하기 유창성과 자신감 향상"
      },
      business: {
        title: "비즈니스 영어",
        description: "전문적인 의사소통, 프레젠테이션, 직장 영어 마스터"
      },
      interview: {
        title: "면접 준비",
        description: "취업 면접 연습 및 업계별 전문 어휘 학습"
      },
      price: "$20",
      duration: "30분",
      includes: ["개인화된 피드백", "맞춤 교재", "숙제", "진도 추적"]
    },
    testimonials: {
      title: "수강생 후기",
      subtitle: "전 세계 학습자들의 실제 피드백"
    },
    faq: {
      title: "자주 묻는 질문",
      subtitle: "데이브와 함께 영어를 배우기 위해 알아야 할 모든 것",
      questions: [
        {
          question: "자격을 갖춘 영어 원어민 교사인가요?",
          answer: "네, 저는 10년 이상의 교육 경험을 가진 영국 출신 영어 원어민입니다. 사우샘프턴 대학교에서 경영학 학사 학위를 받았으며 ESL 회화 연습, 비즈니스 영어, 면접 준비를 전문으로 합니다."
        },
        {
          question: "레슨 비용은 얼마인가요?",
          answer: "모든 레슨은 30분에 $20입니다. 회화 연습, 비즈니스 영어, 면접 준비 모두 동일한 가격입니다. 개인화된 피드백, 맞춤형 학습 자료, 숙제, 진도 추적이 포함됩니다."
        },
        {
          question: "비즈니스 영어와 취업 면접 도움을 받을 수 있나요?",
          answer: "물론입니다! 경영학 학위와 전문 경험을 바탕으로 이메일 작성, 프레젠테이션 기술, 회의 참여, 전문적 의사소통을 포함한 비즈니스 영어를 전문으로 합니다. 면접 준비에서는 모의 면접을 실시하고, 업계별 전문 어휘를 가르치며, 상세한 피드백을 제공합니다."
        }
      ]
    },
    contact: {
      title: "연락하기",
      subtitle: "영어 학습 여정을 시작할 준비가 되셨나요?",
      email: "이메일",
      social: "트위터 팔로우"
    },
    booking: {
      title: "레슨 예약",
      subtitle: "편리한 시간을 선택하세요",
      description: "원하는 시간대를 선택하고 함께 영어 실력 향상을 시작해봅시다. 모든 레슨은 화상 통화로 진행됩니다.",
      button: "지금 예약하기"
    }
  }
};

export const getTranslation = (lang: string): Translation => {
  return translations[lang] || translations.en;
};

export const supportedLanguages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' }
];