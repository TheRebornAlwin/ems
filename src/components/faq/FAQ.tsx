"use client";

import { Container } from "@/components/primitives/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What certifications do you hold?",
    answer:
      "We are NICEIC approved contractors, Part P compliant, and all our electricians are fully qualified to BS 7671 standards. We hold £5 million public liability insurance and provide certification for all completed work.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, all our work comes with a comprehensive 5-year warranty covering both materials and workmanship. This is backed by our NICEIC registration which provides additional consumer protection.",
  },
  {
    question: "How do you minimise dust and disruption?",
    answer:
      "We use professional-grade dust extraction systems, lay protective sheeting on all surfaces, and employ clean-work protocols. Most clients are surprised to find their homes cleaner than before we started.",
  },
  {
    question: "What are your typical project timelines?",
    answer:
      "Timelines vary by project scope. A full rewire typically takes 5-10 days, lighting installations 2-3 days, and EV charger installations can be completed in a single day. We provide detailed schedules upfront.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "We provide fixed-price quotes after a thorough on-site assessment. No hidden costs, no surprises. The price we quote is the price you pay, unless you request additional work during the project.",
  },
  {
    question: "Do you offer emergency callout services?",
    answer:
      "Yes, we provide 24/7 emergency electrical services for existing clients. Priority response is guaranteed within 2 hours for central London, 4 hours for Greater London.",
  },
  {
    question: "Can you work on listed buildings?",
    answer:
      "Absolutely. We have extensive experience with Grade I and II listed properties. We understand the sensitivities involved and work closely with conservation officers when required.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We require a 25% deposit to secure your booking, with the balance due upon satisfactory completion. For larger projects, we offer staged payments aligned with project milestones.",
  },
  {
    question: "Do you handle building regulations?",
    answer:
      "Yes, we manage all building regulation notifications and provide the necessary certificates upon completion. This is included in our service at no additional cost.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve all of Greater London and Surrey, with particular focus on Kensington, Chelsea, Mayfair, Notting Hill, Richmond, Hampstead, Wimbledon, and Barnes.",
  },
];

export function FAQ() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--brand-cream) 0%, var(--brand-pearl) 100%)' }} />

      {/* Decorative Elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'var(--brand-gold)' }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'var(--brand-copper)' }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest" style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--brand-copper)' }}>
            <HelpCircle size={14} />
            FAQ
          </div>
          <h2 className="text-5xl font-black md:text-6xl lg:text-7xl">
            <span style={{ color: 'var(--brand-charcoal)' }}>Common</span>{" "}
            <span className="gradient-text-gold">Questions</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full gradient-gold" />
          <p className="mx-auto mt-8 max-w-2xl text-lg" style={{ color: 'var(--brand-slate)' }}>
            Clear answers to help you make an informed decision about your electrical project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group overflow-hidden rounded-2xl border-2 transition-all duration-300 data-[state=open]:border-[var(--brand-gold)]"
                  style={{
                    borderColor: 'rgba(212, 175, 55, 0.2)',
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <AccordionTrigger className="px-8 py-6 text-left text-lg font-bold hover:no-underline [&[data-state=open]>div]:rotate-45" style={{ color: 'var(--brand-charcoal)' }}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors group-data-[state=open]:gradient-gold" style={{ background: 'rgba(212, 175, 55, 0.1)' }}>
                        <span className="text-sm font-black" style={{ color: 'var(--brand-gold)' }}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-base leading-relaxed" style={{ color: 'var(--brand-slate)' }}>
                    <div className="ml-14">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}
