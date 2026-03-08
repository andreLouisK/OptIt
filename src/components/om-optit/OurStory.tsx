import React from "react";

const valueProps = [
  { text: "Økt effektivitet", color: "emerald" },
  { text: "Lavere kostnader", color: "sky" },
  { text: "Bedre samhandling", color: "emerald" },
  { text: "Bærekraftig vekst", color: "sky" },
] as const;

export function OurStory() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-8">
        {/* Venstre kort: Vår Historie */}
        <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Vår Historie
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Vår reise
            </h2>
          </div>
          <p className="text-sm text-slate-600 md:text-base leading-relaxed">
            Startet i [Årstal], med en visjon om å bygge broer mellom CAD/PLM og norsk produksjon. I dag er vi et stolt team av dedikerte spesialister.
          </p>
        </div>

        {/* Høyre kort: Slik skaper vi verdi */}
        <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Vår Visjon
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Slik skaper vi verdi
            </h2>
          </div>
          <ul className="space-y-3">
            {valueProps.map((prop, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full bg-${prop.color}-500`} />
                <p className="text-sm font-medium text-slate-700 md:text-base">{prop.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}