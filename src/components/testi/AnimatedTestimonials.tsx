"use client";

import { Container } from "@/components/primitives/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Worthington",
    role: "Homeowner, Kensington",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=90",
    text: "From the initial consultation to the final inspection, ElectroMain demonstrated exceptional professionalism. Our complete rewire was handled with surgical precision.",
    highlight: "surgical precision",
  },
  {
    name: "Victoria Chen",
    role: "Property Manager, Chelsea",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=90",
    text: "I manage six luxury properties in central London. ElectroMain is the only electrical contractor I trust. Transparent pricing, impeccable work, every single time.",
    highlight: "impeccable work",
  },
  {
    name: "Robert Ashford",
    role: "Architect, Notting Hill",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=90",
    text: "As an architect, I have exacting standards. ElectroMain not only met them but exceeded every expectation. Their lighting designs are works of art.",
    highlight: "works of art",
  },
  {
    name: "Emma Fitzgerald",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=90",
    text: "The team understands that electrical work is integral to design, not an afterthought. Flush plates, concealed wiring, perfect alignment every time.",
    highlight: "perfect alignment",
  },
];

export function AnimatedTestimonials() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full opacity-10 blur-3xl" style={{ background: 'var(--brand-gold)' }} />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full opacity-10 blur-3xl" style={{ background: 'var(--brand-honey)' }} />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest" style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--brand-copper)' }}>
            Testimonials
          </div>
          <h2 className="text-5xl font-black md:text-6xl lg:text-7xl">
            <span style={{ color: 'var(--brand-charcoal)' }}>Client</span>{" "}
            <span className="gradient-text-gold">Stories</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full gradient-gold" />
          <p className="mx-auto mt-8 max-w-2xl text-lg" style={{ color: 'var(--brand-slate)' }}>
            What London&apos;s most discerning homeowners say about our dedication to excellence.
          </p>
        </motion.div>

        {/* Staggered Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative ${index % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative overflow-hidden rounded-3xl p-8 transition-all duration-500 card-luxury">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%)' }} />

                {/* Quote Icon */}
                <div className="absolute -right-4 -top-4 opacity-5 transition-all duration-500 group-hover:opacity-10">
                  <Quote size={120} style={{ color: 'var(--brand-gold)' }} />
                </div>

                {/* Stars */}
                <div className="relative mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.05, duration: 0.3 }}
                    >
                      <Star
                        size={18}
                        className="fill-current"
                        style={{ color: 'var(--brand-gold)' }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Text with Highlight */}
                <p className="relative mb-8 text-lg leading-relaxed" style={{ color: 'var(--brand-graphite)' }}>
                  &ldquo;{testimonial.text.split(testimonial.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="font-bold gradient-text-gold">{testimonial.highlight}</span>
                      )}
                    </span>
                  ))}&rdquo;
                </p>

                {/* Author */}
                <div className="relative flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full opacity-50 gradient-gold blur-sm" />
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="relative rounded-full object-cover ring-2"
                      style={{ ringColor: 'var(--brand-gold)' }}
                    />
                  </div>
                  <div>
                    <p className="text-base font-bold" style={{ color: 'var(--brand-charcoal)' }}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--brand-slate)' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 gradient-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
