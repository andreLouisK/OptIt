import Link from "next/link";

const services = [
  {
    title: "CAD-konsultasjon",
    description:
      "Implementering, optimalisering og konsultasjon på alle ledende CAD-plattformer. Vi hjelper deg med å velge riktig løsning og få mest mulig ut av den.",
    href: "/tjenester#cad",
    accent: "from-emerald-400/30 to-emerald-300/10",
    shadow: "shadow-[0_18px_45px_rgba(16,185,129,0.20)]",
    icon: "cpu",
  },
  {
    title: "PLM-konsultasjon",
    description:
      "Oppsett og tilpasning av PLM-systemer for komplett produktlivssyklushåndtering. Styrket kontroll på endringer, dokumentasjon og prosesser.",
    href: "/tjenester#plm",
    accent: "from-orange-400/30 to-orange-300/10",
    shadow: "shadow-[0_18px_45px_rgba(249,115,22,0.20)]",
    icon: "database",
  },
  {
    title: "CAD/PLM/ERP-integrasjon",
    description:
      "Vi kobler systemene dine sammen via API og dataintegrasjoner for å redusere manuelle steg og sikre oppdatert informasjon gjennom hele organisasjonen.",
    href: "/tjenester#integrasjon",
    accent: "from-purple-400/30 to-purple-300/10",
    shadow: "shadow-[0_18px_45px_rgba(168,85,247,0.20)]",
    icon: "network",
  },
  {
    title: "CAM & Maskinstyring",
    description:
      "Programmering og optimalisering av CNC-maskiner. Postprosessor / CAM-oppsett, verktøystrategier og maskinoptimalisering for effektiv produksjon.",
    href: "/tjenester#cam",
    accent: "from-sky-400/30 to-sky-300/10",
    shadow: "shadow-[0_18px_45px_rgba(56,189,248,0.20)]",
    icon: "wrench",
  },
];

export function ServicesOverviewSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Våre tjenester
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Komplett kompetanse for{" "}
            <span className="text-sky-600">din produktutvikling</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-slate-600 md:text-base">
            Fra 3D-modellering til produksjonsoptimalisering – vi hjelper deg
            med å finne riktige verktøy for din bedrift.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex rounded-3xl border border-transparent bg-slate-50/0 p-[1px] transition hover:-translate-y-1"
            >
              <div
                className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b ${service.accent} opacity-40 blur-xl transition group-hover:opacity-80`}
              />
              <div
                className={`relative z-10 flex flex-1 flex-col overflow-hidden rounded-[1.3rem] bg-white p-5 shadow-md transition-shadow group-hover:shadow-xl ${service.shadow}`}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-sky-500 ring-1 ring-slate-200">
                  {service.icon === "cpu" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="green"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="16" height="16" x="4" y="4" rx="2" />
                      <rect width="6" height="6" x="9" y="9" rx="1" />
                      <path d="M15 2v2" />
                      <path d="M15 20v2" />
                      <path d="M2 15h2" />
                      <path d="M2 9h2" />
                      <path d="M20 15h2" />
                      <path d="M20 9h2" />
                      <path d="M9 2v2" />
                      <path d="M9 20v2" />
                    </svg>
                  ) : service.icon === "database" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="Orange"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                      <path d="M3 12A9 3 0 0 0 21 12" />
                    </svg>
                  ) : service.icon === "network" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="Purple"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="16" y="16" width="6" height="6" rx="1" />
                      <rect x="2" y="16" width="6" height="6" rx="1" />
                      <rect x="9" y="2" width="6" height="6" rx="1" />
                      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                      <path d="M12 12V8" />
                    </svg>
                  ) : service.icon === "wrench" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="Blue"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  ) : (
                    <span className="h-4 w-4 rounded-sm bg-current/80" />
                  )}
                </div>
                <h3 className="mt-1 text-sm font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 md:text-sm">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center text-xs font-medium text-sky-600">
                  Les mer
                  <span className="ml-1 inline-block transition group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

