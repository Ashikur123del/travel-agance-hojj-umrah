"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaPlane,
  FaPassport,
  FaUsers,
  FaHospital,
  FaHotel,
  FaMapMarkedAlt,
  FaMosque,
  FaFileInvoice,
  FaSuitcaseRolling,
  FaCar,
  FaGlobeAsia,
  FaUserTie,
} from "react-icons/fa";

import { MdFlightTakeoff, MdMedicalServices } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

import ServiceHero from "./ServiceHero";

const services = [
  {
    icon: FaPlane,
    title: "Air Ticketing",
    description:
      "Domestic and international flight ticket booking with reliable support.",
    href: "/services/ticket",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaPassport,
    title: "Visa Processing",
    description:
      "Professional visa processing support for tourist, work and other visas.",
    href: "/services/visa-processing",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: FaUsers,
    title: "Manpower",
    description:
      "Overseas employment and worker document processing support.",
    href: "/services/manpower",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: MdMedicalServices,
    title: "Medical Service",
    description:
      "Medical test guidance, documentation and appointment assistance.",
    href: "/services/medical-service",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: FaHotel,
    title: "Hotel Booking",
    description:
      "Comfortable hotel booking for local and international destinations.",
    href: "/services/hotel-booking",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Tour Package",
    description:
      "Customized Bangladesh and international tour packages for travelers.",
    href: "/services/tour-package",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: FaMosque,
    title: "Hajj & Umrah",
    description:
      "Complete Hajj and Umrah packages with visa, hotel and transport support.",
    href: "/services/hajj-umrah-package",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: FaGlobeAsia,
    title: "Saudi Services",
    description:
      "Visa, manpower, medical and document support for Saudi Arabia.",
    href: "/services/saudi-all-services",
    gradient: "from-teal-500 to-cyan-500",
  },

  // Additional Services
  {
    icon: FaFileInvoice,
    title: "Airlines Details",
    description:
      "Get airline information, schedules and ticket-related assistance.",
    href: "/services/ticket/airlines-details",
    gradient: "from-sky-500 to-blue-500",
  },
  {
    icon: IoDocumentText,
    title: "Tourist Visa",
    description:
      "Tourist visa processing support for selected international destinations.",
    href: "/services/visa-processing/tourist-visa",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: FaUserTie,
    title: "Work Permit",
    description:
      "Work permit and employment documentation assistance.",
    href: "/services/visa-processing/work-permit",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: FaSuitcaseRolling,
    title: "Travel Assistance",
    description:
      "Complete travel assistance to make your journey simple and stress-free.",
    href: "/services/travel-assistance",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: FaCar,
    title: "Transport Service",
    description:
      "Reliable airport transfer and transportation support for travelers.",
    href: "/services/transport",
    gradient: "from-lime-500 to-green-500",
  },
  {
    icon: MdFlightTakeoff,
    title: "Flight Assistance",
    description:
      "Flight schedule, booking and travel assistance from our experts.",
    href: "/services/flight-assistance",
    gradient: "from-fuchsia-500 to-purple-500",
  },
  {
    icon: FaGlobeAsia,
    title: "International Travel",
    description:
      "Complete support for international travel planning and documentation.",
    href: "/services/international-travel",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: FaUsers,
    title: "Group Tour",
    description:
      "Special group tour packages designed for families and organizations.",
    href: "/services/tour-package/group",
    gradient: "from-teal-500 to-emerald-500",
  },
];

export default function ServicesPage() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 8);

  return (
    <main className="bg-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <ServiceHero
        title="Our Services"
        subtitle="What We Offer"
        icon={<FaPlane />}
        description="Comprehensive travel solutions tailored to your needs — from air ticketing and visa processing to tour packages, Hajj & Umrah and more."
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      {/* =====================================================
          SERVICES SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24">
        {/* Background Decoration */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-sky-300/20 blur-3xl" />

          <div className="absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-indigo-300/20 blur-3xl" />

          <div className="absolute bottom-[-200px] left-1/3 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(99,102,241,0.08),transparent_30%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />

              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Our Services
              </span>

              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Everything You Need for a{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Perfect Journey
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
              From booking your flight to arranging visas, hotels and tour
              packages, our professional team is here to make your travel
              experience easy and stress-free.
            </p>
          </motion.div>

          {/* =====================================================
              SERVICE CARDS
          ====================================================== */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visibleServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 25 }}
                    transition={{
                      duration: 0.45,
                      delay: showAll ? index * 0.04 : index * 0.06,
                    }}
                    whileHover={{ y: -8 }}
                  >
                    <Link
                      href={service.href}
                      className="group block h-full"
                    >
                      <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/70">
                        {/* Card Glow */}

                        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-100 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Icon */}

                        <div
                          className={`relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>

                        {/* Title */}

                        <h3 className="relative text-center text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-amber-600">
                          {service.title}
                        </h3>

                        {/* Description */}

                        <p className="relative mt-3 text-center text-sm leading-relaxed text-slate-500">
                          {service.description}
                        </p>

                        {/* Learn More */}

                        <div className="relative mt-5 text-center">
                          <span className="text-sm font-semibold text-sky-600 transition-colors group-hover:text-amber-500">
                            Learn More →
                          </span>
                        </div>

                        {/* Bottom Line */}

                        <div
                          className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.gradient} transition-all duration-300 group-hover:w-full`}
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* =====================================================
              SHOW MORE / SHOW LESS
          ====================================================== */}

          {services.length > 8 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center"
            >
              <motion.button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3.5 text-sm font-bold text-slate-900 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:from-amber-400 hover:to-orange-400 hover:shadow-xl hover:shadow-amber-500/30 md:text-base"
              >
                {showAll ? "Show Less" : "View All Services"}

                <span className="text-lg transition-transform duration-300 group-hover:translate-y-0.5">
                  {showAll ? "↑" : "↓"}
                </span>
              </motion.button>
            </motion.div>
          )}

          {/* Bottom Text */}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-sm text-slate-400"
          >
            Professional travel support from booking to destination.
          </motion.p>
        </div>
      </section>
    </main>
  );
}