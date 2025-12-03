"use client";

import { motion } from "framer-motion";
import { Clock, PoundSterling, MessageSquare, Shield, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Same-Day Response",
    description: "Receive your detailed quote within hours, not days. No more chasing or waiting.",
  },
  {
    icon: PoundSterling,
    title: "Transparent Fixed Pricing",
    description: "Crystal-clear quotes with no hidden fees. The price we quote is the price you pay.",
  },
  {
    icon: MessageSquare,
    title: "Constant Communication",
    description: "Daily updates via your preferred method. Always know exactly where your project stands.",
  },
  {
    icon: Shield,
    title: "NICEIC Certified & Insured",
    description: "Full certification, insurance documents, and 5-year guarantee provided immediately.",
  },
];

interface BenefitsProps {
  onOpenCalculator: () => void;
}

export function Benefits({ onOpenCalculator }: BenefitsProps) {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--canvas-cream)' }}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl font-bold md:text-5xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            When You Need It Done,<br />
            <span className="text-molten-gold">You Need It Done Right</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
              >
                <benefit.icon size={26} style={{ color: 'var(--luxe-noir)' }} />
              </div>
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {benefit.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onOpenCalculator}
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
              color: 'var(--luxe-noir)'
            }}
          >
            Get My Free Quote
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
