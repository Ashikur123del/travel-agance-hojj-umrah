"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

export default function DashboardHeader() {
  const router = useRouter();

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

  return (
    <header className="sticky top-0 z-30 hidden h-16 items-center justify-between border-b border-emerald-100/70 bg-white/90 px-6 shadow-sm backdrop-blur-md lg:flex">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600">
          TravelAgence
        </p>

        <h1 className="text-lg font-bold text-slate-800">
          Admin Dashboard
        </h1>
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700"
      >
        <FaSignOutAlt className="h-4 w-4" />
        Logout
      </button>
    </header>
  );
}