"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, Phone, Send, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { sendEmail } from "../actions/sendEmail";

const services = [
  "CAD-konsultasjon",
  "PLM-konsultasjon",
  "CAD/PLM/ERP-integrasjon",
  "CAM & Maskinstyring",
  "Annet",
];

export default function KontaktPage() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  
  // Custom Dropdown State
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lukk dropdown hvis man klikker utenfor
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");
  
    const formData = new FormData(event.currentTarget);
    // Siden vi bruker en custom dropdown, må vi legge til verdien manuelt i FormData
    formData.append("service", selectedService);
  
    const result = await sendEmail(formData);
  
    setPending(false);
    if (result.error) {
      setMessage("Feil: " + result.error);
    } else {
      setMessage("Takk! Meldingen din er sendt.");
      (event.target as HTMLFormElement).reset();
      setSelectedService("");
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-16 md:grid-cols-2">
          
          {/* INFO-KOLONNE */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">Kontakt oss</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
                La oss ta en <span className="text-sky-400">prat</span>
              </h1>
              <p className="mt-4 text-lg text-slate-400">
                Trenger du hjelp med CAD, PLM eller digitalisering av produksjonen? 
                Fyll ut skjemaet, så hører du fra oss innen kort tid.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sky-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-slate-500">E-post</p>
                  <p className="font-medium">post@optit.no</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sky-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-slate-500">Telefon</p>
                  <p className="font-medium">+47 123 45 678</p>
                </div>
              </div>
            </div>
          </div>

          {/* SKJEMA-KOLONNE */}
<div className="relative">
  <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-sky-500/20 to-emerald-500/20 blur-2xl opacity-50" />
  <form 
    onSubmit={handleSubmit}
    className="relative rounded-[2rem] border border-white/10 bg-slate-900/50 p-8 backdrop-blur-md"
  >
    <div className="space-y-5">
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400 ml-1">Navn*</label>
          <input 
            name="name" // LAGT TIL
            required 
            className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-white focus:border-sky-500 focus:outline-none transition-all outline-none" 
            placeholder="Ola Nordmann" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400 ml-1">E-post*</label>
          <input 
            name="email" // LAGT TIL
            required 
            type="email" 
            className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-white focus:border-sky-500 focus:outline-none transition-all outline-none" 
            placeholder="ola@bedrift.no" 
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400 ml-1">Telefon</label>
          <input 
            name="phone" // LAGT TIL
            type="tel" 
            className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-white focus:border-sky-500 focus:outline-none transition-all outline-none" 
            placeholder="+47 000 00 000" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400 ml-1">Bedrift</label>
          <input 
            name="company" // LAGT TIL
            className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-white focus:border-sky-500 focus:outline-none transition-all outline-none" 
            placeholder="Bedrift AS" 
          />
        </div>
      </div>

      {/* CUSTOM DROPDOWN - Her bruker vi "selectedService" staten i handleSubmit, 
          så denne trenger ikke "name" direkte på samme måte som inputene */}
      <div className="space-y-2" ref={dropdownRef}>
        <label className="text-xs font-medium text-slate-400 ml-1">Hva gjelder henvendelsen?*</label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex w-full items-center justify-between rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-left transition-all outline-none",
              isOpen ? "border-sky-500 ring-1 ring-sky-500/20" : "hover:bg-slate-800",
              !selectedService ? "text-slate-500" : "text-white"
            )}
          >
            <span>{selectedService || "Velg tjeneste"}</span>
            <ChevronDown className={cn("transition-transform duration-300", isOpen && "rotate-180")} size={16} />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 z-20 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => {
                    setSelectedService(service);
                    setIsOpen(false);
                  }}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-slate-300 hover:bg-sky-500 hover:text-white transition-colors"
                >
                  {service}
                  {selectedService === service && <Check size={14} className="text-white" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-medium text-slate-400 ml-1">Melding*</label>
        <textarea 
          name="message" // LAGT TIL
          required 
          rows={4} 
          className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-white focus:border-sky-500 focus:outline-none transition-all outline-none" 
          placeholder="Hva kan vi hjelpe deg med?" 
        />
      </div>

      <button 
        disabled={pending}
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 py-4 font-bold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 active:scale-[0.98] disabled:opacity-50"
      >
        {pending ? "Sender..." : <>Send melding <Send size={18} /></>}
      </button>
      
      {message && <p className="mt-4 text-center text-sm font-medium text-emerald-400">{message}</p>}
    </div>
  </form>
</div>
        </div>
      </div>
    </div>
  );
}