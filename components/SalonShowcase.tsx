"use client";

import { motion } from "framer-motion";
import { Sparkles, Scissors, Sparkle, ShieldCheck, HeartHandshake, Crown, Calendar, ArrowRight } from "lucide-react";
import SalonImageCarousel from "@/components/SalonImageCarousel";

interface SalonShowcaseProps {
  onOpenBooking: () => void;
}

const HIGHLIGHTS = [
  {
    icon: Scissors,
    title: "Full Salon Hair Care & Styling",
    desc: "Precision haircuts, custom hair coloring, balayage, keratin treatments, hair spa, and blowout styling.",
  },
  {
    icon: Sparkle,
    title: "Complete Beauty Parlour Care",
    desc: "Rejuvenating facials, herbal skin treatments, eyebrow microblading, threading, waxing, and nail art extensions.",
  },
  {
    icon: Crown,
    title: "Bridal & Occasion Specialists",
    desc: "Intricate bridal mehendi (henna), HD bridal makeup, pre-wedding skin pampering, and event glam.",
  },
  {
    icon: ShieldCheck,
    title: "Warm Luxury Sanctuary",
    desc: "Immaculate, cozy studio interior with sanitized equipment and dedicated personalized attention.",
  },
];

export default function SalonShowcase({ onOpenBooking }: SalonShowcaseProps) {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-[#E5D5CD]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-[#EBD5C8]/70 border border-[#E5D5CD] px-4 py-1.5 rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#784026]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#522714]">
                Inside Yashu — Salon & Beauty Parlour
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D1F17] font-normal leading-tight"
            >
              Step into luxury. <br />
              <span className="italic text-[#784026]">Both Salon & Beauty Parlour.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-[#8C6B5B] leading-relaxed"
            >
              Yashu combines the best of both worlds: a full-service modern hair salon and an elegant beauty parlour under one roof. From trendsetting hair transformations to soothing skin facials and bridal rituals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              {HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF6F3] border border-[#E5D5CD]/70 hover:border-[#8C6B5B] transition-colors space-y-2">
                    <div className="p-2.5 rounded-xl bg-[#EBD5C8] text-[#522714] w-fit">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-[#2D1F17] font-normal">{item.title}</h4>
                      <p className="text-xs text-[#8C6B5B] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center space-x-2 bg-[#522714] hover:bg-[#784026] text-white px-7 py-3.5 rounded-full font-medium text-sm sm:text-base transition-all shadow-md group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Salon & Parlour Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Featured Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <SalonImageCarousel
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
            />

            {/* Decorative background accent card */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-dashed border-[#E5D5CD] rounded-3xl -z-10 hidden sm:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
