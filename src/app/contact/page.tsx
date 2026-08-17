"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import ServiceHero from "../services/ServiceHero";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/40 text-slate-800">
      {/* COMPLETE SAME COLOR PALETTE: Emerald + Amber + Teal + Slate + White + Orange */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute -right-48 top-1/3 h-[500px] w-[500px] rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-emerald-100/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(245,158,11,0.08),transparent_30%)]" />
      </div>

      <ServiceHero
        title="Contact Us"
        subtitle="Get in Touch"
        icon={<FaEnvelope />}
        description="Have questions or ready to plan your journey? We're here to help. Reach out to us anytime our team is available 24/7 to assist you."
        bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
      />

      <section className="relative overflow-hidden border-b border-emerald-100/30 bg-gradient-to-br from-teal-900 via-cyan-900 to-emerald-950 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(245,158,11,0.08),transparent_30%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-white/10 via-emerald-500/5 to-amber-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-400/40 hover:bg-emerald-500/10 transition-all shadow-lg shadow-emerald-950/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/25 to-orange-500/15 flex items-center justify-center flex-shrink-0 border border-amber-300/10">
                  <FaPhone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-teal-100/70">+880 1884-694337</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 via-emerald-500/5 to-amber-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-emerald-400/40 hover:bg-emerald-500/10 transition-all shadow-lg shadow-emerald-950/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400/25 to-teal-400/15 flex items-center justify-center flex-shrink-0 border border-emerald-300/10">
                  <FaWhatsapp className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">WhatsApp</h4>
                  <p className="text-teal-100/70">+880 1884-694337</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 via-emerald-500/5 to-amber-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-400/40 hover:bg-emerald-500/10 transition-all shadow-lg shadow-emerald-950/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/25 to-orange-500/15 flex items-center justify-center flex-shrink-0 border border-amber-300/10">
                  <FaEnvelope className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold"> Email </h4>
                  <p className="text-teal-100/70">{" "}www.modinahut.com{" "}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 via-emerald-500/5 to-amber-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-400/40 hover:bg-emerald-500/10 transition-all shadow-lg shadow-emerald-950/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/25 to-orange-500/15 flex items-center justify-center flex-shrink-0 border border-amber-300/10">
                  <FaMapMarkerAlt className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Address</h4>
                  <p className="text-teal-100/70">
                    চৌরঙ্গী সুপার মার্কেট (৩য় তলা), মসজিদ সংলগ্ন, লিফটের -২, সাভার, ঢাকা।
                  </p>
                  <p className="text-teal-100/70">Bangladesh</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 via-emerald-500/5 to-amber-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-400/40 hover:bg-emerald-500/10 transition-all shadow-lg shadow-emerald-950/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/25 to-orange-500/15 flex items-center justify-center flex-shrink-0 border border-amber-300/10">
                  <FaClock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Office Hours</h4>
                  <p className="text-teal-100/70">Saturday – Thursday: 9:00 AM – 6:00 PM</p>
                  <p className="text-teal-100/70">Friday: Closed</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 via-emerald-500/5 to-amber-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg shadow-emerald-950/10">
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebook, href: "#", color: "hover:text-blue-400" },
                    { icon: FaInstagram, href: "#", color: "hover:text-pink-400" },
                    { icon: FaTwitter, href: "#", color: "hover:text-sky-400" },
                    { icon: FaWhatsapp, href: "#", color: "hover:text-emerald-400" },
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-teal-200/50 ${social.color} hover:border-amber-400/50 hover:bg-emerald-500/10 transition-all`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 via-emerald-500/5 to-amber-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl shadow-emerald-950/20"
            >
              <h3 className="text-white font-bold text-2xl mb-2">Send Us a Message</h3>
              <p className="text-teal-100/60 text-sm mb-6">Well get back to you within 24 hours.</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-emerald-400/15 to-teal-400/10 border border-emerald-400/30 rounded-xl p-4 text-center"
                >
                  <p className="text-emerald-400 font-semibold">
                    ✅ Your message has been sent successfully!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-white font-medium text-sm block mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-teal-200/40 focus:border-amber-400/50 focus:bg-emerald-500/10 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="text-white font-medium text-sm block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-teal-200/40 focus:border-amber-400/50 focus:bg-emerald-500/10 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="text-white font-medium text-sm block mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-teal-200/40 focus:border-amber-400/50 focus:bg-emerald-500/10 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="text-white font-medium text-sm block mb-1">Service Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:border-amber-400/50 focus:bg-emerald-500/10 outline-none transition"
                    >
                      <option value="" className="text-slate-900">Select a service</option>
                      <option value="ticket" className="text-slate-900">Ticket Booking</option>
                      <option value="visa" className="text-slate-900">Visa Processing</option>
                      <option value="tour" className="text-slate-900">Tour Package</option>
                      <option value="hajj" className="text-slate-900">Hajj & Umrah</option>
                      <option value="hotel" className="text-slate-900">Hotel Booking</option>
                      <option value="manpower" className="text-slate-900">Manpower</option>
                      <option value="medical" className="text-slate-900">Medical Service</option>
                      <option value="saudi" className="text-slate-900">Saudi Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-white font-medium text-sm block mb-1">Message *</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-teal-200/40 focus:border-amber-400/50 focus:bg-emerald-500/10 outline-none transition resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold py-3.5 rounded-2xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message <FaArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-0 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 bottom-[-100px] h-[300px] w-[300px] rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -right-32 top-[-100px] h-[300px] w-[300px] rounded-full bg-amber-400/10 blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-amber-500/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.098!2d90.415!3d23.735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f1e5c5e5e5%3A0x5e5e5e5e5e5e5e5e!2sMotijheel%20C%2FA%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>
    </main>
  );
}