import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="border-b border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-20 md:px-8 md:pb-20 md:pt-24">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Våre tjenester
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              Ekspertise innen{" "}
              <span className="text-sky-300">CAD, PLM</span> og{" "}
              <span className="text-emerald-300">produksjon</span>
            </h1>
            <p className="max-w-2xl text-sm text-slate-200 md:text-base">
              Vi hjelper deg å velge riktig verktøy, implementere det på en god
              måte, og få mest mulig ut av investeringen – uansett hvilken
              plattform du bruker.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

