"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Electrical Services",
    items: ["Full rewires", "Consumer units", "Fault finding", "Testing & inspection"],
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60t8SiBDLF5A910T6eXYULNah2yOEodiZrxz7J",
  },
  {
    title: "Plumbing Services",
    items: ["Boiler installation", "Radiator upgrades", "Pipe repairs", "Bathroom plumbing"],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=600&fit=crop&q=80",
  },
  {
    title: "Heating Services",
    items: ["Central heating", "Underfloor heating", "Heat pumps", "Smart thermostats"],
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60EJiO8YTzmkqQweVdh9cnL2vfjKiTGDugRSaX",
  },
  {
    title: "EV Chargers",
    items: ["Home installation", "Commercial units", "Load balancing", "Smart charging"],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=600&fit=crop&q=80",
  },
  {
    title: "Fire Alarms & CCTV",
    items: ["System design", "Installation", "Maintenance", "Monitoring"],
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60PPqIhQwWZl4eY2dwOTHEaNFMLx7ByuziDjQs",
  },
  {
    title: "Facilities Maintenance",
    items: ["Planned maintenance", "Emergency callouts", "Compliance testing", "Building management"],
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60bVOie1FfGHBJLDvIR7wkdyZxNtrq1MXp4C38",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6" style={{ background: 'var(--canvas-base)' }}>
      <div className="mx-auto max-w-7xl">
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
            Complete Solutions for{" "}
            <span className="text-molten-gold">Every Need</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Background Image */}
              <div
                className="aspect-[3/4] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(10, 6, 3, 0.95) 0%, rgba(10, 6, 3, 0.6) 50%, rgba(10, 6, 3, 0.3) 100%)',
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center md:text-left">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: 'var(--gold-24k)' }}
                >
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center justify-center md:justify-start gap-2 text-white/90">
                      <div
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: 'var(--gold-24k)' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-3xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ borderColor: 'var(--gold-24k)' }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
              color: 'var(--luxe-noir)'
            }}
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
