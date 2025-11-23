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
  // Adjust this value to cut more pixels from the bottom (e.g., h-[calc(100vh-100px)] for 100px cut)
  const heroHeight = "h-[calc(100vh-50px)]"; // Currently cutting 50px from bottom

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
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
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
                  className="btn-luxury inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-white px-8 py-4 text-base font-semibold"
                  style={{ color: 'var(--luxe-noir)' }}
                >
                  <FileText size={20} />
                  Get My Free Quote
                </Link>

                <a
                  href="tel:02922402640"
                  className="btn-luxury inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <Phone size={20} />
                  02922 402640
                </a>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Trust Badges - Positioned to overlap hero and next section
          ADJUSTMENT: Change the 'bottom' value to shift cards up/down
          - bottom-[-10px] shifts cards down 10px from current position
          - bottom-[-20px] shifts cards down 20px
          - bottom-[10px] shifts cards up 10px
          The translate-y-1/2 makes them overlap 50% into the next section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute left-0 right-0 bottom-[-10px] translate-y-1/2 z-20 px-4 sm:px-6"
      >
        <div className="mx-auto grid max-w-5xl gap-3 sm:gap-4 md:grid-cols-3">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-white px-4 py-3 sm:px-6 sm:py-5 shadow-xl"
            >
              <div
                className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-lg sm:rounded-xl"
                style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
              >
                <badge.icon size={20} className="text-white sm:hidden" />
                <badge.icon size={28} className="text-white hidden sm:block" />
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base" style={{ color: 'var(--luxe-noir)' }}>
                  {badge.title}
                </p>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--luxe-whiskey)' }}>
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
