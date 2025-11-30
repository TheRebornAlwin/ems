"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none" style={{ color: 'var(--text-secondary)' }}>
              <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
                Last updated: December 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  1. Introduction
                </h2>
                <p className="mb-4">
                  ElectroMain ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  2. Information We Collect
                </h2>
                <p className="mb-4">We may collect information about you in a variety of ways:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, and postal address when you contact us or request a quote.</li>
                  <li><strong>Property Information:</strong> Details about your property for service quotes, including property type, size, and age.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  3. How We Use Your Information
                </h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Process and respond to your quote requests</li>
                  <li>Communicate with you about services, updates, and promotions</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  4. Information Sharing
                </h2>
                <p className="mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, provided they agree to keep your information confidential.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  5. Data Security
                </h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  6. Your Rights
                </h2>
                <p className="mb-4">Under GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  7. Contact Us
                </h2>
                <p className="mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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
