// Profession-specific data for programmatic SEO landing pages

export interface VocabularyWord {
    word: string;
    partOfSpeech: string;
    definition: string;
    example: string;
    usageNote?: string;
}

export interface LessonData {
    title: string;
    vocabulary: string[]; // Just the words for curriculum display
}

export interface ComprehensionQuestion {
    question: string;
    options?: string[];
    answer?: string;
    type: 'multiple-choice' | 'true-false' | 'open-ended';
}

export interface FullLessonData {
    title: string;
    vocabulary: VocabularyWord[];
    reading: {
        title: string;
        content: string;
    };
    comprehension: ComprehensionQuestion[];
    discussion: string[];
    grammar?: {
        title: string;
        explanation: string;
        examples: string[];
    };
    sentenceFrames?: {
        frame: string;
        example: string;
    }[];
}

export interface CurriculumPhase {
    phase: number;
    title: string;
    subtitle: string;
    description: string;
    lessons: LessonData[];
}

export interface ProfessionData {
    slug: string;
    title: string;
    profession: string; // e.g., "Software Engineers"
    description?: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    targetKeyword: string;
    heroSubtitle: string;
    benefits: string[];
    commonChallenges: string[];
    curriculum: CurriculumPhase[];
    firstLesson: FullLessonData;
}

// Software Engineers Data
export const softwareEngineerData: ProfessionData = {
    slug: 'software-engineers',
    title: 'ESL Lessons for Software Engineers',
    profession: 'Software Engineers',
    metaTitle: 'ESL Lessons for Software Engineers | Professional English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for software engineers. Master code reviews, sprint planning & stakeholder communication. Native British coach.',
    h1: 'Professional English Lessons for Software Engineers',
    targetKeyword: 'ESL lessons for software engineers',
    heroSubtitle: 'Master technical communication, code reviews, and stakeholder discussions with confidence',
    benefits: [
        'Communicate complex technical concepts clearly',
        'Lead effective code reviews and sprint planning',
        'Present to stakeholders with confidence',
        'Advance your career in global tech companies',
    ],
    commonChallenges: [
        'Explaining technical issues to non-technical stakeholders',
        'Participating confidently in code review discussions',
        'Writing clear documentation and technical reports',
        'Networking and presenting at tech conferences',
    ],
    curriculum: [
        {
            phase: 1,
            title: 'Technical Communication',
            subtitle: 'Lessons 1-5',
            description: 'Master the fundamentals of communicating technical concepts, from code reviews to documentation.',
            lessons: [
                { title: 'Code Review Discussions', vocabulary: ['Refactor', 'Optimize', 'Legacy code', 'Edge case', 'Implementation'] },
                { title: 'Technical Presentations', vocabulary: ['Architecture', 'Scalability', 'Deployment', 'Infrastructure', 'Workflow'] },
                { title: 'Sprint Planning Meetings', vocabulary: ['Velocity', 'Backlog', 'Sprint goal', 'Estimation', 'Capacity'] },
                { title: 'Bug Reporting & Troubleshooting', vocabulary: ['Reproduce', 'Root cause', 'Debugging', 'Stack trace', 'Bottleneck'] },
                { title: 'Documentation Writing', vocabulary: ['API', 'Endpoint', 'Parameter', 'Deprecated', 'Versioning'] },
            ],
        },
        {
            phase: 2,
            title: 'Team Collaboration',
            subtitle: 'Lessons 6-10',
            description: 'Enhance your ability to work effectively with diverse teams in agile environments.',
            lessons: [
                { title: 'Daily Standups', vocabulary: ['Blocker', 'Progress', 'Dependencies', 'Handoff', 'Sync'] },
                { title: 'Cross-functional Collaboration', vocabulary: ['Stakeholder', 'Alignment', 'Trade-off', 'Consensus', 'Iterate'] },
                { title: 'Mentoring Junior Developers', vocabulary: ['Guidance', 'Best practice', 'Code smell', 'Pair programming', 'Feedback'] },
                { title: 'Conflict Resolution', vocabulary: ['Compromise', 'Perspective', 'Escalate', 'Mediate', 'Resolution'] },
                { title: 'Remote Team Communication', vocabulary: ['Asynchronous', 'Timezone', 'Documentation', 'Visibility', 'Collaboration tools'] },
            ],
        },
        {
            phase: 3,
            title: 'Client & Stakeholder Communication',
            subtitle: 'Lessons 11-15',
            description: 'Develop skills to effectively communicate with clients and non-technical stakeholders.',
            lessons: [
                { title: 'Requirements Gathering', vocabulary: ['Specification', 'Constraint', 'Feasibility', 'Scope', 'Deliverable'] },
                { title: 'Project Status Updates', vocabulary: ['Milestone', 'On track', 'Risk', 'Timeline', 'Progress report'] },
                { title: 'Demo Presentations', vocabulary: ['Feature', 'User story', 'Functionality', 'Demo', 'Walkthrough'] },
                { title: 'Handling Technical Objections', vocabulary: ['Concern', 'Mitigation', 'Alternative', 'Technical debt', 'Justification'] },
                { title: 'Negotiating Deadlines', vocabulary: ['Realistic', 'Extension', 'Priority', 'Resource', 'Commitment'] },
            ],
        },
        {
            phase: 4,
            title: 'Career Development',
            subtitle: 'Lessons 16-20',
            description: 'Advance your career with professional communication skills for interviews, networking, and leadership.',
            lessons: [
                { title: 'Job Interviews for Developers', vocabulary: ['Experience', 'Achievement', 'Challenge', 'Technical skills', 'Problem-solving'] },
                { title: 'Salary Negotiations', vocabulary: ['Compensation', 'Benefits', 'Market rate', 'Negotiate', 'Counteroffer'] },
                { title: 'Conference Presentations', vocabulary: ['Abstract', 'Speaker', 'Audience', 'Q&A', 'Engage'] },
                { title: 'Networking at Tech Events', vocabulary: ['Connect', 'Industry', 'Opportunity', 'Follow up', 'Professional network'] },
                { title: 'Professional Branding', vocabulary: ['Portfolio', 'LinkedIn', 'Open source', 'Reputation', 'Thought leader'] },
            ],
        },
        {
            phase: 5,
            title: 'Advanced Topics',
            subtitle: 'Lessons 21-25',
            description: 'Master advanced technical discussions on architecture, security, and emerging technologies.',
            lessons: [
                { title: 'System Design Discussions', vocabulary: ['Load balancing', 'Microservices', 'Database schema', 'Caching', 'Distributed system'] },
                { title: 'Architecture Decision Records', vocabulary: ['Rationale', 'Consequence', 'Alternative', 'Decision', 'Document'] },
                { title: 'Performance Optimization Debates', vocabulary: ['Latency', 'Throughput', 'Benchmark', 'Profiling', 'Optimization'] },
                { title: 'Security Best Practices', vocabulary: ['Vulnerability', 'Authentication', 'Encryption', 'Compliance', 'Threat'] },
                { title: 'Future Tech Trends', vocabulary: ['Artificial intelligence', 'Machine learning', 'Cloud native', 'Innovation', 'Emerging technology'] },
            ],
        },
    ],
    firstLesson: {
        title: 'Code Review Discussions',
        vocabulary: [
            {
                word: 'Refactor',
                partOfSpeech: 'verb',
                definition: 'To restructure existing code without changing its external behavior, improving its readability and reducing complexity.',
                example: 'We need to refactor this function because it\'s become too long and difficult to maintain.',
                usageNote: 'Commonly used in code reviews and technical discussions about improving code quality.',
            },
            {
                word: 'Optimize',
                partOfSpeech: 'verb',
                definition: 'To make code more efficient by improving performance, reducing resource usage, or minimizing execution time.',
                example: 'I optimized the database query and reduced the response time by 50%.',
                usageNote: 'Often paired with specific metrics like speed, memory, or resource consumption.',
            },
            {
                word: 'Legacy code',
                partOfSpeech: 'noun',
                definition: 'Older code that is still in use but may be outdated, poorly documented, or difficult to modify.',
                example: 'We\'re gradually replacing the legacy code with a more modern architecture.',
                usageNote: 'Can have negative connotations, but is a neutral term for existing code that needs updating.',
            },
            {
                word: 'Edge case',
                partOfSpeech: 'noun',
                definition: 'An unusual or extreme situation that occurs rarely but must be handled by the code to prevent errors.',
                example: 'Did you test for edge cases like empty input or null values?',
                usageNote: 'Important to consider during testing and code reviews to ensure robust software.',
            },
            {
                word: 'Implementation',
                partOfSpeech: 'noun',
                definition: 'The actual code written to fulfill a specific requirement or design, turning an idea into working software.',
                example: 'The implementation looks good, but we should add more error handling.',
                usageNote: 'Refers to the practical execution of a design or plan in code form.',
            },
        ],
        reading: {
            title: 'A Productive Code Review',
            content: `Sarah is a senior software engineer at TechFlow, a fast-growing fintech startup. Today, she's reviewing code submitted by Marcus, a talented mid-level developer on her team. Marcus has implemented a new feature for processing customer payments, and Sarah wants to provide constructive feedback.

"Hi Marcus, thanks for submitting this pull request," Sarah begins during their video call. "I've reviewed your implementation, and overall, the logic looks solid. However, I noticed a few areas we could improve."

Marcus nods, ready to take notes. "Sure, I'm happy to make changes. What did you find?"

Sarah shares her screen. "First, I think we should refactor this payment validation function. It's currently 150 lines long, which makes it hard to test and maintain. Could we break it down into smaller, more focused functions?"

"That makes sense," Marcus agrees. "I was trying to handle all the edge cases in one place, but I see how that became too complex."

"Exactly," Sarah continues. "Also, I noticed this database query runs inside a loop. We should optimize that by batching the queries together. Right now, it could create a performance bottleneck when we have many transactions."

Marcus marks this down as a priority. "Good catch. I'll optimize that today."

Sarah concludes the review positively: "The core implementation is great, Marcus. These are just improvements to make the code more maintainable. Once you've made these changes, I'll approve the pull request."

Marcus feels motivated rather than criticized. This is what effective code review looks like – constructive, specific, and focused on improvement.`,
        },
        comprehension: [
            {
                question: 'What is Sarah\'s role at TechFlow?',
                type: 'multiple-choice',
                options: [
                    'Junior developer',
                    'Senior software engineer',
                    'Product manager',
                    'QA tester',
                ],
                answer: 'Senior software engineer',
            },
            {
                question: 'What feature did Marcus implement?',
                type: 'multiple-choice',
                options: [
                    'Customer login system',
                    'Payment processing',
                    'Email notifications',
                    'Data analytics',
                ],
                answer: 'Payment processing',
            },
            {
                question: 'Why does Sarah suggest refactoring the validation function?',
                type: 'multiple-choice',
                options: [
                    'It has security vulnerabilities',
                    'It\'s too short',
                    'It\'s 150 lines long and hard to maintain',
                    'It doesn\'t work correctly',
                ],
                answer: 'It\'s 150 lines long and hard to maintain',
            },
            {
                question: 'What performance issue does Sarah identify?',
                type: 'multiple-choice',
                options: [
                    'The code uses too much memory',
                    'A database query runs inside a loop',
                    'The function is too slow',
                    'The code doesn\'t scale',
                ],
                answer: 'A database query runs inside a loop',
            },
            {
                question: 'How does Marcus feel at the end of the code review?',
                type: 'multiple-choice',
                options: [
                    'Frustrated and defensive',
                    'Confused about what to do',
                    'Motivated to make improvements',
                    'Disappointed in his work',
                ],
                answer: 'Motivated to make improvements',
            },
        ],
        discussion: [
            'Have you ever participated in a code review? Describe your experience.',
            'What do you think makes a code review constructive rather than critical?',
            'Why is it important to consider edge cases when writing code?',
            'How would you feel if someone suggested refactoring your code? How would you respond?',
        ],
        grammar: {
            title: 'Present Perfect for Discussing Code Changes',
            explanation: 'We use the Present Perfect tense (have/has + past participle) to talk about actions taken in code development when the exact time is not important, or when the action has a connection to the present.',
            examples: [
                'I\'ve reviewed your implementation. (Review completed, feedback ready)',
                'We\'ve optimized the database queries. (Optimization done, code improved)',
                'Marcus has submitted the pull request. (Pull request is now available)',
                'Have you tested for edge cases? (Question about testing completion)',
                'She hasn\'t added error handling yet. (Error handling still missing)',
            ],
        },
        sentenceFrames: [
            {
                frame: 'I\'ve reviewed [code/feature] and [positive feedback].',
                example: 'I\'ve reviewed the authentication module and it looks very secure.',
            },
            {
                frame: 'We should refactor [code element] because [reason].',
                example: 'We should refactor this class because it has too many responsibilities.',
            },
            {
                frame: 'Could we optimize [code element] by [solution]?',
                example: 'Could we optimize this search function by adding an index to the database?',
            },
            {
                frame: 'I noticed [issue]. We could improve this by [suggestion].',
                example: 'I noticed the error messages are unclear. We could improve this by adding more descriptive text.',
            },
        ],
    },
};

// Placeholder data for other professions (to be completed)
export const nursesData: ProfessionData = {
    slug: 'nurses',
    title: 'ESL Lessons for Nurses',
    profession: 'Nurses',
    metaTitle: 'ESL Lessons for Nurses | Healthcare English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for nurses. Master patient handoffs, medical documentation & team communication. Native British coach.',
    h1: 'Professional English Lessons for Nurses',
    targetKeyword: 'ESL lessons for nurses',
    heroSubtitle: 'Communicate effectively with patients, colleagues, and healthcare teams',
    benefits: [
        'Improve patient communication and care quality',
        'Participate confidently in medical team discussions',
        'Document accurately in English medical records',
        'Advance your nursing career internationally',
    ],
    commonChallenges: [
        'Understanding patients with different accents',
        'Explaining medical conditions in simple terms',
        'Participating in team handoffs and rounds',
        'Writing nursing documentation accurately',
    ],
    curriculum: [
        {
            phase: 1,
            title: "Patient Admission & History Taking",
            subtitle: "Lessons 1-5",
            description: "Master the essential language for admitting new patients and gathering accurate medical histories.",
            lessons: [
                { title: "The Admission Interview", vocabulary: ["Admission", "History", "Complaint", "Allergy", "Next of kin"] },
                { title: "Pain Assessment", vocabulary: ["Severity", "Radiate", "Throbbing", "Sharp", "Dull"] },
                { title: "Taking Vital Signs", vocabulary: ["Blood pressure", "Pulse", "Saturation", "Temperature", "Stable"] },
                { title: "Medication Reconciliation", vocabulary: ["Prescription", "Dosage", "Generic", "Interaction", "Adherence"] },
                { title: "Explaining Hospital Routine", vocabulary: ["Rounds", "Visiting hours", "Call bell", "Procedure", "Consent"] }
            ]
        },
        {
            phase: 2,
            title: "Daily Care & Routine Procedures",
            subtitle: "Lessons 6-10",
            description: "Communicate clearly during daily nursing tasks and routine medical procedures.",
            lessons: [
                { title: "Administering Medication", vocabulary: ["Route", "Intravenous", "Subcutaneous", "Side effect", "Verify"] },
                { title: "Wound Care & Dressing Changes", vocabulary: ["Sterile", "Infection", "Drainage", "Healing", "Suture"] },
                { title: "Assisting with Hygiene", vocabulary: ["Mobility", "Assistance", "Cleanse", "Comfort", "Dignity"] },
                { title: "Pre-operative Preparation", vocabulary: ["NPO", "Pre-op", "Anesthesia", "Checklist", "Fasting"] },
                { title: "Discharge Planning", vocabulary: ["Instruction", "Follow-up", "Referral", "Equipment", "Support"] }
            ]
        },
        {
            phase: 3,
            title: "Medical Terminology & Documentation",
            subtitle: "Lessons 11-15",
            description: "Use professional medical terminology correctly in written and verbal communication.",
            lessons: [
                { title: "Common Medical Abbreviations", vocabulary: ["NPO", "PRN", "QD", "STAT", "BP"] },
                { title: "Charting & Progress Notes", vocabulary: ["Subjective", "Objective", "Assessment", "Plan", "Observation"] },
                { title: "Giving Handovers (SBAR)", vocabulary: ["Situation", "Background", "Assessment", "Recommendation", "Handover"] },
                { title: "Interpreting Lab Results", vocabulary: ["Elevated", "Normal range", "Critical", "Specimen", "Analysis"] },
                { title: "Incident Reporting", vocabulary: ["Incident", "Details", "Witness", "Outcome", "Prevention"] }
            ]
        },
        {
            phase: 4,
            title: "Urgent Care & Emergency Response",
            subtitle: "Lessons 16-20",
            description: "Communicate effectively and calmly during urgent situations and medical emergencies.",
            lessons: [
                { title: "Recognizing Deterioration", vocabulary: ["Deteriorate", "Response", "Pallor", "Diaphoretic", "Unresponsive"] },
                { title: "Emergency Call Protocols", vocabulary: ["Code Blue", "Crash cart", "Defibrillator", "Compressions", "Airway"] },
                { title: "Triage in Overview", vocabulary: ["Priority", "Triage", "Urgent", "Non-urgent", "Assessment"] },
                { title: "Post-Operative Complications", vocabulary: ["Hemorrhage", "Infection", "Thrombosis", "Embolism", "Shock"] },
                { title: "Managing Aggressive Behavior", vocabulary: ["De-escalate", "Safety", "Security", "Calm", "Boundaries"] }
            ]
        },
        {
            phase: 5,
            title: "Patient Advocacy & Emotional Support",
            subtitle: "Lessons 21-25",
            description: "Provide holistic care by addressing patients' emotional needs and advocating for their rights.",
            lessons: [
                { title: "Comforting Distressed Patients", vocabulary: ["Reassure", "Validating", "Empathetic", "Supportive", "Listen"] },
                { title: "Breaking Bad News", vocabulary: ["Compassion", "Direct", "Privacy", "Support", "Questions"] },
                { title: "Family Communication", vocabulary: ["Update", "Concerns", "Explanation", "Advocate", "Involvement"] },
                { title: "Cultural Sensitivity in Care", vocabulary: ["Culture", "Beliefs", "Respect", "Dietary", "Practices"] },
                { title: "End-of-Life Care", vocabulary: ["Palliative", "Comfort", "Dignity", "Family", "Support"] }
            ]
        }
    ],
    firstLesson: {
        title: "Patient Admission Assessment",
        vocabulary: [
            {
                word: "Triage",
                partOfSpeech: "noun/verb",
                definition: "The process of determining the priority of patients' treatments based on the severity of their condition.",
                example: "The nurse triaged the patients as they arrived in the emergency room.",
                usageNote: "Common in ER settings."
            },
            {
                word: "Vital signs",
                partOfSpeech: "noun phrase",
                definition: "Clinical measurements, specifically pulse rate, temperature, respiration rate, and blood pressure, that indicate the state of a patient's essential body functions.",
                example: "Before calling the doctor, please retake the patient's vital signs.",
                usageNote: "Often abbreviated as 'vitals'."
            },
            {
                word: "Complaint",
                partOfSpeech: "noun",
                definition: "A statement that a situation is unsatisfactory or unacceptable; in medicine, the patient's symptom or reason for visiting.",
                example: "The patient's chief complaint was chest pain radiating to the left arm.",
                usageNote: "Usually referred to as 'Chief Complaint' (CC)."
            },
            {
                word: "History",
                partOfSpeech: "noun",
                definition: "The record of past events or experiences; in medicine, the patient's past medical conditions and treatments.",
                example: "Does the patient have a history of hypertension?",
                usageNote: "Includes medical, surgical, and social history."
            },
            {
                word: "Acute",
                partOfSpeech: "adjective",
                definition: "Present or experienced to a severe or intense degree; describing a disease of short duration but typically severe.",
                example: "He was admitted with acute abdominal pain.",
                usageNote: "Opposite of 'chronic'."
            },
            {
                word: "Chronic",
                partOfSpeech: "adjective",
                definition: "Persisting for a long time or constantly recurring.",
                example: "She suffers from chronic bronchitis.",
                usageNote: "Opposite of 'acute'."
            },
            {
                word: "Stabilize",
                partOfSpeech: "verb",
                definition: "To make or become unlikely to change, fail, or decline.",
                example: "We need to stabilize his blood pressure before moving him to the ward.",
                usageNote: "Critical step in emergency care."
            },
            {
                word: "Symptom",
                partOfSpeech: "noun",
                definition: "A physical or mental feature which is regarded as indicating a condition of disease.",
                example: "Shortness of breath is a common symptom of asthma.",
                usageNote: "Subjective evidence reported by the patient."
            },
            {
                word: "Allergy",
                partOfSpeech: "noun",
                definition: "A damaging immune response by the body to a substance to which it has become hypersensitive.",
                example: "Please check if the patient has a penicillin allergy.",
                usageNote: "Always check 'NKDA' (No Known Drug Allergies)."
            },
            {
                word: "Next of kin",
                partOfSpeech: "noun phrase",
                definition: "A person's closest living relative or relatives.",
                example: "We need to contact the patient's next of kin regarding the surgery.",
                usageNote: "Important for consent and emergency contact."
            }
        ],
        reading: {
            title: "A Busy Night in the ER",
            content: `It was 2:00 AM on a Saturday, and the Emergency Room at City General was bustling. Charge Nurse Elena was managing the triage desk when a 55-year-old male, Mr. Henderson, arrived complaining of **acute** chest pain.

"Sir, can you describe the pain for me?" Elena asked calmly but efficiently.

"It feels heavy, like an elephant sits on my chest," Mr. Henderson gasped, clutching his chest. He was pale and sweating profusely.

Elena immediately recognized these as potential cardiac **symptoms**. She called for a porter. "We need to get you into a bay immediately to **stabilize** you and check your **vital signs**."

Once in the bay, Nurse Mark took over. "Mr. Henderson, do you have any **history** of heart problems?" he asked while attaching the ECG leads.

"No, never. But I have high blood pressure," the patient replied. "Is it a heart attack?"

"We're checking that right now," Mark reassured him. "Do you have any **allergies** to medication?"

"Just aspirin," Mr. Henderson noted.

Recalling this information is crucial. Mark documented the **complaint** and the allergy clearly in the notes. "Dr. Chen is coming to see you now. We're going to take good care of you."

The quick teamwork and clear communication helped ensure Mr. Henderson received life-saving treatment within minutes of his **admission**.`
        },
        comprehension: [
            {
                question: "What was Mr. Henderson's chief complaint?",
                options: ["A broken leg", "Acute chest pain", "Chronic headache", "Stomach ache"],
                answer: "Acute chest pain",
                type: "multiple-choice"
            },
            {
                question: "Why did Nurse Elena call for a porter immediately?",
                options: ["She was tired", "The patient was rude", "She recognized potential cardiac symptoms", "Shift change was coming"],
                answer: "She recognized potential cardiac symptoms",
                type: "multiple-choice"
            },
            {
                question: "What medication is Mr. Henderson allergic to?",
                options: ["Penicillin", "Ibuprofen", "Aspirin", "None"],
                answer: "Aspirin",
                type: "multiple-choice"
            },
            {
                question: "What does 'stabilize' mean in this context?",
                options: ["To make the patient exercise", "To make the patient unlikely to decline", "To discharge the patient", "To give a speech"],
                answer: "To make the patient unlikely to decline",
                type: "multiple-choice"
            }
        ],
        discussion: [
            "What are the most critical questions to ask during a patient admission?",
            "How do you handle a patient who is panic-stricken or difficult to communicate with?",
            "Why is the distinction between 'acute' and 'chronic' important in triage?",
            "Describe a time you had to work quickly as a team during an emergency."
        ],
        grammar: {
            title: "Present Continuous vs. Present Simple in Assessment",
            explanation: "We use Present Continuous to ask about what is happening RIGHT NOW (current symptoms) and Present Simple to ask about FACTS (medical history).",
            examples: [
                "Continuous (Now): Are you feeling any pain right now?",
                "Simple (Fact): Do you smoke?",
                "Continuous (Now): Is the pain moving to your arm?",
                "Simple (Fact): Do you have diabetes?"
            ]
        },
        sentenceFrames: [
            {
                frame: "Can you describe [symptom]?",
                example: "Can you describe the pain? Is it sharp or dull?"
            },
            {
                frame: "Have you ever experienced [condition] before?",
                example: "Have you ever experienced specialized chest pain before?"
            },
            {
                frame: "I'm going to [action] now, which might feel [sensation].",
                example: "I'm going to take your blood pressure now, which might feel a bit tight."
            },
            {
                frame: "On a scale of 1 to 10, how would you rate [symptom]?",
                example: "On a scale of 1 to 10, how would you rate your pain?"
            }
        ]
    },
};

