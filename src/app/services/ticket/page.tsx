"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPlane,
  FaClock,
  FaDollarSign,
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset,
  FaGlobe,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import ServiceHero from "../ServiceHero";

// ফিচারসমূহ
const features = [
  {
    icon: FaPlane,
    title: "Domestic & International Booking",
    desc: "We book flights to 30+ countries and all domestic routes in Bangladesh.",
  },
  {
    icon: FaClock,
    title: "Real-time Flight Schedule",
    desc: "Get accurate departure and arrival times, delays, and gate information.",
  },
  {
    icon: FaDollarSign,
    title: "Best Fare Guarantee",
    desc: "We compare fares across airlines to ensure you get the best deal available.",
  },
  {
    icon: FaCheckCircle,
    title: "Instant Confirmation",
    desc: "Receive your e-ticket immediately after booking confirmation.",
  },
];

// জনপ্রিয় রুটসমূহ
const popularRoutes = [
  { from: "Dhaka (DAC)", to: "Dubai (DXB)", price: "$450+" },
  { from: "Dhaka (DAC)", to: "London (LHR)", price: "$600+" },
  { from: "Dhaka (DAC)", to: "Bangkok (BKK)", price: "$350+" },
  { from: "Dhaka (DAC)", to: "Singapore (SIN)", price: "$400+" },
  { from: "Dhaka (DAC)", to: "Kuala Lumpur (KUL)", price: "$320+" },
  { from: "Dhaka (DAC)", to: "Istanbul (IST)", price: "$550+" },
];

// ধাপসমূহ
const steps = [
  "Search for flights",
  "Compare prices & select",
  "Provide passenger details",
  "Make payment",
  "Receive e-ticket",
];

export default function TicketPage() {
  return (
    <main>
      {/* হিরো সেকশন – ইমেজ সহ */}
      <ServiceHero
        title="Air Ticket Booking"
        subtitle="Ticket Service"
        icon={<FaPlane />}
        description="Book domestic and international flights at the best available prices. We provide fare checking, schedule information, and instant confirmation support – all with a 100% money-back guarantee."
        bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
      />

      {/* ফিচার সেকশন */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Ticket Service
              </span>
            </h2>
            <p className="mt-2 text-teal-100/70 text-lg max-w-2xl mx-auto">
              We make flight booking effortless, affordable, and reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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

      {/* How It Works – ধাপসমূহ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              How It{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="mt-2 text-teal-100/70 text-lg">
              Book your flight in just 5 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:border-amber-400/40 transition-all"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/20 flex items-center justify-center mb-3">
                  <span className="text-amber-400 font-bold text-xl">{index + 1}</span>
                </div>
                <p className="text-teal-100/80 text-sm font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Popular{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Routes
              </span>
            </h2>
            <p className="mt-2 text-teal-100/70 text-lg">
              Most booked routes by our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularRoutes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-amber-400/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-amber-400" />
                  <span className="text-white font-medium text-sm">
                    {route.from} → {route.to}
                  </span>
                </div>
                <span className="text-amber-400 text-sm font-bold">{route.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us – অতিরিক্ত সুবিধা */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-900 via-cyan-900 to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <FaShieldAlt className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <h4 className="text-white font-bold">Secure Payment</h4>
              <p className="text-teal-100/60 text-sm mt-1">Your transactions are 100% safe and encrypted.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <FaHeadset className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <h4 className="text-white font-bold">24/7 Support</h4>
              <p className="text-teal-100/60 text-sm mt-1">Our team is always available to assist you.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all">
              <FaGlobe className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <h4 className="text-white font-bold">Global Network</h4>
              <p className="text-teal-100/60 text-sm mt-1">We partner with 50+ airlines worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Book Your{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Flight?
              </span>
            </h2>
            <p className="mt-3 text-teal-100/70 text-lg max-w-2xl mx-auto">
              Contact us now and get the best deals on your next journey.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
              >
                Contact Us <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/ticket/airlines-details"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                View Airlines Details →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}