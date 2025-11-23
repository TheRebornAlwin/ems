"use client";

import { motion } from "framer-motion";

export function Efficiency() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--canvas-cream)' }}>
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl font-bold md:text-5xl mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Efficiency is Key When You Work With{" "}
            <span className="text-molten-gold">ElectroMain</span>
          </h2>

          {/* Decorative line */}
          <div
            className="mx-auto mb-8 h-1 w-24 rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--gold-24k), var(--amber-fire))' }}
          />

          <p
            className="text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Electrical problems are never convenient, but we do everything possible to make
            the process smooth and stress-free. That's why we pride ourselves on being the
            most efficient electrical team in South Wales. We work quickly, communicate clearly,
            and get the job done right — so you can get back to enjoying your home.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
