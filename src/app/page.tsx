import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { WhyOptItSection } from "@/components/sections/WhyOptItSection";
import { PlatformsSection } from "@/components/sections/PlatformsSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";

export default function Home() {
  return (
    <>
      {/* Hero / toppseksjon */}
      <HeroSection />

      {/* Våre tjenester – lys seksjon */}
      <ServicesOverviewSection />

      {/* Hvorfor OptIT / erfaring */}
      <WhyOptItSection />

      {/* Ledende systemer / plattformseksjon */}
      <PlatformsSection />

      {/* Kontakt / CTA */}
      <CallToActionSection />
    </>
  );
}
