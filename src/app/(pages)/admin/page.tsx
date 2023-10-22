"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectToProfilePage() {
   const router = useRouter();
   const pathname = usePathname();

   useEffect(() => {
      if (pathname.includes("admin")) {
         router.replace("/admin/overview");
      }
      return () => {};
   }, [pathname]);

   return <div>redirecting to overview page...</div>;
}
