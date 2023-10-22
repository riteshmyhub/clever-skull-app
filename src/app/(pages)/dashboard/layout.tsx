"use client";
import React from "react";
import { VscSymbolColor, VscSend, VscBellDot } from "react-icons/vsc";
import { RiUser3Line } from "react-icons/ri";
import DashboardPanel from "@/app/components/DashboardPanel";
import AuthGuard from "../auth/guards/AuthGuard";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
   return (
      <AuthGuard clientRoles={["user"]}>
         <DashboardPanel
            navList={[
               { title: "Profile", to: "/dashboard/profile", Icon: RiUser3Line, replace: true },
               { title: "Customization", to: "/dashboard/customization", Icon: VscSymbolColor, replace: true },
               { title: "Message", to: "/dashboard/message", Icon: VscSend, replace: true },
               { title: "notifications", to: "/dashboard/notifications", Icon: VscBellDot, replace: true },
            ]}>
            {children}
         </DashboardPanel>
      </AuthGuard>
   );
}
