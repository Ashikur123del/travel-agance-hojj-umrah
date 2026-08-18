import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import DashboardSidebar from "@/components/Dashboard/Sidebar";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Dashboard | Travel",
  description: "Travel Admin Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/40 text-slate-800">
      
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="min-h-screen lg:pl-64">
        
        {/* Desktop Header */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="min-h-screen pt-16 lg:pt-0">
          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}