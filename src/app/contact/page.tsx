"use client";

import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-32">
      <Container>
        <SectionHeader
          eyebrow="Contact Us"
          title="Let's discuss your project"
          paragraph="Multiple ways to reach us. Choose what works best for you."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="panel p-8"
          >
            <h3 className="mb-6 text-xl font-bold" style={{ color: 'var(--brand-ink)' }}>
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Smith" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+44 20 1234 5678" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="bg-brand-gradient group w-full gap-2 font-semibold text-white hover:opacity-90"
              >
                Send Message
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="panel p-6">
              <h4 className="mb-4 text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                Direct Contact
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+442012345678"
                  className="flex items-center gap-3 transition-colors hover:opacity-70"
                  style={{ color: 'var(--brand-text)' }}
                >
                  <Phone size={20} style={{ color: 'var(--brand-amber)' }} />
                  +44 20 1234 5678
                </a>
                <a
                  href="mailto:hello@electromain.co.uk"
                  className="flex items-center gap-3 transition-colors hover:opacity-70"
                  style={{ color: 'var(--brand-text)' }}
                >
                  <Mail size={20} style={{ color: 'var(--brand-amber)' }} />
                  hello@electromain.co.uk
                </a>
                <a
                  href="https://wa.me/442012345678"
                  className="flex items-center gap-3 transition-colors hover:opacity-70"
                  style={{ color: 'var(--brand-text)' }}
                >
                  <MessageCircle size={20} style={{ color: 'var(--brand-amber)' }} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="panel p-6">
              <h4 className="mb-4 text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                Office Hours
              </h4>
              <div className="space-y-2" style={{ color: 'var(--brand-text)' }}>
                <div className="flex items-center gap-3">
                  <Clock size={20} style={{ color: 'var(--brand-amber)' }} />
                  <div>
                    <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                    <p>Saturday: 9:00 AM – 2:00 PM</p>
                    <p>Sunday: Emergency calls only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel p-6">
              <h4 className="mb-4 text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                Service Areas
              </h4>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0" style={{ color: 'var(--brand-amber)' }} />
                <p className="leading-relaxed" style={{ color: 'var(--brand-text)' }}>
                  We serve all of Greater London and Surrey, with particular
                  expertise in Kensington, Chelsea, Mayfair, Notting Hill,
                  Richmond, Hampstead, Wimbledon, and Barnes.
                </p>
              </div>
            </div>

            <div className="panel p-6" style={{ backgroundColor: 'var(--brand-bg)' }}>
              <h4 className="mb-2 text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>
                24/7 Emergency Service
              </h4>
              <p className="mb-4 text-sm" style={{ color: 'var(--brand-mute)' }}>
                Electrical emergency? We offer priority response for existing
                clients.
              </p>
              <Button
                variant="outline"
                className="w-full gap-2 font-semibold"
                style={{ borderColor: 'var(--brand-line)' }}
                asChild
              >
                <a href="tel:+442012345678">
                  <Phone size={16} />
                  Emergency Line
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="py-20" />
    </div>
  );
}
