"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPlane,
  FaMapMarkerAlt,
  FaSuitcase,
  FaClock,
  FaStar,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaUsers,
} from "react-icons/fa";
import ServiceHero from "../../ServiceHero";

// এয়ারলাইন ডেটা (প্রাইস বাদ দেওয়া হয়েছে)
const airlines = [
  {
    name: "Emirates",
    hub: "Dubai (DXB)",
    alliance: "None (Independent)",
    routes: "Dubai, London, New York, Sydney, Paris, Singapore",
    flightTime: "8-12 hours",
    baggage: "30kg + 7kg hand carry",
    rules: "E-ticket required, 24hr cancellation policy",
    rating: 4.8,
    website: "https://www.emirates.com",
    directRoutes: "Dubai, London, Singapore",
    connectingRoutes: "New York, Sydney, Paris",
  },
  {
    name: "Qatar Airways",
    hub: "Doha (DOH)",
    alliance: "oneworld",
    routes: "Doha, Paris, Tokyo, Johannesburg, Bangkok, London",
    flightTime: "6-10 hours",
    baggage: "30kg + 7kg hand carry",
    rules: "E-ticket required, 24hr cancellation policy",
    rating: 4.7,
    website: "https://www.qatarairways.com",
    directRoutes: "Doha, London, Paris",
    connectingRoutes: "Tokyo, Johannesburg, Bangkok",
  },
  {
    name: "Singapore Airlines",
    hub: "Singapore (SIN)",
    alliance: "Star Alliance",
    routes: "Singapore, Bangkok, Mumbai, San Francisco, Sydney, London",
    flightTime: "7-11 hours",
    baggage: "35kg + 7kg hand carry",
    rules: "E-ticket required, 48hr cancellation policy",
    rating: 4.9,
    website: "https://www.singaporeair.com",
    directRoutes: "Singapore, Bangkok, Mumbai",
    connectingRoutes: "San Francisco, Sydney, London",
  },
  {
    name: "Turkish Airlines",
    hub: "Istanbul (IST)",
    alliance: "Star Alliance",
    routes: "Istanbul, Berlin, Moscow, Dubai, Karachi, New York",
    flightTime: "5-9 hours",
    baggage: "30kg + 7kg hand carry",
    rules: "E-ticket required, 24hr cancellation policy",
    rating: 4.6,
    website: "https://www.turkishairlines.com",
    directRoutes: "Istanbul, Berlin, Dubai",
    connectingRoutes: "Moscow, Karachi, New York",
  },
  {
    name: "Etihad Airways",
    hub: "Abu Dhabi (AUH)",
    alliance: "None (Independent)",
    routes: "Abu Dhabi, London, New York, Sydney, Singapore, Paris",
    flightTime: "7-11 hours",
    baggage: "30kg + 7kg hand carry",
    rules: "E-ticket required, 24hr cancellation policy",
    rating: 4.7,
    website: "https://www.etihad.com",
    directRoutes: "Abu Dhabi, London, Singapore",
    connectingRoutes: "New York, Sydney, Paris",
  },
  {
    name: "Biman Bangladesh Airlines",
    hub: "Dhaka (DAC)",
    alliance: "None (Independent)",
    routes: "Dhaka, London, Singapore, Kuala Lumpur, Bangkok, Kolkata",
    flightTime: "4-8 hours",
    baggage: "30kg + 7kg hand carry",
    rules: "E-ticket required, 24hr cancellation policy",
    rating: 4.2,
    website: "https://www.biman-airlines.com",
    directRoutes: "Dhaka, Kolkata, Bangkok",
    connectingRoutes: "London, Singapore, Kuala Lumpur",
  },
];

// রেটিং অনুযায়ী স্টার দেখানো
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />);
  }
  if (hasHalfStar) {
    stars.push(<FaStar key="half" className="w-4 h-4 text-amber-400 fill-amber-400 opacity-50" />);
  }
  while (stars.length < 5) {
    stars.push(<FaStar key={stars.length} className="w-4 h-4 text-white/20" />);
  }
  return stars;
};

