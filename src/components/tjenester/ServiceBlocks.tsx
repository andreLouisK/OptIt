import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ServiceBlockProps = {
  id?: string;
  pillLabel: string;
  pillColor: "green" | "orange" | "purple" | "blue" | "red";
  title: string;
  description: string;
  imageAlt?: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string; // Ny prop for dynamisk lenking
  reverse?: boolean;
  imageSrc?: string;
};

const pillStyles: Record<
  ServiceBlockProps["pillColor"],
  { bg: string; text: string; button: string }
> = {
  green: {
    bg: "bg-emerald-50 text-emerald-700",
    text: "text-emerald-600",
    button: "bg-emerald-600 hover:bg-emerald-500",
  },
  orange: {
    bg: "bg-orange-50 text-orange-700",
    text: "text-orange-600",
    button: "bg-orange-600 hover:bg-orange-500",
  },
  purple: {
    bg: "bg-purple-50 text-purple-700",
    text: "text-purple-600",
    button: "bg-purple-600 hover:bg-purple-500",
  },
  blue: {
    bg: "bg-sky-50 text-sky-700",
    text: "text-sky-600",
    button: "bg-sky-600 hover:bg-sky-500",
  },
  red: {
    bg: "bg-red-50 text-red-700",
    text: "text-red-600",
    button: "bg-red-600 hover:bg-red-500",
  },
};

export function ServiceBlock({
  id,
  pillLabel,
  pillColor,
  title,
  description,
  bullets,
  ctaLabel = "Les mer",
  ctaHref = "/kontakt", // Fallback til kontakt hvis ingen href er oppgitt
  reverse,
  imageSrc,
  imageAlt,
}: ServiceBlockProps) {
  const pill = pillStyles[pillColor];

  return (
    <section id={id} className="bg-white py-12 md:py-20 scroll-mt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:px-8">
        
        {/* Tekst-seksjon */}
        <div
          className={cn(
            "flex-1",
            reverse ? "md:order-2 md:pl-10" : "md:pr-10"
          )}
        >
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
              pill.bg
            )}
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
                  className={cn(
                    "mt-1 h-5 w-5 shrink-0 rounded-full flex items-center justify-center bg-current/10",
                    pill.text
                  )}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <Link href={ctaHref}>
            <button className={cn(
              "mt-8 inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md transition",
              pill.button
            )}>
              {ctaLabel}
            </button>
          </Link>
        </div>

        {/* Bilde-seksjon */}
        <div
          className={cn(
            "flex-1 flex items-center justify-center",
            reverse ? "md:order-1" : "md:order-2"
          )}
        >
          <div className="relative overflow-hidden h-52 w-full max-w-md rounded-3xl bg-slate-100 shadow-lg md:h-64 border border-slate-200">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={id === "cad"}
              />
            ) : (
              /* Fallback gradient hvis bilde mangler */
              <div className={cn(
                "h-full w-full bg-gradient-to-tr from-slate-900 via-slate-800",
                pillColor === "green" && "to-emerald-500",
                pillColor === "orange" && "to-orange-500",
                pillColor === "purple" && "to-purple-500",
                pillColor === "blue" && "to-sky-500",
                pillColor === "red" && "to-red-500"
              )} />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}