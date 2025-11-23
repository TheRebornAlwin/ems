"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react";

const allTestimonials = [
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
  {
    name: "Emma Thompson",
    date: "August 2024",
    rating: 5,
    text: "Their advice helped us have a better set up and save money. The group grafted for 4 days straight and even stayed until late on the last day so we could be back in our house sooner.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Robert Davies",
    date: "July 2024",
    rating: 5,
    text: "Couldn't recommend this company any higher. Gave us a start and finish date and bang on time. Would definitely recommend to anyone. Kept in touch with us all the way through the job.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Lisa Evans",
    date: "June 2024",
    rating: 5,
    text: "The job was done quickly and to a high standard. They communicated really well throughout and made sure I was totally satisfied before they signed it off.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Michael Jones",
    date: "May 2024",
    rating: 5,
    text: "Corey and the team were great from start to finish, very clean and efficient. The communication from the office prior to starting work was also excellent.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Catherine Price",
    date: "April 2024",
    rating: 5,
    text: "I highly recommend them. Their professionalism shone through from quote to completion. Great communication and the guys who did the work were polite, friendly, efficient and very clean.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Thomas Richards",
    date: "March 2024",
    rating: 5,
    text: "My husband and myself bought a property that required a full rewire. The team was so accommodating, reassuring and extremely helpful with the initial visit.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Hannah Lewis",
    date: "February 2024",
    rating: 5,
    text: "They went above and beyond at short notice and turned around a full rewire in 3 days without compromising on the quality. Absolutely brilliant service!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Andrew Morris",
    date: "January 2024",
    rating: 5,
    text: "From start to finish the work has been smooth. I needed a full rewire as part of a project and had lots of other work booked in. They worked around my schedule perfectly.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Sophie Hughes",
    date: "December 2023",
    rating: 5,
    text: "Professional, punctual, and thorough. They explained everything clearly and left our home spotless. Would use again without hesitation.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Mark Phillips",
    date: "November 2023",
    rating: 5,
    text: "Excellent work on our full house rewire. The team was incredibly professional and completed the job ahead of schedule. Very impressed with the quality.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Jennifer Roberts",
    date: "October 2023",
    rating: 5,
    text: "Had our consumer unit upgraded and additional sockets installed. Brilliant service from start to finish. Would highly recommend to anyone.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Paul Edwards",
    date: "September 2023",
    rating: 5,
    text: "Fantastic job on our EV charger installation. The electrician was knowledgeable and took time to explain everything. Great communication throughout.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Rachel Green",
    date: "August 2023",
    rating: 5,
    text: "Used them for emergency work when our electrics went down. They came out same day and resolved the issue quickly. Couldn't ask for better service.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Chris Mitchell",
    date: "July 2023",
    rating: 5,
    text: "Had all the lights in our new extension installed. The finish is immaculate and exactly what we wanted. Very fair price for excellent work.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Amanda Wilson",
    date: "June 2023",
    rating: 5,
    text: "From the initial quote to completion, everything was handled professionally. The team left everything spotless. Would definitely use again.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
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

      <div className="flex gap-1 mb-3">
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
        className="mb-4 text-sm leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('${testimonial.image}')` }}
        />
        <div>
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

  // Desktop: 9 initial, 9 more (18 total)
  // Mobile: 3 initial, 5 more (8 total)
  const initialDesktop = 9;
  const moreDesktop = 9;
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
            What Our <span className="text-molten-gold">Clients Say</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Don't just take our word for it — hear from homeowners like you.
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
