"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentName?: string) => void;
}

export const TREATMENTS_DATA = [
  {
    id: "bridal-party-makeup",
    title: "Bridal & Party Makeup",
    category: "Bridal & Henna",
    price: "Rs. 2,500 – 8,000",
    downtime: "Time Required",
    duration: "2 – 4 Hours",
    description: "HD bridal & party makeup, airbrush styling, saree/dupatta draping, and long-lasting glow finish.",
    image: "/services/Bridal%20makeup.png",
    popular: true,
  },
  {
    id: "hair-smoothing-keratin",
    title: "Hair Smoothing & Keratin Treatments",
    category: "Hair Care",
    price: "Rs. 1,999 – 5,000",
    downtime: "Time Required",
    duration: "3 – 5 Hours",
    description: "Protein-rich keratin smoothing treatment that eliminates frizz and leaves hair silky smooth.",
    image: "/services/Hair%20Smoothing%20%26%20Keratin%20Treatments.png",
    popular: true,
  },
  {
    id: "luxury-facials",
    title: "Luxury Facials & Skin Care",
    category: "Skin & Facial",
    price: "Rs. 799 – 2,500",
    downtime: "Time Required",
    duration: "45 Mins – 1.5 Hours",
    description: "Deep cleansing facial treatment, skin steam exfoliation, and instant hydrating glow mask.",
    image: "/services/Facials%20%26%20Skin%20Care.png",
    popular: true,
  },
  {
    id: "gel-acrylic-nails",
    title: "Gel & Acrylic Nail Art Extensions",
    category: "Nail Care",
    price: "Rs. 999 – 3,000",
    downtime: "Time Required",
    duration: "1.5 – 3 Hours",
    description: "Classic gel extensions, acrylic nail shaping, custom handcrafted nail art designs, and cuticle care.",
    image: "/services/Nail%20Art%20Extensions.png",
    popular: false,
  },
  {
    id: "hair-coloring-balayage",
    title: "Hair Coloring & Balayage",
    category: "Hair Care",
    price: "Rs. 1,499 – 5,000",
    downtime: "Time Required",
    duration: "2 – 4 Hours",
    description: "Custom dimensional global hair color, balayage highlights, and root touch-up with shine gloss.",
    image: "/services/Hair%20Coloring%20%26%20Balayage.png",
    popular: true,
  },
  {
    id: "eyebrow-shaping-microblading",
    title: "Eyebrow Shaping & Microblading",
    category: "Eyebrow & Lash",
    price: "Rs. 499 – 5,000",
    downtime: "Time Required",
    duration: "30 Mins – 2 Hours",
    description: "Precision eyebrow architecture, threading, and semi-permanent microblading for defined arches.",
    image: "/services/Eyebrow%20Shaping%20%26%20Microblading.png",
    popular: false,
  },
  {
    id: "eyelash-extensions-lifts",
    title: "Eyelash Extensions & Lifts",
    category: "Eyebrow & Lash",
    price: "Rs. 999 – 3,000",
    downtime: "Time Required",
    duration: "1 – 2 Hours",
    description: "Voluminous lash extensions, keratin lash lift, and tinting for captivating natural eyes.",
    image: "/services/Eyebrow%20Shaping%20%26%20Microblading.png",
    popular: false,
  },
  {
    id: "body-scrub-polishing",
    title: "Body Scrub & Polishing",
    category: "Skin & Facial",
    price: "Rs. 1,499 – 3,500",
    downtime: "Time Required",
    duration: "1 – 2 Hours",
    description: "Full body exfoliating herbal scrub, steam bath massage, and deep skin brightening polishing.",
    image: "/services/Facials%20%26%20Skin%20Care.png",
    popular: false,
  },
  {
    id: "bridal-mehendi-art",
    title: "Bridal Mehendi (Henna) Art",
    category: "Bridal & Henna",
    price: "Rs. 1,499 – 5,000",
    downtime: "Time Required",
    duration: "2 – 5 Hours",
    description: "Intricate traditional and modern bridal mehendi patterns crafted with 100% natural organic henna.",
    image: "/services/Bridal%20Mehendi%20(Henna).png",
    popular: true,
  },
  {
    id: "intensive-hair-spa",
    title: "Intensive Hair Spa",
    category: "Hair Care",
    price: "Rs. 799 – 2,500",
    downtime: "Time Required",
    duration: "45 Mins – 1.5 Hours",
    description: "Relaxing scalp massage, deep conditioning cream spa, herbal steam, and hair root nourishment.",
    image: "/services/hair%20spa.png",
    popular: false,
  },
];

