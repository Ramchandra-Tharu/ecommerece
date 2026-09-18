"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShieldCheck, HeartHandshake, Scissors, UserCheck, Sparkles, Crown } from "lucide-react";
import SalonImageCarousel from "@/components/SalonImageCarousel";

const YASHU_SALON_FEATURES = [
  {
    number: "01",
    title: "Dedicated Styling & Beauty Stations",
    icon: Scissors,
    summary: "Spacious, warmly-lit styling stations customized for precision hair, makeup, and beauty care.",
    detail: "Our salon features state-of-the-art styling mirrors, ergonomic reclining chairs, and specialized stations for hair coloring, keratin smoothing, and bridal styling in supreme comfort.",
  },
  {
    number: "02",
    title: "Experienced Stylists & Artists",
    icon: UserCheck,
    summary: "Master beauty practitioners and hair artists with years of specialized salon expertise.",
    detail: "Every artist at Yashu® undergoes master-level training in modern balayage, skin care, precision eyebrow shaping, and bridal mehendi to deliver subtle, flawless results.",
  },
  {
    number: "03",
    title: "Curated Premium Product Gallery",
    icon: Sparkles,
    summary: "Exclusive use of high-grade hair care, skin serums, and organic beauty formulas.",
    detail: "We handpick nourishers, hair spa creams, non-damaging hair dyes, and dermatologist-tested skincare products displayed right on our studio shelves for complete transparency.",
  },
  {
    number: "04",
    title: "Bespoke Bridal & Event Packages",
    icon: Crown,
    summary: "Comprehensive beauty rituals tailored for brides and special occasions.",
    detail: "From intricate bridal henna (Mehendi) to HD bridal makeup, nail art extensions, and pre-wedding skin pampering, we craft personalized packages for your big day.",
  },
  {
    number: "05",
    title: "Serene & Hygienic Sanctuary",
    icon: ShieldCheck,
    summary: "A spotless, relaxing ambience engineered for your comfort and rejuvenation.",
    detail: "Experience peace of mind with 100% sanitized tools, cozy wooden aesthetics, relaxing aromatics, and personalized attention throughout your salon session.",
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAF6F3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Heading & Yashu Salon Image */}
        <div className="lg:col-span-5 space-y-8 sticky top-28">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#784026] block mb-3">
              Why Choose Yashu
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1F17] font-normal leading-tight">
              A modern sanctuary for hair styling & beauty care.
            </h2>
            <p className="mt-4 text-base text-[#8C6B5B] leading-relaxed">
              Step inside Yashu — where professional hair salon styling and luxury beauty parlour care come together to celebrate your natural elegance.
            </p>
          </div>

          <SalonImageCarousel aspectRatio="aspect-4/3" />
        </div>

        {/* Right Column - Accordion Feature Items */}
        <div className="lg:col-span-7 space-y-4">
          {YASHU_SALON_FEATURES.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={false}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#522714] shadow-md"
                    : "bg-white/60 border-[#E5D5CD] hover:border-[#8C6B5B]"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-4 sm:space-x-6 pr-4">
                    <span className="font-serif text-2xl sm:text-3xl text-[#784026] font-normal shrink-0">
                      {item.number}
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-full bg-[#EBD5C8]/60 text-[#522714] hidden sm:block shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#2D1F17] font-normal">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                      isOpen ? "bg-[#522714] text-white rotate-180" : "bg-[#EBD5C8] text-[#522714]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-[#E5D5CD]/40 mt-2 space-y-3">
                        <p className="text-base text-[#2D1F17] font-medium pt-4">
                          {item.summary}
                        </p>
                        <p className="text-sm text-[#8C6B5B] leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

