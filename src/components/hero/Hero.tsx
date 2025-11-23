"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Shield, Clock } from "lucide-react";
import Link from "next/link";

const trustBadges = [
  {
    icon: FileText,
    title: "Transparent Fixed Pricing",
    subtitle: "No Hidden Costs",
  },
  {
    icon: Clock,
    title: "Premium Service",
    subtitle: "Delivered On Schedule",
  },
  {
    icon: Shield,
    title: "NICEIC Certified",
    subtitle: "5-Year Guarantee",
  },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0">
        {/* Replace this with video when ready:
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
        */}
        {/* Placeholder Image */}
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=1080&fit=crop&q=80')`,
          }}
        />
        {/* Dark Overlay with Brand Tint */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 6, 3, 0.85) 0%, rgba(28, 15, 8, 0.75) 50%, rgba(61, 31, 13, 0.7) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Main Hero Content */}
        <div className="flex flex-1 items-center px-6 pt-32 pb-20">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              {/* Eyebrow */}
              <p
                className="mb-4 text-lg font-medium italic"
                style={{ color: 'var(--gold-24k)' }}
              >
                Quality Work Done Right
              </p>

              {/* Main Headline */}
              <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                South Wales' Most Trusted{" "}
                <span className="text-molten-gold">Electrical Experts</span>
              </h1>

              {/* Subheadline */}
              <p className="mb-10 text-xl text-white/80">
                Get Your Free Quote Within The Hour
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#estimate"
                  className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-white px-8 py-4 text-base font-semibold transition-all hover:bg-transparent hover:text-white"
                  style={{ color: 'var(--luxe-noir)' }}
                >
                  <FileText size={20} />
                  Get My Free Quote
                </Link>

                <a
                  href="tel:02922402640"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <Phone size={20} />
                  02922 402640
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-6 pb-12"
        >
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl bg-white/95 px-6 py-5 shadow-lg backdrop-blur-sm"
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <badge.icon size={28} className="text-white" />
                </div>
                <div>
                  <p className="font-bold" style={{ color: 'var(--luxe-noir)' }}>
                    {badge.title}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--luxe-whiskey)' }}>
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
