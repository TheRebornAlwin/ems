"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/primitives/Container";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Calculator, Sparkles } from "lucide-react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const estimateSchema = z.object({
  propertyType: z.enum(["apartment", "house", "estate"]),
  service: z.enum(["rewire", "circuits", "lighting", "ev", "firecctv"]),
  size: z.enum(["small", "medium", "large"]),
  complexity: z.enum(["basic", "standard", "premium"]),
  urgency: z.enum(["normal", "expedite"]),
  postcode: z.string().min(3, "Please enter a valid postcode"),
});

type EstimateFormData = z.infer<typeof estimateSchema>;

const BASE_PRICES = {
  rewire: { small: 7500, medium: 11500, large: 18500 },
  circuits: { small: 1200, medium: 2400, large: 4200 },
  lighting: { small: 3500, medium: 6500, large: 12000 },
  ev: { small: 950, medium: 1200, large: 1800 },
  firecctv: { small: 2500, medium: 4500, large: 8000 },
};

const MULTIPLIERS = {
  propertyType: { apartment: 1.0, house: 1.1, estate: 1.25 },
  complexity: { basic: 1.0, standard: 1.15, premium: 1.35 },
  urgency: { normal: 1.0, expedite: 1.15 },
};

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 800;
    const start = displayValue;
    const end = value;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(start + (end - start) * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span className="tabular-nums">
      £{displayValue.toLocaleString("en-GB")}
    </span>
  );
}

