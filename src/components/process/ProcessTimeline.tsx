"use client";

import { Container } from "@/components/primitives/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Search, ClipboardCheck, Wrench, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We listen to your requirements, inspect your property, and understand your vision for electrical excellence.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&q=90",
    color: "#D4AF37",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment",
    description:
      "Detailed on-site survey with transparent pricing and a fixed project timeline. No hidden costs, guaranteed.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=300&fit=crop&q=90",
    color: "#EB9E34",
  },
  {
    icon: Wrench,
    title: "Installation",
    description:
      "Precision execution with daily updates, protected surfaces, and zero disruption to your daily life.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&q=90",
    color: "#B87333",
  },
  {
    icon: HeartHandshake,
    title: "Aftercare",
    description:
      "5-year warranty, maintenance plans, and priority emergency support. We stand behind every connection.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop&q=90",
    color: "#CD7F32",
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const beamHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--brand-cream) 0%, var(--brand-ivory) 50%, var(--brand-cream) 100%)' }} />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(var(--brand-gold) 1px, transparent 1px), linear-gradient(90deg, var(--brand-gold) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest" style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--brand-copper)' }}>
            Process
          </div>
          <h2 className="text-5xl font-black md:text-6xl lg:text-7xl">
            <span style={{ color: 'var(--brand-charcoal)' }}>How We</span>{" "}
            <span className="gradient-text-gold">Work</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full gradient-gold" />
          <p className="mx-auto mt-8 max-w-2xl text-lg" style={{ color: 'var(--brand-slate)' }}>
            A proven four-step journey that delivers excellence every single time.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full md:block md:left-1/2 md:-translate-x-1/2" style={{ background: 'rgba(212, 175, 55, 0.2)' }} />

          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-8 top-0 hidden w-1 rounded-full md:block md:left-1/2 md:-translate-x-1/2 gradient-gold"
            style={{ height: beamHeight }}
          />

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col gap-8 md:flex-row md:items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number Orb */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-0 z-20 flex h-20 w-20 items-center justify-center rounded-full md:left-1/2 md:-translate-x-1/2"
                  style={{
                    background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}CC 100%)`,
                    boxShadow: `0 8px 32px ${step.color}40`
                  }}
                >
                  <step.icon size={32} className="text-white" />

                  {/* Pulse Animation */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute inset-0 rounded-full"
                    style={{ background: step.color }}
                  />
                </motion.div>

                {/* Content Side */}
                <div
                  className={`ml-28 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="inline-block"
                  >
                    <span
                      className="text-sm font-black uppercase tracking-widest"
                      style={{ color: step.color }}
                    >
                      Step {index + 1}
                    </span>
                    <h3 className="mt-3 text-3xl font-black" style={{ color: 'var(--brand-charcoal)' }}>
                      {step.title}
                    </h3>
                    <div
                      className={`mt-4 h-1 w-16 rounded-full ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                      style={{ background: step.color }}
                    />
                    <p className="mt-6 text-base leading-relaxed" style={{ color: 'var(--brand-slate)' }}>
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Image Side */}
                <div className="ml-28 md:ml-0 md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 2 : -2 }}
                    transition={{ duration: 0.4 }}
                    className={`group relative overflow-hidden rounded-3xl ${
                      index % 2 === 0 ? "md:ml-20" : "md:mr-20"
                    }`}
                  >
                    {/* Image Border Glow */}
                    <div
                      className="absolute -inset-1 rounded-3xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50"
                      style={{ background: step.color }}
                    />

                    <div className="relative overflow-hidden rounded-3xl card-luxury">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                        style={{ background: step.color }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
