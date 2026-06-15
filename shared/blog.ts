export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta"; text: string };

export interface BlogRelatedLink {
  label: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  content: BlogBlock[];
  related: BlogRelatedLink[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sound-confident-english-meetings",
    title: "How to Sound More Confident in English Meetings (10 Phrases That Actually Work)",
    metaTitle: "How to Sound More Confident in English Meetings | 10 Phrases",
    metaDescription:
      "Struggling to speak up in English meetings? Learn 10 professional phrases to interrupt politely, give opinions, and disagree with confidence. Native British coach.",
    excerpt:
      "You have great ideas but freeze when it's time to speak. These 10 ready-to-use phrases will help you contribute, interrupt politely, and disagree without sounding rude.",
    date: "2026-06-02",
    readTime: 7,
    category: "Speaking Confidence",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
    imageAlt: "Professionals in a business meeting speaking English",
    keywords: [
      "confident in English meetings",
      "business English phrases",
      "how to speak up in meetings",
      "English meeting vocabulary",
    ],
    content: [
      {
        type: "p",
        text: "If you're a non-native English speaker, meetings can be the most stressful part of your week. You understand everything, you have valuable opinions, but by the time you've translated your thought into perfect English, the conversation has already moved on. Sound familiar? The good news is that confidence in meetings is far less about your grammar and far more about having a few reliable phrases ready to go. Native speakers rely on these same set phrases every single day.",
      },
      {
        type: "p",
        text: "Below are ten phrases that international professionals can start using in their very next meeting. Memorise them, and you'll never be lost for words again.",
      },
      { type: "h2", text: "1. Buying yourself time to think" },
      {
        type: "p",
        text: "One of the biggest mistakes is staying silent while you formulate the perfect sentence. Instead, signal that you're thinking. This keeps you in the conversation and stops someone else from jumping in.",
      },
      {
        type: "ul",
        items: [
          "\"That's a good question — let me think about that for a second.\"",
          "\"Before I answer, can I just make sure I understand you correctly?\"",
          "\"That's an interesting point. My first reaction is…\"",
        ],
      },
      { type: "h2", text: "2. Interrupting politely" },
      {
        type: "p",
        text: "Many professionals never get to speak because they're waiting for a gap that never comes. Native speakers interrupt — they just do it politely. These phrases let you enter the conversation without seeming rude.",
      },
      {
        type: "ul",
        items: [
          "\"Sorry to jump in, but I'd like to add something here.\"",
          "\"Can I just come in on that point?\"",
          "\"If I could add one thing…\"",
        ],
      },
      { type: "h2", text: "3. Giving your opinion with authority" },
      {
        type: "p",
        text: "Weak opening words make strong ideas sound uncertain. Replace \"maybe\" and \"I think possibly\" with phrases that carry weight.",
      },
      {
        type: "ul",
        items: [
          "\"From my perspective, the key issue is…\"",
          "\"In my experience, what works best is…\"",
          "\"I'm confident that…\"",
        ],
      },
      { type: "h2", text: "4. Disagreeing without causing offence" },
      {
        type: "p",
        text: "Disagreeing in a second language feels risky, so many people just nod along. You can push back respectfully — and earn more respect for it — with softeners like these.",
      },
      {
        type: "ul",
        items: [
          "\"I see your point, but I'd look at it slightly differently.\"",
          "\"I'm not sure I fully agree — here's why.\"",
          "\"That's one option. Another way to think about it might be…\"",
        ],
      },
      {
        type: "quote",
        text: "Confidence in English isn't about never making mistakes. It's about having the tools to keep the conversation moving when you do.",
      },
      { type: "h2", text: "Why phrases beat grammar drills" },
      {
        type: "p",
        text: "Memorising whole phrases — not individual words — is how fluent speakers operate. Your brain doesn't have to build the sentence from scratch under pressure; you simply reach for a ready-made chunk. This is exactly the principle behind the personalised curriculum I build for every student: we identify the exact meetings and scenarios you face at work, then drill the phrases you'll actually use.",
      },
      {
        type: "p",
        text: "Pick three phrases from this list and use them in your next meeting. Then add three more the following week. Within a month, speaking up will feel automatic.",
      },
      {
        type: "cta",
        text: "Want a phrase bank built around your exact job and meetings? Book a free diagnostic session and I'll map out a plan.",
      },
    ],
    related: [
      { label: "English coaching for Business Executives", href: "/esl-lessons-for-business-executives" },
      { label: "English coaching for Finance Professionals", href: "/esl-lessons-for-finance-professionals" },
    ],
  },
  {
    slug: "business-english-email-phrases",
    title: "25 Business English Phrases for Professional Emails (With Examples)",
    metaTitle: "25 Business English Email Phrases | Professional Examples",
    metaDescription:
      "Write clearer, more professional English emails with 25 ready-to-use phrases for openings, requests, follow-ups and closings. Real examples from a British coach.",
    excerpt:
      "Stop spending 30 minutes on a 3-line email. These 25 phrases cover openings, polite requests, follow-ups and closings so you can write with confidence.",
    date: "2026-05-20",
    readTime: 8,
    category: "Business Writing",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
    imageAlt: "Professional writing a business email on a laptop",
    keywords: [
      "business English email phrases",
      "professional email English",
      "how to write a business email in English",
      "polite email phrases",
    ],
    content: [
      {
        type: "p",
        text: "For many international professionals, a short email can take half an hour. You second-guess every word: Is this too direct? Too casual? Will it sound rude? The truth is that professional English email writing follows predictable patterns. Once you have a set of trusted phrases for each part of an email, the anxiety disappears and your writing speeds up dramatically.",
      },
      { type: "h2", text: "Opening lines" },
      {
        type: "p",
        text: "Skip \"How are you?\" with people you don't know. These openings sound natural and get to the point.",
      },
      {
        type: "ul",
        items: [
          "\"I hope you're well.\"",
          "\"I'm writing to follow up on…\"",
          "\"Thank you for getting back to me so quickly.\"",
          "\"I'm reaching out regarding…\"",
        ],
      },
      { type: "h2", text: "Making a polite request" },
      {
        type: "p",
        text: "Direct requests can sound like commands in English. Soften them with these structures and you'll get faster, friendlier replies.",
      },
      {
        type: "ul",
        items: [
          "\"Would you be able to send me…?\"",
          "\"I'd appreciate it if you could…\"",
          "\"When you get a chance, could you…?\"",
          "\"Just a quick request — could you confirm…?\"",
        ],
      },
      { type: "h2", text: "Following up without nagging" },
      {
        type: "p",
        text: "Chasing a reply is awkward in any language. These phrases keep it light and professional.",
      },
      {
        type: "ul",
        items: [
          "\"I just wanted to gently follow up on my last email.\"",
          "\"I know you're busy, so no rush — but I wanted to check in.\"",
          "\"Has there been any update on this?\"",
        ],
      },
      { type: "h2", text: "Giving bad news or saying no" },
      {
        type: "p",
        text: "Declining politely is a vital skill. Cushion the message with a positive opening and a clear reason.",
      },
      {
        type: "ul",
        items: [
          "\"Unfortunately, we won't be able to…\"",
          "\"I'm afraid that won't be possible, but here's what we can do.\"",
          "\"Thank you for thinking of me. On this occasion, I'll have to pass.\"",
        ],
      },
      { type: "h2", text: "Professional closings" },
      {
        type: "ul",
        items: [
          "\"Please let me know if you have any questions.\"",
          "\"Looking forward to hearing from you.\"",
          "\"Thanks in advance for your help.\"",
          "\"Best regards,\" / \"Kind regards,\"",
        ],
      },
      {
        type: "quote",
        text: "The fastest way to write better emails isn't to learn more vocabulary — it's to reuse a small set of phrases you trust.",
      },
      { type: "h2", text: "A simple template you can reuse" },
      {
        type: "ol",
        items: [
          "Open warmly (one line).",
          "State your purpose clearly (one line).",
          "Make your request or share your information.",
          "Close with a clear next step.",
        ],
      },
      {
        type: "p",
        text: "Keep this structure in mind and your emails will become shorter, clearer, and far quicker to write. If email anxiety is slowing you down at work, this is exactly the kind of practical skill we drill in personalised lessons — using your real emails as material.",
      },
      {
        type: "cta",
        text: "Want feedback on your actual work emails? Book a free diagnostic and we'll review them together.",
      },
    ],
    related: [
      { label: "English coaching for Finance Professionals", href: "/esl-lessons-for-finance-professionals" },
      { label: "English coaching for HR Professionals", href: "/esl-lessons-for-hr-professionals" },
    ],
  },
  {
    slug: "introduce-yourself-job-interview-english",
    title: "How to Introduce Yourself in a Job Interview in English",
    metaTitle: "How to Introduce Yourself in a Job Interview in English",
    metaDescription:
      "Nail the 'tell me about yourself' question with a clear, confident English interview introduction. Structure, examples and common mistakes to avoid.",
    excerpt:
      "\"Tell me about yourself\" is the first question in almost every interview — and the easiest to prepare. Here's a proven structure and example answer.",
    date: "2026-05-08",
    readTime: 6,
    category: "Interview Preparation",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
    imageAlt: "Candidate introducing themselves in a job interview",
    keywords: [
      "introduce yourself job interview English",
      "tell me about yourself answer",
      "English interview preparation",
      "job interview English phrases",
    ],
    content: [
      {
        type: "p",
        text: "Almost every interview opens with the same request: \"Tell me about yourself.\" For non-native speakers, this is both the scariest and the most controllable moment of the whole interview — scary because it sets the tone, controllable because you can prepare it word for word in advance. A strong introduction buys you confidence for everything that follows.",
      },
      { type: "h2", text: "The Present–Past–Future structure" },
      {
        type: "p",
        text: "The cleanest way to answer is to move through three time frames. It keeps you organised and stops you from rambling.",
      },
      {
        type: "ol",
        items: [
          "Present: Who you are now and your current role.",
          "Past: A brief highlight of relevant experience.",
          "Future: Why you're excited about this role specifically.",
        ],
      },
      { type: "h2", text: "An example answer" },
      {
        type: "quote",
        text: "\"I'm a software engineer with five years of experience building payment systems. Currently I lead a small backend team at a fintech company. Before that, I worked at a startup where I helped scale our platform from ten thousand to a million users. I'm now looking for a role where I can take on more architectural responsibility, which is exactly why this position caught my attention.\"",
      },
      {
        type: "p",
        text: "Notice how short it is — under 60 seconds. The goal is not to tell your life story; it's to give a clear, confident snapshot and invite follow-up questions.",
      },
      { type: "h2", text: "Useful phrases to start" },
      {
        type: "ul",
        items: [
          "\"Sure, I'd be happy to.\"",
          "\"Currently, I'm working as…\"",
          "\"Before my current role, I…\"",
          "\"What excites me about this opportunity is…\"",
        ],
      },
      { type: "h2", text: "Common mistakes to avoid" },
      {
        type: "ul",
        items: [
          "Repeating your CV line by line — the interviewer has already read it.",
          "Speaking for three minutes without pausing.",
          "Apologising for your English. Don't — it only draws attention to it.",
          "Memorising a script so rigidly that you sound robotic. Learn the structure, not the exact words.",
        ],
      },
      { type: "h2", text: "Practise out loud, not in your head" },
      {
        type: "p",
        text: "Reading your answer silently is not the same as saying it under pressure. Record yourself on your phone, listen back, and refine. Better still, practise with someone who can give you feedback on pronunciation and natural phrasing. In my interview-preparation lessons, we run realistic mock interviews so the real thing feels familiar.",
      },
      {
        type: "cta",
        text: "Have an interview coming up? Book a free diagnostic session and we'll prepare your introduction together.",
      },
    ],
    related: [
      { label: "English coaching for Software Engineers", href: "/esl-lessons-for-software-engineers" },
      { label: "English coaching for Business Executives", href: "/esl-lessons-for-business-executives" },
    ],
  },
  {
    slug: "common-english-mistakes-professionals",
    title: "7 Common English Mistakes Made by Non-Native Professionals (and How to Fix Them)",
    metaTitle: "7 Common English Mistakes by Non-Native Professionals",
    metaDescription:
      "Even advanced speakers make these 7 English mistakes at work. Learn the fixes for articles, prepositions, false friends and more from a British coach.",
    excerpt:
      "Even advanced speakers repeat the same small errors that quietly undermine their credibility. Here are seven of the most common — and exactly how to fix each one.",
    date: "2026-04-22",
    readTime: 7,
    category: "Grammar & Accuracy",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
    imageAlt: "Notebook and pen for studying English",
    keywords: [
      "common English mistakes",
      "English mistakes non-native speakers",
      "business English grammar",
      "how to fix English mistakes",
    ],
    content: [
      {
        type: "p",
        text: "Here's something reassuring: the errors that hold back advanced professionals are usually small and repeatable. You don't need to relearn English — you need to fix a handful of recurring habits. Below are seven of the most common mistakes I hear from international professionals, along with the simple fix for each.",
      },
      { type: "h2", text: "1. Missing or extra articles (a, an, the)" },
      {
        type: "p",
        text: "Many languages don't use articles, so they're easy to drop. \"I sent you email\" should be \"I sent you an email.\" The fix: when you mention something for the first time, ask whether it's one of many (use a/an) or specific and known (use the).",
      },
      { type: "h2", text: "2. Wrong prepositions" },
      {
        type: "p",
        text: "\"I'm responsible of the team\" should be \"responsible for the team.\" Prepositions rarely translate directly. The fix: learn them as part of the whole phrase — \"depend on,\" \"interested in,\" \"good at\" — rather than as separate words.",
      },
      { type: "h2", text: "3. Present perfect vs past simple" },
      {
        type: "p",
        text: "\"I worked here for five years\" (you left) versus \"I have worked here for five years\" (you still do) carry very different meanings. The fix: use the present perfect for things that connect to now.",
      },
      { type: "h2", text: "4. False friends" },
      {
        type: "p",
        text: "Words that look similar across languages can mean different things. \"Actually\" doesn't mean \"currently,\" and \"sensible\" doesn't mean \"sensitive.\" The fix: keep a personal list of the false friends in your own language.",
      },
      { type: "h2", text: "5. Overusing formal or textbook words" },
      {
        type: "p",
        text: "Saying \"Henceforth I shall revert to you\" sounds stiff and old-fashioned. Native professionals write simply: \"I'll get back to you.\" The fix: when in doubt, choose the shorter, plainer word.",
      },
      { type: "h2", text: "6. Pronunciation of word stress" },
      {
        type: "p",
        text: "Stressing the wrong syllable can make a word hard to understand even when every sound is correct. \"REcord\" (noun) vs \"reCORD\" (verb) is a classic example. The fix: learn the stress pattern alongside each new word.",
      },
      { type: "h2", text: "7. Speaking too fast to hide nerves" },
      {
        type: "p",
        text: "Rushing makes errors more likely and harder to follow. The fix: slow down and pause. Pauses make you sound more thoughtful and authoritative, not less fluent.",
      },
      {
        type: "quote",
        text: "Accuracy isn't about perfection. It's about removing the small, repeated errors that quietly distract your listener.",
      },
      {
        type: "p",
        text: "The most efficient way to fix these is targeted feedback on your own speaking and writing — not generic grammar exercises. That's the core of how I work with professionals: we find your specific recurring errors and eliminate them one by one.",
      },
      {
        type: "cta",
        text: "Want to know which of these you're making? Book a free diagnostic and I'll pinpoint your top three.",
      },
    ],
    related: [
      { label: "English coaching for Engineers", href: "/esl-lessons-for-engineers" },
      { label: "English coaching for Doctors", href: "/esl-lessons-for-doctors" },
    ],
  },
  {
    slug: "improve-english-fluency-busy-professionals",
    title: "How to Improve Your English Fluency When You're Too Busy to Study",
    metaTitle: "How to Improve English Fluency When You're Busy | Practical Plan",
    metaDescription:
      "No time to study English? Learn how busy professionals build real fluency with 15 minutes a day using micro-habits, input immersion and focused speaking practice.",
    excerpt:
      "You don't need two hours a day to get fluent. You need the right 15 minutes. Here's how busy professionals make steady progress without burning out.",
    date: "2026-04-05",
    readTime: 6,
    category: "Learning Strategy",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
    imageAlt: "Busy professional studying English on a laptop with coffee",
    keywords: [
      "improve English fluency",
      "learn English when busy",
      "English practice for professionals",
      "how to become fluent in English",
    ],
    content: [
      {
        type: "p",
        text: "The single most common reason professionals stop learning English is time. Between work, family and everything else, an hour of study feels impossible. But fluency doesn't come from marathon study sessions — it comes from consistency. Fifteen focused minutes a day beats a three-hour session once a month, every time.",
      },
      { type: "h2", text: "Attach English to habits you already have" },
      {
        type: "p",
        text: "The easiest way to stay consistent is to bolt English onto something you already do daily. This removes the need for willpower.",
      },
      {
        type: "ul",
        items: [
          "Switch your commute podcast to one in English.",
          "Listen to an audiobook while cooking or exercising.",
          "Change your phone's language settings to English.",
          "Read one news article in English with your morning coffee.",
        ],
      },
      { type: "h2", text: "Prioritise input over apps" },
      {
        type: "p",
        text: "Vocabulary apps feel productive but rarely build real fluency. Your brain learns language best from large amounts of meaningful input — content you actually enjoy and mostly understand. A TV series, a podcast about your industry, a YouTube channel you like. The key is volume and consistency.",
      },
      { type: "h2", text: "Speak more than you study" },
      {
        type: "p",
        text: "Fluency is a speaking skill, and speaking only improves by speaking. Reading grammar books builds knowledge, not fluency. Even five minutes of talking out loud — describing your day, summarising an article — trains the muscle that matters most.",
      },
      {
        type: "quote",
        text: "Consistency beats intensity. The professional who practises 15 minutes daily will overtake the one who crams once a week.",
      },
      { type: "h2", text: "A realistic weekly plan" },
      {
        type: "ol",
        items: [
          "Monday–Friday: 15 minutes of listening during your commute.",
          "Three times a week: 5 minutes speaking out loud.",
          "Once a week: a longer conversation with a tutor or language partner.",
          "Ongoing: note any words you wanted but didn't know, and learn them.",
        ],
      },
      {
        type: "p",
        text: "That's under two hours a week, most of it during time you're already using. The weekly conversation is the multiplier — it turns passive knowledge into active fluency and shows you exactly what to work on next.",
      },
      {
        type: "p",
        text: "This is precisely why my lessons are built around your schedule and your real-life situations. We make every minute count so that even busy professionals see steady, visible progress.",
      },
      {
        type: "cta",
        text: "Ready to make your limited time count? Book a free diagnostic and we'll build a plan that fits your week.",
      },
    ],
    related: [
      { label: "English coaching for IT Professionals", href: "/esl-lessons-for-it-professionals" },
      { label: "English coaching for Marketing Professionals", href: "/esl-lessons-for-marketing-professionals" },
    ],
  },
  {
    slug: "english-small-talk-before-meetings",
    title: "English Small Talk: What to Say Before a Meeting Starts",
    metaTitle: "English Small Talk Before Meetings | Phrases & Examples",
    metaDescription:
      "Those few minutes before a meeting matter. Learn natural English small talk phrases to build rapport, sound friendly and avoid awkward silence at work.",
    excerpt:
      "The two minutes before a meeting starts can feel like the hardest part. Here's exactly what to say to break the silence and build rapport in English.",
    date: "2026-03-18",
    readTime: 5,
    category: "Speaking Confidence",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
    imageAlt: "Colleagues making small talk before a meeting",
    keywords: [
      "English small talk",
      "small talk phrases for work",
      "what to say before a meeting",
      "business English conversation",
    ],
    content: [
      {
        type: "p",
        text: "Many international professionals tell me the formal part of a meeting is fine — it's the small talk before and after that terrifies them. Those unscripted few minutes of chit-chat feel impossible to prepare for. But small talk is actually highly predictable. It revolves around a handful of safe topics and a few reliable phrases. Master those, and you'll never dread the silence again.",
      },
      { type: "h2", text: "Safe topics that always work" },
      {
        type: "ul",
        items: [
          "The weekend (\"Did you do anything nice over the weekend?\")",
          "Travel and commuting (\"How was your journey in?\")",
          "Work in general (\"How's your week going so far?\")",
          "Shared context (\"Have you been in many of these sessions?\")",
        ],
      },
      { type: "h2", text: "Topics to avoid" },
      {
        type: "p",
        text: "Some subjects are risky in professional settings, especially across cultures. As a general rule, steer clear of politics, religion, salary, and anything too personal until you know someone well.",
      },
      { type: "h2", text: "Reliable opening phrases" },
      {
        type: "ul",
        items: [
          "\"How's everything going with you?\"",
          "\"Did you have a good weekend?\"",
          "\"How are you finding the week?\"",
          "\"It's been a busy one, hasn't it?\"",
        ],
      },
      { type: "h2", text: "Keep the conversation going" },
      {
        type: "p",
        text: "The secret to small talk is the follow-up question. Don't just answer — bounce it back. If someone says they had a relaxing weekend, ask what they did. People enjoy talking about themselves, and you do far less of the work.",
      },
      {
        type: "ul",
        items: [
          "\"Oh nice — what did you get up to?\"",
          "\"That sounds great. How long were you there?\"",
          "\"Really? Tell me more about that.\"",
        ],
      },
      { type: "h2", text: "How to exit gracefully" },
      {
        type: "p",
        text: "When it's time to begin, you need a smooth way out of the chat. These phrases signal the transition naturally.",
      },
      {
        type: "ul",
        items: [
          "\"Anyway, we should probably get started.\"",
          "\"Let's dive in, shall we?\"",
          "\"We can catch up properly after the meeting.\"",
        ],
      },
      {
        type: "quote",
        text: "Small talk isn't wasted time. It's how trust is built — and trust is what makes the rest of the meeting go smoothly.",
      },
      {
        type: "p",
        text: "If small talk is your weak spot, the fix is simply rehearsing it in a safe environment until it feels automatic. We do exactly that in lessons — role-playing the real situations you face so that, in the moment, the words are already there.",
      },
      {
        type: "cta",
        text: "Want to practise real workplace small talk with a native British coach? Book your free diagnostic today.",
      },
    ],
    related: [
      { label: "English coaching for Hospitality Professionals", href: "/esl-lessons-for-hospitality-professionals" },
      { label: "English coaching for Business Executives", href: "/esl-lessons-for-business-executives" },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