export const financeData: ProfessionData = {
    slug: 'finance-professionals',
    title: 'ESL Lessons for Finance Professionals',
    profession: 'Finance Professionals',
    metaTitle: 'ESL Lessons for Finance Professionals | Business English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for finance professionals. Master client presentations, market analysis & deal negotiations. Native British coach.',
    h1: 'Professional English Lessons for Finance Professionals',
    targetKeyword: 'ESL lessons for finance professionals',
    heroSubtitle: 'Master financial terminology, client advisory, and market analysis for global finance roles',
    benefits: [
        'Present complex financial data with clarity',
        'Lead high-stakes client meetings confidently',
        'Navigate international regulatory discussions',
        'Write persuasive investment memorandums',
    ],
    commonChallenges: [
        'Explaining market volatility to anxious clients',
        'Nuances in earnings call Q&A sessions',
        'Writing concise executive summaries',
        'Diplomatically managing compliance pushback',
    ],
    curriculum: [
        {
            phase: 1,
            title: 'Financial Reporting & Analysis',
            subtitle: 'Lessons 1-5',
            description: 'Master the language of financial statements, performance reviews, and data visualization.',
            lessons: [
                { title: 'Presenting Quarterly Results', vocabulary: ['Year-over-year', 'EBITDA', 'Margin expansion', 'Guidance', 'Headwinds'] },
                { title: 'Balance Sheet Analysis', vocabulary: ['Liquidity', 'Solvency', 'Asset allocation', 'Liability', 'Equity'] },
                { title: 'Cash Flow Discussions', vocabulary: ['Burn rate', 'Operating cash flow', 'CapEx', 'Free cash flow', 'Working capital'] },
                { title: 'Variance Analysis', vocabulary: ['Budget vs Actual', 'Deviation', 'Forecast', 'Run rate', 'Adjustment'] },
                { title: 'Auditing & Compliance', vocabulary: ['Internal controls', 'Discrepancy', 'Regulatory', 'Materiality', 'Audit trail'] },
            ],
        },
        {
            phase: 2,
            title: 'Client Advisory & Wealth Management',
            subtitle: 'Lessons 6-10',
            description: 'Develop trust-building communication skills for managing client relationships and portfolios.',
            lessons: [
                { title: 'Onboarding High-Net-Worth Clients', vocabulary: ['Risk tolerance', 'Investment horizon', 'Asset class', 'Diversification', 'Discovery'] },
                { title: 'Explaining Market Volatility', vocabulary: ['Correction', 'Bear market', 'Resilience', 'Fundamentals', 'Panic selling'] },
                { title: 'Portfolio Performance Reviews', vocabulary: ['Benchmark', 'Alpha', 'Underperformance', 'Rebalancing', 'Attribution'] },
                { title: 'Estate & Tax Planning Basics', vocabulary: ['Inheritance', 'Tax-efficient', 'Trust', 'Beneficiary', 'Liability'] },
                { title: 'Managing Client Expectations', vocabulary: ['Realistic', 'Projection', 'Conservative', 'Scenario', 'Outcome'] },
            ],
        },
        {
            phase: 3,
            title: 'Investment Banking & Markets',
            subtitle: 'Lessons 11-15',
            description: 'Navigate the fast-paced world of deals, mergers, and capital markets.',
            lessons: [
                { title: 'Pitching M&A Deals', vocabulary: ['Synergy', 'Acquisition', 'Valuation', 'Due diligence', 'Integration'] },
                { title: 'IPO Roadshows', vocabulary: ['Prospectus', 'Book building', 'Underwriter', 'Roadshow', 'Oversubscribed'] },
                { title: 'Private Equity Structures', vocabulary: ['LBO', 'General Partner', 'Capital call', 'Carry', 'Exit strategy'] },
                { title: 'Venture Capital Term Sheets', vocabulary: ['Pre-money valuation', 'Liquidation preference', 'Dilution', 'Vesting', 'Board seat'] },
                { title: 'Market Sentiment Analysis', vocabulary: ['Bullish', 'Bearish', 'Momentum', 'Indicator', 'Trend reversal'] },
            ],
        },
        {
            phase: 4,
            title: 'Corporate Finance & Strategy',
            subtitle: 'Lessons 16-20',
            description: 'Lead strategic financial conversations within organizations.',
            lessons: [
                { title: 'Budgeting Negotiations', vocabulary: ['Allocation', 'Cost center', 'ROI', 'Cutback', 'Approval'] },
                { title: 'Capital Allocation Strategy', vocabulary: ['Dividend', 'Share buyback', 'Reinvestment', 'Debt repayment', 'Yield'] },
                { title: 'Cost Reduction Initiatives', vocabulary: ['Efficiency', 'Streamline', 'Redundancy', 'Outsourcing', 'Optimization'] },
                { title: 'Forecasting Revenue', vocabulary: ['Pipeline', 'Conversion rate', 'Seasonality', 'Recurring revenue', 'Churn'] },
                { title: 'Board Meeting Presentations', vocabulary: ['Strategic initiative', 'Key takeaways', 'Actionable', 'Insight', 'Governance'] },
            ],
        },
        {
            phase: 5,
            title: 'Leadership & Ethics in Finance',
            subtitle: 'Lessons 21-25',
            description: 'Address complex ethical dilemmas and lead financial teams effectively.',
            lessons: [
                { title: 'Ethical Dilemmas', vocabulary: ['Conflict of interest', 'Insider trading', 'Transparency', 'Disclosure', 'Integrity'] },
                { title: 'Regulatory Changes', vocabulary: ['Compliance', 'Legislation', 'Impact analysis', 'Implementation', 'Standard'] },
                { title: 'Leading Finance Teams', vocabulary: ['Mentorship', 'Accountability', 'Delegation', 'Professional development', 'Culture'] },
                { title: 'Crisis Communication', vocabulary: ['Mitigation', 'Stakeholder', 'Reassurance', 'Contingency plan', 'Transparency'] },
                { title: 'The Future of Fintech', vocabulary: ['Blockchain', 'DeFi', 'Automation', 'Disruption', 'Digital wallet'] },
            ],
        },
    ],
    firstLesson: {
        title: 'Mastering Quarterly Financial Presentations',
        vocabulary: [
            {
                word: 'Year-over-year',
                partOfSpeech: 'adjective/adverb',
                definition: 'Comparing the same period in different years to measure growth or change.',
                example: 'Year-over-year (YOY) analysis showed a significant increase in revenue.',
                usageNote: 'Essential for tracking long-term performance trends.',
            },
            {
                word: 'EBITDA',
                partOfSpeech: 'noun',
                definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization; a measure of operating performance.',
                example: 'The company reported a record EBITDA of $2.8 billion for the third quarter.',
                usageNote: 'Widely used to analyze and compare profitability between companies.',
            },
            {
                word: 'Margin expansion',
                partOfSpeech: 'noun',
                definition: 'An increase in profit margins, showing improved profitability and operational efficiency.',
                example: 'Analysts were impressed by the company\'s margin expansion during the last quarter.',
                usageNote: 'A positive indicator of a company\'s financial health.',
            },
            {
                word: 'Guidance',
                partOfSpeech: 'noun',
                definition: 'Official predictions or forecasts that companies provide about future financial performance.',
                example: 'The management team expressed confidence in their guidance despite ongoing market volatility.',
                usageNote: 'Crucial for managing investor expectations.',
            },
            {
                word: 'Headwinds',
                partOfSpeech: 'noun',
                definition: 'Challenges or negative factors that make it difficult to achieve business goals.',
                example: 'Management identified several potential headwinds that could impact future performance, including supply chain disruptions.',
                usageNote: 'Used to explain slower growth or missed targets.',
            },
        ],
        reading: {
            title: 'TechCorp\'s Q3 Earnings Call Highlights',
            content: `TechCorp's third quarter results demonstrated strong year-over-year growth despite challenging market conditions. The company reported revenue increases of 15% compared to the same period last year, while maintaining consistent profitability across all business segments. Management emphasized their ability to navigate current economic uncertainties through strategic cost management and operational efficiency improvements.

The company's EBITDA reached $2.8 billion, representing a significant improvement from previous quarters and exceeding analyst expectations. This strong EBITDA performance reflected the company's focus on high-margin products and services, particularly in their cloud computing division. Financial analysts praised the consistent earnings quality and sustainable business model that generated these impressive results.

TechCorp achieved notable margin expansion during the quarter, with gross margins improving by 3.2 percentage points year-over-year. This margin expansion resulted from successful cost optimization initiatives and favorable product mix changes toward higher-value offerings. The company's ability to maintain margin expansion while investing in research and development impressed industry observers and institutional investors.

Looking forward, TechCorp provided updated guidance for the fourth quarter, projecting revenue growth between 12-16% year-over-year. The management team expressed confidence in their guidance despite ongoing market volatility, citing strong customer demand and robust order backlog. However, they acknowledged that achieving this guidance would require continued execution excellence and favorable market conditions.

Management identified several potential headwinds that could impact future performance, including supply chain disruptions and increased competition in key markets. These headwinds represent significant challenges that require careful monitoring and strategic responses. Despite these concerns, the leadership team remains optimistic about long-term growth prospects and their ability to overcome current headwinds through innovation and market leadership.`
        },
        comprehension: [
            {
                question: 'What does "EBITDA" measure in financial reporting?',
                type: 'multiple-choice',
                options: [
                    'Total revenue growth',
                    'Earnings before interest, taxes, depreciation, and amortization',
                    'Employee bonuses',
                    'Net income only'
                ],
                answer: 'Earnings before interest, taxes, depreciation, and amortization'
            },
            {
                question: 'In which situation would a company experience "headwinds"?',
                type: 'multiple-choice',
                options: [
                    'When facing increased competition and rising costs',
                    'When entering a new market',
                    'When launching a successful product',
                    'When receiving a tax break'
                ],
                answer: 'When facing increased competition and rising costs'
            },
            {
                question: 'What does "margin expansion" indicate about a company\'s performance?',
                type: 'multiple-choice',
                options: [
                    'The company is expanding its office space',
                    'Profit margins are increasing, showing improved efficiency',
                    'The company is hiring more people',
                    'Revenue is decreasing'
                ],
                answer: 'Profit margins are increasing, showing improved efficiency'
            },
            {
                question: 'Which sentence uses "guidance" correctly?',
                type: 'multiple-choice',
                options: [
                    'The CEO asked for guidance to the restroom.',
                    'Management provided guidance for next quarter\'s expected revenue.',
                    'The guidance of the missile was precise.',
                    'She offered guidance to her younger sister.'
                ],
                answer: 'Management provided guidance for next quarter\'s expected revenue.'
            },
            {
                question: 'What does "year-over-year" comparison help businesses understand?',
                type: 'multiple-choice',
                options: [
                    'Daily stock price fluctuations',
                    'Employee satisfaction levels',
                    'Growth or changes compared to the same period in the previous year',
                    'Future market trends'
                ],
                answer: 'Growth or changes compared to the same period in the previous year'
            }
        ],
        discussion: [
            'How important is it for companies to be completely honest about challenges during quarterly presentations, even if it might negatively affect their stock price?',
            'Which industry do you think faces the most difficulty in providing accurate quarterly guidance, and why?',
            'What do you think is the most effective strategy for achieving sustainable margin expansion without sacrificing long-term competitiveness?',
            'How can companies best prepare for unexpected economic headwinds while still pursuing aggressive growth targets?',
            'When might year-over-year comparisons be misleading, and how should companies address this in their quarterly presentations?'
        ],
        grammar: {
            title: 'Reporting Verbs for Financial Results',
            explanation: 'When discussing financial results, we use specific verbs to convey precision and authority. Notice how the text uses verbs like "demonstrated," "reported," "emphasized," "achieved," and "acknowledged."',
            examples: [
                'The company reported revenue increases of 15%.',
                'Management emphasized their ability to navigate uncertainties.',
                'TechCorp achieved notable margin expansion.',
                'They acknowledged that achieving this guidance would require execution.'
            ]
        },
        sentenceFrames: [
            {
                frame: 'The company reported [metric] of [value], representing [change].',
                example: 'The company reported EBITDA of $2.8 billion, representing a significant improvement.'
            },
            {
                frame: 'Management emphasized [strategy] to navigate [challenge].',
                example: 'Management emphasized cost management to navigate economic uncertainties.'
            },
            {
                frame: 'Despite [headwind], we remain optimistic about [outlook].',
                example: 'Despite supply chain disruptions, we remain optimistic about long-term growth.'
            },
            {
                frame: 'We are projecting [metric] growth between [range] year-over-year.',
                example: 'We are projecting revenue growth between 12-16% year-over-year.'
            }
        ]
    }
};

