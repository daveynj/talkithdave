import { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight, Circle, Check, X } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SectionCard } from "./SectionCard";
import type { ComprehensionQuestion } from "@/data/professionData";

interface ComprehensionSectionProps {
    questions: ComprehensionQuestion[];
}

export function ComprehensionSection({ questions }: ComprehensionSectionProps) {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);

    const currentQuestion = questions[activeQuestion];
    const progressPercentage = Math.round(((activeQuestion + 1) / questions.length) * 100);

    const handleAnswerSelect = (answer: string) => {
        if (!showResult) {
            setSelectedAnswer(answer);
            setShowResult(true);
        }
    };

    const goToNext = () => {
        if (activeQuestion < questions.length - 1) {
            setActiveQuestion(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        }
    };

    const goToPrevious = () => {
        if (activeQuestion > 0) {
            setActiveQuestion(prev => prev - 1);
            setSelectedAnswer(null);
            setShowResult(false);
        }
    };

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    return (
        <div className="space-y-4">
            <SectionHeader
                icon={CheckCircle}
                title="Comprehension Check"
                description="Test your understanding of the reading passage."
                color="green"
            />

            <SectionCard color="green" noPadding>
                {/* Progress bar */}
                <div className="px-6 py-4 flex items-center justify-between bg-green-50 dark:bg-green-900/20">
                    <div className="flex items-center text-green-600 dark:text-green-400">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span className="text-base font-medium">Question {activeQuestion + 1} of {questions.length}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-base font-medium text-green-600 dark:text-green-400">{progressPercentage}% Complete</span>
                        <div className="w-32 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-green-500 rounded-full transition-all duration-300"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Question Content */}
                <div className="p-8 border-t border-green-100 dark:border-green-800">
                    <div className="max-w-2xl mx-auto">
                        {/* Question */}
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                            {currentQuestion.question}
                        </h3>

                        {/* Options */}
                        {currentQuestion.options && (
                            <div className="space-y-3">
                                {currentQuestion.options.map((option, idx) => {
                                    const isSelected = selectedAnswer === option;
                                    const isCorrectOption = option === currentQuestion.correctAnswer;

                                    let optionClass = "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ";

                                    if (!showResult) {
                                        optionClass += isSelected
                                            ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                                            : "border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 hover:bg-green-50/50 dark:hover:bg-green-900/10";
                                    } else {
                                        if (isCorrectOption) {
                                            optionClass += "border-green-500 bg-green-50 dark:bg-green-900/20";
                                        } else if (isSelected && !isCorrect) {
                                            optionClass += "border-red-500 bg-red-50 dark:bg-red-900/20";
                                        } else {
                                            optionClass += "border-gray-200 dark:border-gray-700 opacity-50";
                                        }
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswerSelect(option)}
                                            disabled={showResult}
                                            className={optionClass}
                                        >
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 flex-shrink-0 ${showResult && isCorrectOption
                                                    ? "border-green-500 bg-green-500 text-white"
                                                    : showResult && isSelected && !isCorrect
                                                        ? "border-red-500 bg-red-500 text-white"
                                                        : isSelected
                                                            ? "border-green-500 bg-green-500 text-white"
                                                            : "border-gray-300 dark:border-gray-600"
                                                }`}>
                                                {showResult && isCorrectOption && <Check className="w-5 h-5" />}
                                                {showResult && isSelected && !isCorrect && <X className="w-5 h-5" />}
                                                {!showResult && isSelected && <Circle className="w-3 h-3 fill-current" />}
                                            </div>
                                            <span className={`text-lg ${showResult && isCorrectOption
                                                    ? "text-green-700 dark:text-green-300 font-semibold"
                                                    : showResult && isSelected && !isCorrect
                                                        ? "text-red-700 dark:text-red-300"
                                                        : "text-slate-700 dark:text-slate-300"
                                                }`}>
                                                {option}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {/* Result Feedback */}
                        {showResult && (
                            <div className={`mt-6 p-4 rounded-xl ${isCorrect
                                    ? "bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700"
                                    : "bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700"
                                }`}>
                                <p className={`text-lg font-semibold ${isCorrect
                                        ? "text-green-700 dark:text-green-300"
                                        : "text-red-700 dark:text-red-300"
                                    }`}>
                                    {isCorrect ? "✓ Correct!" : `✗ The correct answer is: ${currentQuestion.correctAnswer}`}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <div className="p-6 flex justify-between border-t border-green-100 dark:border-green-800">
                    <button
                        onClick={goToPrevious}
                        disabled={activeQuestion === 0}
                        className="px-6 py-3 border border-green-200 dark:border-green-700 rounded-lg text-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-medium transition-colors"
                    >
                        <ChevronLeft className="h-5 w-5 mr-2" />
                        Previous
                    </button>

                    {/* Pagination dots */}
                    <div className="flex items-center gap-2">
                        {questions.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveQuestion(idx);
                                    setSelectedAnswer(null);
                                    setShowResult(false);
                                }}
                                className={`w-3 h-3 rounded-full transition-colors ${idx === activeQuestion ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                                aria-label={`Go to question ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goToNext}
                        disabled={activeQuestion === questions.length - 1}
                        className="px-6 py-3 border border-green-200 dark:border-green-700 rounded-lg text-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-medium transition-colors"
                    >
                        Next
                        <ChevronRight className="h-5 w-5 ml-2" />
                    </button>
                </div>
            </SectionCard>
        </div>
    );
}
