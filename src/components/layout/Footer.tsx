"use client";

import Link from "next/link";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Electrical Services", href: "#services" },
    { label: "Plumbing Services", href: "#services" },
    { label: "Heating Services", href: "#services" },
    { label: "EV Chargers", href: "#services" },
    { label: "Fire Alarms & CCTV", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Service Areas", href: "#areas" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: 'var(--luxe-charcoal)' }}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
              >
                <Zap size={24} className="text-white" fill="white" />
              </div>
              <span className="text-xl font-bold text-white">ElectroMain</span>
            </Link>
            <p className="text-white/60 mb-6">
              South Wales' most trusted electrical specialists. Quality work done right, every time.
            </p>
            <div className="space-y-3">
              <a
                href="tel:02922402640"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone size={18} style={{ color: 'var(--gold-24k)' }} />
                02922 402640
              </a>
              <a
                href="mailto:info@electromain.co.uk"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={18} style={{ color: 'var(--gold-24k)' }} />
                info@electromain.co.uk
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin size={18} style={{ color: 'var(--gold-24k)' }} />
                South Wales
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 border-t text-center"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} ElectroMain. All rights reserved. NICEIC Certified.
          </p>
        </div>
      </div>
    </footer>
  );
}
