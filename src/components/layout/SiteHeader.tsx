"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

interface NavItem {
  href: string;
  label: string;
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Hindrer scrolling når menyen er åpen
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

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
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-sky-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/kontakt"
              className="hidden rounded-xl bg-sky-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 hover:-translate-y-0.5 md:inline-flex"
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

      {/* PROFESJONELL MOBIL-OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 z-[50] flex flex-col bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full justify-center px-8">
          <nav className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group flex items-center justify-between border-b border-white/5 pb-4 text-3xl font-semibold text-white transition-all",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
                <ArrowRight className="text-sky-400 opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          <div 
            className={cn(
                "mt-12 transition-all duration-500 delay-300",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-2xl bg-sky-500 py-5 text-lg font-bold text-white shadow-xl shadow-sky-500/20"
            >
              Ta kontakt
            </Link>
            
            <p className="mt-8 text-center text-sm text-slate-500">
              post@optit.no <br />
              Basert i Norge — Leverer til hele verden
            </p>
          </div>
        </div>
      </div>
    </>
  );
}