import { ServicesHero } from "@/components/tjenester/ServicesHero";
import { ServiceBlock } from "@/components/tjenester/ServiceBlocks";
import { ServicesPlatforms } from "@/components/tjenester/ServicesPlatforms";
import { ServicesCTA } from "@/components/tjenester/ServicesCTA";

export default function TjenesterPage() {
  return (
    <>
      <ServicesHero />
      <ServiceBlock
        id="cad"
        pillLabel="SolidWorks, Onshape, Inventor og mer"
        pillColor="green"
        title="CAD-konsultasjon"
        imageSrc="/images/tjenester/CAD-konsultasjon.png"
        imageAlt="Profesjonell CAD-konsulent som bruker Onshape til avansert 
        3D-modellering og produktutvikling av møbler."
        description="Vi tilbyr konsultasjon og bistand på alle de ledende CAD-plattformene. 
        Enten du skal velge nytt system, trenger hjelp med implementering, opplæring av teamet 
        eller optimalisering av eksisterende arbeidsprosesser – vi har bred 
        erfaring på tvers av plattformer."
        bullets={[
          "Systemvalg og rådgivning",
          "Implementering og onboarding",
          "Opplæring og kompetanseheving",
          "Avansert 3D-modellering og tegningsutvikling",
          "Beste praksis og struktur",
          "Migrering mellom systemer",
        ]}
      />
      <ServiceBlock
        id="plm"
        pillLabel="Arena, Windchill, Teamcenter og mer"
        pillColor="orange"
        title="PLM-konsultasjon"
        imageSrc="/images/tjenester/PLM-konsultasjon.png"
        imageAlt="Digital visualisering av PLM-system og produktets livssyklus, inkludert revisjonshåndtering, 
        BOM-struktur og arbeidsflyt for moderne produksjon."
        description="Vi hjelper deg med å velge, implementere og optimalisere PLM-systemer. 
        Fra behovsanalyse til ferdig oppsett – vi sikrer at produktdata, 
        endringsprosesser og dokumentasjon håndteres effektivt."
        bullets={[
          "Prosesskartlegging og behovsanalyse",
          "Oppsett av produktstruktur og konfigurasjon",
          "BOM-håndtering og struktur",
          "Endringshåndtering (ECO/ECR/ECN)",
          "Integrasjon mot CAD og andre systemer",
        ]}
        reverse
      />
      <ServiceBlock
        id="integrasjon"
        pillLabel="Sømløs dataflyt"
        pillColor="purple"
        title="CAD/PLM/ERP-integrasjon"
        imageSrc="/images/tjenester/CAD_PLM_ERP-integrasjon.jpg"
        imageAlt="Kildekode som illustrerer systemintegrasjon og automatisering av dataflyt 
        mellom CAD, PLM og ERP for sømløs industriell produktutvikling."
        description="Vi kobler sammen CAD, PLM og ERP - systemene deres for sømløs dataflyt i 
        hele produktutviklingsprosessen. Du slipper manuelle overføringer og sikrer at alle 
        jobber med oppdatert informasjon."
        bullets={[
          "Integrasjon mellom CAD, PLM og ERP",
          "Automatisering av dataoverføring",
          "PDM-oppsett og konfigurasjon",
          "ERP-integrasjon",
          "Prosessoptimalisering",
          "Oppfølging og support",
        ]}
      />
      <ServiceBlock
        id="cam"
        pillLabel="Effektiv produksjon"
        pillColor="blue"
        title="CAM & Maskinstyring"
        imageSrc="/images/tjenester/CAM & Maskinstyring.jpg"
        imageAlt="CNC-maskinering og presisjonsfresing styrt av avansert CAM-programmering for effektiv produksjon"
        description="Fra CAD-modell til ferdig NC-kode. Vi hjelper deg med CAM-programmering, 
        postprosessorer,  maskinoppsett og effektiv produksjonsplanlegging – enten det er fresing, 
        dreiing eller multiaxis-maskiner."
        bullets={[
          "CAM-programmering (2.5D til 5-akse)",
          "Verktøystrategi og optimalisering",
          "Maskinoppsett og konfigurasjon",
          "Simulering og verifisering",
          "Prosessforbedring og tidsreduksjon",
          "Utvikling av spesifisert postprosessor",
        ]}
        reverse
      />
      <ServiceBlock
        id="ai"
        pillLabel="Smartere arbeidsflyt"
        pillColor="red"
        title="AI-integrasjon"
        imageSrc="/images/tjenester/AI-integrasjon.png"
        imageAlt="Konseptuell illustrasjon av AI-integrasjon i industrien som kobler kunstig intelligens 
        sammen med CRM, ERP og PLM-systemer for smartere arbeidsflyt."
        description="Vi implementerer AI der det faktisk utgjør en forskjell. 
        Ved å kombinere maskinlæring med etablerte forretningsregler, automatiserer vi 
        manuelle steg og frigjør tid til verdiskapende arbeid."
        bullets={[
          "Automatisering av repetitive rutineoppgaver",
          "Intelligente regler som utløser handlinger i CRM/ERP/PLM",
          "Automatisk generering av teknisk dokumentasjon",
          "Datastrukturering og analyse for bedre beslutninger",
          "Smartere kobling mellom uavhengige systemer",
          "Målrettet bruk av AI for reell nytteverdi",
        ]}
      />
      <ServicesPlatforms />
      <ServicesCTA />
    </>
  );
}