const CATEGORIES = ["All", "Hair Care", "Skin & Facial", "Bridal & Henna", "Eyebrow & Lash", "Nail Care"];

export default function TreatmentsSection({ onSelectTreatment }: TreatmentsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredTreatments = activeCategory === "All"
    ? TREATMENTS_DATA
    : TREATMENTS_DATA.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments" className="py-20 md:py-28 bg-[#FAF6F3] border-t border-[#E5D5CD]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header matching reference screenshot */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D1F17] font-normal leading-tight">
              Our Beauty Services
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#8C6B5B] leading-relaxed font-sans">
              Discover our most requested beauty parlour services designed to pamper your hair, skin, nails, and bridal look.
            </p>
          </div>

          {/* Action Buttons Top Right */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTreatment(undefined)}
              className="px-6 py-3 rounded-full bg-[#784026] hover:bg-[#522714] text-white font-medium text-xs sm:text-sm transition-all shadow-sm flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            <Link
              href="/treatments"
              className="px-6 py-3 rounded-full bg-[#F5EDE8] hover:bg-[#EBD5C8] text-[#784026] font-medium text-xs sm:text-sm transition-all border border-[#E5D5CD] cursor-pointer"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${activeCategory === cat
                  ? "bg-[#522714] text-white shadow-sm"
                  : "bg-white/80 text-[#8C6B5B] hover:text-[#522714] border border-[#E5D5CD]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Treatment Rows with Hover Floating Image Pop-up & Compressed Inset Box */}
        <div className="w-full divide-y divide-[#E5D5CD]/60 border-y border-[#E5D5CD] relative py-2 space-y-2 sm:space-y-3">
          {filteredTreatments.map((treatment) => {
            const isHovered = hoveredId === treatment.id;
            return (
              <div
                key={treatment.id}
                onMouseEnter={() => setHoveredId(treatment.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectTreatment(treatment.title)}
                className={`relative py-5 sm:py-7 px-5 sm:px-8 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-5 ${isHovered
                    ? "bg-[#FAF3EE] shadow-md border border-[#EADCD4] scale-[0.99] sm:scale-[0.995]"
                    : "bg-transparent border border-transparent hover:bg-[#FAF3EE]/50"
                  }`}
              >
                {/* Left Content */}
                <div className="space-y-2 max-w-md lg:max-w-lg z-10">
                  <div className="flex items-center space-x-2.5">
                    <h3 className={`font-serif text-2xl sm:text-3xl transition-colors leading-tight font-normal ${isHovered ? "text-[#522714]" : "text-[#2D1F17]"
                      }`}>
                      {treatment.title}
                    </h3>
                    {treatment.popular && (
                      <span className="text-[9px] uppercase tracking-wider font-semibold bg-[#EBD5C8] text-[#522714] px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#8C6B5B] font-sans leading-relaxed">
                    {treatment.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    <span className="px-3 py-1 rounded-full border border-[#E5D5CD] bg-white/70 text-[11px] text-[#784026] font-medium">
                      Est. Time: {treatment.duration}
                    </span>
                  </div>
                </div>

                {/* Floating Image Card - Appears ONLY when Hovered over THIS row */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85, rotate: -2, y: 15 }}
                      animate={{ opacity: 1, scale: 1, rotate: 3, y: 0 }}
                      exit={{ opacity: 0, scale: 0.85, rotate: -2, y: 15 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="hidden md:block absolute left-[48%] lg:left-[52%] -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
                    >
                      <div className="w-[160px] sm:w-[180px] md:w-[200px] aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <img
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Right Price & Book Action */}
                <div className="flex flex-row sm:flex-col items-baseline sm:items-end justify-between sm:justify-center gap-0.5 shrink-0 pt-1 sm:pt-0 z-10">
                  <span className="text-[11px] uppercase tracking-wider text-[#8C6B5B] font-medium">
                    Starting at
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <span className={`font-serif text-2xl sm:text-3xl md:text-4xl transition-colors font-normal ${isHovered ? "text-[#522714]" : "text-[#2D1F17]"
                      }`}>
                      {treatment.price}
                    </span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C6B5B] group-hover:text-[#522714] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
