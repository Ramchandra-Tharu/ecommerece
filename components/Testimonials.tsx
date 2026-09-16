"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const REVIEWS = [
  {
    name: "Lauren M.",
    treatment: "Lip Filler",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "I wanted a very smooth, natural result and that’s exactly what I got. The whole experience felt calm, professional, and reassuring.",
    rating: 5,
  },
  {
    name: "Sophie W.",
    treatment: "Anti-Wrinkle Treatment",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    quote: "So happy! My results are subtle, fresh and beautiful. I still look just like myself, just more rested. I wouldn't trust anyone else.",
    rating: 5,
  },
  {
    name: "Danielle K.",
    treatment: "Microneedling & RF",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    quote: "My skin feels much more even and smooth. The team explained everything from start to finish and made me feel completely comfortable.",
    rating: 5,
  },
  {
    name: "Emma T.",
    treatment: "Dermal Fillers",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "The attention to detail and medical care is unmatched. They took the time to listen to my concerns and delivered beyond expectations.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF6F3] border-t border-[#E5D5CD]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#784026] block mb-3">
            Google Reviews
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1F17] font-normal">
            What our customers say
          </h2>
          <p className="mt-4 text-base text-[#8C6B5B]">
            Read honest feedback from clients who have experienced our personalized aesthetic treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-7 rounded-3xl border border-[#E5D5CD] shadow-xs flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#EBD5C8]" />
                </div>

                <p className="text-sm text-[#2D1F17] leading-relaxed italic font-serif text-base">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#E5D5CD]/40 flex items-center space-x-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#E5D5CD]"
                />
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h4 className="font-medium text-sm text-[#2D1F17]">{rev.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#784026]" />
                  </div>
                  <span className="text-xs text-[#8C6B5B]">{rev.treatment}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
