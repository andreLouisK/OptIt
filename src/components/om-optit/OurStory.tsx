import React from "react";

export function OurStory() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_380px]">
          {/* Venstre side: Historien og Drivkraften */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                Vår Historie
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Løsninger skapt av <span className="text-sky-600">erfaring</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed md:text-lg">
              <p>
                OptIT ble født ut av en felles observasjon fra våre år i industrien: frustrasjonen over 
                ineffektive prosesser hvor verdifull informasjon stopper opp i siloer, og de samme dataene 
                tastes inn på nytt i ledd etter ledd. Vi startet OptIT for å eliminere denne friksjonen.
              </p>
              <p>
                Med over femten års erfaring innen systemutvikling, 3D-konstruksjon og maskinstyring, 
                har vi spesialisert oss på å tette disse gapene. Ved å bygge intelligente broer mellom 
                alle systemer og ledd fra tilbud til ferdig produksjon sørger vi for at dine systemer
                snakker sammen uten unødvendige mellomstopp.
              </p>
              
              <div className="pt-4">
                <p className="font-medium text-slate-900 border-l-4 border-sky-500 pl-6 italic bg-slate-50 py-4 rounded-r-xl">
                  "Vi er ikke bare konsulenter – vi er teknikere som forstår koden bak maskinen og 
                  ingeniører som forstår verdien av ett godt grunnlag. Vår historie handler om å 
                  forenkle det kompliserte, slik at norsk industri kan fokusere på det de gjør best: å skape."
                </p>
              </div>
            </div>
          </div>

          {/* Høyre side: Visjonen (Visualisert) */}
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl border border-emerald-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-3xl" />
              
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 mb-2">Vår Visjon</p>
              <h3 className="text-xl font-bold mb-6">Sømløs dataflyt</h3>
              
              <div className="space-y-8 relative">
                {[
                  { label: "Tilbud & Salg", desc: "Datagrunnlaget legges én gang" },
                  { label: "Konstruksjon", desc: "Automatisk produksjons grunnlag" },
                  { label: "Produksjon", desc: "Sømløs overføring til produksjon" }
                ].map((step, i, arr) => (
                  <div key={step.label} className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500 text-[10px] font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{step.label}</p>
                        <p className="text-xs text-slate-400">{step.desc}</p>
                      </div>
                    </div>
                    {i !== arr.length - 1 && (
                      <div className="absolute left-3 top-6 h-8 w-px bg-gradient-to-b from-sky-500 to-transparent" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Informasjonen skal følge produktet – ikke operatøren. Vi fjerner manuelt dobbeltarbeid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}