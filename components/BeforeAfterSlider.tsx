"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, SlidersHorizontal, Check } from "lucide-react";

const RESULTS = [
  {
    id: "lip-filler",
    title: "Lip Filler",
    subtitle: "Natural volume & balance",
    description: "Soft enhancement focused on symmetry, hydration, and natural lip contours without over-filling.",
    beforeImg: "https://images.unsplash.com/photo-1512290900674-5e58ed051d95?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    sessions: "1 Session",
  },
  {
    id: "laser-skin",
    title: "Laser Skin Treatment",
    subtitle: "Pigmentation & texture clarity",
    description: "Targeted laser resurfacing for sun spots, redness, and smooth skin texture.",
    beforeImg: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    sessions: "2 Sessions",
  },
  {
    id: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    subtitle: "Radiance & even skin tone",
    description: "Comprehensive skin conditioning reducing fine lines and boosting collagen synthesis.",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    sessions: "3 Sessions",
  },
];

export default function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const currentResult = RESULTS[activeTab];

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
    <section className="py-24 md:py-32 bg-[#FAF6F3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#784026] block mb-3">
            Client Transformations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1F17] font-normal">
            Real people. Real results.
          </h2>
          <p className="mt-4 text-base text-[#8C6B5B]">
            Drag the interactive slider below to inspect the subtle, natural improvements achieved by our clinic.
          </p>
        </div>

        {/* Treatment Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {RESULTS.map((res, index) => (
            <button
              key={res.id}
              onClick={() => {
                setActiveTab(index);
                setSliderPosition(50);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === index
                  ? "bg-[#522714] text-white shadow-md"
                  : "bg-white/80 text-[#8C6B5B] hover:text-[#522714] border border-[#E5D5CD]"
              }`}
            >
              {res.title}
            </button>
          ))}
        </div>

        {/* Interactive Before & After Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-[#E5D5CD] shadow-lg">
          {/* Interactive Split Image Slider (Left 7 Cols) */}
          <div className="lg:col-span-7">
            <div
              className="relative w-full aspect-4/3 rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none shadow-md border border-[#E5D5CD]"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Base) */}
              <img
                src={currentResult.afterImg}
                alt={`${currentResult.title} After`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                AFTER
              </span>

              {/* Before Image (Clipped Top Layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentResult.beforeImg}
                  alt={`${currentResult.title} Before`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: "100%", height: "100%" }}
                />
                <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  BEFORE
                </span>
              </div>

              {/* Divider Handle Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white text-[#522714] rounded-full flex items-center justify-center shadow-xl border border-[#E5D5CD]">
                  <SlidersHorizontal className="w-5 h-5 rotate-90" />
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-[#8C6B5B] mt-3">
              ↔ Drag or hover slider to view transformation
            </p>
          </div>

          {/* Result Info Details (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <div>
              <span className="text-xs uppercase font-semibold text-[#784026] tracking-wider bg-[#EBD5C8]/60 px-3 py-1 rounded-full">
                {currentResult.sessions}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2D1F17] mt-3 font-normal">
                {currentResult.title}
              </h3>
              <p className="text-sm font-medium text-[#784026] mt-1">
                {currentResult.subtitle}
              </p>
            </div>

            <p className="text-sm text-[#8C6B5B] leading-relaxed">
              {currentResult.description}
            </p>

            <div className="space-y-2.5 pt-2">
              {["Custom facial harmony design", "Subtle, non-overdone volume", "Quick recovery & minimal downtime"].map((point) => (
                <div key={point} className="flex items-center space-x-3 text-xs sm:text-sm text-[#2D1F17]">
                  <div className="w-5 h-5 rounded-full bg-[#EBD5C8] text-[#522714] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
