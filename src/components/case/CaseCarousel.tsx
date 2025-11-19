"use client";

import { useRef } from "react";
import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { CaseCard } from "./CaseCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop&q=90",
    title: "Chelsea Georgian Townhouse",
    location: "Chelsea, SW3",
    scope:
      "Complete rewire of 4-storey Grade II listed property with 42-point lighting plan featuring circadian scenes.",
    outcome:
      "Zero disruption to period features. 42-point lighting plan with circadian scenes. Completed 2 days ahead of schedule.",
    testimonial:
      "ElectroMain understood the sensitivity of our listed property. The attention to detail was extraordinary.",
    client: "Mr & Mrs Henderson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop&q=90",
    title: "Richmond Contemporary Villa",
    location: "Richmond, TW9",
    scope:
      "Single-phase to three-phase upgrade for dual EV chargers plus integrated smart home system.",
    outcome:
      "Single-phase to three-phase upgrade completed. EV charge time reduced by 42%. Full home automation integrated.",
    testimonial:
      "The team worked around our family schedule. Professional, clean, and incredibly knowledgeable.",
    client: "The Patel Family",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=500&fit=crop&q=90",
    title: "Mayfair Penthouse",
    location: "Mayfair, W1",
    scope:
      "Integrated fire detection and CCTV system with remote monitoring and smart home connectivity.",
    outcome:
      "Integrated fire & CCTV with 24/7 remote monitoring. Insurance premium reduced by 18%.",
    testimonial:
      "Security without compromise. The system is invisible yet incredibly sophisticated.",
    client: "Dr. Sarah Mitchell",
  },
];

export function CaseCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex items-end justify-between">
          <SectionHeader
            eyebrow="Case Studies"
            title="Featured projects"
            paragraph="Real results from real clients. Measurable outcomes you can trust."
          />

          <div className="hidden gap-2 md:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              style={{ borderColor: 'var(--brand-line)' }}
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              style={{ borderColor: 'var(--brand-line)' }}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          ref={scrollRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="w-[350px] flex-shrink-0 snap-start md:w-[400px]"
            >
              <CaseCard {...study} />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
