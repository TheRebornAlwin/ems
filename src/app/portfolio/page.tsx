"use client";

import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

// Portfolio gallery images - Real client project photos
const portfolioImages = [
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60BZnq0vDyND6V4kTR1Csjx2dmiMWqHIegoJhZ",
    title: "Premium Outdoor Electrical Installation",
    category: "Featured Project",
    description: "High-end outdoor electrical system design and installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Ny12ben9wqPSgCIkYzDKyO3ob2TiJuWdeZHG",
    title: "Entire Lighting System, Cardiff Restaurant",
    category: "Commercial Lighting",
    description: "Complete restaurant lighting installation and design"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60L52Mvri0LIztSgi7JQ9OW4xouMKaepnsh6GU",
    title: "Consumer Unit Upgrade",
    category: "Electrical Upgrade",
    description: "Modern consumer unit installation with RCD protection"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo606Lyzr2VjphHW2Ux8KBC7G0tONikAyRTegflu",
    title: "Residential Installation",
    category: "New Installation",
    description: "Complete electrical system for new build property"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60cj9LxGdKfwc6Nb9T5gEotSPRvGW0Ad73yphm",
    title: "Security Camera Installation",
    category: "Security Systems",
    description: "Professional CCTV camera system installation and setup"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60TcbM8QjcPN9SbhB7l5xKRsGCdfQkI4iEoXzU",
    title: "Complete Security Camera System",
    category: "Commercial Security",
    description: "Multi-camera security system for commercial property"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Yw3OTLbFJWghNpkz60GSmELv43BZaxPTbOY9",
    title: "Electrical Contractor Partnership",
    category: "Commercial Project",
    description: "Full electrical installation for construction project"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60hOvBtrLAy6MtmUzvi7PulTVk0ces52KGr38W",
    title: "Residential Home Wiring",
    category: "Residential",
    description: "Complete home electrical wiring and installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60ACo2BUu6vBOD2kIYPFmf8ijxtg3wUrzNuscd",
    title: "Residential Home Heating Installation",
    category: "Heating System",
    description: "Electric heating system installation for modern home"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo609iTzfXmkOo60mSgwsLubYaVHUeZBvyD9TdWx",
    title: "Living Room Lighting Complete Remodel",
    category: "Interior Lighting",
    description: "Comprehensive lighting redesign and installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60CrXzVHcJLPhNHXvVfli0bup5A9KFU1RQTnSB",
    title: "Residential Electrical System",
    category: "Home Rewire",
    description: "Complete residential electrical system upgrade"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60IV8nwCrUme9n3IMloYrzjcukxpAQTqKS6BFE",
    title: "Central Heating System Installation",
    category: "Heating Services",
    description: "Full central heating electrical installation and setup"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60gR0JY6ZV8TSw3Eq65OlbXHWjfmkQ9uxopDJr",
    title: "Underfloor Heating Installation",
    category: "Heating System",
    description: "Electric underfloor heating system installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60xk9K7MpbwZdqn2FJsDOBrP7V69upi0Sv18Km",
    title: "EV Charger Installation",
    category: "Electric Vehicle Charging",
    description: "Home EV charging point installation and setup"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60wHmY5j1kL4NEROP5ZXCK30ltHfqmDgjdcnyB",
    title: "Office Lighting Installation",
    category: "Commercial Lighting",
    description: "Professional office lighting system design and installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60L5YDEnqi0LIztSgi7JQ9OW4xouMKaepnsh6G",
    title: "Modern Kitchen Installation",
    category: "Kitchen Electrical",
    description: "Electrical work for complete kitchen renovation"
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6" style={{ background: 'var(--canvas-base)' }}>
        <div className="mx-auto max-w-7xl">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--gold-24k)' }}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <h1
              className="text-4xl font-bold md:text-5xl mb-4 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Our <span className="text-molten-gold">Portfolio</span>
            </h1>

            <p className="text-lg mb-12 text-center" style={{ color: 'var(--text-secondary)' }}>
              Explore our completed rewire projects across South Wales. From residential homes to commercial properties, see the quality and precision of our work.
            </p>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {portfolioImages.map((project, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={project.url}
                      alt={project.title}
                      loading={i < 12 ? "eager" : "lazy"}
                      fetchPriority={i < 8 ? "high" : "auto"}
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <p className="text-xs font-semibold mb-1" style={{ color: 'var(--gold-24k)' }}>
                      {project.category}
                    </p>
                    <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Hover border */}
                  <div
                    className="absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ borderColor: 'var(--gold-24k)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
