"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Phone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Service Areas" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}>
            <Zap size={24} className="text-white" fill="white" />
          </div>
          <span className="text-xl font-bold text-white">ElectroMain</span>
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
          className="hidden rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[var(--luxe-noir)] md:block"
        >
          Free Estimate
        </Link>

        {/* Mobile Menu Button */}
        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm lg:hidden">
          <div className="space-y-1.5">
            <div className="h-0.5 w-5 bg-white"></div>
            <div className="h-0.5 w-5 bg-white"></div>
            <div className="h-0.5 w-5 bg-white"></div>
          </div>
        </button>
      </div>
    </motion.nav>
  );
}
