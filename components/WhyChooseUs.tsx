"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShieldCheck, HeartHandshake, Cpu, UserCheck } from "lucide-react";

const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Experienced professionals",
    icon: UserCheck,
    summary: "Highly trained practitioners committed to safe, evidence-based medical aesthetics.",
    detail: "Our medical team brings years of specialized cosmetic expertise. Every practitioner undergoes rigorous ongoing education to master the safest, most precise injection and laser techniques.",
  },
  {
    number: "02",
    title: "Personalized treatment plans",
    icon: HeartHandshake,
    summary: "Every consultation begins with a full facial analysis tailored to your skin and anatomy.",
    detail: "We never take a one-size-fits-all approach. We analyze your facial symmetry, skin quality, and personal goals to curate a bespoke treatment roadmap for natural harmony.",
  },
  {
    number: "03",
    title: "Advanced technology",
    icon: Cpu,
    summary: "State-of-the-art medical grade equipment for optimal comfort and results.",
    detail: "We invest in industry-leading, FDA-approved technologies and premium medical products to ensure consistent precision, minimal downtime, and maximum client comfort.",
  },
  {
    number: "04",
    title: "Comfort-first approach",
    icon: ShieldCheck,
    summary: "A calm, gentle atmosphere designed to keep you informed and relaxed throughout.",
    detail: "From your initial consultation to aftercare follow-ups, we prioritize transparent communication, pain-minimizing techniques, and dedicated post-treatment support.",
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
        {/* Left Column - Heading & Image */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#784026] block mb-3">
              Why Clients Choose Us
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1F17] font-normal leading-tight">
              A modern approach to aesthetic care.
            </h2>
            <p className="mt-4 text-base text-[#8C6B5B] leading-relaxed">
              We combine medical expertise with an artistic eye to deliver subtle, natural-looking results that elevate your confidence.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[#E5D5CD] aspect-4/3 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
              alt="Yashu Aesthetics Professional Care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#522714]/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E5D5CD]">
              <p className="font-serif text-lg text-[#522714]">"Subtle, fresh and beautiful results. I still look like myself."</p>
              <p className="text-xs text-[#8C6B5B] mt-1 font-sans">— Verified Client</p>
            </div>
          </div>
        </div>

        {/* Right Column - Accordion Items */}
        <div className="lg:col-span-7 space-y-4">
          {WHY_CHOOSE_US.map((item, index) => {
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
                    <span className="font-serif text-2xl sm:text-3xl text-[#784026] font-normal">
                      {item.number}
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-full bg-[#EBD5C8]/50 text-[#522714] hidden sm:block">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#2D1F17] font-normal">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`p-2 rounded-full transition-transform duration-300 ${
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
