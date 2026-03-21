import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  title: string;
  href: string;
  description: string;
  accent: string;
  shadow: string;
  badgeColor: string;
}

const allServices: NavigationItem[] = [
  { 
    title: "CAD", 
    href: "/tjenester/cad", 
    description: "Design og konstruksjon", 
    accent: "from-emerald-400/30 to-emerald-300/10",
    shadow: "group-hover:shadow-[0_18px_45px_rgba(16,185,129,0.20)]",
    badgeColor: "text-emerald-400"
  },
  { 
    title: "PLM", 
    href: "/tjenester/plm", 
    description: "Produktlivssyklus", 
    accent: "from-orange-400/30 to-orange-300/10",
    shadow: "group-hover:shadow-[0_18px_45px_rgba(249,115,22,0.20)]",
    badgeColor: "text-orange-400"
  },
  { 
    title: "Integrasjon", 
    href: "/tjenester/integrasjon", 
    description: "System-koblinger", 
    accent: "from-purple-400/30 to-purple-300/10",
    shadow: "group-hover:shadow-[0_18px_45px_rgba(168,85,247,0.20)]",
    badgeColor: "text-purple-400"
  },
  { 
    title: "CAM", 
    href: "/tjenester/cam", 
    description: "Maskinstyring", 
    accent: "from-sky-400/30 to-sky-300/10",
    shadow: "group-hover:shadow-[0_18px_45px_rgba(56,189,248,0.20)]",
    badgeColor: "text-sky-400"
  },
  { 
    title: "AI", 
    href: "/tjenester/ai", 
    description: "Fremtidens teknologi", 
    accent: "from-red-400/30 to-red-300/10",
    shadow: "group-hover:shadow-[0_18px_45px_rgba(239,68,68,0.20)]",
    badgeColor: "text-red-400"
  },
];

interface ServiceNavigationProps {
  currentPath: string;
  themeColor?: "sky" | "emerald" | "orange" | "purple" | "rose";
}

export function ServiceNavigation({ currentPath, themeColor = "sky" }: ServiceNavigationProps) {
  const otherServices = allServices.filter(s => s.href !== currentPath);

  // Fargemapping for elementer som følger sidens tema
  const themes = {
    sky: "text-sky-400 hover:text-sky-300",
    emerald: "text-emerald-400 hover:text-emerald-300",
    orange: "text-orange-400 hover:text-orange-300",
    purple: "text-purple-400 hover:text-purple-300",
    rose: "text-rose-400 hover:text-rose-300",
  };

  const activeThemeClass = themes[themeColor];

  return (
    <section className="bg-slate-950 py-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className={cn("text-xs font-semibold uppercase tracking-[0.2em] mb-3", activeThemeClass.split(' ')[0])}>
              Gå videre
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Utforsk våre andre <span className="opacity-50 italic">ekspertområder</span>
            </h2>
          </div>
          <Link 
            href="/tjenester" 
            className={cn("text-sm font-medium transition-colors flex items-center gap-2 pb-1 text-sky-500 hover:text-sky-300")}
          >
            Se alle tjenester <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid med andre tjenester */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {otherServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-slate-900/60",
                service.shadow
              )}
            >
              {/* Hover Glow Gradient */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                service.accent
              )} />

              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-white transition-colors">
                  Utforsk <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}