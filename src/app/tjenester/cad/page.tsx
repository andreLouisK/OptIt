import { ServiceDetailHero } from "@/components/tjenester/details/ServiceDetailHero";
import { ServiceFeatureGrid } from "@/components/tjenester/details/ServiceFeatureGrid";
import { SoftwareShowcase } from "@/components/tjenester/details/SoftwareShowcase";
import { ServiceNavigation } from "@/components/tjenester/details/ServiceNavigation";
import {
  Settings2,
  Users,
  GraduationCap,
  Box,
  CheckCircle2,
  ArrowLeftRight
} from "lucide-react";

export default function CadPage() {
  const cadFeatures = [
    {
      title: "Systemvalg og rådgivning",
      description: "Vi analyserer dine behov og hjelper deg å velge de mest kostnadseffektive verktøyene for din arbeidsflyt.",
      icon: Settings2,
    },
    {
      title: "Implementering og onboarding",
      description: "Sømløs installasjon og oppsett av CAD-miljøet slik at teamet deres kommer raskt i gang.",
      icon: Users,
    },
    {
      title: "Opplæring og kompetanse",
      description: "Skreddersydde kurs for å øke effektiviteten og sikre at alle mestrer verktøyene optimalt.",
      icon: GraduationCap,
    },
    {
      title: "Avansert 3D-modellering",
      description: "Hjelp til kompleks tegningsutvikling og strukturering av store sammenstillinger.",
      icon: Box,
    },
    {
      title: "Beste praksis og struktur",
      description: "Vi setter opp felles standarder og metodikk for at prosjektene skal være ryddige og skalerbare.",
      icon: CheckCircle2,
    },
    {
      title: "Migrering mellom systemer",
      description: "Trygg overføring av data og tegninger når dere bytter plattform eller oppgraderer.",
      icon: ArrowLeftRight,
    },
  ];

  const platforms = ["SolidWorks", "Onshape", "Inventor", "Fusion 360", "CATIA", "Creo", "NX", "Vault"];

  const recommendations = [
    {
      name: "Onshape",
      logoUrl: "https://www.onshape.com/cdn-images/2db2486ec4e220b607223acf5f79cfe5e02d7859-216x49.svg?w=640",
      logoAlt: "Onshape logo – skybasert CAD-plattform for moderne produktutvikling og sanntids samarbeid",
      badge: "Cloud Native – Vår anbefaling",
      description: "Fremtidens CAD-plattform som kjører 100% i skyen. Eliminerer filhåndtering, krasj og behovet for dyr maskinvare.",
      features: [
        "Ingen installasjon – kjører i nettleseren",
        "Innebygd PDM med full versjonskontroll",
        "Samarbeid i sanntid (som Google Docs)",
        "Automatiske oppdateringer hver 3. uke"
      ],
    },
    {
      name: "SolidWorks",
      logoUrl: "https://www.3ds.com/assets/3ds-navigation/3DS_corporate-logo_solidworks.svg",
      logoAlt: "SolidWorks logo – markedsledende programvare for parametrisk 3D-modellering og mekanisk konstruksjon",
      badge: "Markedsleder",
      description: "Verdens mest brukte 3D CAD-programvare. Enormt økosystem av tilleggsverktøy og kompetanse i markedet.",
      features: [
        "Kraftig parametrisk modellering",
        "Stort bibliotek av standardkomponenter",
        "Avansert simulering og analyse (FEA)",
        "Industristandard for produktutvikling"
      ],
    },
    {
      name: "Autodesk Inventor",
      logoUrl: "https://cadtalk.com/wp-content/uploads/2024/10/Autodesk-Inventor-Logo-Vector.svg-.png",
      logoAlt: "Autodesk Inventor logo – profesjonelt verktøy for mekanisk design og industriell automatisering",
      badge: "Industriell Automatisering",
      description: "Profesjonelt verktøy for mekanisk design, simulering og dokumentasjon med dyp integrasjon i Autodesk-universet.",
      features: [
        "Spesialverktøy for platearbeid og rammer",
        "iLogic for automatisering av design",
        "Sømløs kobling mot Revit og CAM",
        "Robust håndtering av store sammenstillinger"
      ],
    }
  ];


  return (
    <main>
      <ServiceDetailHero
        badge="CAD-Konsultasjon"
        title="De riktige verktøyene for"
        subtitle="Konstruksjon"
        description="Vi hjelper din bedrift med å implementere markedsledende CAD-verktøy, optimalisere arbeidsflyten og sikre at deres konstruktører har kompetansen de trenger."
        themeColor="emerald"
      />

      <ServiceFeatureGrid
        badge="CAD-Ekspertise"
        title="Våre CAD-tjenester"
        description="Fra valg av programvare til avansert metodikk – vi sikrer at deres designprosesser er i verdensklasse."
        features={cadFeatures}
        themeColor="emerald"
      />

      <SoftwareShowcase
        title="Plattformuavhengig"
        subtitle="Vi jobber med alle ledende systemer"
        description="Uansett hvilket verktøy dere bruker i dag, hjelper vi dere med å få mest mulig ut av investeringen."
        allPlatforms={platforms}
        recommendedSolutions={recommendations}
        themeColor="emerald"
      />

<ServiceNavigation 
        currentPath="/tjenester/cad" 
        themeColor="emerald" 
      />
    </main>
  );
}