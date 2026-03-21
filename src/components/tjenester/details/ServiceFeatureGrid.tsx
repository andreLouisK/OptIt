import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceFeatureGridProps {
  badge: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  themeColor?: "sky" | "emerald" | "orange" | "purple" | "rose" | "orange";
}

export function ServiceFeatureGrid({
  badge,
  title,
  description,
  features,
  themeColor = "sky"
}: ServiceFeatureGridProps) {
  
  // Mapper fargene til klasser som passer på en lys bakgrunn (slate-50)
  const themes = {
    sky: {
      badge: "text-sky-600",
      icon: "text-sky-500",
      accent: "from-sky-400 to-blue-600"
    },
    emerald: {
      badge: "text-emerald-600",
      icon: "text-emerald-500",
      accent: "from-emerald-400 to-teal-600"
    },
    orange: { // Lagt til for PLM
      badge: "text-orange-600",
      icon: "text-orange-500",
      accent: "from-orange-400 to-red-500"
    },
    purple: {
      badge: "text-purple-600",
      icon: "text-purple-500",
      accent: "from-purple-400 to-fuchsia-600"
    },
    rose: {
      badge: "text-rose-600",
      icon: "text-rose-500",
      accent: "from-rose-400 to-red-600"
    }
  };

  const activeTheme = themes[themeColor];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Overskrift */}
        <div className="mb-16 text-center">
          <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", activeTheme.badge)}>
            {badge}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-slate-600 md:text-base">
            {description}
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex rounded-3xl border border-transparent bg-slate-50/0 p-[1px] transition hover:-translate-y-1 
                w-full md:w-[calc(33.333%-22px)] max-w-[380px] min-w-[280px]"
            >
              {/* Bakgrunns-glød */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b opacity-10 blur-xl transition group-hover:opacity-40",
                  activeTheme.accent
                )}
              />
              
              <div className="relative z-10 flex flex-1 flex-col overflow-hidden rounded-[1.3rem] bg-white p-6 shadow-sm transition-shadow group-hover:shadow-xl border border-slate-100">
                {/* Ikon-boks */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 transition-colors group-hover:bg-white">
                  <feature.icon 
                    className={cn("h-6 w-6", activeTheme.icon)} 
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-base font-semibold text-slate-900">
                  {feature.title}
                </h3>
                
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}