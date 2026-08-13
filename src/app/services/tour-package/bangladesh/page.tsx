"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHome,
  FaTree,
  FaMountain,
  FaShip,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
  FaUmbrellaBeach,
  FaFish,
  FaHiking,
  FaCamera,
} from "react-icons/fa";
import ServiceHero from "../../ServiceHero";


interface Destination {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  bestTime: string;
  duration: string;
  highlights: string[];
}

type TourStep = string;


const destinations: Destination[] = [
  {
    name: "Cox's Bazar",
    desc: "World's longest natural sea beach with golden sands and vibrant sunset views.",
    icon: FaShip,
    bestTime: "November – February",
    duration: "2-3 days",
    highlights: ["Sea beach", "Himchari Waterfall", "Ramu Buddhist Temple"],
  },
  {
    name: "Sylhet",
    desc: "Tea gardens, rolling hills, and the beautiful Jaflong – the Switzerland of Bangladesh.",
    icon: FaTree,
    bestTime: "October – March",
    duration: "2-3 days",
    highlights: ["Tea gardens", "Jaflong", "Ratargul Swamp Forest"],
  },
  {
    name: "Sundarbans",
    desc: "Largest mangrove forest in the world, home to Royal Bengal Tigers and diverse wildlife.",
    icon: FaTree,
    bestTime: "November – March",
    duration: "2-4 days",
    highlights: ["Tiger spotting", "Crocodile sightings", "Village walks"],
  },
  {
    name: "Bandarban",
    desc: "Beautiful hill tracts with scenic waterfalls, tribal culture, and lush greenery.",
    icon: FaMountain,
    bestTime: "October – April",
    duration: "2-3 days",
    highlights: ["Boga Lake", "Nilgiri", "Tribal culture"],
  },
  {
    name: "Saint Martin",
    desc: "Coral island paradise with crystal-clear water, perfect for snorkeling and relaxation.",
    icon: FaShip,
    bestTime: "November – February",
    duration: "2-3 days",
    highlights: ["Snorkeling", "Coral reefs", "Sunset cruises"],
  },
  {
    name: "Sajek Valley",
    desc: "Queen of the hills – misty mountains, tribal villages, and breathtaking viewpoints.",
    icon: FaMountain,
    bestTime: "October – March",
    duration: "2-3 days",
    highlights: ["Misty sunrise", "Tribal homestays", "Hiking trails"],
  },
];


const packageHighlights: { icon: React.ComponentType<{ className?: string }>; label: string }[] = [
  { icon: FaUmbrellaBeach, label: "Beach & hill tours" },
  { icon: FaHiking, label: "Cultural experiences" },
  { icon: FaFish, label: "Local cuisine" },
  { icon: FaHiking, label: "Adventure activities" },
  { icon: FaCamera, label: "Photography spots" },
  { icon: FaUsers, label: "Group & family packages" },
];


const steps: TourStep[] = [
  "Choose your destination(s)",
  "Select dates and group size",
  "We create a custom itinerary",
  "Confirm and make payment",
  "Receive travel documents",
];

export default function BangladeshTourPage() {
  return (
    <main>

      <ServiceHero
        title="Bangladesh Tour Package"
        subtitle="Tour Services"
        icon={<FaHome />}
        description="Explore the incredible beauty of Bangladesh – from the world's longest sea beach to lush tea gardens, dense mangrove forests, and majestic hill tracts. Custom packages available for families, couples, and groups."
        bgImage="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=80"
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Discover the{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Beauty of Bangladesh
              </span>
            </h2>
            <p className="mt-4 text-teal-100/80 text-lg leading-relaxed">
              Bangladesh is a land of natural wonders – golden beaches, emerald
              hills, ancient forests, and vibrant cultures. Our curated tours
              let you experience the best of this beautiful country with comfort
              and safety.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-teal-200/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> 100+ Tours Completed
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-amber-400" /> Flexible Itineraries
              </span>
              <span className="flex items-center gap-2">
                <FaUsers className="text-amber-400" /> 200+ Happy Travelers
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Top{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {destinations.map((dest, index) => {
              const Icon = dest.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/40 transition-all group flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl group-hover:text-amber-400 transition-colors">
                        {dest.name}
                      </h4>
                      <p className="text-teal-200/40 text-xs">{dest.desc}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-teal-100/70 flex-1">
                    <div className="flex items-start gap-2">
                      <FaCalendarAlt className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>Best Time: {dest.bestTime}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaClock className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>Duration: {dest.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {dest.highlights.map((hl, idx) => (
                        <span key={idx} className="bg-white/10 px-2 py-0.5 rounded-full text-teal-200/50 text-xs">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-4 w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold py-2.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all text-sm"
                  >
                    Book Now
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            Whats{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Included
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packageHighlights.map((item, idx) => {
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

      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">6+</div>
              <h4 className="text-white font-bold">Destinations</h4>
              <p className="text-teal-100/60 text-sm mt-1">Across Bangladesh</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">200+</div>
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

      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/80 via-teal-900/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Explore{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Bangladesh?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg">
              Let us plan your perfect Bangladeshi adventure. Contact us today!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
              >
                Book Now <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/tour-package"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
              >
                View All Tours →
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