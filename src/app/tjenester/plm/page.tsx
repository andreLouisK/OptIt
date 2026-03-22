import { ServiceDetailHero } from "@/components/tjenester/details/ServiceDetailHero";
import { ServiceFeatureGrid } from "@/components/tjenester/details/ServiceFeatureGrid";
import { SoftwareShowcase } from "@/components/tjenester/details/SoftwareShowcase";
import { ServiceNavigation } from "@/components/tjenester/details/ServiceNavigation";
import {
  Database,
  GitBranch,
  ClipboardCheck,
  Share2,
  FileStack,
  ShieldCheck
} from "lucide-react";

export default function PlmPage() {
  const plmFeatures = [
    {
      title: "Produktstruktur & BOM",
      description: "Vi hjelper dere med å sette opp ryddige styringslister (Bill of Materials) som sikrer kontroll fra design til produksjon.",
      icon: FileStack,
    },
    {
      title: "Endringshåndtering (ECN/ECO)",
      description: "Implementering av digitale arbeidsflyter for endringsordrer, slik at alle ledd i kjeden alltid har riktig revisjon.",
      icon: GitBranch,
    },
    {
      title: "Samsvar og Dokumentasjon",
      description: "Sikre at alle tekniske underlag, sertifiseringer og kravspesifikasjoner er knyttet direkte til produktet.",
      icon: ClipboardCheck,
    },
    {
      title: "Sentralisert datakilde",
      description: "Eliminer siloer ved å samle all produktdata i ett system som fungerer som 'Single Source of Truth'.",
      icon: Database,
    },
    {
      title: "Samhandling i verdikjeden",
      description: "Trygg deling av data med underleverandører og partnere uten behov for usikre e-poster eller filoverføringer.",
      icon: Share2,
    },
    {
      title: "Kvalitetssikring",
      description: "Integrer kvalitetskontroll og avvikshåndtering direkte i produktets livssyklus for bedre sporbarhet.",
      icon: ShieldCheck,
    },
  ];

  const platforms = [
    "Arena PLM", 
    "Windchill", 
    "Teamcenter", 
    "Propel", 
    "Upchain", 
    "Autodesk Fusion 360 Manage", 
    "Aras Innovator", 
    "SAP PLM"
  ];

  const recommendations = [
    {
      name: "Arena PLM",
      logoUrl: "https://www.arenasolutions.com/wp-content/plugins/arena-solutions-modules/assets/images/Arena-Logo.svg",
      logoAlt: "Arena PLM logo – skybasert Product Lifecycle Management programvare for industri",
      badge: "PLM – Vår anbefaling",
      description: "Verdens ledende skybaserte PLM-system som knytter sammen CAD, forsyningskjede og produksjon på en unik måte.",
      features: [
        "Full kontroll på BOM og produktstruktur",
        "Effektiv endringshåndtering (ECO)",
        "Sømløs integrasjon mot CAD og ERP",
        "Rask implementering uten lokal IT-infrastruktur"
      ],
    },
    {
      name: "PTC Windchill",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/PTC_Windchill.png",
      logoAlt: "PTC Windchill logo – Enterprise PLom-løsning for komplekse produktstrukturer",
      badge: "Enterprise PLM",
      description: "En av markedets mest robuste PLM-løsninger, ideell for komplekse produktstrukturer og store globale team.",
      features: [
        "Avansert konfigurasjonshåndtering",
        "Dyp integrasjon med de fleste CAD-verktøy",
        "Støtter svært komplekse arbeidsflyter",
        "Skalerbar for tusenvis av brukere"
      ],
    },
    {
      name: "Onshape PDM",
      logoUrl: "https://www.onshape.com/cdn-images/2db2486ec4e220b607223acf5f79cfe5e02d7859-216x49.svg?w=640",
      logoAlt: "Onshape logo – skybasert CAD med innebygd PDM og versjonskontroll",
      badge: "PDM – Innebygd løsning",
      description: "For bedrifter som ønsker PDM integrert direkte i CAD-verktøyet for umiddelbar versjonskontroll.",
      features: [
        "Innebygd versjonshåndtering",
        "Ingen utsjekking/innsjekking av filer",
        "Sanntids samarbeid for ingeniører",
        "Perfekt for smidige utviklingsteam"
      ],
    }
  ];

  return (
    <main>
      <ServiceDetailHero
        badge="PLM-Konsultasjon"
        title="Full kontroll på"
        subtitle="Produktlivssyklusen"
        description="Vi hjelper din bedrift med å strukturere produktdata, automatisere endringsprosesser og koble verdikjeden tettere sammen med moderne PLM-verktøy."
        themeColor="orange"
      />

      <ServiceFeatureGrid
        badge="PLM-Ekspertise"
        title="Våre PLM-tjenester"
        description="Fra strategisk rådgivning til ferdig implementert system – vi sikrer at data flyter sømløst gjennom hele organisasjonen."
        features={plmFeatures}
        themeColor="orange" // PLM bruker orange i din definisjon
      />

      <SoftwareShowcase
        title="Plattformuavhengig"
        subtitle="Vi kjenner systemene"
        description="Vi har erfaring med de fleste ledende PLM-plattformene og hjelper dere å velge den som passer deres kompleksitet og budsjett."
        allPlatforms={platforms}
        recommendedSolutions={recommendations}
        themeColor="orange"
      />

      <ServiceNavigation 
        currentPath="/tjenester/plm" 
        themeColor="orange" 
      />
    </main>
  );
}