"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, SlidersHorizontal, CheckCircle2, Calendar, Maximize2, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  onSelectTreatment?: (treatmentName: string) => void;
}

const TRANSFORMATIONS = [
  {
    id: "facial",
    title: "Herbal & Hydrating Facial",
    category: "Skin & Facial Care",
    badge: "Real Client Result",
    image: "/afterbefore/facial.png",
    subtitle: "Deep Pore Cleansing & Natural Glow",
    description: "Revitalizing herbal facial treatment performed on real clients to clear impurities, hydrate deep skin layers, and restore a glowing, even complexion.",
    sessions: "1 Session (45–60 mins)",
    highlights: [
      "Deep pore extraction & dead skin removal",
      "Intense hydration & herbal skin nourishment",
      "Instant natural radiance with zero downtime",
      "Customized formulation for sensitive & acne-prone skin",
    ],
    bestFor: "Dull skin, blackheads, uneven texture & dehydration",
  },
  {
    id: "keratina",
    title: "Keratin Hair Smoothing",
    category: "Hair Transformation",
    badge: "Real Client Result",
    image: "/afterbefore/keratina.png",
    subtitle: "Silkiness, Frizz Control & Intense Moisture",
    description: "Professional Keratin smoothing treatment performed on real hair to eliminate rebellious frizz, rebuild damaged cuticles, and deliver long-lasting glossy shine.",
    sessions: "1 Session (90–120 mins)",
    highlights: [
      "Tames up to 95% frizz & unruly flyaways",
      "Infuses essential protein for hair cuticle repair",
      "Long-lasting silky smooth feel (3–5 months)",
      "Drastically reduces daily blowout & heat styling time",
    ],
    bestFor: "Frizzy, coarse, dry, or chemically damaged hair",
  },
  {
    id: "coloring",
    title: "Hair Coloring & Highlights",
    category: "Hair Styling",
    badge: "Real Client Result",
    image: "/afterbefore/coloring.png",
    subtitle: "Vibrant Tone, Balayage & High-Shine Gloss",
    description: "Custom hair coloring and multi-dimensional highlighting crafted to suit skin tones while preserving natural hair strength and softness.",
    sessions: "1 Session (90–150 mins)",
    highlights: [
      "Gentle ammonia-free premium color formulations",
      "Seamless balayage & dimensional highlights",
      "Deep gloss finish for maximum color vibrance",
      "Protective post-color nourishment & hair spa",
    ],
    bestFor: "Grey coverage, balayage, ombre & color refreshing",
  },
  {
    id: "eyebrow",
    title: "Eyebrow Threading & Micro-Shaping",
    category: "Eyebrow & Lash Care",
    badge: "Real Client Result",
    image: "/afterbefore/eyebrow.png",
    subtitle: "Precision Arch, Natural Symmetry & Face Framing",
    description: "Artisanal eyebrow threading and shaping engineered to frame your facial features with crisp, clean arches and natural symmetry.",
    sessions: "1 Quick Session (15–30 mins)",
    highlights: [
      "Precise hair removal for crisp, defined arches",
      "Symmetrical mapping customized to face shape",
      "Gentle technique suitable for delicate eye skin",
      "Instant, long-lasting brow shape definition",
    ],
    bestFor: "Unruly brows, sparse arches & facial framing",
  },
  {
    id: "bridal-makeup",
    title: "HD Bridal Makeup & Glam",
    category: "Bridal & Occasion Glam",
    badge: "Real Client Result",
    image: "/afterbefore/bridal makeup.png",
    subtitle: "Flawless HD Base, Waterproof & Royal Radiance",
    description: "Luxury HD bridal makeup engineered for camera perfection, long-wearing durability, and breathtaking radiance on your special day.",
    sessions: "Bridal Package (90–180 mins)",
    highlights: [
      "Sweatproof & 16+ hour long-wearing HD base",
      "Custom eye glam, brow enhancement & lip contour",
      "Dermatologist-tested premium makeup products",
      "Includes complete pre-bridal skin prep consultation",
    ],
    bestFor: "Brides, receptions, engagements & festive events",
  },
];

