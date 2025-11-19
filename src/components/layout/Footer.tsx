import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const serviceAreas = ["Kensington", "Chelsea", "Mayfair", "Notting Hill", "Richmond", "Hampstead", "Wimbledon", "Barnes"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      {/* Top Accent Line */}
      <div className="accent-line" />

      <Container className="relative z-10 py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold">
                <span className="text-2xl font-black" style={{ color: 'var(--brand-charcoal)' }}>E</span>
              </div>
              <span className="text-3xl font-black" style={{ letterSpacing: '-0.03em', color: 'var(--brand-charcoal)' }}>
                Electro<span className="gradient-text-gold">Main</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed" style={{ color: 'var(--brand-slate)' }}>
              London&apos;s premier electrical craftsmen. We deliver invisible precision and uncompromising quality to the capital&apos;s finest homes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["NICEIC Certified", "Part P", "5-Year Warranty"].map((badge) => (
                <span key={badge} className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider" style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--brand-copper)' }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--brand-charcoal)' }}>Navigate</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 text-sm font-medium transition-all" style={{ color: 'var(--brand-slate)' }}>
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 transition-all group-hover:opacity-100" style={{ color: 'var(--brand-gold)' }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--brand-charcoal)' }}>Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+442012345678" className="flex items-center gap-3 text-sm font-medium transition-colors" style={{ color: 'var(--brand-slate)' }}>
                  <Phone size={16} style={{ color: 'var(--brand-gold)' }} />
                  +44 20 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:hello@electromain.co.uk" className="flex items-center gap-3 text-sm font-medium transition-colors" style={{ color: 'var(--brand-slate)' }}>
                  <Mail size={16} style={{ color: 'var(--brand-gold)' }} />
                  hello@electromain.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--brand-gold)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--brand-slate)' }}>Greater London & Surrey</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--brand-charcoal)' }}>Areas</h4>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full border px-3 py-1.5 text-xs font-medium" style={{ borderColor: 'rgba(212, 175, 55, 0.3)', color: 'var(--brand-slate)' }}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t pt-10 md:flex-row" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
          <p className="text-sm" style={{ color: 'var(--brand-slate)' }}>
            &copy; {new Date().getFullYear()} ElectroMain Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="text-sm transition-colors hover:opacity-70" style={{ color: 'var(--brand-slate)' }}>Privacy</Link>
            <Link href="/legal/terms" className="text-sm transition-colors hover:opacity-70" style={{ color: 'var(--brand-slate)' }}>Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
