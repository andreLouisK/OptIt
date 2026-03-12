import React from "react";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";

export function Team() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr] items-center">
          
          {/* Venstre: Profilbilde/Kort */}
          <div className="relative group w-full max-w-md lg:max-w-full mx-auto lg:mx-0">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-sky-500 to-emerald-500 opacity-20 blur transition duration-500 group-hover:opacity-40" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 w-full shadow-2xl">
              
              {/* Firkantet bilde */}
              <div className="aspect-square relative bg-slate-800 w-full">
                <Image
                  src="/images/team/André Louis Kristensen - OptIT"
                  alt="André Louis Kristensen, Grunder av OptIT, daglig leder og spesialist innen systemutvikling"
                  fill
                  className="object-cover"
                />
                {/* Fallback hvis bilde mangler */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 italic bg-slate-800 z-[-1]">
                  [ Profilbilde ]
                </div>
              </div>

              {/* Kompakt tekstområde */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white leading-tight">
                  André Louis Kristensen
                </h3>
                <p className="text-xs text-sky-400 font-medium mt-1 mb-3">
                  Daglig leder & Spesialist
                </p>
                
                <div className="h-px bg-white/5 w-full mb-3" />

                <div className="space-y-2">
                  {/* LinkedIn */}
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://linkedin.com/in/andré-kristensen-5556aa338" 
                    className="flex items-center gap-3 text-slate-400 transition hover:text-sky-400 group/link"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition group-hover/link:bg-sky-500/10">
                      <Linkedin size={14} />
                    </div>
                    <span className="text-xs font-medium">LinkedIn Profil</span>
                  </a>

                  {/* E-post */}
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="mailto:andre@optit.no" 
                    className="flex items-center gap-3 text-slate-400 transition hover:text-sky-400 group/link"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition group-hover/link:bg-sky-500/10">
                      <Mail size={14} />
                    </div>
                    <span className="text-xs font-medium">andre@optit.no</span>
                  </a>

                  {/* Telefon */}
                  <a 
                    href="tel:+4747385064" 
                    className="flex items-center gap-3 text-slate-400 transition hover:text-sky-400 group/link"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition group-hover/link:bg-sky-500/10">
                      <Phone size={14} />
                    </div>
                    <span className="text-xs font-medium">+47 473 85 064</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Høyre: Tekst og Ekspertise */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                Gründeren bak OptIT
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Din partner for teknisk utvikling
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
              <p>
                Med en bred erfaring fra hele verdikjeden i industrien – fra maskinstyring 
                og 3D-konstruksjon til kompleks API-utvikling – brenner jeg for å skape 
                løsninger som faktisk fungerer i en travel arbeidshverdag.
              </p>
              <p>
                Som din hovedkontakt i OptIT sørger jeg for at vi alltid ser helheten. 
                Enten det gjelder å automatisere en tegnefase eller integrere tunge 
                PLM-systemer, er målet mitt å fjerne de tekniske hindringene som holder 
                din bedrift tilbake.
              </p>
              <p className="text-sm italic text-slate-400 border-l border-white/10 pl-4">
                For større prosjekter samarbeider vi med et nettverk av spesialister og 
                partnere som deler vår visjon om en sømløs produktflyt. Dette gir oss 
                kapasiteten til å levere robust uansett kompleksitet.
              </p>
            </div>

            {/* Små tags for spisskompetanse */}
            <div className="flex flex-wrap gap-2 pt-4">
              {["CAD/CAM", "API-utvikling", "PLM", "Systemutvikling", "Automatisering"].map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-400 transition hover:border-sky-500/50 hover:text-sky-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}