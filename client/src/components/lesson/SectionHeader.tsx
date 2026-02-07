import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
    icon: LucideIcon;
    title: string;
    description?: string;
    instructions?: string;
    color: "blue" | "purple" | "green" | "orange" | "pink" | "indigo" | "yellow";
}

const colorClasses = {
    blue: {
        bg: "bg-blue-100 dark:bg-blue-900/20",
        icon: "text-blue-600 dark:text-blue-400",
        text: "text-blue-600 dark:text-blue-400"
    },
    purple: {
        bg: "bg-purple-100 dark:bg-purple-900/20",
        icon: "text-purple-600 dark:text-purple-400",
        text: "text-purple-600 dark:text-purple-400"
    },
    green: {
        bg: "bg-green-100 dark:bg-green-900/20",
        icon: "text-green-600 dark:text-green-400",
        text: "text-green-600 dark:text-green-400"
    },
    orange: {
        bg: "bg-orange-100 dark:bg-orange-900/20",
        icon: "text-orange-600 dark:text-orange-400",
        text: "text-orange-600 dark:text-orange-400"
    },
    pink: {
        bg: "bg-pink-100 dark:bg-pink-900/20",
        icon: "text-pink-600 dark:text-pink-400",
        text: "text-pink-600 dark:text-pink-400"
    },
    indigo: {
        bg: "bg-indigo-100 dark:bg-indigo-900/20",
        icon: "text-indigo-600 dark:text-indigo-400",
        text: "text-indigo-600 dark:text-indigo-400"
    },
    yellow: {
        bg: "bg-yellow-100 dark:bg-yellow-900/20",
        icon: "text-yellow-600 dark:text-yellow-400",
        text: "text-yellow-600 dark:text-yellow-400"
    }
};

export function SectionHeader({ icon: Icon, title, description, instructions, color }: SectionHeaderProps) {
    const colors = colorClasses[color];

    return (
        <div className="flex items-start gap-4 mb-6">
            <div className={`p-3 rounded-xl ${colors.bg}`}>
                <Icon className={`w-6 h-6 ${colors.icon}`} />
            </div>
            <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
                {description && (
                    <p className="text-slate-600 dark:text-slate-400 mt-1">{description}</p>
                )}
                {instructions && (
                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-2 italic">{instructions}</p>
                )}
            </div>
        </div>
    );
}
