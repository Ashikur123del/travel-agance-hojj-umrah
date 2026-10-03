"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaLock, FaArrowRight, FaUserShield, FaUserCheck } from "react-icons/fa";
import { handleSignIn } from "@/lib/auth-service";
import { verifyAgent } from "@/lib/serviceapi/agent/api";
import H1 from "@/assets/H-1.avif";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Login Type: "user" (Mobile Only) or "admin" (Email & Password)
  const [loginType, setLoginType] = useState<"user" | "admin">("user");

  // User Login Fields
  const [mobileNo, setMobileNo] = useState("");
  const [userName, setUserName] = useState("");

  // Admin Login Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (loginType === "user") {
        // User Verification via Mobile & Name using agent service
        const data = await verifyAgent(userName, mobileNo);

        if (data.agent) {
          // 1. Agent data localStorage-এ সেভ করা
          localStorage.setItem("agentData", JSON.stringify(data.agent));

          // 2. Proxy / Middleware bypass করার জন্য Cookie সেট করা (৭ দিনের মেয়াদ)
          document.cookie = "agent_verified=true; path=/; max-age=604800";
        }

        const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
        router.push(callbackUrl);
        router.refresh();
      } else {
        // Admin Login via Email & Password
        await handleSignIn(
          { email, password },
          () => {
            const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
            router.push(callbackUrl);
            router.refresh();
          },
          (errMsg) => {
            setError(errMsg);
          }
        );
      }
    } catch (err: any) {
      console.error("Login verification error:", err);
      setError(err?.message || "Login failed. Please check your network or inputs.");
    } finally {
      // 3. Success বা Error যাই হোক, বাটন আনলক করার জন্য Loading বন্ধ করা
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/40">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${H1.src})` }}
          />
        </div>

        <div className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">
            
            {/* Login Type Switcher */}
            <div className="mb-6 flex rounded-2xl bg-slate-100 p-1.5 shadow-inner">
              <button
                type="button"
                onClick={() => { setLoginType("user"); setError(""); }}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all ${
                  loginType === "user"
                    ? "bg-white text-emerald-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <FaUserCheck className="text-emerald-600" /> User / Agent Mobile
              </button>
              <button
                type="button"
                onClick={() => { setLoginType("admin"); setError(""); }}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all ${
                  loginType === "admin"
                    ? "bg-white text-amber-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <FaUserShield className="text-amber-600" /> Admin Email
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900">
                {loginType === "user" ? "Agent Verification" : "Admin Sign In"}
              </h2>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                {loginType === "user"
                  ? "Enter your registered name and mobile number to enter dashboard."
                  : "Enter your admin email and password to access panel."}
              </p>
            </div>

            {error && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* USER LOGIN FIELDS (Name & Mobile Number) */}
              {loginType === "user" ? (
                <>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter registered name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-4 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        placeholder="017xxxxxxxx"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                      />
                    </div>
                  </div>
                </>
              ) : (
                /* ADMIN LOGIN FIELDS (Email & Password) */
                <>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Admin Email
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@example.com"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Password
                    </label>
                    <div className="relative">
                      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-20 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-emerald-600"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-600 px-6 py-3.5 font-bold text-white transition-all hover:opacity-90 disabled:opacity-50"
              >
                {loading
                  ? "Verifying..."
                  : loginType === "user"
                  ? "Access Dashboard"
                  : "Sign In as Admin"}
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              New Agent?{" "}
              <Link
                href="/become-agent"
                className="font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
              >
                Apply Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}