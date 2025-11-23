"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Request Your Free Quote",
    description: "Send us photos or videos of your project. Explain what you need — we'll handle the rest.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "2",
    title: "Get Your Personalised Proposal",
    description: "Receive a detailed, transparent quote within hours. No hidden fees, no surprises.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "3",
    title: "Book Your Service",
    description: "Choose a date that works for you. We'll arrive on time and get the job done right.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop&q=80",
  },
];

export function Process() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--canvas-base)' }}>
      <div className="mx-auto max-w-6xl">
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
            How Working With{" "}
            <span className="text-molten-gold">ElectroMain</span> Works
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
            >
              {/* Step Image */}
              <div className="mb-6 overflow-hidden rounded-2xl">
                <div
                  className="aspect-video w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${step.image}')` }}
                />
              </div>

              {/* Step Number */}
              <div
                className="mb-4 text-5xl font-bold italic"
                style={{ color: 'var(--gold-24k)' }}
              >
                Step {step.number}
              </div>

              {/* Title */}
              <h3
                className="mb-3 text-xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)' }}>
                {step.description}
              </p>

              {/* Decorative border on hover */}
              <div
                className="absolute inset-0 rounded-3xl border-2 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ borderColor: 'var(--gold-24k)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
