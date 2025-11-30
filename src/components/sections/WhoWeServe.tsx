"use client";

import { motion } from "framer-motion";
import { Home, Building2, Briefcase, Users, Store, HardHat } from "lucide-react";

const clientTypes = [
  {
    icon: Home,
    label: "Homeowners",
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60iMFaHgGBMDoNa9vqeyzZCf5r4PXGYKn6tTU1"
  },
  {
    icon: Building2,
    label: "Landlords",
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60Kdm3Iw8pEAjeMQOGTb9VvPHucf4Cods1yFk6"
  },
  {
    icon: Briefcase,
    label: "Property Managers",
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo609iPdL0mkOo60mSgwsLubYaVHUeZBvyD9TdWx"
  },
  {
    icon: Users,
    label: "General Contractors",
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60gHrL3xZV8TSw3Eq65OlbXHWjfmkQ9uxopDJr"
  },
  {
    icon: Store,
    label: "Business Owners",
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60vd15rezWSA8zgZpmajMcw2Pl7b5uohUO30H9"
  },
  {
    icon: HardHat,
    label: "Developers",
    image: "https://suenwj7f98.ufs.sh/f/9KZEt2mkOo60uB3X7XOHD0zOJ43Z2VpmkjTA5CBWlfQGweb6"
  },
];

export function WhoWeServe() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--canvas-cream)' }}>
      <div className="mx-auto max-w-6xl">
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
            Who We <span className="text-molten-gold">Serve</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Because you deserve exceptional service, no matter the project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {clientTypes.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              {/* Desktop view - card with white background */}
              <div className="hidden md:flex flex-col items-center gap-3 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="w-full aspect-video rounded-xl overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${client.image}')` }}
                  />
                </div>

                {/* Icon and Label */}
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg shadow-sm"
                    style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                  >
                    <client.icon size={16} style={{ color: 'var(--luxe-noir)' }} />
                  </div>
                  <p
                    className="text-sm md:text-base font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {client.label}
                  </p>
                </div>
              </div>

              {/* Mobile view - image with attached label, single column */}
              <div className="md:hidden relative max-w-md mx-auto">
                {/* Image */}
                <div className="w-full aspect-video rounded-xl overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${client.image}')` }}
                  />
                </div>

                {/* Attached label */}
                <div
                  className="relative -mt-3 mx-3 px-4 py-2 rounded-lg shadow-md flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <client.icon size={16} style={{ color: 'var(--luxe-noir)' }} />
                  <p className="text-base font-semibold" style={{ color: 'var(--luxe-noir)' }}>
                    {client.label}
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
