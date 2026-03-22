import { ServiceDetailHero } from "@/components/tjenester/details/ServiceDetailHero";
import { ServiceFeatureGrid } from "@/components/tjenester/details/ServiceFeatureGrid";
import { SoftwareShowcase } from "@/components/tjenester/details/SoftwareShowcase";
import { ServiceNavigation } from "@/components/tjenester/details/ServiceNavigation";
import {
  Network,
  Zap,
  RefreshCw,
  Code2,
  Unplug,
  Workflow
} from "lucide-react";

export default function IntegrasjonPage() {
  const integrasjonFeatures = [
    {
      title: "Sømløs Dataflyt",
      description: "Vi eliminerer manuell inntasting ved å automatisere overføringen av delelister og metadata mellom CAD, PLM og ERP.",
      icon: RefreshCw,
    },
    {
      title: "API-utvikling",
      description: "Skreddersydde integrasjoner mot deres eksisterende systemer ved bruk av moderne API-grensesnitt og webhooks.",
      icon: Code2,
    },
    {
      title: "Automatisert BOM-overføring",
      description: "Sikre at produksjonsunderlaget i ERP-systemet alltid samsvarer med den tekniske strukturen i CAD/PLM.",
      icon: Workflow,
    },
    {
      title: "System-koblinger",
      description: "Vi bygger bro mellom isolerte 'datøyer' slik at hele organisasjonen jobber ut fra de samme sanntidsdataene.",
      icon: Network,
    },
    {
      title: "Sanntids-oppdatering",
      description: "Endringer i designet reflekteres umiddelbart i innkjøps- og produksjonsplanene for å unngå feilbestillinger.",
      icon: Zap,
    },
    {
      title: "Uavhengig Rådgivning",
      description: "Vi hjelper dere å velge riktig integrasjonsstrategi, enten det er 'point-to-point' eller via en integrasjonsplattform.",
      icon: Unplug,
    },
  ];

  const platforms = [
    "SAP", 
    "Microsoft Dynamics 365", 
    "Oracle NetSuite", 
    "Visma.net", 
    "Arena PLM API", 
    "Autodesk Forge", 
    "Power Automate", 
    "MuleSoft"
  ];

  const recommendations = [
    {
      name: "Arena PLM / ERP Integration",
      logoUrl: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDEyLjM4IDIwNCI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbC1ydWxlOmV2ZW5vZGQ7fS5jbHMtMXtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjIwNi4xOSIgeDI9IjIwNi4xOSIgeTI9IjIwNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwYjhmMSIvPjxzdG9wIG9mZnNldD0iMC4wMiIgc3RvcC1jb2xvcj0iIzAxYjZmMCIvPjxzdG9wIG9mZnNldD0iMC4zMSIgc3RvcC1jb2xvcj0iIzBkOTBkOSIvPjxzdG9wIG9mZnNldD0iMC41OCIgc3RvcC1jb2xvcj0iIzE3NzVjOCIvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzFjNjViZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFlNWZiYiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT5TQVBfZ3JhZF9SX3Njcm5fWmVpY2hlbmZsw6RjaGUgMTwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDIwNCAyMDguNDEgMjA0IDQxMi4zOCAwIDAgMCAwIDIwNCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI0NC43MywzOC4zNmwtNDAuNiwwdjk2LjUyTDE2OC42NywzOC4zM0gxMzMuNTFsLTMwLjI3LDgwLjcyQzEwMCw5OC43LDc5LDkxLjY3LDYyLjQsODYuNCw1MS40Niw4Mi44OSwzOS44NSw3Ny43Miw0MCw3MmMuMDktNC42OCw2LjIzLTksMTguMzgtOC4zOCw4LjE3LjQzLDE1LjM3LDEuMDksMjkuNzEsOGwxNC4xLTI0LjU1Qzg5LjA2LDQwLjQyLDcxLDM2LjIxLDU2LjE3LDM2LjE5aC0uMDljLTE3LjI4LDAtMzEuNjgsNS42LTQwLjYsMTQuODNBMzQuMjMsMzQuMjMsMCwwLDAsNS43Nyw3NC43QzUuNTQsODcuMTUsMTAuMTEsOTYsMTkuNzEsMTAzYzguMSw1Ljk0LDE4LjQ2LDkuNzksMjcuNiwxMi42MiwxMS4yNywzLjQ5LDIwLjQ3LDYuNTMsMjAuMzYsMTNBOS41Nyw5LjU3LDAsMCwxLDY1LDEzNWMtMi44MSwyLjktNy4xMyw0LTEzLjA5LDQuMS0xMS40OS4yNC0yMC0xLjU2LTMzLjYxLTkuNTlMNS43NywxNTQuNDJhOTMuNzcsOTMuNzcsMCwwLDAsNDYsMTIuMjJsMi4xMSwwYzE0LjI0LS4yNSwyNS43NC00LjMxLDM0LjkyLTExLjcxLjUzLS40MSwxLS44NCwxLjQ5LTEuMjhMODYuMTcsMTY0LjVIMTIzbDYuMTktMTguODJhNjcuNDYsNjcuNDYsMCwwLDAsMjEuNjgsMy40Myw2OC4zMyw2OC4zMywwLDAsMCwyMS4xNi0zLjI1bDYsMTguNjRoNjAuMTR2LTM5aDEzLjExYzMxLjcxLDAsNTAuNDYtMTYuMTUsNTAuNDYtNDMuMkMzMDEuNzQsNTIuMTksMjgzLjUyLDM4LjM2LDI0NC43MywzOC4zNlpNMTUwLjkxLDEyMWEzNi45MywzNi45MywwLDAsMS0xMy0yLjI4bDEyLjg3LTQwLjU5SDE1MWwxMi42NSw0MC43MUEzOC41LDM4LjUsMCwwLDEsMTUwLjkxLDEyMVptOTYuMi0yMy4zM2gtOC45NFY2NC45MWg4Ljk0YzExLjkzLDAsMjEuNDQsNCwyMS40NCwxNi4xNCwwLDEyLjYtOS41MSwxNi41Ny0yMS40NCwxNi41NyIvPjwvc3ZnPg==",
      logoAlt: "SAP logo – integrasjon mellom SAP ERP og Arena PLM levert av OptIT Norge",
      badge: "Standardisert – Vår anbefaling",
      description: "Arena tilbyr ferdige integrasjoner mot ledende ERP-systemer som sikrer en trygg og rask vei til en sammenkoblet verdikjede.",
      features: [
        "Ferdige koblinger mot NetSuite og SAP",
        "Automatisert endringshåndtering",
        "Redusert risiko for manuelle feil",
        "Kort vei til drift ('Go-live')"
      ],
    },
    {
      name: "Custom API Solutions",
      logoUrl: "/images/tjenester/program logo/Logo avlang.png",
      logoAlt: "OptIT logo – spesialist på systemintegrasjon mellom CAD, CAM, ERP og AI-løsninger",
      badge: "Skreddersøm",
      description: "For bedrifter med unike behov utvikler vi egne 'middleware'-løsninger som snakker nøyaktig slik deres prosesser krever.",
      features: [
        "Full fleksibilitet på datafelter",
        "Skreddersydde forretningsregler",
        "Eierskap til egen kode og logikk",
        "Støtter eldre 'Legacy' systemer"
      ],
    },
    {
      name: "Microsoft Dynamics 365",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Microsoft_Dynamics_365_Logo_%282021%E2%80%93present%29.svg/500px-Microsoft_Dynamics_365_Logo_%282021%E2%80%93present%29.svg.png",
      logoAlt: "Microsoft Dynamics 365 logo – sømløs integrasjon av forretningsdata og ingeniørprosesser via OptIT",
      badge: "Enterprise Automation",
      description: "En kraftfull løsning for bedrifter som ønsker sømløs integrasjon mellom forretningsprosesser og ingeniørdata i Microsoft Cloud.",
      features: [
        "Dyp integrasjon med Power Platform",
        "Automatisert synkronisering av varedata",
        "Støtter Business Central og F&O",
        "Sikker sky-til-sky-kommunikasjon"
      ],
    }
  ];

  return (
    <main>
      <ServiceDetailHero
        badge="System-integrasjon"
        title="Koble sammen deres"
        subtitle="Digitale Økosystem"
        description="Vi fjerner barrierene mellom ingeniørene og resten av bedriften. Ved å integrere CAD, PLM og ERP sikrer vi at rett data er tilgjengelig for rett person til rett tid."
        themeColor="purple"
      />

      <ServiceFeatureGrid
        badge="Integrasjons-Ekspertise"
        title="Sømløse arbeidsflyter"
        description="Vi har spesialisert oss på å koble teknisk produktdata mot forretningssystemer for å maksimere effektiviteten."
        features={integrasjonFeatures}
        themeColor="purple"
      />

      <SoftwareShowcase
        title="Integrasjons-partnere"
        subtitle="Vi snakker alle språk"
        description="Enten dere bruker moderne sky-løsninger eller eldre on-premise systemer, har vi verktøyene for å koble dem sammen."
        allPlatforms={platforms}
        recommendedSolutions={recommendations}
        themeColor="purple"
      />

      <ServiceNavigation 
        currentPath="/tjenester/integrasjon" 
        themeColor="purple" 
      />
    </main>
  );
}