import Link from "next/link";

export function AboutHero() {
  return (
    <section className="border-b border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-20 md:px-8 md:pb-20 md:pt-24">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              OM OSS
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              Drevet av lidenskap for{" "}
              <span className="text-sky-300">industriell innovasjon</span>
            </h1>
            <p className="max-w-2xl text-sm text-slate-200 md:text-base">
              Vi er dedikerte eksperter som forener dyp teknisk forståelse med lidenskap for norsk industri. Vårt mål er å digitalisere din produksjon og optimalisere din suksess.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}