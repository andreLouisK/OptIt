type ServiceBlockProps = {
  id?: string;
  pillLabel: string;
  pillColor: "green" | "orange" | "purple" | "blue";
  title: string;
  description: string;
  bullets: string[];
  ctaLabel?: string;
  reverse?: boolean;
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
}: ServiceBlockProps) {
  const pill = pillStyles[pillColor];

  return (
    <section id={id} className="bg-white py-10 scroll-mt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:px-8">
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
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            {description}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {bullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span
                  className={`mt-1 h-4 w-4 shrink-0 rounded-full ${pill.text} bg-current/10`}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-5 inline-flex items-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-400">
            {ctaLabel}
          </button>
        </div>
        <div
          className={`flex-1 ${
            reverse ? "md:order-1" : "md:order-2"
          } flex items-center justify-center`}
        >
          <div className="h-52 w-full max-w-md rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-700 to-emerald-500 shadow-lg md:h-64" />
        </div>
      </div>
    </section>
  );
}