export const businessExecutivesData: ProfessionData = {
    slug: 'business-executives',
    title: 'ESL Lessons for Business Executives',
    profession: 'Business Executives',
    metaTitle: 'ESL Lessons for Business Executives | Executive English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for business executives. Master boardroom presentations, strategy meetings & global leadership. Native British coach.',
    h1: 'Professional English Lessons for Business Executives',
    targetKeyword: 'ESL lessons for business executives',
    heroSubtitle: 'Lead with confidence in boardrooms, strategy sessions, and global business settings',
    benefits: [
        'Lead meetings and presentations with authority',
        'Negotiate deals and partnerships effectively',
        'Manage international teams confidently',
        'Represent your organization at the highest level',
    ],
    commonChallenges: [
        'Leading strategic discussions in English',
        'Making persuasive presentations to boards',
        'Negotiating complex business deals',
        'Managing multicultural teams effectively',
    ],
    curriculum: [
        {
            phase: 1,
            title: "Strategic Leadership Communication",
            subtitle: "Lessons 1-5",
            description: "Master the art of high-level communication for vision, strategy, and crisis management.",
            lessons: [
                { title: "Vision & Mission Articulation", vocabulary: ["Visionary", "Alignment", "Core values", "Roadmap", "Buy-in"] },
                { title: "Leading Strategy Meetings", vocabulary: ["Agenda", "Facilitation", "Consensus", "Actionable", "SWOT"] },
                { title: "Change Management Communication", vocabulary: ["Transformation", "Resistance", "Stakeholder", "Adoption", "Pivot"] },
                { title: "Crisis Communication & PR", vocabulary: ["Mitigation", "Transparency", "Reputation", "Narrative", "Media"] },
                { title: "Executive Presence & Voice", vocabulary: ["Gravitas", "Intonation", "Pacing", "Authority", "Non-verbal"] }
            ]
        },
        {
            phase: 2,
            title: "Board & Stakeholder Management",
            subtitle: "Lessons 6-10",
            description: "Navigate complex relationships with boards, investors, and key partners.",
            lessons: [
                { title: "Presenting to the Board", vocabulary: ["Governance", "Fiduciary", "Oversight", "Resolution", "Quorum"] },
                { title: "Managing Investor Relations", vocabulary: ["Earnings", "Guidance", "Shareholders", "Analyst", "Volatility"] },
                { title: "Negotiating with Key Stakeholders", vocabulary: ["Leverage", "Concession", "Win-win", "Deadlock", "Terms"] },
                { title: "Handling Difficult Questions", vocabulary: ["Pivot", "Bridge", "Deflect", "Clarify", "Address"] },
                { title: "Networking at High-Level Events", vocabulary: ["Rapport", "Elevator pitch", "Follow-up", "Connection", "Influence"] }
            ]
        },
        {
            phase: 3,
            title: "Global Business Operations",
            subtitle: "Lessons 11-15",
            description: "Lead effectively across borders and manage global operations.",
            lessons: [
                { title: "Cross-Cultural Leadership", vocabulary: ["Nuance", "Etiquette", "Hierarchy", "Directness", "Context"] },
                { title: "Managing Remote Teams", vocabulary: ["Asynchronous", "Collaboration", "Time zone", "Autonomy", "Engagement"] },
                { title: "Mergers & Acquisitions", vocabulary: ["Due diligence", "Synergy", "Integration", "Valuation", "Acquisition"] },
                { title: "Supply Chain Strategy", vocabulary: ["Logistics", "Procurement", "Inventory", "Lead time", "Resilience"] },
                { title: "Legal & Compliance Oversight", vocabulary: ["Regulation", "Liability", "Compliance", "Audit", "Risk"] }
            ]
        },
        {
            phase: 4,
            title: "Maximum Financial Impact",
            subtitle: "Lessons 16-20",
            description: "Communicate financial data with clarity and impact.",
            lessons: [
                { title: "Presenting Quarterly Results", vocabulary: ["Revenue", "Margin", "EBITDA", "Year-over-year", "Forecast"] },
                { title: "Budgeting & Forecasting Discussions", vocabulary: ["Allocation", "OPEX", "CAPEX", "Variance", "Projection"] },
                { title: "Investment Pitching", vocabulary: ["ROI", "Valuation", "Exit strategy", "Scalability", "Traction"] },
                { title: "Data-Driven Decision Making", vocabulary: ["Analytics", "Metrics", "Insight", "Correlation", "Bias"] },
                { title: "Economic Trends & Market Analysis", vocabulary: ["Inflation", "Recession", "Interest rates", "GDP", "Market share"] }
            ]
        },
        {
            phase: 5,
            title: "Advanced Soft Skills",
            subtitle: "Lessons 21-25",
            description: "Refine your leadership style with advanced interpersonal skills.",
            lessons: [
                { title: "Conflict Resolution & Mediation", vocabulary: ["Mediation", "Empathy", "Perspective", "Resolution", "De-escalate"] },
                { title: "Mentoring Future Leaders", vocabulary: ["Coaching", "Potential", "Development", "Succession", "Feedback"] },
                { title: "Giving High-Stakes Feedback", vocabulary: ["Constructive", "Performance", "Review", "Objective", "Growth"] },
                { title: "Emotional Intelligence in Leadership", vocabulary: ["Self-awareness", "Empathy", "Regulation", "Social skills", "Motivation"] },
                { title: "Legacy & Succession Planning", vocabulary: ["Tenure", "Transition", "Legacy", "Handover", "Continuity"] }
            ]
        }
    ],
    firstLesson: {
        title: "Crafting Compelling Vision & Mission Statements",
        vocabulary: [
            {
                word: "articulate",
                partOfSpeech: "verb",
                definition: "To express ideas clearly and effectively in words.",
                example: "The CEO could articulate the company's vision in just two sentences.",
                usageNote: "Used in formal and professional contexts when emphasizing clear, precise communication."
            },
            {
                word: "encompass",
                partOfSpeech: "verb",
                definition: "To include or contain all parts of something completely.",
                example: "Our mission statement encompasses our commitment to sustainability and innovation.",
                usageNote: "Similar to 'include' or 'contain', but implies comprehensive coverage."
            },
            {
                word: "aspiration",
                partOfSpeech: "noun",
                definition: "A strong desire or ambition to achieve something important.",
                example: "The company's aspiration is to become the industry leader in renewable energy.",
                usageNote: "Often used when discussing long-term goals or vision."
            },
            {
                word: "stakeholder",
                partOfSpeech: "noun",
                definition: "A person or group with an interest in a business or organization.",
                example: "The company consulted all stakeholders before making the major policy change.",
                usageNote: "Common in business contexts; includes employees, investors, customers, etc."
            },
            {
                word: "alignment",
                partOfSpeech: "noun",
                definition: "The state of things being arranged in the correct position or agreement.",
                example: "The team achieved perfect alignment between their goals and company objectives.",
                usageNote: "Refers to agreement or coordination within an organization."
            }
        ],
        reading: {
            title: "The Power of Purpose-Driven Leadership",
            content: `Successful organizations must articulate their vision and mission with remarkable clarity and precision. When leaders can effectively articulate their company's purpose, they create a powerful foundation for decision-making and growth. This ability to articulate complex ideas simply helps employees understand their role in the bigger picture.

A comprehensive mission statement should encompass all aspects of the organization's core activities and values. The best mission statements encompass not only what the company does, but also how it serves its community. Companies that encompass multiple stakeholder interests in their mission often achieve greater long-term success.

Every vision statement represents the organization's highest aspiration for its future impact and achievements. This aspiration drives innovation and motivates teams to exceed their current limitations. When employees share this aspiration, they become more engaged and committed to excellence.

Modern businesses recognize that every stakeholder plays a crucial role in organizational success and sustainability. Each stakeholder brings unique perspectives and requirements that must be carefully considered. Effective leaders regularly communicate with each stakeholder group to maintain strong relationships.

Strategic alignment between vision, mission, and daily operations ensures consistent progress toward organizational goals. This alignment helps prevent conflicting priorities and wasted resources throughout the organization. Companies with strong alignment typically demonstrate superior performance and employee satisfaction.`
        },
        comprehension: [
            {
                question: "What does 'articulate' mean in this context?",
                options: ["To think about problems", "To express ideas clearly and effectively", "To discuss with others", "To write a report"],
                answer: "To express ideas clearly and effectively",
                type: "multiple-choice"
            },
            {
                question: "What should a comprehensive mission statement encompass?",
                options: ["Only financial goals", "All aspects of core activities and values", "Employee salaries", "Competitor analysis"],
                answer: "All aspects of core activities and values",
                type: "multiple-choice"
            },
            {
                question: "According to the text, what drives innovation and motivates teams?",
                options: ["High salaries", "Strict rules", "The organization's highest aspiration", "Quarterly reports"],
                answer: "The organization's highest aspiration",
                type: "multiple-choice"
            },
            {
                question: "Why is strategic alignment important?",
                options: ["It ensures consistent progress toward goals", "It saves time in meetings", "It reduces the need for managers", "It increases product prices"],
                answer: "It ensures consistent progress toward goals",
                type: "multiple-choice"
            }
        ],
        discussion: [
            "How important do you think vision and mission statements are for business success, and what makes them effective?",
            "What makes a company's purpose clear and inspiring in your industry?",
            "How do successful businesses communicate their goals to different stakeholders?",
            "What role does leadership play in setting and maintaining organizational direction?",
            "How can clear goals motivate employees and customers?"
        ],
        grammar: {
            title: "Advanced Future Forms & Probability",
            explanation: "In executive strategy, we often discuss future possibilities with varying degrees of certainty. We use specific modals and phrases to convey this nuance.",
            examples: [
                "Use 'is bound to/is certain to' for 99% certainty: Given our current growth, we are bound to exceed our Q4 targets.",
                "Use 'is likely to/is expected to' for 75% probability: The merger is expected to close by the end of the fiscal year.",
                "Use 'might/could potentially' for 50% possibility: New regulations could potentially impact our supply chain in Asia.",
                "Use 'is projected to/is forecast to' for data-based predictions: Revenue is projected to grow by 12% year-over-year."
            ]
        },
        sentenceFrames: [
            {
                frame: "Our company wants to [action] because [reason].",
                example: "Our company wants to help customers because we care about their success."
            },
            {
                frame: "Our organization aims to [action] by [method] in order to [goal].",
                example: "Our organization aims to reduce waste by implementing recycling programs in order to protect the environment."
            },
            {
                frame: "We aspire to [goal] through [strategy], which will enable us to [outcome] while ensuring [condition].",
                example: "We aspire to become the industry leader through innovative technology solutions, which will enable us to serve diverse markets while ensuring sustainable growth."
            }
        ]
    },
};

export const engineersData: ProfessionData = {
    slug: 'engineers',
    title: 'ESL Lessons for Engineers',
    profession: 'Engineers',
    metaTitle: 'ESL Lessons for Engineers | Technical English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for engineers. Master project meetings, technical specifications & cross-team collaboration. Native British coach.',
    h1: 'Professional English Lessons for Engineers',
    targetKeyword: 'ESL lessons for engineers',
    heroSubtitle: 'Communicate technical concepts, lead projects, and collaborate globally',
    benefits: [
        'Present technical designs and specifications clearly',
        'Lead engineering project meetings',
        'Write professional technical documentation',
        'Collaborate with international engineering teams',
    ],
    commonChallenges: [
        'Explaining complex technical concepts simply',
        'Participating in project planning meetings',
        'Writing technical specifications and reports',
        'Presenting design proposals to stakeholders',
    ],
    curriculum: [
        {
            phase: 1,
            title: "Project Planning & Requirements",
            subtitle: "Lessons 1-5",
            description: "Master the language for discussing project scope, timelines, and technical requirements.",
            lessons: [
                { title: "Project Kickoff Meetings", vocabulary: ["Scope", "Deliverable", "Milestone", "Stakeholder", "Feasibility"] },
                { title: "Gathering Technical Requirements", vocabulary: ["Specification", "Constraint", "Tolerance", "Parameter", "Criterion"] },
                { title: "Estimating Time & Resources", vocabulary: ["Lead time", "Buffer", "Allocation", "Bottleneck", "Overhead"] },
                { title: "Risk Assessment Discussions", vocabulary: ["Mitigation", "Contingency", "Probability", "Impact", "Exposure"] },
                { title: "Change Request Management", vocabulary: ["Amendment", "Revision", "Impact analysis", "Approval", "Deviation"] }
            ]
        },
        {
            phase: 2,
            title: "Technical Design & Documentation",
            subtitle: "Lessons 6-10",
            description: "Communicate design decisions and produce clear technical documentation.",
            lessons: [
                { title: "Presenting Design Proposals", vocabulary: ["Schematic", "Blueprint", "Prototype", "Trade-off", "Iteration"] },
                { title: "Writing Technical Specifications", vocabulary: ["Dimension", "Material", "Load", "Capacity", "Standard"] },
                { title: "Reviewing Drawings & Diagrams", vocabulary: ["Scale", "Section view", "Annotation", "Legend", "Tolerance"] },
                { title: "Documenting Assumptions", vocabulary: ["Assumption", "Baseline", "Boundary condition", "Scenario", "Validation"] },
                { title: "Safety & Compliance Reports", vocabulary: ["Regulation", "Certification", "Audit", "Non-compliance", "Corrective action"] }
            ]
        },
        {
            phase: 3,
            title: "Collaboration & Team Communication",
            subtitle: "Lessons 11-15",
            description: "Work effectively with cross-functional teams and external partners.",
            lessons: [
                { title: "Daily Stand-ups & Progress Updates", vocabulary: ["Blocker", "Update", "Status", "Dependency", "Priority"] },
                { title: "Cross-Functional Collaboration", vocabulary: ["Interface", "Handover", "Integration", "Alignment", "Coordination"] },
                { title: "Vendor & Supplier Communication", vocabulary: ["Quotation", "Lead time", "Procurement", "Specification sheet", "Batch"] },
                { title: "Client Technical Meetings", vocabulary: ["Clarification", "Feedback", "Requirement", "Demonstration", "Acceptance"] },
                { title: "Remote Team Coordination", vocabulary: ["Timezone", "Async", "Collaboration tool", "Documentation", "Follow-up"] }
            ]
        },
        {
            phase: 4,
            title: "Problem Solving & Troubleshooting",
            subtitle: "Lessons 16-20",
            description: "Discuss technical problems, root causes, and solutions effectively.",
            lessons: [
                { title: "Root Cause Analysis", vocabulary: ["Cause", "Effect", "Fishbone", "5 Whys", "Failure mode"] },
                { title: "Troubleshooting Procedures", vocabulary: ["Diagnose", "Isolate", "Replicate", "Workaround", "Resolution"] },
                { title: "Reporting Technical Issues", vocabulary: ["Severity", "Reproducibility", "Log", "Symptom", "Escalation"] },
                { title: "Proposing Solutions", vocabulary: ["Recommendation", "Alternative", "Cost-benefit", "Implementation", "Validation"] },
                { title: "Post-Incident Reviews", vocabulary: ["Lessons learned", "Timeline", "Corrective action", "Prevention", "Documentation"] }
            ]
        },
        {
            phase: 5,
            title: "Presentations & Leadership",
            subtitle: "Lessons 21-25",
            description: "Present technical work confidently and lead engineering initiatives.",
            lessons: [
                { title: "Technical Presentations", vocabulary: ["Visual aid", "Executive summary", "Key takeaway", "Data visualization", "Q&A"] },
                { title: "Defending Design Decisions", vocabulary: ["Rationale", "Justification", "Evidence", "Trade-off", "Constraint"] },
                { title: "Leading Technical Reviews", vocabulary: ["Agenda", "Feedback", "Action item", "Consensus", "Follow-up"] },
                { title: "Mentoring Junior Engineers", vocabulary: ["Guidance", "Best practice", "Code review", "Knowledge transfer", "Onboarding"] },
                { title: "Innovation & Continuous Improvement", vocabulary: ["Optimization", "Efficiency", "Benchmark", "Prototype", "Pilot"] }
            ]
        }
    ],
    firstLesson: {
        title: "Project Planning Discussions",
        vocabulary: [
            {
                word: "Scope",
                partOfSpeech: "noun",
                definition: "The extent of the area or subject matter that something deals with; in projects, the defined boundaries of work.",
                example: "We need to define the project scope before we can estimate the timeline.",
                usageNote: "Often used in phrases like 'scope creep' (uncontrolled changes) or 'out of scope'."
            },
            {
                word: "Deliverable",
                partOfSpeech: "noun",
                definition: "A tangible or intangible product or service produced as a result of a project.",
                example: "The main deliverables for this phase are the design documents and a working prototype.",
                usageNote: "Usually plural. Can be interim (checkpoint) or final."
            },
            {
                word: "Milestone",
                partOfSpeech: "noun",
                definition: "A significant point or event in a project, marking the completion of a major phase.",
                example: "We reached a major milestone when the structural analysis was approved.",
                usageNote: "Used to track progress and often tied to payments or reviews."
            },
            {
                word: "Feasibility",
                partOfSpeech: "noun",
                definition: "The state or degree of being easily or conveniently done; practicality of a proposed plan.",
                example: "We conducted a feasibility study to determine if the project is technically and financially viable.",
                usageNote: "Often used in 'feasibility study' or 'assess feasibility'."
            },
            {
                word: "Constraint",
                partOfSpeech: "noun",
                definition: "A limitation or restriction that affects the execution of a project.",
                example: "Budget and time are our main constraints for this project.",
                usageNote: "Common constraints include time, budget, resources, and regulations."
            },
            {
                word: "Stakeholder",
                partOfSpeech: "noun",
                definition: "A person with an interest or concern in something, especially a business or project.",
                example: "We need to get approval from all key stakeholders before proceeding.",
                usageNote: "Includes clients, managers, team members, and end-users."
            },
            {
                word: "Specification",
                partOfSpeech: "noun",
                definition: "A detailed description of the design and materials used to make something.",
                example: "The client provided detailed specifications for the component dimensions.",
                usageNote: "Often abbreviated as 'spec' or 'specs'."
            },
            {
                word: "Timeline",
                partOfSpeech: "noun",
                definition: "A graphical representation or plan that shows a list of events in chronological order.",
                example: "According to the project timeline, we should complete testing by next month.",
                usageNote: "Closely related to 'schedule' and 'Gantt chart'."
            }
        ],
        reading: {
            title: "The Project Kickoff Meeting",
            content: `It was Monday morning, and the engineering team at BuildTech Solutions gathered in the main conference room for the **kickoff meeting** of a new industrial automation project.

Project Manager, David Chen, opened the meeting. "Good morning, everyone. Today we're officially starting Project Apex. Let me walk you through the **scope** and objectives."

He displayed the project charter on the screen. "Our client needs an automated assembly line for their new electric vehicle battery plant. The main **deliverables** are the system design, a pilot installation, and full documentation."

Senior Engineer Maria Rodriguez raised her hand. "What's the **timeline** we're working with?"

"The client wants the pilot operational in 18 months," David replied. "We've identified four major **milestones**: concept approval in month 3, detailed design by month 8, pilot construction by month 14, and commissioning by month 18."

Junior Engineer James Park looked concerned. "That seems tight. What are our main **constraints**?"

David nodded. "Good question, James. Budget is fixed at $12 million, and we have limited access to the client's facility during production hours. We also need to meet specific safety **specifications** for battery handling."

Maria added, "We should conduct a **feasibility** assessment of the robotic assembly sequence early on. If we discover issues later, it could derail the whole project."

"Excellent point," David agreed. "I'll also schedule regular check-ins with all **stakeholders** to ensure we stay aligned. Any other questions?"

The team discussed technical details for another hour, leaving the meeting with a clear understanding of the challenges ahead and their individual responsibilities.`
        },
        comprehension: [
            {
                question: "What is the main objective of Project Apex?",
                options: ["Build a new office", "Create an automated assembly line for EV batteries", "Hire new engineers", "Conduct market research"],
                answer: "Create an automated assembly line for EV batteries",
                type: "multiple-choice"
            },
            {
                question: "What is the total project timeline?",
                options: ["6 months", "12 months", "18 months", "24 months"],
                answer: "18 months",
                type: "multiple-choice"
            },
            {
                question: "What did Maria suggest doing early in the project?",
                options: ["Hiring more staff", "Conducting a feasibility assessment", "Reducing the budget", "Changing the client"],
                answer: "Conducting a feasibility assessment",
                type: "multiple-choice"
            },
            {
                question: "What is a 'constraint' in project management?",
                options: ["A type of deliverable", "A limitation that affects project execution", "A meeting agenda", "A stakeholder request"],
                answer: "A limitation that affects project execution",
                type: "multiple-choice"
            }
        ],
        discussion: [
            "What information do you think is most important to cover in a project kickoff meeting?",
            "How do you handle situations where the timeline seems too tight for the scope?",
            "Why is it important to identify constraints early in a project?",
            "Describe a time when a project you worked on experienced 'scope creep'. How was it handled?"
        ],
        grammar: {
            title: "Future Tenses for Project Planning",
            explanation: "In project discussions, we use different future forms depending on certainty: 'will' for decisions and predictions, 'going to' for plans already in progress, and Present Continuous for scheduled events.",
            examples: [
                "Decision: We will proceed with Option A based on the cost analysis.",
                "Plan: We are going to conduct the feasibility study next week.",
                "Schedule: The design review is happening on Friday at 2 PM.",
                "Prediction: The testing phase will probably take longer than expected."
            ]
        },
        sentenceFrames: [
            {
                frame: "The main deliverables for this phase are [item 1] and [item 2].",
                example: "The main deliverables for this phase are the CAD models and the structural analysis report."
            },
            {
                frame: "According to the timeline, we should complete [task] by [date].",
                example: "According to the timeline, we should complete the prototype testing by March 15th."
            },
            {
                frame: "Our main constraints are [constraint 1] and [constraint 2].",
                example: "Our main constraints are the limited budget and the strict regulatory requirements."
            },
            {
                frame: "I recommend we conduct a feasibility study on [topic] before [action].",
                example: "I recommend we conduct a feasibility study on the new material before committing to the design."
            }
        ]
    },
};

