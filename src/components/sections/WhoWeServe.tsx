"use client";

import { motion } from "framer-motion";
import { Home, Building2, Briefcase, Users, Store, HardHat } from "lucide-react";

const clientTypes = [
  { icon: Home, label: "Homeowners" },
  { icon: Building2, label: "Landlords" },
  { icon: Briefcase, label: "Property Managers" },
  { icon: Users, label: "General Contractors" },
  { icon: Store, label: "Business Owners" },
  { icon: HardHat, label: "Developers" },
];

export function WhoWeServe() {
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
            className="text-4xl font-bold md:text-5xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Who We <span className="text-molten-gold">Serve</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Because you deserve exceptional service, no matter the project.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8">
          {clientTypes.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 p-6"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
              >
                <client.icon size={32} className="text-white" />
              </div>
              <p
                className="text-lg font-semibold text-center"
                style={{ color: 'var(--text-primary)' }}
              >
                {client.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
