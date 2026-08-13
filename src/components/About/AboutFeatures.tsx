"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaClock,
  FaGlobe,
  FaHeadset,
  FaUserCheck,
  FaDollarSign,
} from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Trusted & Reliable",
    description:
      "We have built a reputation for honesty, transparency, and reliable service. Every client is treated with respect and professionalism, ensuring peace of mind throughout their travel journey.",
    badge: "⭐ 4.9/5",
  },
  {
    icon: FaClock,
    title: "Experience Since 2018",
    description:
      "With years of industry experience, we understand the complexities of travel planning. Our expertise ensures smooth visa processing, ticketing, and tour management without any hassle.",
    badge: "5+ Years",
  },
  {
    icon: FaGlobe,
    title: "Global Network",
    description:
      "We have strong partnerships with airlines, hotels, and embassies worldwide. This allows us to offer competitive prices, exclusive deals, and seamless connections to your dream destinations.",
    badge: "30+ Countries",
  },
  {
    icon: FaHeadset,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is always ready to assist you anytime, anywhere. Whether it's a last-minute change or urgent query, we're just a call or message away.",
    badge: "Round-the-clock",
  },
  {
    icon: FaUserCheck,
    title: "Personalized Service",
    description:
      "We believe every traveler is unique. That's why we customize our services to match your specific needs, budget, and preferences – creating a truly personalized travel experience.",
    badge: "Tailored Plans",
  },
  {
    icon: FaDollarSign,
    title: "Best Price Guarantee",
    description:
      "We offer competitive pricing without compromising quality. Our transparent pricing ensures you get the best value for your money, with no hidden charges or surprises.",
    badge: "Budget-friendly",
  },
];

const AboutFeatures = () => {
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

        {/* Soft Radial Gradient */}
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
          MAIN CONTENT
      ====================================================== */}

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
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
              Why Choose Us
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-sky-500" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Reasons to{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Trust Us
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Here&apos;s what sets us apart from other travel agencies
          </p>
        </motion.div>

        {/* =====================================================
            FEATURES GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
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
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/75 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-sky-100"
              >
                {/* =================================================
                    BADGE
                ================================================== */}

                <div className="absolute right-4 top-4 rounded-full border border-amber-200 bg-amber-50 px-3 py-1">
                  <span className="text-xs font-semibold text-amber-600">
                    {feature.badge}
                  </span>
                </div>

                {/* =================================================
                    ICON
                ================================================== */}

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-amber-200 bg-amber-50 transition-all duration-300 group-hover:scale-110 group-hover:border-amber-300 group-hover:bg-amber-100">
                  <Icon className="h-7 w-7 text-amber-500 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h4 className="text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-indigo-600">
                  {feature.title}
                </h4>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p className="mt-2 text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                  {feature.description}
                </p>

                {/* =================================================
                    BOTTOM LINE
                ================================================== */}

                <div className="mt-5 h-px w-0 bg-gradient-to-r from-sky-400 to-indigo-400 transition-all duration-500 group-hover:w-full" />

                {/* =================================================
                    HOVER GLOW
                ================================================== */}

                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/[0.04] via-transparent to-indigo-400/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;