export function InstantEstimate() {
  const [estimate, setEstimate] = useState<{ low: number; high: number } | null>(
    null
  );
  const [showGlow, setShowGlow] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EstimateFormData>({
    resolver: zodResolver(estimateSchema),
    mode: "onChange",
  });

  const onSubmit = (data: EstimateFormData) => {
    const basePrice = BASE_PRICES[data.service][data.size];
    const propertyMultiplier = MULTIPLIERS.propertyType[data.propertyType];
    const complexityMultiplier = MULTIPLIERS.complexity[data.complexity];
    const urgencyMultiplier = MULTIPLIERS.urgency[data.urgency];

    const calculated =
      basePrice * propertyMultiplier * complexityMultiplier * urgencyMultiplier;

    const low = Math.round(calculated * 0.92);
    const high = Math.round(calculated * 1.08);

    setEstimate({ low, high });
    setShowGlow(true);
    setTimeout(() => setShowGlow(false), 1000);
  };

  return (
    <section id="estimate" className="relative overflow-hidden py-32">
      {/* Premium Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--brand-pearl) 0%, var(--brand-cream) 100%)' }} />

      {/* Decorative Elements */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: 'var(--brand-gold)' }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
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
            <Calculator size={14} />
            Instant Estimate
          </div>
          <h2 className="text-5xl font-black md:text-6xl lg:text-7xl">
            <span style={{ color: 'var(--brand-charcoal)' }}>Get Your</span>
            <br />
            <span className="gradient-text-gold">Ballpark Price</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full gradient-gold" />
          <p className="mx-auto mt-8 max-w-2xl text-lg" style={{ color: 'var(--brand-slate)' }}>
            No commitment, no pressure. Receive a realistic estimate in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          {/* Glassmorphism Card */}
          <div className="relative overflow-hidden rounded-3xl glass p-10">
            {/* Inner Gradient Border */}
            <div className="absolute inset-0 rounded-3xl opacity-20" style={{
              background: 'linear-gradient(135deg, var(--brand-gold) 0%, transparent 50%, var(--brand-copper) 100%)'
            }} />

            <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-8">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-3">
                  <Label htmlFor="propertyType" className="text-sm font-bold" style={{ color: 'var(--brand-charcoal)' }}>
                    Property Type
                  </Label>
                  <Controller
                    name="propertyType"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="h-12 rounded-xl border-2 transition-all focus:border-[var(--brand-gold)]" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                          <SelectValue placeholder="Select property" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="estate">Estate</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="service" className="text-sm font-bold" style={{ color: 'var(--brand-charcoal)' }}>
                    Service Required
                  </Label>
                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="h-12 rounded-xl border-2 transition-all focus:border-[var(--brand-gold)]" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rewire">Full Rewire</SelectItem>
                          <SelectItem value="circuits">New Circuits</SelectItem>
                          <SelectItem value="lighting">Lighting Plan</SelectItem>
                          <SelectItem value="ev">EV Charger</SelectItem>
                          <SelectItem value="firecctv">Fire & CCTV</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="size" className="text-sm font-bold" style={{ color: 'var(--brand-charcoal)' }}>
                    Property Size
                  </Label>
                  <Controller
                    name="size"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="h-12 rounded-xl border-2 transition-all focus:border-[var(--brand-gold)]" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">
                            Small (up to 100m²)
                          </SelectItem>
                          <SelectItem value="medium">
                            Medium (100-250m²)
                          </SelectItem>
                          <SelectItem value="large">Large (250m²+)</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="complexity" className="text-sm font-bold" style={{ color: 'var(--brand-charcoal)' }}>
                    Complexity
                  </Label>
                  <Controller
                    name="complexity"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="h-12 rounded-xl border-2 transition-all focus:border-[var(--brand-gold)]" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                          <SelectValue placeholder="Select complexity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic</SelectItem>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="urgency" className="text-sm font-bold" style={{ color: 'var(--brand-charcoal)' }}>
                    Timeline
                  </Label>
                  <Controller
                    name="urgency"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="h-12 rounded-xl border-2 transition-all focus:border-[var(--brand-gold)]" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="expedite">
                            Expedite (+15%)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="postcode" className="text-sm font-bold" style={{ color: 'var(--brand-charcoal)' }}>
                    Postcode
                  </Label>
                  <Controller
                    name="postcode"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="e.g. SW3 4AA"
                        className="h-12 rounded-xl border-2 uppercase transition-all focus:border-[var(--brand-gold)]"
                        style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                      />
                    )}
                  />
                  {errors.postcode && (
                    <p className="text-xs font-medium" style={{ color: 'var(--brand-copper)' }}>
                      {errors.postcode.message}
                    </p>
                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={!isValid}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-luxury group w-full !py-5 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center gap-3">
                  <Sparkles size={20} />
                  Calculate Estimate
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </motion.button>
            </form>

            <AnimatePresence>
              {estimate && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  className="relative mt-10"
                >
                  {showGlow && (
                    <motion.div
                      initial={{ opacity: 0.8, scale: 0.8 }}
                      animate={{ opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1.2 }}
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background:
                          "radial-gradient(circle, var(--brand-gold) 0%, transparent 70%)",
                      }}
                    />
                  )}

                  <div className="relative overflow-hidden rounded-3xl p-10 text-center" style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(235, 158, 52, 0.05) 100%)',
                    border: '2px solid rgba(212, 175, 55, 0.3)'
                  }}>
                    {/* Decorative Corner */}
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl" style={{ background: 'var(--brand-gold)' }} />

                    <p className="mb-4 text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--brand-copper)' }}>
                      Your Instant Estimate
                    </p>
                    <p className="text-4xl font-black md:text-5xl lg:text-6xl gradient-text-gold">
                      <AnimatedNumber value={estimate.low} /> –{" "}
                      <AnimatedNumber value={estimate.high} />
                    </p>
                    <p className="mt-4 text-sm font-medium" style={{ color: 'var(--brand-slate)' }}>
                      Ballpark estimate—subject to on-site assessment
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-luxury inline-flex items-center justify-center gap-3 !px-10"
                      >
                        Book On-Site Assessment
                        <ArrowRight size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 px-10 py-4 font-semibold transition-all"
                        style={{ borderColor: 'var(--brand-gold)', color: 'var(--brand-charcoal)' }}
                      >
                        <MessageCircle size={18} />
                        WhatsApp Us
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
