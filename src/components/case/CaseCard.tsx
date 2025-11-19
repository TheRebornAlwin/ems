"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface CaseCardProps {
  image: string;
  title: string;
  scope: string;
  outcome: string;
  testimonial: string;
  client: string;
  location: string;
}

export function CaseCard({
  image,
  title,
  scope,
  outcome,
  testimonial,
  client,
  location,
}: CaseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="panel panel-hover flex h-full flex-col overflow-hidden"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold" style={{ color: 'var(--brand-ink)' }}>{title}</h3>
        <p className="mt-1 text-sm" style={{ color: 'var(--brand-mute)' }}>{location}</p>

        <div className="mt-4 space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--brand-amber)' }}>
              Scope
            </p>
            <p className="mt-1 text-sm" style={{ color: 'var(--brand-text)' }}>{scope}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--brand-amber)' }}>
              Outcome
            </p>
            <p className="mt-1 text-sm font-medium" style={{ color: 'var(--brand-text)' }}>{outcome}</p>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <div className="rounded-xl p-4" style={{ backgroundColor: 'var(--brand-bg)' }}>
            <Quote size={16} style={{ color: 'var(--brand-amber)' }} className="mb-2" />
            <p className="text-sm italic leading-relaxed" style={{ color: 'var(--brand-mute)' }}>
              &ldquo;{testimonial}&rdquo;
            </p>
            <p className="mt-2 text-xs font-semibold" style={{ color: 'var(--brand-ink)' }}>
              — {client}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
