"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLeaf, FaGem } from "react-icons/fa";
import type { IconType } from "react-icons";

type Feature = {
  icon: IconType;
  code: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: FaShieldAlt,
    code: "SEC—24",
    title: "Global Security",
    description:
      "24/7 on-ground support and comprehensive travel insurance integration for total peace of mind.",
  },
  {
    icon: FaLeaf,
    code: "ECO—01",
    title: "Sustainable Journeys",
    description:
      "Carefully selected eco-certified accommodations and carbon-neutral transportation options.",
  },
  {
    icon: FaGem,
    code: "VIP—03",
    title: "Exclusive Access",
    description:
      "Skip-the-line entries and private tours not available to the general public.",
  },
];

const WhyChooseUs: React.FC = () => {
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

        {/* Soft radial gradients */}
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
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            {/* Section Label */}

            <div className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.3em]">
              <span className="h-px w-8 bg-gradient-to-r from-sky-500 to-amber-400" />

              <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text font-semibold text-transparent">
                BOARDING PASS · WHY US
              </span>
            </div>

            {/* Heading */}

            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[52px]">
              Why{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Travelers
              </span>{" "}
              Choose
              <br />
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text italic text-transparent">
                Organized Adventure
              </span>
            </h2>

            {/* Description */}

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We believe that travel should be seamless. Our team of expert
              concierges handles every detail, so you can focus on the
              experience.
            </p>

            {/* =================================================
                FEATURES
            ================================================== */}

            <div className="mt-10 space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.code}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="group relative flex items-stretch overflow-hidden rounded-2xl border border-slate-200/80 bg-white/75 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-sky-100"
                  >
                    {/* Left Ticket Area */}

                    <div className="relative flex w-24 flex-shrink-0 flex-col items-center justify-center gap-2 border-r border-dashed border-slate-200 py-5">
                      {/* Ticket Cutout Top */}

                      <span
                        aria-hidden="true"
                        className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-sky-50"
                      />

                      {/* Ticket Cutout Bottom */}

                      <span
                        aria-hidden="true"
                        className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-sky-50"
                      />

                      {/* Icon */}

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-amber-50">
                        <Icon className="h-5 w-5 text-amber-500 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Code */}

                      <span className="font-mono text-[9px] tracking-[0.18em] text-slate-400">
                        {feature.code}
                      </span>
                    </div>

                    {/* Feature Content */}

                    <div className="flex-1 px-5 py-5 sm:px-6">
                      <h4 className="font-serif text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-indigo-600">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover Gradient */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-400/[0.04] via-transparent to-indigo-400/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="w-full max-w-lg flex-1 lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
              {/* Image Container */}

              <div className="relative h-[300px] w-full overflow-hidden sm:h-[350px] md:h-[400px] lg:h-[460px]">
                <Image
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=85"
                  alt="City at dusk with river and illuminated buildings"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

                {/* Blue Overlay */}

                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10" />

                {/* =================================================
                    VERIFIED BADGE
                ================================================== */}

                <div className="absolute right-5 top-5 flex h-20 w-20 rotate-[-12deg] items-center justify-center rounded-full border-2 border-dashed border-amber-300 bg-white/20 backdrop-blur-md shadow-lg shadow-amber-500/20 transition-transform duration-300 hover:rotate-0">
                  <span className="text-center font-mono text-[9px] font-bold uppercase leading-tight tracking-wider text-amber-200 drop-shadow-md">
                    Verified
                    <br />
                    Traveler
                    <br />
                    Approved
                  </span>
                </div>

                {/* Image Bottom Content */}

                <div className="absolute bottom-5 left-5">
                  <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.3em] text-sky-200">
                    Destination Verified
                  </div>

                  <div className="text-xl font-semibold text-white drop-shadow-lg">
                    Travel Without Limits
                  </div>
                </div>
              </div>

              {/* =================================================
                  INFORMATION BAR
              ================================================== */}

              <div className="grid grid-cols-3 divide-x divide-dashed divide-slate-200 rounded-b-2xl bg-white/90 px-2 backdrop-blur-xl">
                {[
                  {
                    label: "FROM",
                    value: "HOME",
                  },
                  {
                    label: "TO",
                    value: "ANYWHERE",
                  },
                  {
                    label: "STATUS",
                    value: "500+ TRUSTED",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="px-2 py-4 text-center sm:px-4"
                  >
                    <div className="font-mono text-[8px] tracking-[0.2em] text-slate-400 sm:text-[9px]">
                      {item.label}
                    </div>

                    <div
                      className={`mt-1 font-mono text-[10px] font-semibold tracking-wide sm:text-xs ${
                        item.label === "STATUS"
                          ? "text-amber-500"
                          : "text-sky-600"
                      }`}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Meta */}

            <div className="mt-4 flex items-center justify-between px-1 font-mono text-[9px] tracking-[0.2em] text-slate-400">
              <span>JOURNEY ID · 2026</span>

              <span className="text-indigo-500">
                ✦ PREMIUM TRAVEL
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;