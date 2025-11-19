import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ElectroMain",
  description: "ElectroMain privacy policy and data protection information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <SectionHeader
          eyebrow="Legal"
          title="Privacy Policy"
          paragraph="How we collect, use, and protect your personal information."
        />

        <div className="mx-auto max-w-3xl">
          <div className="panel p-8">
            <div className="space-y-8">
              <p className="text-sm" style={{ color: 'var(--brand-mute)' }}>
                Last updated: November 2024
              </p>

              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                  1. Information We Collect
                </h3>
                <p className="mt-2" style={{ color: 'var(--brand-text)' }}>
                  We collect information you provide directly, including name,
                  contact details, property address, and project requirements.
                  This information is used solely to provide our electrical
                  services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                  2. How We Use Your Information
                </h3>
                <p className="mt-2" style={{ color: 'var(--brand-text)' }}>
                  Your information is used to provide quotes, schedule
                  appointments, deliver services, and communicate about your
                  project. We do not sell or share your data with third parties
                  for marketing purposes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                  3. Data Security
                </h3>
                <p className="mt-2" style={{ color: 'var(--brand-text)' }}>
                  We implement appropriate technical and organisational measures
                  to protect your personal data against unauthorised access,
                  alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                  4. Your Rights
                </h3>
                <p className="mt-2" style={{ color: 'var(--brand-text)' }}>
                  You have the right to access, correct, or delete your personal
                  information. Contact us at privacy@electromain.co.uk for any
                  data-related requests.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                  5. Contact
                </h3>
                <p className="mt-2" style={{ color: 'var(--brand-text)' }}>
                  For privacy-related enquiries, please contact our Data
                  Protection Officer at privacy@electromain.co.uk or call +44 20
                  1234 5678.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
