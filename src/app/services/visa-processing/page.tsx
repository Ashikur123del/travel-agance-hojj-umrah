"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPassport,
  FaClock,
  FaFileAlt,
  FaHandshake,
  FaGlobe,
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import ServiceHero from "../ServiceHero";


const features = [
  {
    icon: FaPassport,
    title: "Tourist Visa Processing",
    desc: "Country-wise tourist visa support for all major destinations including USA, UK, Schengen, Canada, Australia, and more.",
    href: "/services/visa-processing/tourist-visa",
    color: "from-amber-500 to-orange-500",
    details: "Document checking, application submission, interview preparation",
  },
  {
    icon: FaHandshake,
    title: "Work Permit",
    desc: "Work visa and work permit support for various countries in the Middle East, Europe, Asia, and North America.",
    href: "/services/visa-processing/work-permit",
    color: "from-emerald-500 to-teal-500",
    details: "Employer coordination, contract verification, document attestation",
  },
  {
    icon: FaFileAlt,
    title: "Document Assistance",
    desc: "Complete help with required documents – passport validity, photos, bank statements, NID, birth certificates, and more.",
    href: "/services/visa-processing/tourist-visa",
    color: "from-blue-500 to-cyan-500",
    details: "Document checklist, verification, translation services",
  },
  {
    icon: FaClock,
    title: "Fast Processing",
    desc: "Quick and reliable processing with real-time tracking and timely delivery of your visa results.",
    href: "/services/visa-processing/tourist-visa",
    color: "from-purple-500 to-pink-500",
    details: "Expedited processing, priority service available",
  },
];


const stats = [
  { label: "Countries Served", value: "30+", icon: FaGlobe },
  { label: "Success Rate", value: "95%", icon: FaCheckCircle },
  { label: "Visas Processed", value: "2,500+", icon: FaUsers },
  { label: "Trust Score", value: "4.9/5", icon: FaShieldAlt },
];

export default function VisaProcessingPage() {
  return (
    <main>
     
      <ServiceHero     
        title="Visa Processing"
        subtitle="Visa Services"
        icon={<FaPassport />}
        description="Complete visa processing services – tourist visas, work permits, and all document assistance. High success rate with quick processing and real-time tracking."
        bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
      />

      <section className="py-12 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:border-amber-400/40 transition-all"
                >
                  <Icon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
                  <p className="text-teal-200/50 text-xs sm:text-sm font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Visa{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="mt-2 text-teal-100/70 text-lg max-w-2xl mx-auto">
              Comprehensive visa solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link href={item.href} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/50 transition-all group h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color}/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-7 h-7 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-teal-100/70 text-sm mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                        <p className="text-teal-200/40 text-xs mt-2">
                          🔹 {item.details}
                        </p>
                        <span className="text-amber-400 text-xs font-medium mt-3 inline-block group-hover:translate-x-1 transition-transform">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ভিসা প্রক্রিয়ার ধাপসমূহ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Visa Processing{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Steps
              </span>
            </h2>
            <p className="mt-2 text-teal-100/70 text-lg">
              Our simple 5-step process for visa processing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Collect Documents",
              "Verify Documents",
              "Submit Application",
              "Track Status",
              "Receive Result",
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:border-amber-400/40 transition-all"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/20 flex items-center justify-center mb-3">
                  <span className="text-amber-400 font-bold text-xl">{index + 1}</span>
                </div>
                <p className="text-teal-100/80 text-sm font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* যোগাযোগ ও সাহায্য */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ভিসা টিপস */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-4">💡 Visa Tips</h3>
              <ul className="space-y-3 text-teal-100/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Apply at least 4-6 weeks before your travel date.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Ensure your passport is valid for at least 6 months.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Check specific country requirements – some need extra documents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Keep digital and physical copies of all documents.</span>
                </li>
              </ul>
            </div>

            {/* যোগাযোগ */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-4">📞 Need Assistance?</h3>
              <p className="text-teal-100/70 text-sm mb-4">
                Our visa experts are ready to guide you through the entire process.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-teal-100/70">
                  <FaPhone className="text-amber-400" />
                  <span>880 1884-694337</span>
                </div>
                <div className="flex items-center gap-3 text-teal-100/70">
                  <FaEnvelope className="text-amber-400" />
                  <span>akinaitravelsbd@gmail.com</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all text-sm"
                >
                  Contact Us <FaArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/visa-processing/tourist-visa"
                  className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
                >
                  Tourist Visa →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}