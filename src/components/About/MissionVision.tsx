"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaStar,
  FaRegStar,
  FaArrowRight,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const tours = [
  {
    id: 1,
    title: "Amalfi Coast Wonders",
    location: "Italy",
    description:
      "Experience the breathtaking beauty of Italy's Amalfi Coast with stunning cliffside villages, Mediterranean cuisine, and crystal-clear waters.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=85",
    duration: "7 Days",
    groupSize: "Max 12",
    included: ["Hotel", "Guide", "Meals", "Transport"],
    available: "May – October",
    rating: 4.9,
    reviews: 128,
    badge: "Popular",
    badgeColor: "from-amber-500 to-orange-500",
  },
  {
    id: 2,
    title: "Icelandic Auroras",
    location: "Iceland",
    description:
      "Chase the magical Northern Lights across Iceland's glaciers, volcanoes, and black sand beaches. A once-in-a-lifetime adventure.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=85",
    duration: "5 Days",
    groupSize: "Max 10",
    included: ["Hotel", "Guide", "Transport", "Winter gear"],
    available: "October – March",
    rating: 4.8,
    reviews: 96,
    badge: "New",
    badgeColor: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Bali Tropical Escape",
    location: "Indonesia",
    description:
      "Immerse yourself in Bali's lush rice terraces, ancient temples, and vibrant culture. Perfect for relaxation and spiritual renewal.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85",
    duration: "6 Days",
    groupSize: "Max 15",
    included: ["Hotel", "Guide", "Meals", "Yoga sessions"],
    available: "April – October",
    rating: 4.7,
    reviews: 203,
    badge: "Best Seller",
    badgeColor: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    description:
      "Conquer the majestic Swiss Alps with guided hikes, scenic train rides, and cozy mountain lodges. Experience the peak of European beauty.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    duration: "8 Days",
    groupSize: "Max 8",
    included: ["Hotel", "Guide", "Meals", "Train passes"],
    available: "June – September",
    rating: 4.9,
    reviews: 87,
    badge: "Luxury",
    badgeColor: "from-blue-500 to-cyan-500",
  },
];

const FeaturedTourPackages = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 lg:py-28">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top Left Glow */}
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-sky-300/30 blur-3xl" />

        {/* Right Glow */}
        <div className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-300/25 blur-3xl" />

        {/* Bottom Glow */}
        <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-blue-200/30 blur-3xl" />

        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(99,102,241,0.10),transparent_30%)]" />
      </div>

      {/* =====================================================
          DECORATIVE TRAVEL ROUTE
      ====================================================== */}

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -50 650 C 250 500, 350 750, 600 550 S 950 250, 1250 350"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeDasharray="2 14"
        />

        <circle
          cx="600"
          cy="550"
          r="5"
          fill="#38BDF8"
        />

        <circle
          cx="950"
          cy="350"
          r="5"
          fill="#6366F1"
        />
      </svg>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12 flex flex-col items-center justify-between gap-5 sm:flex-row"
        >

          {/* Header Text */}

          <div className="text-center sm:text-left">

            {/* Label */}

            <div className="mb-3 flex items-center justify-center gap-3 sm:justify-start">

              <span className="h-px w-8 bg-gradient-to-r from-sky-500 to-amber-400" />

              <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                Selected For You
              </p>

              <span className="h-px w-8 bg-gradient-to-r from-amber-400 to-sky-500 sm:hidden" />

            </div>

            {/* Heading */}

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">

              Featured Tour{" "}

              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Packages
              </span>

            </h2>

            {/* Description */}

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              Discover hand-picked destinations, unforgettable experiences,
              and carefully planned adventures made for curious travelers.
            </p>

          </div>

          {/* View All Button */}

          <Link
            href="/services/tour-package"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 hover:shadow-md"
          >
            View All Destinations

            <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </motion.div>

        {/* =====================================================
            TOUR CARDS
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {tours.map((tour, index) => (

            <motion.div
              key={tour.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-100"
            >

              {/* =================================================
                  IMAGE
              ================================================== */}

              <div className="relative h-52 overflow-hidden">

                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Badge */}

                <div
                  className={`absolute left-3 top-3 rounded-full bg-gradient-to-r ${tour.badgeColor} px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg`}
                >
                  {tour.badge}
                </div>

                {/* Location */}

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-md backdrop-blur-sm">

                  <MdLocationOn className="h-4 w-4 text-amber-500" />

                  {tour.location}

                </div>

              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="flex flex-1 flex-col p-5">

                {/* Title */}

                <h3 className="text-lg font-bold leading-tight text-slate-800 transition-colors duration-300 group-hover:text-sky-700">
                  {tour.title}
                </h3>

                {/* Description */}

                <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-slate-500">
                  {tour.description}
                </p>

                {/* Meta */}

                <div className="mt-4 grid grid-cols-2 gap-2 border-y border-slate-100 py-3 text-[11px] text-slate-500">

                  <span className="flex items-center gap-1.5">
                    <FaUsers className="h-3 w-3 text-sky-500" />
                    {tour.groupSize}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="h-3 w-3 text-sky-500" />
                    {tour.available}
                  </span>

                </div>

                {/* Included */}

                <div className="mt-3 flex flex-wrap gap-1.5">

                  {tour.included.map((item, idx) => (

                    <span
                      key={idx}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[9px] font-medium text-slate-500 transition-colors group-hover:border-sky-100 group-hover:bg-sky-50 group-hover:text-sky-600"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                {/* Rating */}

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">

                  <div className="flex items-center gap-2">

                    <div className="flex items-center gap-0.5">

                      {[...Array(5)].map((_, i) => (

                        <span key={i}>

                          {i < Math.floor(tour.rating) ? (

                            <FaStar className="h-3.5 w-3.5 text-amber-400" />

                          ) : (

                            <FaRegStar className="h-3.5 w-3.5 text-slate-300" />

                          )}

                        </span>

                      ))}

                    </div>

                    <span className="text-[11px] font-medium text-slate-500">
                      {tour.rating} ({tour.reviews})
                    </span>

                  </div>

                  <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500">

                    <FaCheckCircle className="h-3 w-3 text-emerald-500" />

                    {tour.duration}

                  </span>

                </div>

                {/* Book Button */}

                <Link
                  href="/contact"
                  className="mt-4 block w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-2.5 text-center text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition-all duration-300 hover:from-amber-400 hover:to-orange-400 hover:shadow-xl hover:shadow-amber-500/30"
                >
                  Book Now
                </Link>

              </div>

              {/* Hover Gradient */}

              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/[0.03] via-transparent to-indigo-400/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedTourPackages;