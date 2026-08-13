"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import Left from "@/assets/left.png";
import Right from "@/assets/right.png";
import H1 from "@/assets/H-1.avif";
import H2 from "@/assets/H-2.avif";
import H3 from "@/assets/H-3.avif";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: H1,
      alt: "Beach destination",
      firstText: "Your trusted travel partner for",
      highlightText: "visa, ticket, hotel, tour,",
      secondText: "Hajj, Umrah, and Saudi services.",
      description:
        "We make your journey seamless – from visa processing to flight bookings, hotel reservations, and unforgettable tour packages.",
      planImage:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
      planLabel: "Hajj & Umrah Package 2026",
    },
    {
      id: 2,
      image: H2,
      alt: "City skyline",
      firstText: "Explore the world with",
      highlightText: "affordable tours & packages",
      secondText: "tailored just for you.",
      description:
        "From exotic beaches to bustling cities – we curate experiences that match your dreams and budget.",
      planImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      planLabel: "Tour Package 2026",
    },
    {
      id: 3,
      image: H3,
      alt: "Mountain view",
      firstText: "Your",
      highlightText: "Hajj & Umrah",
      secondText: "journey begins here with trust and care.",
      description:
        "We handle everything – visas, flights, hotels, transport, and Ziyarah – so you can focus on your spiritual experience.",
      planImage:
        "https://images.unsplash.com/photo-1584556812953-2bab1e6d95b8?w=600&q=80",
      planLabel: "Umrah Package 2026",
    },
  ];

  /* Animation Variants */
  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const normalText = {
    hidden: { opacity: 0, x: -70 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: "easeInOut" as const },
    },
  };

  const highlightText = {
    hidden: { opacity: 0, x: 100, scale: 0.82 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeInOut" as const },
    },
  };

  const secondLine = {
    hidden: { opacity: 0, y: 45 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" as const },
    },
  };

  return (
    <section className="relative h-[85vh] min-h-[650px] w-full overflow-hidden md:h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="hero-swiper h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full overflow-hidden">
              {/* BACKGROUND IMAGE */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: activeIndex === index ? 1.08 : 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={slide.id === 1}
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>

              {/* PREMIUM OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-indigo-950/50 to-sky-950/35" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
              <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

              {/* CONTENT AREA */}
              <div className="relative z-10 flex h-full w-full items-center justify-center text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  {activeIndex === index && (
                    <motion.div
                      variants={textContainer}
                      initial="hidden"
                      animate="show"
                      className="mx-auto max-w-5xl"
                    >
                      {/* SMALL LABEL */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 25 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.7, delay: 0.1 },
                          },
                        }}
                        className="mb-5 flex items-center justify-center gap-3"
                      >
                        <span className="h-px w-8 bg-gradient-to-r from-transparent to-sky-300 sm:w-12" />
                        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-200 backdrop-blur-md sm:text-xs">
                          Your Journey Starts Here
                        </span>
                        <span className="h-px w-8 bg-gradient-to-l from-transparent to-sky-300 sm:w-12" />
                      </motion.div>

                      {/* MAIN HEADING WITH ABSOLUTE PLANES */}
                      <motion.h1
                        variants={textContainer}
                        initial="hidden"
                        animate="show"
                        className="relative inline-block text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                      >
                        {/* LEFT PLANE - আরও বড় ইমেজ এবং ডায়নামিক অ্যানিমেশন */}
                        <div className="absolute -left-20 -top-16 z-20 hidden sm:block md:-left-36 md:-top-24 lg:-left-48 lg:-top-28">
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: -280,
                              y: -100,
                              scale: 0.5,
                              rotate: -15,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              y: 0,
                              scale: 1,
                              rotate: 0,
                            }}
                            transition={{
                              duration: 1.5,
                              delay: 0.9,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <motion.div
                              animate={{
                                y: [0, -25, 0],
                                rotate: [0, -5, 0],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              /* ইমেজ সাইজ অনেক বড় করা হয়েছে: h-28, h-36, h-48 */
                              className="relative h-28 w-28 md:h-36 md:w-36 lg:h-48 lg:w-48"
                            >
                              <Image
                                src={Left}
                                alt="Travel decoration left"
                                fill
                                className="object-contain drop-shadow-2xl"
                              />
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* FIRST TEXT */}
                        <motion.span
                          variants={normalText}
                          className="inline-block"
                        >
                          {slide.firstText}
                        </motion.span>{" "}

                        {/* HIGHLIGHT TEXT */}
                        <motion.span
                          variants={highlightText}
                          className="inline-block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent"
                        >
                          {slide.highlightText}
                        </motion.span>

                        {/* RIGHT PLANE - আরও বড় ইমেজ এবং ডায়নামিক অ্যানিমেশন */}
                        <div className="absolute -right-20 -top-16 z-20 hidden sm:block md:-right-36 md:-top-24 lg:-right-48 lg:-top-28">
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: 280,
                              y: -100,
                              scale: 0.5,
                              rotate: 15,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              y: 0,
                              scale: 1,
                              rotate: 0,
                            }}
                            transition={{
                              duration: 1.5,
                              delay: 1.1,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <motion.div
                              animate={{
                                y: [0, -28, 0],
                                rotate: [0, 5, 0],
                              }}
                              transition={{
                                duration: 4.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              /* ইমেজ সাইজ অনেক বড় করা হয়েছে: h-28, h-36, h-48 */
                              className="relative h-28 w-28 md:h-36 md:w-36 lg:h-48 lg:w-48"
                            >
                              <Image
                                src={Right}
                                alt="Travel decoration right"
                                fill
                                className="object-contain drop-shadow-2xl"
                              />
                            </motion.div>
                          </motion.div>
                        </div>

                        <br />

                        {/* SECOND TEXT */}
                        <motion.span
                          variants={secondLine}
                          className="inline-block text-white"
                        >
                          {slide.secondText}
                        </motion.span>
                      </motion.h1>

                      {/* DESCRIPTION */}
                      <motion.p
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.75,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg lg:text-xl"
                      >
                        {slide.description}
                      </motion.p>

                      {/* BUTTONS */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.95,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <Link
                            href="/services"
                            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-amber-500/25 transition-all duration-300 hover:from-amber-400 hover:to-orange-400 hover:shadow-amber-500/40 sm:px-7 sm:py-3.5 sm:text-base"
                          >
                            View Services
                          </Link>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20 sm:px-7 sm:py-3.5 sm:text-base"
                          >
                            Contact Us
                          </Link>
                        </motion.div>
                      </motion.div>

                      {/* TRUST BADGES */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.15 }}
                        className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-slate-200/80 sm:text-sm"
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                          100% Trusted
                        </span>
                        <span className="hidden h-4 w-px bg-white/20 sm:block" />
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                          Expert Guidance
                        </span>
                        <span className="hidden h-4 w-px bg-white/20 sm:block" />
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50" />
                          24/7 Support
                        </span>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* SLIDE NUMBER */}
              <div className="absolute bottom-8 left-6 z-20 hidden font-mono text-xs tracking-[0.25em] text-white/50 sm:block md:left-10 lg:left-16">
                0{index + 1}
                <span className="mx-2 text-white/20">/</span>
                0{slides.length}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SWIPER PAGINATION */}
      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          bottom: 28px !important;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: rgba(255, 255, 255, 0.45);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 999px;
          background: #f59e0b;
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;