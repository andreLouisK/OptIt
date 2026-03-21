import { Check, Circle, Dot } from "lucide-react";
import { cn } from "@/lib/utils";

interface SoftwareSolution {
    name: string;
    logoUrl: string;
    badge: string;
    description: string;
    features: string[];
}

interface SoftwareShowcaseProps {
    title: string;
    subtitle: string;
    description: string;
    allPlatforms: string[];
    recommendedSolutions: SoftwareSolution[];
    themeColor?: "sky" | "emerald" | "orange" | "purple" | "rose";
}

export function SoftwareShowcase({
    title,
    subtitle,
    description,
    allPlatforms,
    recommendedSolutions,
    themeColor = "sky",
}: SoftwareShowcaseProps) {

    // Mapping som oversetter themeColor til alle nødvendige Tailwind-klasser
    const themes = {
        sky: {
            text: "text-sky-400",
            border: "border-sky-500/20",
            badge: "text-sky-300",
            bgSubtle: "bg-sky-500/10",
            hoverBorder: "hover:border-sky-500/50",
        },
        emerald: {
            text: "text-emerald-400",
            border: "border-emerald-500/20",
            badge: "text-emerald-300",
            bgSubtle: "bg-emerald-500/10",
            hoverBorder: "hover:border-emerald-500/50",
        },
        orange: {
            text: "text-orange-400",
            border: "border-orange-500/20",
            badge: "text-orange-300",
            bgSubtle: "bg-orange-500/10",
            hoverBorder: "hover:border-orange-500/50",
        },
        purple: {
            text: "text-purple-400",
            border: "border-purple-500/20",
            badge: "text-purple-300",
            bgSubtle: "bg-purple-500/10",
            hoverBorder: "hover:border-purple-500/50",
        },
        rose: {
            text: "text-rose-400",
            border: "border-rose-500/20",
            badge: "text-rose-300",
            bgSubtle: "bg-rose-500/10",
            hoverBorder: "hover:border-rose-500/50",
        },
    };

    const activeTheme = themes[themeColor];

    return (
        <section className="bg-gradient-to-tl from-slate-950 via-slate-900 to-emerald-900/30 py-20 border-t border-white/5">
            <div className="mx-auto max-w-6xl px-4 md:px-8">

                {/* 1. OVERSKRIFT (Styres av theme) */}
                <div className="text-center mb-12">
                    <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", activeTheme.text)}>
                        {title}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        {subtitle}
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-sm text-slate-300 md:text-base">
                        {description}
                    </p>
                </div>

                {/* 2. PLATTFORM-TAGS (Får farge ved hover) */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {allPlatforms.map((name) => (
                        <div
                            key={name}
                            className={cn(
                                "rounded-full border border-slate-700/50 bg-slate-900/40 px-4 py-1.5 text-xs font-medium text-slate-400 transition-all",
                                activeTheme.hoverBorder,
                                "hover:text-white cursor-default"
                            )}
                        >
                            {name}
                        </div>
                    ))}
                </div>

                {/* 3. KORT-GRID */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {recommendedSolutions.map((solution, index) => (
                        <div
                            key={index}
                            className={cn(
                                "relative rounded-[2rem] border p-8 bg-slate-900/40 backdrop-blur-sm transition-all hover:bg-slate-900/60",
                                activeTheme.border
                            )}
                        >
                            {/* Badge */}
                            <p className={cn("text-[10px] font-bold uppercase tracking-[0.2em] mb-6", activeTheme.badge)}>
                                {solution.badge}
                            </p>

                            {/* Logo boks */}
                            <div className="inline-flex rounded-xl bg-white p-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-6">
                                <img
                                    src={solution.logoUrl}
                                    alt={solution.name}
                                    className="h-7 w-auto object-contain"
                                />
                            </div>

                            <p className="text-slate-200 text-sm leading-relaxed mb-8 italic opacity-90">
                                "{solution.description}"
                            </p>

                            {/* Fordeler liste */}
                            <ul className="space-y-4">
                                {solution.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        <div className={cn("mt-1 rounded-full p-0.5", activeTheme.bgSubtle)}>
                                            <Circle
                                                className={cn("h-2 w-2 fill-current", activeTheme.text)}
                                            />
                                        </div>
                                        <span className="text-sm text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}