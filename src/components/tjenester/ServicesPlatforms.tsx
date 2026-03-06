const platforms = [
  "SolidWorks",
  "Onshape",
  "Inventor",
  "Fusion 360",
  "CATIA",
  "Creo",
  "NX",
  "Arena PLM",
  "Windchill",
  "Teamcenter",
  "Vault",
  "ENOVIA",
];

export function ServicesPlatforms() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Vi jobber med de fleste CAD- og PLM-systemer
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Uansett hvilken plattform du bruker i dag, kan vi hjelpe deg å få
            mest mulig ut av den – eller bistå med en eventuell migrering.
          </p>
        </div>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {platforms.map((name) => (
            <div
              key={name}
              className="min-w-[120px] rounded-xl border border-slate-200 bg-white px-4 py-2 text-center text-xs font-medium text-slate-800 shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

