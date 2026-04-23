import type { Express, Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

const BASE_URL = "https://talkwithdave.co.uk";
const MODIFIED_DATE = new Date().toISOString().split("T")[0];
const PUBLISHED_DATE = "2025-01-15";

function breadcrumbSchema(pageName: string, pagePath: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `${BASE_URL}${pagePath}`,
      },
    ],
  };
}

interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schemas: object[];
}

const DEFAULT_IMAGE = `${BASE_URL}/dave-formal.jpg`;

const COURSE_PROVIDER = {
  "@type": "Person",
  name: "Dave Jackson",
  jobTitle: "Executive English Coach",
  url: BASE_URL,
  nationality: "British",
};

function professionSchema(
  title: string,
  description: string,
  slug: string,
  profession: string
): object[] {
  const pagePath = `/esl-lessons-for-${slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: title,
      description,
      url: `${BASE_URL}${pagePath}`,
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      provider: {
        "@type": "EducationalOrganization",
        name: "Talk with Dave",
        url: BASE_URL,
      },
      courseCode: `ESL-${slug}`,
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "25 hours",
        instructor: COURSE_PROVIDER,
      },
      audience: {
        "@type": "EducationalAudience",
        audienceType: profession,
      },
      teaches: `Professional English communication skills for ${profession}`,
      educationalLevel: "Professional",
      inLanguage: "en",
      offers: [
        {
          "@type": "Offer",
          name: "Free Diagnostic Session",
          price: "0",
          priceCurrency: "USD",
          description: "100% risk-free 30-minute diagnostic assessment. No obligation.",
          url: "https://calendly.com/daveynj113/your-first-lesson",
        },
        {
          "@type": "Offer",
          name: "25-Hour Transformation Program",
          price: "850",
          priceCurrency: "USD",
          description:
            "25 personalised one-on-one lessons ($30/hour). AI-built curriculum tailored to your job, industry, and goals.",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        ratingCount: "150",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `English Coaching for ${profession}`,
      provider: COURSE_PROVIDER,
      description: `Personalised 1-on-1 English coaching for ${profession}. Every lesson is custom-built using AI (PlanWise ESL) and personally taught by Dave Jackson, a native British coach with 10+ years experience.`,
      serviceType: "Online English Coaching",
      areaServed: "Worldwide",
    },
    breadcrumbSchema(`ESL Lessons for ${profession}`, pagePath),
  ];
}

const HOME_SCHEMAS: object[] = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Talk with Dave",
        description:
          "British Business English coaching for international professionals",
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?s={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Talk with Dave",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: DEFAULT_IMAGE,
        },
        sameAs: [
          "https://planwiseesl.com",
          "https://youtube.com/@englishteacherdave",
          "https://twitter.com/daveteacher1",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          url: "https://calendly.com/daveynj113/your-first-lesson",
          availableLanguage: ["English"],
          areaServed: "Worldwide",
        },
        founder: {
          "@type": "Person",
          name: "Dave Jackson",
          jobTitle: "Executive English Coach",
          nationality: "British",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dave Jackson",
    jobTitle: "Executive English Coach",
    url: BASE_URL,
    image: DEFAULT_IMAGE,
    nationality: "British",
    description:
      "Native British English coach with 10+ years experience helping international professionals master business English. Graduate of the University of Southampton with a degree in Business Administration. Creator of PlanWise ESL, an AI-powered lesson planning platform.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Southampton",
      url: "https://www.southampton.ac.uk/",
    },
    sameAs: [
      "https://planwiseesl.com",
      "https://youtube.com/@englishteacherdave",
      "https://twitter.com/daveteacher1",
    ],
    knowsAbout: [
      "Business English",
      "Executive Communication",
      "ESL Coaching",
      "Professional English",
      "Interview Preparation",
      "Communicative Language Teaching",
      "Task-Based Learning",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "TEFL Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Bachelor's Degree",
        educationalLevel: "Bachelor",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What happens in the free diagnostic session?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In this 30-minute session, I assess your current English level, understand your job requirements, and identify your specific communication challenges. By the end, you'll have a clear roadmap. There is no cost for this session.",
        },
      },
      {
        "@type": "Question",
        name: "Is the assessment really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the assessment is 100% free with no obligation to continue.",
        },
      },
      {
        "@type": "Question",
        name: "How is your AI curriculum different from regular courses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional courses use pre-made materials. I use proprietary AI technology to analyze your job, industry, and goals, then generate a 100% unique curriculum. Every lesson and exercise is tailored specifically to your work.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the 25-hour program take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most students complete the program in 3-6 months, taking 1-2 lessons per week. The schedule is completely flexible based on your availability.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pay in installments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The most common arrangement is splitting the $850 into 2-3 payments. We can discuss what works best during the diagnostic session.",
        },
      },
    ],
  },
];

const PAGE_SEO: Record<string, PageSEO> = {
  "/": {
    title: "Dave Jackson | British Business English Coach | Talk with Dave",
    description:
      "Free diagnostic session + AI-built curriculum personalised to your career. British business English coaching for Finance, Medical & Sales professionals.",
    canonical: `${BASE_URL}/`,
    ogImage: DEFAULT_IMAGE,
    schemas: HOME_SCHEMAS,
  },
  "/zh": {
    title: "Dave Jackson | 英国商务英语教练 | Talk with Dave",
    description:
      "免费诊断课程 + AI 定制课程，专为您的职业量身定制。英国商务英语教练，专注金融、医疗和销售专业人士。",
    canonical: `${BASE_URL}/zh`,
    ogImage: DEFAULT_IMAGE,
    schemas: HOME_SCHEMAS,
  },
  "/ja": {
    title: "Dave Jackson | イギリス人ビジネス英語コーチ | Talk with Dave",
    description:
      "無料診断セッション + AIでカスタマイズされたカリキュラム。金融・医療・営業のプロフェッショナル向けイギリスビジネス英語コーチング。",
    canonical: `${BASE_URL}/ja`,
    ogImage: DEFAULT_IMAGE,
    schemas: HOME_SCHEMAS,
  },
  "/ko": {
    title: "Dave Jackson | 영국 비즈니스 영어 코치 | Talk with Dave",
    description:
      "무료 진단 세션 + AI 맞춤 커리큘럼. 금융, 의료, 영업 전문가를 위한 영국 비즈니스 영어 코칭.",
    canonical: `${BASE_URL}/ko`,
    ogImage: DEFAULT_IMAGE,
    schemas: HOME_SCHEMAS,
  },
  "/vi": {
    title: "Dave Jackson | Huấn luyện Tiếng Anh Thương mại Anh | Talk with Dave",
    description:
      "Buổi chẩn đoán miễn phí + chương trình học AI cá nhân hóa theo sự nghiệp của bạn. Huấn luyện tiếng Anh thương mại Anh cho chuyên gia tài chính, y tế và kinh doanh.",
    canonical: `${BASE_URL}/vi`,
    ogImage: DEFAULT_IMAGE,
    schemas: HOME_SCHEMAS,
  },
  "/esl-lessons-for-software-engineers": {
    title: "ESL Lessons for Software Engineers | Professional English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for software engineers. Master code reviews, sprint planning & stakeholder communication. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-software-engineers`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Software Engineers",
      "Free diagnostic + AI-personalised English curriculum for software engineers. Master code reviews, sprint planning & stakeholder communication. Native British coach.",
      "software-engineers",
      "Software Engineers"
    ),
  },
  "/esl-lessons-for-nurses": {
    title: "ESL Lessons for Nurses | Healthcare English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for nurses. Master patient handoffs, medical documentation & team communication. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-nurses`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Nurses",
      "Free diagnostic + AI-personalised English curriculum for nurses. Master patient handoffs, medical documentation & team communication. Native British coach.",
      "nurses",
      "Nurses"
    ),
  },
  "/esl-lessons-for-finance-professionals": {
    title: "ESL Lessons for Finance Professionals | Business English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for finance professionals. Master client presentations, market analysis & deal negotiations. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-finance-professionals`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Finance Professionals",
      "Free diagnostic + AI-personalised English curriculum for finance professionals. Master client presentations, market analysis & deal negotiations. Native British coach.",
      "finance-professionals",
      "Finance Professionals"
    ),
  },
  "/esl-lessons-for-business-executives": {
    title: "ESL Lessons for Business Executives | Executive English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for business executives. Master boardroom presentations, strategy meetings & global leadership. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-business-executives`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Business Executives",
      "Free diagnostic + AI-personalised English curriculum for business executives. Master boardroom presentations, strategy meetings & global leadership. Native British coach.",
      "business-executives",
      "Business Executives"
    ),
  },
  "/esl-lessons-for-engineers": {
    title: "ESL Lessons for Engineers | Technical English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for engineers. Master project meetings, technical specifications & cross-team collaboration. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-engineers`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Engineers",
      "Free diagnostic + AI-personalised English curriculum for engineers. Master project meetings, technical specifications & cross-team collaboration. Native British coach.",
      "engineers",
      "Engineers"
    ),
  },
  "/esl-lessons-for-doctors": {
    title: "ESL Lessons for Doctors | Medical English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for doctors. Master patient consultations, case presentations & medical conferences. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-doctors`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Doctors",
      "Free diagnostic + AI-personalised English curriculum for doctors. Master patient consultations, case presentations & medical conferences. Native British coach.",
      "doctors",
      "Doctors"
    ),
  },
  "/esl-lessons-for-lawyers": {
    title: "ESL Lessons for Lawyers | Legal English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for lawyers. Master client consultations, courtroom advocacy & contract negotiation. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-lawyers`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Lawyers",
      "Free diagnostic + AI-personalised English curriculum for lawyers. Master client consultations, courtroom advocacy & contract negotiation. Native British coach.",
      "lawyers",
      "Lawyers"
    ),
  },
  "/esl-lessons-for-it-professionals": {
    title: "ESL Lessons for IT Professionals | Technical English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for IT professionals. Master helpdesk communication, IT project management & vendor negotiations. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-it-professionals`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for IT Professionals",
      "Free diagnostic + AI-personalised English curriculum for IT professionals. Master helpdesk communication, IT project management & vendor negotiations. Native British coach.",
      "it-professionals",
      "IT Professionals"
    ),
  },
  "/esl-lessons-for-hospitality-professionals": {
    title: "ESL Lessons for Hospitality Professionals | Service English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for hospitality professionals. Master guest relations, complaint handling & team coordination. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-hospitality-professionals`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Hospitality Professionals",
      "Free diagnostic + AI-personalised English curriculum for hospitality professionals. Master guest relations, complaint handling & team coordination. Native British coach.",
      "hospitality-professionals",
      "Hospitality Professionals"
    ),
  },
  "/esl-lessons-for-marketing-professionals": {
    title: "ESL Lessons for Marketing Professionals | Marketing English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for marketing professionals. Master campaign presentations, brand strategy & client pitches. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-marketing-professionals`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Marketing Professionals",
      "Free diagnostic + AI-personalised English curriculum for marketing professionals. Master campaign presentations, brand strategy & client pitches. Native British coach.",
      "marketing-professionals",
      "Marketing Professionals"
    ),
  },
  "/esl-lessons-for-teachers": {
    title: "ESL Lessons for Teachers & Educators | Academic English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for teachers. Master classroom management, parent conferences & academic presentations. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-teachers`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Teachers & Educators",
      "Free diagnostic + AI-personalised English curriculum for teachers. Master classroom management, parent conferences & academic presentations. Native British coach.",
      "teachers",
      "Teachers"
    ),
  },
  "/esl-lessons-for-hr-professionals": {
    title: "ESL Lessons for HR Professionals | Workplace English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for HR professionals. Master recruitment interviews, policy communication & employee relations. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-hr-professionals`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for HR Professionals",
      "Free diagnostic + AI-personalised English curriculum for HR professionals. Master recruitment interviews, policy communication & employee relations. Native British coach.",
      "hr-professionals",
      "HR Professionals"
    ),
  },
  "/esl-lessons-for-architects": {
    title: "ESL Lessons for Architects | Design English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for architects. Master design presentations, client briefs & planning meetings. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-architects`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Architects",
      "Free diagnostic + AI-personalised English curriculum for architects. Master design presentations, client briefs & planning meetings. Native British coach.",
      "architects",
      "Architects"
    ),
  },
  "/esl-lessons-for-pharmacists": {
    title: "ESL Lessons for Pharmacists | Pharmaceutical English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for pharmacists. Master patient counselling, medication advice & clinical communication. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-pharmacists`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Pharmacists",
      "Free diagnostic + AI-personalised English curriculum for pharmacists. Master patient counselling, medication advice & clinical communication. Native British coach.",
      "pharmacists",
      "Pharmacists"
    ),
  },
  "/esl-lessons-for-accountants": {
    title: "ESL Lessons for Accountants | Financial English Coaching",
    description:
      "Free diagnostic + AI-personalised English curriculum for accountants. Master financial reporting, client advisory & audit communication. Native British coach.",
    canonical: `${BASE_URL}/esl-lessons-for-accountants`,
    ogImage: DEFAULT_IMAGE,
    schemas: professionSchema(
      "ESL Lessons for Accountants",
      "Free diagnostic + AI-personalised English curriculum for accountants. Master financial reporting, client advisory & audit communication. Native British coach.",
      "accountants",
      "Accountants"
    ),
  },
  "/b1-curriculum": {
    title: "B1 Business English Curriculum (Free Sample) | Talk with Dave",
    description:
      "Free B1-level business English curriculum built with AI. Sample lessons, vocabulary, and exercises for intermediate professional English learners. Native British coach.",
    canonical: `${BASE_URL}/b1-curriculum`,
    ogImage: DEFAULT_IMAGE,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "B1 Business English Curriculum",
        description:
          "A complete B1 (intermediate) business English curriculum built with AI. Includes sample lessons, vocabulary, reading exercises, and comprehension tasks for intermediate professional English learners.",
        url: `${BASE_URL}/b1-curriculum`,
        datePublished: PUBLISHED_DATE,
        dateModified: MODIFIED_DATE,
        provider: {
          "@type": "EducationalOrganization",
          name: "Talk with Dave",
          url: BASE_URL,
        },
        courseCode: "ESL-B1",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          instructor: COURSE_PROVIDER,
        },
        educationalLevel: "B1 (Intermediate)",
        teaches: "Intermediate business English communication skills",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          name: "Free Sample Curriculum",
        },
      },
      breadcrumbSchema("B1 Business English Curriculum", "/b1-curriculum"),
    ],
  },
  "/siem-reap": {
    title: "English Tutor in Siem Reap, Cambodia | Dave Jackson | Talk with Dave",
    description:
      "Native British English tutor based in Siem Reap. Personalised 1-on-1 lessons for Cambodian professionals, doctors, engineers & hospitality leaders. AI-built curriculum, flexible schedule.",
    canonical: `${BASE_URL}/siem-reap`,
    ogImage: DEFAULT_IMAGE,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "English Tutoring in Siem Reap, Cambodia",
        provider: COURSE_PROVIDER,
        description:
          "Personalised 1-on-1 English lessons for professionals in Siem Reap. Taught by Dave Jackson, a native British coach with 10+ years experience. AI-generated curriculum tailored to your career.",
        serviceType: "English Tutoring",
        datePublished: PUBLISHED_DATE,
        dateModified: MODIFIED_DATE,
        areaServed: {
          "@type": "City",
          name: "Siem Reap",
          containedInPlace: {
            "@type": "Country",
            name: "Cambodia",
          },
        },
        offers: {
          "@type": "Offer",
          name: "Free Diagnostic Session",
          price: "0",
          priceCurrency: "USD",
          description: "30-minute free diagnostic session. No obligation.",
          url: "https://calendly.com/daveynj113/your-first-lesson",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Dave Jackson",
        jobTitle: "English Tutor",
        url: `${BASE_URL}/siem-reap`,
        image: DEFAULT_IMAGE,
        nationality: "British",
        description:
          "Native British English teacher and EdTech innovator based in Siem Reap, Cambodia. Specialises in professional English for Cambodian doctors, engineers, and hospitality leaders.",
        worksFor: {
          "@type": "Organization",
          name: "Talk with Dave",
          url: BASE_URL,
        },
      },
      breadcrumbSchema("English Tutor in Siem Reap", "/siem-reap"),
    ],
  },
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectSEO(html: string, seo: PageSEO): string {
  const safe = {
    title: escapeHtml(seo.title),
    description: escapeHtml(seo.description),
    canonical: escapeHtml(seo.canonical),
    ogImage: escapeHtml(seo.ogImage || DEFAULT_IMAGE),
  };

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${safe.title}</title>`);

  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${safe.description}" />`
  );

  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${safe.canonical}" />`
  );

  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${safe.title}" />`
  );

  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${safe.description}" />`
  );

  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${safe.canonical}" />`
  );

  html = html.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${safe.ogImage}" />`
  );

  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${safe.title}" />`
  );

  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${safe.description}" />`
  );

  html = html.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${safe.ogImage}" />`
  );

  if (seo.schemas.length > 0) {
    const schemaBlocks = seo.schemas
      .map((s) => `  <script type="application/ld+json">${JSON.stringify(s)}</script>`)
      .join("\n");
    html = html.replace("</head>", `${schemaBlocks}\n</head>`);
  }

  return html;
}

