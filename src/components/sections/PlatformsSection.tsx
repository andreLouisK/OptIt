import React from "react";

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
  "SAP",
];

export function PlatformsSection() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Plattformuavhengig ekspertise
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Vi jobber med{" "}
            <span className="text-sky-400">alle ledende systemer</span>
          </h2>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            Uansett hvilken plattform du bruker i dag – vi hjelper deg å få mest
            mulig ut av den.
          </p>
        </div>

        {/* Plattform-tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {platforms.map((name) => (
            <div
              key={name}
              className="rounded-full border border-slate-600/70 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-100 shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Anbefalte løsninger grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Onshape Kort */}
<div className="rounded-3xl border border-sky-500/20 bg-slate-900/70 p-6">
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
    CAD – anbefalt løsning
  </p>
  
  <div className="mt-4 mb-3 inline-flex rounded-lg bg-white p-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      <img 
          src="https://www.onshape.com/cdn-images/2db2486ec4e220b607223acf5f79cfe5e02d7859-216x49.svg?w=640" 
          alt="Onshape Logo"
          className="h-6 w-auto object-contain" 
      />
  </div>

  <p className="mt-3 text-sm text-slate-200">
    Vår anbefaling for nye CAD-miljøer. Skybasert plattform uten
    installasjon, med moderne versjonshåndtering og samarbeid.
  </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-200 md:text-sm">
              <li>Ingen installasjon – kjører i nettleseren</li>
              <li>Sømløst samarbeid med teamet</li>
              <li>Integrert PDM og versjonskontroll</li>
              <li>Tilgang fra mobil og nettbrett</li>
            </ul>
          </div>

          {/* Arena PLM Kort */}
<div className="rounded-3xl border border-emerald-500/20 bg-slate-900/70 p-6">
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
    Arena PLM – anbefalt løsning
  </p>
  
  <div className="mt-4 mb-3 inline-flex rounded-lg bg-white p-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      <img 
          src="https://www.arenasolutions.com/wp-content/plugins/arena-solutions-modules/assets/images/Arena-Logo.svg" 
          alt="Arena PLM Logo"
          className="h-6 w-auto object-contain" 
      />
  </div>

  <p className="mt-3 text-sm text-slate-200">
    Skybasert PLM-system for hele produktlivssyklusen – fra tidlig
    utvikling til serieproduksjon.
  </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-200 md:text-sm">
              <li>Strukturert håndtering av produktstruktur og BOM</li>
              <li>Effektiv endringshåndtering (ECO/ECN)</li>
              <li>Integrasjon mot CAD og ERP</li>
              <li>Tilgang for både interne og eksterne parter</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}