"use client";

import { motion } from "framer-motion";
import { Award, Heart, Crown, Star, Scissors, Sparkles, Sparkle, ShieldCheck, UserCheck } from "lucide-react";

const SERVICES_ROW_1 = [
  {
    value: "150+",
    title: "Bridal Makeup",
    subtitle: "HD & Airbrush Bridal Glam",
    icon: Sparkles,
  },
  {
    value: "100+",
    title: "Hair Spa & Color",
    subtitle: "Nourishing Spa & Balayage",
    icon: Scissors,
  },
  {
    value: "200+",
    title: "Bridal Mehendi",
    subtitle: "Custom Henna Artistry",
    icon: Crown,
  },
  {
    value: "300+",
    title: "Eyebrow Microblading",
    subtitle: "Precision Shaping & Tint",
    icon: Sparkle,
  },
  {
    value: "250+",
    title: "Facials & Skin Care",
    subtitle: "Herbal & Glow Treatments",
    icon: Heart,
  },
  {
    value: "180+",
    title: "Keratin & Smoothing",
    subtitle: "Protein Hair Treatments",
    icon: ShieldCheck,
  },
];

const SERVICES_ROW_2 = [
  {
    value: "120+",
    title: "Nail Art Extensions",
    subtitle: "Acrylic & Gel Polish Art",
    icon: Star,
  },
  {
    value: "500+",
    title: "Happy Clients",
    subtitle: "Satisfied Repeat Guests",
    icon: UserCheck,
  },
  {
    value: "12+ Yrs",
    title: "Salon Experience",
    subtitle: "Master Stylists & Artists",
    icon: Award,
  },
  {
    value: "4.9 ★",
    title: "Google Rating",
    subtitle: "Over 800+ 5-Star Reviews",
    icon: Star,
  },
  {
    value: "150+",
    title: "Waxing & Threading",
    subtitle: "Hygienic Organic Care",
    icon: Sparkles,
  },
  {
    value: "80+",
    title: "Haircuts & Styling",
    subtitle: "Trendsetting Modern Cuts",
    icon: Scissors,
  },
];

export default function StatsSection() {
  // Duplicated arrays for seamless continuous looping marquee
  const row1Items = [...SERVICES_ROW_1, ...SERVICES_ROW_1, ...SERVICES_ROW_1];
  const row2Items = [...SERVICES_ROW_2, ...SERVICES_ROW_2, ...SERVICES_ROW_2];

  return (
    <section className="py-20 md:py-28 bg-[#FAF6F3] border-t border-[#E5D5CD]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12 md:mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#784026] block mb-3">
          Our Completed Services & Milestones
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1F17] font-normal">
          Excellence in every service.
        </h2>
        <p className="mt-4 text-base text-[#8C6B5B] max-w-2xl mx-auto leading-relaxed">
          From bridal makeup to hair spa rituals and skincare facials — our numbers speak to years of dedicated artistry and client trust.
        </p>
      </div>

      {/* Row 1: Slow Left-scrolling Marquee */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF6F3] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF6F3] to-transparent z-10" />

        <div className="animate-marquee-slow-left hover:[animation-play-state:paused] flex items-center gap-5 sm:gap-6 px-4">
          {row1Items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`row1-${item.title}-${index}`}
                className="shrink-0 bg-white border border-[#E5D5CD] rounded-3xl p-6 shadow-xs hover:shadow-md hover:border-[#522714] transition-all flex items-center space-x-5 w-[280px] sm:w-[320px] cursor-pointer group"
              >
                <div className="p-3.5 rounded-2xl bg-[#EBD5C8]/60 text-[#522714] group-hover:bg-[#522714] group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-normal text-[#522714]">
                    {item.value}
                  </div>
                  <h4 className="font-sans font-semibold text-sm sm:text-base text-[#2D1F17] mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8C6B5B] font-sans mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Slow Right-scrolling Marquee */}
      <div className="relative w-full overflow-hidden py-3 mt-4 sm:mt-6">
        {/* Left & Right Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF6F3] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF6F3] to-transparent z-10" />

        <div className="animate-marquee-slow-right hover:[animation-play-state:paused] flex items-center gap-5 sm:gap-6 px-4">
          {row2Items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`row2-${item.title}-${index}`}
                className="shrink-0 bg-white border border-[#E5D5CD] rounded-3xl p-6 shadow-xs hover:shadow-md hover:border-[#522714] transition-all flex items-center space-x-5 w-[280px] sm:w-[320px] cursor-pointer group"
              >
                <div className="p-3.5 rounded-2xl bg-[#EBD5C8]/60 text-[#522714] group-hover:bg-[#522714] group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-normal text-[#522714]">
                    {item.value}
                  </div>
                  <h4 className="font-sans font-semibold text-sm sm:text-base text-[#2D1F17] mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8C6B5B] font-sans mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
