import { cn } from "@/lib/utils";

interface ServiceDetailHeroProps {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  themeColor?: "sky" | "emerald" | "orange" | "purple" | "rose";
}

export function ServiceDetailHero({
  title,
  subtitle,
  badge,
  description,
  themeColor = "sky"
}: ServiceDetailHeroProps) {

  // Definerer de dype gradientene (fra slate-950 via slate-900 til en mørk temafarge)
  const themes = {
    sky: {
      badge: "text-sky-300",
      subtitle: "text-sky-300",
      gradient: "from-slate-950 via-slate-900 to-sky-900"
    },
    emerald: {
      badge: "text-emerald-300",
      subtitle: "text-emerald-300",
      gradient: "from-slate-950 via-slate-900 to-emerald-900"
    },
    orange: {
      badge: "text-orange-300",
      subtitle: "text-orange-300",
      gradient: "from-slate-950 via-slate-900 to-orange-900/60"
    },
    purple: {
      badge: "text-purple-300",
      subtitle: "text-purple-300",
      gradient: "from-slate-950 via-slate-900 to-purple-900/70"
    },
    rose: {
      badge: "text-rose-300",
      subtitle: "text-rose-300",
      gradient: "from-slate-950 via-slate-900 to-rose-900/60"
    }
  };

  const activeTheme = themes[themeColor];

  return (
    <section className={cn(
      "relative border-b border-white/5 bg-gradient-to-br", 
      activeTheme.gradient
    )}>
      {/* Selve innholdet */}
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-20 md:px-8 md:pb-20 md:pt-24">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-4">
            {/* Badge */}
            <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", activeTheme.badge)}>
              {badge}
            </p>
            
            {/* Hovedtittel */}
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              {title}{" "}
              <span className={cn(activeTheme.subtitle)}>{subtitle}</span>
            </h1>
            
            {/* Beskrivelse */}
            <p className="max-w-2xl text-sm text-slate-200 md:text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}