export const doctorsData: ProfessionData = {
    slug: 'doctors',
    title: 'ESL Lessons for Doctors',
    profession: 'Doctors',
    metaTitle: 'ESL Lessons for Doctors | Medical English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for doctors. Master patient consultations, case presentations & medical conferences. Native British coach.',
    h1: 'Professional English Lessons for Doctors',
    targetKeyword: 'ESL lessons for doctors',
    heroSubtitle: 'Communicate with patients, present cases, and lead medical teams with confidence',
    benefits: [
        'Conduct patient consultations with clarity and empathy',
        'Present cases confidently at rounds and conferences',
        'Write accurate medical reports and referrals',
        'Collaborate effectively in multidisciplinary teams',
    ],
    commonChallenges: [
        'Explaining diagnoses and treatment plans in plain language',
        'Understanding patients with varied accents and literacy levels',
        'Presenting complex cases during grand rounds',
        'Writing referral letters and discharge summaries accurately',
    ],
    curriculum: [
        {
            phase: 1,
            title: 'Patient Consultations',
            subtitle: 'Lessons 1-5',
            description: 'Master the language for gathering histories, explaining diagnoses, and building rapport with patients.',
            lessons: [
                { title: 'History Taking & Chief Complaint', vocabulary: ['Onset', 'Duration', 'Severity', 'Radiating', 'Aggravating factors'] },
                { title: 'Breaking Bad News', vocabulary: ['Prognosis', 'Compassion', 'Staging', 'Palliative', 'Support'] },
                { title: 'Explaining Treatment Options', vocabulary: ['Conservative', 'Intervention', 'Side effect', 'Contraindication', 'Efficacy'] },
                { title: 'Informed Consent Discussions', vocabulary: ['Risk', 'Benefit', 'Alternative', 'Complication', 'Autonomy'] },
                { title: 'Sensitive Topics & Cultural Awareness', vocabulary: ['Disclosure', 'Cultural competence', 'Interpreter', 'Empathy', 'Boundary'] },
            ],
        },
        {
            phase: 2,
            title: 'Clinical Communication',
            subtitle: 'Lessons 6-10',
            description: 'Communicate clearly during ward rounds, handovers, and multidisciplinary team meetings.',
            lessons: [
                { title: 'Ward Round Presentations', vocabulary: ['Impression', 'Differential', 'Findings', 'Management plan', 'Disposition'] },
                { title: 'SBAR Handover Communication', vocabulary: ['Situation', 'Background', 'Assessment', 'Recommendation', 'Escalation'] },
                { title: 'Multidisciplinary Team Meetings', vocabulary: ['Consensus', 'Pathway', 'Referral', 'Discharge planning', 'Coordination'] },
                { title: 'Ordering & Interpreting Tests', vocabulary: ['Baseline', 'Panel', 'Marker', 'Sensitivity', 'Specificity'] },
                { title: 'Telephone Consultations', vocabulary: ['Triage', 'Red flag', 'Safety-net', 'Follow-up', 'Urgent'] },
            ],
        },
        {
            phase: 3,
            title: 'Medical Documentation',
            subtitle: 'Lessons 11-15',
            description: 'Write clear, professional clinical notes, referral letters, and reports.',
            lessons: [
                { title: 'Clinical Note Writing', vocabulary: ['Subjective', 'Objective', 'Assessment', 'Plan', 'Documentation'] },
                { title: 'Referral & Discharge Letters', vocabulary: ['Indication', 'Summary', 'Ongoing management', 'Follow-up', 'Recommendation'] },
                { title: 'Prescription Writing', vocabulary: ['Dosage', 'Route', 'Frequency', 'PRN', 'Titrate'] },
                { title: 'Incident & Error Reporting', vocabulary: ['Adverse event', 'Root cause', 'Near miss', 'Disclosure', 'Prevention'] },
                { title: 'Research & Publication Writing', vocabulary: ['Abstract', 'Methodology', 'Hypothesis', 'Peer review', 'Evidence-based'] },
            ],
        },
        {
            phase: 4,
            title: 'Presentations & Teaching',
            subtitle: 'Lessons 16-20',
            description: 'Present at conferences, teach medical students, and lead journal clubs.',
            lessons: [
                { title: 'Case Presentations', vocabulary: ['Presenting complaint', 'Working diagnosis', 'Differential', 'Investigation', 'Outcome'] },
                { title: 'Grand Rounds & Lectures', vocabulary: ['Evidence', 'Guideline', 'Controversy', 'Meta-analysis', 'Clinical trial'] },
                { title: 'Journal Club Discussions', vocabulary: ['Bias', 'Confounding', 'Statistical significance', 'Sample size', 'Limitation'] },
                { title: 'Teaching Medical Students', vocabulary: ['Competency', 'Bedside teaching', 'Feedback', 'Assessment', 'Demonstration'] },
                { title: 'Conference Presentations', vocabulary: ['Poster', 'Oral presentation', 'Q&A', 'Abstract submission', 'Networking'] },
            ],
        },
        {
            phase: 5,
            title: 'Leadership & Career Development',
            subtitle: 'Lessons 21-25',
            description: 'Advance your medical career with leadership skills and professional development.',
            lessons: [
                { title: 'Medical Leadership', vocabulary: ['Governance', 'Quality improvement', 'Patient safety', 'Policy', 'Accountability'] },
                { title: 'Ethics & Medico-Legal Issues', vocabulary: ['Negligence', 'Malpractice', 'Duty of care', 'Confidentiality', 'Tribunal'] },
                { title: 'Exam & Interview Preparation', vocabulary: ['Portfolio', 'Competency-based', 'Scenario', 'Reflection', 'Achievement'] },
                { title: 'Interdisciplinary Collaboration', vocabulary: ['Liaison', 'Shared decision-making', 'Protocol', 'Specialist', 'Generalist'] },
                { title: 'Global Health & Telemedicine', vocabulary: ['Telehealth', 'Remote consultation', 'Health equity', 'Access', 'Digital health'] },
            ],
        },
    ],
    firstLesson: {
        title: 'Taking a Patient History',
        vocabulary: [
            {
                word: 'Onset',
                partOfSpeech: 'noun',
                definition: 'The beginning or start of something, especially a medical condition or symptom.',
                example: 'When was the onset of your chest pain?',
                usageNote: 'Commonly used in the phrase "sudden onset" or "gradual onset".',
            },
            {
                word: 'Radiating',
                partOfSpeech: 'adjective/verb',
                definition: 'Spreading outward from a central point; used to describe pain that moves to other areas.',
                example: 'Is the pain radiating to your left arm or jaw?',
                usageNote: 'Key question in cardiac assessments.',
            },
            {
                word: 'Aggravating factors',
                partOfSpeech: 'noun phrase',
                definition: 'Things that make a symptom or condition worse.',
                example: 'Are there any aggravating factors, such as exercise or eating?',
                usageNote: 'Paired with "relieving factors" in a thorough history.',
            },
            {
                word: 'Differential diagnosis',
                partOfSpeech: 'noun phrase',
                definition: 'A list of possible conditions that could explain a patient\'s symptoms.',
                example: 'The differential diagnosis includes angina, GERD, and musculoskeletal pain.',
                usageNote: 'Often shortened to "differential" or "DDx".',
            },
            {
                word: 'Prognosis',
                partOfSpeech: 'noun',
                definition: 'The likely course or outcome of a medical condition.',
                example: 'With early treatment, the prognosis for this condition is generally very good.',
                usageNote: 'Distinct from "diagnosis" (identifying the condition).',
            },
        ],
        reading: {
            title: 'A Thorough Consultation',
            content: `Dr. Amara Okafor was halfway through her morning clinic at Greenfield Medical Centre when her next patient, Mr. David Liu, was shown in. He was a 48-year-old accountant who had booked an urgent appointment.

"Good morning, Mr. Liu. I'm Dr. Okafor. What brings you in today?" she asked, settling into her chair.

"I've been having this pain in my chest," Mr. Liu said, looking worried. "It started about three days ago."

Dr. Okafor noted the **onset**. "Can you describe the pain for me? Is it sharp, dull, or more like a pressure?"

"It's more like a tightness," he replied. "Especially when I climb the stairs at work."

"And is the pain **radiating** anywhere — to your arm, your back, or your jaw?"

Mr. Liu paused. "Actually, yes. Sometimes I feel it going into my left shoulder."

Dr. Okafor kept her expression calm but professional. "Are there any **aggravating factors** — things that make the pain worse? And does anything relieve it?"

"Exercise makes it worse. Resting helps it go away after a few minutes."

After completing a physical examination and reviewing Mr. Liu's risk factors — family history, stress, and a sedentary lifestyle — Dr. Okafor explained her thinking. "Based on what you've told me, my **differential diagnosis** includes angina, which is related to the heart, as well as some less serious possibilities like acid reflux or muscle strain. I'd like to run some tests to be sure."

Mr. Liu looked concerned. "Is it serious?"

"I want to be thorough," she reassured him. "If it is angina, the **prognosis** is very positive with early treatment and lifestyle changes. Let's get the full picture first."

Mr. Liu left the consultation feeling heard and informed — exactly what a good doctor-patient interaction should achieve.`,
        },
        comprehension: [
            {
                question: 'What was Mr. Liu\'s chief complaint?',
                type: 'multiple-choice',
                options: ['Headache', 'Chest tightness', 'Back pain', 'Shortness of breath'],
                answer: 'Chest tightness',
            },
            {
                question: 'Where was the pain radiating to?',
                type: 'multiple-choice',
                options: ['Right leg', 'Left shoulder', 'Neck', 'Abdomen'],
                answer: 'Left shoulder',
            },
            {
                question: 'What was an aggravating factor for Mr. Liu\'s pain?',
                type: 'multiple-choice',
                options: ['Eating', 'Sleeping', 'Exercise', 'Reading'],
                answer: 'Exercise',
            },
            {
                question: 'What does "differential diagnosis" mean?',
                type: 'multiple-choice',
                options: ['The final diagnosis', 'A list of possible conditions', 'A type of medication', 'A referral letter'],
                answer: 'A list of possible conditions',
            },
            {
                question: 'What was the prognosis if the condition was angina?',
                type: 'multiple-choice',
                options: ['Very poor', 'Unknown', 'Very positive with early treatment', 'Requires surgery'],
                answer: 'Very positive with early treatment',
            },
        ],
        discussion: [
            'What questions do you always ask when taking a patient history?',
            'How do you explain a differential diagnosis to a worried patient without causing panic?',
            'Describe a time you had to adapt your communication style for a patient with limited English.',
            'Why is it important to ask about both aggravating and relieving factors?',
        ],
        grammar: {
            title: 'Open-Ended Questions vs. Closed Questions in Consultations',
            explanation: 'Doctors use open-ended questions to let patients describe symptoms freely, then closed questions to narrow down specifics. Open questions start with "What," "How," "Tell me about..." while closed questions require yes/no or specific answers.',
            examples: [
                'Open: What brings you in today? (Lets patient describe freely)',
                'Open: How would you describe the pain? (Gathers detail)',
                'Closed: Is the pain radiating to your arm? (Specific yes/no)',
                'Closed: When did the symptoms start? (Specific answer)',
            ],
        },
        sentenceFrames: [
            {
                frame: 'Can you describe [symptom] for me? Is it [option A], [option B], or [option C]?',
                example: 'Can you describe the pain for me? Is it sharp, dull, or more like a pressure?',
            },
            {
                frame: 'Is the [symptom] radiating to [location]?',
                example: 'Is the pain radiating to your left arm or jaw?',
            },
            {
                frame: 'Based on [findings], my differential diagnosis includes [condition 1] and [condition 2].',
                example: 'Based on your symptoms and history, my differential diagnosis includes angina and acid reflux.',
            },
            {
                frame: 'The prognosis for [condition] is [outlook] with [treatment approach].',
                example: 'The prognosis for angina is very positive with early treatment and lifestyle changes.',
            },
        ],
    },
};

export const lawyersData: ProfessionData = {
    slug: 'lawyers',
    title: 'ESL Lessons for Lawyers',
    profession: 'Lawyers',
    metaTitle: 'ESL Lessons for Lawyers | Legal English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for lawyers. Master client consultations, courtroom advocacy & contract negotiation. Native British coach.',
    h1: 'Professional English Lessons for Lawyers',
    targetKeyword: 'ESL lessons for lawyers',
    heroSubtitle: 'Master legal argumentation, client advisory, and courtroom communication with precision',
    benefits: [
        'Advise clients with clarity and professionalism',
        'Draft and negotiate contracts confidently',
        'Present arguments persuasively in hearings',
        'Network effectively at international legal events',
    ],
    commonChallenges: [
        'Simplifying complex legal concepts for clients',
        'Using precise legal terminology in written submissions',
        'Cross-examining witnesses or presenting oral arguments',
        'Negotiating terms during high-pressure deal closings',
    ],
    curriculum: [
        {
            phase: 1,
            title: 'Client Communication',
            subtitle: 'Lessons 1-5',
            description: 'Build trust and communicate legal matters clearly to clients from diverse backgrounds.',
            lessons: [
                { title: 'Initial Client Consultations', vocabulary: ['Retainer', 'Scope of engagement', 'Privilege', 'Conflict of interest', 'Liability'] },
                { title: 'Explaining Legal Rights', vocabulary: ['Jurisdiction', 'Statute', 'Entitlement', 'Due process', 'Remedy'] },
                { title: 'Managing Client Expectations', vocabulary: ['Outcome', 'Likelihood', 'Settlement', 'Precedent', 'Timeline'] },
                { title: 'Delivering Case Updates', vocabulary: ['Discovery', 'Filing', 'Motion', 'Hearing', 'Adjournment'] },
                { title: 'Sensitive & Difficult Conversations', vocabulary: ['Disclosure', 'Plea', 'Custody', 'Conviction', 'Verdict'] },
            ],
        },
        {
            phase: 2,
            title: 'Legal Drafting & Documentation',
            subtitle: 'Lessons 6-10',
            description: 'Write precise, enforceable legal documents and correspondence.',
            lessons: [
                { title: 'Contract Drafting Essentials', vocabulary: ['Clause', 'Indemnity', 'Warranty', 'Termination', 'Force majeure'] },
                { title: 'Legal Correspondence', vocabulary: ['Without prejudice', 'Formal notice', 'Demand letter', 'Undertaking', 'Compliance'] },
                { title: 'Opinion Letters & Memoranda', vocabulary: ['Analysis', 'Conclusion', 'Authority', 'Interpretation', 'Recommendation'] },
                { title: 'Regulatory Filings', vocabulary: ['Submission', 'Amendment', 'Registration', 'Notification', 'Approval'] },
                { title: 'Reviewing Third-Party Documents', vocabulary: ['Red flag', 'Ambiguity', 'Boilerplate', 'Carve-out', 'Representation'] },
            ],
        },
        {
            phase: 3,
            title: 'Negotiation & Deal-Making',
            subtitle: 'Lessons 11-15',
            description: 'Navigate complex negotiations and close deals effectively.',
            lessons: [
                { title: 'Opening Negotiation Positions', vocabulary: ['Anchor', 'BATNA', 'Leverage', 'Concession', 'Counter-offer'] },
                { title: 'M&A Due Diligence', vocabulary: ['Disclosure schedule', 'Representation', 'Material adverse change', 'Escrow', 'Closing'] },
                { title: 'Employment & Labour Negotiations', vocabulary: ['Severance', 'Non-compete', 'Restrictive covenant', 'Wrongful dismissal', 'Tribunal'] },
                { title: 'Intellectual Property Licensing', vocabulary: ['Royalty', 'Licensing', 'Infringement', 'Patent', 'Trade secret'] },
                { title: 'Cross-Border Transactions', vocabulary: ['Governing law', 'Arbitration', 'Jurisdiction clause', 'Compliance', 'Sanctions'] },
            ],
        },
        {
            phase: 4,
            title: 'Advocacy & Courtroom Skills',
            subtitle: 'Lessons 16-20',
            description: 'Present persuasive legal arguments in hearings, tribunals, and arbitrations.',
            lessons: [
                { title: 'Opening & Closing Statements', vocabulary: ['Submission', 'Persuasion', 'Burden of proof', 'Reasonable doubt', 'Summary'] },
                { title: 'Cross-Examination Techniques', vocabulary: ['Leading question', 'Credibility', 'Impeach', 'Objection', 'Testimony'] },
                { title: 'Presenting Evidence', vocabulary: ['Exhibit', 'Admissibility', 'Chain of custody', 'Expert witness', 'Hearsay'] },
                { title: 'Mediation & Alternative Dispute Resolution', vocabulary: ['Mediator', 'Arbitrator', 'Settlement conference', 'Binding', 'Award'] },
                { title: 'Appellate Advocacy', vocabulary: ['Appeal', 'Grounds', 'Standard of review', 'Precedent', 'Dissent'] },
            ],
        },
        {
            phase: 5,
            title: 'Professional Development & Ethics',
            subtitle: 'Lessons 21-25',
            description: 'Build your legal career with professional skills and ethical practice.',
            lessons: [
                { title: 'Legal Ethics & Professional Conduct', vocabulary: ['Duty', 'Confidentiality', 'Pro bono', 'Misconduct', 'Bar association'] },
                { title: 'Business Development for Lawyers', vocabulary: ['Pitch', 'Referral', 'Client relationship', 'Thought leadership', 'Networking'] },
                { title: 'Legal Technology & Innovation', vocabulary: ['LegalTech', 'E-discovery', 'AI', 'Document automation', 'Digital signature'] },
                { title: 'International Law & Comparative Systems', vocabulary: ['Common law', 'Civil law', 'Treaty', 'Convention', 'Sovereignty'] },
                { title: 'Mentoring & Team Leadership', vocabulary: ['Associate', 'Partner', 'Delegation', 'Performance review', 'Professional growth'] },
            ],
        },
    ],
    firstLesson: {
        title: 'The Initial Client Consultation',
        vocabulary: [
            {
                word: 'Retainer',
                partOfSpeech: 'noun',
                definition: 'A fee paid in advance to secure a lawyer\'s services for future legal work.',
                example: 'The client paid a retainer of $5,000 before the firm began work on the case.',
                usageNote: 'Also refers to the ongoing agreement between lawyer and client.',
            },
            {
                word: 'Privilege',
                partOfSpeech: 'noun',
                definition: 'The legal right that protects communications between a lawyer and their client from being disclosed.',
                example: 'Everything you tell me is protected by attorney-client privilege.',
                usageNote: 'Also called "legal professional privilege" in UK jurisdictions.',
            },
            {
                word: 'Liability',
                partOfSpeech: 'noun',
                definition: 'Legal responsibility for one\'s acts or omissions, especially financial responsibility.',
                example: 'The company may face significant liability if the contract was breached.',
                usageNote: 'Can be "civil liability" (damages) or "criminal liability" (prosecution).',
            },
            {
                word: 'Jurisdiction',
                partOfSpeech: 'noun',
                definition: 'The authority of a court to hear and decide cases; also the geographical area over which authority extends.',
                example: 'This matter falls under the jurisdiction of the High Court.',
                usageNote: 'Critical when dealing with cross-border disputes.',
            },
            {
                word: 'Precedent',
                partOfSpeech: 'noun',
                definition: 'A previous court decision that serves as a rule or example for deciding similar cases in the future.',
                example: 'The 2019 ruling set an important precedent for data privacy cases.',
                usageNote: 'Central to common law systems; also used as an adjective meaning "earlier".',
            },
        ],
        reading: {
            title: 'Meeting a New Client',
            content: `Senior associate Rachel Torres was preparing for her first meeting with a new client at Harper & Reid LLP. Mr. Kenji Tanaka, a Japanese technology entrepreneur, needed legal advice about setting up a UK subsidiary.

"Good afternoon, Mr. Tanaka. Please have a seat. Before we begin, I should explain that everything we discuss today is protected by attorney-client **privilege**. You can speak freely."

Mr. Tanaka nodded. "Thank you. I appreciate that. I have many questions about the legal requirements."

Rachel began by outlining the firm's process. "First, let me explain how our engagement works. We typically ask for a **retainer** upfront, which covers the initial phase of work. We'll bill against that retainer and provide you with regular updates."

"That sounds reasonable," Mr. Tanaka replied. "My main concern is **liability**. If my UK subsidiary enters contracts with European partners, what are the risks?"

Rachel made notes. "That's an important question. The **liability** structure depends on how the subsidiary is incorporated. A limited company would protect your personal assets from business debts in most circumstances."

"And which courts would handle any disputes?" Mr. Tanaka asked.

"That depends on the **jurisdiction** clauses in your contracts," Rachel explained. "We'll want to ensure that English law and English courts have **jurisdiction**, as that gives us more control over the process."

Mr. Tanaka looked relieved. "Have you handled cases like this before?"

"Yes. In fact, there's strong **precedent** from recent cases involving foreign-owned subsidiaries that supports the structure I'm recommending. I'll prepare a summary for you."

The meeting concluded with Mr. Tanaka feeling confident in his legal team — a successful first consultation built on clear communication and trust.`,
        },
        comprehension: [
            {
                question: 'Why did Rachel explain attorney-client privilege at the start?',
                type: 'multiple-choice',
                options: ['To impress the client', 'So the client could speak freely', 'It is a legal requirement', 'To increase the retainer'],
                answer: 'So the client could speak freely',
            },
            {
                question: 'What is a retainer in legal practice?',
                type: 'multiple-choice',
                options: ['A legal document', 'A fee paid in advance', 'A court order', 'A type of contract'],
                answer: 'A fee paid in advance',
            },
            {
                question: 'What was Mr. Tanaka\'s main concern?',
                type: 'multiple-choice',
                options: ['Tax rates', 'Liability and risk', 'Office location', 'Hiring staff'],
                answer: 'Liability and risk',
            },
            {
                question: 'Why is the jurisdiction clause important in contracts?',
                type: 'multiple-choice',
                options: ['It sets the price', 'It determines which courts handle disputes', 'It limits liability', 'It defines the retainer'],
                answer: 'It determines which courts handle disputes',
            },
            {
                question: 'How did Rachel use precedent to reassure the client?',
                type: 'multiple-choice',
                options: ['She quoted a law', 'She referenced recent similar cases', 'She called a judge', 'She reduced the fee'],
                answer: 'She referenced recent similar cases',
            },
        ],
        discussion: [
            'What are the most important things to cover in a first client meeting?',
            'How do you explain complex legal concepts to clients who are not legal professionals?',
            'Why is building trust critical in the lawyer-client relationship?',
            'What challenges arise when advising clients from different legal traditions?',
        ],
        grammar: {
            title: 'Hedging Language for Legal Advice',
            explanation: 'Lawyers must use hedging language to avoid giving absolute guarantees. Words like "may," "could," "typically," and "in most circumstances" soften statements while remaining professional.',
            examples: [
                'A limited company would protect your assets in most circumstances.',
                'The court may rule in your favour based on the available evidence.',
                'This could potentially expose the company to liability.',
                'Typically, these disputes are resolved through mediation first.',
            ],
        },
        sentenceFrames: [
            {
                frame: 'Everything we discuss is protected by [type of privilege].',
                example: 'Everything we discuss is protected by attorney-client privilege.',
            },
            {
                frame: 'The [liability/risk] depends on [factor].',
                example: 'The liability structure depends on how the subsidiary is incorporated.',
            },
            {
                frame: 'There is strong precedent from [source] that supports [recommendation].',
                example: 'There is strong precedent from recent cases that supports the structure I am recommending.',
            },
            {
                frame: 'We typically [process], which covers [scope].',
                example: 'We typically ask for a retainer upfront, which covers the initial phase of work.',
            },
        ],
    },
};

