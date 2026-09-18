"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Exactly 4 images from public/salon
export const SALON_IMAGES = [
  {
    src: "/salon/s1.png",
    alt: "Yashu Salon View 1",
  },
  {
    src: "/salon/s2.png",
    alt: "Yashu Salon View 2",
  },
  {
    src: "/salon/s3.png",
    alt: "Yashu Salon View 3",
  },
  {
    src: "/salon/s4.png",
    alt: "Yashu Salon View 4",
  },
];

interface SalonImageCarouselProps {
  aspectRatio?: string;
  className?: string;
}

export default function SalonImageCarousel({
  aspectRatio = "aspect-4/3",
  className = "",
}: SalonImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SALON_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SALON_IMAGES.length) % SALON_IMAGES.length);
  }, []);

  // 5-second automatic slideshow loop
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentImage = SALON_IMAGES[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className={`relative rounded-3xl overflow-hidden border border-[#E5D5CD] shadow-lg group bg-[#FAF6F3] ${aspectRatio} ${className}`}>
      {/* 4 Images Loop Container */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={currentIndex}
          src={currentImage.src}
          alt={currentImage.alt}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Subtle overlay for icon & dot contrast */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Subtle, less-visible Navigation Arrows (< and >) */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2.5 sm:px-3.5 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous Image"
          className="pointer-events-auto p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/90 backdrop-blur-xs transition-all hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next Image"
          className="pointer-events-auto p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/90 backdrop-blur-xs transition-all hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Subtle, less-visible Indicator Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        {SALON_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-4 bg-white"
                : "w-1.5 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
