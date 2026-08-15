"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaBriefcase,
  FaHandshake,
  FaCheckCircle,
  FaUsers,
  FaClock,
  FaGlobe,
  FaArrowRight,
  FaBuilding,
  FaTools,
  FaHeartbeat,
  FaLaptop,
  FaUtensils,
  FaOilCan,
  FaChalkboardTeacher,
  FaShoppingCart,
} from "react-icons/fa";
import ServiceHero from "../../ServiceHero";

const services = [
  {
    icon: FaFileAlt,
    title: "Worker Document Processing",
    desc: "Complete documentation services for workers including contract verification, medical checks, and document attestation. We ensure every document meets international standards.",
  },
  {
    icon: FaBriefcase,
    title: "Overseas Job Placement",
    desc: "We connect skilled workers with international employers in various sectors – construction, healthcare, IT, and hospitality. Our network spans 12+ countries.",
  },
  {
    icon: FaHandshake,
    title: "Employer Coordination",
    desc: "We coordinate with employers to ensure smooth hiring, contract signing, and visa processing for workers. Our team handles all communication on your behalf.",
  },
  {
    icon: FaCheckCircle,
    title: "Pre-departure Support",
    desc: "Comprehensive pre-departure guidance including travel arrangements, insurance, and cultural orientation. We make sure you are fully prepared for your new journey.",
  },
];

const steps = [
  "Document collection & verification",
  "Medical examination & report",
  "Visa application & processing",
  "Contract signing & attestation",
  "Pre-departure training & orientation",
  "Travel arrangements & arrival support",
];

const sectors = [
  { icon: FaBuilding, label: "Construction & Infrastructure" },
  { icon: FaTools, label: "Manufacturing & Production" },
  { icon: FaHeartbeat, label: "Healthcare & Nursing" },
  { icon: FaLaptop, label: "Information Technology" },
  { icon: FaUtensils, label: "Hospitality & Tourism" },
  { icon: FaOilCan, label: "Oil & Gas" },
  { icon: FaChalkboardTeacher, label: "Education & Training" },
  { icon: FaShoppingCart, label: "Retail & Sales" },
];

export default function ManpowerDetailsPage() {
  return (
    <main className="bg-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <ServiceHero
        title="Manpower Details"
        subtitle="Manpower Services"
        icon={<FaUsers />}
        description="Detailed information about our comprehensive manpower services – from document processing and employer coordination to pre-departure support and overseas job placement."
        bgImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1920&q=80"
      />

      {/* =====================================================
          OVERVIEW SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-indigo-300/20 blur-3xl" />
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
                End-To-End Support
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Your Complete{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Manpower Solution
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-500 md:text-lg">
              We provide end-to-end manpower services that ensure a smooth and
              successful transition for workers seeking employment abroad. From
              document verification to pre-departure support, we are with you
              every step of the way.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaCheckCircle className="text-emerald-500" /> 95% Placement Rate
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaClock className="text-amber-500" /> 4-6 Weeks Processing
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaGlobe className="text-sky-500" /> 12+ Countries
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Key Offerings
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 border border-amber-100 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
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
          PROCESS STEPS SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Work Procedure
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-extrabold text-amber-600 text-sm">
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
          JOB SECTORS
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Industries We Cover
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Job{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Sectors
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {sectors.map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="group rounded-xl border border-amber-200 bg-amber-50/50 p-4 text-center shadow-sm transition-all hover:border-amber-400 hover:bg-amber-100"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-transform group-hover:scale-110 mb-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-bold text-amber-800 leading-tight">
                    {sector.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
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
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-amber-300 hover:shadow-xl"
            >
              <div className="text-4xl font-extrabold text-amber-500 mb-2">95%</div>
              <h4 className="text-lg font-bold text-slate-900">Placement Rate</h4>
              <p className="text-sm text-slate-500 mt-1">Workers successfully placed</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-amber-300 hover:shadow-xl"
            >
              <div className="text-4xl font-extrabold text-amber-500 mb-2">500+</div>
              <h4 className="text-lg font-bold text-slate-900">Workers Placed</h4>
              <p className="text-sm text-slate-500 mt-1">Since our inception</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-amber-300 hover:shadow-xl"
            >
              <div className="text-4xl font-extrabold text-amber-500 mb-2">100+</div>
              <h4 className="text-lg font-bold text-slate-900">Employer Partners</h4>
              <p className="text-sm text-slate-500 mt-1">Global companies we work with</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CALL TO ACTION SECTION
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
              Get Started Now
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Journey Abroad?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
              Contact us today for a free career consultation and get started on your international career.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-amber-500/20 transition-all hover:from-amber-600 hover:to-orange-600"
              >
                Apply Now <FaArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/manpower"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:text-amber-600"
              >
                Back to Manpower →
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-2">
              <FaHandshake className="text-amber-500" /> Free consultation with our experts
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}