export const itProfessionalsData: ProfessionData = {
    slug: 'it-professionals',
    title: 'ESL Lessons for IT Professionals',
    profession: 'IT Professionals',
    metaTitle: 'ESL Lessons for IT Professionals | Technical English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for IT professionals. Master helpdesk communication, IT project management & vendor negotiations. Native British coach.',
    h1: 'Professional English Lessons for IT Professionals',
    targetKeyword: 'ESL lessons for IT professionals',
    heroSubtitle: 'Communicate technical solutions, manage IT projects, and support users with clarity',
    benefits: [
        'Explain technical issues to non-technical users clearly',
        'Lead IT project meetings and vendor discussions',
        'Write effective technical documentation and reports',
        'Advance your IT career in global organisations',
    ],
    commonChallenges: [
        'Translating technical jargon into plain language for end users',
        'Writing clear incident reports and knowledge base articles',
        'Presenting IT strategy proposals to senior management',
        'Negotiating with software vendors and service providers',
    ],
    curriculum: [
        {
            phase: 1,
            title: 'User Support & Helpdesk Communication',
            subtitle: 'Lessons 1-5',
            description: 'Master the language for resolving user issues and providing excellent IT support.',
            lessons: [
                { title: 'Handling Support Tickets', vocabulary: ['Ticket', 'Priority', 'Escalation', 'Resolution', 'SLA'] },
                { title: 'Troubleshooting with Users', vocabulary: ['Diagnose', 'Workaround', 'Reboot', 'Cache', 'Permissions'] },
                { title: 'Explaining Technical Solutions Simply', vocabulary: ['Layman\'s terms', 'Interface', 'Configuration', 'Update', 'Compatibility'] },
                { title: 'Remote Desktop Support', vocabulary: ['Remote access', 'Screen share', 'Session', 'Credentials', 'Authorisation'] },
                { title: 'Closing Tickets & Follow-Up', vocabulary: ['Resolved', 'Feedback', 'Knowledge base', 'Documentation', 'Recurring'] },
            ],
        },
        {
            phase: 2,
            title: 'IT Infrastructure & Systems',
            subtitle: 'Lessons 6-10',
            description: 'Communicate effectively about networks, servers, and cloud infrastructure.',
            lessons: [
                { title: 'Network Architecture Discussions', vocabulary: ['Firewall', 'Bandwidth', 'Latency', 'VPN', 'DNS'] },
                { title: 'Cloud Migration Planning', vocabulary: ['Migration', 'On-premise', 'Hybrid', 'Scalability', 'Downtime'] },
                { title: 'Server Management Updates', vocabulary: ['Uptime', 'Load balancing', 'Backup', 'Redundancy', 'Patch'] },
                { title: 'Cybersecurity Briefings', vocabulary: ['Breach', 'Phishing', 'Encryption', 'Vulnerability', 'Compliance'] },
                { title: 'Disaster Recovery Planning', vocabulary: ['Failover', 'Recovery point', 'Business continuity', 'Replication', 'Restoration'] },
            ],
        },
        {
            phase: 3,
            title: 'IT Project Management',
            subtitle: 'Lessons 11-15',
            description: 'Lead IT projects and communicate effectively with stakeholders.',
            lessons: [
                { title: 'Project Kickoff Meetings', vocabulary: ['Scope', 'Deliverable', 'Milestone', 'Resource', 'Timeline'] },
                { title: 'Agile & Scrum Communication', vocabulary: ['Sprint', 'Backlog', 'Stand-up', 'Retrospective', 'User story'] },
                { title: 'Change Management in IT', vocabulary: ['Change request', 'Impact assessment', 'Rollback', 'Approval', 'Deployment'] },
                { title: 'Vendor Selection & Negotiation', vocabulary: ['RFP', 'Proposal', 'Contract', 'Licensing', 'Support agreement'] },
                { title: 'Budget Presentations for IT', vocabulary: ['ROI', 'Total cost of ownership', 'OPEX', 'CAPEX', 'Justification'] },
            ],
        },
        {
            phase: 4,
            title: 'Documentation & Reporting',
            subtitle: 'Lessons 16-20',
            description: 'Write professional IT documentation and present reports to management.',
            lessons: [
                { title: 'Writing SOPs & Runbooks', vocabulary: ['Procedure', 'Step-by-step', 'Prerequisite', 'Validation', 'Version control'] },
                { title: 'Incident Post-Mortems', vocabulary: ['Root cause', 'Timeline', 'Contributing factor', 'Action item', 'Prevention'] },
                { title: 'IT Strategy Proposals', vocabulary: ['Roadmap', 'Digital transformation', 'Innovation', 'Alignment', 'KPI'] },
                { title: 'Compliance & Audit Reports', vocabulary: ['Framework', 'GDPR', 'ISO', 'Audit trail', 'Gap analysis'] },
                { title: 'Training Materials & User Guides', vocabulary: ['Tutorial', 'Screenshot', 'FAQ', 'Onboarding', 'Best practice'] },
            ],
        },
        {
            phase: 5,
            title: 'Leadership & Career Growth',
            subtitle: 'Lessons 21-25',
            description: 'Develop leadership communication skills for senior IT roles.',
            lessons: [
                { title: 'Presenting to the C-Suite', vocabulary: ['Executive summary', 'Business case', 'Strategic', 'Value proposition', 'Stakeholder'] },
                { title: 'Leading IT Teams', vocabulary: ['Mentorship', 'Delegation', 'Accountability', 'Cross-functional', 'Empowerment'] },
                { title: 'IT Interviews & Career Talks', vocabulary: ['Certification', 'Portfolio', 'Achievement', 'Problem-solving', 'Leadership'] },
                { title: 'Emerging Technology Discussions', vocabulary: ['AI', 'IoT', 'Blockchain', 'Automation', 'Edge computing'] },
                { title: 'Managing Stakeholder Expectations', vocabulary: ['Transparency', 'Trade-off', 'Prioritisation', 'Capacity', 'Realistic'] },
            ],
        },
    ],
    firstLesson: {
        title: 'Handling IT Support Tickets',
        vocabulary: [
            {
                word: 'SLA',
                partOfSpeech: 'noun (abbreviation)',
                definition: 'Service Level Agreement — a contract defining the expected level of service, including response and resolution times.',
                example: 'According to our SLA, critical issues must be resolved within four hours.',
                usageNote: 'Pronounced as individual letters: S-L-A. Central to IT support operations.',
            },
            {
                word: 'Escalation',
                partOfSpeech: 'noun',
                definition: 'The process of transferring a support issue to a higher level of expertise or authority.',
                example: 'This issue requires escalation to our Level 3 network team.',
                usageNote: 'Can be "functional escalation" (technical) or "hierarchical escalation" (management).',
            },
            {
                word: 'Workaround',
                partOfSpeech: 'noun',
                definition: 'A temporary solution that bypasses a problem without fully resolving it.',
                example: 'While we work on a permanent fix, here is a workaround you can use.',
                usageNote: 'Important distinction from a "fix" or "resolution".',
            },
            {
                word: 'Permissions',
                partOfSpeech: 'noun (plural)',
                definition: 'Access rights granted to users that determine what they can view, edit, or execute in a system.',
                example: 'The user cannot access the shared drive because their permissions have not been configured.',
                usageNote: 'Related terms: "access control", "role-based access", "admin rights".',
            },
            {
                word: 'Resolution',
                partOfSpeech: 'noun',
                definition: 'The action of solving a problem or the solution itself; the point at which an issue is considered fixed.',
                example: 'The ticket was closed after resolution was confirmed by the user.',
                usageNote: 'Tracked as a metric — "mean time to resolution" (MTTR).',
            },
        ],
        reading: {
            title: 'A Morning on the Service Desk',
            content: `It was 8:30 AM on Monday morning, and IT Service Desk analyst Priya Sharma was reviewing her queue when a high-priority ticket appeared. The finance department had lost access to their shared drive.

"Good morning, this is Priya from IT Support. I can see your ticket about the shared drive access. Can you tell me exactly what's happening?" she asked Karen, the Finance Manager.

"None of my team can open the Q1 reports folder since this morning," Karen explained, sounding frustrated. "We have a board meeting at 2 PM."

Priya checked the system. "I can see the issue. It looks like the **permissions** on the folder were changed during last night's maintenance window. Your team's access group was accidentally removed."

"Can you fix it quickly? Our **SLA** with the board requires those reports by noon."

"Absolutely. I'm restoring the **permissions** now," Priya confirmed. "As a **workaround** while I verify everything, I've also sent you a direct link to the files via our backup system."

"Perfect, that helps immediately," Karen said, relieved.

Priya documented the issue and then considered whether **escalation** was needed. Since the permission change happened during maintenance, she flagged it for the infrastructure team to investigate how it occurred.

Thirty minutes later, Karen confirmed full access was restored. Priya updated the ticket: "**Resolution**: Permissions restored to finance group. Root cause flagged for infrastructure review."

She closed the ticket, knowing that clear communication had turned a stressful situation into a smooth **resolution**.`,
        },
        comprehension: [
            {
                question: 'What was the main issue reported by the finance department?',
                type: 'multiple-choice',
                options: ['Slow internet', 'Lost access to shared drive', 'Printer not working', 'Email outage'],
                answer: 'Lost access to shared drive',
            },
            {
                question: 'What caused the access problem?',
                type: 'multiple-choice',
                options: ['A virus', 'Permissions were accidentally changed', 'The server crashed', 'The files were deleted'],
                answer: 'Permissions were accidentally changed',
            },
            {
                question: 'What workaround did Priya provide?',
                type: 'multiple-choice',
                options: ['She reset the password', 'She sent a direct link via backup', 'She rebooted the server', 'She called the vendor'],
                answer: 'She sent a direct link via backup',
            },
            {
                question: 'Why did Priya flag the issue for escalation?',
                type: 'multiple-choice',
                options: ['She could not fix it', 'To investigate how it occurred during maintenance', 'The user requested it', 'The SLA was breached'],
                answer: 'To investigate how it occurred during maintenance',
            },
        ],
        discussion: [
            'How do you explain technical issues to non-technical users without being condescending?',
            'What is the difference between a workaround and a resolution, and when is each appropriate?',
            'Why is documenting IT issues thoroughly important for future prevention?',
            'Describe a time when clear communication helped you resolve an IT issue faster.',
        ],
        grammar: {
            title: 'Present Continuous for Live Troubleshooting',
            explanation: 'During IT support calls, we use Present Continuous to narrate actions in real time. This reassures users that action is being taken right now.',
            examples: [
                'I\'m checking the server logs now.',
                'I\'m restoring the permissions as we speak.',
                'The system is rebooting — it should take about two minutes.',
                'I\'m escalating this to our network team right now.',
            ],
        },
        sentenceFrames: [
            {
                frame: 'I can see your ticket about [issue]. Can you tell me exactly what\'s happening?',
                example: 'I can see your ticket about the shared drive access. Can you tell me exactly what\'s happening?',
            },
            {
                frame: 'As a workaround while I [fix], I\'ve also [temporary solution].',
                example: 'As a workaround while I verify everything, I\'ve also sent you a direct link via our backup system.',
            },
            {
                frame: 'Resolution: [what was fixed]. Root cause [follow-up action].',
                example: 'Resolution: Permissions restored to finance group. Root cause flagged for infrastructure review.',
            },
            {
                frame: 'This issue requires escalation to [team/level] because [reason].',
                example: 'This issue requires escalation to our Level 3 network team because it involves a configuration change.',
            },
        ],
    },
};

export const hospitalityData: ProfessionData = {
    slug: 'hospitality-professionals',
    title: 'ESL Lessons for Hospitality Professionals',
    profession: 'Hospitality Professionals',
    metaTitle: 'ESL Lessons for Hospitality Professionals | Service English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for hospitality professionals. Master guest relations, complaint handling & team coordination. Native British coach.',
    h1: 'Professional English Lessons for Hospitality Professionals',
    targetKeyword: 'ESL lessons for hospitality professionals',
    heroSubtitle: 'Deliver exceptional guest experiences and lead hospitality teams with confidence',
    benefits: [
        'Create outstanding first impressions with international guests',
        'Handle complaints and special requests professionally',
        'Coordinate effectively across hotel and restaurant teams',
        'Advance into management roles at global hospitality brands',
    ],
    commonChallenges: [
        'Understanding guests with diverse accents and cultural expectations',
        'Describing menus, amenities, and services with natural fluency',
        'De-escalating complaints under pressure',
        'Writing professional emails and reports for management',
    ],
    curriculum: [
        {
            phase: 1,
            title: 'Guest Relations & Front Desk',
            subtitle: 'Lessons 1-5',
            description: 'Master the language for welcoming guests, handling reservations, and providing excellent service.',
            lessons: [
                { title: 'Check-In & Check-Out Procedures', vocabulary: ['Reservation', 'Confirmation', 'Key card', 'Amenity', 'Incidental'] },
                { title: 'Handling Guest Requests', vocabulary: ['Accommodate', 'Upgrade', 'Complimentary', 'Availability', 'Preference'] },
                { title: 'Telephone Etiquette', vocabulary: ['Hold', 'Transfer', 'Enquiry', 'Booking', 'Confirmation number'] },
                { title: 'Giving Directions & Recommendations', vocabulary: ['Landmark', 'Proximity', 'Attraction', 'Shuttle', 'Itinerary'] },
                { title: 'VIP & Loyalty Guest Service', vocabulary: ['Priority', 'Recognition', 'Personalised', 'Concierge', 'Exclusive'] },
            ],
        },
        {
            phase: 2,
            title: 'Food & Beverage Service',
            subtitle: 'Lessons 6-10',
            description: 'Communicate confidently about menus, dietary needs, and dining service.',
            lessons: [
                { title: 'Menu Descriptions & Recommendations', vocabulary: ['Appetiser', 'Entrée', 'Pairing', 'Seasonal', 'Signature dish'] },
                { title: 'Dietary Requirements & Allergies', vocabulary: ['Gluten-free', 'Vegan', 'Intolerance', 'Cross-contamination', 'Substitution'] },
                { title: 'Wine & Beverage Service', vocabulary: ['Sommelier', 'Vintage', 'Bouquet', 'Dry', 'Full-bodied'] },
                { title: 'Banquet & Event Coordination', vocabulary: ['Function', 'Catering', 'Seating plan', 'Course', 'Service charge'] },
                { title: 'Handling Dining Complaints', vocabulary: ['Dissatisfied', 'Compensate', 'Rectify', 'Apology', 'Feedback'] },
            ],
        },
        {
            phase: 3,
            title: 'Complaint Handling & Problem Solving',
            subtitle: 'Lessons 11-15',
            description: 'Turn difficult situations into positive outcomes with professional communication.',
            lessons: [
                { title: 'Active Listening & Empathy', vocabulary: ['Acknowledge', 'Validate', 'Concern', 'Understanding', 'Perspective'] },
                { title: 'De-escalation Techniques', vocabulary: ['Calm', 'Reassure', 'Solution-focused', 'Authority', 'Escalate'] },
                { title: 'Offering Compensation', vocabulary: ['Gesture', 'Goodwill', 'Credit', 'Voucher', 'Upgrade'] },
                { title: 'Written Complaint Responses', vocabulary: ['Formal', 'Regret', 'Assurance', 'Resolve', 'Follow-up'] },
                { title: 'Online Review Management', vocabulary: ['Reputation', 'Response', 'Feedback', 'Rating', 'Platform'] },
            ],
        },
        {
            phase: 4,
            title: 'Operations & Team Management',
            subtitle: 'Lessons 16-20',
            description: 'Lead hospitality teams and manage daily operations effectively.',
            lessons: [
                { title: 'Staff Briefings & Shift Handovers', vocabulary: ['Briefing', 'Handover', 'Occupancy', 'VIP alert', 'Special event'] },
                { title: 'Housekeeping Coordination', vocabulary: ['Turnover', 'Inspection', 'Amenity restock', 'Maintenance', 'Standard'] },
                { title: 'Health & Safety Communication', vocabulary: ['HACCP', 'Hygiene', 'Evacuation', 'Risk assessment', 'Protocol'] },
                { title: 'Revenue Management Discussions', vocabulary: ['Occupancy rate', 'ADR', 'RevPAR', 'Yield', 'Forecast'] },
                { title: 'Training New Staff', vocabulary: ['Induction', 'Shadow', 'SOP', 'Mentoring', 'Assessment'] },
            ],
        },
        {
            phase: 5,
            title: 'Career Development & Global Hospitality',
            subtitle: 'Lessons 21-25',
            description: 'Build your career in international hospitality management.',
            lessons: [
                { title: 'Interview Skills for Hospitality', vocabulary: ['Scenario', 'Experience', 'Strengths', 'Service philosophy', 'Leadership'] },
                { title: 'Cross-Cultural Guest Management', vocabulary: ['Cultural sensitivity', 'Custom', 'Expectation', 'Adaptation', 'Protocol'] },
                { title: 'Sustainability in Hospitality', vocabulary: ['Eco-friendly', 'Carbon footprint', 'Sustainable sourcing', 'Green certification', 'Initiative'] },
                { title: 'Hotel Marketing & Social Media', vocabulary: ['Brand', 'Engagement', 'Influencer', 'Content', 'Campaign'] },
                { title: 'Opening & Managing New Properties', vocabulary: ['Pre-opening', 'Soft launch', 'Brand standards', 'Positioning', 'Market analysis'] },
            ],
        },
    ],
    firstLesson: {
        title: 'The Guest Check-In Experience',
        vocabulary: [
            {
                word: 'Reservation',
                partOfSpeech: 'noun',
                definition: 'An arrangement to have something held for your use, such as a hotel room.',
                example: 'I have a reservation under the name Tanaka for three nights.',
                usageNote: 'Also called a "booking" in British English.',
            },
            {
                word: 'Amenity',
                partOfSpeech: 'noun',
                definition: 'A useful or desirable feature or facility of a building or place.',
                example: 'Our amenities include a swimming pool, fitness centre, and complimentary breakfast.',
                usageNote: 'Usually plural. Includes both room amenities and hotel facilities.',
            },
            {
                word: 'Complimentary',
                partOfSpeech: 'adjective',
                definition: 'Given free of charge as a courtesy or favour.',
                example: 'We offer a complimentary welcome drink for all guests upon arrival.',
                usageNote: 'More professional than saying "free" in hospitality contexts.',
            },
            {
                word: 'Accommodate',
                partOfSpeech: 'verb',
                definition: 'To provide what is needed or requested; to fit in with someone\'s wishes.',
                example: 'We would be happy to accommodate your request for a late check-out.',
                usageNote: 'Shows willingness to help; very common in service language.',
            },
            {
                word: 'Incidental',
                partOfSpeech: 'noun/adjective',
                definition: 'An additional charge for extras beyond the room rate, such as minibar or room service.',
                example: 'We will need a credit card on file for any incidentals during your stay.',
                usageNote: 'Also called "incidental charges" — important to explain clearly at check-in.',
            },
        ],
        reading: {
            title: 'A Warm Welcome at The Grand Park Hotel',
            content: `It was a busy Friday evening at The Grand Park Hotel, and Front Desk Manager Sofia Martinez was overseeing the check-in area when a couple arrived looking tired after a long flight.

"Good evening, and welcome to The Grand Park. Do you have a **reservation** with us?" Sofia asked with a warm smile.

"Yes, under the name Chen. We booked a deluxe room for four nights," Mr. Chen replied.

Sofia pulled up the booking. "Wonderful, Mr. and Mrs. Chen. I can see your **reservation** right here. You're in Room 1204, a deluxe room with a city view. Would you like me to walk you through our **amenities**?"

Mrs. Chen nodded. "Yes, please."

"Our **amenities** include a rooftop pool open until 10 PM, a 24-hour fitness centre, and our restaurant Bistro Azure, which serves breakfast from 6:30 to 10:30 AM — that's **complimentary** with your room."

"Oh, that's wonderful," Mrs. Chen said, smiling.

Mr. Chen then asked, "We have an early meeting on Monday. Would it be possible to get a late check-out?"

"We would be happy to **accommodate** that request," Sofia replied. "I've noted it on your reservation, and we'll confirm availability the evening before."

"One more thing," Mr. Chen added. "What do we need for the minibar?"

"We just need a credit card on file for any **incidentals** — things like the minibar, room service, or spa treatments. These will be charged to your room and settled at checkout."

The Chens headed to their room feeling welcomed and well-informed, which is exactly what great hospitality communication achieves.`,
        },
        comprehension: [
            {
                question: 'How long are the Chens staying at the hotel?',
                type: 'multiple-choice',
                options: ['Two nights', 'Three nights', 'Four nights', 'Five nights'],
                answer: 'Four nights',
            },
            {
                question: 'What is complimentary with their room?',
                type: 'multiple-choice',
                options: ['Dinner', 'Spa treatments', 'Breakfast', 'Airport transfer'],
                answer: 'Breakfast',
            },
            {
                question: 'What does "accommodate" mean in this context?',
                type: 'multiple-choice',
                options: ['To charge extra', 'To refuse a request', 'To provide what is requested', 'To move rooms'],
                answer: 'To provide what is requested',
            },
            {
                question: 'Why does the hotel need a credit card on file?',
                type: 'multiple-choice',
                options: ['For the room deposit', 'For incidental charges', 'To verify identity', 'For a loyalty program'],
                answer: 'For incidental charges',
            },
        ],
        discussion: [
            'What makes a great first impression during hotel check-in?',
            'How do you handle a situation where a guest\'s room is not ready upon arrival?',
            'Why is the word "complimentary" better than "free" in hospitality?',
            'Describe how you would explain hotel amenities to a non-English-speaking guest.',
        ],
        grammar: {
            title: 'Polite Offers & Requests in Service English',
            explanation: 'In hospitality, we use polite structures to offer help and respond to requests. "Would you like...?" for offers, "Would it be possible...?" for requests, and "We would be happy to..." for responses.',
            examples: [
                'Would you like me to walk you through our amenities?',
                'Would it be possible to get a late check-out?',
                'We would be happy to accommodate that request.',
                'May I help you with your luggage?',
            ],
        },
        sentenceFrames: [
            {
                frame: 'Welcome to [hotel name]. Do you have a reservation with us?',
                example: 'Welcome to The Grand Park. Do you have a reservation with us?',
            },
            {
                frame: 'Our amenities include [facility 1], [facility 2], and [facility 3].',
                example: 'Our amenities include a rooftop pool, a fitness centre, and complimentary breakfast.',
            },
            {
                frame: 'We would be happy to accommodate [request].',
                example: 'We would be happy to accommodate your request for a late check-out.',
            },
            {
                frame: 'We just need [requirement] for any incidentals during your stay.',
                example: 'We just need a credit card on file for any incidentals during your stay.',
            },
        ],
    },
};

