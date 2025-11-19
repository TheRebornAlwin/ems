import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { ThreeDMarquee } from "@/components/showcase/ThreeDMarquee";
import { CaseCarousel } from "@/components/case/CaseCarousel";
import { BigCTA } from "@/components/cta/BigCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | ElectroMain",
  description:
    "Explore our portfolio of luxury electrical installations across London's finest homes. Full rewires, lighting design, EV chargers, and smart home systems.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32">
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          title="Our finest work"
          paragraph="Real projects. Real results. Explore how we've transformed London's most prestigious properties."
        />
      </Container>

      <ThreeDMarquee />
      <CaseCarousel />

      <section className="py-20" style={{ backgroundColor: 'var(--brand-panel)' }}>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--brand-ink)' }}>
              Your project could be next
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--brand-text)' }}>
              Every home is unique, and so is every ElectroMain project. Whether
              you are planning a subtle lighting upgrade or a complete
              electrical transformation, we bring the same attention to detail
              and commitment to excellence that you see in our portfolio.
            </p>
          </div>
        </Container>
      </section>

      <BigCTA />
    </div>
  );
}
