"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

interface FinalCTAProps {
  onOpenCalculator: () => void;
}

export function FinalCTA({ onOpenCalculator }: FinalCTAProps) {
  return (
    <section
      className="py-32 md:py-48 px-6 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 6, 3, 0.85), rgba(10, 6, 3, 0.85)), url('https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60BgpnbXDyND6V4kTR1Csjx2dmiMWqHIegoJhZ')`
      }}
    >
      <div className="mx-auto max-w-4xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold md:text-5xl mb-6 text-white">
            Ready to Get{" "}
            <span className="text-molten-gold">Started?</span>
          </h2>

          <p className="text-base sm:text-lg mb-8 sm:mb-10 text-white/80 leading-relaxed">
            Join hundreds of satisfied homeowners across South Wales. Get your free,
            no-obligation quote today and experience the ElectroMain difference.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
            <button
              onClick={onOpenCalculator}
              className="btn-luxury inline-flex w-auto items-center justify-center gap-2 sm:gap-3 rounded-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold"
              style={{
                background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))',
                color: 'var(--luxe-noir)',
              }}
            >
              Get My Free Quote
            </button>

            <a
              href="mailto:info@electro-main.com"
              className="btn-luxury inline-flex w-auto items-center justify-center gap-2 sm:gap-3 rounded-full border-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white"
              style={{ borderColor: 'var(--gold-24k)' }}
            >
              <Mail size={16} className="sm:hidden" />
              <Mail size={18} className="hidden sm:block" />
              Email Us
            </a>

            <a
              href="tel:02922402640"
              className="btn-luxury inline-flex w-auto items-center justify-center gap-2 sm:gap-3 rounded-full border-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white"
              style={{ borderColor: 'var(--gold-24k)' }}
            >
              <Phone size={16} className="sm:hidden" />
              <Phone size={18} className="hidden sm:block" />
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
