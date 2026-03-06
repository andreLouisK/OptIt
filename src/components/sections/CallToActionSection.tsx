import Link from "next/link";

export function CallToActionSection() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Klar for å ta produksjonen{" "}
          <span className="text-sky-400">til neste nivå?</span>
        </h2>
        <p className="mt-4 text-sm text-slate-300 md:text-base">
          La oss diskutere hvordan vi kan hjelpe din bedrift med å optimalisere
          prosesser, redusere kostnader og øke konkurranseevnen.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
          >
            Ta kontakt
          </Link>
          <p className="text-xs text-slate-400">
            Eller ring oss direkte:{" "}
            <span className="font-medium text-slate-200">
              +47 900 00 000
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

