"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHotel,
  FaDollarSign,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaClock,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaBed,
  FaUtensils,
  FaSwimmingPool,
  FaWifi,
  FaParking,
} from "react-icons/fa";
import ServiceHero from "./ServiceHero";


interface HotelFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface HotelCategory {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  desc: string;
  gradient: string;
}

interface Destination {
  name: string;
  country: string;
}

const features: HotelFeature[] = [
  {
    icon: FaHotel,
    title: "Local & International Booking",
    desc: "Book hotels in Bangladesh and 30+ countries worldwide with the best rates.",
  },
  {
    icon: FaDollarSign,
    title: "All Budget Options",
    desc: "We offer budget, standard, premium, and luxury hotels to suit every pocket.",
  },
  {
    icon: FaUsers,
    title: "Family & Group Booking",
    desc: "Special discounts and arrangements for families, corporate groups, and large parties.",
  },
  {
    icon: FaCheckCircle,
    title: "Instant Confirmation",
    desc: "Get your booking confirmed immediately with real-time availability and e-voucher.",
  },
];

const categories: HotelCategory[] = [
  {
    icon: FaBed,
    label: "Budget",
    desc: "Clean, comfortable, and affordable stays for backpackers and solo travelers.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: FaBuilding,
    label: "Standard",
    desc: "Great value hotels with all essential amenities for families and couples.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaStar,
    label: "Premium",
    desc: "Upgraded rooms, better locations, and extra services for a comfortable stay.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: FaStar,
    label: "Luxury",
    desc: "5-star resorts and boutique hotels with world-class facilities and services.",
    gradient: "from-purple-500 to-violet-500",
  },
];

const steps: string[] = [
  "Tell us your destination and dates",
  "We find the best available options",
  "Compare prices and amenities",
  "Confirm your booking with us",
  "Receive instant confirmation voucher",
];

const destinations: Destination[] = [
  { name: "Cox's Bazar", country: "Bangladesh" },
  { name: "Dhaka", country: "Bangladesh" },
  { name: "Bangkok", country: "Thailand" },
  { name: "Singapore", country: "Singapore" },
  { name: "Kuala Lumpur", country: "Malaysia" },
  { name: "Dubai", country: "UAE" },
  { name: "Istanbul", country: "Turkey" },
  { name: "London", country: "UK" },
];

export default function HotelBookingPage() {
  return (
    <main className="bg-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <ServiceHero
        title="Hotel Booking"
        subtitle="Hotel Services"
        icon={<FaHotel />}
        description="Book comfortable stays anywhere in the world. From budget hostels to luxury resorts – we find the perfect accommodation for your trip at the best prices."
        bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
      />

      {/* =====================================================
          OVERVIEW SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="absolute bottom-[-200px] left-1/3 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(99,102,241,0.08),transparent_30%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Hospitality
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Your Stay,{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Perfectly Planned
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
              We partner with 100+ hotels worldwide to bring you the best
              accommodation options. Whether you are traveling for leisure,
              business, or with family – we have the right stay for you.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaCheckCircle className="text-emerald-500" /> 100+ Hotels
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaClock className="text-amber-500" /> Instant Booking
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaGlobe className="text-sky-500" /> 30+ Countries
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE OUR HOTEL SERVICE
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Key Benefits
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Hotel Service
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-md text-white transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-amber-600">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOTEL CATEGORIES
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Accommodation Types
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Hotel{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Categories
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div>
                    <div
                      className={`relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h4 className="text-center text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-amber-600">
                      {cat.label}
                    </h4>
                    <p className="mt-2 text-center text-sm leading-relaxed text-slate-500">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      href="/contact"
                      className="inline-block rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-2.5 text-xs font-bold text-slate-900 shadow-md shadow-amber-500/20 transition-all duration-300 hover:from-amber-400 hover:to-orange-400"
                    >
                      Book Now
                    </Link>
                  </div>

                  {/* Bottom Highlight Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${cat.gradient} transition-all duration-300 group-hover:w-full`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW TO BOOK
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Simple Process
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              How to{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Book
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center text-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-extrabold text-amber-600 text-sm mb-3 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  {index + 1}
                </div>
                <p className="text-xs font-semibold leading-relaxed text-slate-700">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          POPULAR DESTINATIONS
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Top Picks
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Popular{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {destinations.map((dest, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-amber-400 hover:text-amber-600 hover:shadow-md cursor-default"
              >
                {dest.name} <span className="text-xs font-normal text-slate-400">({dest.country})</span>
              </motion.span>
            ))}
          </div>

          <p className="mt-8 text-center text-xs font-medium text-slate-400">
            * We offer hotels in many more destinations – contact us for personalized options.
          </p>
        </div>
      </section>

      {/* =====================================================
          STATS SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div className="text-4xl font-extrabold text-amber-500 mb-2">100+</div>
              <h4 className="text-lg font-bold text-slate-900">Hotels</h4>
              <p className="text-sm text-slate-500 mt-1">In our network</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div className="text-4xl font-extrabold text-amber-500 mb-2">30+</div>
              <h4 className="text-lg font-bold text-slate-900">Countries</h4>
              <p className="text-sm text-slate-500 mt-1">Worldwide coverage</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div className="text-4xl font-extrabold text-amber-500 mb-2">99%</div>
              <h4 className="text-lg font-bold text-slate-900">Satisfaction</h4>
              <p className="text-sm text-slate-500 mt-1">Happy guests</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMON AMENITIES
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Included Features
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Common Hotel{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Amenities
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              { icon: FaWifi, label: "Free Wi-Fi" },
              { icon: FaUtensils, label: "Restaurant" },
              { icon: FaSwimmingPool, label: "Swimming Pool" },
              { icon: FaParking, label: "Parking" },
              { icon: FaBed, label: "Comfortable Beds" },
              { icon: FaBuilding, label: "24/7 Reception" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-md"
                >
                  <Icon className="h-4 w-4 text-amber-500" />
                  <span className="text-xs font-bold text-slate-700">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg md:p-12"
          >
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
              Get Started
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Ready to Find Your{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Perfect Stay?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
              Tell us your dates and preferences – we will find the best hotel for you.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3.5 font-bold text-slate-900 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:from-amber-400 hover:to-orange-400"
              >
                Book Now <FaArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:text-amber-600"
              >
                View All Services →
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-slate-500 border-t border-slate-100 pt-6">
              <span className="flex items-center gap-2">
                <FaPhone className="text-amber-500" /> +880 1884-694337
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-amber-500" /> akinaitravelsbd@gmail.com
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}