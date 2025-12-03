"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Menu } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "#reviews", label: "Reviews" },
];

export function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prefetch portfolio images on hover for instant loading
  const prefetchPortfolioImages = () => {
    if (typeof window === 'undefined') return;

    // Prefetch first 12 images for much faster perceived loading
    const imagesToPreload = [
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60BZnq0vDyND6V4kTR1Csjx2dmiMWqHIegoJhZ",
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Ny12ben9wqPSgCIkYzDKyO3ob2TiJuWdeZHG",
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60L52Mvri0LIztSgi7JQ9OW4xouMKaepnsh6GU",
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo606Lyzr2VjphHW2Ux8KBC7G0tONikAyRTegflu",
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60cj9LxGdKfwc6Nb9T5gEotSPRvGW0Ad73yphm",
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60TcbM8QjcPN9SbhB7l5xKRsGCdfQkI4iEoXzU",
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Yw3OTLbFJWghNpkz60GSmELv43BZaxPTbOY9",
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60hOvBtrLAy6MtmUzvi7PulTVk0ces52KGr38W",
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60ACo2BUu6vBOD2kIYPFmf8ijxtg3wUrzNuscd",
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo609iTzfXmkOo60mSgwsLubYaVHUeZBvyD9TdWx",
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60CrXzVHcJLPhNHXvVfli0bup5A9KFU1RQTnSB",
      "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60IV8nwCrUme9n3IMloYrzjcukxpAQTqKS6BFE",
    ];

    imagesToPreload.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
        style={{
          backgroundColor: isHomePage ? (isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent') : 'rgba(0, 0, 0, 0.95)',
          backdropFilter: isHomePage ? (isScrolled ? 'blur(10px)' : 'none') : 'blur(10px)',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
              <Image
                src="https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60FmTLuoPPqBu1Ck3sFtU0nNXgLi9Y7TbyjhxD"
                alt="ElectroMain Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">ElectroMain</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={link.href === "/portfolio" ? prefetchPortfolioImages : undefined}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="#estimate"
            className="btn-luxury hidden rounded-full px-6 py-3 text-sm font-semibold lg:block"
            style={{
              background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
              color: 'var(--luxe-noir)'
            }}
          >
            Free Estimate
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm lg:hidden"
          >
            <Menu size={20} className="text-white" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col h-full px-6 py-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="relative h-10 w-10">
                    <Image
                      src="https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60FmTLuoPPqBu1Ck3sFtU0nNXgLi9Y7TbyjhxD"
                      alt="ElectroMain Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold text-white">ElectroMain</span>
                </Link>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-3 mt-12">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      onTouchStart={link.href === "/portfolio" ? prefetchPortfolioImages : undefined}
                      className="block text-xl font-semibold text-white py-2"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-auto mb-8 space-y-4 flex flex-col items-center">
                <Link
                  href="#estimate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-auto rounded-full px-8 py-4 text-base font-semibold transition-all"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
                    color: 'var(--luxe-noir)'
                  }}
                >
                  Get Free Estimate
                </Link>

                <a
                  href="tel:02922402640"
                  className="flex items-center justify-center gap-3 w-auto rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white"
                >
                  <Phone size={18} />
                  02922 402640
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
