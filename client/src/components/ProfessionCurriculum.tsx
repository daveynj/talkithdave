import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Sparkles, AlertCircle } from "lucide-react";
import type { CurriculumPhase } from "@/data/professionData";

interface ProfessionCurriculumProps {
    curriculum: CurriculumPhase[];
    profession: string;
}

export function ProfessionCurriculum({ curriculum, profession }: ProfessionCurriculumProps) {
    const [expandedPhase, setExpandedPhase] = useState<number>(0);

    const phaseColors = [
        { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', text: 'text-blue-600 dark:text-blue-400', icon: 'text-blue-700 dark:text-blue-300' },
        { bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-200 dark:border-emerald-800', text: 'text-emerald-600 dark:text-emerald-400', icon: 'text-emerald-700 dark:text-emerald-300' },
        { bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800', text: 'text-purple-600 dark:text-purple-400', icon: 'text-purple-700 dark:text-purple-300' },
        { bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800', text: 'text-orange-600 dark:text-orange-400', icon: 'text-orange-700 dark:text-orange-300' },
        { bg: 'bg-pink-50 dark:bg-pink-900/20', border: 'border-pink-200 dark:border-pink-800', text: 'text-pink-600 dark:text-pink-400', icon: 'text-pink-700 dark:text-pink-300' },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 px-4 py-2 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-bold mb-2">
                    <Sparkles className="w-4 h-4" />
                    Example Curriculum
                </div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                    25-Lesson Roadmap for {profession}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    This is a sample curriculum designed specifically for {profession.toLowerCase()}.
                    In your first free meeting, we'll customize every lesson to match your exact needs and goals.
                </p>
            </div>

            {/* Customization Disclaimer */}
            <div className="flex items-start gap-4 p-6 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-2xl">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                    <h3 className="font-bold text-amber-900 dark:text-amber-200 mb-1">
                        📋 This is an example curriculum
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                        Every student has unique goals and challenges. In your first <strong>free consultation</strong>,
                        we'll create a personalized 25-lesson curriculum tailored specifically to your professional needs,
                        industry, and learning objectives.
                    </p>
                </div>
            </div>

            {/* Curriculum Phases */}
            <div className="space-y-4">
                {curriculum.map((phase, idx) => {
                    const colors = phaseColors[idx % phaseColors.length];
                    const isExpanded = expandedPhase === idx;

                    return (
                        <Card
                            key={idx}
                            className={`overflow-hidden border-2 ${colors.border} transition-all duration-300 ${isExpanded ? 'ring-4 ring-indigo-50 dark:ring-indigo-900/30' : ''}`}
                        >
                            {/* Phase Header - Clickable */}
                            <button
                                onClick={() => setExpandedPhase(isExpanded ? -1 : idx)}
                                className={`w-full text-left px-6 py-6 flex items-center gap-4 transition-colors ${isExpanded ? colors.bg : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
                            >
                                {/* Phase Number Icon */}
                                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${colors.bg} border-2 ${colors.border} flex items-center justify-center`}>
                                    <span className={`text-xl font-black ${colors.icon}`}>{phase.phase}</span>
                                </div>

                                {/* Phase Title & Subtitle */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-xs font-black ${colors.text} bg-white dark:bg-slate-800 px-3 py-1 rounded-full uppercase tracking-wider`}>
                                            {phase.subtitle}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white">
                                        {phase.title}
                                    </h3>
                                </div>

                                {/* Expand Icon */}
                                {isExpanded ? (
                                    <ChevronUp className={`w-6 h-6 ${colors.text}`} />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-slate-400" />
                                )}
                            </button>

                            {/* Expanded Content */}
                            {isExpanded && (
                                <div className="px-6 pb-6 pt-2">
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 pl-4 border-l-4 border-current" style={{ borderColor: colors.border.includes('blue') ? '#93c5fd' : colors.border.includes('emerald') ? '#6ee7b7' : colors.border.includes('purple') ? '#c4b5fd' : colors.border.includes('orange') ? '#fdba74' : '#f9a8d4' }}>
                                        {phase.description}
                                    </p>

                                    {/* Lessons Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {phase.lessons.map((lesson, lIdx) => {
                                            const lessonNumber = (phase.phase - 1) * 5 + lIdx + 1;
                                            return (
                                                <div
                                                    key={lIdx}
                                                    className="group p-5 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/70 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg transition-all duration-300"
                                                >
                                                    {/* Lesson Number & Title */}
                                                    <div className="flex items-start gap-3 mb-3">
                                                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${colors.bg} border-2 ${colors.border} flex items-center justify-center`}>
                                                            <span className={`text-sm font-black ${colors.icon}`}>
                                                                {lessonNumber}
                                                            </span>
                                                        </div>
                                                        <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                            {lesson.title}
                                                        </h4>
                                                    </div>

                                                    {/* Vocabulary Words */}
                                                    <div className="ml-11 flex flex-wrap gap-2">
                                                        {lesson.vocabulary.map((word, wIdx) => (
                                                            <span
                                                                key={wIdx}
                                                                className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-600 dark:text-slate-400 font-semibold tracking-tight"
                                                            >
                                                                {word}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </Card>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center pt-8">
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Ready to customize this curriculum for your specific goals?
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                    Schedule your free consultation below to discuss your personalized learning path.
                </p>
            </div>
        </div>
    );
}
