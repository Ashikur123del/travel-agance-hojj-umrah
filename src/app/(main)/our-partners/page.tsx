"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { ImManWoman } from "react-icons/im";

// =====================================================
// Images
// =====================================================

import Name1 from "@/assets/Md Rokibul Islam (Mati).jpeg";
import Name2 from "@/assets/Md Nur Alam.jpeg";
import Name3 from "@/assets/Alhaz Mawlana Anisur Rahman.jpeg";
import Name4 from "@/assets/Mamun Chowdhury.jpeg";
import Name5 from "@/assets/Md Unus Hossain.jpeg";

import Img1 from "@/assets/1.jpeg";
import Img2 from "@/assets/2.jpeg";
import Img3 from "@/assets/3.jpeg";
import Img4 from "@/assets/4.jpeg";
import Img5 from "@/assets/5.jpeg";

// =====================================================
// Types
// =====================================================

interface SocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
}

interface Partner {
  id: number;
  name: string;
  role: string;
  experience: string;
  avatar: StaticImageData;
  bio: string;
  socials: SocialLinks;
  img: StaticImageData;
}

// =====================================================
// Data
// =====================================================

const partnersData: Partner[] = [
  {
    id: 1,
    name: "Md. Rokibul Islam (Mati)",
    role: "Managing Director",
    experience: "2+ years in Hajj & Umrah Management",
    avatar: Name1,
    bio: "Visionary leader overseeing overall operations, strategic planning, and ensuring world-class service for pilgrims.",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    img: Img1,
  },

  {
    id: 2,
    name: "Md. Nur Alam",
    role: "Director",
    experience: "3+ years in Aviation & Logistics",
    avatar: Name2,
    bio: "Manages airline ticketing, global partner connections, and digital booking infrastructure for seamless travel.",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    img: Img2,
  },

  {
    id: 3,
    name: "Md. Alhaz Mawlana Anisur Rahman",
    role: "Director",
    experience: "4+ years in Islamic Guidance",
    avatar: Name3,
    bio: "Guides pilgrims step-by-step through holy rituals according to authentic Sunnah, leading pre-Hajj seminars.",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    img: Img3,
  },

  {
    id: 4,
    name: "Md. Mamun Chowdhury",
    role: "Director",
    experience: "3+ years in Visa Processing",
    avatar: Name4,
    bio: "Supervises fast-track Saudi visa processing, customer care workflows, and customized travel packages.",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    img: Img4,
  },

  {
    id: 5,
    name: "Md. Unus Hossain",
    role: "Director (IT)",
    experience: "14+ years in Financial Management",
    avatar: Name5,
    bio: "Handles financial assets, transparent pricing strategies, and corporate partnerships with international hotels.",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    img: Img5,
  },
];

// =====================================================
// Component
// =====================================================

