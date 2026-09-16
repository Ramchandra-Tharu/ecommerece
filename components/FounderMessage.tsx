"use client";

import { motion } from "framer-motion";
import { Alex_Brush } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
});

export default function FounderMessage() {
  return (
    <section className="py-10 md:py-18 bg-[#FAF6F3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F5EDE8]/75 border border-[#E5D5CD] rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Founder Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4] border border-[#E5D5CD] shadow-md group bg-gradient-to-b from-[#FFFDFB] via-[#FAF6F3] to-[#EBD5C8]/40">
                <img
                  src="/founder-yashodha.png"
                  alt="Yashodha - Founder & Lead Practitioner"
                  className="w-full h-full object-contain object-bottom pt-3 transition-transform duration-700 group-hover:scale-105"
                />

                {/* White Floating Name Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-5 sm:left-5 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#E5D5CD]/60 shadow-md">
                  <h4 className="font-sans font-semibold text-sm sm:text-base text-[#2D1F17]">
                    Yashodha
                  </h4>
                  <p className="font-sans text-xs text-[#784026] mt-0.5 font-medium">
                    Founder & Lead Practitioner
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Message & Signature */}
            <div className="lg:col-span-7 space-y-5 md:space-y-7">
              {/* Eyebrow */}
              <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#784026] block">
                A message from the founder
              </span>

              {/* Main Quote Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] text-[#2D1F17] font-normal leading-[1.35] tracking-tight">
                Beauty begins with confidence. We are dedicated to delivering premium beauty services in a comfortable and welcoming environment. We look forward to serving you. Your satisfaction and happiness are at the heart of everything we do.
              </h2>

              {/* Signature */}
              <div className="pt-2">
                <span className={`${alexBrush.className} text-4xl sm:text-5xl md:text-6xl text-[#784026] block tracking-wide`}>
                  Yashodha
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
