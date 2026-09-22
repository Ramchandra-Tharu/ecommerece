"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion, Sparkles } from "lucide-react";

const FAQS = [
  {
    question: "Is an appointment required prior to visiting the salon?",
    answer: "While we graciously welcome walk-in guests subject to availability, we highly recommend securing an appointment in advance. This ensures our team can reserve your preferred time and provide you with dedicated, uninterrupted service.",
  },
  {
    question: "What comprehensive services are available at your establishment?",
    answer: "We provide an extensive portfolio of luxury beauty and grooming services. Our offerings include precision haircuts, advanced color and styling, rejuvenating skin therapies and facials, meticulous nail care, threading, waxing, as well as bespoke bridal and occasion styling.",
  },
  {
    question: "What is the typical duration for a salon treatment?",
    answer: "Service duration varies depending on the specific treatments selected and your individual needs. Upon your arrival or during your consultation, our specialists will provide a personalized time estimate to ensure you can relax and plan your day accordingly.",
  },
  {
    question: "What caliber of products are used during hair and skin treatments?",
    answer: "We exclusively utilize premium, professional-grade products curated from industry-leading brands. Each product is carefully selected to ensure the highest standards of safety, comfort, and exceptional, long-lasting results for your hair and skin.",
  },
  {
    question: "What is your policy regarding appointment cancellations or rescheduling?",
    answer: "We understand that schedules can change. We kindly request that you contact us in advance if you need to modify or cancel your reservation, allowing us the opportunity to accommodate other guests.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-[#FAF6F3] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#EBD5C8]/40 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#E5D5CD]/40 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Header (Sticky) */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-[#E5D5CD] px-4 py-2 rounded-full shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#784026]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#522714]">
                  Client Support
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2D1F17] font-normal leading-tight"
              >
                Your questions, <br />
                <span className="italic text-[#784026]">answered.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-[#8C6B5B] leading-relaxed max-w-md"
              >
                Find everything you need to know about preparing for your luxurious visit to our salon and beauty parlour.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="hidden lg:flex items-center space-x-4 pt-8"
              >
                <div className="w-12 h-12 rounded-full bg-[#EBD5C8] flex items-center justify-center text-[#522714] shrink-0">
                  <MessageCircleQuestion className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-[#8C6B5B]">Still have questions?</p>
                  <a href="#contact" className="text-base font-semibold text-[#522714] hover:text-[#784026] transition-colors">
                    Contact our concierge
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className={`rounded-3xl border transition-all duration-500 overflow-hidden relative ${
                      isOpen
                        ? "bg-white border-[#522714] shadow-lg shadow-[#522714]/5 scale-[1.02]"
                        : "bg-white/60 border-[#E5D5CD] hover:border-[#8C6B5B] hover:bg-white"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-6 sm:p-8 text-left flex justify-between items-start sm:items-center gap-6 focus:outline-none relative z-10"
                    >
                      <span className={`font-serif text-xl sm:text-2xl transition-colors duration-300 ${
                        isOpen ? "text-[#522714]" : "text-[#2D1F17]"
                      }`}>
                        {faq.question}
                      </span>
                      <div
                        className={`p-2.5 rounded-full shrink-0 transition-all duration-500 flex items-center justify-center ${
                          isOpen 
                            ? "bg-[#522714] text-white rotate-180 shadow-md" 
                            : "bg-[#FAF6F3] text-[#522714] border border-[#E5D5CD]"
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
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden relative z-10"
                        >
                          <div className="px-6 sm:px-8 pb-8 pt-0 text-base sm:text-lg text-[#8C6B5B] leading-relaxed">
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1, duration: 0.4 }}
                            >
                              {faq.answer}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Active State Highlight Gradient */}
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-[#EBD5C8]/20 to-transparent pointer-events-none z-0"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
            
            {/* Mobile Contact Prompt */}
            <div className="mt-10 flex lg:hidden items-center justify-center space-x-4 p-6 bg-white rounded-3xl border border-[#E5D5CD]">
                <div className="w-10 h-10 rounded-full bg-[#EBD5C8] flex items-center justify-center text-[#522714] shrink-0">
                  <MessageCircleQuestion className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[#8C6B5B]">Still have questions?</p>
                  <a href="#contact" className="text-sm font-semibold text-[#522714] hover:text-[#784026] transition-colors">
                    Contact our concierge
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
