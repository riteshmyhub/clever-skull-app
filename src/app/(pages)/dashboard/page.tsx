"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectToProfilePage() {
   const router = useRouter();
   const pathname = usePathname();

   useEffect(() => {
      if (pathname.includes("dashboard")) {
         router.replace("/dashboard/profile");
      }
      return () => {};
   }, [pathname]);

   return <div>redirecting to profile page...</div>;
}
