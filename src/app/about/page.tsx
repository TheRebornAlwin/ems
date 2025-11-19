import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { CraftTriptych } from "@/components/craft/CraftTriptych";
import { AnimatedTestimonials } from "@/components/testi/AnimatedTestimonials";
import { BigCTA } from "@/components/cta/BigCTA";
import { StatChip } from "@/components/primitives/StatChip";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | ElectroMain",
  description:
    "Learn about ElectroMain's commitment to electrical craftsmanship. NICEIC certified, fully insured, with over 15 years of experience in luxury properties.",
};

export default function AboutPage() {
  return (
    <div className="pt-32">
      <Container>
        <SectionHeader
          eyebrow="About ElectroMain"
          title="Craftsmanship since 2009"
          paragraph="Founded on the principle that electrical work should be invisible in execution and exceptional in result."
        />

        <div className="mb-20 grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--brand-text)' }}>
              ElectroMain was established with a singular vision: to bring the
              same level of precision and attention to detail to electrical
              work that you would expect from fine cabinetry or bespoke
              tailoring.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--brand-text)' }}>
              Over 15 years and hundreds of projects later, we have become
              London&apos;s trusted partner for discerning homeowners who
              refuse to compromise on quality. Our team of NICEIC-approved
              electricians combines decades of technical expertise with an
              unwavering commitment to cleanliness and care.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--brand-text)' }}>
              We do not just complete electrical work—we deliver peace of mind.
              Transparent pricing, meticulous execution, and a 5-year warranty
              on everything we do.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <StatChip text="15+ Years Experience" />
              <StatChip text="500+ Projects Completed" />
              <StatChip text="100% NICEIC Certified" />
            </div>
          </div>

          <div className="panel overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=90"
              alt="ElectroMain team at work"
              width={800}
              height={600}
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>

      <CraftTriptych />
      <AnimatedTestimonials />
      <BigCTA />
    </div>
  );
}
