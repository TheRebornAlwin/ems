"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn("group", className)}
    >
      <Link
        href={href}
        className="panel panel-hover relative block h-full overflow-hidden p-6 transition-all"
      >
        {/* Gradient border on hover */}
        <div className="bg-brand-gradient absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-[1px] rounded-[14px]" style={{ backgroundColor: 'var(--brand-panel)' }} />

        <div className="relative">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: 'var(--brand-bg)' }}>
            <Icon size={24} style={{ color: 'var(--brand-ember)' }} />
          </div>

          <h3 className="mb-2 text-lg font-bold" style={{ color: 'var(--brand-ink)' }}>{title}</h3>

          <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--brand-mute)' }}>
            {description}
          </p>

          <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--brand-ember)' }}>
            Learn more
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
