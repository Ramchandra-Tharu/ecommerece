"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Sparkles, CheckCircle2, ChevronRight, User, Mail, Phone } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

const TREATMENTS = [
  { id: "anti-wrinkle", name: "Anti-Wrinkle Treatment", price: "From $320", duration: "30 mins" },
  { id: "dermal-fillers", name: "Dermal Fillers", price: "From $450", duration: "45 mins" },
  { id: "skin-rejuvenation", name: "Skin Rejuvenation", price: "From $280", duration: "60 mins" },
  { id: "laser-treatment", name: "Laser Skin Treatment", price: "From $390", duration: "45 mins" },
  { id: "lip-enhancement", name: "Lip Enhancement", price: "From $420", duration: "40 mins" },
  { id: "consultation", name: "Full Aesthetic Consultation", price: "$100 (Deposit)", duration: "45 mins" },
];

const TIME_SLOTS = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:15 PM"];

export default function BookingModal({ isOpen, onClose, initialTreatment }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState(initialTreatment || TREATMENTS[0].name);
  const [selectedDate, setSelectedDate] = useState("2026-09-20");
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[1]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", notes: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FAF6F3] rounded-3xl shadow-2xl border border-[#E5D5CD] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-[#FAF6F3] border-b border-[#E5D5CD]">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-normal text-[#522714]">Klinik®</span>
              <span className="text-xs tracking-wider uppercase bg-[#EBD5C8] text-[#522714] px-2.5 py-1 rounded-full font-medium">
                Online Consultation
              </span>
            </div>
            <button
              onClick={handleReset}
              className="p-2 text-[#8C6B5B] hover:text-[#522714] hover:bg-[#EBD5C8]/50 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10 space-y-5"
              >
                <div className="w-20 h-20 mx-auto bg-[#EBD5C8] text-[#522714] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl text-[#522714]">Consultation Booked!</h3>
                <p className="text-[#8C6B5B] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-medium text-[#2D1F17]">{formData.name}</span>. Your appointment for{" "}
                  <span className="font-medium text-[#2D1F17]">{selectedTreatment}</span> on{" "}
                  <span className="font-medium text-[#2D1F17]">{selectedDate} at {selectedTime}</span> has been scheduled.
                  A confirmation email was sent to <span className="font-medium text-[#2D1F17]">{formData.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-8 py-3.5 bg-[#522714] hover:bg-[#784026] text-white rounded-full font-medium transition-all shadow-md"
                  >
                    Done & Close
                  </button>
                </div>
              </motion.div>
            ) : (
              <div>
                {/* Step Indicators */}
                <div className="flex items-center justify-center space-x-3 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-medium text-sm transition-all ${
                          step === i
                            ? "bg-[#522714] text-white shadow-sm"
                            : step > i
                            ? "bg-[#EBD5C8] text-[#522714]"
                            : "bg-[#E5D5CD]/60 text-[#8C6B5B]"
                        }`}
                      >
                        {step > i ? <CheckCircle2 className="w-4 h-4" /> : i}
                      </div>
                      {i < 3 && <div className="w-8 md:w-12 h-0.5 bg-[#E5D5CD]" />}
                    </div>
                  ))}
                </div>

                {/* Step 1: Select Treatment */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl text-[#522714]">1. Select Your Treatment</h3>
                      <p className="text-sm text-[#8C6B5B] mt-1">Choose the service you would like to book for your visit.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {TREATMENTS.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setSelectedTreatment(item.name)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            selectedTreatment === item.name
                              ? "bg-white border-[#522714] shadow-md ring-1 ring-[#522714]"
                              : "bg-white/60 border-[#E5D5CD] hover:border-[#8C6B5B]"
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-[#2D1F17]">{item.name}</span>
                            <span className="text-xs font-semibold bg-[#FAF6F3] px-2 py-1 rounded-md text-[#522714]">
                              {item.price}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-xs text-[#8C6B5B] mt-2">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{item.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        onClick={() => setStep(2)}
                        className="flex items-center space-x-2 px-7 py-3 bg-[#522714] hover:bg-[#784026] text-white rounded-full font-medium transition-all shadow-md"
                      >
                        <span>Select Date & Time</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Date & Time */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl text-[#522714]">2. Choose Date & Time</h3>
                      <p className="text-sm text-[#8C6B5B] mt-1">Select an available appointment slot.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#2D1F17] mb-2 flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-[#784026]" />
                          <span>Select Preferred Date</span>
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          min="2026-09-17"
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full p-3.5 bg-white border border-[#E5D5CD] rounded-2xl focus:outline-none focus:border-[#522714] text-[#2D1F17]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2D1F17] mb-2 flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-[#784026]" />
                          <span>Available Time Slots</span>
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {TIME_SLOTS.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`py-3 px-3 rounded-xl border text-sm font-medium transition-all ${
                                selectedTime === time
                                  ? "bg-[#522714] text-white border-[#522714]"
                                  : "bg-white text-[#2D1F17] border-[#E5D5CD] hover:border-[#8C6B5B]"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        onClick={() => setStep(1)}
                        className="px-6 py-3 border border-[#E5D5CD] text-[#522714] hover:bg-[#EBD5C8]/40 rounded-full font-medium transition-all"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="flex items-center space-x-2 px-7 py-3 bg-[#522714] hover:bg-[#784026] text-white rounded-full font-medium transition-all shadow-md"
                      >
                        <span>Your Contact Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact Details */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl text-[#522714]">3. Complete Booking</h3>
                      <p className="text-sm text-[#8C6B5B] mt-1">Provide your contact info to confirm appointment.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#8C6B5B] mb-1.5 font-medium">Full Name</label>
                        <div className="relative">
                          <User className="w-4 h-4 absolute left-3.5 top-3.5 text-[#8C6B5B]" />
                          <input
                            required
                            type="text"
                            placeholder="e.g. Sarah Jenkins"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-[#E5D5CD] rounded-2xl focus:outline-none focus:border-[#522714] text-[#2D1F17]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#8C6B5B] mb-1.5 font-medium">Email Address</label>
                          <div className="relative">
                            <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#8C6B5B]" />
                            <input
                              required
                              type="email"
                              placeholder="sarah@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full pl-10 pr-4 py-3 bg-white border border-[#E5D5CD] rounded-2xl focus:outline-none focus:border-[#522714] text-[#2D1F17]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#8C6B5B] mb-1.5 font-medium">Phone Number</label>
                          <div className="relative">
                            <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-[#8C6B5B]" />
                            <input
                              required
                              type="tel"
                              placeholder="+1 (415) 000-0000"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full pl-10 pr-4 py-3 bg-white border border-[#E5D5CD] rounded-2xl focus:outline-none focus:border-[#522714] text-[#2D1F17]"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#8C6B5B] mb-1.5 font-medium">Notes / Special Requests (Optional)</label>
                        <textarea
                          rows={2}
                          placeholder="Tell us about your skincare goals or previous treatments..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full p-3 bg-white border border-[#E5D5CD] rounded-2xl focus:outline-none focus:border-[#522714] text-[#2D1F17]"
                        />
                      </div>

                      {/* Summary Box */}
                      <div className="p-4 bg-[#EBD5C8]/40 border border-[#E5D5CD] rounded-2xl text-xs space-y-1 text-[#522714]">
                        <p className="font-semibold text-sm">Summary</p>
                        <p>Treatment: <span className="font-medium">{selectedTreatment}</span></p>
                        <p>Date & Time: <span className="font-medium">{selectedDate} at {selectedTime}</span></p>
                      </div>

                      <div className="pt-2 flex justify-between items-center">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-6 py-3 border border-[#E5D5CD] text-[#522714] hover:bg-[#EBD5C8]/40 rounded-full font-medium transition-all"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-3.5 bg-[#522714] hover:bg-[#784026] text-white rounded-full font-medium transition-all shadow-md flex items-center space-x-2"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>Confirm Booking</span>
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
