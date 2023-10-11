"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { VscHome, VscSymbolColor, VscSend, VscBellDot, VscSettingsGear } from "react-icons/vsc";
import { MdLogout, MdStickyNote2 } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { RiUser3Line } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <main className="row h-[100%]">
            <aside className="sm:col-12 md:col-3 h-[100%]">
               <div className="p-3 bg-theme-level-2" style={{ height: "inherit" }}>
                  <div className="flex items-center space-x-4 p-2 mb-3">
                     <img className="w-20 h-20 rounded-full" src="/avatar.png" alt="" />
                     <div className="font-medium text-theme-level-5">
                        <div className="text-2xl">Jese Leos</div>
                        <div className="text-sm">Joined in August 2014</div>
                     </div>
                  </div>
                  <ul className="space-y-2 font-medium">
                     <li>
                        <Link href="/" className="flex items-center p-2 text-theme-level-5  rounded-lg group text-lg" replace>
                           <GoHome size={22} />
                           <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                        </Link>
                     </li>
                     <li>
                        <Link href="/dashboard/profile" className="flex items-center p-2 text-theme-level-5  rounded-lg group text-lg" replace>
                           <RiUser3Line size={22} />
                           <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                        </Link>
                     </li>
                     <li>
                        <Link href="/dashboard/customization" className="flex items-center p-2 text-theme-level-5 rounded-lg group text-lg" replace>
                           <VscSymbolColor size={22} />
                           <span className="flex-1 ml-3 whitespace-nowrap">Customisation</span>
                        </Link>
                     </li>
                     {/* <li>
                        <Link href="profile/message" className="flex items-center p-2 text-theme-level-5  rounded-lg group text-lg">
                           <VscSend size={22} />
                           <span className="flex-1 ml-3 whitespace-nowrap">Message</span>
                        </Link>
                     </li> */}
                     <li>
                        <Link href="/dashboard/blogs" className="flex items-center p-2 text-theme-level-5  rounded-lg group text-lg" replace>
                           <MdStickyNote2 size={22} />
                           <span className="flex-1 ml-3 whitespace-nowrap">blogs</span>
                        </Link>
                     </li>
                     <li>
                        <Link href="/dashboard/users" className="flex items-center p-2 text-theme-level-5  rounded-lg group text-lg" replace>
                           <FaUserFriends size={22} />
                           <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                        </Link>
                     </li>
                     {/* <li>
                        <Link href="profile/notifications" className="flex items-center p-2 text-theme-level-5 rounded-lg group text-lg">
                           <VscBellDot size={22} />
                           <span className="flex-1 ml-3 whitespace-nowrap">Notifications</span>
                        </Link>
                     </li> */}
                     <li>
                        <Link href="profile/setting" className="flex items-center p-2 text-theme-level-5  rounded-lg group text-lg" replace>
                           <VscSettingsGear size={22} />
                           <span className="flex-1 ml-3 whitespace-nowrap">Setting</span>
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="flex items-center p-2 rounded-lg group text-lg text-error">
                           <MdLogout size={22} />
                           <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                        </Link>
                     </li>
                  </ul>
               </div>
            </aside>
            <section className="sm:col-12 md:col-9 h-[100%]">
               <div className="p-3">{children}</div>
            </section>
         </main>
      </>
   );
}
