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
import ServiceHero from "../ServiceHero";

interface HotelFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface HotelCategory {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  desc: string;
  color: string;
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
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: FaBuilding,
    label: "Standard",
    desc: "Great value hotels with all essential amenities for families and couples.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: FaStar,
    label: "Premium",
    desc: "Upgraded rooms, better locations, and extra services for a comfortable stay.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: FaStar,
    label: "Luxury",
    desc: "5-star resorts and boutique hotels with world-class facilities and services.",
    color: "from-purple-400 to-pink-500",
  },
];


const steps: string[ ] = [
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
    <main>
      <ServiceHero
        title="Hotel Booking"
        subtitle="Hotel Services"
        icon={<FaHotel />}
        description="Book comfortable stays anywhere in the world. From budget hostels to luxury resorts – we find the perfect accommodation for your trip at the best prices."
        bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Stay,{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Perfectly Planned
              </span>
            </h2>
            <p className="mt-4 text-teal-100/80 text-lg leading-relaxed">
              We partner with 100+ hotels worldwide to bring you the best
              accommodation options. Whether you are traveling for leisure,
              business, or with family – we have the right stay for you.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-teal-200/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> 100+ Hotels
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-amber-400" /> Instant Booking
              </span>
              <span className="flex items-center gap-2">
                <FaGlobe className="text-amber-400" /> 30+ Countries
              </span>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Hotel Service
            </span>
          </h2>
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-teal-100/70 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Hotel{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
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
                  className={`bg-gradient-to-br ${cat.color} bg-opacity-10 border border-white/10 rounded-2xl p-6 text-center hover:shadow-xl transition-all group`}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-xl">{cat.label}</h4>
                  <p className="text-teal-100/70 text-sm mt-2">{cat.desc}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-block bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-2 rounded-xl transition-all text-sm border border-white/20"
                  >
                    Book Now
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            How to{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Book
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:border-amber-400/40 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-teal-100/80 text-sm font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Popular{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {destinations.map((dest, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.02 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-teal-100/70 text-sm hover:border-amber-400/40 transition-all"
              >
                {dest.name} <span className="text-teal-200/30 text-xs">({dest.country})</span>
              </motion.span>
            ))}
          </div>
          <p className="mt-6 text-center text-teal-200/40 text-sm">
            * We offer hotels in many more destinations – contact us for personalized options.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">100+</div>
              <h4 className="text-white font-bold">Hotels</h4>
              <p className="text-teal-100/60 text-sm mt-1">In our network</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">30+</div>
              <h4 className="text-white font-bold">Countries</h4>
              <p className="text-teal-100/60 text-sm mt-1">Worldwide coverage</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">99%</div>
              <h4 className="text-white font-bold">Satisfaction</h4>
              <p className="text-teal-100/60 text-sm mt-1">Happy guests</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Common Hotel{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Amenities
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
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
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 flex items-center gap-2 hover:border-amber-400/40 transition-all"
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span className="text-teal-100/70 text-sm">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/80 via-teal-900/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Find Your{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Perfect Stay?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg">
              Tell us your dates and preferences – we will find the best hotel for you.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
              >
                Book Now <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                View All Services →
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-teal-200/50">
              <span className="flex items-center gap-2">
                <FaPhone className="text-amber-400" /> +880 1884-694337
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-amber-400" /> akinaitravelsbd@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}