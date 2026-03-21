import { ServiceDetailHero } from "@/components/tjenester/details/ServiceDetailHero";
import { ServiceFeatureGrid } from "@/components/tjenester/details/ServiceFeatureGrid";
import { SoftwareShowcase } from "@/components/tjenester/details/SoftwareShowcase";
import { ServiceNavigation } from "@/components/tjenester/details/ServiceNavigation";
import {
  Wrench,
  Cpu,
  Zap,
  Layers,
  Settings,
  Activity
} from "lucide-react";

export default function CamPage() {
  const camFeatures = [
    {
      title: "Postprosessor-utvikling",
      description: "Skreddersydde postprosessorer som sikrer at koden fra CAM-systemet fungerer feilfritt på dine spesifikke maskiner.",
      icon: Settings,
    },
    {
      title: "Optimalisering av verktøybaner",
      description: "Vi reduserer syklustider og verktøyslitasje gjennom avanserte strategier for fresing, dreiing og EDM.",
      icon: Layers,
    },
    {
      title: "Maskinsimulering",
      description: "Full digital tvilling av maskinen for å verifisere kollisjonsfri kjøring før koden sendes til produksjon.",
      icon: Activity,
    },
    {
      title: "Implementering av CAM-software",
      description: "Oppsett og tilpasning av verktøybiblioteker og maler for en mer standardisert og raskere programmering.",
      icon: Cpu,
    },
    {
      title: "Høyhastighetsmaskinering (HSM)",
      description: "Utnytt maskinparkens fulle potensial med moderne metoder for fjerning av materiale i høyt tempo.",
      icon: Zap,
    },
    {
      title: "Opplæring av operatører",
      description: "Kurs i alt fra grunnleggende programmering til avansert 5-akse simultankjøring og automatisering.",
      icon: Wrench,
    },
  ];

  const platforms = [
    "Mastercam", 
    "Autodesk Fusion 360", 
    "Inventor CAM", 
    "SolidWorks CAM", 
    "GibbsCAM", 
    "Esprit", 
    "Powermill", 
    "HyperMILL"
  ];

  const recommendations = [
    {
      name: "Onshape CAM Studio",
      logoUrl: "https://www.onshape.com/cdn-images/2db2486ec4e220b607223acf5f79cfe5e02d7859-216x49.svg?w=640",
      badge: "Cloud CAM – Vår anbefaling",
      description: "Den første profesjonelle CAM-løsningen som er fullstendig integrert i skyen. Programmer maskinene dine direkte i nettleseren.",
      features: [
        "Sømløs kobling mellom CAD og CAM",
        "Ingen filoverføring eller versjonsfeil",
        "Assosiativ oppdatering av verktøybaner",
        "Kraftig simulering direkte i skyen"
      ],
    },
    {
      name: "Mastercam",
      logoUrl: "https://www.mastercam.com/wp-content/uploads/2025/12/Mastercam-2Color-Logo-scaled.jpg",
      badge: "Industristandard",
      description: "Verdens mest brukte CAM-programvare for de mest krevende oppgavene og kompleks 5-akse maskinering.",
      features: [
        "Uovertruffen kontroll på verktøybaner",
        "Støtter nesten alle maskinkonfigurasjoner",
        "Enormt bibliotek av postprosessorer",
        "Spesialverktøy for dreiing og EDM"
      ],
    },
    {
      name: "SolidWorks CAM",
      logoUrl: "https://www.solidapplications.co.uk/images/products/cam/CAM-Standard.png",
      badge: "Integrert Maskinering",
      description: "Drevet av CAMWorks-teknologi, gir dette SolidWorks-brukere en integrert og regelbasert tilnærming til produksjon.",
      features: [
        "Kunnskapsbasert maskinering (KBM)",
        "Automatisk gjenkjenning av features",
        "Fullt integrert i SolidWorks-grensesnittet",
        "Reduserer programmeringstid for standarddeler"
      ],
    }
  ];

  return (
    <main>
      <ServiceDetailHero
        badge="CAM & Produksjon"
        title="Maksimal utnyttelse av"
        subtitle="Maskinparken"
        description="Vi hjelper deg med å transformere 3D-modeller til effektiv maskinkode. Gjennom riktig valg av CAM-verktøy og optimaliserte strategier øker vi din produksjonskapasitet."
        themeColor="sky"
      />

      <ServiceFeatureGrid
        badge="CAM-Ekspertise"
        title="Fra tegning til ferdig del"
        description="Vår erfaring med alt fra prototyper til masseproduksjon sikrer at du får den mest effektive veien til ferdig produkt."
        features={camFeatures}
        themeColor="sky"
      />

      <SoftwareShowcase
        title="Støttede systemer"
        subtitle="Kraftige CAM-verktøy"
        description="Vi har dybdekompetanse på de ledende verktøyene i markedet og hjelper deg med å velge det som passer din produksjon best."
        allPlatforms={platforms}
        recommendedSolutions={recommendations}
        themeColor="sky"
      />

      <ServiceNavigation 
        currentPath="/tjenester/cam" 
        themeColor="sky" 
      />
    </main>
  );
}