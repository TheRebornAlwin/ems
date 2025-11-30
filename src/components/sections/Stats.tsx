"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Five Star Reviews" },
  { value: "15+", label: "Years Experience" },
];

export function Stats() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--canvas-cream)' }}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Why Choose <span className="text-molten-gold">Us?</span>
          </h2>
        </motion.div>

        {/* Mobile: all on one line with numbers centered, labels centered below */}
        <div className="md:hidden mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center gap-8 mb-2">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-3xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {stat.value}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-8">
              {stats.map((stat, i) => (
                <p
                  key={i}
                  className="text-xs text-center"
                  style={{
                    color: 'var(--text-secondary)',
                    maxWidth: '80px',
                    marginLeft: i === 0 || i === 1 ? '4px' : '0'
                  }}
                >
                  {stat.label}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop: original grid layout */}
        <div className="hidden md:grid gap-8 md:grid-cols-3 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-5xl sm:text-6xl font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {stat.value}
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="#estimate"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:opacity-90 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
              color: 'var(--luxe-noir)'
            }}
          >
            Get My Free Quote
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
