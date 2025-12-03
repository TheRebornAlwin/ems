"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Preview gallery images - showing first 6 projects
// Full portfolio available at /portfolio
const galleryPreview = [
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Ny12ben9wqPSgCIkYzDKyO3ob2TiJuWdeZHG",
    title: "Full Rewire - Cardiff Property",
    category: "Residential Rewire"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60L52Mvri0LIztSgi7JQ9OW4xouMKaepnsh6GU",
    title: "Consumer Unit Upgrade",
    category: "Electrical Upgrade"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo606Lyzr2VjphHW2Ux8KBC7G0tONikAyRTegflu",
    title: "Residential Installation",
    category: "New Installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60cj9LxGdKfwc6Nb9T5gEotSPRvGW0Ad73yphm",
    title: "Commercial Rewire",
    category: "Commercial"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60TcbM8QjcPN9SbhB7l5xKRsGCdfQkI4iEoXzU",
    title: "Property Management Contract",
    category: "Commercial"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Yw3OTLbFJWghNpkz60GSmELv43BZaxPTbOY9",
    title: "Contractor Partnership",
    category: "Commercial"
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
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
            </div>
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
