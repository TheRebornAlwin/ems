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
      <Problem />
      <Benefits />
      <Priority />
      <WhoWeServe />
      <Process />
      <Stats />
      <Services />
      <Efficiency />
      <Testimonials />
      <FinalCTA />
      <Footer />

      {/* Floating Quote Calculator Button */}
      <button
        onClick={() => setIsCalculatorOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full px-6 py-4 font-semibold text-white shadow-2xl transition-all hover:scale-105"
        style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
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
