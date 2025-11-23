"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const expectations = [
  "Proactive communication at every stage",
  "Meticulous attention to detail",
  "5-year workmanship guarantee",
  "Same-day emergency response",
];

export function Priority() {
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
              Your Home is{" "}
              <span className="text-molten-gold">Our Priority</span>
            </h2>

            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              At ElectroMain, we understand that finding a trustworthy electrician feels impossible.
              Horror stories of cowboys, hidden fees, and botched jobs are everywhere. We exist to
              change that.
            </p>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              When your electrical system needs attention, you need it handled quickly, cleanly, and
              correctly — the first time. That's exactly what we deliver.
            </p>

            <p
              className="text-base mb-4 font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              With us, you can expect:
            </p>

            <div className="space-y-3 mb-10">
              {expectations.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                  >
                    <Check size={14} className="text-white" />
                  </div>
                  <p style={{ color: 'var(--text-secondary)' }}>{item}</p>
                </motion.div>
              ))}
            </div>

            <p
              className="text-lg mb-8 font-medium"
              style={{ color: 'var(--text-primary)' }}
            >
              No matter what your electrical needs are, we'll be there to help.
            </p>

            <Link
              href="#about"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
            >
              Get to Know Us
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
                  backgroundImage: `url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop&q=80')`,
                }}
              />
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl -z-10"
              style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
