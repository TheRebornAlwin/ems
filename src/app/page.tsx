import { HeroAurora } from "@/components/hero/HeroAurora";
import { BadgeRow } from "@/components/trust/BadgeRow";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ThreeDMarquee } from "@/components/showcase/ThreeDMarquee";
import { CraftTriptych } from "@/components/craft/CraftTriptych";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { InstantEstimate } from "@/components/estimate/InstantEstimate";
import { CaseCarousel } from "@/components/case/CaseCarousel";
import { AnimatedTestimonials } from "@/components/testi/AnimatedTestimonials";
import { FAQ } from "@/components/faq/FAQ";
import { BigCTA } from "@/components/cta/BigCTA";

export default function Home() {
  return (
    <>
      <HeroAurora />
      <BadgeRow />
      <ServicesGrid />
      <ThreeDMarquee />
      <CraftTriptych />
      <ProcessTimeline />
      <InstantEstimate />
      <CaseCarousel />
      <AnimatedTestimonials />
      <FAQ />
      <BigCTA />
    </>
  );
}
