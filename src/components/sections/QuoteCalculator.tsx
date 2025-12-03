"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Calculator, Phone, Mail } from "lucide-react";

interface QuoteCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: "serviceType",
    question: "What type of service do you need?",
    type: "choice",
    options: [
      { label: "Full Rewire", value: "rewire", basePrice: 3500 },
      { label: "Consumer Unit Upgrade", value: "consumer", basePrice: 800 },
      { label: "EV Charger Installation", value: "ev", basePrice: 1200 },
      { label: "Lighting Installation", value: "lighting", basePrice: 400 },
      { label: "Fault Finding & Repair", value: "fault", basePrice: 150 },
      { label: "Testing & Inspection", value: "testing", basePrice: 250 },
      { label: "Other", value: "other", basePrice: 500 },
    ],
  },
  {
    id: "propertyType",
    question: "What type of property is it?",
    type: "choice",
    options: [
      { label: "Flat/Apartment", value: "flat", multiplier: 0.8 },
      { label: "Terraced House", value: "terraced", multiplier: 1.0 },
      { label: "Semi-Detached", value: "semi", multiplier: 1.2 },
      { label: "Detached House", value: "detached", multiplier: 1.5 },
      { label: "Commercial Property", value: "commercial", multiplier: 2.0 },
    ],
  },
  {
    id: "age",
    question: "How old is the property?",
    type: "choice",
    options: [
      { label: "Less than 10 years", value: "new", multiplier: 0.9 },
      { label: "10-30 years", value: "medium", multiplier: 1.0 },
      { label: "30-50 years", value: "older", multiplier: 1.15 },
      { label: "Over 50 years", value: "old", multiplier: 1.3 },
    ],
  },
  {
    id: "urgency",
    question: "When do you need this done?",
    type: "choice",
    options: [
      { label: "Emergency (24-48 hours)", value: "emergency", multiplier: 1.5 },
      { label: "Within a week", value: "urgent", multiplier: 1.2 },
      { label: "Within a month", value: "soon", multiplier: 1.0 },
      { label: "Flexible timing", value: "flexible", multiplier: 0.95 },
    ],
  },
];

