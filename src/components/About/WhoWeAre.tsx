"use client";

import { IoIosTrophy } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaHandshake,
  FaGlobe,
  FaHeart,
  FaRegStar,
} from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { PiShoppingBagOpenFill } from "react-icons/pi";

const WhoWeAre = () => {
  const highlights = [
    {
      icon: FaHandshake,
      text: "Trusted visa processing services with 95% success rate",
    },
    {
      icon: FaGlobe,
      text: "Affordable air ticketing to 30+ countries worldwide",
    },
    {
      icon: FaHeart,
      text: "Customized tour packages for families, couples, and groups",
    },
    {
      icon: FaCheckCircle,
      text: "Hajj & Umrah specialists with 5+ years of experience",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top Left Glow */}
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-sky-300/30 blur-3xl" />

        {/* Right Glow */}
        <div className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-300/25 blur-3xl" />

        {/* Bottom Glow */}
        <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-blue-200/30 blur-3xl" />

        {/* Soft Radial Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(99,102,241,0.10),transparent_30%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">

          {/* =========================
              IMAGE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">

              <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px]">

                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                  alt="About Organized Adventure - Travel Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10" />

              </div>

              {/* Happy Clients */}
              <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-white/20 px-4 py-2 shadow-lg backdrop-blur-md">
                <span className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  500+ Happy Clients
                </span>
              </div>

              {/* Rating */}
              <div className="absolute right-4 top-4 rounded-xl border border-amber-300/30 bg-amber-500/20 px-4 py-2 shadow-lg backdrop-blur-md">
                <span className="flex items-center gap-2 text-sm font-bold text-amber-200">
                  <FaRegStar />
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </motion.div>

          {/* =========================
              CONTENT
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >

            {/* Label */}
            <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold uppercase tracking-widest text-sky-600">
              Who We Are
            </span>

            {/* Heading */}
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Crafting Journeys,
              <br />

              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Building Trust
              </span>
            </h2>

            {/* Paragraph */}
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Our travel agency started its journey in{" "}
              <strong className="text-slate-900">2018</strong> with a simple
              mission: to provide trusted, safe, and professional travel-related
              services for customers across Bangladesh and beyond. What began
              as a small dream has now grown into a full-service travel agency,
              helping thousands of travelers reach their dream destinations.
            </p>

            <p className="mt-3 text-base leading-relaxed text-slate-500 md:text-lg">
              Our goal is to make{" "}
              <strong className="text-slate-900">visa processing</strong>,{" "}
              <strong className="text-slate-900">air ticketing</strong>,{" "}
              <strong className="text-slate-900">tour planning</strong>,{" "}
              <strong className="text-slate-900">hotel booking</strong>,{" "}
              <strong className="text-slate-900">Hajj</strong>,{" "}
              <strong className="text-slate-900">Umrah</strong>, and{" "}
              <strong className="text-slate-900">
                Saudi-related services
              </strong>{" "}
              easier for everyone. We believe that travel should be seamless,
              stress-free, and unforgettable.
            </p>

            {/* Highlights */}
            <ul className="mt-6 space-y-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white/75 p-3 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-lg"
                  >
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500 transition-transform duration-300 group-hover:scale-110" />

                    <span className="text-sm text-slate-600 md:text-base">
                      {item.text}
                    </span>
                  </motion.li>
                );
              })}
            </ul>

            {/* Bottom Meta */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-500"
            >
              <p className="flex items-center gap-2">
                <span className="text-2xl text-amber-500">
                  <IoIosTrophy />
                </span>
                Award-winning service
              </p>

              <span className="hidden h-6 w-px bg-slate-200 sm:block" />

              <p className="flex items-center gap-2">
                <span className="text-2xl text-amber-500">
                  <FaEarthAfrica />
                </span>
                Global network
              </p>

              <span className="hidden h-6 w-px bg-slate-200 sm:block" />

              <p className="flex items-center gap-2">
                <span className="text-2xl text-amber-500">
                  <PiShoppingBagOpenFill />
                </span>
                50+ team members
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;