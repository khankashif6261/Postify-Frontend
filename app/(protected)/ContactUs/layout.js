"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/home`,
        { credentials: "include" }
      );

      if (res.status === 401) {
        router.replace("/login");
        return;
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) return null; // or spinner

  return <>{children}</>;
}
