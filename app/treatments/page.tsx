"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import VisitUsFooter from "@/components/VisitUsFooter";
import BookingModal from "@/components/BookingModal";
import TreatmentsSection from "@/components/TreatmentsSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FaqSection from "@/components/FaqSection";
import { motion } from "framer-motion";
import { Sparkles, Calendar, CheckCircle } from "lucide-react";

export default function TreatmentsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatmentName?: string) => {
    if (treatmentName) setSelectedTreatment(treatmentName);
    setBookingOpen(true);
  };

  const PRICING_LIST = [
    { name: "Bridal Mehendi (Henna)", category: "Bridal & Henna", price: "Rs 499", duration: "1–2 hours" },
    { name: "Bridal Makeup & Hair Styling", category: "Bridal & Henna", price: "Rs 2,499", duration: "90 mins" },
    { name: "Eyebrow Threading & Shaping", category: "Eyebrow & Lash", price: "Rs 99", duration: "15 mins" },
    { name: "Herbal & Hydrating Facial", category: "Skin & Facial", price: "Rs 499", duration: "45 mins" },
    { name: "Hair Coloring & Highlights", category: "Hair Care", price: "Rs 1,299", duration: "90 mins" },
    { name: "Keratin Hair Smoothing", category: "Hair Care", price: "Rs 1,999", duration: "90 mins" },
    { name: "Nail Art & Manicure", category: "Nail Care", price: "Rs 399", duration: "45 mins" },
    { name: "Deep Nourishing Hair Spa", category: "Hair Care", price: "Rs 499", duration: "45 mins" },
  ];

  return (
    <main className="min-h-screen bg-[#FAF6F3] text-[#2D1F17]">
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Page Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-24 bg-[#FAF6F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-[#EBD5C8]/70 border border-[#E5D5CD] px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#784026]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#522714]">
              Treatments & Pricing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#2D1F17] font-normal leading-tight max-w-4xl mx-auto"
          >
            Transparent aesthetic care tailored to you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#8C6B5B] max-w-2xl mx-auto leading-relaxed"
          >
            Explore our clinical treatment offerings with clear, upfront pricing. Every procedure includes a detailed medical consultation.
          </motion.p>
        </div>
      </section>

      {/* Treatments Section */}
      <TreatmentsSection onSelectTreatment={(t) => handleOpenBooking(t)} />

      {/* Full Transparent Price List Table */}
      <section className="py-20 bg-white border-y border-[#E5D5CD]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D1F17] font-normal">
              Treatment Price Guide
            </h2>
            <p className="text-sm text-[#8C6B5B] mt-2">
              All prices include full clinical consultation and post-treatment checkup.
            </p>
          </div>

          <div className="bg-[#FAF6F3] rounded-3xl border border-[#E5D5CD] overflow-hidden divide-y divide-[#E5D5CD]">
            {PRICING_LIST.map((item) => (
              <div
                key={item.name}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/60 transition-colors"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs uppercase font-semibold bg-[#EBD5C8]/60 text-[#522714] px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-[#8C6B5B]">{item.duration}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#2D1F17] mt-1.5 font-normal">{item.name}</h3>
                </div>

                <div className="flex items-center space-x-4 self-end sm:self-auto">
                  <span className="font-serif text-2xl text-[#522714] font-normal">{item.price}</span>
                  <button
                    onClick={() => handleOpenBooking(item.name)}
                    className="px-5 py-2 bg-[#522714] hover:bg-[#784026] text-white text-xs font-medium rounded-full transition-colors flex items-center space-x-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterSlider onSelectTreatment={(t) => handleOpenBooking(t)} />
      <FaqSection />

      <VisitUsFooter onOpenBooking={() => handleOpenBooking()} />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialTreatment={selectedTreatment}
      />
    </main>
  );
}
