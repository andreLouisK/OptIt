import { ServiceDetailHero } from "@/components/tjenester/details/ServiceDetailHero";
import { ServiceFeatureGrid } from "@/components/tjenester/details/ServiceFeatureGrid";
import { SoftwareShowcase } from "@/components/tjenester/details/SoftwareShowcase";
import { ServiceNavigation } from "@/components/tjenester/details/ServiceNavigation";
import {
  BrainCircuit,
  Lightbulb,
  Bot,
  BarChart3,
  Microscope,
  Sparkles
} from "lucide-react";

export default function AiPage() {
  const aiFeatures = [
    {
      title: "Automatisering av rutineoppgaver",
      description: "Vi identifiserer repetitive manuelle steg i dine prosesser og erstatter dem med intelligente, selvgående arbeidsflyter.",
      icon: Bot,
    },
    {
      title: "Generativ Design-støtte",
      description: "Bruk AI for å utforske tusenvis av designvariasjoner basert på dine krav til vekt, styrke og materialbruk.",
      icon: Lightbulb,
    },
    {
      title: "Prediktiv analyse",
      description: "Bruk historiske data for å forutse vedlikeholdsbehov eller produksjonsflaskehalser før de oppstår.",
      icon: BarChart3,
    },
    {
      title: "Intelligent Databehandling",
      description: "Automatisk klassifisering og tagging av teknisk dokumentasjon og tegninger ved hjelp av maskinsyn og NLP.",
      icon: BrainCircuit,
    },
    {
      title: "Kvalitetskontroll med AI",
      description: "Implementering av kamerasystemer som automatisk oppdager avvik og produksjonsfeil i sanntid.",
      icon: Microscope,
    },
    {
      title: "Skreddersydde AI-agenter",
      description: "Vi utvikler interne assistenter som kjenner din bedrifts spesifikke data og prosedyrer for raskere beslutningsstøtte.",
      icon: Sparkles,
    },
  ];

  const platforms = [
    "OpenAI API", 
    "Azure AI Services", 
    "AWS Bedrock", 
    "Python / PyTorch", 
    "TensorFlow", 
    "LangChain", 
    "n8n AI", 
    "Vertex AI"
  ];

  const recommendations = [
    {
      name: "Azure AI Services",
      logoUrl: "https://mcaconnect.com/wp-content/uploads/2024/09/vs-2.png",
      logoAlt: "Microsoft Azure AI logo – sikker plattform for kunstig intelligens og maskinlæring i skyen",
      badge: "Enterprise – Vår anbefaling",
      description: "Den tryggeste plattformen for bedrifter som ønsker å bruke AI på egne data uten å kompromittere sikkerhet eller personvern.",
      features: [
        "Sikker håndtering av bedriftsintern data",
        "Ferdige modeller for tekst og bildeanalyse",
        "Sømløs integrasjon med Microsoft-økosystemet",
        "Skalerbar infrastruktur for tunge oppgaver"
      ],
    },
    {
      name: "n8n / Automatisering",
      logoUrl: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png",
      logoAlt: "n8n logo – kraftig verktøy for visuell arbeidsflyt-automatisering og AI-integrasjon",
      badge: "Smidig Innovasjon",
      description: "En kraftig plattform for å koble AI direkte inn i dine eksisterende arbeidsflyter og systemer uten tung koding.",
      features: [
        "Visuell bygging av AI-arbeidsflyter",
        "Kobler sammen hundrevis av apper",
        "Rask 'Time-to-market' for nye ideer",
        "Fleksibel hosting (Cloud eller On-prem)"
      ],
    }
  ];

  return (
    <main>
      <ServiceDetailHero
        badge="AI & Fremtidens Teknologi"
        title="Øk effektiviteten med"
        subtitle="Intelligente Løsninger"
        description="Vi hjelper deg å navigere i AI-landskapet. Ved å integrere kunstig intelligens der det faktisk gir verdi, transformerer vi data til handling og kjedelige oppgaver til automatisert suksess."
        themeColor="rose"
      />

      <ServiceFeatureGrid
        badge="AI-Ekspertise"
        title="Smartere måter å jobbe på"
        description="Vi fokuserer på praktisk AI som løser reelle problemer i ingeniør- og produksjonsbedrifter."
        features={aiFeatures}
        themeColor="rose"
      />

      <SoftwareShowcase
        title="Teknologistabel"
        subtitle="Moderne verktøy for AI"
        description="Vi bruker de kraftigste plattformene i markedet for å bygge løsninger som er både sikre, skalerbare og smarte."
        allPlatforms={platforms}
        recommendedSolutions={recommendations}
        themeColor="rose"
      />

      <ServiceNavigation 
        currentPath="/tjenester/ai" 
        themeColor="rose" 
      />
    </main>
  );
}