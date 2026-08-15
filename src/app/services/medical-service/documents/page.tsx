"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  FaFileAlt,
  FaCheckCircle,
  FaArrowRight,
  FaStethoscope,
  FaSyringe,
  FaHeartbeat,
  FaMicroscope,
  FaClipboardList,
  FaClock,
  FaGlobe,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import ServiceHero from "../../ServiceHero";

// Medical Document Item
export interface MedicalDocumentItem {
  title: string;
  desc: string;
  icon?: ComponentType<{ className?: string }>;
}

// Medical Document Step
export type MedicalDocumentStep = string;

// Medical Document Service
export interface MedicalDocumentService {
  icon: ComponentType<{ className?: string }>;
  label: string;
}

const documents: MedicalDocumentItem[] = [
  {
    title: "Medical Test Report",
    desc: "Complete medical test reports from authorized clinics and hospitals. Includes blood tests, X-rays, and physical examinations.",
  },
  {
    title: "Vaccination Certificate",
    desc: "Verified vaccination certificates required for travel and visa. Includes COVID-19, Yellow Fever, and other required vaccines.",
  },
  {
    title: "Health Declaration Form",
    desc: "Health declaration forms for visa and immigration purposes. Confirms you have no contagious diseases.",
  },
  {
    title: "Medical Insurance",
    desc: "Travel medical insurance documents and policy verification. Ensures you are covered during your stay abroad.",
  },
];

// প্রসেসিং স্টেপ
const steps: MedicalDocumentStep[] = [
  "Consult with our medical team",
  "Complete required tests at partner clinics",
  "Collect all test results and certificates",
  "Verify documents with doctors",
  "Submit verified documents to authorities",
  "Receive confirmation and clearance",
];

// আমরা কী করি
const services: MedicalDocumentService[] = [
  { icon: FaStethoscope, label: "Schedule medical appointments" },
  { icon: FaSyringe, label: "Arrange vaccinations" },
  { icon: FaHeartbeat, label: "Collect test results" },
  { icon: FaMicroscope, label: "Verify documents with doctors" },
  { icon: FaClipboardList, label: "Submit to embassies/employers" },
  { icon: FaClock, label: "Track processing status" },
];

export default function MedicalDocumentsPage() {
  return (
    <main className="bg-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <ServiceHero
        title="Medical Documents"
        subtitle="Medical Services"
        icon={<FaFileAlt />}
        description="Complete medical documentation support – from test reports and vaccination certificates to health declarations and insurance verification. We ensure all your health paperwork is complete and compliant."
        bgImage="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80"
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
                Health Paperwork
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Your Health{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Documents, Simplified
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-500 md:text-lg">
              Medical documentation is one of the most critical parts of visa
              and travel preparation. We guide you through every step – from
              scheduling tests to verifying reports – so that your documents
              meet all requirements without any hassle.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaCheckCircle className="text-emerald-500" /> 100% Compliant
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaClock className="text-amber-500" /> Fast Turnaround
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FaGlobe className="text-sky-500" /> 20+ Partner Clinics
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          REQUIRED DOCUMENTS LIST
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, index) => (
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
                    <FaCheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {doc.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCUMENT PROCESSING STEPS
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Simple Workflow
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              How We{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Process Your Documents
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

  
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Our Services
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              What We{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="group rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 border border-amber-100 transition-transform group-hover:scale-110 mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-700 leading-snug">
                    {service.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 border-b border-slate-100">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-amber-300 hover:shadow-xl"
            >
              <div className="text-4xl font-extrabold text-amber-500 mb-2">20+</div>
              <h4 className="text-lg font-bold text-slate-900">Partner Clinics</h4>
              <p className="text-sm text-slate-500 mt-1">Nationwide network</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-amber-300 hover:shadow-xl"
            >
              <div className="text-4xl font-extrabold text-amber-500 mb-2">100%</div>
              <h4 className="text-lg font-bold text-slate-900">Document Accuracy</h4>
              <p className="text-sm text-slate-500 mt-1">Approval guaranteed</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-amber-300 hover:shadow-xl"
            >
              <div className="text-4xl font-extrabold text-amber-500 mb-2">24h</div>
              <h4 className="text-lg font-bold text-slate-900">Fast Processing</h4>
              <p className="text-sm text-slate-500 mt-1">Quick turnaround time</p>
            </motion.div>
          </div>
        </div>
      </section>

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
              Ready to Get Your{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Medical Documents?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
              We make medical documentation quick and hassle-free. Contact us to get started.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-amber-500/20 transition-all hover:from-amber-600 hover:to-orange-600"
              >
                Get Started <FaArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/medical-service"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:text-amber-600"
              >
                Back to Medical Service →
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