const OurPartnersPage: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50/60 via-white to-amber-50/40 py-16 md:py-20 lg:py-24">

      {/* ================================================= */}
      {/* Background */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-emerald-200/25 blur-3xl" />

        <div className="absolute -right-32 top-1/4 h-[380px] w-[380px] rounded-full bg-amber-200/20 blur-3xl" />

        <div className="absolute bottom-[-180px] left-1/3 h-[420px] w-[420px] rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.06),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(245,158,11,0.06),transparent_30%)]" />
      </div>

      {/* ================================================= */}
      {/* Container */}
      {/* ================================================= */}

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================================================= */}
        {/* Header */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-12"
        >
          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-500" />

            <span className="rounded-full bg-emerald-500/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Board of Directors & Owners
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-500" />

          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Meet Our Respected{" "}
            <span className="bg-gradient-to-r from-emerald-700 via-amber-600 to-emerald-800 bg-clip-text text-transparent">
              Agency Partners & Owners
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            The visionary leaders and directors steering our travel agency
            toward excellence, transparency, and devotion.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* Partners */}
        {/* ONE PARTNER = ONE FULL ROW */}
        {/* ================================================= */}

        <div className="grid grid-cols-1  md:grid-cols-2">

          {partnersData.map((partner) => (

            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: partner.id * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-slate-200/80
                bg-white/90
                p-4
                shadow-md
                shadow-slate-200/40
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-emerald-300
                hover:shadow-xl
                hover:shadow-emerald-100/50
                sm:p-5
              "
            >

              {/* ================================================= */}
              {/* ONE ROW CONTENT */}
              {/* ================================================= */}

              <div className="flex w-full flex-row items-center gap-4 sm:gap-5 lg:gap-7">

                {/* ================================================= */}
                {/* LEFT PERSON IMAGE */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    h-40
                    w-28
                    shrink-0
                    overflow-hidden
                    rounded-2xl
                    border-2
                    border-amber-400
                    bg-slate-100
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:border-emerald-500

                    sm:h-44
                    sm:w-32

                    lg:h-48
                    lg:w-36
                  "
                >
                  <Image
                    src={partner.avatar}
                    alt={partner.name}
                    fill
                    sizes="
                      (max-width: 640px) 112px,
                      (max-width: 1024px) 128px,
                      144px
                    "
                    className="
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* ================================================= */}
                {/* MIDDLE TEXT */}
                {/* ================================================= */}

                <div className="min-w-0 flex-1 self-stretch">

                  <div className="flex h-full flex-col justify-between">

                    <div>

                      {/* Name */}

                      <h3
                        className="
                          text-base
                          font-bold
                          leading-tight
                          text-slate-800
                          transition-colors
                          duration-300
                          group-hover:text-emerald-700

                          sm:text-lg

                          lg:text-xl
                        "
                      >
                        {partner.name}
                      </h3>

                      {/* Role */}

                      <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wide text-amber-600 sm:text-[11px]">
                        {partner.role}
                      </p>

                      {/* Experience */}

                      <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-[11px]">
                        {partner.experience}
                      </p>

                      {/* Divider */}

                      <div className="my-2.5 h-px w-8 bg-emerald-400" />

                      {/* Bio */}

                      <p className="max-w-3xl text-[12px] leading-5 text-slate-600 sm:text-[13px] sm:leading-6">
                        {partner.bio}
                      </p>

                    </div>

                    {/* ================================================= */}
                    {/* Social */}
                    {/* ================================================= */}

                    <div className="mt-3 flex gap-2 sm:mt-4">

                      <Link
                        href={partner.socials.facebook}
                        aria-label={`${partner.name} Facebook`}
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-200
                          bg-white
                          text-slate-400
                          transition-all
                          hover:border-emerald-300
                          hover:bg-emerald-50
                          hover:text-emerald-600

                          sm:h-8
                          sm:w-8
                        "
                      >
                        <FaFacebookF className="h-3 w-3" />
                      </Link>

                      <Link
                        href={partner.socials.twitter}
                        aria-label={`${partner.name} Twitter`}
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-200
                          bg-white
                          text-slate-400
                          transition-all
                          hover:border-amber-300
                          hover:bg-amber-50
                          hover:text-amber-600

                          sm:h-8
                          sm:w-8
                        "
                      >
                        <FaTwitter className="h-3 w-3" />
                      </Link>

                      <Link
                        href={partner.socials.linkedin}
                        aria-label={`${partner.name} LinkedIn`}
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-200
                          bg-white
                          text-slate-400
                          transition-all
                          hover:border-emerald-300
                          hover:bg-emerald-50
                          hover:text-emerald-700

                          sm:h-8
                          sm:w-8
                        "
                      >
                        <FaLinkedinIn className="h-3 w-3" />
                      </Link>

                    </div>

                  </div>

                </div>

                {/* ================================================= */}
                {/* RIGHT BUSINESS CARD IMAGE - BIGGER */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    h-32
                    w-48
                    shrink-0
                    overflow-hidden
                    rounded-2xl
                    border-2
                    border-emerald-400/70
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:border-amber-500
                    group-hover:shadow-md

                    sm:h-36
                    sm:w-52

                    lg:h-40
                    lg:w-56

                    xl:h-44
                    xl:w-64
                  "
                >
                  <Image
                    src={partner.img}
                    alt={`${partner.name} business card`}
                    fill
                    sizes="
                      (max-width: 640px) 192px,
                      (max-width: 768px) 208px,
                      (max-width: 1280px) 224px,
                      256px
                    "
                    className="
                      object-contain
                      object-center
                      p-0
                      transition-transform
                      duration-500
                      group-hover:scale-[1.02]
                    "
                  />
                </div>

              </div>

              {/* ================================================= */}
              {/* Hover Glow */}
              {/* ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-2xl
                  bg-gradient-to-br
                  from-emerald-500/[0.035]
                  via-transparent
                  to-amber-500/[0.035]
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

            </motion.div>

          ))}

        </div>

        {/* ================================================= */}
        {/* Footer Badge */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-emerald-200
              bg-white
              px-5
              py-2
              text-xs
              font-semibold
              text-slate-600
              shadow-sm
            "
          >
            <span className="text-lg text-amber-500">
              <ImManWoman />
            </span>

            <span>
              Board of Directors leading our branches in Dhaka, Makkah,
              and Madinah
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default OurPartnersPage;