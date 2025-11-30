"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6" style={{ background: 'var(--canvas-base)' }}>
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
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
              className="text-4xl font-bold md:text-5xl mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Get in <span className="text-molten-gold">Touch</span>
            </h1>

            <p className="text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>
              Ready to discuss your electrical project? We're here to help. Get in touch today for a free, no-obligation quote.
            </p>

            {/* Contact Methods */}
            <div className="grid gap-6 md:grid-cols-2 mb-12">
              {/* Phone */}
              <motion.a
                href="tel:02922402640"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="group p-6 rounded-2xl transition-all hover:shadow-lg"
                style={{ background: 'var(--canvas-cream)' }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-transform group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <Phone size={24} style={{ color: 'var(--luxe-noir)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Call Us
                </h3>
                <p className="text-2xl font-semibold mb-2" style={{ color: 'var(--gold-24k)' }}>
                  02922 402640
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Speak to our team directly
                </p>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:info@electro-main.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="group p-6 rounded-2xl transition-all hover:shadow-lg"
                style={{ background: 'var(--canvas-cream)' }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-transform group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <Mail size={24} style={{ color: 'var(--luxe-noir)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Email Us
                </h3>
                <p className="text-lg font-semibold mb-2" style={{ color: 'var(--gold-24k)' }}>
                  info@electro-main.com
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Get a response within 24 hours
                </p>
              </motion.a>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="p-6 rounded-2xl"
                style={{ background: 'var(--canvas-cream)' }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <MapPin size={24} style={{ color: 'var(--luxe-noir)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Service Area
                </h3>
                <p className="text-lg font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                  South Wales
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Cardiff, Swansea, Newport & surrounding areas
                </p>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="p-6 rounded-2xl"
                style={{ background: 'var(--canvas-cream)' }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <Clock size={24} style={{ color: 'var(--luxe-noir)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Business Hours
                </h3>
                <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                  Monday - Friday: 8:00 AM - 6:00 PM
                </p>
                <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                  Saturday: 9:00 AM - 4:00 PM
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Emergency callouts available 24/7
                </p>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-center p-8 rounded-3xl"
              style={{ background: 'var(--canvas-cream)' }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                Get your free, transparent quote today. No hidden fees, no surprises.
              </p>
              <Link
                href="/#estimate"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
                  color: 'var(--luxe-noir)'
                }}
              >
                Get Your Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
