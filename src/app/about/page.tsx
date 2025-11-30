"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Shield, Award, Users, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6" style={{ background: 'var(--canvas-base)' }}>
        <div className="mx-auto max-w-7xl">
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
              className="text-4xl font-bold md:text-5xl mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              About <span className="text-molten-gold">ElectroMain</span>
            </h1>

            <p className="text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>
              South Wales' most trusted rewire specialists. We exist to change the horror stories of cowboys, hidden fees, and botched jobs.
            </p>

            {/* Our Story */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Our <span className="text-molten-gold">Story</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  At ElectroMain, we understand that finding a trustworthy electrician feels impossible. Horror stories of cowboys, hidden fees, and botched jobs are everywhere. We exist to change that.
                </p>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  When your electrical system needs attention, you need it handled quickly, cleanly, and correctly the first time. That's exactly what we deliver.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  We specialise in full and major rewires across South Wales. Not random small jobs. We're rewire specialists who focus on what we do best: transforming outdated, unsafe electrical systems into modern, certified, and future-proof installations.
                </p>
              </div>
            </div>

            {/* Why We're Different */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
                Why We're <span className="text-molten-gold">Different</span>
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: Shield,
                    title: "NICEIC Certified",
                    description: "Full accreditation and 5-year workmanship guarantee on every job"
                  },
                  {
                    icon: Award,
                    title: "Rewire Specialists",
                    description: "We focus exclusively on rewires. Not handymen. Not general sparkies."
                  },
                  {
                    icon: Users,
                    title: "Clean Rewire Method",
                    description: "Minimal disruption, tidy workspace, home protected and powered daily"
                  },
                  {
                    icon: CheckCircle,
                    title: "Transparent Pricing",
                    description: "Clear quotes with no hidden fees. The price we quote is what you pay."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 rounded-2xl"
                    style={{ background: 'var(--canvas-cream)' }}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                      style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                    >
                      <item.icon size={24} style={{ color: 'var(--luxe-noir)' }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Team Section - Awaiting Real Photos */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Meet <span className="text-molten-gold">The Team</span>
              </h2>

              {/* Note about real photos */}
              <div className="mb-8 p-6 rounded-2xl" style={{ background: 'var(--canvas-cream)' }}>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--gold-24k)' }}>Note:</strong> Real team photos and bios coming soon. This section will showcase our NICEIC-certified electricians, their qualifications, and the faces behind ElectroMain.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-center"
                  >
                    {/* Placeholder for team photo */}
                    <div
                      className="aspect-square rounded-2xl mb-4 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                    >
                      <Users size={48} style={{ color: 'var(--luxe-noir)' }} />
                    </div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                      Team Member {i}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: 'var(--gold-24k)' }}>
                      NICEIC Certified Electrician
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Awaiting real team bio and photo
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Our Promise */}
            <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, var(--canvas-cream), var(--canvas-base))' }}>
              <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
                Our <span className="text-molten-gold">Promise</span>
              </h2>
              <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
                {[
                  "Proactive communication at every stage",
                  "Meticulous attention to detail",
                  "5-year workmanship guarantee",
                  "Same-day emergency response",
                  "No cowboys, no hidden fees, no mess",
                  "Daily updates via your preferred method",
                  "Your home protected and respected",
                  "Certificates delivered immediately upon completion"
                ].map((promise, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-0.5"
                      style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                    >
                      <CheckCircle size={14} style={{ color: 'var(--luxe-noir)' }} />
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {promise}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
