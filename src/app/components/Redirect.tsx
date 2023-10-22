"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
   matchPath: string;
   to: string;
   callback?: Function;
};

export default function Redirect({ matchPath, to, callback }: Props) {
   const router = useRouter();
   const pathname = usePathname();

   useEffect(() => {
      if (pathname.includes(matchPath)) {
         callback && callback();
         router.replace(to);
         router.refresh();
      }
      return () => {};
   }, [pathname]);
   return <p>auth guard is redirecting...</p>;
}
