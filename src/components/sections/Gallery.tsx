"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Preview gallery images - showing first 6 projects
// Full portfolio available at /portfolio
const galleryPreview = [
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60ptY01d6Ni6Av54RNPWqbT1C089xjJVmBeXwk",
    title: "Full Rewire - Cardiff",
    category: "Residential Rewire"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60YGz7T8bFJWghNpkz60GSmELv43BZaxPTbOY9",
    title: "Consumer Unit Upgrade",
    category: "Electrical Upgrade"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60iMFaHgGBMDoNa9vqeyzZCf5r4PXGYKn6tTU1",
    title: "Residential Installation",
    category: "New Installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Kdm3Iw8pEAjeMQOGTb9VvPHucf4Cods1yFk6",
    title: "Commercial Rewire",
    category: "Commercial"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60t8SiBDLF5A910T6eXYULNah2yOEodiZrxz7J",
    title: "Complete Rewire",
    category: "Residential"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60PPqIhQwWZl4eY2dwOTHEaNFMLx7ByuziDjQs",
    title: "Fire Alarms & CCTV",
    category: "Security"
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6" style={{ background: 'var(--canvas-cream)' }}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold md:text-5xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Our <span className="text-molten-gold">Work Gallery</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            See the quality and precision of our electrical installations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {galleryPreview.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.15 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${image.url}')` }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{image.title}</p>
                <p className="text-white/70 text-xs">{image.category}</p>
              </div>

              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ borderColor: 'var(--gold-24k)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* View Entire Portfolio Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
              color: 'var(--luxe-noir)'
            }}
          >
            View Entire Portfolio
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
