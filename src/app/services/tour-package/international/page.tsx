"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaLandmark,
  FaBeer,
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
  FaHiking,
  FaCamera,
  FaUtensils,
  FaDollarSign,
} from "react-icons/fa";
import ServiceHero from "../../ServiceHero";


// ---------- Type Definitions (local) ----------
interface Destination {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  bestTime: string;
  duration: string;
  highlights: string[];

}

type TourStep = string;
// ---------------------------------------------

// গন্তব্য লিস্ট – বিস্তারিত সহ
const destinations: Destination[] = [
  {
    name: "Thailand",
    desc: "Beaches, temples, and vibrant nightlife – the land of smiles.",
    icon: FaBeer,
    bestTime: "November – March",
    duration: "5-7 days",
    highlights: ["Bangkok temples", "Phuket beaches", "Chiang Mai night market"],
   
  },
  {
    name: "Singapore",
    desc: "Modern city with futuristic gardens, luxury shopping, and world-class dining.",
    icon: FaLandmark,
    bestTime: "February – April",
    duration: "3-5 days",
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
   
  },
  {
    name: "Malaysia",
    desc: "Cultural and natural diversity – from Kuala Lumpur's towers to Borneo's rainforests.",
    icon: FaTree,
    bestTime: "May – September",
    duration: "5-8 days",
    highlights: ["Petronas Towers", "Penang street food", "Borneo wildlife"],
    
  },
  {
    name: "Turkey",
    desc: "Historic Istanbul & fairy-tale Cappadocia – where East meets West.",
    icon: FaLandmark,
    bestTime: "April – October",
    duration: "6-10 days",
    highlights: ["Hagia Sophia", "Cappadocia balloons", "Bosphorus cruise"],
    
  },
  {
    name: "Switzerland",
    desc: "Alpine paradise with pristine lakes, snow-capped peaks, and charming villages.",
    icon: FaMountain,
    bestTime: "June – September",
    duration: "5-8 days",
    highlights: ["Jungfraujoch", "Lake Geneva", "Interlaken adventure"],
   
  },
  {
    name: "Maldives",
    desc: "Tropical island paradise – overwater bungalows and crystal-clear waters.",
    icon: FaShip,
    bestTime: "November – April",
    duration: "4-6 days",
    highlights: ["Snorkeling", "Sunset cruises", "Underwater dining"],
    
  },
];


const packageHighlights: { icon: React.ComponentType<{ className?: string }>; label: string }[] = [
  { icon: FaUmbrellaBeach, label: "Beach & Island Tours" },
  { icon: FaLandmark, label: "Cultural & Historic Sites" },
  { icon: FaUtensils, label: "Local Cuisine & Food Tours" },
  { icon: FaHiking, label: "Adventure & Nature" },
  { icon: FaCamera, label: "Photography Spots" },
  { icon: FaUsers, label: "Group & Family Packages" },
];


const steps: TourStep[] = [
  "Choose your destination(s)",
  "Select travel dates and group size",
  "We design a custom itinerary",
  "Confirm and secure booking",
  "Receive travel documents & guide",
];


const tips: string[] = [
  "Book flights at least 3 months ahead for best rates.",
  "Check visa requirements for each country.",
  "Pack light and versatile clothing.",
  "Get travel insurance for peace of mind.",
  "Learn a few local phrases – it helps!",
];

export default function InternationalTourPage() {
  return (
    <main>
      
      <ServiceHero
        title="International Tour Package"
        subtitle="Tour Services"
        icon={<FaGlobe />}
        description="Explore the world with our curated international tours – from the beaches of Thailand to the mountains of Switzerland. Custom packages for families, couples, and groups."
        bgImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
      />

      {/* ওভারভিউ সেকশন */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Discover the{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                World
              </span>
            </h2>
            <p className="mt-4 text-teal-100/80 text-lg leading-relaxed">
              From vibrant Asian cities to European alpine villages, we bring
              you the best of international travel. Our expert guides and local
              partners ensure authentic experiences and seamless logistics.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-teal-200/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" /> 50+ Tours Completed
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-amber-400" /> Flexible Itineraries
              </span>
              <span className="flex items-center gap-2">
                <FaUsers className="text-amber-400" /> 300+ Happy Travelers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ডেস্টিনেশন লিস্ট – কার্ডে Book Now বাটন */}
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
                    <div className="flex items-start gap-2">
                      <FaDollarSign className="text-amber-400 mt-0.5 flex-shrink-0" />
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {dest.highlights.map((hl, idx) => (
                        <span key={idx} className="bg-white/10 px-2 py-0.5 rounded-full text-teal-200/50 text-xs">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Book Now বাটন */}
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

      {/* প্যাকেজ হাইলাইটস */}
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

      {/* বুকিং প্রক্রিয়া */}
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

      {/* ভ্রমণ টিপস */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Travel Tips
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {tips.map((tip, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:border-amber-400/40 transition-all"
              >
                <span className="text-amber-400 font-bold text-lg">💡</span>
                <p className="text-teal-100/80 text-sm">{tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* পরিসংখ্যান */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">30+</div>
              <h4 className="text-white font-bold">Destinations</h4>
              <p className="text-teal-100/60 text-sm mt-1">Worldwide</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">300+</div>
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

      {/* কল টু অ্যাকশন */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950/80 via-teal-900/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Explore the{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                World?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg">
              Let us plan your dream international trip. Contact us today for a free consultation.
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
                <FaPhone className="text-amber-400" /> +880 1234 567890
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-amber-400" /> tour@travelagency.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}