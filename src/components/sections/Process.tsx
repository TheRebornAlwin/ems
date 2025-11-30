"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Request Your Free Quote",
    description: "Send us photos or videos of your project. Explain what you need and we'll handle the rest.",
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60faANKp6O7G2NiKv0Hn8SPa6RsEQeXwfhtd1q",
  },
  {
    number: "2",
    title: "Get Your Personalised Proposal",
    description: "Receive a detailed, transparent quote within hours. No hidden fees, no surprises.",
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60TgR4O1mjcPN9SbhB7l5xKRsGCdfQkI4iEoXz",
  },
  {
    number: "3",
    title: "Book Your Service",
    description: "Choose a date that works for you. We'll arrive on time and get the job done right.",
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Eef4CATzmkqQweVdh9cnL2vfjKiTGDugRSaX",
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
            Our Simple<br className="md:hidden" />
            {" "}<span className="text-molten-gold">3-Step Process</span>
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
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg transition-all hover:shadow-xl text-center"
            >
              {/* Step Image */}
              <div className="mb-5 overflow-hidden rounded-2xl">
                <div
                  className="aspect-video w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${step.image}')` }}
                />
              </div>

              {/* Step Number */}
              <div
                className="mb-3 text-4xl font-bold"
                style={{ color: 'var(--gold-24k)' }}
              >
                Step {step.number}
              </div>

              {/* Title */}
              <h3
                className="mb-2 text-lg font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
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
