"use client";

import Link from "next/link";
import { FaNewspaper, FaImages, FaArrowRight, FaChartLine } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 lg:p-10">
      {/* Top Welcome Banner */}
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-950 p-6 md:p-8 text-white shadow-xl">
        <div className="max-w-2xl">
          <span className="mb-3 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-emerald-300 border border-emerald-500/30">
            Admin Control Center
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Welcome to TravelAgence Dashboard
          </h1>
          <p className="mt-2 text-teal-100/80 text-sm md:text-base">
            Manage your website content, home sliders, travel news, and dynamic sections easily from here.
          </p>
        </div>
      </div>

      {/* Quick Stats / Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1: Hero Slider */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <FaImages className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                Active
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Home Slider</h3>
            <p className="mt-1 text-sm text-slate-500">
              Manage banner images and slides for your websites hero section.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100">
            <Link
              href="/heroslider"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition"
            >
              Add Sliders <FaArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Card 2: News & Articles */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
                <FaNewspaper className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-full">
                Publish
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Travel News</h3>
            <p className="mt-1 text-sm text-slate-500">
              Add, edit, or delete recent travel updates, tips, and visa guides.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100">
            <Link
              href="/addnews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition"
            >
              Add News <FaArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Card 3: Settings */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                <FaChartLine className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                System
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Site Settings</h3>
            <p className="mt-1 text-sm text-slate-500">
              Configure general gallery settings, preferences, and details.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100">
            <Link
              href="/addgallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition"
            >
             Add Gallery <FaArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}