let cachedTemplate: string | null = null;

function getTemplate(isDev: boolean): string | null {
  if (isDev) {
    const devPath = path.resolve(process.cwd(), "client", "index.html");
    if (!fs.existsSync(devPath)) return null;
    return fs.readFileSync(devPath, "utf-8");
  }

  if (cachedTemplate) return cachedTemplate;

  const prodPath = path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "public",
    "index.html"
  );

  if (!fs.existsSync(prodPath)) return null;
  cachedTemplate = fs.readFileSync(prodPath, "utf-8");
  return cachedTemplate;
}

interface SitemapMeta {
  priority: number;
  changefreq: string;
  hreflang?: { lang: string; href: string }[];
}

const HREFLANG_ALL = [
  { lang: "en", href: `${BASE_URL}/` },
  { lang: "zh", href: `${BASE_URL}/zh` },
  { lang: "ja", href: `${BASE_URL}/ja` },
  { lang: "ko", href: `${BASE_URL}/ko` },
  { lang: "vi", href: `${BASE_URL}/vi` },
];

const SITEMAP_META: Record<string, SitemapMeta> = {
  "/": { priority: 1.0, changefreq: "weekly", hreflang: HREFLANG_ALL },
  "/zh": {
    priority: 0.8,
    changefreq: "weekly",
    hreflang: [{ lang: "en", href: `${BASE_URL}/` }, { lang: "zh", href: `${BASE_URL}/zh` }],
  },
  "/ja": {
    priority: 0.8,
    changefreq: "weekly",
    hreflang: [{ lang: "en", href: `${BASE_URL}/` }, { lang: "ja", href: `${BASE_URL}/ja` }],
  },
  "/ko": {
    priority: 0.8,
    changefreq: "weekly",
    hreflang: [{ lang: "en", href: `${BASE_URL}/` }, { lang: "ko", href: `${BASE_URL}/ko` }],
  },
  "/vi": {
    priority: 0.8,
    changefreq: "weekly",
    hreflang: [{ lang: "en", href: `${BASE_URL}/` }, { lang: "vi", href: `${BASE_URL}/vi` }],
  },
  "/b1-curriculum": { priority: 0.7, changefreq: "monthly" },
  "/siem-reap": { priority: 0.6, changefreq: "monthly" },
};

function buildSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  const urlEntries = Object.keys(PAGE_SEO)
    .map((route) => {
      const meta = SITEMAP_META[route] ?? { priority: 0.9, changefreq: "weekly" };
      const loc = `${BASE_URL}${route === "/" ? "/" : route}`;
      const hreflangTags = meta.hreflang
        ? meta.hreflang
            .map(
              (h) =>
                `    <xhtml:link rel="alternate" hreflang="${h.lang}" href="${h.href}" />`
            )
            .join("\n")
        : "";

      return [
        `  <url>`,
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${meta.changefreq}</changefreq>`,
        `    <priority>${meta.priority.toFixed(1)}</priority>`,
        hreflangTags,
        `  </url>`,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    urlEntries,
    `</urlset>`,
  ].join("\n");
}

export function registerSEORoutes(app: Express): void {
  const isDev = app.get("env") === "development";

  app.get("/sitemap.xml", (_req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/xml");
    res.send(buildSitemap());
  });

  const routes = Object.keys(PAGE_SEO);

  for (const route of routes) {
    app.get(route, (req: Request, res: Response, next: NextFunction) => {
      const seo = PAGE_SEO[route];
      const template = getTemplate(isDev);

      if (!template) {
        return next();
      }

      const html = injectSEO(template, seo);
      res.status(200).set("Content-Type", "text/html").end(html);
    });
  }
}
