"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaFileAlt,
  FaUserTie,
  FaClock,
  FaCheckCircle,
  FaGlobe,
  FaArrowRight,
  FaPassport,
  FaGraduationCap,
  FaStethoscope,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";
import ServiceHero from "../../ServiceHero";

const features = [
  {
    icon: FaBriefcase,
    title: "Work Visa Support",
    desc: "Complete work visa and work permit processing for various countries including Saudi Arabia, UAE, Malaysia, and more.",
  },
  {
    icon: FaFileAlt,
    title: "Document Processing",
    desc: "We help with all required documents – employment contracts, educational certificates, medical reports, and more.",
  },
  {
    icon: FaUserTie,
    title: "Employer/Sponsor Coordination",
    desc: "We coordinate with employers and sponsors to ensure smooth hiring and contract signing.",
  },
  {
    icon: FaClock,
    title: "Quick Processing",
    desc: "Fast and reliable processing with regular status updates and dedicated support.",
  },
];

const documents = [
  { icon: FaPassport, label: "Valid Passport (6+ months validity)" },
  { icon: FaFileAlt, label: "Employment Contract (signed)" },
  { icon: FaGraduationCap, label: "Educational Certificates (attested)" },
  { icon: FaStethoscope, label: "Medical Fitness Report" },
  { icon: FaShieldAlt, label: "Police Clearance Certificate" },
  { icon: FaUserTie, label: "Passport-size Photos (4 copies)" },
];

const steps = [
  "Collect and verify all documents",
  "Attest educational & professional certificates",
  "Prepare and submit visa application",
  "Schedule medical examination",
  "Track embassy processing",
  "Receive work permit & stamping",
];

const countries = [
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Malaysia",
  "Singapore",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Kuwait",
  "Bahrain",
  "Oman",
];

const sectors = [
  "Construction & Engineering",
  "Healthcare & Nursing",
  "Information Technology",
  "Hospitality & Tourism",
  "Manufacturing",
  "Oil & Gas",
  "Education",
  "Retail",
];

export default function WorkPermitPage() {
  return (
    <main className="bg-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <ServiceHero
        title="Work Permit"
        subtitle="Visa Services"
        icon={<FaBriefcase />}
        description="Secure your international career with our comprehensive work permit and employment visa services. We handle the complex paperwork, liaise with employers and embassies, and ensure a smooth transition to your new job abroad."
        bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80"
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
                Work Permit
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Your Career{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-500 md:text-lg">
              Whether you are a skilled professional, a healthcare worker, or a
              construction expert – we help you get the right work permit for
              your dream job abroad. Our team ensures every document is perfect
              so your application gets approved without delays.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaCheckCircle className="text-emerald-500" /> 95% Success Rate
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaClock className="text-amber-500" /> 2-6 Weeks Processing
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaGlobe className="text-sky-500" /> 12+ Countries
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FEATURES SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Key Features
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Work Permit Service
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
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
          REQUIRED DOCUMENTS
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Checklist
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Required{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Documents
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 border border-amber-100 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Step by Step
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Processing{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Steps
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 font-extrabold text-amber-600 text-base">
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
          COUNTRIES WE COVER
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Global Network
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Countries We{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Cover
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {countries.map((country, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="cursor-default rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-amber-300 hover:text-amber-600 hover:shadow-md"
              >
                {country}
              </motion.span>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-slate-400 max-w-xl mx-auto">
            * Work permit availability depends on your qualifications and employer sponsorship. Contact us for a free eligibility check.
          </p>
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
                Industries
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

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {sectors.map((sector, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="cursor-default rounded-xl border border-amber-200 bg-amber-50/50 px-5 py-2.5 text-sm font-bold text-amber-700 shadow-sm transition-all hover:border-amber-400 hover:bg-amber-100"
              >
                {sector}
              </motion.span>
            ))}
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
              <h4 className="text-lg font-bold text-slate-900">Success Rate</h4>
              <p className="text-sm text-slate-500 mt-1">Our applications get approved</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-amber-300 hover:shadow-xl"
            >
              <div className="text-4xl font-extrabold text-amber-500 mb-2">500+</div>
              <h4 className="text-lg font-bold text-slate-900">Workers Placed</h4>
              <p className="text-sm text-slate-500 mt-1">Successfully placed overseas</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-amber-300 hover:shadow-xl"
            >
              <div className="text-4xl font-extrabold text-amber-500 mb-2">12+</div>
              <h4 className="text-lg font-bold text-slate-900">Countries</h4>
              <p className="text-sm text-slate-500 mt-1">Global network of employers</p>
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
                Work Permit Journey?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
              Contact us today for a free consultation and get your work permit processed smoothly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-amber-500/20 transition-all hover:from-amber-600 hover:to-orange-600"
              >
                Apply Now <FaArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/visa-processing"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:text-amber-600"
              >
                View All Visa Services →
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-2">
              <FaHandshake className="text-amber-500" /> Free eligibility check in 5 minutes
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}