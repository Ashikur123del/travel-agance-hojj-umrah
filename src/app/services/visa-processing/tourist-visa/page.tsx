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

// ===============================
// Required Documents
// ===============================
const documents = [
  {
    icon: FaPassport,
    label: "Valid Passport",
  },
  {
    icon: FaCamera,
    label: "Recent Passport-size Photo",
  },
  {
    icon: FaUniversity,
    label: "Bank Statement",
  },
  {
    icon: FaUserTie,
    label: "NID / Birth Certificate",
  },
  {
    icon: FaPlane,
    label: "Return Flight Booking",
  },
  {
    icon: FaHotel,
    label: "Hotel Booking Confirmation",
  },
];

// ===============================
// Processing Steps
// ===============================
const steps = [
  "Collect client documents",
  "Check document validity & completeness",
  "Prepare & review application",
  "Submit visa application",
  "Track processing status",
  "Deliver visa result to client",
];

// ===============================
// Supported Countries
// ===============================
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

// ===============================
// Why Choose Us
// ===============================
const whyChooseUs = [
  {
    icon: FaCheckCircle,
    title: "Expert Guidance",
    desc: "Professional guidance throughout the visa application process.",
  },
  {
    icon: FaClock,
    title: "Fast Processing",
    desc: "We help prepare your documents properly to avoid unnecessary delays.",
  },
  {
    icon: FaDollarSign,
    title: "Transparent Pricing",
    desc: "Clear service charges with no unnecessary hidden costs.",
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support",
    desc: "Get assistance and updates whenever you need them.",
  },
  {
    icon: FaFileAlt,
    title: "Document Assistance",
    desc: "We guide you through the required documents and application forms.",
  },
  {
    icon: FaGlobe,
    title: "Multiple Destinations",
    desc: "Tourist visa support for various popular travel destinations.",
  },
];

export default function TouristVisaPage() {
  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <ServiceHero
        title="Tourist Visa Processing"
        subtitle="Visa Services"
        icon={<FaPassport />}
        description="Complete tourist visa assistance with document guidance, application support, and professional consultation for your international journey."
        bgImage="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?w=1920&q=80"
      />

      {/* =====================================================
          OVERVIEW SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="absolute bottom-[-200px] left-1/3 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-3xl" />
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
                Tourist Visa
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Your Gateway to the{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                World
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-500 md:text-lg">
              Planning a leisure trip abroad? We make the tourist visa
              application process easier by helping you prepare documents,
              understand requirements, and complete your application properly.
            </p>

            {/* Features Pill */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaCheckCircle className="text-emerald-500" />
                Professional Assistance
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaClock className="text-amber-500" />
                Application Support
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaGlobe className="text-sky-500" />
                Multiple Countries
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          REQUIRED DOCUMENTS
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24 border-t border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Requirements
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Required{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Documents
              </span>
            </h2>

            <p className="mt-3 text-base text-slate-500">
              Prepare the necessary documents before starting your tourist visa application.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc, index) => {
              const Icon = doc.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 border border-amber-100 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {doc.label}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESSING STEPS
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Our Process
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Visa Processing{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Steps
              </span>
            </h2>

            <p className="mt-3 text-base text-slate-500">
              A simple and organized process from document collection to visa result.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 font-extrabold text-lg">
                  {index + 1}
                </div>

                <p className="text-sm font-semibold leading-relaxed text-slate-700">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COUNTRIES
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24 border-t border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Destinations
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Countries We{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Support
              </span>
            </h2>
          </div>

          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
            {countries.map((country, index) => (
              <motion.span
                key={country}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.03,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="cursor-default rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-amber-300 hover:text-amber-600 hover:shadow-md"
              >
                {country}
              </motion.span>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-400">
            Visa requirements and availability may vary depending on your
            nationality, destination, and travel purpose.
          </p>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Our Advantage
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Visa Service
              </span>
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 border border-amber-100 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24 border-t border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-8 text-center shadow-lg md:p-12"
          >
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
              Start Your Journey
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Ready to Apply for Your{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Tourist Visa?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
              Contact our team today for professional guidance and assistance
              with your tourist visa application.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-amber-500/20 transition-all hover:from-amber-600 hover:to-orange-600"
              >
                Start Application
                <FaArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services/visa-processing"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:text-amber-600"
              >
                View All Visa Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}