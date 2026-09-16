"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import VisitUsFooter from "@/components/VisitUsFooter";
import BookingModal from "@/components/BookingModal";
import { motion } from "framer-motion";
import { Sparkles, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "General Inquiry", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF6F3] text-[#2D1F17]">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Header */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-24 bg-[#FAF6F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-[#EBD5C8]/70 border border-[#E5D5CD] px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#784026]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#522714]">
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#2D1F17] font-normal leading-tight max-w-4xl mx-auto"
          >
            We look forward to hearing from you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#8C6B5B] max-w-2xl mx-auto leading-relaxed"
          >
            Have a question about our treatments or wish to schedule a consultation? Reach out directly to our clinic team.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="pb-24 bg-[#FAF6F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Cards (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-[#E5D5CD] shadow-xs space-y-6">
              <h3 className="font-serif text-2xl text-[#2D1F17] font-normal">Direct Information</h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#EBD5C8]/50 text-[#522714]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2D1F17]">Address</h4>
                    <p className="text-[#8C6B5B] mt-0.5">2148 Fillmore Street, San Francisco, CA 94115</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#EBD5C8]/50 text-[#522714]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2D1F17]">Phone</h4>
                    <a href="tel:+14158293742" className="text-[#784026] hover:underline mt-0.5 block">
                      +1 (415) 829-3742
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#EBD5C8]/50 text-[#522714]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2D1F17]">Email</h4>
                    <a href="mailto:contact@klinik-aesthetics.com" className="text-[#784026] hover:underline mt-0.5 block">
                      contact@klinik-aesthetics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#EBD5C8]/50 text-[#522714]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2D1F17]">Hours</h4>
                    <p className="text-[#8C6B5B] mt-0.5">Mon – Fri: 9:00am – 6:00pm</p>
                    <p className="text-[#8C6B5B]">Sat: 10:00am – 2:00pm | Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Map Preview */}
            <div className="bg-white p-6 rounded-3xl border border-[#E5D5CD] shadow-xs relative overflow-hidden">
              <div
                className="w-full h-48 rounded-2xl bg-cover bg-center border border-[#E5D5CD]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80')`,
                }}
              />
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs font-semibold text-[#522714]">San Francisco Clinic</span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#784026] hover:underline font-medium"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E5D5CD] shadow-md">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-5">
                  <div className="w-16 h-16 mx-auto bg-[#EBD5C8] text-[#522714] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#522714]">Message Received</h3>
                  <p className="text-sm text-[#8C6B5B] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-medium text-[#2D1F17]">{form.name}</span>. Our clinic team has received your message and will respond to <span className="font-medium text-[#2D1F17]">{form.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setForm({ name: "", email: "", phone: "", service: "General Inquiry", message: "" });
                    }}
                    className="px-8 py-3 bg-[#522714] text-white rounded-full font-medium text-sm transition-all shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-3xl text-[#2D1F17] font-normal">Send Us a Message</h3>
                    <p className="text-sm text-[#8C6B5B] mt-1">Fill out the form below and our clinic manager will contact you.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-semibold text-[#8C6B5B] mb-2">Your Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full p-3.5 bg-[#FAF6F3] border border-[#E5D5CD] rounded-2xl focus:outline-none focus:border-[#522714] text-[#2D1F17] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-semibold text-[#8C6B5B] mb-2">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="sarah@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full p-3.5 bg-[#FAF6F3] border border-[#E5D5CD] rounded-2xl focus:outline-none focus:border-[#522714] text-[#2D1F17] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-semibold text-[#8C6B5B] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (415) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full p-3.5 bg-[#FAF6F3] border border-[#E5D5CD] rounded-2xl focus:outline-none focus:border-[#522714] text-[#2D1F17] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-semibold text-[#8C6B5B] mb-2">Inquiry Type</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full p-3.5 bg-[#FAF6F3] border border-[#E5D5CD] rounded-2xl focus:outline-none focus:border-[#522714] text-[#2D1F17] text-sm"
                      >
                        <option>General Inquiry</option>
                        <option>Anti-Wrinkle Treatment</option>
                        <option>Dermal Fillers</option>
                        <option>Skin Rejuvenation</option>
                        <option>Laser Therapy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#8C6B5B] mb-2">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we assist you?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-3.5 bg-[#FAF6F3] border border-[#E5D5CD] rounded-2xl focus:outline-none focus:border-[#522714] text-[#2D1F17] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#522714] hover:bg-[#784026] text-white rounded-full font-medium text-sm transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <VisitUsFooter onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
