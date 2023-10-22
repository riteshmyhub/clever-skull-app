"use client";
import Link from "next/link";
import React from "react";
import { VscSettingsGear } from "react-icons/vsc";
import { MdStickyNote2, MdOutlineDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { useAppSelector } from "@/redux/store";
import DashboardPanel from "@/app/components/DashboardPanel";
import AuthGuard from "../auth/guards/AuthGuard";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
   
   return (
      <AuthGuard clientRoles={["admin"]}>
         <DashboardPanel
            navList={[
               { title: "overview", to: "/admin/overview", Icon: MdOutlineDashboard, replace: true },
               { title: "Blogs", to: "/admin/blogs", Icon: MdStickyNote2, replace: true },
               { title: "users", to: "/admin/users", Icon: FaUserFriends, replace: true },
               { title: "setting", to: "/admin/setting", Icon: VscSettingsGear, replace: true },
            ]}>
            {children}
         </DashboardPanel>
      </AuthGuard>
   );
}
