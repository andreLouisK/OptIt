import React from "react";

const points = [
  {
    title: "Dybdekompetanse",
    description: "Spesialister på tvers av industrielle produksjonsmiljøer og de ledende teknologiene i bransjen.",
    icon: "pin",
  },
  {
    title: "Rask implementering",
    description: "Effektive prosjekter med fokus på verdi fra dag én gjennom standardiserte metoder og erfaring.",
    icon: "clock",
  },
  {
    title: "Personlig oppfølging",
    description: "Direkte kontakt med konsulenter som kjenner din bedrift og dine utfordringer.",
    icon: "user",
  },
  {
    title: "Helhetlig tilnærming",
    description: "Vi ser hele bildet – fra maskin via ERP- og PLM-systemer til sluttkunde.",
    icon: "check-circle",
  },
] as const;

import Image from "next/image";

export function WhyOptItSection() {
  // Felles props med 'as const' løser TypeScript-feilen på strokeLinecap/strokeLinejoin
  const iconProps = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-5 w-5",
  } as const;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Hvorfor OptIT
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Din partner for <span className="text-sky-600">industriell suksess</span>
          </h2>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            Vi har bred erfaring på tvers av de fleste CAD- og PLM-systemer i
            markedet. Vi forstår både teknologien og de praktiske utfordringene
            i norsk industri.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div
                key={point.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-slate-300"
              >
                {/* Ikon-container i samme stil som tjeneste-seksjonen */}
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 ring-1 ring-slate-200 shadow-sm">
                  {point.icon === "pin" && (
                    <svg {...iconProps}>
                      <path d="M12 17v5" />
                      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a3 3 0 0 0-3-3 3 3 0 0 0-3 3Z" />
                    </svg>
                  )}
                  {point.icon === "clock" && (
                    <svg {...iconProps}>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )}
                  {point.icon === "user" && (
                    <svg {...iconProps}>
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                  {point.icon === "check-circle" && (
                    <svg {...iconProps}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 md:text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Høyre kolonne: Statistikk */}
<div className="relative flex min-h-[400px] flex-col overflow-hidden rounded-[2rem] border border-white/5 shadow-xl group">
  
  {/* Bakgrunnsbilde */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/hjem/hjem-statistikk.png" // Sørg for at filen ligger i public/images/hjem/
      alt="OptIT Erfaring i tall"
      fill
      priority // Legg til denne siden bildet er høyt oppe på siden
      className="object-cover transition-transform duration-700 group-hover:scale-110"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
    {/* Gradient overlay - justert for bedre kontrast */}
    <div className="absolute inset-0 bg-slate-950/50 transition-colors duration-500 group-hover:bg-slate-950/40" />
  </div>

  {/* Innhold */}
  <div className="relative z-10 flex h-full flex-col justify-end p-8 text-center md:p-12">
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 drop-shadow-sm">
        Erfaring i tall
      </p>
      <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-sky-500/80" />
    </div>

    <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-10 md:gap-4">
      <div className="space-y-1">
        <p className="text-2xl font-bold text-white md:text-4xl">15+</p>
        <p className="text-[10px] font-medium uppercase tracking-widest text-slate-300">
          Års erfaring
        </p>
      </div>
      
      <div className="space-y-1 border-x border-white/10">
        <p className="text-2xl font-bold text-white md:text-4xl">10+</p>
        <p className="text-[10px] font-medium uppercase tracking-widest text-slate-300">
          Systemer
        </p>
      </div>
      
      <div className="space-y-1">
        <p className="text-2xl font-bold text-white md:text-4xl">100+</p>
        <p className="text-[10px] font-medium uppercase tracking-widest text-slate-300">
          Prosjekter
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}