export function QuoteCalculator({ isOpen, onClose }: QuoteCalculatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResult, setShowResult] = useState(false);
  const [customService, setCustomService] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const currentQuestion = questions[currentStep];

  const handleAnswer = (value: any) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));

    // Show custom input if "Other" is selected
    if (currentQuestion.id === "serviceType" && value === "other") {
      setShowCustomInput(true);
      return;
    }

    // Auto-advance for choice questions
    if (currentQuestion.type === "choice") {
      setTimeout(() => {
        if (currentStep < questions.length - 1) {
          setCurrentStep((prev) => prev + 1);
        } else {
          setShowResult(true);
        }
      }, 200);
    }
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const calculateEstimate = () => {
    // Get base price from service type
    const serviceOption = questions[0].options?.find(
      (o) => o.value === answers.serviceType
    ) as { basePrice?: number } | undefined;
    let price = serviceOption?.basePrice || 1000;

    // Apply property type multiplier
    const propertyOption = questions[1].options?.find(
      (o) => o.value === answers.propertyType
    ) as { multiplier?: number } | undefined;
    price *= propertyOption?.multiplier || 1;

    // Apply age multiplier
    const ageOption = questions[2].options?.find(
      (o) => o.value === answers.age
    ) as { multiplier?: number } | undefined;
    price *= ageOption?.multiplier || 1;

    // Apply urgency multiplier
    const urgencyOption = questions[3].options?.find(
      (o) => o.value === answers.urgency
    ) as { multiplier?: number } | undefined;
    price *= urgencyOption?.multiplier || 1;

    // Return range
    const low = Math.round(price * 0.85);
    const high = Math.round(price * 1.15);

    return { low, high };
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setCustomService("");
    setShowCustomInput(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-lg max-h-[75vh] md:max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 md:p-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} style={{ color: 'var(--text-muted)' }} />
          </button>

          {!showResult ? (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span style={{ color: 'var(--text-muted)' }}>
                    Question {currentStep + 1} of {questions.length}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentStep + 1) / questions.length) * 100}%`,
                      background: 'linear-gradient(90deg, var(--gold-24k), var(--amber-fire))',
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                {currentQuestion.question}
              </h3>

              {/* Options */}
              {currentQuestion.type === "choice" && (
                <div className="space-y-3 mb-8">
                  {currentQuestion.options?.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                        answers[currentQuestion.id] === option.value
                          ? "border-[var(--gold-24k)] bg-[var(--canvas-cream)]"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Custom service input for "Other" option */}
              {showCustomInput && currentQuestion.id === "serviceType" && (
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Please describe the service you need:
                  </label>
                  <input
                    type="text"
                    value={customService}
                    onChange={(e) => setCustomService(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && customService.trim()) {
                        setShowCustomInput(false);
                        if (currentStep < questions.length - 1) {
                          setCurrentStep((prev) => prev + 1);
                        } else {
                          setShowResult(true);
                        }
                      }
                    }}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gold-24k)] focus:outline-none text-lg"
                    placeholder="e.g., Outdoor lighting, Security system..."
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      if (customService.trim()) {
                        setShowCustomInput(false);
                        if (currentStep < questions.length - 1) {
                          setCurrentStep((prev) => prev + 1);
                        } else {
                          setShowResult(true);
                        }
                      }
                    }}
                    disabled={!customService.trim()}
                    className="mt-3 w-full px-4 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: customService.trim() ? 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' : '#e5e7eb',
                      color: customService.trim() ? 'var(--luxe-noir)' : '#9ca3af'
                    }}
                  >
                    Continue
                  </button>
                </div>
              )}


              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    currentStep === 0
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <ArrowLeft size={18} />
                  Back
                </button>

                {/* Only show Next button for number input questions */}
                {currentQuestion.type === "number" && (
                  <button
                    onClick={nextStep}
                    disabled={!answers[currentQuestion.id]}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
                      answers[currentQuestion.id]
                        ? "text-white hover:opacity-90"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    style={
                      answers[currentQuestion.id]
                        ? { background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }
                        : {}
                    }
                  >
                    {currentStep === questions.length - 1 ? "Get Estimate" : "Next"}
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center">
              <div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
              >
                <Calculator size={32} className="text-white" />
              </div>

              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Your Estimated Quote
              </h3>

              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                Based on your answers, here's your estimated price range:
              </p>

              <div
                className="text-5xl font-bold mb-2"
                style={{ color: 'var(--gold-24k)' }}
              >
                £{calculateEstimate().low.toLocaleString()} - £{calculateEstimate().high.toLocaleString()}
              </div>

              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                *Final price may vary based on specific requirements
              </p>

              {/* Competitor Pricing Comparison */}
              <div className="mb-8 p-6 rounded-2xl" style={{ background: 'var(--canvas-cream)' }}>
                <h4 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  ElectroMain vs Competitors
                </h4>

                <div className="space-y-3 text-left">
                  {/* ElectroMain */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className="h-5 w-5 rounded-full flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                      >
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        ElectroMain
                      </p>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <strong>£{calculateEstimate().low.toLocaleString()} - £{calculateEstimate().high.toLocaleString()}</strong> all-inclusive. No hidden fees, no surprises. Includes materials, labor, certification, and 5-year guarantee.
                      </p>
                    </div>
                  </div>

                  {/* Typical Competitors */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                        <svg className="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Typical Competitors
                      </p>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Quotes close to our price <strong>£{Math.round(calculateEstimate().low * 0.95).toLocaleString()}</strong>, then adds: "site visit fee" (+£150), "materials markup" (+£{Math.round(calculateEstimate().low * 0.2).toLocaleString()}), "unexpected complications" (+£500-£800), "certification fee" (+£200). <strong>Final total: £{Math.round(calculateEstimate().low * 0.95 + 150 + calculateEstimate().low * 0.2 + 650 + 200).toLocaleString()}+</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <a
                  href="tel:02922402640"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <Phone size={18} />
                  Call to Discuss: 02922 402640
                </a>

                <a
                  href="mailto:info@electro-main.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 font-semibold transition-all hover:bg-gray-50"
                  style={{ borderColor: 'var(--gold-24k)', color: 'var(--text-primary)' }}
                >
                  <Mail size={18} />
                  Email Us
                </a>

                <button
                  onClick={reset}
                  className="w-full rounded-full px-6 py-3 font-semibold transition-all hover:bg-gray-100"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
