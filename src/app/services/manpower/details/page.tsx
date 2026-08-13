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
    <main>
  
      <ServiceHero
        title="Manpower Details"
        subtitle="Manpower Services"
        icon={<FaUsers />}
        description="Detailed information about our comprehensive manpower services – from document processing and employer coordination to pre-departure support and overseas job placement."
        bgImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1920&q=80"
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Complete{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Manpower Solution
              </span>
            </h2>
            <p className="mt-4 text-teal-100/80 text-lg leading-relaxed">
              We provide end-to-end manpower services that ensure a smooth and
              successful transition for workers seeking employment abroad. From
              document verification to pre-departure support, we are with you
              every step of the way.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-teal-200/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> 95% Placement Rate
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-amber-400" /> 4-6 Weeks Processing
              </span>
              <span className="flex items-center gap-2">
                <FaGlobe className="text-amber-400" /> 12+ Countries
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((item, index) => {
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
            Our{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Process
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

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Job{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Sectors
            </span>
          </h2>
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
                  className="bg-gradient-to-r from-amber-400/10 to-orange-400/10 border border-amber-400/20 rounded-xl p-4 text-center hover:border-amber-400/50 transition-all group"
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-amber-400/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-teal-100/80 text-sm font-medium">{sector.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">95%</div>
              <h4 className="text-white font-bold">Placement Rate</h4>
              <p className="text-teal-100/60 text-sm mt-1">Workers successfully placed</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">500+</div>
              <h4 className="text-white font-bold">Workers Placed</h4>
              <p className="text-teal-100/60 text-sm mt-1">Since our inception</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">100+</div>
              <h4 className="text-white font-bold">Employer Partners</h4>
              <p className="text-teal-100/60 text-sm mt-1">Global companies we work with</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/80 via-teal-900/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Journey Abroad?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg">
              Contact us today for a free career consultation and get started on your international career.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
              >
                Apply Now <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/manpower"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                Back to Manpower →
              </Link>
            </div>
            <p className="mt-4 text-teal-200/30 text-sm flex items-center justify-center gap-2">
              <FaHandshake className="text-amber-400" /> Free consultation with our experts
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}