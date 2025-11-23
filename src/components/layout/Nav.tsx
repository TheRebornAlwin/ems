"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Phone, X, Menu } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Service Areas" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
];

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}>
              <Zap size={20} className="text-white sm:hidden" fill="white" />
              <Zap size={24} className="text-white hidden sm:block" fill="white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">ElectroMain</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="#estimate"
            className="hidden rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[var(--luxe-noir)] lg:block"
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}>
                    <Zap size={20} className="text-white" fill="white" />
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
              <div className="flex flex-col gap-4 mt-12">
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
                      className="block text-2xl font-semibold text-white py-2"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-auto mb-8 space-y-4">
                <Link
                  href="#estimate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full rounded-full px-6 py-4 text-base font-semibold text-white transition-all"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  Get Free Estimate
                </Link>

                <a
                  href="tel:02922402640"
                  className="flex items-center justify-center gap-3 w-full rounded-full border-2 border-white/30 px-6 py-4 text-base font-semibold text-white"
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
