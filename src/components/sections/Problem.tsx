"use client";

import { motion } from "framer-motion";
import { X, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

const painPoints = [
  "Hidden fees and surprise costs that blow your budget",
  "Cowboys who disappear mid-job leaving you stranded",
  "Mess everywhere — dust, debris, and chaos in your home",
  "No communication, no updates, no respect for your time",
];

export function Problem() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--canvas-base)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl font-bold leading-tight md:text-5xl mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Stop Gambling on{" "}
              <span className="text-molten-gold">the Wrong Electrician</span>
            </h2>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Hiring an electrician for a major job is nerve-wracking. One wrong choice
              and you're facing safety hazards, budget nightmares, and months of stress.
            </p>

            <div className="space-y-4 mb-10">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-0.5"
                    style={{ background: 'rgba(255, 140, 0, 0.15)' }}
                  >
                    <X size={14} style={{ color: 'var(--amber-fire)' }} />
                  </div>
                  <p style={{ color: 'var(--text-secondary)' }}>{point}</p>
                </motion.div>
              ))}
            </div>

            <p
              className="text-xl font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              It's time to work with South Wales' most trusted electrical specialists.
            </p>

            <Link
              href="#estimate"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
            >
              Get Your Free Quote
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl">
              <div
                className="aspect-[4/3] w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&q=80')`,
                }}
              />
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
