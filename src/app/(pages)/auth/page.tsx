"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectToLoginPage() {
   const router = useRouter();
   const pathname = usePathname();

   useEffect(() => {
      if (pathname.includes("auth")) {
         router.replace("/auth/login");
      }
      return () => {};
   }, [pathname]);

   return <div>redirecting to login page...</div>;
}
