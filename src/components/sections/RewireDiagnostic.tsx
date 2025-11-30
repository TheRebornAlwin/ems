"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

const warningSignsData = [
  {
    sign: "Your wiring is older than 25-30 years",
    severity: "high"
  },
  {
    sign: "Old fuse box with wire fuses (not modern circuit breakers)",
    severity: "high"
  },
  {
    sign: "Frequently tripping circuit breakers or blown fuses",
    severity: "high"
  },
  {
    sign: "Flickering lights or dimming when appliances are running",
    severity: "medium"
  },
  {
    sign: "Scorch marks or discoloration around sockets",
    severity: "high"
  },
  {
    sign: "Burning smell from outlets or switches",
    severity: "high"
  },
  {
    sign: "Sockets or switches feel warm to touch",
    severity: "high"
  },
  {
    sign: "Planning a major renovation or extension",
    severity: "medium"
  },
  {
    sign: "You don't have RCD protection on your consumer unit",
    severity: "high"
  },
  {
    sign: "Visible old rubber or fabric-covered cables",
    severity: "high"
  },
  {
    sign: "Not enough sockets (using lots of extension leads)",
    severity: "medium"
  },
  {
    sign: "Planning to sell your property soon",
    severity: "medium"
  }
];

export function RewireDiagnostic() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--canvas-base)' }}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl font-bold md:text-5xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Do I Need a <span className="text-molten-gold">Rewire?</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            If you notice any of these warning signs, your home likely needs a rewire
          </p>
        </motion.div>

        {/* Warning Signs Grid */}
        <div className="grid gap-4 md:grid-cols-2 mb-12">
          {warningSignsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{
                background: item.severity === "high"
                  ? 'rgba(230, 184, 0, 0.05)'
                  : 'var(--canvas-cream)'
              }}
            >
              {item.severity === "high" ? (
                <AlertTriangle size={20} style={{ color: 'var(--gold-24k)' }} className="shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle size={20} style={{ color: 'var(--text-muted)' }} className="shrink-0 mt-0.5" />
              )}
              <p
                className="text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.sign}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Not Sure? Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-3xl text-center"
          style={{ background: 'linear-gradient(135deg, var(--canvas-cream), rgba(230, 184, 0, 0.1))' }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Not Sure? Get a <span className="text-molten-gold">Free Safety Check</span>
          </h3>
          <p className="text-base mb-6 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Our NICEIC-certified electricians can inspect your home and give you a clear, honest answer.
            No pressure, no upsell. If you don't need a rewire, we'll tell you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#estimate"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
                color: 'var(--luxe-noir)'
              }}
            >
              Request Free Safety Check
            </Link>

            <a
              href="tel:02922402640"
              className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-base font-semibold transition-all hover:opacity-80"
              style={{
                borderColor: 'var(--gold-24k)',
                color: 'var(--text-primary)'
              }}
            >
              Call: 02922 402640
            </a>
          </div>
        </motion.div>

        {/* Safety Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 p-4 rounded-xl flex items-start gap-3"
          style={{ background: 'rgba(230, 184, 0, 0.1)' }}
        >
          <AlertTriangle size={20} style={{ color: 'var(--gold-24k)' }} className="shrink-0 mt-0.5" />
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Important:</strong> If you notice any burning smells,
            scorch marks, or persistent electrical issues, contact us immediately for emergency assistance.
            Don't wait for a scheduled inspection.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
