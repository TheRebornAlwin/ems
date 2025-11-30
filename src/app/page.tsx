"use client";

import { useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/hero/Hero";
import { Problem } from "@/components/sections/Problem";
import { Benefits } from "@/components/sections/Benefits";
import { Priority } from "@/components/sections/Priority";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Efficiency } from "@/components/sections/Efficiency";
import { RewireDiagnostic } from "@/components/sections/RewireDiagnostic";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Gallery } from "@/components/sections/Gallery";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { QuoteCalculator } from "@/components/sections/QuoteCalculator";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <>
      <Nav />
      <Hero />
      <VideoShowcase />
      <Gallery />
      <Problem />
      <Benefits />
      <Priority />
      <Process />
      <Stats />
      <Efficiency />
      <RewireDiagnostic />
      <AboutPreview />
      <Services />
      <WhoWeServe />
      <Testimonials />
      <FinalCTA onOpenCalculator={() => setIsCalculatorOpen(true)} />
      <Footer />

      {/* Floating Quote Calculator Button */}
      <button
        onClick={() => setIsCalculatorOpen(true)}
        className="btn-luxury flex items-center gap-2 rounded-full px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
          color: 'var(--luxe-noir)',
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999
        }}
        id="estimate"
      >
        Get Free Estimate
      </button>

      <QuoteCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </>
  );
}
