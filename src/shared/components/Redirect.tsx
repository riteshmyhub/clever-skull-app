"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
   matchPath: string;
   to: string;
};

export default function Redirect({ matchPath, to }: Props) {
   const router = useRouter();
   const pathname = usePathname();

   useEffect(() => {
      if (pathname === matchPath) {
         router.replace(to);
      }
      return () => {};
   }, [pathname]);
   return <div className="text-xl text-theme-level-5">redirecting...</div>;
}
