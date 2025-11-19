"use client";

import { Container } from "@/components/primitives/Container";
import { ArrowRight, Zap, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroAurora() {
  return (
    <section className="relative min-h-screen overflow-hidden aurora-flow">
      {/* Grain Texture Overlay */}
      <div className="grain-texture" />

      {/* Morphing Decorative Orbs */}
      <div className="orb-morph orb-gold" style={{ width: '600px', height: '600px', top: '-10%', left: '5%' }} />
      <div className="orb-morph orb-amber" style={{ width: '500px', height: '500px', top: '40%', right: '-5%', animationDelay: '-8s' }} />
      <div className="orb-morph orb-copper" style={{ width: '400px', height: '400px', bottom: '10%', left: '30%', animationDelay: '-15s' }} />

      {/* Particle Field Background */}
      <div className="absolute inset-0 particle-field opacity-30" />

      <Container className="relative z-10 flex min-h-screen items-center py-32">
        <div className="grid w-full gap-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Luxury Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-10 inline-flex"
            >
              <div className="glass-masterpiece inline-flex items-center gap-3 rounded-full px-6 py-3">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                  <Zap size={18} style={{ color: 'var(--amber-fire)' }} fill="var(--amber-fire)" />
                </motion.div>
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--luxe-noir)' }}>
                  London's Electrical Artisans
                </span>
              </div>
            </motion.div>

            {/* Headline - Artistic Typography */}
            <h1 className="heading-artistic mb-6" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}>
              <span className="block">Where</span>
              <span className="block">
                <span className="text-molten-gold">Precision</span>
              </span>
              <span className="block">Meets</span>
              <span className="block heading-artistic-italic text-molten-gold">Perfection</span>
            </h1>

            {/* Accent Line */}
            <div className="mb-10 flex items-center gap-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="h-1 w-32 rounded-full liquid-gold-flow"
              />
              <div className="h-3 w-3 rounded-full liquid-gold-flow animate-pulse-glow-gold" />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-luxury-serif max-w-xl text-2xl leading-relaxed"
              style={{ color: 'var(--luxe-whiskey)' }}
            >
              Elevating electrical craftsmanship to an art form. We orchestrate invisible systems that power extraordinary living.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center"
            >
              <Link href="#estimate" className="btn-artistic-gold group">
                Instant Estimate
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link href="/projects" className="btn-outline-artistic group">
                View Masterworks
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </Link>
            </motion.div>

            {/* Certifications Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-20 flex flex-wrap items-center gap-8"
            >
              {[
                { icon: Shield, text: "NICEIC Approved" },
                { icon: Clock, text: "24/7 Support" },
                { icon: Award, text: "5-Year Warranty" }
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl glass-masterpiece">
                    <cert.icon size={20} style={{ color: 'var(--gold-imperial)' }} />
                  </div>
                  <span className="text-sm font-bold" style={{ color: 'var(--luxe-noir)' }}>
                    {cert.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Artistic Composition */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden h-[700px] lg:block"
          >
            {/* Center Floating Card */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [-1, 1, -1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="card-floating-frame w-80">
                <div className="card-floating-frame-inner p-10">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 140, 0, 0.1))' }}>
                    <div className="h-2 w-2 rounded-full animate-pulse-glow-gold liquid-gold-flow" />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--amber-fire)' }}>
                      Master Certified
                    </span>
                  </div>

                  <h3 className="heading-artistic mb-4 text-4xl" style={{ color: 'var(--luxe-noir)' }}>
                    Excellence
                    <br />
                    <span className="heading-artistic-italic">Guaranteed</span>
                  </h3>

                  <div className="mb-6 h-1 w-16 rounded-full liquid-gold-flow" />

                  <p className="text-luxury-serif mb-8 leading-relaxed" style={{ color: 'var(--luxe-whiskey)', fontSize: '1.05rem' }}>
                    Every wire, every connection—executed with surgical precision.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-white" style={{ background: `linear-gradient(${i * 45}deg, var(--gold-24k), var(--amber-fire))` }} />
                      ))}
                    </div>
                    <div>
                      <div className="text-2xl font-black text-molten-gold">500+</div>
                      <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--luxe-whiskey)' }}>Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Accent Cards */}
            <motion.div
              animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-24"
            >
              <div className="glass-masterpiece rounded-3xl p-6">
                <div className="mb-2 text-4xl font-black text-molten-gold">15+</div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--luxe-noir)' }}>
                  Years<br />Excellence
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: -2 }}
              className="absolute bottom-40 right-0"
            >
              <div className="glass-masterpiece rounded-3xl p-6">
                <div className="mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-5 w-5 text-xl">⭐</div>
                    ))}
                  </div>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--luxe-noir)' }}>
                  100% Rating
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: -4 }}
              className="absolute bottom-20 left-12"
            >
              <div className="glass-masterpiece rounded-full p-4">
                <Zap size={32} style={{ color: 'var(--amber-fire)' }} className="animate-pulse-glow-gold" fill="var(--amber-fire)" />
              </div>
            </motion.div>

            {/* Decorative Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 top-0 h-64 w-64 rounded-full border-2 opacity-10"
              style={{ borderColor: 'var(--gold-24k)' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full border opacity-5"
              style={{ borderColor: 'var(--amber-fire)', borderWidth: '3px' }}
            />
          </motion.div>
        </div>
      </Container>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40" style={{
        background: 'linear-gradient(to top, var(--canvas-cream), transparent)'
      }} />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-1 w-1 rounded-full liquid-gold-flow" />
          <div className="h-1 w-1 rounded-full liquid-gold-flow" style={{ animationDelay: '0.2s' }} />
          <div className="h-1 w-1 rounded-full liquid-gold-flow" style={{ animationDelay: '0.4s' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
