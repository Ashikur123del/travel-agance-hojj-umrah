"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaMoneyBillAlt,
  FaPassport,
  FaPlane,
  FaUsers,
  FaHospital,
  FaFileAlt,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaStar,
  FaBuilding,
  FaShieldAlt,
  FaHands,
} from "react-icons/fa";
import ServiceHero from "../ServiceHero";


interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  highlight?: string;
}

interface WhyChooseItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}



const services: ServiceItem[] = [
  {
    icon: FaPassport,
    title: "Saudi Visa Services",
    desc: "Tourist, business, work, and family visit visas for Saudi Arabia. Complete document assistance and application support.",
    highlight: "95% Approval Rate",
  },
  {
    icon: FaPlane,
    title: "Saudi Ticket Support",
    desc: "Best flight options to Saudi Arabia from Bangladesh with competitive fares on Biman, Saudia, Emirates, and more.",
    highlight: "Best Fares",
  },
  {
    icon: FaUsers,
    title: "Saudi Manpower Support",
    desc: "Worker placement, document processing, and employment coordination for Saudi job opportunities across all sectors.",
    highlight: "100+ Workers Placed",
  },
  {
    icon: FaHospital,
    title: "Saudi Medical Support",
    desc: "Complete medical test guidance and health documentation required for Saudi visas and work permits.",
    highlight: "Authorized Clinics",
  },
  {
    icon: FaFileAlt,
    title: "Saudi Document Processing",
    desc: "Complete document attestation, verification, and legalization for all Saudi visa and employment applications.",
    highlight: "Fast Processing",
  },
  {
    icon: FaMoneyBillAlt,
    title: "Hajj & Umrah Support",
    desc: "Complete Hajj and Umrah services for Saudi Arabia – visa, flights, hotels, transport, and Ziyarah support.",
    highlight: "500+ Pilgrims Served",
  },
];

// কেন আমাদের বেছে নেবেন
const whyChoose: WhyChooseItem[] = [
  { icon: FaShieldAlt, label: "Authorized Agent" },
  { icon: FaHands, label: "Transparent Process" },
  { icon: FaStar, label: "4.9/5 Rating" },
  { icon: FaBuilding, label: "Saudi Embassy Approved" },
];

// বুকিং ধাপ
const steps: string[] = [
  "Contact us with your requirements",
  "We provide a tailored solution",
  "Complete documentation and application",
  "Track status with our support team",
  "Receive your Saudi visa/services",
];

export default function SaudiAllServicesPage() {
  return (
    <main>
      <ServiceHero
        title="Saudi All Services"
        subtitle="Saudi Services"
        icon={<FaMoneyBillAlt />}
        description="Complete Saudi Arabia services – visa processing, ticket booking, manpower support, medical documentation, and Hajj & Umrah packages. Your one-stop solution for all Saudi travel and employment needs."
        bgImage="https://images.pexels.com/photos/36573970/pexels-photo-36573970/free-photo-of-pilgrims-gather-around-the-kaaba-in-mecca.jpeg?h=1000&w=1500&fit=crop"
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Complete{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Saudi Solution
              </span>
            </h2>
            <p className="mt-4 text-teal-100/80 text-lg leading-relaxed">
              Whether you are planning a pilgrimage, a business trip, or a new
              career in Saudi Arabia – we provide comprehensive services to make
              your journey smooth and successful. Our expert team handles every
              detail with professionalism and care.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-teal-200/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> 1000+ Visas Processed
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-amber-400" /> Fast Processing
              </span>
              <span className="flex items-center gap-2">
                <FaBuilding className="text-amber-400" /> Saudi Embassy Approved
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
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
                  transition={{ delay: idx * 0.06 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/50 transition-all group flex flex-col"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-teal-100/60 text-sm mt-1 flex-1">{item.desc}</p>
                  {item.highlight && (
                    <span className="mt-2 inline-block bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-0.5 text-amber-400 text-xs font-medium">
                      ✨ {item.highlight}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
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

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            How to{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Get Started
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">1000+</div>
              <h4 className="text-white font-bold">Visas Processed</h4>
              <p className="text-teal-100/60 text-sm mt-1">Since 2026</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">12+</div>
              <h4 className="text-white font-bold">Services Offered</h4>
              <p className="text-teal-100/60 text-sm mt-1">For Saudi Arabia</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">98%</div>
              <h4 className="text-white font-bold">Success Rate</h4>
              <p className="text-teal-100/60 text-sm mt-1">Visa applications</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/40 transition-all">
              <h4 className="text-white font-bold text-lg mb-3">📋 Visa Types</h4>
              <ul className="space-y-2 text-sm text-teal-100/70">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-amber-400 w-4 h-4" /> Tourist Visa
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-amber-400 w-4 h-4" /> Business Visa
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-amber-400 w-4 h-4" /> Work Visa / Employment
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-amber-400 w-4 h-4" /> Family Visit Visa
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-amber-400 w-4 h-4" /> Hajj & Umrah Visa
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/40 transition-all">
              <h4 className="text-white font-bold text-lg mb-3">✅ Why Saudi Arabia?</h4>
              <ul className="space-y-2 text-sm text-teal-100/70">
                <li className="flex items-center gap-2">
                  <FaStar className="text-amber-400 w-4 h-4" /> Growing economy & job market
                </li>
                <li className="flex items-center gap-2">
                  <FaStar className="text-amber-400 w-4 h-4" /> Vision 2030 opportunities
                </li>
                <li className="flex items-center gap-2">
                  <FaStar className="text-amber-400 w-4 h-4" /> Competitive salaries
                </li>
                <li className="flex items-center gap-2">
                  <FaStar className="text-amber-400 w-4 h-4" /> Tax-free income
                </li>
                <li className="flex items-center gap-2">
                  <FaStar className="text-amber-400 w-4 h-4" /> Modern infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/80 via-teal-900/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Saudi Journey?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg">
              Contact us today for a free consultation and let us handle all your Saudi service needs.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
              >
                Get Started <FaArrowRight className="w-4 h-4" />
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