"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Calculator, Phone } from "lucide-react";

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
    id: "bedrooms",
    question: "How many bedrooms?",
    type: "number",
    min: 1,
    max: 10,
    multiplierPerUnit: 0.15,
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

  const currentQuestion = questions[currentStep];

  const handleAnswer = (value: any) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
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
    );
    let price = serviceOption?.basePrice || 1000;

    // Apply property type multiplier
    const propertyOption = questions[1].options?.find(
      (o) => o.value === answers.propertyType
    );
    price *= propertyOption?.multiplier || 1;

    // Apply bedroom multiplier
    const bedrooms = answers.bedrooms || 3;
    price *= 1 + (bedrooms - 1) * 0.15;

    // Apply age multiplier
    const ageOption = questions[3].options?.find(
      (o) => o.value === answers.age
    );
    price *= ageOption?.multiplier || 1;

    // Apply urgency multiplier
    const urgencyOption = questions[4].options?.find(
      (o) => o.value === answers.urgency
    );
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
          className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
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

              {/* Number input */}
              {currentQuestion.type === "number" && (
                <div className="mb-8">
                  <input
                    type="number"
                    min={currentQuestion.min}
                    max={currentQuestion.max}
                    value={answers[currentQuestion.id] || ""}
                    onChange={(e) => handleAnswer(parseInt(e.target.value) || "")}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gold-24k)] focus:outline-none text-lg"
                    placeholder="Enter number..."
                  />
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

              <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
                *Final price may vary based on specific requirements
              </p>

              <div className="space-y-3">
                <a
                  href="tel:02922402640"
                  className="flex items-center justify-center gap-2 w-full rounded-full px-6 py-4 font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, var(--gold-24k), var(--amber-fire))' }}
                >
                  <Phone size={18} />
                  Call for Exact Quote: 02922 402640
                </a>

                <button
                  onClick={reset}
                  className="w-full rounded-full border-2 px-6 py-3 font-semibold transition-all hover:bg-gray-50"
                  style={{ borderColor: 'var(--gold-24k)', color: 'var(--text-primary)' }}
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
