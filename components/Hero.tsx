"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface HeroProps {
  onOpenBooking: (treatment?: string) => void;
}

const MARQUEE_IMAGES = [
  {
    title: "Bridal Mehendi (Henna)",
    image: "/services/Bridal%20Mehendi%20(Henna).png",
  },
  {
    title: "Bridal Makeup",
    image: "/services/Bridal%20makeup.png",
  },
  {
    title: "Eyebrow Shaping & Microblading",
    image: "/services/Eyebrow%20Shaping%20%26%20Microblading.png",
  },
  {
    title: "Facials & Skin Care",
    image: "/services/Facials%20%26%20Skin%20Care.png",
  },
  {
    title: "Hair Coloring & Balayage",
    image: "/services/Hair%20Coloring%20%26%20Balayage.png",
  },
  {
    title: "Hair Smoothing & Keratin Treatments",
    image: "/services/Hair%20Smoothing%20%26%20Keratin%20Treatments.png",
  },
  {
    title: "Nail Art Extensions",
    image: "/services/Nail%20Art%20Extensions.png",
  },
  {
    title: "Hair Spa",
    image: "/services/hair%20spa.png",
  },
];

const SERVICES_TEXT = [
  "Bridal Mehendi (Henna)",
  "Bridal Makeup",
  "Eyebrow Shaping & Microblading",
  "Facials & Skin Care",
  "Hair Coloring & Balayage",
  "Hair Smoothing & Keratin Treatments",
  "Nail Art Extensions",
  "Hair Spa",
];

export default function Hero({ onOpenBooking }: HeroProps) {
  // Duplicate arrays for seamless infinite marquee loops
  const marqueeItems = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];
  const marqueeTextItems = [...SERVICES_TEXT, ...SERVICES_TEXT, ...SERVICES_TEXT];

  return (
    <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden bg-[#FAF6F3]">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EBD5C8]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2D1F17] leading-[1.12] max-w-4xl mx-auto font-normal"
        >
          Timeless beauty. <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#784026]">Natural elegance.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-[#8C6B5B] max-w-xl mx-auto leading-relaxed font-sans"
        >
          Premium salon & beauty parlour services designed to pamper your hair, skin, nails, and bridal occasions with natural radiance.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <button
            onClick={() => onOpenBooking(undefined)}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#522714] hover:bg-[#784026] text-white px-7 py-3.5 rounded-full font-medium text-sm sm:text-base transition-all shadow-md hover:shadow-lg active:scale-95 group cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <Link
            href="/treatments"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/80 hover:bg-white text-[#522714] border border-[#E5D5CD] px-7 py-3.5 rounded-full font-medium text-sm sm:text-base transition-all shadow-xs hover:shadow-sm"
          >
            <span>View Services</span>
          </Link>
        </motion.div>
      </div>

      {/* Services Clean Image Marquee Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mt-12 md:mt-16 relative w-full overflow-hidden pt-4 pb-1"
      >
        {/* Left Gradient Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 md:w-52 bg-gradient-to-r from-[#FAF6F3] via-[#FAF6F3]/80 to-transparent z-20" />

        {/* Right Gradient Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 md:w-52 bg-gradient-to-l from-[#FAF6F3] via-[#FAF6F3]/80 to-transparent z-20" />

        {/* Marquee Track */}
        <div className="animate-marquee-left flex items-center gap-6 md:gap-8 px-4">
          {marqueeItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={`${item.title}-${index}`}
                onClick={() => onOpenBooking(item.title)}
                className={`group relative shrink-0 rounded-3xl overflow-hidden border border-[#E5D5CD] shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white ${
                  isEven
                    ? "w-[240px] sm:w-[300px] md:w-[360px] aspect-square"
                    : "w-[240px] sm:w-[300px] md:w-[360px] aspect-[3/4]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Services Text Marquee (Right Below Image Marquee, Reduced Space) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mt-2 sm:mt-3 relative w-full overflow-hidden py-1"
      >
        {/* Left Gradient Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 md:w-52 bg-gradient-to-r from-[#FAF6F3] via-[#FAF6F3]/80 to-transparent z-20" />

        {/* Right Gradient Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 md:w-52 bg-gradient-to-l from-[#FAF6F3] via-[#FAF6F3]/80 to-transparent z-20" />

        {/* Text Marquee Track */}
        <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 px-4">
          {marqueeTextItems.map((serviceName, index) => (
            <div
              key={`${serviceName}-${index}`}
              onClick={() => onOpenBooking(serviceName)}
              className="shrink-0 px-6 py-2.5 rounded-full border border-[#E5D5CD] bg-transparent text-[#522714] hover:bg-white/60 hover:border-[#522714] font-serif text-base sm:text-lg md:text-xl font-normal transition-all cursor-pointer shadow-xs"
            >
              <span>{serviceName}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