export default function BeforeAfterSlider({ onSelectTreatment }: BeforeAfterSliderProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showFullView, setShowFullView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentResult = TRANSFORMATIONS[activeTab];

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev === TRANSFORMATIONS.length - 1 ? 0 : prev + 1));
      setSliderPosition(50);
    }, 4000);
  };

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (!isPaused) {
      startInterval();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? TRANSFORMATIONS.length - 1 : prev - 1));
    setSliderPosition(50);
    startInterval(); // Reset timer on manual navigation
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === TRANSFORMATIONS.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
    startInterval(); // Reset timer on manual navigation
  };

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <section className="py-20 md:py-32 bg-[#FAF6F3] border-t border-[#E5D5CD]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#EBD5C8]/70 border border-[#E5D5CD] px-4 py-1.5 rounded-full mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#784026]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#522714]">
              Real People • Real Results
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl text-[#2D1F17] font-normal"
          >
            Client Transformations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#8C6B5B] leading-relaxed"
          >
            Inspect genuine before and after results from our salon & beauty parlour. Use the arrow controls to browse through client transformation photos.
          </motion.p>
        </div>

        {/* Progress Dots + Auto indicator */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          {TRANSFORMATIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => { setActiveTab(index); setSliderPosition(50); startInterval(); }}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeTab === index
                  ? "w-7 h-2.5 bg-[#522714]"
                  : "w-2.5 h-2.5 bg-[#E5D5CD] hover:bg-[#784026]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          <span className={`ml-2 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${isPaused ? "text-[#8C6B5B] bg-[#FAF6F3] border-[#E5D5CD]" : "text-[#522714] bg-[#EBD5C8]/60 border-[#E5D5CD]"}`}>
            {isPaused ? "⏸ Paused" : "▶ Auto"}
          </span>
        </div>

        {/* Main Transformation Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentResult.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-[#E5D5CD] shadow-xl relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Column: Image Viewer with < > Arrows (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              {/* Controls Bar with Navigation Arrows & Status */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-[#784026] uppercase tracking-wider bg-[#EBD5C8]/60 px-3 py-1 rounded-full flex items-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{currentResult.badge}</span>
                  </span>
                  <span className="text-xs font-semibold text-[#8C6B5B] bg-[#FAF6F3] px-2.5 py-1 rounded-full border border-[#E5D5CD]">
                    {activeTab + 1} / {TRANSFORMATIONS.length}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Prev Arrow */}
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Transformation"
                    className="p-2 rounded-full bg-[#FAF6F3] hover:bg-[#522714] text-[#522714] hover:text-white border border-[#E5D5CD] transition-all shadow-sm cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Next Arrow */}
                  <button
                    onClick={handleNext}
                    aria-label="Next Transformation"
                    className="p-2 rounded-full bg-[#FAF6F3] hover:bg-[#522714] text-[#522714] hover:text-white border border-[#E5D5CD] transition-all shadow-sm cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setShowFullView(!showFullView)}
                    className="text-xs text-[#784026] hover:text-[#522714] font-medium flex items-center space-x-1 bg-[#FAF6F3] hover:bg-[#EBD5C8]/40 px-3 py-1.5 rounded-full border border-[#E5D5CD] transition-colors cursor-pointer ml-1"
                  >
                    {showFullView ? (
                      <>
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Slider Lens</span>
                      </>
                    ) : (
                      <>
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Full Side-by-Side</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Image Card Container with Overlay < > Navigation Icons */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#FAF6F3] shadow-md border border-[#E5D5CD] group">
                {/* Floating Previous (<) Arrow Button */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 hover:bg-[#522714] text-[#522714] hover:text-white backdrop-blur-md border border-[#E5D5CD] shadow-lg transition-all transform hover:scale-110 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Floating Next (>) Arrow Button */}
                <button
                  onClick={handleNext}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 hover:bg-[#522714] text-[#522714] hover:text-white backdrop-blur-md border border-[#E5D5CD] shadow-lg transition-all transform hover:scale-110 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {!showFullView ? (
                  /* Interactive Split Drag Slider */
                  <div
                    className="relative w-full h-full cursor-ew-resize select-none touch-none"
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                  >
                    {/* Full Base Transformation Image */}
                    <img
                      src={currentResult.image}
                      alt={`${currentResult.title} Transformation`}
                      className="absolute inset-0 w-full h-full object-contain bg-[#FAF6F3]"
                    />
                    
                    {/* Floating Badges */}
                    <span className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      BEFORE
                    </span>
                    <span className="absolute top-4 right-4 z-10 bg-[#522714]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      AFTER
                    </span>

                    {/* Reveal Divider Bar */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white text-[#522714] rounded-full flex items-center justify-center shadow-2xl border-2 border-[#E5D5CD]">
                        <SlidersHorizontal className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Full Image Mode */
                  <div className="relative w-full h-full flex items-center justify-center p-2 bg-[#FAF6F3]">
                    <img
                      src={currentResult.image}
                      alt={`${currentResult.title} Full View`}
                      className="w-full h-full object-contain rounded-xl"
                    />
                    <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      BEFORE & AFTER
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-[#8C6B5B] pt-1">
                <span>Use <b>&lt;</b> and <b>&gt;</b> arrows to switch client photos</span>
                <span>{!showFullView ? "↔ Drag divider horizontally" : "🔍 Full view photo"}</span>
              </div>
            </div>

            {/* Right Column: Dynamic Description Panel (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 lg:pl-2">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs uppercase font-semibold text-[#784026] tracking-wider bg-[#EBD5C8]/60 px-3 py-1 rounded-full">
                    {currentResult.category}
                  </span>
                  <span className="text-xs font-medium text-[#8C6B5B]">
                    {currentResult.sessions}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#2D1F17] font-normal leading-tight">
                  {currentResult.title}
                </h3>
                <p className="text-sm font-semibold text-[#784026] mt-1.5">
                  {currentResult.subtitle}
                </p>
              </div>

              {/* Dynamic Description Text */}
              <p className="text-sm text-[#8C6B5B] leading-relaxed">
                {currentResult.description}
              </p>

              {/* Key Benefits List */}
              <div className="space-y-3 pt-1 border-t border-[#E5D5CD]/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#522714]">
                  Key Treatment Benefits
                </h4>
                <div className="space-y-2.5">
                  {currentResult.highlights.map((point) => (
                    <div key={point} className="flex items-start space-x-3 text-xs sm:text-sm text-[#2D1F17]">
                      <div className="w-5 h-5 rounded-full bg-[#EBD5C8] text-[#522714] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#522714]" />
                      </div>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For Tag */}
              <div className="p-3.5 rounded-2xl bg-[#FAF6F3] border border-[#E5D5CD] text-xs">
                <span className="font-semibold text-[#522714] block mb-0.5">Recommended For:</span>
                <span className="text-[#8C6B5B]">{currentResult.bestFor}</span>
              </div>

              {/* Action Button & Next/Prev Controls */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onSelectTreatment && onSelectTreatment(currentResult.title)}
                  className="w-full sm:flex-1 px-7 py-3.5 bg-[#522714] hover:bg-[#784026] text-white text-sm font-medium rounded-full transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {currentResult.title}</span>
                </button>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    className="p-3 rounded-full bg-[#FAF6F3] hover:bg-[#522714] text-[#522714] hover:text-white border border-[#E5D5CD] transition-all shadow-sm cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next photo"
                    className="p-3 rounded-full bg-[#FAF6F3] hover:bg-[#522714] text-[#522714] hover:text-white border border-[#E5D5CD] transition-all shadow-sm cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