export const marketingData: ProfessionData = {
    slug: 'marketing-professionals',
    title: 'ESL Lessons for Marketing Professionals',
    profession: 'Marketing Professionals',
    metaTitle: 'ESL Lessons for Marketing Professionals | Marketing English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for marketing professionals. Master campaign presentations, brand strategy & client pitches. Native British coach.',
    h1: 'Professional English Lessons for Marketing Professionals',
    targetKeyword: 'ESL lessons for marketing professionals',
    heroSubtitle: 'Present campaigns, pitch ideas, and lead brand strategy discussions with impact',
    benefits: [
        'Pitch creative campaigns to clients with confidence',
        'Write compelling copy and brand messaging',
        'Present marketing analytics and ROI reports',
        'Collaborate with global creative and media teams',
    ],
    commonChallenges: [
        'Presenting campaign concepts persuasively to stakeholders',
        'Writing concise, impactful marketing copy in English',
        'Discussing analytics and performance metrics clearly',
        'Adapting messaging for different cultural markets',
    ],
    curriculum: [
        {
            phase: 1, title: 'Campaign Strategy & Briefing', subtitle: 'Lessons 1-5',
            description: 'Master the language for planning, briefing, and presenting marketing campaigns.',
            lessons: [
                { title: 'Writing a Creative Brief', vocabulary: ['Objective', 'Target audience', 'Key message', 'Tone of voice', 'Deliverable'] },
                { title: 'Campaign Kickoff Meetings', vocabulary: ['Strategy', 'Channel', 'Budget', 'Timeline', 'KPI'] },
                { title: 'Presenting Campaign Concepts', vocabulary: ['Pitch', 'Mood board', 'Visual direction', 'Storyboard', 'Concept'] },
                { title: 'Competitive Analysis Discussions', vocabulary: ['Benchmark', 'Market share', 'Differentiator', 'Positioning', 'Gap'] },
                { title: 'Target Audience Profiling', vocabulary: ['Demographic', 'Psychographic', 'Persona', 'Segment', 'Insight'] },
            ],
        },
        {
            phase: 2, title: 'Content & Copywriting', subtitle: 'Lessons 6-10',
            description: 'Develop skills for writing and reviewing marketing content in English.',
            lessons: [
                { title: 'Writing Headlines & Taglines', vocabulary: ['Hook', 'Call to action', 'Slogan', 'Punchy', 'Memorable'] },
                { title: 'Email Marketing Copy', vocabulary: ['Subject line', 'Open rate', 'Click-through', 'Conversion', 'Unsubscribe'] },
                { title: 'Social Media Content', vocabulary: ['Engagement', 'Hashtag', 'Algorithm', 'Viral', 'Reach'] },
                { title: 'Blog & SEO Content', vocabulary: ['Keyword', 'Organic traffic', 'Backlink', 'Meta description', 'Ranking'] },
                { title: 'Reviewing & Giving Feedback on Copy', vocabulary: ['Tone', 'Clarity', 'On-brand', 'Revision', 'Approval'] },
            ],
        },
        {
            phase: 3, title: 'Digital Marketing & Analytics', subtitle: 'Lessons 11-15',
            description: 'Discuss digital strategies and present performance data confidently.',
            lessons: [
                { title: 'Paid Advertising Discussions', vocabulary: ['CPC', 'CPM', 'Impression', 'Bid', 'Ad spend'] },
                { title: 'Google Analytics & Reporting', vocabulary: ['Bounce rate', 'Session', 'Conversion rate', 'Attribution', 'Funnel'] },
                { title: 'A/B Testing Reviews', vocabulary: ['Variant', 'Control', 'Significance', 'Hypothesis', 'Winner'] },
                { title: 'Influencer & Partnership Marketing', vocabulary: ['Collaboration', 'Sponsored', 'Affiliate', 'Ambassador', 'Reach'] },
                { title: 'Marketing Automation', vocabulary: ['Workflow', 'Trigger', 'Drip campaign', 'Lead nurturing', 'Segmentation'] },
            ],
        },
        {
            phase: 4, title: 'Client & Stakeholder Presentations', subtitle: 'Lessons 16-20',
            description: 'Present marketing results and proposals to clients and leadership.',
            lessons: [
                { title: 'Quarterly Performance Reviews', vocabulary: ['ROI', 'Growth', 'Trend', 'Year-over-year', 'Insight'] },
                { title: 'New Business Pitches', vocabulary: ['Proposal', 'Credentials', 'Case study', 'Competitive edge', 'Budget'] },
                { title: 'Handling Client Feedback', vocabulary: ['Revision', 'Objection', 'Alignment', 'Expectation', 'Iteration'] },
                { title: 'Brand Strategy Presentations', vocabulary: ['Brand equity', 'Identity', 'Guidelines', 'Architecture', 'Repositioning'] },
                { title: 'Crisis Communication', vocabulary: ['Reputation', 'Statement', 'Damage control', 'Transparency', 'Response'] },
            ],
        },
        {
            phase: 5, title: 'Leadership & Industry Trends', subtitle: 'Lessons 21-25',
            description: 'Lead marketing teams and stay current with industry developments.',
            lessons: [
                { title: 'Leading Creative Teams', vocabulary: ['Direction', 'Collaboration', 'Feedback', 'Iteration', 'Empowerment'] },
                { title: 'Marketing Budgets & Forecasting', vocabulary: ['Allocation', 'Forecast', 'Spend', 'Efficiency', 'Justification'] },
                { title: 'Marketing Technology Stack', vocabulary: ['MarTech', 'CRM', 'Platform', 'Integration', 'Automation'] },
                { title: 'AI in Marketing', vocabulary: ['Personalisation', 'Predictive', 'Generative', 'Data-driven', 'Optimisation'] },
                { title: 'Conference Presentations', vocabulary: ['Thought leadership', 'Panel', 'Keynote', 'Networking', 'Industry'] },
            ],
        },
    ],
    firstLesson: {
        title: 'Writing and Presenting a Creative Brief',
        vocabulary: [
            { word: 'Target audience', partOfSpeech: 'noun phrase', definition: 'The specific group of people a marketing campaign is intended to reach.', example: 'Our target audience for this campaign is professionals aged 25-40 in urban areas.', usageNote: 'Also shortened to "target" in informal contexts.' },
            { word: 'Key message', partOfSpeech: 'noun phrase', definition: 'The main idea or value proposition that a campaign communicates.', example: 'The key message should emphasize affordability without sacrificing quality.', usageNote: 'Must be consistent across all channels.' },
            { word: 'Tone of voice', partOfSpeech: 'noun phrase', definition: 'The style and personality expressed in written and spoken communication.', example: 'The brand\'s tone of voice is professional yet approachable.', usageNote: 'Defined in brand guidelines; varies by audience and channel.' },
            { word: 'KPI', partOfSpeech: 'noun (abbreviation)', definition: 'Key Performance Indicator — a measurable value that shows how effectively a goal is being achieved.', example: 'Our primary KPI for this campaign is a 15% increase in website traffic.', usageNote: 'Always specify what the KPI measures and its target value.' },
            { word: 'Deliverable', partOfSpeech: 'noun', definition: 'A tangible output or product created as part of a project or campaign.', example: 'The deliverables include three social media videos and a landing page.', usageNote: 'Clearly define deliverables at the start of any project.' },
        ],
        reading: {
            title: 'The Campaign Briefing',
            content: `Marketing Director Yuki Nakamura gathered her team for the briefing of a new product launch campaign at Meridian Brands.

"Let me walk you through the creative brief," Yuki began. "Our **target audience** is health-conscious millennials in Southeast Asia. We need to understand their habits, preferences, and media consumption."

She displayed the brief on screen. "The **key message** is simple: 'Pure nutrition, zero compromise.' Everything we create should reinforce this."

"What about the **tone of voice**?" asked copywriter Leo Santos.

"Great question. We want confident but not preachy. Think aspirational and authentic — people should feel inspired, not lectured."

Yuki moved to the metrics slide. "Our **KPIs** are clear: 20% increase in brand awareness, 50,000 landing page visits, and a 5% conversion rate within the first month."

"And the **deliverables**?" asked the design lead.

"We need a hero video, six social media assets, one landing page, and an email sequence. Creative concepts are due in two weeks."

The team left the briefing energised and aligned.`,
        },
        comprehension: [
            { question: 'Who is the target audience for the campaign?', type: 'multiple-choice', options: ['Senior executives', 'Health-conscious millennials in Southeast Asia', 'European teenagers', 'Global investors'], answer: 'Health-conscious millennials in Southeast Asia' },
            { question: 'What is the campaign\'s key message?', type: 'multiple-choice', options: ['Buy more, save more', 'Pure nutrition, zero compromise', 'Innovation for everyone', 'Taste the difference'], answer: 'Pure nutrition, zero compromise' },
            { question: 'What tone of voice does Yuki want?', type: 'multiple-choice', options: ['Formal and academic', 'Confident but not preachy', 'Humorous and casual', 'Technical and detailed'], answer: 'Confident but not preachy' },
            { question: 'What is NOT one of the deliverables?', type: 'multiple-choice', options: ['Hero video', 'TV commercial', 'Landing page', 'Email sequence'], answer: 'TV commercial' },
        ],
        discussion: [
            'What makes a creative brief effective?',
            'How do you adapt your tone of voice for different markets or audiences?',
            'Why is it important to define KPIs before launching a campaign?',
            'Describe a campaign you worked on and the challenges you faced communicating the key message.',
        ],
        grammar: {
            title: 'Imperative Structures for Briefs & Action Items',
            explanation: 'In marketing briefs, we often use imperative structures to give clear direction: "Ensure...", "Focus on...", "Avoid...".',
            examples: [
                'Ensure all assets reinforce the key message.',
                'Focus on authentic storytelling rather than hard selling.',
                'Avoid using jargon that the target audience won\'t understand.',
                'Include a clear call to action on every deliverable.',
            ],
        },
        sentenceFrames: [
            { frame: 'Our target audience is [demographic] in [region/market].', example: 'Our target audience is health-conscious millennials in Southeast Asia.' },
            { frame: 'The key message is: "[message]."', example: 'The key message is: "Pure nutrition, zero compromise."' },
            { frame: 'Our KPIs are [metric 1], [metric 2], and [metric 3].', example: 'Our KPIs are 20% brand awareness increase, 50,000 page visits, and 5% conversion.' },
            { frame: 'The deliverables include [item 1], [item 2], and [item 3].', example: 'The deliverables include a hero video, social media assets, and a landing page.' },
        ],
    },
};

export const teachersData: ProfessionData = {
    slug: 'teachers',
    title: 'ESL Lessons for Teachers',
    profession: 'Teachers',
    metaTitle: 'ESL Lessons for Teachers & Educators | Academic English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for teachers. Master classroom management, parent conferences & academic presentations. Native British coach.',
    h1: 'Professional English Lessons for Teachers',
    targetKeyword: 'ESL lessons for teachers',
    heroSubtitle: 'Lead classrooms, engage parents, and present at conferences with confidence',
    benefits: [
        'Deliver engaging lessons with natural, fluent English',
        'Communicate effectively with parents from diverse backgrounds',
        'Write clear reports, assessments, and feedback',
        'Present at academic conferences and professional development events',
    ],
    commonChallenges: [
        'Explaining complex academic concepts in accessible English',
        'Conducting parent-teacher conferences sensitively',
        'Writing detailed student reports and IEP documentation',
        'Participating in staff meetings and professional development',
    ],
    curriculum: [
        {
            phase: 1, title: 'Classroom Communication', subtitle: 'Lessons 1-5',
            description: 'Master the language for effective teaching, instruction, and student engagement.',
            lessons: [
                { title: 'Giving Clear Instructions', vocabulary: ['Objective', 'Task', 'Step-by-step', 'Expectation', 'Check for understanding'] },
                { title: 'Questioning Techniques', vocabulary: ['Open-ended', 'Prompt', 'Scaffold', 'Higher-order thinking', 'Wait time'] },
                { title: 'Providing Feedback', vocabulary: ['Constructive', 'Specific', 'Growth mindset', 'Praise', 'Next steps'] },
                { title: 'Managing Classroom Behaviour', vocabulary: ['Behaviour management', 'Consequence', 'Positive reinforcement', 'Redirection', 'Expectations'] },
                { title: 'Differentiated Instruction', vocabulary: ['Differentiation', 'Scaffolding', 'Extension', 'Accommodation', 'Learning style'] },
            ],
        },
        {
            phase: 2, title: 'Parent & Community Communication', subtitle: 'Lessons 6-10',
            description: 'Build strong relationships with parents and the school community.',
            lessons: [
                { title: 'Parent-Teacher Conferences', vocabulary: ['Progress', 'Concern', 'Goal', 'Partnership', 'Action plan'] },
                { title: 'Writing Student Reports', vocabulary: ['Achievement', 'Area for improvement', 'Effort', 'Attitude', 'Recommendation'] },
                { title: 'Sensitive Conversations with Parents', vocabulary: ['Empathy', 'Observation', 'Support', 'Referral', 'Confidentiality'] },
                { title: 'School Newsletters & Updates', vocabulary: ['Update', 'Reminder', 'Upcoming', 'Volunteer', 'Community'] },
                { title: 'IEP & Special Needs Discussions', vocabulary: ['IEP', 'Accommodation', 'Modification', 'Assessment', 'Goal-setting'] },
            ],
        },
        {
            phase: 3, title: 'Academic Writing & Documentation', subtitle: 'Lessons 11-15',
            description: 'Write professional academic documents, lesson plans, and assessments.',
            lessons: [
                { title: 'Lesson Planning Language', vocabulary: ['Learning outcome', 'Assessment criteria', 'Resource', 'Activity', 'Plenary'] },
                { title: 'Curriculum Development', vocabulary: ['Scope and sequence', 'Standard', 'Benchmark', 'Alignment', 'Framework'] },
                { title: 'Assessment Design', vocabulary: ['Rubric', 'Formative', 'Summative', 'Criterion', 'Validity'] },
                { title: 'Research & Academic Writing', vocabulary: ['Literature review', 'Methodology', 'Findings', 'Implication', 'Citation'] },
                { title: 'Grant & Proposal Writing', vocabulary: ['Proposal', 'Objective', 'Budget', 'Impact', 'Sustainability'] },
            ],
        },
        {
            phase: 4, title: 'Professional Development', subtitle: 'Lessons 16-20',
            description: 'Participate in and lead professional learning for educators.',
            lessons: [
                { title: 'Staff Meeting Participation', vocabulary: ['Agenda', 'Motion', 'Consensus', 'Action item', 'Minutes'] },
                { title: 'Presenting at Workshops', vocabulary: ['Workshop', 'Facilitator', 'Interactive', 'Handout', 'Takeaway'] },
                { title: 'Peer Observation & Feedback', vocabulary: ['Observation', 'Debrief', 'Reflection', 'Best practice', 'Collaborative'] },
                { title: 'Mentoring New Teachers', vocabulary: ['Mentor', 'Induction', 'Support', 'Modelling', 'Professional growth'] },
                { title: 'Conference Presentations', vocabulary: ['Abstract', 'Poster session', 'Panel', 'Q&A', 'Keynote'] },
            ],
        },
        {
            phase: 5, title: 'Leadership & Innovation', subtitle: 'Lessons 21-25',
            description: 'Develop leadership skills and embrace innovation in education.',
            lessons: [
                { title: 'Educational Leadership', vocabulary: ['Vision', 'Culture', 'Accountability', 'Data-driven', 'Stakeholder'] },
                { title: 'Technology in Education', vocabulary: ['EdTech', 'Blended learning', 'LMS', 'Digital literacy', 'Flipped classroom'] },
                { title: 'Inclusive Education', vocabulary: ['Equity', 'Access', 'Diversity', 'Belonging', 'Universal design'] },
                { title: 'Social-Emotional Learning', vocabulary: ['SEL', 'Self-regulation', 'Empathy', 'Resilience', 'Well-being'] },
                { title: 'Future of Education', vocabulary: ['Competency-based', 'Personalised learning', 'AI in education', 'Global citizenship', 'Lifelong learning'] },
            ],
        },
    ],
    firstLesson: {
        title: 'Giving Clear Classroom Instructions',
        vocabulary: [
            { word: 'Scaffold', partOfSpeech: 'verb/noun', definition: 'To provide temporary support structures that help students achieve understanding before gradually removing the support.', example: 'I scaffold the writing task by giving sentence starters first.', usageNote: 'Key concept in education — refers to any form of structured support.' },
            { word: 'Check for understanding', partOfSpeech: 'verb phrase', definition: 'To verify that students have understood the instruction or concept before proceeding.', example: 'Before moving on, let me check for understanding — can someone explain back what we need to do?', usageNote: 'Essential formative assessment strategy.' },
            { word: 'Objective', partOfSpeech: 'noun', definition: 'A specific, measurable learning goal that students should achieve by the end of a lesson.', example: 'Today\'s objective is to identify the main idea in a non-fiction text.', usageNote: 'Also called "learning objective" or "learning outcome".' },
            { word: 'Differentiation', partOfSpeech: 'noun', definition: 'The practice of modifying instruction to meet the individual needs of different learners.', example: 'Through differentiation, I provide three versions of the worksheet at different difficulty levels.', usageNote: 'Central to inclusive teaching practice.' },
            { word: 'Formative assessment', partOfSpeech: 'noun phrase', definition: 'Ongoing assessment during the learning process used to monitor student progress and adjust instruction.', example: 'Exit tickets are a quick formative assessment I use at the end of every lesson.', usageNote: 'Contrasted with "summative assessment" (end-of-unit tests).' },
        ],
        reading: {
            title: 'A Model Lesson',
            content: `Ms. Reyes was about to begin her Year 8 English lesson. She displayed the **objective** on the board: "By the end of today's lesson, you will be able to identify and explain the author's purpose in a news article."

"Good morning, everyone. Let's look at today's **objective** together," she said, pointing to the board. "Can someone read it aloud for us?"

After a student read it, Ms. Reyes moved to the activity. "We're going to read a short article and answer three questions. But first, I want to **scaffold** this for you." She distributed a graphic organiser. "Use this to note the author's main argument, the evidence they use, and their purpose."

Halfway through, she paused. "Let me **check for understanding**. Give me a thumbs up if you're clear on what 'author's purpose' means, or a thumbs down if you'd like more explanation."

Most thumbs went up, but two students looked uncertain. Ms. Reyes walked over to support them individually — this was **differentiation** in action, adjusting her approach for different learners.

Near the end of the lesson, she handed out exit tickets — a quick **formative assessment** — asking students to write one sentence explaining the author's purpose. This helped her see who had met the objective and who might need additional support tomorrow.`,
        },
        comprehension: [
            { question: 'What was the lesson objective?', type: 'multiple-choice', options: ['Write a news article', 'Identify the author\'s purpose', 'Learn new vocabulary', 'Present to the class'], answer: 'Identify the author\'s purpose' },
            { question: 'How did Ms. Reyes scaffold the activity?', type: 'multiple-choice', options: ['She gave the answers', 'She distributed a graphic organiser', 'She read the article aloud', 'She paired students'], answer: 'She distributed a graphic organiser' },
            { question: 'What technique did she use to check for understanding?', type: 'multiple-choice', options: ['A written test', 'Thumbs up/down', 'Homework review', 'Group discussion'], answer: 'Thumbs up/down' },
            { question: 'What was the formative assessment used?', type: 'multiple-choice', options: ['A final exam', 'Exit tickets', 'Peer grading', 'An oral quiz'], answer: 'Exit tickets' },
        ],
        discussion: [
            'What strategies do you use to check for understanding in your classroom?',
            'How do you differentiate instruction for students at different levels?',
            'Why is scaffolding important, and when should you remove the scaffold?',
            'Describe a lesson where a formative assessment changed your teaching approach.',
        ],
        grammar: {
            title: 'Imperatives & Sequencing for Instructions',
            explanation: 'Teachers use imperative verbs and sequencing words to give clear, step-by-step instructions: "First, read... Then, highlight... Finally, discuss..."',
            examples: [
                'First, read the article silently.',
                'Then, use the graphic organiser to note your observations.',
                'Next, discuss your findings with your partner.',
                'Finally, write your response on the exit ticket.',
            ],
        },
        sentenceFrames: [
            { frame: 'Today\'s objective is to [learning goal].', example: 'Today\'s objective is to identify and explain the author\'s purpose.' },
            { frame: 'Let me check for understanding — [question or prompt].', example: 'Let me check for understanding — can someone explain what we need to do?' },
            { frame: 'I\'m going to scaffold this by [support strategy].', example: 'I\'m going to scaffold this by giving you a graphic organiser.' },
            { frame: 'This [assessment type] will help me see [what you\'re measuring].', example: 'This exit ticket will help me see who understood the author\'s purpose.' },
        ],
    },
};