export default function AirlinesDetailsPage() {
  return (
    <main>
      <ServiceHero
        title="Airlines Details"
        subtitle="Partner Airlines"
        icon={<FaPlane />}
        description="Complete information about our partner airlines – routes, flight time, baggage policies, and booking rules. Find the best airline for your journey."
        bgImage="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1920&q=80"
      />

      {/* এয়ারলাইন কার্ড গ্রিড */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Partner{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Airlines
              </span>
            </h2>
            <p className="mt-2 text-teal-100/70 text-lg max-w-2xl mx-auto">
              Choose from our trusted network of global and regional airlines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airlines.map((airline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/50 transition-all group flex flex-col"
              >
                {/* হেডার – নাম ও রেটিং */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold text-xl group-hover:text-amber-400 transition-colors">
                      {airline.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-teal-200/40">
                      <span className="flex items-center gap-1">
                        <FaGlobe className="w-3 h-3" /> Hub: {airline.hub}
                      </span>
                      {airline.alliance !== "None (Independent)" && (
                        <span className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full">
                          <FaUsers className="w-3 h-3" /> {airline.alliance}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(airline.rating)}
                    <span className="text-white/60 text-xs ml-1">{airline.rating}</span>
                  </div>
                </div>

                {/* বিস্তারিত তথ্য */}
                <div className="space-y-2 text-sm text-teal-100/70 flex-1">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Routes: {airline.routes}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaPlane className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block">Direct: {airline.directRoutes}</span>
                      <span className="block text-teal-200/40 text-xs">Connecting: {airline.connectingRoutes}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Flight Time: {airline.flightTime}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaSuitcase className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Baggage: {airline.baggage}</span>
                  </div>
                </div>

                {/* নিচের অংশ – বিধি ও লিংক */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-teal-200/40 text-xs flex items-center gap-1">
                    <span>📋</span> {airline.rules}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <a
                      href={airline.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 text-xs font-medium flex items-center gap-1 transition-colors"
                    >
                      Visit Website <FaArrowRight className="w-3 h-3" />
                    </a>
                    <span className="text-teal-200/30 text-xs">✈️</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* দ্রুত তুলনা – টেবিল ভিউ (প্রাইস বাদ) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Quick{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Comparison
              </span>
            </h2>
            <p className="mt-2 text-teal-100/70 text-lg">
              Compare key features at a glance
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-teal-100/70 border border-white/10 rounded-xl overflow-hidden">
              <thead className="bg-white/10 text-white font-semibold">
                <tr>
                  <th className="px-4 py-3">Airline</th>
                  <th className="px-4 py-3">Hub</th>
                  <th className="px-4 py-3">Alliance</th>
                  <th className="px-4 py-3">Flight Time</th>
                  <th className="px-4 py-3">Baggage</th>
                  <th className="px-4 py-3">Rating</th>
                </tr>
              </thead>
              <tbody>
                {airlines.map((airline, idx) => (
                  <tr key={idx} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-white">{airline.name}</td>
                    <td className="px-4 py-3">{airline.hub}</td>
                    <td className="px-4 py-3">{airline.alliance}</td>
                    <td className="px-4 py-3">{airline.flightTime}</td>
                    <td className="px-4 py-3">{airline.baggage}</td>
                    <td className="px-4 py-3 flex items-center gap-1">
                      {renderStars(airline.rating)}
                      <span className="ml-1">{airline.rating}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* বুকিং টিপস ও যোগাযোগ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* বুকিং টিপস */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-4">💡 Booking Tips</h3>
              <ul className="space-y-3 text-teal-100/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Book at least 2-3 weeks in advance for best fares.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Check baggage allowance carefully – some airlines include 30kg, others may have different policies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Consider connecting flights for cheaper options on long-haul routes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Always carry a printed copy of your e-ticket and passport.</span>
                </li>
              </ul>
            </div>

            {/* যোগাযোগ */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-4">📞 Need Help?</h3>
              <p className="text-teal-100/70 text-sm mb-4">
                Our travel experts are here to assist you with booking and fare queries.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-teal-100/70">
                  <FaPhone className="text-amber-400" />
                  <span>+880 1234 567890</span>
                </div>
                <div className="flex items-center gap-3 text-teal-100/70">
                  <FaEnvelope className="text-amber-400" />
                  <span>info@travelagency.com</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all text-sm"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}