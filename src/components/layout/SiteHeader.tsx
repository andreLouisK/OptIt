"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

// Kun de rene lenkene, ingen ikoner eller ekstra tekst
const serviceItems = [
  { href: "/tjenester/cad", label: "CAD-Konsultasjon" },
  { href: "/tjenester/plm", label: "PLM-konsultasjon" },
  { href: "/tjenester/integrasjon", label: "CAD/PLM/ERP-integrasjon" },
  { href: "/tjenester/cam", label: "CAM & Maskinstyring" },
  { href: "/tjenester/ai", label: "AI-integrasjon" },
];

const navItems = [
  { href: "/", label: "Hjem" },
  // Tjenester håndteres manuelt for å få dropdown
  { href: "/om-optit", label: "Om OptIT" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // For mobilmenyen
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Hindrer scrolling når mobilmeny er åpen
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setServicesOpen(false); // Nullstill tjeneste-trekkspillet når meny lukkes
    }
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  const isServicesActive = pathname.startsWith("/tjenester");

  return (
    <>
      <header className="sticky top-0 z-[60] border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
          {/* LOGO */}
          <Link href="/" className="relative z-[70] flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              Opt<span className="text-sky-400">IT</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link
              href="/"
              className={cn(
                "py-2 transition-colors",
                isActive("/") ? "text-sky-400 font-semibold" : "text-slate-300 hover:text-sky-400"
              )}
            >
              Hjem
            </Link>

            {/* DROPDOWN FOR TJENESTER (DESKTOP) */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="/tjenester"
                // HER SKJER MAGIEN: Vi tvinger staten til false når man klikker
                onClick={() => {
                  setIsDropdownOpen(false);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-1 py-6 transition-colors outline-none",
                  isServicesActive ? "text-sky-400 font-semibold" : "text-slate-300 hover:text-sky-400"
                )}
              >
                Tjenester
                <ChevronDown
                  size={14}
                  className={cn("transition-transform duration-200", isDropdownOpen ? "rotate-180" : "")}
                />
              </Link>

              {/* Dropdown Boks - Nå med glass-effekt som matcher header */}
<div className={cn(
  "absolute top-full left-0 w-48 transition-all duration-200 ease-out z-[80]",
  isDropdownOpen 
    ? "opacity-100 visible translate-y-0" 
    : "opacity-0 invisible translate-y-2"
)}>
  {/* Usynlig bro */}
  <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
  
  <div className="bg-slate-950/95 backdrop-blur-md border border-white/10 rounded-xl py-2 shadow-2xl overflow-hidden">
    <div className="flex flex-col">
      {serviceItems.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          onClick={() => {
            setIsDropdownOpen(false);
            setIsOpen(false);
          }}
          className={cn(
            "px-4 py-2.5 text-sm transition-colors",
            pathname === service.href 
              ? "bg-sky-500/20 text-sky-400 font-semibold" 
              : "text-slate-300 hover:bg-white/5 hover:text-sky-400"
          )}
        >
          {service.label}
        </Link>
      ))}
    </div>
  </div>
</div>
            </div>

            {/* RESTEN AV MENYVALGENE */}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-2 transition-colors",
                  isActive(item.href) ? "text-sky-400 font-semibold" : "text-slate-300 hover:text-sky-400"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/kontakt"
              className="hidden rounded-full bg-[#00a8ff] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-sky-400 hover:-translate-y-0.5 md:inline-flex"
            >
              Ta kontakt
            </Link>

            {/* MOBIL-KNAPP */}
            <button
              className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBIL-OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 z-[50] flex flex-col overflow-y-auto bg-slate-950/98 backdrop-blur-xl transition-all duration-300 md:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col min-h-full py-24 px-8">
          <nav className="flex flex-col">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "border-b border-white/5 py-5 text-2xl font-semibold transition-all",
                isActive("/") ? "text-sky-400" : "text-white hover:text-sky-400"
              )}
            >
              Hjem
            </Link>

            {/* Tjenester Trekkspill (Mobil) */}
            <div className="border-b border-white/5 py-5 flex flex-col">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <Link
                  href="/tjenester"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-semibold transition-all",
                    isServicesActive && !servicesOpen ? "text-sky-400" : "text-white"
                  )}
                >
                  Tjenester
                </Link>
                <button
                  className="p-2 -mr-2 text-slate-400"
                  onClick={(e) => {
                    e.preventDefault(); // Hindrer navigering når man bare vil åpne menyen
                    setServicesOpen(!servicesOpen);
                  }}
                >
                  <ChevronDown
                    size={24}
                    className={cn("transition-transform duration-300", servicesOpen ? "rotate-180 text-sky-400" : "")}
                  />
                </button>
              </div>

              {/* Undermeny Mobil */}
              <div className={cn(
                "overflow-hidden transition-all duration-300 flex flex-col gap-4",
                servicesOpen ? "max-h-[400px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
              )}>
                {serviceItems.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "pl-4 text-lg font-medium transition-colors",
                      pathname === service.href ? "text-sky-400" : "text-slate-400 hover:text-white"
                    )}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "border-b border-white/5 py-5 text-2xl font-semibold transition-all",
                  isActive(item.href) ? "text-sky-400" : "text-white hover:text-sky-400"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-12">
            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#00a8ff] py-4 text-lg font-bold text-white transition hover:bg-sky-400 active:scale-[0.98]"
            >
              Ta kontakt
            </Link>

            <p className="mt-6 text-center text-xs text-slate-500">
              post@optit.no <br />
              Basert i Norge — Leverer til hele verden
            </p>
          </div>
        </div>
      </div>
    </>
  );
}