export const hrProfessionalsData: ProfessionData = {
    slug: 'hr-professionals',
    title: 'ESL Lessons for HR Professionals',
    profession: 'HR Professionals',
    metaTitle: 'ESL Lessons for HR Professionals | Workplace English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for HR professionals. Master recruitment interviews, policy communication & employee relations. Native British coach.',
    h1: 'Professional English Lessons for HR Professionals',
    targetKeyword: 'ESL lessons for HR professionals',
    heroSubtitle: 'Lead recruitment, employee relations, and workplace communication with confidence',
    benefits: [
        'Conduct professional recruitment interviews',
        'Communicate policies and procedures clearly',
        'Handle sensitive employee conversations with empathy',
        'Present HR strategies to leadership effectively',
    ],
    commonChallenges: [
        'Conducting interviews and assessing candidates in English',
        'Writing clear job descriptions and policy documents',
        'Managing performance review conversations diplomatically',
        'Presenting diversity and inclusion initiatives to leadership',
    ],
    curriculum: [
        {
            phase: 1, title: 'Recruitment & Talent Acquisition', subtitle: 'Lessons 1-5',
            description: 'Master the language for attracting, interviewing, and selecting top talent.',
            lessons: [
                { title: 'Writing Job Descriptions', vocabulary: ['Qualification', 'Responsibility', 'Requirement', 'Competency', 'Compensation'] },
                { title: 'Conducting Interviews', vocabulary: ['Behavioural question', 'Scenario', 'Fit', 'Probe', 'Assessment'] },
                { title: 'Reference Checks', vocabulary: ['Verify', 'Character', 'Performance', 'Recommendation', 'Confidential'] },
                { title: 'Making Offers & Negotiating', vocabulary: ['Package', 'Benefits', 'Start date', 'Counter-offer', 'Acceptance'] },
                { title: 'Onboarding Communication', vocabulary: ['Induction', 'Orientation', 'Handbook', 'Probation', 'Integration'] },
            ],
        },
        {
            phase: 2, title: 'Employee Relations', subtitle: 'Lessons 6-10',
            description: 'Navigate workplace relationships and handle sensitive situations professionally.',
            lessons: [
                { title: 'Performance Reviews', vocabulary: ['Appraisal', 'Objective', 'Rating', 'Development plan', 'Feedback'] },
                { title: 'Handling Grievances', vocabulary: ['Grievance', 'Investigation', 'Hearing', 'Resolution', 'Appeal'] },
                { title: 'Disciplinary Procedures', vocabulary: ['Warning', 'Misconduct', 'Gross misconduct', 'Suspension', 'Dismissal'] },
                { title: 'Conflict Mediation', vocabulary: ['Mediation', 'Impartial', 'Resolution', 'Agreement', 'Confidentiality'] },
                { title: 'Exit Interviews', vocabulary: ['Retention', 'Reason for leaving', 'Feedback', 'Transition', 'Knowledge transfer'] },
            ],
        },
        {
            phase: 3, title: 'Policy & Compliance', subtitle: 'Lessons 11-15',
            description: 'Write and communicate workplace policies, procedures, and legal requirements.',
            lessons: [
                { title: 'Writing HR Policies', vocabulary: ['Policy', 'Procedure', 'Guideline', 'Compliance', 'Implementation'] },
                { title: 'Employment Law Basics', vocabulary: ['Statute', 'Regulation', 'Discrimination', 'Equality', 'Tribunal'] },
                { title: 'Health & Safety Communication', vocabulary: ['Risk assessment', 'Protocol', 'Incident', 'Reporting', 'Training'] },
                { title: 'Data Protection & Privacy', vocabulary: ['GDPR', 'Consent', 'Processing', 'Breach', 'Data subject'] },
                { title: 'Diversity & Inclusion Initiatives', vocabulary: ['Inclusion', 'Equity', 'Representation', 'Unconscious bias', 'Belonging'] },
            ],
        },
        {
            phase: 4, title: 'Training & Development', subtitle: 'Lessons 16-20',
            description: 'Design and deliver training programmes and professional development.',
            lessons: [
                { title: 'Training Needs Analysis', vocabulary: ['Gap', 'Competency', 'Assessment', 'Benchmark', 'Priority'] },
                { title: 'Facilitating Workshops', vocabulary: ['Facilitator', 'Icebreaker', 'Group activity', 'Debrief', 'Takeaway'] },
                { title: 'Coaching Conversations', vocabulary: ['Coaching', 'Reflection', 'Goal-setting', 'Accountability', 'Progress'] },
                { title: 'Succession Planning', vocabulary: ['Pipeline', 'High-potential', 'Readiness', 'Development', 'Transition'] },
                { title: 'Measuring Training ROI', vocabulary: ['Evaluation', 'Impact', 'Metric', 'Kirkpatrick', 'Feedback'] },
            ],
        },
        {
            phase: 5, title: 'HR Strategy & Leadership', subtitle: 'Lessons 21-25',
            description: 'Lead HR strategy and present to senior leadership.',
            lessons: [
                { title: 'HR Strategy Presentations', vocabulary: ['Workforce planning', 'Talent strategy', 'Retention', 'Engagement', 'Culture'] },
                { title: 'Compensation & Benefits Strategy', vocabulary: ['Benchmarking', 'Total reward', 'Market rate', 'Incentive', 'Equity'] },
                { title: 'Organisational Change', vocabulary: ['Restructuring', 'Redundancy', 'Consultation', 'Communication plan', 'Morale'] },
                { title: 'HR Technology & Analytics', vocabulary: ['HRIS', 'People analytics', 'Dashboard', 'Automation', 'Insight'] },
                { title: 'Employee Wellbeing Programmes', vocabulary: ['Well-being', 'Mental health', 'Work-life balance', 'Burnout', 'Support'] },
            ],
        },
    ],
    firstLesson: {
        title: 'Conducting Effective Recruitment Interviews',
        vocabulary: [
            { word: 'Behavioural question', partOfSpeech: 'noun phrase', definition: 'An interview question that asks candidates to describe past experiences to predict future performance.', example: 'Tell me about a time when you had to resolve a conflict in your team.', usageNote: 'Often starts with "Tell me about a time when..." or "Give me an example of...".' },
            { word: 'Cultural fit', partOfSpeech: 'noun phrase', definition: 'How well a candidate\'s values, beliefs, and behaviour align with an organisation\'s culture.', example: 'Beyond skills, we assess cultural fit to ensure the candidate will thrive here.', usageNote: 'Increasingly replaced by "culture add" — what new perspectives a candidate brings.' },
            { word: 'Probation', partOfSpeech: 'noun', definition: 'A trial period at the start of employment during which the employee\'s suitability is assessed.', example: 'Your probation period is six months, during which we\'ll have regular check-ins.', usageNote: 'Also called "trial period" or "probationary period".' },
            { word: 'Compensation package', partOfSpeech: 'noun phrase', definition: 'The total value of pay and benefits offered to an employee.', example: 'The compensation package includes base salary, health insurance, and 25 days annual leave.', usageNote: 'Also called "total reward" or "remuneration package".' },
            { word: 'Onboarding', partOfSpeech: 'noun/verb', definition: 'The process of integrating a new employee into an organisation.', example: 'Our onboarding programme includes a buddy system and structured induction.', usageNote: 'Goes beyond "orientation" — covers the full integration period.' },
        ],
        reading: {
            title: 'The Interview That Made the Difference',
            content: `HR Manager Fatima Hassan was conducting the final interview for a senior project manager role at CoreTech Solutions. The candidate, Daniel Park, had an impressive CV, but Fatima knew that technical skills were only part of the picture.

"Daniel, thank you for coming in today. I'd like to start with a **behavioural question**. Tell me about a time when you had to manage a team through a significant change."

Daniel took a moment to think. "Last year, my team was restructured from 12 to 8 people. I held individual meetings with everyone, created a clear communication plan, and ensured workloads were redistributed fairly."

Fatima was impressed by his structured response. She then moved to assess **cultural fit**. "What kind of working environment brings out your best?"

"I thrive in collaborative settings where people challenge ideas respectfully," Daniel answered.

As the interview progressed, Fatima explained the next steps. "If we proceed, there's a six-month **probation** period with regular check-ins to support your transition."

Daniel nodded. "That sounds supportive. Could you tell me more about the **compensation package**?"

"Of course. It includes a competitive salary, private health insurance, 25 days annual leave, and a professional development budget."

Fatima concluded by describing the **onboarding** process. "We have a comprehensive onboarding programme that includes meeting your team, understanding our systems, and a dedicated buddy for your first month."

Daniel left feeling well-informed and excited — a sign that the interview process itself was working as it should.`,
        },
        comprehension: [
            { question: 'What type of question did Fatima start with?', type: 'multiple-choice', options: ['Technical question', 'Behavioural question', 'Trick question', 'Salary question'], answer: 'Behavioural question' },
            { question: 'How did Daniel handle the team restructuring?', type: 'multiple-choice', options: ['He ignored the problem', 'He held individual meetings and created a communication plan', 'He asked for more staff', 'He resigned'], answer: 'He held individual meetings and created a communication plan' },
            { question: 'How long is the probation period?', type: 'multiple-choice', options: ['Three months', 'Six months', 'One year', 'No probation'], answer: 'Six months' },
            { question: 'What is included in the onboarding programme?', type: 'multiple-choice', options: ['Only HR paperwork', 'Team meetings, systems training, and a buddy', 'Just a welcome email', 'A test'], answer: 'Team meetings, systems training, and a buddy' },
        ],
        discussion: [
            'What makes a behavioural interview question more effective than a traditional one?',
            'How do you assess cultural fit without introducing bias into the process?',
            'Why is a structured onboarding programme important for retention?',
            'Describe how you would handle a candidate who asks about salary early in the interview.',
        ],
        grammar: {
            title: 'Conditional Structures for Interview Scenarios',
            explanation: 'In HR interviews, we use conditional structures to discuss hypothetical and past situations. Second conditional for hypotheticals, mixed conditional for past-to-present connections.',
            examples: [
                'If you were faced with a conflict between two team members, how would you handle it?',
                'If we offered you the role, when could you start?',
                'If you had managed that project differently, what would you have changed?',
                'What would you do if a team member consistently missed deadlines?',
            ],
        },
        sentenceFrames: [
            { frame: 'Tell me about a time when you [situation].', example: 'Tell me about a time when you had to manage a team through significant change.' },
            { frame: 'The compensation package includes [benefit 1], [benefit 2], and [benefit 3].', example: 'The compensation package includes base salary, health insurance, and 25 days annual leave.' },
            { frame: 'Our onboarding programme includes [element 1], [element 2], and [element 3].', example: 'Our onboarding programme includes meeting your team, systems training, and a dedicated buddy.' },
            { frame: 'There is a [duration] probation period with [support structure].', example: 'There is a six-month probation period with regular check-ins to support your transition.' },
        ],
    },
};

export const architectsData: ProfessionData = {
    slug: 'architects',
    title: 'ESL Lessons for Architects',
    profession: 'Architects',
    metaTitle: 'ESL Lessons for Architects | Design English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for architects. Master design presentations, client briefs & planning meetings. Native British coach.',
    h1: 'Professional English Lessons for Architects',
    targetKeyword: 'ESL lessons for architects',
    heroSubtitle: 'Present designs, communicate with clients, and lead projects with clarity',
    benefits: [
        'Present architectural designs persuasively to clients',
        'Write clear project briefs and design rationales',
        'Collaborate with engineers and contractors effectively',
        'Navigate planning meetings and regulatory discussions',
    ],
    commonChallenges: [
        'Describing design concepts and spatial relationships in English',
        'Presenting to non-technical clients and planning committees',
        'Writing clear specifications and project documentation',
        'Discussing budgets and timelines with contractors',
    ],
    curriculum: [
        {
            phase: 1, title: 'Design Communication', subtitle: 'Lessons 1-5',
            description: 'Master the language for presenting and discussing architectural designs.',
            lessons: [
                { title: 'Presenting Design Concepts', vocabulary: ['Concept', 'Elevation', 'Massing', 'Aesthetic', 'Context'] },
                { title: 'Describing Spatial Design', vocabulary: ['Circulation', 'Threshold', 'Proportion', 'Scale', 'Orientation'] },
                { title: 'Materials & Finishes Discussions', vocabulary: ['Cladding', 'Facade', 'Timber', 'Render', 'Glazing'] },
                { title: 'Sustainability in Design', vocabulary: ['Passive design', 'BREEAM', 'Carbon footprint', 'Daylighting', 'Thermal mass'] },
                { title: 'Design Reviews & Critiques', vocabulary: ['Critique', 'Iteration', 'Refinement', 'Rationale', 'Precedent'] },
            ],
        },
        {
            phase: 2, title: 'Client & Stakeholder Relations', subtitle: 'Lessons 6-10',
            description: 'Build strong relationships and manage expectations with clients and stakeholders.',
            lessons: [
                { title: 'Client Briefing Sessions', vocabulary: ['Brief', 'Aspiration', 'Requirement', 'Constraint', 'Budget'] },
                { title: 'Presenting to Planning Committees', vocabulary: ['Planning permission', 'Objection', 'Compliance', 'Heritage', 'Visual impact'] },
                { title: 'Managing Client Expectations', vocabulary: ['Value engineering', 'Phase', 'Compromise', 'Priority', 'Trade-off'] },
                { title: 'Community Engagement', vocabulary: ['Consultation', 'Feedback', 'Public hearing', 'Stakeholder', 'Engagement'] },
                { title: 'Fee Proposals & Contracts', vocabulary: ['Fee', 'Stage', 'Scope of work', 'Variation', 'Payment schedule'] },
            ],
        },
        {
            phase: 3, title: 'Technical Documentation', subtitle: 'Lessons 11-15',
            description: 'Write professional technical documents, specifications, and reports.',
            lessons: [
                { title: 'Writing Design Statements', vocabulary: ['Narrative', 'Vision', 'Character', 'Response', 'Integration'] },
                { title: 'Specification Writing', vocabulary: ['Specification', 'Performance', 'Standard', 'Tolerance', 'Compliance'] },
                { title: 'Building Regulations', vocabulary: ['Part B', 'Fire safety', 'Access', 'Structural', 'Approved document'] },
                { title: 'Tender Documentation', vocabulary: ['Tender', 'Bill of quantities', 'Schedule', 'Contractor', 'Submission'] },
                { title: 'Site Reports & Meeting Minutes', vocabulary: ['Progress', 'Defect', 'Snag list', 'Practical completion', 'Instruction'] },
            ],
        },
        {
            phase: 4, title: 'Project Delivery', subtitle: 'Lessons 16-20',
            description: 'Lead construction phase communication and project delivery.',
            lessons: [
                { title: 'Site Meetings', vocabulary: ['Programme', 'Delay', 'Extension of time', 'Variation order', 'Progress report'] },
                { title: 'Contractor Coordination', vocabulary: ['Subcontractor', 'Coordination', 'Interface', 'Method statement', 'Schedule'] },
                { title: 'Quality Control Discussions', vocabulary: ['Sample', 'Mock-up', 'Approval', 'Workmanship', 'Standard'] },
                { title: 'Health & Safety on Site', vocabulary: ['CDM', 'Risk', 'PPE', 'Method statement', 'Induction'] },
                { title: 'Handover & Post-Occupancy', vocabulary: ['Handover', 'Defects liability', 'O&M manual', 'Post-occupancy', 'Feedback'] },
            ],
        },
        {
            phase: 5, title: 'Career & Industry Leadership', subtitle: 'Lessons 21-25',
            description: 'Advance your architecture career and engage with the profession.',
            lessons: [
                { title: 'Competition Entries', vocabulary: ['Submission', 'Brief', 'Jury', 'Shortlist', 'Concept'] },
                { title: 'Publishing & Writing', vocabulary: ['Journal', 'Essay', 'Portfolio', 'Publication', 'Peer review'] },
                { title: 'Lectures & Public Speaking', vocabulary: ['Lecture', 'Studio', 'Critic', 'Keynote', 'Q&A'] },
                { title: 'Practice Management', vocabulary: ['Associate', 'Director', 'Fee income', 'Pipeline', 'Business development'] },
                { title: 'Future of Architecture', vocabulary: ['Parametric', 'BIM', 'Digital twin', 'Modular', 'Net zero'] },
            ],
        },
    ],
    firstLesson: {
        title: 'Presenting a Design Concept',
        vocabulary: [
            { word: 'Massing', partOfSpeech: 'noun', definition: 'The overall shape, size, and form of a building as a three-dimensional volume.', example: 'The massing of the building responds to the scale of the surrounding neighbourhood.', usageNote: 'Fundamental concept in architectural design discussions.' },
            { word: 'Elevation', partOfSpeech: 'noun', definition: 'A flat, scaled drawing of the front, side, or rear face of a building.', example: 'The north elevation features full-height glazing to maximise natural light.', usageNote: 'Different from a "section" (cut through the building) or "plan" (viewed from above).' },
            { word: 'Context', partOfSpeech: 'noun', definition: 'The physical, historical, and cultural surroundings that influence architectural design.', example: 'Our design responds to the urban context by aligning with the existing street frontage.', usageNote: 'A contextual design "fits in" with its surroundings.' },
            { word: 'Facade', partOfSpeech: 'noun', definition: 'The exterior face of a building, especially the front.', example: 'The facade combines brick at ground level with zinc cladding above.', usageNote: 'Pronounced "fuh-SAHD". Critical in discussions about building appearance.' },
            { word: 'Brief', partOfSpeech: 'noun', definition: 'A document outlining the client\'s requirements, aspirations, and constraints for a project.', example: 'The brief calls for a mixed-use development with retail at ground level and residential above.', usageNote: 'The starting point of every architectural project.' },
        ],
        reading: {
            title: 'The Design Review',
            content: `Architect Lena Johansson stood before her clients and the design panel, ready to present the concept for a new community library in South London.

"Good morning, everyone. I'd like to present our design concept for the Riverside Library." She displayed the first slide showing a 3D model. "As you can see, the **massing** is deliberately low and horizontal, responding to the residential scale of the surrounding streets."

She moved to the next image. "This is the south **elevation**. We've designed a generous entrance canopy that creates a welcoming threshold between the street and the interior."

A panel member asked, "How does the building relate to the park?"

"Great question. The **context** was central to our approach," Lena explained. "The building opens towards the park with floor-to-ceiling windows, creating a visual connection between the reading rooms and the green space."

"And the materials?" the client asked.

Lena showed the material palette. "The **facade** uses a combination of hand-laid brick — to echo the Victorian terraces nearby — and Corten steel panels that will patina naturally over time."

The planning officer then asked, "Does this align with the original **brief**?"

"Absolutely," Lena confirmed. "The **brief** asked for flexible community spaces, a children's library, and a café. We've delivered all three while staying within the construction budget."

The presentation concluded with enthusiastic questions from the panel — a sign that clear design communication had done its job.`,
        },
        comprehension: [
            { question: 'Why was the massing kept low and horizontal?', type: 'multiple-choice', options: ['To save money', 'To respond to the residential scale', 'To add more floors later', 'To block the view'], answer: 'To respond to the residential scale' },
            { question: 'What does the south elevation feature?', type: 'multiple-choice', options: ['A car park', 'A generous entrance canopy', 'Solar panels', 'A rooftop garden'], answer: 'A generous entrance canopy' },
            { question: 'How does the building respond to the park context?', type: 'multiple-choice', options: ['It turns away from it', 'It opens towards it with large windows', 'It blocks the view', 'It has no connection'], answer: 'It opens towards it with large windows' },
            { question: 'What materials are used on the facade?', type: 'multiple-choice', options: ['Glass and concrete', 'Brick and Corten steel', 'Timber only', 'Stone'], answer: 'Brick and Corten steel' },
        ],
        discussion: [
            'How do you explain complex design concepts to clients who are not architects?',
            'Why is responding to context important in architectural design?',
            'How do you handle criticism during a design review?',
            'Describe a project where the brief changed significantly and how you communicated the impact.',
        ],
        grammar: {
            title: 'Present Simple for Describing Design Intent',
            explanation: 'Architects use Present Simple to describe what a building does or achieves — treating the design as a living entity that performs actions.',
            examples: [
                'The building opens towards the park.',
                'The facade responds to the Victorian context.',
                'Natural light floods the interior through clerestory windows.',
                'The entrance canopy creates a welcoming threshold.',
            ],
        },
        sentenceFrames: [
            { frame: 'The massing responds to [context element] by [design response].', example: 'The massing responds to the residential scale by remaining low and horizontal.' },
            { frame: 'The [elevation/facade] features [design element] to [purpose].', example: 'The south elevation features floor-to-ceiling glazing to maximise natural light.' },
            { frame: 'Our design responds to the context by [design decision].', example: 'Our design responds to the context by aligning with the existing street frontage.' },
            { frame: 'The brief calls for [requirement], which we deliver through [solution].', example: 'The brief calls for flexible community spaces, which we deliver through movable partition walls.' },
        ],
    },
};

