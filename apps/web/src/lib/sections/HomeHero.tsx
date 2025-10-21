import {
  Hero,
} from "@/lib/blocks/Hero";
import { HeroContent } from "@/lib/blocks/HeroContent";
import bgImage from "@/assets/bg-home-hero.webp";
import HeroBG from "@/components/ui/wave/wave";


export default function HomeHero() {
  return (
          <Hero
          variant="fullscreen"
            size="lg"
            bg={{ images: { sm: bgImage, md: bgImage, lg: bgImage }, alt: "Chiropractic care background", fixed: true }}
            overlays={["gradient"]}
            className="relative size-full w-full h-full"
            onNavigate={(page) => console.log("Navigate to:", page)}
          >
            <HeroContent
              title={`Experience Healing,\nReimagined`}
              subheader={`Personalized chiropractic care blending mind,\nbody, and soul for holistic wellness.`}
              onNavigate={(page) => console.log("Navigate to:", page)}
            />
             <div className="absolute inset-0 z-0">
                    <HeroBG />
                  </div>
          </Hero>
        
   
  );
}
