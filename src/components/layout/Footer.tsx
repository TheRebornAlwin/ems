"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Electrical Services", href: "#services" },
    { label: "Plumbing Services", href: "#services" },
    { label: "Heating Services", href: "#services" },
    { label: "EV Chargers", href: "#services" },
    { label: "Fire Systems & CCTV", href: "#services" },
    { label: "Facilities Maintenance", href: "#services" },
  ],
  company: [
    { label: "Services", href: "#services" },
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: '#000000' }}>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 text-center md:text-left md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
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
            <p className="text-white/50 text-sm mb-4">
              South Wales' trusted electrical specialists.
            </p>
            <div className="space-y-2 flex flex-col items-center md:items-start">
              <a
                href="tel:02922402640"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone size={14} style={{ color: 'var(--gold-24k)' }} />
                02922 402640
              </a>
              <a
                href="mailto:info@electro-main.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail size={14} style={{ color: 'var(--gold-24k)' }} />
                info@electro-main.com
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin size={14} style={{ color: 'var(--gold-24k)' }} />
                South Wales
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-1.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-1.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-1.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
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
          className="mt-8 pt-6 border-t text-center"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} ElectroMain. All rights reserved. NICEIC Certified.
          </p>
        </div>
      </div>
    </footer>
  );
}
