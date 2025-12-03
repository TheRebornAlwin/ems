"use client";

import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

// Portfolio gallery images - Real client project photos
const portfolioImages = [
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Ny12ben9wqPSgCIkYzDKyO3ob2TiJuWdeZHG",
    title: "Full Rewire - Cardiff Property",
    category: "Residential Rewire",
    description: "Complete electrical rewire of 3-bedroom terraced home"
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
    title: "Commercial Rewire",
    category: "Commercial",
    description: "Office space electrical installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60TcbM8QjcPN9SbhB7l5xKRsGCdfQkI4iEoXzU",
    title: "Property Management Contract",
    category: "Commercial",
    description: "Ongoing electrical maintenance for rental properties"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Yw3OTLbFJWghNpkz60GSmELv43BZaxPTbOY9",
    title: "Contractor Partnership",
    category: "Commercial",
    description: "Electrical work for building contractor projects"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60hOvBtrLAy6MtmUzvi7PulTVk0ces52KGr38W",
    title: "Business Premises",
    category: "Commercial",
    description: "Complete electrical installation for retail unit"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60ACo2BUu6vBOD2kIYPFmf8ijxtg3wUrzNuscd",
    title: "Development Project",
    category: "New Build",
    description: "Multi-property development electrical package"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo609iTzfXmkOo60mSgwsLubYaVHUeZBvyD9TdWx",
    title: "Electrical Services",
    category: "Residential",
    description: "Complete rewire with modern lighting installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60CrXzVHcJLPhNHXvVfli0bup5A9KFU1RQTnSB",
    title: "Heating System Integration",
    category: "Heating",
    description: "Electrical work for heating system installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60IV8nwCrUme9n3IMloYrzjcukxpAQTqKS6BFE",
    title: "Fire Alarms & CCTV",
    category: "Security",
    description: "Complete fire alarm and CCTV system installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60gR0JY6ZV8TSw3Eq65OlbXHWjfmkQ9uxopDJr",
    title: "Facilities Maintenance Contract",
    category: "Maintenance",
    description: "Ongoing electrical maintenance for commercial building"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60xk9K7MpbwZdqn2FJsDOBrP7V69upi0Sv18Km",
    title: "Renovation Project",
    category: "Renovation",
    description: "Full electrical rewire as part of home renovation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60wHmY5j1kL4NEROP5ZXCK30ltHfqmDgjdcnyB",
    title: "Extension Electrical Work",
    category: "Extension",
    description: "New electrical installation for home extension"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60L5YDEnqi0LIztSgi7JQ9OW4xouMKaepnsh6G",
    title: "Modern Kitchen Installation",
    category: "Kitchen",
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
              className="text-4xl font-bold md:text-5xl mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Our <span className="text-molten-gold">Portfolio</span>
            </h1>

            <p className="text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>
              Explore our completed rewire projects across South Wales. From residential homes to commercial properties, see the quality and precision of our work.
            </p>

            {/* Note about real photos */}
            <div className="mb-12 p-6 rounded-2xl" style={{ background: 'var(--canvas-cream)' }}>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--gold-24k)' }}>Note:</strong> Real client project photos coming soon. These placeholders will be replaced with before/after transformations, detailed case studies, and testimonials from actual rewire clients.
              </p>
            </div>

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
                      loading={i < 4 ? "eager" : "lazy"}
                      fetchPriority={i < 4 ? "high" : "auto"}
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
