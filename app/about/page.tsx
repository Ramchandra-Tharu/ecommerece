"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import VisitUsFooter from "@/components/VisitUsFooter";
import BookingModal from "@/components/BookingModal";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { motion } from "framer-motion";
import { Sparkles, Award, ShieldCheck, Heart } from "lucide-react";

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const TEAM = [
    {
      name: "Dr. Helena Vance",
      role: "Lead Aesthetic Practitioner",
      credentials: "BSc, MBBS, MMed (Aesthetics)",
      bio: "Over 12 years of specialized medical cosmetic experience focusing on natural facial balance and anti-wrinkle care.",
      image: "https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Marcus Thorne",
      role: "Cosmetic Dermatologist",
      credentials: "MD, FAAD",
      bio: "Expert in advanced laser therapy, skin resurfacing, and precision facial sculpting techniques.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF6F3] text-[#2D1F17]">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-[#FAF6F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-[#EBD5C8]/70 border border-[#E5D5CD] px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#784026]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#522714]">
              About Yashu Aesthetics
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#2D1F17] font-normal leading-tight max-w-4xl mx-auto"
          >
            Natural designed care built on clinical trust.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#8C6B5B] max-w-2xl mx-auto leading-relaxed"
          >
            Founded with a commitment to subtle, refined enhancements. We combine evidence-based care with an artistic touch to celebrate your individual beauty.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-20 bg-white border-y border-[#E5D5CD]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#784026]">
              Our Philosophy
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1F17] font-normal">
              Enhancing confidence without altering who you are.
            </h2>
            <p className="text-base text-[#8C6B5B] leading-relaxed">
              At Yashu®, we believe the best aesthetic work is undetectable. Our approach prioritizes facial harmony, skin health, and client safety over quick trends.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-[#FAF6F3] rounded-2xl border border-[#E5D5CD]">
                <ShieldCheck className="w-6 h-6 text-[#522714] mb-2" />
                <h4 className="font-medium text-[#2D1F17]">Safe & FDA-Approved</h4>
                <p className="text-xs text-[#8C6B5B] mt-1">Medical grade equipment and tested products.</p>
              </div>
              <div className="p-4 bg-[#FAF6F3] rounded-2xl border border-[#E5D5CD]">
                <Heart className="w-6 h-6 text-[#522714] mb-2" />
                <h4 className="font-medium text-[#2D1F17]">Personalized Care</h4>
                <p className="text-xs text-[#8C6B5B] mt-1">Custom consultation and aftercare support.</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-4/3 border border-[#E5D5CD] shadow-lg">
            <img
              src="/salon-of-yashu.jpg"
              alt="Salon of Yashu Sanctuary & Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Practitioners Section */}
      <section className="py-24 bg-[#FAF6F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#784026] block mb-2">
              Medical Specialists
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1F17] font-normal">
              Meet our practitioners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM.map((doctor) => (
              <div
                key={doctor.name}
                className="bg-white rounded-3xl overflow-hidden border border-[#E5D5CD] shadow-sm hover:shadow-md transition-all p-6 sm:p-8 space-y-6"
              >
                <div className="aspect-4/3 rounded-2xl overflow-hidden bg-[#FAF6F3]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-[#2D1F17] font-normal">{doctor.name}</h3>
                  <p className="text-sm font-semibold text-[#784026] mt-1">{doctor.role}</p>
                  <p className="text-xs text-[#8C6B5B] font-mono mt-0.5">{doctor.credentials}</p>
                  <p className="text-sm text-[#8C6B5B] leading-relaxed mt-4">{doctor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <StatsSection />

      <VisitUsFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
