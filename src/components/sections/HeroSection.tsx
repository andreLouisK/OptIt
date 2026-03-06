import Link from "next/link";

export function HeroSection() {
  const focusAreas = [
    {
      title: "CAD-konsultasjon",
      desc: "SolidWorks, Onshape, Inventor, CATIA og mer",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
      ),
      borderColor: "border-sky-500/30",
      iconColor: "text-sky-400",
      xOffset: "md:translate-x-4",
    },
    {
      title: "PLM / PDM",
      desc: "Arena, Windchill, Teamcenter og mer",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
      ),
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400",
      xOffset: "md:translate-x-12",
    },
    {
      title: "CAM & Maskinstyring",
      desc: "Automatiser programmering og produksjon",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
      ),
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
      xOffset: "md:translate-x-4",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-slate-950 pt-24 pb-20 md:pt-32 md:pb-32">
      {/* Bakgrunns-effekt for å matche bildet */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-sky-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 md:flex-row md:items-center md:justify-between md:px-8">
        {/* Venstre side: Tekst */}
        <div className="max-w-xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            Industriell digitalisering
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              Optimaliser din <br />
              <span className="text-sky-400">produksjon</span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-400 md:max-w-md">
              Spesialiserte konsulenttjenester innen CAD, CAM, PLM og PDM. 
              Vi minimerer feilkilder og maksimerer produktivitet.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/tjenester"
              className="group inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,0.4)]"
            >
              Se våre tjenester
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Ta kontakt
            </Link>
          </div>
        </div>

        {/* Høyre side: Kortene (Inspirert av bildet) */}
        <div className="flex w-full flex-col gap-4 md:max-w-md">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className={`group relative flex items-start gap-4 rounded-2xl border ${area.borderColor} bg-slate-900/40 p-5 backdrop-blur-sm transition-all hover:bg-slate-900/60 ${area.xOffset}`}
            >
              <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800/50 ${area.iconColor} ring-1 ring-white/10`}>
                {area.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{area.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {area.desc}
                </p>
              </div>
              {/* Subtil glød ved hover */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}