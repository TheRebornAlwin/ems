"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Shield, Clock } from "lucide-react";

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

interface HeroProps {
  onOpenCalculator: () => void;
}

export function Hero({ onOpenCalculator }: HeroProps) {
  // Mobile: full vh, Desktop: cut 50px from bottom
  const heroHeight = "h-screen md:h-[calc(100vh-50px)]";

  return (
    <section id="home" className={`relative ${heroHeight} overflow-visible`}>
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        {/* Cloudflare Stream Video */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://customer-kngdsbkxxxbb5ynm.cloudflarestream.com/ebeb9338492ff95d17e24207908b55b0/iframe?poster=https%3A%2F%2Fcustomer-kngdsbkxxxbb5ynm.cloudflarestream.com%2Febeb9338492ff95d17e24207908b55b0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&muted=true&loop=true&controls=false"
            loading="lazy"
            className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{
              border: 'none',
              width: '177.77777778vh', /* 100 * 16/9 */
              height: '56.25vw', /* 100 * 9/16 */
              minHeight: '100%',
              minWidth: '100%',
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          />
        </div>
        {/* Dark Overlay with Brand Tint */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 6, 3, 0.85) 0%, rgba(28, 15, 8, 0.75) 50%, rgba(61, 31, 13, 0.7) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Main Hero Content */}
        <div className="flex flex-1 items-center px-6 pt-32 pb-32">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl text-center md:text-left"
            >
              {/* Eyebrow */}
              <p
                className="mb-4 text-base sm:text-lg font-medium italic"
                style={{ color: 'var(--gold-24k)' }}
              >
                Quality Work Done Right
              </p>

              {/* Main Headline */}
              <h1 className="mb-6 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                South Wales' Most Trusted{" "}
                <span className="text-molten-gold">Electrical Experts</span>
              </h1>

              {/* Subheadline - responsive font size */}
              <p className="mb-10 text-base sm:text-lg md:text-xl text-white/80">
                Get Your Free Quote Within The Hour
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center md:justify-start">
                <button
                  onClick={onOpenCalculator}
                  className="btn-luxury inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold w-auto mx-auto md:mx-0"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
                    color: 'var(--luxe-noir)'
                  }}
                >
                  <FileText size={20} />
                  Get My Free Quote
                </button>

                <a
                  href="tel:02922402640"
                  className="btn-luxury inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold w-auto mx-auto md:mx-0"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
                    color: 'var(--luxe-noir)'
                  }}
                >
                  <Phone size={20} />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Trust Badges - Hidden on mobile, shown on desktop overlapping sections */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden md:block absolute left-0 right-0 bottom-[-50px] translate-y-1/2 z-20 px-4 sm:px-6"
      >
        <div className="mx-auto grid max-w-5xl gap-3 sm:gap-4 md:grid-cols-3">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-white px-4 py-3 sm:px-6 sm:py-5 shadow-xl"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
              >
                <badge.icon size={28} style={{ color: 'var(--luxe-noir)' }} />
              </div>
              <div>
                <p className="font-bold text-base" style={{ color: 'var(--luxe-noir)' }}>
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
    </section>
  );
}
