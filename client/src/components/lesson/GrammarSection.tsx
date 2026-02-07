import { Lightbulb, CheckCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SectionCard } from "./SectionCard";

interface GrammarSectionProps {
    title: string;
    explanation: string;
    examples: string[];
}

export function GrammarSection({ title, explanation, examples }: GrammarSectionProps) {
    return (
        <div className="space-y-4">
            <SectionHeader
                icon={Lightbulb}
                title="Grammar Spotlight"
                description="Focus on a key grammar structure from the lesson."
                color="indigo"
            />

            <SectionCard color="indigo">
                <div className="space-y-6">
                    {/* Grammar Title */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
                        <h4 className="text-2xl font-bold text-indigo-900 dark:text-indigo-200 mb-3">
                            {title}
                        </h4>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            {explanation}
                        </p>
                    </div>

                    {/* Examples */}
                    <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                            Examples from the Text
                        </h5>
                        {examples.map((example, index) => (
                            <div
                                key={index}
                                className="flex gap-3 items-start p-4 bg-white dark:bg-slate-800 rounded-xl border border-indigo-100 dark:border-indigo-800"
                            >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <p className="text-lg text-slate-700 dark:text-slate-300">
                                    {example}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionCard>
        </div>
    );
}
