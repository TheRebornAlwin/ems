"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  paragraph?: string;
  className?: string;
  center?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  paragraph,
  className,
  center = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={cn(
        "mb-16 md:mb-20",
        center && "text-center",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("mb-6", center && "flex justify-center")}>
          <span
            className="inline-block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest"
            style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--brand-copper)' }}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-4xl font-black md:text-5xl lg:text-6xl" style={{ color: 'var(--brand-charcoal)', letterSpacing: '-0.03em' }}>
        {title}
      </h2>
      <div className={cn("mt-6 h-1 w-24 rounded-full gradient-gold", center && "mx-auto")} />
      {paragraph && (
        <p className={cn("mt-8 max-w-2xl text-lg leading-relaxed", center && "mx-auto")} style={{ color: 'var(--brand-slate)' }}>
          {paragraph}
        </p>
      )}
    </motion.div>
  );
}
