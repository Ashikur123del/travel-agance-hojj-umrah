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

// types/index.ts

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
    <main>
      <ServiceHero
        title="Medical Documents"
        subtitle="Medical Services"
        icon={<FaFileAlt />}
        description="Complete medical documentation support – from test reports and vaccination certificates to health declarations and insurance verification. We ensure all your health paperwork is complete and compliant."
        bgImage="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80"
      />

      {/* ওভারভিউ সেকশন */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Health{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Documents, Simplified
              </span>
            </h2>
            <p className="mt-4 text-teal-100/80 text-lg leading-relaxed">
              Medical documentation is one of the most critical parts of visa
              and travel preparation. We guide you through every step – from
              scheduling tests to verifying reports – so that your documents
              meet all requirements without any hassle.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-teal-200/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> 100% Compliant
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-amber-400" /> Fast Turnaround
              </span>
              <span className="flex items-center gap-2">
                <FaGlobe className="text-amber-400" /> 20+ Partner Clinics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ডকুমেন্ট লিস্ট */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Required{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Documents
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, index) => (
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
                    <FaCheckCircle className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-teal-100/70 text-sm mt-1">{doc.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ডকুমেন্ট প্রসেসিং স্টেপ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            How We{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Process Your Documents
            </span>
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

      {/* আমরা কী করি */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            What We{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-amber-400/10 to-orange-400/10 border border-amber-400/20 rounded-xl p-4 text-center hover:border-amber-400/50 transition-all group"
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-amber-400/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-teal-100/80 text-sm font-medium">{service.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* পরিসংখ্যান */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">20+</div>
              <h4 className="text-white font-bold">Partner Clinics</h4>
              <p className="text-teal-100/60 text-sm mt-1">Nationwide network</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">100%</div>
              <h4 className="text-white font-bold">Document Accuracy</h4>
              <p className="text-teal-100/60 text-sm mt-1">Approval guaranteed</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">24h</div>
              <h4 className="text-white font-bold">Fast Processing</h4>
              <p className="text-teal-100/60 text-sm mt-1">Quick turnaround time</p>
            </div>
          </div>
        </div>
      </section>

      {/* কল টু অ্যাকশন */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/80 via-teal-900/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Get Your{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Medical Documents?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg">
              We make medical documentation quick and hassle-free. Contact us to get started.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
              >
                Get Started <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/medical-service"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                Back to Medical Service →
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