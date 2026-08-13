"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaGlobe,
  FaTrophy,
  FaSmile,
  FaPlane,
  FaClock,
} from "react-icons/fa";

const stats = [
  {
    icon: FaUsers,
    label: "Happy Clients",
    value: 500,
    suffix: "+",
  },
  {
    icon: FaGlobe,
    label: "Destinations",
    value: 30,
    suffix: "+",
  },
  {
    icon: FaPlane,
    label: "Flights Booked",
    value: 1200,
    suffix: "+",
  },
  {
    icon: FaTrophy,
    label: "Awards Won",
    value: 12,
    suffix: "",
  },
  {
    icon: FaSmile,
    label: "Satisfaction Rate",
    value: 98,
    suffix: "%",
  },
  {
    icon: FaClock,
    label: "Years of Experience",
    value: 5,
    suffix: "+",
  },
];

const Statistics = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;

    const intervals = stats.map((stat, index) => {
      let current = 0;

      const increment = stat.value / steps;

      const interval = setInterval(() => {
        current += increment;

        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, intervalTime);

      return interval;
    });

    return () => {
      intervals.forEach((interval) => {
        clearInterval(interval);
      });
    };
  }, []);

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

        {/* Soft Radial Gradients */}

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
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12 text-center"
        >
          {/* Label */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-sky-500" />

            <span className="rounded-full bg-sky-50 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
              Our Numbers
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-500" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Traveling{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
            The numbers that reflect our commitment to excellence
            and the trust of thousands of travelers.
          </p>
        </motion.div>

        {/* =====================================================
            STATS GRID
        ====================================================== */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
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
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/75 p-5 text-center shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-2xl hover:shadow-sky-100 sm:p-6"
              >
                {/* =================================================
                    HOVER GRADIENT
                ================================================== */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/[0.04] via-transparent to-indigo-400/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* =================================================
                    ICON
                ================================================== */}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-amber-200 bg-amber-50 shadow-sm"
                >
                  <Icon className="h-7 w-7 text-amber-500 transition-colors duration-300 group-hover:text-orange-500" />
                </motion.div>

                {/* =================================================
                    NUMBER
                ================================================== */}

                <div className="relative text-3xl font-extrabold text-slate-800 sm:text-4xl">
                  {counts[index]}

                  <span className="text-amber-500">
                    {stat.suffix}
                  </span>
                </div>

                {/* =================================================
                    LABEL
                ================================================== */}

                <p className="relative mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </p>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================== */}

                <div className="mx-auto mt-4 h-1 w-8 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 opacity-60 transition-all duration-300 group-hover:w-14 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM TEXT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 text-center"
        >
          <p className="font-mono text-xs tracking-wide text-slate-400 sm:text-sm">
            * Statistics updated as of 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;