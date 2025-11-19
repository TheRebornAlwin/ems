import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { BigCTA } from "@/components/cta/BigCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | ElectroMain",
  description:
    "Premium electrical services including rewires, lighting design, EV chargers, smart home integration, and more. NICEIC certified.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <Container>
        <SectionHeader
          eyebrow="Our Services"
          title="Premium electrical solutions"
          paragraph="Every service delivered with precision, protected surfaces, and absolute transparency. From simple repairs to complete smart home installations."
        />
      </Container>

      <ServicesGrid />

      <section className="py-20" style={{ backgroundColor: 'var(--brand-panel)' }}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold" style={{ color: 'var(--brand-ink)' }}>
              Our commitment to excellence
            </h2>
            <div className="space-y-6" style={{ color: 'var(--brand-text)' }}>
              <p className="leading-relaxed">
                At ElectroMain, every project begins with understanding your
                vision. Whether you need a complete rewire for your period
                property, architectural lighting that transforms your living
                space, or the latest in EV charging technology, we deliver with
                the same unwavering commitment to quality.
              </p>
              <p className="leading-relaxed">
                Our NICEIC-approved electricians bring decades of combined
                experience to every job. We use only premium materials from
                trusted manufacturers, and our workmanship is backed by a
                comprehensive 5-year warranty.
              </p>
              <p className="leading-relaxed">
                What sets us apart is our obsession with the details: perfectly
                aligned socket plates, concealed cable runs, protected surfaces,
                and a finish so clean you would never know we were there.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <BigCTA />
    </div>
  );
}
