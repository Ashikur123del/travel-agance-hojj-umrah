"use client";

import { authClient } from "@/lib/auth-client";
import { ReactNode } from "react";

interface WithRoleProps {
  roles: string[];
  children: ReactNode;
  fallback?: ReactNode;
}

export default function WithRole({
  roles,
  children,
  fallback = null,
}: WithRoleProps) {
  const { data: session } = authClient.useSession();
  
  const user = session?.user as (typeof session & { role?: string }) | undefined;
  const userRole = user?.role || "user";

  if (!roles.includes(userRole)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}