import { useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SectionCard } from "./SectionCard";
import type { VocabularyWord } from "@/data/professionData";

interface VocabularySectionProps {
    vocabulary: VocabularyWord[];
}

export function VocabularySection({ vocabulary }: VocabularySectionProps) {
    const [activeWord, setActiveWord] = useState(0);

    const currentWord = vocabulary[activeWord];
    const progressPercentage = Math.round(((activeWord + 1) / vocabulary.length) * 100);

    return (
        <div className="space-y-4">
            <SectionHeader
                icon={BookOpen}
                title="Key Vocabulary"
                description="Learn these important words and phrases before reading the text."
                color="purple"
            />

            <SectionCard color="purple" noPadding>
                {/* Progress bar */}
                <div className="px-6 py-4 flex items-center justify-between bg-purple-50 dark:bg-purple-900/20">
                    <div className="flex items-center text-purple-600 dark:text-purple-400">
                        <BookOpen className="h-5 w-5 mr-2" />
                        <span className="text-base font-medium">Word {activeWord + 1} of {vocabulary.length}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-base font-medium text-purple-600 dark:text-purple-400">{progressPercentage}% Complete</span>
                        <div className="w-32 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-purple-500 rounded-full transition-all duration-300"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Vocabulary Card - Definition shown directly */}
                <div className="p-8 border-t border-purple-100 dark:border-purple-800">
                    <div className="max-w-2xl mx-auto">
                        {/* Word Header */}
                        <div className="text-center mb-6">
                            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                {currentWord.word}
                            </h3>
                            <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                                {currentWord.partOfSpeech}
                            </span>
                        </div>

                        {/* Definition - Always visible */}
                        <div className="space-y-6">
                            {/* Definition */}
                            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
                                <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">Definition</h4>
                                <p className="text-xl text-slate-900 dark:text-white leading-relaxed">
                                    {currentWord.definition}
                                </p>
                            </div>

                            {/* Example */}
                            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
                                <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">Example</h4>
                                <p className="text-xl text-slate-700 dark:text-slate-300 italic">
                                    "{currentWord.example}"
                                </p>
                            </div>

                            {/* Usage Note */}
                            {currentWord.usageNote && (
                                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border-l-4 border-purple-500">
                                    <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">Usage Note</h4>
                                    <p className="text-slate-700 dark:text-slate-300">
                                        {currentWord.usageNote}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="p-6 flex justify-between border-t border-purple-100 dark:border-purple-800">
                    <button
                        onClick={() => setActiveWord(prev => Math.max(0, prev - 1))}
                        disabled={activeWord === 0}
                        className="px-6 py-3 border border-purple-200 dark:border-purple-700 rounded-lg text-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-medium transition-colors"
                    >
                        <ChevronLeft className="h-5 w-5 mr-2" />
                        Previous
                    </button>

                    {/* Pagination dots */}
                    <div className="flex items-center gap-2">
                        {vocabulary.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveWord(idx)}
                                className={`w-3 h-3 rounded-full transition-colors ${idx === activeWord ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                                aria-label={`Go to word ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => setActiveWord(prev => Math.min(vocabulary.length - 1, prev + 1))}
                        disabled={activeWord === vocabulary.length - 1}
                        className="px-6 py-3 border border-purple-200 dark:border-purple-700 rounded-lg text-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-medium transition-colors"
                    >
                        Next
                        <ChevronRight className="h-5 w-5 ml-2" />
                    </button>
                </div>
            </SectionCard>
        </div>
    );
}
