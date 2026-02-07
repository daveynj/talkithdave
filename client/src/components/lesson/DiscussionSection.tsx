import { MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SectionCard } from "./SectionCard";

interface DiscussionSectionProps {
    questions: string[];
}

export function DiscussionSection({ questions }: DiscussionSectionProps) {
    return (
        <div className="space-y-4">
            <SectionHeader
                icon={MessageCircle}
                title="Discussion Questions"
                description="Discuss these questions with your teacher or practice partner. Use the vocabulary you learned in this lesson."
                color="orange"
            />

            <SectionCard color="orange">
                <div className="space-y-4">
                    {questions.map((question, index) => (
                        <div
                            key={index}
                            className="flex gap-4 p-5 bg-orange-50 dark:bg-orange-900/10 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors"
                        >
                            <span className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                {index + 1}
                            </span>
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed pt-1.5">
                                {question}
                            </p>
                        </div>
                    ))}
                </div>
            </SectionCard>
        </div>
    );
}
