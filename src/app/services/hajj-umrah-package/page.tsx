"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaMosque,
  FaPlane,
  FaHotel,
  FaBus,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaStar,
  FaHands,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";
import ServiceHero from "../ServiceHero";



interface PackageDetail {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  price: string;
  inclusions: string[];
  highlight: string; 
}

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

type Step = string;


const hajjPackage: PackageDetail = {
  title: "Hajj Package",
  icon: FaMosque,
  duration: "15-20 Days",
  price: "$3,500 – $5,500",
  highlight: "Premium tents in Mina & Arafat",
  inclusions: [
    "Visa processing",
    "Return airfare (Dhaka – Jeddah)",
    "Accommodation in Makkah (5-star, near Haram)",
    "Accommodation in Madinah (5-star, near Masjid)",
    "Camps in Mina & Arafat (air-conditioned)",
    "Transport between holy sites",
    "Group Ziyarah tours",
    "24/7 on-ground support",
  ],
};


const umrahPackage: PackageDetail = {
  title: "Umrah Package",
  icon: FaMosque,
  duration: "7-14 Days",
  price: "$1,200 – $2,500",
  highlight: "Flexible departure dates",
  inclusions: [
    "Visa processing",
    "Return airfare (Dhaka – Jeddah)",
    "Accommodation in Makkah (4-star, near Haram)",
    "Accommodation in Madinah (4-star, near Masjid)",
    "Transport between cities",
    "Optional Ziyarah tours",
    "24/7 on-ground support",
  ],
};

// Services
const services: ServiceItem[] = [
  {
    icon: FaMosque,
    title: "Complete Hajj & Umrah Packages",
    desc: "End-to-end packages covering visa, flights, hotels, transport, and spiritual guidance.",
  },
  {
    icon: FaPlane,
    title: "Ticket Support",
    desc: "Best flight options from Bangladesh with convenient connections and competitive fares.",
  },
  {
    icon: FaHotel,
    title: "Hotel Support",
    desc: "Premium and comfortable hotels within walking distance of Haram in Makkah and Masjid in Madinah.",
  },
  {
    icon: FaBus,
    title: "Transport Support",
    desc: "Comfortable, air-conditioned transport between cities and holy sites with experienced drivers.",
  },
  {
    icon: FaClock,
    title: "Ziyarah Support",
    desc: "Guided tours of holy sites in Makkah (Cave of Hira, Arafat) and Madinah (Uhud, Quba Mosque).",
  },
  {
    icon: FaUserTie,
    title: "Expert Guidance",
    desc: "Experienced religious scholars and guides accompany groups for spiritual and logistical support.",
  },
];

// Why Choose Us
const whyChoose = [
  { icon: FaShieldAlt, label: "10+ Years Experience" },
  { icon: FaHands, label: "Ethical & Transparent" },
  { icon: FaStar, label: "5-Star Rated Packages" },
  { icon: FaUsers, label: "500+ Pilgrims Served" },
];

// Booking Steps
const steps: Step[] = [
  "Choose your package (Hajj or Umrah)",
  "Select departure date and group size",
  "Complete visa application",
  "Make payment and confirm booking",
  "Receive travel documents and pre‑departure briefing",
];

// ---------- Component ----------
export default function HajjUmrahPage() {
  return (
    <main>
      <ServiceHero
        title="Hajj and Umrah Package"
        subtitle="Hajj & Umrah Services"
        icon={<FaMosque />}
        description="Complete Hajj and Umrah packages with visa, ticket, hotel, transport, and Ziyarah support. Our expert team ensures a spiritually enriching and hassle‑free pilgrimage."
        bgImage="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/The_Kaaba_during_Hajj.jpg/960px-The_Kaaba_during_Hajj.jpg" 
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Spiritual{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="mt-4 text-teal-100/80 text-lg leading-relaxed">
              We understand the profound significance of Hajj and Umrah. Our
              packages are designed to provide comfort, convenience, and a deep
              spiritual experience – so you can focus on worship and connection
              with Allah.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-teal-200/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> 500+ Pilgrims Served
              </span>
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-amber-400" /> 10+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <FaStar className="text-amber-400" /> 5-Star Rated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hajj & Umrah Package Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Hajj Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/50 transition-all group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <FaMosque className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl group-hover:text-amber-400 transition-colors">
                    Hajj Package
                  </h3>
                  <p className="text-amber-400 text-sm font-semibold">{hajjPackage.price}</p>
                </div>
              </div>
              {/* ✅ Fixed separator – no hydration mismatch */}
              <p className="text-teal-100/70 text-sm mb-3 flex flex-wrap items-center gap-x-2">
                <span><span className="font-bold">Duration:</span> {hajjPackage.duration}</span>
                <span className="text-teal-200/40">|</span>
                <span><span className="font-bold">Highlight:</span> {hajjPackage.highlight}</span>
              </p>
              <ul className="space-y-2 text-sm text-teal-100/70 flex-1">
                {hajjPackage.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-4 w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold py-2.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all text-sm"
              >
                Book Hajj Package
              </Link>
            </motion.div>

            {/* Umrah Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/50 transition-all group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <FaMosque className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl group-hover:text-amber-400 transition-colors">
                    Umrah Package
                  </h3>
                  <p className="text-amber-400 text-sm font-semibold">{umrahPackage.price}</p>
                </div>
              </div>
              {/* ✅ Fixed separator – no hydration mismatch */}
              <p className="text-teal-100/70 text-sm mb-3 flex flex-wrap items-center gap-x-2">
                <span><span className="font-bold">Duration:</span> {umrahPackage.duration}</span>
                <span className="text-teal-200/40">|</span>
                <span><span className="font-bold">Highlight:</span> {umrahPackage.highlight}</span>
              </p>
              <ul className="space-y-2 text-sm text-teal-100/70 flex-1">
                {umrahPackage.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-4 w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold py-2.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all text-sm"
              >
                Book Umrah Package
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-teal-100/60 text-sm mt-1">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {whyChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:border-amber-400/40 transition-all group"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <p className="text-teal-100/80 text-sm font-medium">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
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

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">500+</div>
              <h4 className="text-white font-bold">Pilgrims Served</h4>
              <p className="text-teal-100/60 text-sm mt-1">Since 2026</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">10+</div>
              <h4 className="text-white font-bold">Years Experience</h4>
              <p className="text-teal-100/60 text-sm mt-1">In Hajj & Umrah</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">99%</div>
              <h4 className="text-white font-bold">Satisfaction Rate</h4>
              <p className="text-teal-100/60 text-sm mt-1">From our pilgrims</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/80 via-teal-900/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready for Your{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Spiritual Journey?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg">
              Let us help you fulfill your dream of Hajj or Umrah with comfort and peace of mind.
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