"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { ArrowRight, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("fixed left-0 right-0 top-0 z-50 transition-all duration-500", scrolled ? "glass" : "bg-transparent")}>
      <Container>
        <nav className="flex h-24 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold"
            >
              <span className="text-xl font-black" style={{ color: 'var(--brand-charcoal)' }}>E</span>
            </motion.div>
            <span className="text-2xl font-black" style={{ letterSpacing: '-0.03em', color: 'var(--brand-charcoal)' }}>
              Electro<span className="gradient-text-gold">Main</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:bg-[var(--brand-pearl)]"
                style={{ color: 'var(--brand-graphite)' }}
              >
                {link.label}
                <span className="absolute bottom-2 left-5 right-5 h-0.5 origin-left scale-x-0 rounded-full gradient-gold transition-transform group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a href="tel:+442012345678" className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70" style={{ color: 'var(--brand-graphite)' }}>
              <Phone size={16} />
              <span className="hidden lg:inline">+44 20 1234 5678</span>
            </a>
            <Link href="#estimate" className="btn-luxury flex items-center gap-2 !px-6 !py-3 text-sm">
              Get Estimate
              <ArrowRight size={16} />
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} style={{ color: 'var(--brand-charcoal)' }} /> : <Menu size={24} style={{ color: 'var(--brand-charcoal)' }} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t md:hidden"
            style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}
          >
            <Container className="py-8">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-semibold" style={{ color: 'var(--brand-graphite)' }} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <Link href="#estimate" className="btn-luxury flex w-full items-center justify-center gap-2 text-base">
                    Get Instant Estimate
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
