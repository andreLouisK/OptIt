import React from "react";

const teamMembers = [
  { name: "Name Name", title: "Spesialist CAD/PLM", expertise: "Dedikert til å finne de beste løsningene for dine prosjekter." },
  { name: "Maskiningeniør", title: "Maskiningeniør", expertise: "Dedikert til å finne de beste løsningene for dine prosjekter." },
] as const;

export function Team() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:px-8">
        <div>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            TEAMET
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Teamet bak OptIT
          </h2>
        </div>

        {/* Teammedlemmer i kortformat */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900 p-8 text-center text-slate-50 min-h-[300px] shadow-lg">
              <div className="space-y-3">
                <p className="text-2xl font-bold text-white">{member.name}</p>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{member.title}</p>
              </div>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {member.expertise}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center max-w-2xl mt-8">
            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Et team av lidenskapelige eksperter</h3>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed md:text-base">Dedikert til å finne de beste løsningene for dine prosjekter.</p>
        </div>
      </div>
    </section>
  );
}