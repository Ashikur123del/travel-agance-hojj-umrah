"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Left Glow */}

        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-sky-300/30 blur-3xl" />

        {/* Top Right Glow */}

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
          FLOATING PLANE
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -15, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[8%] top-8 hidden text-7xl text-sky-500/10 md:block"
      >
        <BiSolidPlaneAlt />
      </motion.div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            CTA CARD
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
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-8 text-center shadow-2xl shadow-slate-200/60 backdrop-blur-xl md:p-12"
        >
          {/* =================================================
              CARD GLOW
          ================================================== */}

          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />

          {/* =================================================
              DECORATIVE INNER GRADIENT
          ================================================== */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/[0.03] via-transparent to-indigo-400/[0.04]" />

          {/* =================================================
              SECTION LABEL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            viewport={{
              once: true,
            }}
            className="relative mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-sky-500" />

            <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
              Start Your Journey
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-500" />
          </motion.div>

          {/* =================================================
              HEADING
          ================================================== */}

          <motion.h2
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
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="relative text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl"
          >
            Ready for Your Next{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Adventure?
            </span>
          </motion.h2>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            viewport={{
              once: true,
            }}
            className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg"
          >
            Let our experts plan your perfect journey. Whether it&apos;s a
            family vacation, business trip, or spiritual journey like
            Hajj &amp; Umrah — we&apos;re here to help.
          </motion.p>

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

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
              delay: 0.4,
            }}
            viewport={{
              once: true,
            }}
            className="relative mt-7 flex flex-wrap justify-center gap-3 text-sm"
          >
            {/* Phone */}

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-slate-500 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-amber-50 hover:text-slate-700">
              <FaPhone className="text-amber-500" />

              <span>+880 1884-694337</span>
            </div>

            {/* WhatsApp */}

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-slate-500 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:text-slate-700">
              <FaWhatsapp className="text-emerald-500" />

              <span>+880 1884-694337</span>
            </div>

            {/* Email */}

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-slate-500 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-sky-300 hover:bg-sky-50 hover:text-slate-700">
              <FaEnvelope className="text-sky-500" />

              <span>akinaitravelsbd@gmail.com</span>
            </div>
          </motion.div>

          {/* =================================================
              CTA BUTTON
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="relative mt-8 inline-block"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:from-amber-400 hover:to-orange-400 hover:shadow-xl hover:shadow-amber-500/30 md:text-lg"
            >
              Get Started Today

              <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* =================================================
              BOTTOM TEXT
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.65,
            }}
            viewport={{
              once: true,
            }}
            className="relative mt-5 flex items-center justify-center gap-2 text-xs text-slate-400"
          >
            <BiSolidPlaneAlt className="text-xl text-amber-500" />

            Free consultation for first-time travelers
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;