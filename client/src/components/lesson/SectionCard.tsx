import { ReactNode } from "react";

interface SectionCardProps {
    children: ReactNode;
    color: "blue" | "purple" | "green" | "orange" | "pink" | "indigo" | "yellow";
    noPadding?: boolean;
    headerRight?: ReactNode;
    description?: string;
}

const borderColorClasses = {
    blue: "border-blue-200 dark:border-blue-800",
    purple: "border-purple-200 dark:border-purple-800",
    green: "border-green-200 dark:border-green-800",
    orange: "border-orange-200 dark:border-orange-800",
    pink: "border-pink-200 dark:border-pink-800",
    indigo: "border-indigo-200 dark:border-indigo-800",
    yellow: "border-yellow-200 dark:border-yellow-800"
};

export function SectionCard({ children, color, noPadding, headerRight, description }: SectionCardProps) {
    return (
        <div className={`bg-white dark:bg-slate-900 rounded-xl border-2 ${borderColorClasses[color]} shadow-sm overflow-hidden`}>
            {(headerRight || description) && (
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                    {description && (
                        <p className="text-slate-600 dark:text-slate-400">{description}</p>
                    )}
                    {headerRight}
                </div>
            )}
            <div className={noPadding ? "" : "p-6"}>
                {children}
            </div>
        </div>
    );
}
