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
    metaDescription: 'Master technical English for code reviews, sprint planning, and stakeholder communication. Customized 25-lesson curriculum for software engineers.',
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
    metaDescription: 'Master medical English for patient care, handoffs, and healthcare documentation. Customized 25-lesson curriculum for nursing professionals.',
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
    metaDescription: 'Master financial English for client presentations, market analysis, and professional communications. Customized curriculum for finance careers.',
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
    metaDescription: 'Master executive English for leadership, strategy meetings, and stakeholder management. Customized curriculum for senior business professionals.',
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
    metaDescription: 'Master technical English for project meetings, specifications, and engineering documentation. Customized curriculum for engineering professionals.',
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

// Export all profession data
export const allProfessionData = [
    softwareEngineerData,
    nursesData,
    financeData,
    businessExecutivesData,
    engineersData,
];
