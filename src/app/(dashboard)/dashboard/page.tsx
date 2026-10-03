"use client";

import React from "react";
import Link from "next/link";
import { FaNewspaper, FaImages, FaArrowRight, FaChartLine, FaCheckCircle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import BecomeAgent from "@/app/(main)/becomeagent/page";


export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession();
 const userRole = (session?.user as Record<string, any>)?.role;
  const userName = session?.user?.name || "User";

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm font-semibold text-slate-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 lg:p-10">
      {/* Dynamic Header */}
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-950 p-6 md:p-8 text-white shadow-xl">
        <div className="max-w-2xl">
          <span className="mb-3 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-emerald-300 border border-emerald-500/30">
            {userRole === "admin"
              ? "Admin Panel"
              : userRole === "agent"
              ? "Agent Portal"
              : "User Registration"}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Welcome, {userName}!
          </h1>
          <p className="mt-2 text-teal-100/80 text-sm md:text-base">
            {userRole === "admin"
              ? "Manage website content, slides, news, and site settings."
              : userRole === "agent"
              ? "Access your agent features and manages operations."
              : "Fill out the registration form below to apply as an agent."}
          </p>
        </div>
      </div>

      {/* 1. ADMIN DASHBOARD */}
      {userRole === "admin" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <FaImages className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Home Slider</h3>
            <p className="mt-1 text-sm text-slate-500">Manage slider images.</p>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link href="/heroslider" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
                Add Sliders <FaArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
                <FaNewspaper className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Travel News</h3>
            <p className="mt-1 text-sm text-slate-500">Manage articles and news.</p>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link href="/addnews" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600">
                Add News <FaArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                <FaChartLine className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Gallery</h3>
            <p className="mt-1 text-sm text-slate-500">Manage photo gallery.</p>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link href="/addgallery" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600">
                Add Gallery <FaArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 2. VERIFIED AGENT DASHBOARD */}
      {userRole === "agent" && (
        <div className="rounded-2xl border border-emerald-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 text-emerald-600 mb-4">
            <FaCheckCircle className="h-8 w-8" />
            <h2 className="text-2xl font-bold text-slate-900">Verified Agent Dashboard</h2>
          </div>
          <p className="text-slate-600">
            Aponar Agent Profile active ache. Ekhon theke aponi aponar agent service ebong booking access korte parben.
          </p>
        </div>
      )}

      {/* 3. REGULAR USER (Shows Registration Form) */}
      {/* {userRole !== "admin" && userRole !== "agent" && (
        <BecomeAgent />
      )} */}
    </div>
  );
}