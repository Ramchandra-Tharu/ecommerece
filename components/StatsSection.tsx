"use client";

import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Star } from "lucide-react";

const STATS = [
  {
    value: "15",
    suffix: " Years",
    label: "Of clinical experience in aesthetic medicine",
    icon: Award,
  },
  {
    value: "500+",
    suffix: "",
    label: "Happy clients treated every single year",
    icon: Heart,
  },
  {
    value: "1,000+",
    suffix: "",
    label: "Customized aesthetic procedures completed",
    icon: Sparkles,
  },
  {
    value: "5.0",
    suffix: " Stars",
    label: "Average client rating across Google reviews",
    icon: Star,
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF6F3] border-t border-[#E5D5CD]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#784026] block mb-3">
            Credentials & Excellence
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1F17] font-normal">
            Experience you can trust.
          </h2>
          <p className="mt-4 text-base text-[#8C6B5B] leading-relaxed">
            Our numbers reflect our dedication to safety, natural beauty, and client satisfaction over more than a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-[#E5D5CD] shadow-xs text-center hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 mx-auto mb-6 bg-[#EBD5C8]/50 text-[#522714] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-serif text-4xl sm:text-5xl text-[#522714] font-normal">
                  {stat.value}<span className="text-2xl font-serif text-[#784026]">{stat.suffix}</span>
                </div>
                <p className="mt-3 text-sm text-[#8C6B5B] leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
