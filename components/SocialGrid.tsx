"use client";

import { Instagram, ArrowUpRight } from "lucide-react";

const INSTAGRAM_POSTS = [
  "https://images.unsplash.com/photo-1512290900674-5e58ed051d95?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=500&q=80",
];

export default function SocialGrid() {
  return (
    <section className="py-20 bg-[#FAF6F3] border-t border-[#E5D5CD]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#784026] block mb-2">
              @klinik_aesthetics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D1F17] font-normal">
              Our journey continues on social.
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-medium text-[#522714] hover:text-[#784026] group"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square border border-[#E5D5CD] shadow-xs"
            >
              <img
                src={img}
                alt={`Klinik Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#522714]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-7 h-7" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
