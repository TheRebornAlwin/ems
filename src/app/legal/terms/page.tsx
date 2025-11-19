import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ElectroMain",
  description: "ElectroMain terms of service and conditions.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <SectionHeader
          eyebrow="Legal"
          title="Terms of Service"
          paragraph="The terms and conditions governing our services."
        />

        <div className="mx-auto max-w-3xl">
          <div className="panel p-8">
            <div className="space-y-8">
              <p className="text-sm" style={{ color: 'var(--brand-mute)' }}>
                Last updated: November 2024
              </p>

              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                  1. Service Agreement
                </h3>
                <p className="mt-2" style={{ color: 'var(--brand-text)' }}>
                  All electrical work is carried out in accordance with BS 7671
                  (IET Wiring Regulations) and relevant building regulations.
                  Quotes are valid for 30 days from issue date.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                  2. Payment Terms
                </h3>
                <p className="mt-2" style={{ color: 'var(--brand-text)' }}>
                  A 25% deposit is required to secure your booking. Final payment
                  is due upon satisfactory completion of work. We accept bank
                  transfer, credit/debit cards, and standing orders for larger
                  projects.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                  3. Warranty
                </h3>
                <p className="mt-2" style={{ color: 'var(--brand-text)' }}>
                  All workmanship is guaranteed for 5 years. Manufacturer
                  warranties on materials apply separately. Our NICEIC
                  registration provides additional consumer protection.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                  4. Cancellation
                </h3>
                <p className="mt-2" style={{ color: 'var(--brand-text)' }}>
                  Cancellations made more than 48 hours before scheduled work
                  receive a full deposit refund. Cancellations within 48 hours
                  forfeit the deposit. Emergency call-outs are non-refundable.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                  5. Liability
                </h3>
                <p className="mt-2" style={{ color: 'var(--brand-text)' }}>
                  ElectroMain Ltd holds £5 million public liability insurance. We
                  are not liable for pre-existing electrical faults or damage
                  caused by third parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                  6. Contact
                </h3>
                <p className="mt-2" style={{ color: 'var(--brand-text)' }}>
                  For questions regarding these terms, please contact us at
                  legal@electromain.co.uk or call +44 20 1234 5678.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
