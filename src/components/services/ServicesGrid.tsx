"use client";

import { Container } from "@/components/primitives/Container";
import { motion } from "framer-motion";
import { Zap, Lightbulb, Car, Shield, Home, Flame, Wrench, Cable, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Zap, title: "Electrical Installations", desc: "Complete rewires with precision", color: "#D4AF37", size: "large" },
  { icon: Lightbulb, title: "Lighting Design", desc: "Architectural brilliance", color: "#EB9E34", size: "medium" },
  { icon: Cable, title: "Panel Upgrades", desc: "Three-phase power", color: "#F5A623", size: "medium" },
  { icon: Car, title: "EV Chargers", desc: "Fast home charging", color: "#B87333", size: "small" },
  { icon: Home, title: "Smart Home", desc: "Integrated automation", color: "#CD7F32", size: "small" },
  { icon: Shield, title: "Fire & CCTV", desc: "24/7 monitoring", color: "#D4AF37", size: "small" },
];

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full opacity-10 blur-3xl" style={{ background: 'var(--brand-gold)' }} />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full opacity-10 blur-3xl" style={{ background: 'var(--brand-honey)' }} />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-6 inline-block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest" style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--brand-copper)' }}>
            Our Expertise
          </div>
          <h2 className="text-5xl font-black md:text-6xl lg:text-7xl">
            <span style={{ color: 'var(--brand-charcoal)' }}>Premium</span>
            <br />
            <span className="gradient-text-gold">Services</span>
          </h2>
          <div className="mt-6 h-1 w-24 rounded-full gradient-gold" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[180px] gap-6 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, i) => {
            const gridClass = i === 0 ? "md:col-span-2 md:row-span-2" : i === 1 || i === 2 ? "md:row-span-2" : "";
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={gridClass}
              >
                <Link href="/services" className="group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 card-luxury">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `linear-gradient(135deg, ${service.color}15 0%, transparent 100%)` }} />

                  {/* Icon */}
                  <div className="relative mb-auto">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110" style={{ background: `${service.color}20` }}>
                      <service.icon size={28} style={{ color: service.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold transition-colors duration-300" style={{ color: 'var(--brand-charcoal)' }}>
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm" style={{ color: 'var(--brand-slate)' }}>{service.desc}</p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-6 top-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={20} style={{ color: service.color }} />
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
