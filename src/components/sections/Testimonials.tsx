"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Morgan",
    date: "November 2024",
    rating: 5,
    text: "They turned up, gave a fair fixed quote, finished in a week and handed over the certificate. They cleaned up after themselves and kept me informed on everything all the way through.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Sarah Jenkins",
    date: "October 2024",
    rating: 5,
    text: "I was expecting an extremely stressful process but I was so wrong! It was stress-free, they kept us updated throughout and it only took a few days. Extremely helpful and professional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "James Williams",
    date: "September 2024",
    rating: 5,
    text: "From start to finish the work was smooth. Great communication from the office and the team were polite, friendly, efficient and very clean. Highly recommend.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-6" style={{ background: 'var(--canvas-base)' }}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold md:text-5xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            What Our <span className="text-molten-gold">Clients Say</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Don't just take our word for it — hear from homeowners like you.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-3xl bg-white p-8 shadow-lg"
            >
              {/* Quote icon */}
              <Quote
                size={48}
                className="absolute top-6 right-6 opacity-10"
                style={{ color: 'var(--gold-24k)' }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={20}
                    fill="var(--gold-24k)"
                    style={{ color: 'var(--gold-24k)' }}
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className="mb-6 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${testimonial.image}')` }}
                />
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
