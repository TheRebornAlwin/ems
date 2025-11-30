"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function VideoShowcase() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--canvas-base)' }}>
      <div className="mx-auto max-w-6xl">
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
            See Our Work <span className="text-molten-gold">In Action</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Watch our rewire projects from start to finish
          </p>
        </motion.div>

        {/* Main Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-3xl overflow-hidden mb-8 group cursor-pointer"
          style={{ background: 'linear-gradient(135deg, rgba(10, 6, 3, 0.9), rgba(61, 31, 13, 0.9))' }}
        >
          {/* Placeholder content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full mb-4 group-hover:scale-110 transition-transform"
              style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
            >
              <Play size={32} style={{ color: 'var(--luxe-noir)' }} fill="var(--luxe-noir)" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">
              Featured Rewire Project
            </h3>
            <p className="text-white/70 mb-4">
              Full rewire transformation - Before & After
            </p>
            <p className="text-sm" style={{ color: 'var(--gold-24k)' }}>
              Video coming soon - awaiting client project footage
            </p>
          </div>

          {/* Decorative grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-4 grid-rows-3 h-full w-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="border"
                  style={{ borderColor: 'var(--gold-24k)' }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Video Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "On-Site Work Process",
              description: "Watch our clean rewire method in action"
            },
            {
              title: "Customer Testimonial",
              description: "Hear directly from satisfied clients"
            },
            {
              title: "Before & After Tour",
              description: "Complete transformation walkthrough"
            }
          ].map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
              style={{ background: 'linear-gradient(135deg, rgba(10, 6, 3, 0.9), rgba(61, 31, 13, 0.9))' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full mb-3 group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <Play size={16} style={{ color: 'var(--luxe-noir)' }} fill="var(--luxe-noir)" />
                </div>
                <h4 className="text-base font-bold mb-1 text-white">
                  {video.title}
                </h4>
                <p className="text-xs text-white/70 mb-2">
                  {video.description}
                </p>
                <p className="text-xs" style={{ color: 'var(--gold-24k)' }}>
                  Coming soon
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 p-6 rounded-2xl text-center"
          style={{ background: 'var(--canvas-cream)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--gold-24k)' }}>Note:</strong> Real project videos coming soon. These will showcase our clean rewire process, customer testimonials, and complete before/after transformations of actual rewire projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
