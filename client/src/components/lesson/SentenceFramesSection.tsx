import { MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SectionCard } from "./SectionCard";
import type { SentenceFrame } from "@/data/professionData";

interface SentenceFramesSectionProps {
    frames: SentenceFrame[];
}

export function SentenceFramesSection({ frames }: SentenceFramesSectionProps) {
    return (
        <div className="space-y-4">
            <SectionHeader
                icon={MessageCircle}
                title="Sentence Frames"
                description="Practice using these sentence patterns to express your ideas clearly."
                color="pink"
            />

            <SectionCard color="pink">
                <div className="grid gap-4">
                    {frames.map((frame, index) => (
                        <div
                            key={index}
                            className="p-5 bg-pink-50 dark:bg-pink-900/10 rounded-xl border border-pink-200 dark:border-pink-800"
                        >
                            {/* Frame Pattern */}
                            <div className="mb-4 p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-dashed border-pink-300 dark:border-pink-700">
                                <p className="font-mono text-lg text-pink-900 dark:text-pink-200 font-semibold">
                                    {frame.frame}
                                </p>
                            </div>

                            {/* Example */}
                            <div className="pl-4 border-l-4 border-pink-400 dark:border-pink-600">
                                <p className="text-sm text-pink-600 dark:text-pink-400 font-semibold mb-1">
                                    Example:
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 italic text-lg">
                                    {frame.example}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionCard>
        </div>
    );
}
