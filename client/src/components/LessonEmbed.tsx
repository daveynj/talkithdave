import { useState } from "react";
import {
    BookOpen,
    FileText,
    CheckCircle,
    MessageCircle,
    Lightbulb,
    GraduationCap,
    Compass,
    Library,
    ChevronLeft,
    ChevronRight,
    AlignJustify
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { FullLessonData, VocabularyWord, ComprehensionQuestion, SentenceFrame } from "@/data/professionData";

interface LessonEmbedProps {
    lesson: FullLessonData;
}

// Reusable Section Header component matching PlanWise
function SectionHeader({
    icon: Icon,
    title,
    description,
    color
}: {
    icon: any;
    title: string;
    description?: string;
    color: string;
}) {
    const colorClasses: Record<string, { bg: string; icon: string; text: string }> = {
        blue: { bg: "bg-blue-50", icon: "text-blue-600", text: "text-blue-700" },
        purple: { bg: "bg-purple-50", icon: "text-purple-600", text: "text-purple-700" },
        green: { bg: "bg-green-50", icon: "text-green-600", text: "text-green-700" },
        orange: { bg: "bg-orange-50", icon: "text-orange-600", text: "text-orange-700" },
        indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", text: "text-indigo-700" },
        pink: { bg: "bg-pink-50", icon: "text-pink-600", text: "text-pink-700" },
    };
    const colors = colorClasses[color] || colorClasses.blue;

    return (
        <div className={`flex items-start gap-4 p-5 rounded-lg ${colors.bg} mb-6`}>
            <div className={`p-2 rounded-lg bg-white ${colors.icon}`}>
                <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
                <h3 className={`text-xl font-bold ${colors.text}`}>{title}</h3>
                {description && (
                    <p className="text-gray-600 mt-1 text-lg">{description}</p>
                )}
            </div>
        </div>
    );
}

// Overview Section - Warm-up Questions
function OverviewSection({ topic }: { topic: string }) {
    const warmupQuestions = [
        `What do you already know about ${topic.toLowerCase()}?`,
        "Have you encountered challenges related to this topic in your work?",
        "What specific vocabulary do you think might be useful for discussing this topic?"
    ];

    return (
        <div className="space-y-6 p-6">
            <SectionHeader
                icon={Lightbulb}
                title="Overview & Warm-up"
                description="Read each question below. Take 1-2 minutes per question to think about your answer and share it briefly."
                color="blue"
            />

            <Card className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
                <CardContent className="p-6">
                    <ul className="space-y-4">
                        {warmupQuestions.map((q, index) => (
                            <li key={index} className="flex items-start p-4 bg-blue-50 border border-blue-100 rounded-md shadow-sm">
                                <span className="flex-shrink-0 h-6 w-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                    {index + 1}
                                </span>
                                <p className="text-gray-700 leading-relaxed text-xl font-bold">{q}</p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}

// Vocabulary Section with flip-card style
function VocabularySection({ vocabulary }: { vocabulary: VocabularyWord[] }) {
    const [activeCard, setActiveCard] = useState(0);
    const currentWord = vocabulary[activeCard];

    const goToPrevWord = () => {
        if (activeCard > 0) setActiveCard(activeCard - 1);
    };

    const goToNextWord = () => {
        if (activeCard < vocabulary.length - 1) setActiveCard(activeCard + 1);
    };

    return (
        <div className="space-y-6 p-6">
            <SectionHeader
                icon={Library}
                title="Key Vocabulary"
                description="Learn these essential words and phrases for this topic."
                color="green"
            />

            {/* Progress indicator */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500">Word {activeCard + 1} of {vocabulary.length}</span>
                <div className="flex gap-1">
                    {vocabulary.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCard(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${idx === activeCard ? 'bg-green-500' : idx < activeCard ? 'bg-green-300' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Vocabulary Card */}
            <div className="bg-white rounded-lg border-2 border-green-200 overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-6">
                    <h2 className="text-3xl font-bold text-center">{currentWord.word}</h2>
                    <p className="text-center mt-2 text-green-100 italic">{currentWord.partOfSpeech}</p>
                </div>

                <div className="p-6 space-y-4">
                    {/* Definition */}
                    <div>
                        <h3 className="text-green-700 font-medium mb-2 flex items-center">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Definition:
                        </h3>
                        <div className="p-4 bg-green-50 rounded-md border border-green-100">
                            <p className="text-gray-800 text-xl font-bold">{currentWord.definition}</p>
                        </div>
                    </div>

                    {/* Example */}
                    <div>
                        <h3 className="text-blue-700 font-medium mb-2 flex items-center">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Example:
                        </h3>
                        <div className="p-4 bg-blue-50 rounded-md border border-blue-100">
                            <p className="italic text-gray-800 text-xl font-bold">"{currentWord.example}"</p>
                        </div>
                    </div>

                    {/* Usage Note if available */}
                    {currentWord.usageNote && (
                        <div>
                            <h3 className="text-purple-700 font-medium mb-2 flex items-center">
                                <Lightbulb className="h-4 w-4 mr-2" />
                                Usage Note:
                            </h3>
                            <div className="p-4 bg-purple-50 rounded-md border border-purple-100">
                                <p className="text-gray-800">{currentWord.usageNote}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
                <button
                    onClick={goToPrevWord}
                    disabled={activeCard === 0}
                    className="px-4 py-2 border border-green-200 rounded-md flex items-center text-green-700 hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                </button>

                <div className="text-green-700 font-medium">
                    {activeCard + 1} of {vocabulary.length}
                </div>

                <button
                    onClick={goToNextWord}
                    disabled={activeCard === vocabulary.length - 1}
                    className="px-4 py-2 border border-green-200 rounded-md flex items-center text-green-700 hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                </button>
            </div>
        </div>
    );
}

// Reading Section
function ReadingSection({ title, content }: { title: string; content: string }) {
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    const [activeParagraph, setActiveParagraph] = useState(0);

    return (
        <div className="space-y-6 p-6">
            <SectionHeader
                icon={BookOpen}
                title={title}
                description="Read the passage carefully and notice how the vocabulary words are used in context."
                color="blue"
            />

            <Card>
                <CardHeader className="bg-blue-50 border-b border-blue-100">
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                        <FileText className="h-5 w-5" />
                        Paragraph {activeParagraph + 1} of {paragraphs.length}
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <p className="text-xl leading-relaxed text-gray-800 whitespace-pre-line">
                        {paragraphs[activeParagraph]}
                    </p>
                </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center">
                <button
                    onClick={() => setActiveParagraph(p => Math.max(0, p - 1))}
                    disabled={activeParagraph === 0}
                    className="px-4 py-2 border border-blue-200 rounded-md flex items-center text-blue-700 hover:bg-blue-100 disabled:opacity-50"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                </button>

                <div className="flex gap-1">
                    {paragraphs.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveParagraph(idx)}
                            className={`w-3 h-3 rounded-full ${idx === activeParagraph ? 'bg-blue-500' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => setActiveParagraph(p => Math.min(paragraphs.length - 1, p + 1))}
                    disabled={activeParagraph === paragraphs.length - 1}
                    className="px-4 py-2 border border-blue-200 rounded-md flex items-center text-blue-700 hover:bg-blue-100 disabled:opacity-50"
                >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                </button>
            </div>
        </div>
    );
}

// Comprehension Section
function ComprehensionSection({ questions }: { questions: ComprehensionQuestion[] }) {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const q = questions[activeQuestion];

    return (
        <div className="space-y-6 p-6">
            <SectionHeader
                icon={CheckCircle}
                title="Reading Comprehension"
                description="Answer these questions based on the reading passage."
                color="purple"
            />

            <Card>
                <CardHeader className="bg-purple-50">
                    <CardTitle className="flex items-center gap-2 text-purple-700">
                        <CheckCircle className="h-5 w-5" />
                        Reading Comprehension Questions
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={() => setActiveQuestion(prev => Math.max(0, prev - 1))}
                            disabled={activeQuestion === 0}
                            className="px-3 py-1 border rounded-md disabled:opacity-50"
                        >
                            ‹ Previous
                        </button>
                        <span className="text-sm text-gray-500">Question {activeQuestion + 1} of {questions.length}</span>
                        <button
                            onClick={() => setActiveQuestion(prev => Math.min(questions.length - 1, prev + 1))}
                            disabled={activeQuestion === questions.length - 1}
                            className="px-3 py-1 border rounded-md disabled:opacity-50"
                        >
                            Next ›
                        </button>
                    </div>

                    <div className="p-5 border rounded-lg">
                        <div className="mb-4">
                            <h3 className="font-medium text-lg mb-2">Question {activeQuestion + 1}</h3>
                            <p className="text-gray-800 font-medium text-xl">{q.question}</p>
                            <p className="text-sm text-gray-500 italic mt-1">
                                Choose the best answer based on the text.
                            </p>
                        </div>

                        <div className="space-y-2 mt-4">
                            {q.options?.map((option, idx) => (
                                <div key={idx} className="flex items-center p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                                    <span className="font-medium text-gray-800">{option}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

// Sentence Frames Section
function SentenceFramesSection({ frames }: { frames: SentenceFrame[] }) {
    return (
        <div className="space-y-6 p-6">
            <SectionHeader
                icon={AlignJustify}
                title="Sentence Frames"
                description="Practice using these sentence patterns to express your ideas."
                color="pink"
            />

            <div className="space-y-4">
                {frames.map((frame, idx) => (
                    <Card key={idx} className="border-2 border-pink-200">
                        <CardContent className="p-6">
                            <div className="bg-pink-50 p-4 rounded-lg border-2 border-dashed border-pink-300 mb-4">
                                <p className="font-mono text-lg text-pink-900 font-semibold">{frame.frame}</p>
                            </div>
                            <div className="pl-4 border-l-4 border-pink-400">
                                <p className="text-sm text-pink-600 font-semibold mb-1">Example:</p>
                                <p className="text-gray-700 italic text-lg">{frame.example}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// Grammar Spotlight Section
function GrammarSpotlightSection({ title, explanation, examples }: { title: string; explanation: string; examples: string[] }) {
    return (
        <div className="space-y-6 p-6">
            <SectionHeader
                icon={Lightbulb}
                title="Grammar Spotlight"
                description="Focus on this key grammar structure from the lesson."
                color="indigo"
            />

            <Card className="border-2 border-indigo-200">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                    <CardTitle className="text-indigo-800">{title}</CardTitle>
                    <CardDescription className="text-gray-700 text-lg mt-2">
                        {explanation}
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                    <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">Examples</p>
                    <div className="space-y-2">
                        {examples.map((ex, idx) => (
                            <div key={idx} className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700 text-lg">{ex}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

// Discussion Section
function DiscussionSection({ questions }: { questions: string[] }) {
    return (
        <div className="space-y-6 p-6">
            <SectionHeader
                icon={MessageCircle}
                title="Discussion"
                description="Discuss these questions using the vocabulary and grammar structures from the lesson."
                color="orange"
            />

            <Card className="border-2 border-orange-200">
                <CardContent className="p-6">
                    <div className="space-y-4">
                        {questions.map((q, idx) => (
                            <div key={idx} className="flex items-start p-4 bg-orange-50 border border-orange-100 rounded-md">
                                <span className="flex-shrink-0 h-8 w-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                    {idx + 1}
                                </span>
                                <p className="text-gray-700 leading-relaxed text-xl font-bold pt-1">{q}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

// Main Lesson Embed Component with Tabs
export function LessonEmbed({ lesson }: LessonEmbedProps) {
    const [activeTab, setActiveTab] = useState("overview");

    // Build render tree matching PlanWise structure
    const renderTree = [
        {
            id: "overview",
            label: "Warmup",
            icon: <Compass className="h-5 w-5" />,
            render: <OverviewSection topic={lesson.reading.title} />
        },
        {
            id: "vocabulary",
            label: "Vocabulary",
            icon: <Library className="h-5 w-5" />,
            render: <VocabularySection vocabulary={lesson.vocabulary} />
        },
        {
            id: "reading",
            label: "Reading",
            icon: <BookOpen className="h-5 w-5" />,
            render: <ReadingSection title={lesson.reading.title} content={lesson.reading.content} />
        },
        {
            id: "comprehension",
            label: "Comprehension",
            icon: <CheckCircle className="h-5 w-5" />,
            render: <ComprehensionSection questions={lesson.comprehension} />
        },
        ...(lesson.grammar ? [{
            id: "grammar",
            label: "Grammar Spotlight",
            icon: <Lightbulb className="h-5 w-5" />,
            render: <GrammarSpotlightSection
                title={lesson.grammar.title}
                explanation={lesson.grammar.explanation}
                examples={lesson.grammar.examples}
            />
        }] : []),
        ...(lesson.sentenceFrames && lesson.sentenceFrames.length > 0 ? [{
            id: "sentenceFrames",
            label: "Sentence Frames",
            icon: <AlignJustify className="h-5 w-5" />,
            render: <SentenceFramesSection frames={lesson.sentenceFrames} />
        }] : []),
        {
            id: "discussion",
            label: "Discussion",
            icon: <MessageCircle className="h-5 w-5" />,
            render: <DiscussionSection questions={lesson.discussion} />
        }
    ];

    const currentIndex = renderTree.findIndex(item => item.id === activeTab);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setActiveTab(renderTree[currentIndex - 1].id);
        }
    };

    const handleNext = () => {
        if (currentIndex < renderTree.length - 1) {
            setActiveTab(renderTree[currentIndex + 1].id);
        }
    };

    return (
        <div className="lesson-content w-full max-w-[1400px] mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            {/* Lesson header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{lesson.title}</h1>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                Level: B2
                            </span>
                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                Focus: Speaking & Vocabulary
                            </span>
                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                Time: 45 minutes
                            </span>
                        </div>
                    </div>
                    <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <span className="text-sm font-semibold">CEFR B2</span>
                    </div>
                </div>
            </div>

            {/* Tabbed interface - PlanWise style */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="relative">
                <TabsList className="flex overflow-x-auto whitespace-nowrap justify-start p-1 h-auto rounded-none bg-gray-100 dark:bg-slate-800 border-b [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {renderTree.map((item) => (
                        <TabsTrigger
                            key={item.id}
                            value={item.id}
                            className="flex items-center gap-2 px-4 py-3 rounded-full transition-all
                                text-gray-500 hover:text-gray-800
                                data-[state=active]:bg-green-100 
                                data-[state=active]:text-green-800
                                data-[state=active]:shadow-sm"
                        >
                            {item.icon}
                            <span className="hidden sm:inline">{item.label}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>

                {/* Section content */}
                <div className="min-h-[500px]">
                    {renderTree.map((item) => (
                        <TabsContent key={item.id} value={item.id} className="m-0 focus:outline-none">
                            {item.render}
                        </TabsContent>
                    ))}
                </div>
            </Tabs>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-800 border-t">
                <Button
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="flex items-center"
                >
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    Previous
                </Button>
                <span className="text-sm text-gray-500">
                    Section {currentIndex + 1} of {renderTree.length}
                </span>
                <Button
                    variant="outline"
                    onClick={handleNext}
                    disabled={currentIndex === renderTree.length - 1}
                    className="flex items-center"
                >
                    Next
                    <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
            </div>
        </div>
    );
}
