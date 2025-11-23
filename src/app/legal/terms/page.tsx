"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6" style={{ background: 'var(--canvas-base)' }}>
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--gold-24k)' }}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <h1
              className="text-4xl font-bold md:text-5xl mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none" style={{ color: 'var(--text-secondary)' }}>
              <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
                Last updated: November 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  1. Agreement to Terms
                </h2>
                <p className="mb-4">
                  By accessing or using ElectroMain's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  2. Services
                </h2>
                <p className="mb-4">
                  ElectroMain provides electrical, plumbing, and heating services to residential and commercial properties in South Wales. All services are subject to availability and our professional assessment of the work required.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  3. Quotes and Pricing
                </h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>All quotes provided are estimates based on the information given and are valid for 30 days.</li>
                  <li>Final pricing may vary if the scope of work changes or unforeseen complications arise.</li>
                  <li>We provide transparent, fixed pricing wherever possible with no hidden costs.</li>
                  <li>Payment terms will be agreed upon before work commences.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  4. Warranties and Guarantees
                </h2>
                <p className="mb-4">
                  All work completed by ElectroMain comes with a 5-year guarantee on workmanship. This guarantee covers defects in our work but does not cover damage caused by misuse, third-party interference, or normal wear and tear.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  5. Certifications
                </h2>
                <p className="mb-4">
                  ElectroMain is NICEIC certified. All electrical work is completed to current British Standards and Building Regulations. Certificates are provided upon completion of relevant work.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  6. Customer Responsibilities
                </h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide accurate information about your property and requirements</li>
                  <li>Ensure safe and reasonable access to the work area</li>
                  <li>Inform us of any known hazards or relevant property issues</li>
                  <li>Make payment in accordance with agreed terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  7. Limitation of Liability
                </h2>
                <p className="mb-4">
                  ElectroMain shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the value of the services provided.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  8. Cancellation Policy
                </h2>
                <p className="mb-4">
                  Cancellations must be made at least 24 hours before the scheduled appointment. Late cancellations may incur a cancellation fee.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  9. Contact Us
                </h2>
                <p className="mb-4">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@electro-main.com" className="underline" style={{ color: 'var(--gold-24k)' }}>
                    info@electro-main.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:02922402640" className="underline" style={{ color: 'var(--gold-24k)' }}>
                    02922 402640
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
