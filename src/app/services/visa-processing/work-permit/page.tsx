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
    <main>
      
      <ServiceHero
        title="Work Permit"
        subtitle="Visa Services"
        icon={<FaBriefcase />}
        description="Secure your international career with our comprehensive work permit and employment visa services. We handle the complex paperwork, liaise with employers and embassies, and ensure a smooth transition to your new job abroad."
        bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80"
      />

      {/* ওভারভিউ সেকশন */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Career{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h2>
            <p className="mt-4 text-teal-100/80 text-lg leading-relaxed">
              Whether you are a skilled professional, a healthcare worker, or a
              construction expert – we help you get the right work permit for
              your dream job abroad. Our team ensures every document is perfect
              so your application gets approved without delays.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-teal-200/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> 95% Success Rate
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-amber-400" /> 2-6 Weeks Processing
              </span>
              <span className="flex items-center gap-2">
                <FaGlobe className="text-amber-400" /> 12+ Countries
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ফিচার সেকশন */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Work Permit Service
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((item, index) => {
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

      {/* প্রয়োজনীয় ডকুমেন্ট */}
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

      {/* প্রসেসিং স্টেপ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Processing{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Steps
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

      {/* কান্ট্রি লিস্ট */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Countries We{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Cover
            </span>
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
            * Work permit availability depends on your qualifications and employer sponsorship. Contact us for a free eligibility check.
          </p>
        </div>
      </section>

      {/* সেক্টর লিস্ট */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Job{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Sectors
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {sectors.map((sector, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.02 }}
                viewport={{ once: true }}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-400/10 to-orange-400/10 border border-amber-400/20 rounded-xl text-amber-300 text-sm font-medium hover:border-amber-400/50 transition-all"
              >
                {sector}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* সাফল্যের হার + অতিরিক্ত সুবিধা */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">95%</div>
              <h4 className="text-white font-bold">Success Rate</h4>
              <p className="text-teal-100/60 text-sm mt-1">Our applications get approved</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">500+</div>
              <h4 className="text-white font-bold">Workers Placed</h4>
              <p className="text-teal-100/60 text-sm mt-1">Successfully placed overseas</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">12+</div>
              <h4 className="text-white font-bold">Countries</h4>
              <p className="text-teal-100/60 text-sm mt-1">Global network of employers</p>
            </div>
          </div>
        </div>
      </section>

      {/* কল টু অ্যাকশন */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/80 via-teal-900/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Work Permit Journey?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg">
              Contact us today for a free consultation and get your work permit processed smoothly.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
              >
                Apply Now <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/visa-processing"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                View All Visa Services →
              </Link>
            </div>
            <p className="mt-4 text-teal-200/30 text-sm flex items-center justify-center gap-2">
              <FaHandshake className="text-amber-400" /> Free eligibility check in 5 minutes
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}