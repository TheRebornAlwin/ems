"use client";

import { motion } from "framer-motion";
import { Home, Building2, Briefcase, Users, Store, HardHat } from "lucide-react";

const clientTypes = [
  {
    icon: Home,
    label: "Homeowners",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop&q=80"
  },
  {
    icon: Building2,
    label: "Landlords",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&q=80"
  },
  {
    icon: Briefcase,
    label: "Property Managers",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&q=80"
  },
  {
    icon: Users,
    label: "General Contractors",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&q=80"
  },
  {
    icon: Store,
    label: "Business Owners",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&q=80"
  },
  {
    icon: HardHat,
    label: "Developers",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&q=80"
  },
];

export function WhoWeServe() {
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
            className="text-4xl font-bold md:text-5xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Who We <span className="text-molten-gold">Serve</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Because you deserve exceptional service, no matter the project.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {clientTypes.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="w-full aspect-video rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${client.image}')` }}
                />
              </div>

              {/* Icon and Label */}
              <div className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg shadow-sm"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <client.icon size={16} className="text-white" />
                </div>
                <p
                  className="text-sm md:text-base font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {client.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
