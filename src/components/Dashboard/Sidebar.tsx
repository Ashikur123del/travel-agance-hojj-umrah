"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaPlane,
  FaTachometerAlt,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

export default function DashboardSidebar() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh();
        },
      },
    });
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* =========================
          MOBILE HEADER
      ========================== */}
      <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-emerald-100/70 bg-white/90 px-4 shadow-sm backdrop-blur-md lg:hidden">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-teal-700 transition hover:bg-emerald-100"
        >
          <FaBars className="h-5 w-5" />
        </button>

        <Link
          href="/dashboard"
          className="text-lg font-bold text-teal-700"
        >
          Travel<span className="text-cyan-600">Agence</span>
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-100 bg-amber-50 text-amber-600 transition hover:bg-amber-100"
        >
          <FaSignOutAlt className="h-4 w-4" />
        </button>
      </header>

      {/* =========================
          MOBILE OVERLAY
      ========================== */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* =========================
          SIDEBAR
      ========================== */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
          bg-gradient-to-b from-teal-900 via-teal-800 to-emerald-950
          text-white shadow-2xl shadow-emerald-950/30
          transition-transform duration-300
          lg:w-64
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* =========================
            LOGO
        ========================== */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <Link
            href="/dashboard"
            onClick={closeSidebar}
            className="text-2xl font-bold tracking-wide"
          >
            Travel<span className="text-cyan-200">Agence</span>
          </Link>

          <button
            type="button"
            onClick={closeSidebar}
            className="rounded-lg p-2 text-teal-100 transition hover:bg-white/10 hover:text-white lg:hidden"
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        {/* =========================
            NAVIGATION
        ========================== */}
        <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-200/70">
            Dashboard
          </p>

          <nav className="space-y-2">
            {/* Dashboard */}
            <Link
              href="/dashboard"
              onClick={closeSidebar}
              className="group flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <FaTachometerAlt className="h-4 w-4 text-amber-300" />
              Dashboard
            </Link>

            {/* Profile */}
            <Link
              href="/dashboard/profile"
              onClick={closeSidebar}
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-teal-100 transition hover:bg-emerald-500/10 hover:text-white"
            >
              <FaUser className="h-4 w-4 text-emerald-300" />
              Profile
            </Link>

            {/* Bookings */}
            <Link
              href="/dashboard/bookings"
              onClick={closeSidebar}
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-teal-100 transition hover:bg-emerald-500/10 hover:text-white"
            >
              <FaPlane className="h-4 w-4 text-cyan-300" />
              My Bookings
            </Link>

            {/* Settings */}
            <Link
              href="/dashboard/settings"
              onClick={closeSidebar}
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-teal-100 transition hover:bg-emerald-500/10 hover:text-white"
            >
              <FaCog className="h-4 w-4 text-amber-300" />
              Settings
            </Link>
          </nav>

          <div className="flex-1" />

          {/* Back Website */}
          <Link
            href="/"
            onClick={closeSidebar}
            className="mb-3 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-teal-100 transition hover:bg-white/10 hover:text-white"
          >
            <FaHome className="h-4 w-4 text-emerald-300" />
            Back to Website
          </Link>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="group flex w-full items-center gap-3 rounded-xl border border-amber-400/20 bg-gradient-to-r from-amber-500/10 to-emerald-500/10 px-4 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-400/40 hover:bg-amber-500/15"
          >
            <FaSignOutAlt className="h-4 w-4 text-amber-300 transition-transform group-hover:translate-x-0.5" />
            Logout
          </button>
        </div>

        {/* =========================
            FOOTER
        ========================== */}
        <div className="border-t border-white/10 p-4">
          <p className="text-center text-xs text-teal-200/60">
            © 2026 TravelAgence
          </p>
        </div>
      </aside>
    </>
  );
}