import Link from "next/link";

export function ServicesCTA() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Usikker på hvilken løsning som passer?
        </h2>
        <p className="mt-3 text-sm text-slate-300 md:text-base">
          Vi hjelper deg med å velge riktig CAD/PLM-plattform basert på dine
          behov, budsjett og eksisterende infrastruktur.
        </p>
        <Link href="/kontakt">
          <button className="mt-7 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-400">
            Book en gratis konsultasjon
          </button>
        </Link>
      </div>
    </section>
  );
}

