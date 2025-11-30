"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Users } from "lucide-react";

export function AboutPreview() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: 'var(--canvas-cream)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl font-bold md:text-5xl mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Why <span className="text-molten-gold">ElectroMain?</span>
            </h2>

            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              We understand that finding a trustworthy electrician feels impossible. Horror stories
              of cowboys, hidden fees, and botched jobs are everywhere. We exist to change that.
            </p>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              We're not handymen. We're not general sparkies. We're rewire specialists who focus
              exclusively on full and major electrical rewires across South Wales.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "NICEIC Certified with 5-year guarantee",
                "Transparent fixed pricing, no hidden fees",
                "Clean Rewire Method - minimal disruption",
                "Daily communication and updates"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-1"
                    style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                  >
                    <Shield size={14} style={{ color: 'var(--luxe-noir)' }} />
                  </div>
                  <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
                color: 'var(--luxe-noir)'
              }}
            >
              Meet the Team
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Visual Element - Team Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl flex items-center justify-center"
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))'
                      : 'var(--canvas-base)'
                  }}
                >
                  <Users size={32} style={{ color: i % 2 === 0 ? 'var(--luxe-noir)' : 'var(--gold-24k)' }} />
                </div>
              ))}
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl -z-10"
              style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
