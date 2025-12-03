"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Shield, Award, Users, CheckCircle, Zap, Clock, Star, TrendingUp } from "lucide-react";

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "NICEIC Certified" },
  { number: "5-Year", label: "Guarantee" },
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every installation meets and exceeds current electrical safety standards with full certification."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the highest quality materials and follow best practices for long-lasting results."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time with accurate scheduling and efficient project completion."
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    description: "Our reputation is built on exceeding expectations and delivering exceptional service."
  }
];

const certifications = [
  "NICEIC Approved Contractor",
  "Part P Certified",
  "18th Edition BS7671 Qualified",
  "Public Liability Insurance",
  "Professional Indemnity Insurance",
  "Safe Contractor Approved"
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: 'var(--canvas-base)' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60BZnq0vDyND6V4kTR1Csjx2dmiMWqHIegoJhZ')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-all hover:gap-3 rounded-full px-6 py-3"
              style={{
                background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
                color: 'var(--luxe-noir)'
              }}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="max-w-3xl mx-auto text-center">
              <h1
                className="text-5xl font-bold md:text-6xl mb-6 leading-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                About <span className="text-molten-gold">ElectroMain</span>
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                South Wales' most trusted electrical specialists, delivering exceptional service
                and premium quality workmanship since day one.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl text-center"
                style={{ background: 'var(--canvas-cream)' }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6" style={{ background: 'var(--canvas-cream)' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-3xl">
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Ny12ben9wqPSgCIkYzDKyO3ob2TiJuWdeZHG')`,
                  }}
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl -z-10"
                style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Our <span className="text-molten-gold">Story</span>
              </h2>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  At ElectroMain, we understand that finding a trustworthy electrician feels impossible.
                  Horror stories of cowboys, hidden fees, and botched jobs are everywhere. We exist to change that.
                </p>

                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  When your electrical system needs attention, you need it handled quickly, cleanly, and
                  correctly the first time. That's exactly what we deliver.
                </p>

                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  We specialize in comprehensive electrical services across South Wales, from full rewires
                  to precision installations. Not random small jobs—we focus on what we do best: transforming
                  outdated, unsafe electrical systems into modern, certified, and future-proof installations.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:opacity-90"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
                    color: 'var(--luxe-noir)'
                  }}
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6" style={{ background: 'var(--canvas-base)' }}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold md:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Why Choose <span className="text-molten-gold">ElectroMain</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We're not just electricians—we're craftsmen committed to excellence in every project.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl"
                style={{ background: 'var(--canvas-cream)' }}
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl mb-6"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <value.icon size={32} style={{ color: 'var(--luxe-noir)' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6" style={{ background: 'var(--canvas-cream)' }}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold md:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Fully <span className="text-molten-gold">Certified</span> & Insured
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Your safety and peace of mind are our top priorities
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: 'var(--canvas-base)' }}
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <CheckCircle size={16} style={{ color: 'var(--luxe-noir)' }} />
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-24 px-6" style={{ background: 'var(--canvas-base)' }}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(218, 165, 32, 0.1), rgba(255, 140, 0, 0.05))' }}
          >
            <h2 className="text-3xl font-bold md:text-5xl mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
              Our <span className="text-molten-gold">Promise</span> to You
            </h2>

            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              {[
                "Proactive communication at every stage",
                "Meticulous attention to detail",
                "5-year workmanship guarantee",
                "Same-day emergency response available",
                "No cowboys, no hidden fees, no mess",
                "Daily progress updates",
                "Your home protected and respected",
                "Certificates delivered upon completion"
              ].map((promise, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-1"
                    style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                  >
                    <CheckCircle size={14} style={{ color: 'var(--luxe-noir)' }} />
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {promise}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
                  color: 'var(--luxe-noir)'
                }}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
