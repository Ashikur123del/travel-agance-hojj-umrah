"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHome,
  FaGlobe,
  FaMapMarkedAlt,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaUmbrellaBeach,
  FaMountain,
  FaCity,
  FaTree,
} from "react-icons/fa";
import ServiceHero from "../ServiceHero";


interface PackageItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  href: string;
  color: string;
}

type TourStep = string;



const packages: PackageItem[] = [
  {
    icon: FaHome,
    title: "Bangladesh Tour Package",
    desc: "Explore the beauty of Bangladesh – Cox's Bazar, Sylhet, Sundarbans, and more.",
    href: "/services/tour-package/bangladesh",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: FaGlobe,
    title: "International Tour Package",
    desc: "International destinations – Thailand, Singapore, Malaysia, Turkey, Europe, and more.",
    href: "/services/tour-package/international",
    color: "from-blue-500 to-cyan-500",
  },
];


const features = [
  { icon: FaUmbrellaBeach, label: "Beach & Hill Tours" },
  { icon: FaMountain, label: "Adventure & Trekking" },
  { icon: FaCity, label: "City & Cultural Tours" },
  { icon: FaTree, label: "Nature & Wildlife" },
  { icon: FaUsers, label: "Group & Family Packages" },
  { icon: FaStar, label: "Custom Itineraries" },
];


const destinations = [
  { name: "Cox's Bazar", country: "Bangladesh" },
  { name: "Sylhet", country: "Bangladesh" },
  { name: "Bangkok", country: "Thailand" },
  { name: "Singapore", country: "Singapore" },
  { name: "Kuala Lumpur", country: "Malaysia" },
  { name: "Istanbul", country: "Turkey" },
  { name: "Dubai", country: "UAE" },
  { name: "London", country: "UK" },
];


const steps: TourStep[] = [
  "Choose your destination and dates",
  "Tell us your preferences",
  "We design a custom itinerary",
  "Confirm and pay",
  "Receive travel documents",
];

export default function TourPackagePage() {
  return (
    <main>
      <ServiceHero
        title="Tour Packages"
        subtitle="Tour Services"
        icon={<FaMapMarkedAlt />}
        description="Discover the world with our carefully curated tour packages – from the stunning landscapes of Bangladesh to exotic international destinations. Custom itineraries for every budget and group size."
        bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
      />


      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Adventure{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h2>
            <p className="mt-4 text-teal-100/80 text-lg leading-relaxed">
              Whether you want to explore the natural wonders of Bangladesh or
              jet off to iconic cities across the globe, we design tours that
              match your dreams. Our expert guides and local partners ensure an
              unforgettable experience.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-teal-200/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> 200+ Tours Done
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-amber-400" /> Flexible Schedules
              </span>
              <span className="flex items-center gap-2">
                <FaUsers className="text-amber-400" /> 500+ Happy Travelers
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Package
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {packages.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link href={item.href} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-amber-400/50 transition-all group"
                  >
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${item.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-amber-400" />
                    </div>
                    <h3 className="text-white font-bold text-2xl group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-teal-100/70 text-sm mt-2">{item.desc}</p>
                    <span className="text-amber-400 text-sm font-medium mt-4 inline-block group-hover:gap-2 transition-all flex items-center justify-center gap-1">
                      Explore <FaArrowRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            What We
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-amber-400/10 to-orange-400/10 border border-amber-400/20 rounded-xl p-4 text-center hover:border-amber-400/50 transition-all group"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <p className="text-teal-100/80 text-sm font-medium">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Popular{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {destinations.map((dest, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.02 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-teal-100/70 text-sm hover:border-amber-400/40 transition-all"
              >
                {dest.name} <span className="text-teal-200/30 text-xs">({dest.country})</span>
              </motion.span>
            ))}
          </div>
          <p className="mt-6 text-center text-teal-200/40 text-sm">
            * Many more destinations available – contact us for custom packages.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            How to{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Book
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">30+</div>
              <h4 className="text-white font-bold">Destinations</h4>
              <p className="text-teal-100/60 text-sm mt-1">Across the globe</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">500+</div>
              <h4 className="text-white font-bold">Happy Travelers</h4>
              <p className="text-teal-100/60 text-sm mt-1">Since 2026</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">100%</div>
              <h4 className="text-white font-bold">Satisfaction</h4>
              <p className="text-teal-100/60 text-sm mt-1">Customized tours</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/80 via-teal-900/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready for Your Next{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Adventure?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg">
              Let us plan the perfect trip for you. Contact us today for a free consultation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
              >
                Plan My Trip <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                View All Services →
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