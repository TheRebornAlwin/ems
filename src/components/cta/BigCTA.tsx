"use client";

import { Container } from "@/components/primitives/Container";
import { ArrowRight, Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function BigCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Immersive Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)' }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-gold) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Animated Icon */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mx-auto mb-10 inline-flex h-24 w-24 items-center justify-center rounded-3xl gradient-gold"
          >
            <Zap size={48} style={{ color: 'var(--brand-charcoal)' }} />
          </motion.div>

          <h2 className="text-5xl font-black md:text-6xl lg:text-7xl">
            <span style={{ color: 'var(--brand-charcoal)' }}>Ready for</span>
            <br />
            <span className="gradient-text-gold">Electrical Excellence?</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-32 rounded-full gradient-gold" />

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed" style={{ color: 'var(--brand-slate)' }}>
            Get your instant estimate or speak directly with our master craftsmen.
            No pressure, no obligation—just expert advice from London&apos;s finest.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#estimate"
                className="btn-luxury inline-flex items-center gap-3 !px-12 !py-5 text-lg"
              >
                Get Instant Estimate
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={22} />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a
                href="tel:+442012345678"
                className="group inline-flex items-center gap-3 rounded-2xl border-2 px-10 py-5 text-lg font-semibold transition-all"
                style={{ borderColor: 'var(--brand-gold)', color: 'var(--brand-charcoal)' }}
              >
                <Phone size={22} className="transition-transform group-hover:rotate-12" />
                Call Now
              </a>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
          >
            {["24/7 Emergency", "Free Quotes", "5-Year Warranty", "NICEIC Approved"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full gradient-gold" />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--brand-slate)' }}>
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--brand-cream)] to-transparent" />
    </section>
  );
}
