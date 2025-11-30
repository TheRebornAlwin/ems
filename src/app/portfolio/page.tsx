"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Portfolio gallery images - AWAITING REAL CLIENT PROJECT PHOTOS
// These are placeholders from the existing image URLs
const portfolioImages = [
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60ptY01d6Ni6Av54RNPWqbT1C089xjJVmBeXwk",
    title: "Full Rewire - Cardiff Property",
    category: "Residential Rewire",
    description: "Complete electrical rewire of 3-bedroom terraced home"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60YGz7T8bFJWghNpkz60GSmELv43BZaxPTbOY9",
    title: "Consumer Unit Upgrade",
    category: "Electrical Upgrade",
    description: "Modern consumer unit installation with RCD protection"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60iMFaHgGBMDoNa9vqeyzZCf5r4PXGYKn6tTU1",
    title: "Residential Installation",
    category: "New Installation",
    description: "Complete electrical system for new build property"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Kdm3Iw8pEAjeMQOGTb9VvPHucf4Cods1yFk6",
    title: "Commercial Rewire",
    category: "Commercial",
    description: "Office space electrical installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo609iPdL0mkOo60mSgwsLubYaVHUeZBvyD9TdWx",
    title: "Property Management Contract",
    category: "Commercial",
    description: "Ongoing electrical maintenance for rental properties"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60gHrL3xZV8TSw3Eq65OlbXHWjfmkQ9uxopDJr",
    title: "Contractor Partnership",
    category: "Commercial",
    description: "Electrical work for building contractor projects"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60vd15rezWSA8zgZpmajMcw2Pl7b5uohUO30H9",
    title: "Business Premises",
    category: "Commercial",
    description: "Complete electrical installation for retail unit"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60uB3X7XOHD0zOJ43Z2VpmkjTA5CBWlfQGweb6",
    title: "Development Project",
    category: "New Build",
    description: "Multi-property development electrical package"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60t8SiBDLF5A910T6eXYULNah2yOEodiZrxz7J",
    title: "Electrical Services",
    category: "Residential",
    description: "Complete rewire with modern lighting installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60EJiO8YTzmkqQweVdh9cnL2vfjKiTGDugRSaX",
    title: "Heating System Integration",
    category: "Heating",
    description: "Electrical work for heating system installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60PPqIhQwWZl4eY2dwOTHEaNFMLx7ByuziDjQs",
    title: "Fire Alarms & CCTV",
    category: "Security",
    description: "Complete fire alarm and CCTV system installation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60bVOie1FfGHBJLDvIR7wkdyZxNtrq1MXp4C38",
    title: "Facilities Maintenance Contract",
    category: "Maintenance",
    description: "Ongoing electrical maintenance for commercial building"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60faANKp6O7G2NiKv0Hn8SPa6RsEQeXwfhtd1q",
    title: "Renovation Project",
    category: "Renovation",
    description: "Full electrical rewire as part of home renovation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60TgR4O1mjcPN9SbhB7l5xKRsGCdfQkI4iEoXz",
    title: "Extension Electrical Work",
    category: "Extension",
    description: "New electrical installation for home extension"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Eef4CATzmkqQweVdh9cnL2vfjKiTGDugRSaX",
    title: "Modern Kitchen Installation",
    category: "Kitchen",
    description: "Electrical work for complete kitchen renovation"
  },
  {
    url: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60BgpnbXDyND6V4kTR1Csjx2dmiMWqHIegoJhZ",
    title: "Complete Property Transformation",
    category: "Full Renovation",
    description: "Entire home electrical system modernization"
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6" style={{ background: 'var(--canvas-base)' }}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${project.url}')` }}
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
