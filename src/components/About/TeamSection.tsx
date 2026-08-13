"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { ImManWoman } from "react-icons/im";

const team = [
  {
    id: 1,
    name: "Md. Rahman",
    role: "CEO & Founder",
    experience: "15+ years in travel industry",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    bio: "Visionary leader with a passion for creating unforgettable travel experiences.",
  },
  {
    id: 2,
    name: "Nasrin Sultana",
    role: "Visa Specialist",
    experience: "8+ years in visa processing",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    bio: "Expert in handling complex visa applications with a 95% success rate.",
  },
  {
    id: 3,
    name: "Kamal Hossain",
    role: "Tour Operations Manager",
    experience: "10+ years in tour management",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    bio: "Specializes in creating custom tour packages for families and groups.",
  },
  {
    id: 4,
    name: "Fatema Akhter",
    role: "Customer Support Lead",
    experience: "7+ years in hospitality",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    bio: "Dedicated to ensuring every client receives personalized attention and care.",
  },
];

const TeamSection = () => {
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

        {/* Radial Gradient */}
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
          className="mb-12 text-center"
        >

          {/* Small Label */}

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-gradient-to-r from-transparent to-sky-500" />

            <span className="rounded-full bg-sky-500/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
              Our Team
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-sky-500" />

          </div>

          {/* Heading */}

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Dedicated professionals committed to making your travel dreams a
            reality
          </p>
        </motion.div>

        {/* =====================================================
            TEAM GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/75 p-6 text-center shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-sky-100"
            >

              {/* =================================================
                  AVATAR
              ================================================== */}

              <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-amber-300/70 bg-amber-50 transition-all duration-300 group-hover:border-amber-400 group-hover:shadow-lg group-hover:shadow-amber-200/50">

                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="112px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              {/* =================================================
                  NAME
              ================================================== */}

              <h4 className="text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-indigo-600">
                {member.name}
              </h4>

              {/* Role */}

              <p className="mt-1 text-sm font-semibold text-amber-500">
                {member.role}
              </p>

              {/* Experience */}

              <p className="mt-1 text-xs text-slate-400">
                {member.experience}
              </p>

              {/* Bio */}

              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-500">
                {member.bio}
              </p>

              {/* =================================================
                  SOCIAL ICONS
              ================================================== */}

              <div className="mt-5 flex justify-center gap-3">

                {/* Facebook */}

                <a
                  href="#"
                  aria-label={`${member.name} Facebook`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-300 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                >
                  <FaFacebookF className="h-3.5 w-3.5" />
                </a>

                {/* Twitter */}

                <a
                  href="#"
                  aria-label={`${member.name} Twitter`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-300 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
                >
                  <FaTwitter className="h-3.5 w-3.5" />
                </a>

                {/* LinkedIn */}

                <a
                  href="#"
                  aria-label={`${member.name} LinkedIn`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <FaLinkedinIn className="h-3.5 w-3.5" />
                </a>

              </div>

              {/* =================================================
                  HOVER GLOW
              ================================================== */}

              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/[0.04] via-transparent to-indigo-400/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            </motion.div>
          ))}

        </div>

        {/* =====================================================
            TEAM COUNT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 text-center"
        >
          <p className="flex items-center justify-center gap-2 text-sm text-slate-400">

            <span className="text-2xl text-amber-500">
              <ImManWoman />
            </span>

            <span>
              50+ dedicated team members working to serve you better
            </span>

          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;