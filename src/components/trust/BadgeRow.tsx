"use client";

import { Container } from "@/components/primitives/Container";
import { motion } from "framer-motion";

const badges = [
  { name: "NICEIC", abbrev: "NICEIC" },
  { name: "Part P Compliant", abbrev: "Part P" },
  { name: "Fully Insured", abbrev: "Insured" },
  { name: "Trading Standards", abbrev: "TS" },
  { name: "5 Year Warranty", abbrev: "5YR" },
  { name: "24/7 Support", abbrev: "24/7" },
];

export function BadgeRow() {
  return (
    <section className="border-y py-10" style={{ borderColor: 'var(--brand-line)', backgroundColor: 'var(--brand-panel)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="group flex items-center gap-2 opacity-60 transition-opacity hover:opacity-100"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border" style={{ borderColor: 'var(--brand-line)', backgroundColor: 'var(--brand-bg)' }}>
                <span className="text-xs font-bold" style={{ color: 'var(--brand-mute)' }}>
                  {badge.abbrev}
                </span>
              </div>
              <span className="hidden text-sm font-medium sm:block" style={{ color: 'var(--brand-mute)' }}>
                {badge.name}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
