import { useState } from "react";
import { FileText, ChevronLeft, ChevronRight, Clock, SparklesIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SectionCard } from "./SectionCard";

interface ReadingSectionProps {
    title: string;
    content: string;
}

export function ReadingSection({ title, content }: ReadingSectionProps) {
    const [activeParagraph, setActiveParagraph] = useState(0);

    // Split content into paragraphs
    const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0);
    const completionPercentage = Math.round(((activeParagraph + 1) / paragraphs.length) * 100);

    return (
        <div className="space-y-4">
            <SectionHeader
                icon={FileText}
                title={title}
                description="Read the text and notice the vocabulary we previously discussed. Ask any questions if you don't understand a word or phrase."
                color="blue"
            />

            <SectionCard
                color="blue"
                noPadding
                headerRight={
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">15-20 minutes</span>
                    </div>
                }
            >
                {/* Progress indicator */}
                <div className="px-6 py-4 flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 border-t border-blue-100 dark:border-blue-800">
                    <div className="flex items-center text-blue-600 dark:text-blue-400">
                        <SparklesIcon className="h-5 w-5 mr-2" />
                        <span className="text-base font-medium">Paragraph {activeParagraph + 1} of {paragraphs.length}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-base font-medium text-blue-600 dark:text-blue-400">{completionPercentage}% Complete</span>
                        <div className="w-32 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                                style={{ width: `${completionPercentage}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Reading content */}
                <div className="p-8 border-t border-blue-100 dark:border-blue-800">
                    <div className="leading-relaxed text-xl text-gray-900 dark:text-gray-100 tracking-wide max-w-[1600px] mx-auto">
                        {paragraphs[activeParagraph]}
                    </div>
                </div>

                {/* Navigation */}
                {paragraphs.length > 1 && (
                    <div className="p-6 flex justify-between border-t border-blue-100 dark:border-blue-800">
                        <button
                            onClick={() => setActiveParagraph(prev => Math.max(0, prev - 1))}
                            disabled={activeParagraph === 0}
                            className="px-6 py-3 border border-blue-200 dark:border-blue-700 rounded-lg text-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5 mr-2" />
                            Previous
                        </button>

                        {/* Pagination dots */}
                        <div className="flex items-center gap-2">
                            {paragraphs.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveParagraph(idx)}
                                    className={`w-3 h-3 rounded-full transition-colors ${idx === activeParagraph ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                    aria-label={`Go to paragraph ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => setActiveParagraph(prev => Math.min(paragraphs.length - 1, prev + 1))}
                            disabled={activeParagraph === paragraphs.length - 1}
                            className="px-6 py-3 border border-blue-200 dark:border-blue-700 rounded-lg text-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium transition-colors"
                        >
                            Next
                            <ChevronRight className="h-5 w-5 ml-2" />
                        </button>
                    </div>
                )}
            </SectionCard>
        </div>
    );
}
