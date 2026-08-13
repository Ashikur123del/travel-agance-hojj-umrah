"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHospital,
  FaFileAlt,
  FaClock,
  FaUserMd,
  FaCheckCircle,
  FaGlobe,
  FaArrowRight,
  FaStethoscope,
  FaSyringe,
  FaHeartbeat,
  FaMicroscope,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import ServiceHero from "../ServiceHero";


const features = [
  {
    id: 1,
    icon: FaHospital,
    title: "Medical Test Guidance",
    desc: "Complete guidance for medical tests required for visa and travel. We help you understand which tests are needed and where to get them.",
    href: "/services/medical-service/documents",
  },
  {
    id: 2,
    icon: FaFileAlt,
    title: "Medical Documents",
    desc: "Assistance with all medical documentation and reports – from test results to health declarations and vaccination certificates.",
    href: "/services/medical-service/documents",
  },
  {
    id: 3,
    icon: FaClock,
    title: "Appointment Support",
    desc: "We help schedule medical appointments at partner clinics and ensure you get timely service without long waiting periods.",
    href: "/services/medical-service/documents",
  },
  {
    id: 4,
    icon: FaUserMd,
    title: "Report Collection",
    desc: "We assist with collecting, verifying, and submitting medical reports to embassies or employers as required.",
    href: "/services/medical-service/documents",
  },
];


const documents = [
  { icon: FaStethoscope, label: "Medical Test Reports (Visa-specific)" },
  { icon: FaSyringe, label: "Vaccination Certificate (COVID-19, etc.)" },
  { icon: FaHeartbeat, label: "Health Declaration Form" },
  { icon: FaMicroscope, label: "Laboratory Test Results" },
  { icon: FaFileAlt, label: "Medical Insurance Documents" },
  { icon: FaUserMd, label: "Doctor's Fitness Certificate" },
];


const steps = [
  "Consult with our medical team",
  "Schedule tests at partner clinics",
  "Complete required medical examinations",
  "Collect and verify test reports",
  "Submit documents to authorities",
  "Receive final medical clearance",
];


const clinics = [
  { name: "Dhaka Medical Center", location: "Dhaka, Bangladesh", services: "Full visa medical checkup" },
  { name: "Green Life Hospital", location: "Dhaka, Bangladesh", services: "Vaccinations & lab tests" },
  { name: "Chittagong Medical Center", location: "Chittagong, Bangladesh", services: "Pre-employment medical" },
  { name: "Sylhet Health Care", location: "Sylhet, Bangladesh", services: "Travel health consultation" },
  { name: "MediCare International", location: "Dhaka, Bangladesh", services: "Comprehensive health checkup" },
];

export default function MedicalServicePage() {
  return (
    <main>
     
      <ServiceHero
        title="Medical Service"
        subtitle="Medical Services"
        icon={<FaHospital />}
        description="Comprehensive medical support for visa applications and travel requirements. From test guidance to document verification, we ensure your health paperwork is complete and compliant."
        bgImage="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80"
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Health, Our{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Priority
              </span>
            </h2>
            <p className="mt-4 text-teal-100/80 text-lg leading-relaxed">
              Medical examinations and health documentation are critical for visa
              approval and travel. We provide end-to-end medical service support
              – from scheduling appointments to delivering verified reports to
              embassies and employers.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-teal-200/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> 100% Compliance
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-amber-400" /> Fast Turnaround
              </span>
              <span className="flex items-center gap-2">
                <FaGlobe className="text-amber-400" /> 5+ Partner Clinics
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
              Medical Services
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.id * 0.1 }}
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
                      {item.href && (
                        <Link
                          href={item.href}
                          className="text-amber-400 text-xs font-medium inline-block mt-2 hover:text-amber-300 transition-colors"
                        >
                          Learn More →
                        </Link>
                      )}
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
            Required{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Documents
            </span>
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

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
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

   
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Our Partner{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Clinics
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {clinics.map((clinic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/40 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaHospital className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
                      {clinic.name}
                    </h4>
                    <p className="text-teal-100/60 text-sm">{clinic.location}</p>
                    <p className="text-teal-200/40 text-xs mt-1">{clinic.services}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">100%</div>
              <h4 className="text-white font-bold">Compliance Rate</h4>
              <p className="text-teal-100/60 text-sm mt-1">All documents meet standards</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">5+</div>
              <h4 className="text-white font-bold">Partner Clinics</h4>
              <p className="text-teal-100/60 text-sm mt-1">Trusted medical centers</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">24h</div>
              <h4 className="text-white font-bold">Fast Support</h4>
              <p className="text-teal-100/60 text-sm mt-1">Quick appointment scheduling</p>
            </div>
          </div>
        </div>
      </section>

      {/* কল টু অ্যাকশন */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/80 via-teal-900/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Need Medical{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Assistance?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg">
              Book your medical tests and documentation with us today. Fast, reliable, and hassle-free.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
              >
                Book Appointment <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/medical-service/documents"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                View Documents →
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-teal-200/50">
              <span className="flex items-center gap-2">
                <FaPhone className="text-amber-400" /> 880 1884-694337
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