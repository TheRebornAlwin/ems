"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicy() {
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
              Cookie Policy
            </h1>

            <div className="prose prose-lg max-w-none" style={{ color: 'var(--text-secondary)' }}>
              <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
                Last updated: November 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  1. What Are Cookies
                </h2>
                <p className="mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  2. How We Use Cookies
                </h2>
                <p className="mb-4">ElectroMain uses cookies to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Ensure our website functions properly</li>
                  <li>Remember your preferences</li>
                  <li>Understand how you use our website</li>
                  <li>Improve your browsing experience</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  3. Types of Cookies We Use
                </h2>

                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Essential Cookies
                </h3>
                <p className="mb-4">
                  These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to your actions, such as setting your privacy preferences or filling in forms.
                </p>

                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Analytics Cookies
                </h3>
                <p className="mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website.
                </p>

                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Functional Cookies
                </h3>
                <p className="mb-4">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  4. Third-Party Cookies
                </h2>
                <p className="mb-4">
                  We may use third-party services that set cookies on your device, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Cloudflare:</strong> For video streaming and security</li>
                  <li><strong>Analytics services:</strong> To understand website usage</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  5. Managing Cookies
                </h2>
                <p className="mb-4">
                  You can control and manage cookies in various ways. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>View and delete cookies</li>
                  <li>Block all cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Allow cookies from specific sites</li>
                </ul>
                <p className="mb-4">
                  Please note that blocking all cookies may affect your experience on our website and limit the services we can provide.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  6. Updates to This Policy
                </h2>
                <p className="mb-4">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  7. Contact Us
                </h2>
                <p className="mb-4">
                  If you have questions about our use of cookies, please contact us at:
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
