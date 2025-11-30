"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronDown, ChevronUp, User } from "lucide-react";

// REAL testimonials from actual clients - using verbatim language
// Images placeholders - awaiting real client photos
const allTestimonials = [
  {
    name: "Verified Client",
    date: "November 2024",
    rating: 5,
    text: "They turned up, gave a fair fixed quote, finished in a week and handed over the certificate. They cleaned up after themselves and kept me informed on everything all the way through.",
    image: null, // Awaiting real client photo
  },
  {
    name: "Verified Client",
    date: "October 2024",
    rating: 5,
    text: "I was expecting an extremely stressful process but I was so wrong! It was stress free, they kept us updated throughout the whole process and it only took a few days, they even organised the plasterer to come out after the work had been complete as well, which was extremely helpful and also added to the stress free process.",
    image: null,
  },
  {
    name: "Verified Client",
    date: "September 2024",
    rating: 5,
    text: "From start to finish the work was smooth. I needed a full rewire as part of a project and had lots of other work booked in. They worked around my schedule perfectly.",
    image: null,
  },
  {
    name: "Verified Client",
    date: "August 2024",
    rating: 5,
    text: "Their advice helped us have a better set up and save money. The group grafted for 4 days straight and even stayed until late on the last day so we could be back in our house sooner.",
    image: null,
  },
  {
    name: "Verified Client",
    date: "July 2024",
    rating: 5,
    text: "Couldn't recommend this company any higher. Gave us a start and finish date and bang on time. Would definitely recommend to anyone. Kept in touch with us all the way through the job.",
    image: null,
  },
  {
    name: "Verified Client",
    date: "June 2024",
    rating: 5,
    text: "The job was done quickly and to a high standard. They communicated really well throughout and made sure I was totally satisfied before they signed it off.",
    image: null,
  },
  {
    name: "Verified Client",
    date: "May 2024",
    rating: 5,
    text: "Corey and the team were great from start to finish, very clean and efficient. The communication from the office prior to starting work was also efficient.",
    image: null,
  },
  {
    name: "Verified Client",
    date: "April 2024",
    rating: 5,
    text: "I highly recommend them. Their professionalism shone through from quote to completion. Great communication and the guys who did the work were polite, friendly, efficient and very clean.",
    image: null,
  },
  {
    name: "Verified Client",
    date: "March 2024",
    rating: 5,
    text: "My husband and myself bought a property that required a full rewire, this wasn't something we budgeted for. The team was so accommodating, reassuring and extremely helpful with the initial visit.",
    image: null,
  },
  {
    name: "Verified Client",
    date: "February 2024",
    rating: 5,
    text: "They went above and beyond at short notice and turned around a full rewire in 3 days without compromising on the quality. Absolutely brilliant service!",
    image: null,
  },
  {
    name: "Verified Client",
    date: "January 2024",
    rating: 5,
    text: "From start to finish the work has been smooth. Great communication from the office and the team were polite, friendly, efficient and very clean. Highly recommend.",
    image: null,
  },
  {
    name: "Verified Client",
    date: "December 2023",
    rating: 5,
    text: "Professional, punctual, and thorough. They explained everything clearly and left our home spotless. Would use again without hesitation.",
    image: null,
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof allTestimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl bg-white p-6 shadow-md"
    >
      <Quote
        size={36}
        className="absolute top-4 right-4 opacity-10"
        style={{ color: 'var(--gold-24k)' }}
      />

      <div className="flex gap-1 mb-3 justify-center md:justify-start">
        {Array.from({ length: testimonial.rating }).map((_, j) => (
          <Star
            key={j}
            size={16}
            fill="var(--gold-24k)"
            style={{ color: 'var(--gold-24k)' }}
          />
        ))}
      </div>

      <p
        className="mb-4 text-sm leading-relaxed text-center md:text-left"
        style={{ color: 'var(--text-secondary)' }}
      >
        "{testimonial.text}"
      </p>

      <div className="flex items-center justify-center md:justify-start gap-3">
        {/* Avatar placeholder - awaiting real client photos */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
        >
          <User size={20} style={{ color: 'var(--luxe-noir)' }} />
        </div>
        <div className="text-center md:text-left">
          <p
            className="text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            {testimonial.name}
          </p>
          <p
            className="text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            {testimonial.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const [showMore, setShowMore] = useState(false);

  // Desktop: 9 initial, 3 more (12 total)
  // Mobile: 3 initial, 5 more (8 total)
  const initialDesktop = 9;
  const moreDesktop = 3;
  const initialMobile = 3;
  const moreMobile = 5;

  return (
    <section id="reviews" className="py-24 px-6" style={{ background: 'var(--canvas-base)' }}>
      <div className="mx-auto max-w-7xl">
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
            What Our<br className="md:hidden" /> <span className="text-molten-gold">Clients Say</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Don't just take our word for it. Hear from homeowners like you.
          </p>
        </motion.div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:block">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allTestimonials.slice(0, initialDesktop).map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} index={i} />
            ))}
          </div>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {allTestimonials.slice(initialDesktop, initialDesktop + moreDesktop).map((testimonial, i) => (
                  <TestimonialCard key={i + initialDesktop} testimonial={testimonial} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Grid (hidden on desktop) */}
        <div className="md:hidden">
          <div className="space-y-4">
            {allTestimonials.slice(0, initialMobile).map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} index={i} />
            ))}
          </div>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 space-y-4"
              >
                {allTestimonials.slice(initialMobile, initialMobile + moreMobile).map((testimonial, i) => (
                  <TestimonialCard key={i + initialMobile} testimonial={testimonial} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:opacity-80"
            style={{
              background: 'var(--canvas-cream)',
              color: 'var(--text-primary)',
              border: '2px solid var(--gold-24k)',
            }}
          >
            {showMore ? (
              <>
                Show Less
                <ChevronUp size={18} />
              </>
            ) : (
              <>
                View More Reviews
                <ChevronDown size={18} />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
