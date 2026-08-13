"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaPassport,
  FaCamera,
  FaUniversity,
  FaPlane,
  FaHotel,
  FaCheckCircle,
  FaClock,
  FaGlobe,
  FaDollarSign,
  FaHeadset,
  FaArrowRight,
  FaFileAlt,
  FaUserTie,
} from "react-icons/fa";
import ServiceHero from "../../ServiceHero";


// Required Documents
const documents = [
  { icon: FaPassport, label: "Valid Passport (6+ months validity)" },
  { icon: FaCamera, label: "Recent Passport-size Photo (2 copies)" },
  { icon: FaUniversity, label: "Bank Statement (last 3 months)" },
  { icon: FaUserTie, label: "NID / Birth Certificate" },
  { icon: FaPlane, label: "Return Flight Ticket Booking" },
  { icon: FaHotel, label: "Hotel Booking Confirmation" },
];

// Processing Steps
const steps = [
  "Collect client documents",
  "Check document validity & completeness",
  "Prepare & review application",
  "Submit visa application to embassy",
  "Track processing status",
  "Deliver visa result to client",
];

// Countries supported (example)
const countries = [
  "Thailand",
  "Singapore",
  "Malaysia",
  "Turkey",
  "UAE",
  "Saudi Arabia",
  "UK",
  "USA",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Switzerland",
  "Japan",
  "South Korea",
];

export default function TouristVisaPage() {
  return (
    <main>
      {/* ✅ সঠিক ServiceHero – Tourist Visa */}
      <ServiceHero
        title="Tourist Visa Processing"
        subtitle="Visa Services"
        icon={<FaPassport />}
        description="Country-wise tourist visa support with complete document assistance, fast processing, and a 98% success rate. We handle the paperwork so you can focus on your journey."
        bgImage="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?w=1920&q=80"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Gateway to the{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                World
              </span>
            </h2>
            <p className="mt-4 text-teal-100/80 text-lg leading-relaxed">
              Planning a leisure trip abroad? We simplify the visa application process
              so you can travel stress-free. From document collection to embassy submission,
              our expert team handles every step with care and precision.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-teal-200/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> 98% Success Rate
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-amber-400" /> Fast Processing
              </span>
              <span className="flex items-center gap-2">
                <FaGlobe className="text-amber-400" /> 30+ Countries
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Required <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Documents</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-amber-400/40 transition-all group"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <p className="text-teal-100/80 text-sm font-medium">{doc.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processing Steps */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Processing <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Steps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
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

      {/* Countries We Support */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Countries We{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Support</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {countries.map((country, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.02 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-teal-100/70 text-sm hover:border-amber-400/40 transition-all"
              >
                {country}
              </motion.span>
            ))}
          </div>
          <p className="mt-6 text-center text-teal-200/40 text-sm">
            * Visa availability depends on your nationality and travel purpose. Contact us for a free eligibility check.
          </p>
        </div>
      </section>

      {/* Why Choose Us – Visa-specific */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Visa Service
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: FaCheckCircle,
                title: "98% Success Rate",
                desc: "Our expertise and meticulous document checking ensure the highest approval rate.",
              },
              {
                icon: FaClock,
                title: "Quick Turnaround",
                desc: "We process most visas within 5-10 working days, depending on the embassy.",
              },
              {
                icon: FaDollarSign,
                title: "Competitive Fees",
                desc: "Transparent pricing with no hidden charges – affordable for every budget.",
              },
              {
                icon: FaHeadset,
                title: "24/7 Support",
                desc: "Our team is available round‑the‑clock to answer your queries and updates.",
              },
              {
                icon: FaFileAlt,
                title: "Document Assistance",
                desc: "We guide you on every document – from photographs to bank statements.",
              },
              {
                icon: FaGlobe,
                title: "Global Network",
                desc: "We have strong relationships with embassies and consulates worldwide.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all group"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-amber-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-teal-100/60 text-sm mt-1">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/80 via-teal-900/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Apply for Your{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Tourist Visa?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg">
              Contact us today for a free consultation and get your visa processed smoothly.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
              >
                Start Application <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/visa-processing"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                View All Visa Services →
              </Link>
            </div>
            <p className="mt-4 text-teal-200/30 text-sm">
              ⏱️ Free eligibility check in 5 minutes
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}