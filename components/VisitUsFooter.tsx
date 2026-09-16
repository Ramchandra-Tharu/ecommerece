"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Calendar, ArrowUp } from "lucide-react";

interface VisitUsFooterProps {
  onOpenBooking: () => void;
}

export default function VisitUsFooter({ onOpenBooking }: VisitUsFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2D1F17] text-[#FAF6F3] pt-24 pb-12 border-t border-[#784026]/40 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#784026]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Call to Action Banner */}
        <div className="bg-[#522714] border border-[#784026] rounded-3xl p-8 sm:p-12 text-center mb-20 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#EBD5C8]">
              Begin Your Rejuvenation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Start your treatment journey.
            </h2>
            <p className="text-sm sm:text-base text-[#EBD5C8]/80 leading-relaxed font-sans">
              Book a consultation with our experienced aesthetic practitioners and discuss your personalized treatment plan.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center space-x-2 bg-[#EBD5C8] hover:bg-white text-[#522714] px-8 py-4 rounded-full font-medium text-base transition-all shadow-md active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Visit Us & Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-[#522714]">
          {/* Info Details (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#EBD5C8] block mb-2 font-semibold">
                Clinic Location
              </span>
              <h3 className="font-serif text-4xl text-white font-normal">Visit us</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#EBD5C8]">
              {/* Hours */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-white font-medium text-base">
                  <Clock className="w-5 h-5 text-[#EBD5C8]" />
                  <span>Opening Hours</span>
                </div>
                <ul className="space-y-2 text-[#EBD5C8]/80">
                  <li className="flex justify-between border-b border-[#522714] pb-1">
                    <span>Mon – Fri:</span>
                    <span className="font-medium text-white">9:00am – 6:00pm</span>
                  </li>
                  <li className="flex justify-between border-b border-[#522714] pb-1">
                    <span>Sat:</span>
                    <span className="font-medium text-white">10:00am – 2:00pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sun:</span>
                    <span className="text-[#EBD5C8]/50">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-white font-medium text-base">
                  <MapPin className="w-5 h-5 text-[#EBD5C8]" />
                  <span>Direct Channels</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-[#EBD5C8] mt-0.5 shrink-0" />
                    <span>2148 Fillmore Street, San Francisco, CA 94115</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#EBD5C8] shrink-0" />
                    <a href="tel:+14158293742" className="hover:text-white transition-colors">
                      +1 (415) 829-3742
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[#EBD5C8] shrink-0" />
                    <a href="mailto:contact@klinik-aesthetics.com" className="hover:text-white transition-colors">
                      contact@klinik-aesthetics.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map Preview Card (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="w-full h-full min-h-[260px] rounded-3xl overflow-hidden border border-[#522714] relative bg-[#522714]/40 flex flex-col justify-between p-6">
              {/* Simulated Map Background pattern */}
              <div
                className="absolute inset-0 opacity-30 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80')`,
                }}
              />
              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-[#2D1F17]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#EBD5C8] border border-[#522714]">
                  San Francisco Clinic
                </span>
                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
              </div>

              <div className="relative z-10 bg-[#2D1F17]/90 backdrop-blur-md p-4 rounded-2xl border border-[#522714] space-y-1">
                <p className="font-semibold text-white text-sm">Klinik Aesthetic Clinic</p>
                <p className="text-xs text-[#EBD5C8]/80">2148 Fillmore St, San Francisco</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-xs font-semibold text-[#EBD5C8] hover:text-white underline pt-1"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links & Copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EBD5C8]/70 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <span className="font-serif text-2xl text-white">Klinik®</span>
            <span>© {new Date().getFullYear()} Klinik Aesthetics. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#522714] hover:bg-[#784026] text-white rounded-full transition-colors ml-4"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
