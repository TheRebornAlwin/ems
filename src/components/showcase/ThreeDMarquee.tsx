"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/primitives/Container";
import { ArrowUpRight } from "lucide-react";

interface MarqueeItem {
  title: string;
  category: string;
  src: string;
  value: string;
}

const defaultItems: MarqueeItem[] = [
  {
    title: "Chelsea Townhouse",
    category: "Full Rewire",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop&q=90",
    value: "£28K",
  },
  {
    title: "Mayfair Penthouse",
    category: "Smart Lighting",
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=450&fit=crop&q=90",
    value: "£45K",
  },
  {
    title: "Richmond Villa",
    category: "EV Charger",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&q=90",
    value: "£3.5K",
  },
  {
    title: "Notting Hill Flat",
    category: "Panel Upgrade",
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=450&fit=crop&q=90",
    value: "£4.2K",
  },
  {
    title: "Hampstead Estate",
    category: "Fire & CCTV",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=450&fit=crop&q=90",
    value: "£18K",
  },
  {
    title: "Barnes House",
    category: "Lighting Design",
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=450&fit=crop&q=90",
    value: "£12K",
  },
  {
    title: "Wimbledon Manor",
    category: "Smart Home",
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=450&fit=crop&q=90",
    value: "£35K",
  },
  {
    title: "Kensington Garden",
    category: "Full Rewire",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=450&fit=crop&q=90",
    value: "£42K",
  },
  {
    title: "Fulham Residence",
    category: "Underfloor Heating",
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=450&fit=crop&q=90",
    value: "£8K",
  },
];

interface ThreeDMarqueeProps {
  items?: MarqueeItem[];
}

export function ThreeDMarquee({ items = defaultItems }: ThreeDMarqueeProps) {
  const columns = [
    items.slice(0, 3),
    items.slice(3, 6),
    items.slice(6, 9),
  ];

  return (
    <section className="relative overflow-hidden py-32">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--brand-cream) 0%, var(--brand-pearl) 50%, var(--brand-cream) 100%)' }} />
        <div className="absolute left-0 top-1/3 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl" style={{ background: 'var(--brand-gold)' }} />
        <div className="absolute right-0 bottom-1/3 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl" style={{ background: 'var(--brand-honey)' }} />
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
            Portfolio
          </div>
          <h2 className="text-5xl font-black md:text-6xl lg:text-7xl">
            <span style={{ color: 'var(--brand-charcoal)' }}>Recent</span>{" "}
            <span className="gradient-text-gold">Masterpieces</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full gradient-gold" />
          <p className="mx-auto mt-8 max-w-2xl text-lg" style={{ color: 'var(--brand-slate)' }}>
            Showcasing immaculate electrical craftsmanship across London&apos;s finest residences.
          </p>
        </motion.div>
      </Container>

      <div className="relative mx-auto h-[550px] max-w-7xl md:h-[700px]">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: "1400px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          <div
            className="grid w-full max-w-6xl grid-cols-3 gap-8 px-8 md:gap-12 lg:gap-16"
            style={{
              transform: "rotateX(12deg) rotateZ(-3deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {columns.map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                animate={{
                  y:
                    columnIndex === 1
                      ? [0, -40, 0]
                      : columnIndex === 0
                      ? [0, 40, 0]
                      : [0, -25, 0],
                }}
                transition={{
                  duration: columnIndex === 1 ? 20 : columnIndex === 0 ? 18 : 22,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="flex flex-col gap-8"
              >
                {column.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    whileHover={{ scale: 1.05, rotateX: 0, rotateZ: 0 }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden rounded-3xl transition-all duration-500 card-luxury"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={600}
                        height={450}
                        sizes="(max-width: 768px) 33vw, 300px"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                        <div className="mb-3 h-1 w-12 rounded-full gradient-gold" />
                        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--brand-gold)' }}>
                          {item.category}
                        </p>
                        <h4 className="mt-2 text-lg font-bold text-white">
                          {item.title}
                        </h4>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-2xl font-black text-white">{item.value}</span>
                          <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: 'var(--brand-gold)' }}>
                            <ArrowUpRight size={18} style={{ color: 'var(--brand-charcoal)' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rotate-45 opacity-0 transition-all duration-500 group-hover:opacity-100 gradient-gold" />
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
