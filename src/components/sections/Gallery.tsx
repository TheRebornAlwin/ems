"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Preview gallery images - showing first 6 projects
// Full portfolio available at /portfolio
const galleryPreview = [
  {
    url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=600&fit=crop&q=80",
    title: "Modern Consumer Unit Installation",
    category: "Electrical Upgrade"
  },
  {
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=600&fit=crop&q=80",
    title: "Professional Panel Wiring",
    category: "Commercial Installation"
  },
  {
    url: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&h=600&fit=crop&q=80",
    title: "Industrial Circuit Installation",
    category: "Industrial"
  },
  {
    url: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=600&fit=crop&q=80",
    title: "Electrical Safety Inspection",
    category: "Testing & Certification"
  },
  {
    url: "https://images.unsplash.com/photo-1621905252189-08b45d6a269e?w=600&h=600&fit=crop&q=80",
    title: "Complete Home Rewire",
    category: "Residential"
  },
  {
    url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop&q=80",
    title: "Commercial Electrical Systems",
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
