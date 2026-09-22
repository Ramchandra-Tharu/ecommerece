"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FounderMessage from "@/components/FounderMessage";
import TreatmentsSection from "@/components/TreatmentsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FaqSection from "@/components/FaqSection";
import VisitUsFooter from "@/components/VisitUsFooter";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatment?: string) => {
    if (treatment) {
      setSelectedTreatment(treatment);
    }
    setBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF6F3] text-[#2D1F17] relative">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      
      <Hero onOpenBooking={(treatment) => handleOpenBooking(treatment || "Full Aesthetic Consultation")} />

      <FounderMessage />
      
      <TreatmentsSection onSelectTreatment={(treatment) => handleOpenBooking(treatment)} />
      
      <WhyChooseUs />
      
      <StatsSection />
      
      <BeforeAfterSlider onSelectTreatment={(treatment) => handleOpenBooking(treatment)} />
      
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
