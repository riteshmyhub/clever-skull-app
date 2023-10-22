"use client";
import Link from "next/link";
import React from "react";
import Button from "./form/Button";
import { useAuth } from "@/redux/AppProvider";

export default function NavBar() {
   const user = useAuth();
   return (
      <>
         <header>
            <nav className="bg-theme-level-2">
               <div className="md:container md:mx-auto flex flex-wrap items-center justify-between mx-auto py-4 px-3">
                  <a href="#" className="flex items-center">
                     <img src="/logo.png" className="h-10 mr-3" alt="Logo" />
                     <span className="self-center text-3xl font-semibold text-theme-level-5 whitespace-nowrap">Clever Skull</span>
                  </a>
                  <button type="button" className="md:hidden">
                     <span className="sr-only">Open main menu</span>
                     <svg className="w-5 h-5 text-theme-level-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                     </svg>
                  </button>
                  <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                     <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                           <Link href="/" className="block py-2 text-theme-level-5 rounded uppercase text-xl" replace>
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link href="/blogs" className="block py-2 text-theme-level-5 rounded uppercase text-xl">
                              Blogs
                           </Link>
                        </li>
                        {user?.allowRoles ? (
                           <>
                              {user?.allowRoles?.includes("user") && (
                                 <Link href="/dashboard" className="block py-2 text-theme-level-5 rounded uppercase text-xl">
                                    Dashboard
                                 </Link>
                              )}

                              {user?.allowRoles?.includes("admin") && (
                                 <Link href="/admin" className="block py-2 text-theme-level-5 rounded uppercase text-xl">
                                    admin
                                 </Link>
                              )}
                           </>
                        ) : (
                           <Button type="button" role="button" color="primary" size="large" navigate={{ path: "/auth/login" }}>
                              Login
                           </Button>
                        )}
                     </ul>
                  </div>
               </div>
            </nav>
         </header>
      </>
   );
}
