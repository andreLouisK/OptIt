import Image from "next/image";
import Link from "next/link";

type ServiceBlockProps = {
  id?: string;
  pillLabel: string;
  pillColor: "green" | "orange" | "purple" | "blue" | "red";
  title: string;
  description: string;
  bullets: string[];
  ctaLabel?: string;
  reverse?: boolean;
  imageSrc?: string; // Lagt til for bilde
};

const pillStyles: Record<
  ServiceBlockProps["pillColor"],
  { bg: string; text: string }
> = {
  green: {
    bg: "bg-emerald-50 text-emerald-700",
    text: "text-emerald-600",
  },
  orange: {
    bg: "bg-orange-50 text-orange-700",
    text: "text-orange-600",
  },
  purple: {
    bg: "bg-purple-50 text-purple-700",
    text: "text-purple-600",
  },
  blue: {
    bg: "bg-sky-50 text-sky-700",
    text: "text-sky-600",
  },
  red: {
    bg: "bg-red-50 text-red-700",
    text: "text-red-600",
  },
};

export function ServiceBlock({
  id,
  pillLabel,
  pillColor,
  title,
  description,
  bullets,
  ctaLabel = "Få tilbud",
  reverse,
  imageSrc, // Hentet ut prop
}: ServiceBlockProps) {
  const pill = pillStyles[pillColor];

  return (
    <section id={id} className="bg-white py-12 md:py-20 scroll-mt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:px-8">
        <div
          className={`flex-1 ${
            reverse ? "md:order-2 md:pl-10" : "md:pr-10"
          }`}
        >
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${pill.bg}`}
          >
            {pillLabel}
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            {description}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {bullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className={`mt-1 h-5 w-5 shrink-0 rounded-full flex items-center justify-center ${pill.text} bg-current/10`}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/kontakt">
            <button className="mt-8 inline-flex items-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-500">
              {ctaLabel}
            </button>
          </Link>
        </div>

        {/* Bilde-seksjonen */}
        <div
          className={`flex-1 ${
            reverse ? "md:order-1" : "md:order-2"
          } flex items-center justify-center`}
        >
          {/* Her har jeg beholdt h-52 og md:h-64 fra din originale kode */}
          <div className="relative overflow-hidden h-52 w-full max-w-md rounded-3xl bg-slate-100 shadow-lg md:h-64 border border-slate-200">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={id === "cad"} // Valgfritt: laster det første bildet raskere
              />
            ) : (
              /* Din originale gradient som fallback */
              <div className="h-full w-full bg-gradient-to-tr from-slate-900 via-slate-700 to-emerald-500" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}