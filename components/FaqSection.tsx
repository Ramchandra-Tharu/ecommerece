"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "Are consultations required before treatment?",
    answer: "Yes. We require an initial consultation prior to any injectable or advanced laser treatment. This allows our medical practitioners to evaluate your facial structure, review medical history, and craft a bespoke treatment plan.",
  },
  {
    question: "Are your aesthetic procedures safe?",
    answer: "Safety is our highest priority. All treatments are administered by licensed healthcare professionals utilizing TGA/FDA-approved products and strictly sterile, evidence-based medical techniques.",
  },
  {
    question: "How long do treatment results typically last?",
    answer: "Duration varies by procedure type. Anti-wrinkle treatments generally last 3 to 4 months. Dermal fillers typically maintain results for 9 to 18 months. Skin rejuvenation therapies provide progressive, cumulative benefits.",
  },
  {
    question: "Is there any downtime following a treatment?",
    answer: "Most of our non-surgical procedures involve minimal to no downtime. You can usually return to daily activities immediately. Slight temporary redness or mild swelling typically resolves within 24 to 48 hours.",
  },
  {
    question: "Can multiple treatments be combined in one session?",
    answer: "Yes! Many clients choose to combine complementary treatments—such as anti-wrinkle care with skin resurfacing—to achieve optimal, harmonious full-face rejuvenation in a single visit.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-[#FAF6F3]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#784026] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1F17] font-normal">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-[#8C6B5B]">
            Everything you need to know about preparing for your visit and treatment.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#522714] shadow-sm"
                    : "bg-white/60 border-[#E5D5CD] hover:border-[#8C6B5B]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 focus:outline-none"
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#2D1F17] font-normal">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#522714] text-white rotate-180" : "bg-[#EBD5C8] text-[#522714]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-[#8C6B5B] leading-relaxed border-t border-[#E5D5CD]/40 mt-1">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