export const pharmacistsData: ProfessionData = {
    slug: 'pharmacists',
    title: 'ESL Lessons for Pharmacists',
    profession: 'Pharmacists',
    metaTitle: 'ESL Lessons for Pharmacists | Pharmaceutical English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for pharmacists. Master patient counselling, medication advice & clinical communication. Native British coach.',
    h1: 'Professional English Lessons for Pharmacists',
    targetKeyword: 'ESL lessons for pharmacists',
    heroSubtitle: 'Counsel patients, explain medications, and collaborate with healthcare teams with precision',
    benefits: [
        'Counsel patients on medications clearly and safely',
        'Collaborate with doctors and healthcare teams effectively',
        'Write accurate clinical reports and documentation',
        'Present at pharmacy conferences and training events',
    ],
    commonChallenges: [
        'Explaining complex medication instructions in simple language',
        'Advising patients with varied health literacy levels',
        'Discussing drug interactions and contraindications with prescribers',
        'Writing clinical documentation and adverse reaction reports',
    ],
    curriculum: [
        {
            phase: 1, title: 'Patient Counselling', subtitle: 'Lessons 1-5',
            description: 'Master the language for advising patients on medication use and health.',
            lessons: [
                { title: 'Dispensing & Medication Counselling', vocabulary: ['Dosage', 'Frequency', 'Side effect', 'Interaction', 'Adherence'] },
                { title: 'Explaining Prescriptions', vocabulary: ['Prescribed', 'Over-the-counter', 'Generic', 'Brand name', 'Refill'] },
                { title: 'Managing Patient Expectations', vocabulary: ['Onset', 'Duration', 'Expected outcome', 'Follow-up', 'Monitoring'] },
                { title: 'Handling Sensitive Topics', vocabulary: ['Contraception', 'Mental health', 'Substance use', 'Confidentiality', 'Empathy'] },
                { title: 'Advising on Minor Ailments', vocabulary: ['Symptom', 'Referral', 'Self-care', 'Red flag', 'Recommendation'] },
            ],
        },
        {
            phase: 2, title: 'Clinical Communication', subtitle: 'Lessons 6-10',
            description: 'Communicate with prescribers and healthcare teams about clinical matters.',
            lessons: [
                { title: 'Querying Prescriptions', vocabulary: ['Query', 'Clarification', 'Dose check', 'Formulary', 'Amendment'] },
                { title: 'Drug Interaction Discussions', vocabulary: ['Interaction', 'Contraindication', 'Synergy', 'Potentiation', 'Monitoring'] },
                { title: 'Medication Reviews', vocabulary: ['Polypharmacy', 'Deprescribing', 'Optimisation', 'Compliance', 'Indication'] },
                { title: 'Multidisciplinary Team Communication', vocabulary: ['Handover', 'Care plan', 'Intervention', 'Recommendation', 'Collaboration'] },
                { title: 'Controlled Drug Procedures', vocabulary: ['Schedule', 'Register', 'Witness', 'Destruction', 'Accountability'] },
            ],
        },
        {
            phase: 3, title: 'Documentation & Compliance', subtitle: 'Lessons 11-15',
            description: 'Write accurate pharmaceutical documentation and maintain regulatory compliance.',
            lessons: [
                { title: 'Writing Clinical Notes', vocabulary: ['SOAP note', 'Assessment', 'Plan', 'Intervention', 'Outcome'] },
                { title: 'Adverse Reaction Reporting', vocabulary: ['Yellow Card', 'ADR', 'Causality', 'Severity', 'Report'] },
                { title: 'Standard Operating Procedures', vocabulary: ['SOP', 'Protocol', 'Audit', 'Deviation', 'Corrective action'] },
                { title: 'Regulatory Compliance', vocabulary: ['GPhC', 'Inspection', 'Registration', 'CPD', 'Fitness to practise'] },
                { title: 'Health Promotion Materials', vocabulary: ['Leaflet', 'Campaign', 'Awareness', 'Screening', 'Prevention'] },
            ],
        },
        {
            phase: 4, title: 'Pharmacy Management', subtitle: 'Lessons 16-20',
            description: 'Lead pharmacy teams and manage operations effectively.',
            lessons: [
                { title: 'Team Briefings', vocabulary: ['Rota', 'Workload', 'Priority', 'Delegation', 'Target'] },
                { title: 'Stock Management Discussions', vocabulary: ['Procurement', 'Supply chain', 'Shortage', 'Expiry', 'Formulary'] },
                { title: 'Customer Service Excellence', vocabulary: ['Complaint', 'Resolution', 'Satisfaction', 'Standard', 'Improvement'] },
                { title: 'Training Pharmacy Technicians', vocabulary: ['Supervision', 'Competency', 'Assessment', 'Feedback', 'Development'] },
                { title: 'Clinical Governance', vocabulary: ['Audit', 'Risk management', 'Incident', 'Learning', 'Improvement'] },
            ],
        },
        {
            phase: 5, title: 'Career Development & Specialisation', subtitle: 'Lessons 21-25',
            description: 'Advance your pharmacy career and specialise in areas of expertise.',
            lessons: [
                { title: 'Independent Prescribing', vocabulary: ['Prescribing', 'Scope of practice', 'Competency', 'Governance', 'Formulary'] },
                { title: 'Research & Publication', vocabulary: ['Abstract', 'Methodology', 'Clinical trial', 'Evidence-based', 'Peer review'] },
                { title: 'Conference Presentations', vocabulary: ['Poster', 'Oral presentation', 'Workshop', 'Networking', 'CPD'] },
                { title: 'Digital Health & Pharmacy', vocabulary: ['E-prescribing', 'Telehealth', 'App', 'Digital record', 'Remote consultation'] },
                { title: 'Interview & Career Progression', vocabulary: ['Portfolio', 'Reflection', 'Achievement', 'Specialisation', 'Leadership'] },
            ],
        },
    ],
    firstLesson: {
        title: 'Counselling a Patient on Their Medication',
        vocabulary: [
            { word: 'Dosage', partOfSpeech: 'noun', definition: 'The amount of a medication prescribed to be taken at one time or over a period.', example: 'The dosage is 500 milligrams, twice a day, after meals.', usageNote: 'Distinct from "dose" (a single amount) — dosage includes how often.' },
            { word: 'Side effect', partOfSpeech: 'noun phrase', definition: 'An unintended effect of a medication, which may be mild or serious.', example: 'A common side effect of this medication is drowsiness.', usageNote: 'Also called "adverse effect" when more serious.' },
            { word: 'Adherence', partOfSpeech: 'noun', definition: 'The extent to which a patient takes medication as prescribed.', example: 'Good adherence means taking the full course, even when you start feeling better.', usageNote: 'Preferred over "compliance" — emphasises patient choice rather than obedience.' },
            { word: 'Interaction', partOfSpeech: 'noun', definition: 'When two or more drugs affect each other\'s effectiveness or cause unexpected effects.', example: 'There is a known interaction between this antibiotic and blood-thinning medication.', usageNote: 'Always check for interactions when dispensing new medications.' },
            { word: 'Over-the-counter', partOfSpeech: 'adjective', definition: 'Available without a prescription from a doctor.', example: 'Ibuprofen is available over-the-counter for mild pain relief.', usageNote: 'Abbreviated as OTC. Contrasted with "prescription-only medicine" (POM).' },
        ],
        reading: {
            title: 'A Careful Consultation at the Counter',
            content: `Pharmacist Mei Lin was completing a prescription for Mrs. Abara, a 62-year-old patient who had been prescribed a new blood pressure medication.

"Mrs. Abara, I'd like to explain your new medication before you leave. The **dosage** is one tablet per day, taken in the morning with water."

"Is there anything I should watch for?" Mrs. Abara asked.

"Good question. A common **side effect** is dizziness, especially during the first few days. If it persists beyond a week, please come back and see us."

Mrs. Abara looked a bit worried. "I'm already taking a statin for cholesterol. Is it safe to take both?"

Mei Lin checked the system. "There's no significant **interaction** between these two medications, so you can take them at the same time. However, I'd recommend avoiding grapefruit juice, as it can interfere with the statin."

"I also have headaches sometimes — can I still take paracetamol?"

"Yes, paracetamol is fine. It's **over-the-counter** and safe to use alongside your other medications. Just avoid ibuprofen without checking with us first."

Mei Lin concluded with an important point about **adherence**. "Please make sure you take this medication every day, even if you feel well. Blood pressure medication works best with consistent use."

Mrs. Abara left the pharmacy feeling confident and well-informed — exactly the outcome of effective pharmaceutical communication.`,
        },
        comprehension: [
            { question: 'What is the dosage for the new medication?', type: 'multiple-choice', options: ['Twice daily', 'One tablet per day in the morning', 'Three times daily after meals', 'As needed'], answer: 'One tablet per day in the morning' },
            { question: 'What is a common side effect of the medication?', type: 'multiple-choice', options: ['Headache', 'Dizziness', 'Nausea', 'Rash'], answer: 'Dizziness' },
            { question: 'Why should Mrs. Abara avoid grapefruit juice?', type: 'multiple-choice', options: ['It causes dizziness', 'It interferes with the statin', 'It raises blood pressure', 'It is a side effect'], answer: 'It interferes with the statin' },
            { question: 'What does "adherence" mean in pharmacy?', type: 'multiple-choice', options: ['Taking medication only when ill', 'Taking medication as prescribed consistently', 'Changing medication frequently', 'Stopping medication early'], answer: 'Taking medication as prescribed consistently' },
        ],
        discussion: [
            'How do you explain side effects without alarming a patient?',
            'Why is the word "adherence" preferred over "compliance" in modern pharmacy?',
            'What strategies do you use to check a patient\'s understanding of their medication?',
            'Describe a time you identified a potential drug interaction during dispensing.',
        ],
        grammar: {
            title: 'Modal Verbs for Safety Advice',
            explanation: 'Pharmacists use modal verbs to give safety advice at different levels of urgency: "should" for recommendations, "must" for critical instructions, and "can" for permissions.',
            examples: [
                'You should take this medication with food to reduce stomach upset.',
                'You must complete the full course of antibiotics.',
                'You can take paracetamol alongside this safely.',
                'You should not drive until you know how this medication affects you.',
            ],
        },
        sentenceFrames: [
            { frame: 'The dosage is [amount], [frequency], [timing].', example: 'The dosage is one tablet per day, taken in the morning with water.' },
            { frame: 'A common side effect is [effect]. If it persists, [action].', example: 'A common side effect is dizziness. If it persists beyond a week, please come back.' },
            { frame: 'There is no significant interaction between [drug 1] and [drug 2].', example: 'There is no significant interaction between the blood pressure medication and your statin.' },
            { frame: 'Please make sure you [adherence instruction] because [reason].', example: 'Please make sure you take this every day because blood pressure medication works best with consistent use.' },
        ],
    },
};

export const accountantsData: ProfessionData = {
    slug: 'accountants',
    title: 'ESL Lessons for Accountants',
    profession: 'Accountants',
    metaTitle: 'ESL Lessons for Accountants | Financial English Coaching',
    metaDescription: 'Free diagnostic + AI-personalised English curriculum for accountants. Master financial reporting, client advisory & audit communication. Native British coach.',
    h1: 'Professional English Lessons for Accountants',
    targetKeyword: 'ESL lessons for accountants',
    heroSubtitle: 'Present financial reports, advise clients, and lead audit discussions with confidence',
    benefits: [
        'Present financial statements and reports clearly',
        'Advise clients on tax and compliance matters',
        'Communicate audit findings professionally',
        'Collaborate with international teams in global firms',
    ],
    commonChallenges: [
        'Explaining complex financial data to non-financial audiences',
        'Writing clear management letters and audit reports',
        'Discussing tax regulations and compliance requirements',
        'Presenting quarterly and annual results to stakeholders',
    ],
    curriculum: [
        {
            phase: 1, title: 'Financial Reporting & Analysis', subtitle: 'Lessons 1-5',
            description: 'Master the language for preparing and presenting financial reports.',
            lessons: [
                { title: 'Reading Financial Statements', vocabulary: ['Balance sheet', 'Income statement', 'Cash flow', 'Equity', 'Liability'] },
                { title: 'Variance Analysis', vocabulary: ['Variance', 'Budget', 'Actual', 'Favourable', 'Adverse'] },
                { title: 'Management Reporting', vocabulary: ['KPI', 'Dashboard', 'Trend', 'Forecast', 'Commentary'] },
                { title: 'Year-End Close Discussions', vocabulary: ['Accrual', 'Deferral', 'Provision', 'Reconciliation', 'Adjustment'] },
                { title: 'Presenting Results to Stakeholders', vocabulary: ['Revenue', 'Margin', 'Growth', 'Bottom line', 'Outlook'] },
            ],
        },
        {
            phase: 2, title: 'Tax & Compliance', subtitle: 'Lessons 6-10',
            description: 'Communicate tax requirements and compliance matters clearly.',
            lessons: [
                { title: 'Tax Advisory Conversations', vocabulary: ['Deduction', 'Allowance', 'Relief', 'Threshold', 'Exemption'] },
                { title: 'Corporate Tax Returns', vocabulary: ['Filing', 'Assessment', 'Self-assessment', 'Deadline', 'Penalty'] },
                { title: 'VAT & Indirect Tax', vocabulary: ['Input tax', 'Output tax', 'Registration', 'Return', 'De minimis'] },
                { title: 'Transfer Pricing', vocabulary: ['Arm\'s length', 'Related party', 'Documentation', 'Benchmark', 'Adjustment'] },
                { title: 'Regulatory Updates', vocabulary: ['Amendment', 'Legislation', 'Consultation', 'Impact', 'Implementation'] },
            ],
        },
        {
            phase: 3, title: 'Audit & Assurance', subtitle: 'Lessons 11-15',
            description: 'Lead audit engagements and communicate findings professionally.',
            lessons: [
                { title: 'Planning an Audit Engagement', vocabulary: ['Scope', 'Materiality', 'Risk assessment', 'Sampling', 'Planning'] },
                { title: 'Audit Fieldwork Communication', vocabulary: ['Vouching', 'Confirmation', 'Walkthrough', 'Testing', 'Exception'] },
                { title: 'Writing Audit Reports', vocabulary: ['Opinion', 'Qualified', 'Unqualified', 'Finding', 'Recommendation'] },
                { title: 'Management Letter Drafting', vocabulary: ['Weakness', 'Control', 'Observation', 'Management response', 'Priority'] },
                { title: 'Presenting Audit Findings', vocabulary: ['Significant', 'Material', 'Remediation', 'Timeline', 'Follow-up'] },
            ],
        },
        {
            phase: 4, title: 'Client Advisory', subtitle: 'Lessons 16-20',
            description: 'Provide expert advisory services and build strong client relationships.',
            lessons: [
                { title: 'Client Onboarding', vocabulary: ['Engagement letter', 'Fee quote', 'Terms', 'Scope', 'Anti-money laundering'] },
                { title: 'Business Advisory Meetings', vocabulary: ['Cash flow', 'Working capital', 'Projection', 'Scenario', 'Strategy'] },
                { title: 'Mergers & Acquisitions Support', vocabulary: ['Due diligence', 'Valuation', 'Synergy', 'Completion', 'Integration'] },
                { title: 'Forensic Accounting', vocabulary: ['Investigation', 'Fraud', 'Evidence', 'Tracing', 'Expert witness'] },
                { title: 'Restructuring & Insolvency', vocabulary: ['Administration', 'Liquidation', 'Creditor', 'Secured', 'Recovery'] },
            ],
        },
        {
            phase: 5, title: 'Career & Professional Growth', subtitle: 'Lessons 21-25',
            description: 'Advance your accounting career and engage with the profession.',
            lessons: [
                { title: 'Professional Exams & Qualifications', vocabulary: ['ACCA', 'ACA', 'CPA', 'Module', 'Exemption'] },
                { title: 'Practice Management', vocabulary: ['Partner', 'Fee income', 'Utilisation', 'Realisation', 'Business development'] },
                { title: 'Technology in Accounting', vocabulary: ['Cloud accounting', 'Automation', 'Data analytics', 'AI', 'ERP'] },
                { title: 'Sustainability Reporting', vocabulary: ['ESG', 'Carbon accounting', 'Assurance', 'Disclosure', 'Framework'] },
                { title: 'Leadership & Mentoring', vocabulary: ['Manager', 'Senior', 'Delegation', 'Review', 'Professional development'] },
            ],
        },
    ],
    firstLesson: {
        title: 'Presenting Financial Results',
        vocabulary: [
            { word: 'Revenue', partOfSpeech: 'noun', definition: 'The total income generated by a business from its normal operations before any expenses are deducted.', example: 'Revenue increased by 12% compared to the same quarter last year.', usageNote: 'Also called "turnover" in British English or "top line" informally.' },
            { word: 'Margin', partOfSpeech: 'noun', definition: 'The difference between revenue and costs, expressed as a percentage of revenue.', example: 'Our gross margin improved to 45%, up from 42% last year.', usageNote: 'Can be "gross margin" (after COGS), "operating margin" (after operating costs), or "net margin" (after everything).' },
            { word: 'Variance', partOfSpeech: 'noun', definition: 'The difference between a budgeted or expected amount and the actual amount.', example: 'There is a favourable variance of £50,000 in marketing spend.', usageNote: '"Favourable" = better than budget. "Adverse" = worse than budget.' },
            { word: 'Provision', partOfSpeech: 'noun', definition: 'An amount set aside in the accounts for a future liability or loss that is probable but uncertain in amount.', example: 'We have made a provision of £200,000 for potential bad debts.', usageNote: 'Required when a liability is probable and can be reasonably estimated.' },
            { word: 'Forecast', partOfSpeech: 'noun/verb', definition: 'A prediction of future financial performance based on current data and assumptions.', example: 'Our forecast for Q3 suggests continued revenue growth of 8%.', usageNote: 'Different from a "budget" (target) — a forecast reflects updated expectations.' },
        ],
        reading: {
            title: 'The Quarterly Review',
            content: `Senior Accountant Robert Nguyen was presenting the Q2 financial results to the management team at Greenline Manufacturing.

"Good morning, everyone. I'd like to walk you through our Q2 performance." He displayed the dashboard. "Starting with the top line, **revenue** came in at £4.2 million, which is 12% above the same period last year."

The CEO nodded. "What about profitability?"

"Our gross **margin** improved to 45%, up from 42% in Q1. This is largely due to better supplier negotiations and lower raw material costs."

Robert moved to the next slide. "Looking at the budget comparison, there is a favourable **variance** of £80,000 in operating costs, mainly from delayed recruitment in the marketing department."

"Are there any areas of concern?" asked the Finance Director.

"Yes, one thing to flag — we've made a **provision** of £120,000 for potential bad debts from two customers who are experiencing cash flow difficulties. This is a prudent measure based on our assessment."

The CEO asked about the outlook. "What does the rest of the year look like?"

"Our **forecast** for Q3 suggests continued growth, with revenue projected at £4.5 million. However, this assumes the new product line launches on schedule in August."

The meeting concluded with clear action items, demonstrating how confident, precise financial communication builds leadership credibility.`,
        },
        comprehension: [
            { question: 'What was Q2 revenue?', type: 'multiple-choice', options: ['£3.8 million', '£4.2 million', '£4.5 million', '£5.0 million'], answer: '£4.2 million' },
            { question: 'Why did the gross margin improve?', type: 'multiple-choice', options: ['Higher prices', 'Better supplier negotiations and lower costs', 'Reduced headcount', 'New product launch'], answer: 'Better supplier negotiations and lower costs' },
            { question: 'What was the favourable variance in operating costs?', type: 'multiple-choice', options: ['£50,000', '£80,000', '£120,000', '£200,000'], answer: '£80,000' },
            { question: 'Why was a provision made for bad debts?', type: 'multiple-choice', options: ['To hide profits', 'Customers are experiencing cash flow difficulties', 'Tax purposes', 'Legal requirement'], answer: 'Customers are experiencing cash flow difficulties' },
        ],
        discussion: [
            'How do you explain financial results to non-financial managers?',
            'Why is it important to highlight both favourable and adverse variances?',
            'What is the difference between a forecast and a budget?',
            'Describe how you would present a provision for bad debts to a worried board.',
        ],
        grammar: {
            title: 'Past Simple vs. Present Perfect for Financial Reporting',
            explanation: 'Use Past Simple for completed actions in a specific period ("Q2 revenue was £4.2M") and Present Perfect for ongoing relevance ("Revenue has grown 12% year-on-year").',
            examples: [
                'Revenue increased by 12% in Q2. (completed period)',
                'Revenue has grown consistently over the past three quarters. (ongoing trend)',
                'We made a provision of £120,000. (completed action)',
                'Costs have remained stable since January. (continuing to now)',
            ],
        },
        sentenceFrames: [
            { frame: 'Revenue came in at [amount], which is [percentage] above/below [comparison].', example: 'Revenue came in at £4.2 million, which is 12% above the same period last year.' },
            { frame: 'Our [type] margin improved to [percentage], up from [previous] in [period].', example: 'Our gross margin improved to 45%, up from 42% in Q1.' },
            { frame: 'There is a [favourable/adverse] variance of [amount] in [area].', example: 'There is a favourable variance of £80,000 in operating costs.' },
            { frame: 'We have made a provision of [amount] for [reason].', example: 'We have made a provision of £120,000 for potential bad debts.' },
        ],
    },
};

// Export all profession data
export const allProfessionData = [
    softwareEngineerData,
    nursesData,
    financeData,
    businessExecutivesData,
    engineersData,
    doctorsData,
    lawyersData,
    itProfessionalsData,
    hospitalityData,
    marketingData,
    teachersData,
    hrProfessionalsData,
    architectsData,
    pharmacistsData,
    accountantsData,
];
