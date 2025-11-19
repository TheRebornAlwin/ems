"use client";

import { Container } from "@/components/primitives/Container";
import { motion } from "framer-motion";
import { Target, Sparkles, FileText } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Precision",
    description: "Perfect planning, neat runs, zero guesswork.",
    details:
      "Every cable run is mapped in advance. We use laser levels, cable management systems, and decades of experience to ensure flawless execution.",
    gradient: "from-[#D4AF37] to-[#EB9E34]",
    color: "#D4AF37",
  },
  {
    icon: Sparkles,
    title: "Immaculate Finish",
    description: "Clean lines, flush plates, protected surfaces.",
    details:
      "We use dust extraction, floor protection, and leave your home cleaner than we found it. Every plate is perfectly aligned, every wire concealed.",
    gradient: "from-[#EB9E34] to-[#F5A623]",
    color: "#EB9E34",
  },
  {
    icon: FileText,
    title: "Transparent Process",
    description: "Clear pricing, clear timeline, daily updates.",
    details:
      "No hidden costs, no surprises. You receive a detailed quote, project schedule, and daily progress reports with photos.",
    gradient: "from-[#B87333] to-[#CD7F32]",
    color: "#B87333",
  },
];

export function CraftTriptych() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--brand-pearl) 0%, var(--brand-cream) 100%)' }} />

      {/* Decorative Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--brand-gold)' }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], y: [-30, 30, -30] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 bottom-20 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--brand-copper)' }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest" style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--brand-copper)' }}>
            Why ElectroMain
          </div>
          <h2 className="text-5xl font-black md:text-6xl lg:text-7xl">
            <span style={{ color: 'var(--brand-charcoal)' }}>Craftsmanship</span>
            <br />
            <span className="gradient-text-gold">You Can Trust</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full gradient-gold" />
          <p className="mx-auto mt-8 max-w-2xl text-lg" style={{ color: 'var(--brand-slate)' }}>
            Three pillars that define every project we deliver to London&apos;s finest homes.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative"
            >
              {/* Floating Card */}
              <div className="relative overflow-hidden rounded-3xl p-10 transition-all duration-500 card-luxury">
                {/* Gradient Background on Hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `linear-gradient(135deg, ${pillar.color}15 0%, transparent 100%)` }}
                />

                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-[0.02] transition-opacity duration-500 group-hover:opacity-[0.05]" style={{
                  backgroundImage: `radial-gradient(circle at 3px 3px, ${pillar.color} 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }} />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="relative mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${pillar.color}30 0%, ${pillar.color}10 100%)` }}
                >
                  <pillar.icon size={40} style={{ color: pillar.color }} />

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50" style={{ background: pillar.color }} />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mb-4 text-2xl font-black" style={{ color: 'var(--brand-charcoal)' }}>
                    {pillar.title}
                  </h3>

                  <p className="mb-6 text-lg font-semibold" style={{ color: pillar.color }}>
                    {pillar.description}
                  </p>

                  <p className="text-base leading-relaxed" style={{ color: 'var(--brand-slate)' }}>
                    {pillar.details}
                  </p>
                </div>

                {/* Bottom Gradient Line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${pillar.color}, transparent)` }}
                />

                {/* Corner Decoration */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-30" style={{ background: pillar.color }} />
              </div>

              {/* Floating Shadow */}
              <div className="absolute -bottom-4 left-8 right-8 h-8 rounded-full opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30" style={{ background: pillar.color }} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
