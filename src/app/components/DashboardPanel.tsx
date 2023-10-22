"use client";
import Link from "next/link";
import React, { ReactNode, useEffect } from "react";
import { MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Button from "./form/Button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import AuthService from "@/redux/services/auth.service";
import { useAuth } from "@/redux/AppProvider";

type Props = {
   children: ReactNode;
   navList: NavItem[];
};
type NavItem = {
   title: string;
   to: string;
   Icon?: any;
   replace: boolean;
};

export default function DashboardPanel({ children, navList }: Props) {
   const user = useAuth();
   const pathname = usePathname();
   const router = useRouter();
   const { _logout } = new AuthService();
   const dispatch = useAppDispatch();

   const logoutCallback = ({ data, error }: any) => {
      if (data) {
         router.replace("/auth/login");
         router.refresh();
         toast.success(data?.message);
      }
      if (error) {
         router.replace("/auth/login");
         toast.error(error.response?.data?.message);
         router.refresh();
      }
   };

   useEffect(() => {
      return () => {
         router.refresh();
      };
   }, []);

   return (
      <>
         <div className="row h-[100%]">
            <div className="sm:col-12 md:col-3 h-[100%] bg-theme-level-2">
               {user?.profile ? (
                  <div className="flex items-center space-x-4 p-2 mb-3">
                     <img className="w-20 h-20 rounded-full" src="/avatar.png" alt="" />
                     <div className="font-medium text-theme-level-5">
                        <div className="text-2xl capitalize">
                           {user?.profile?.name} {user?.profile?.lastname}
                        </div>
                        <div className="text-sm">{user?.email}</div>
                     </div>
                  </div>
               ) : (
                  <div className="font-medium text-theme-level-5 p-2 mb-3">
                     <div className="text-2xl">{user?.email}</div>
                  </div>
               )}
               <ul className="space-y-2 font-medium">
                  {navList.map((item, idx) => (
                     <React.Fragment key={`${item.title}-${idx + 1}`}>
                        <li style={{ opacity: pathname.includes(item.to) ? "100%" : "55%" }}>
                           <Link href={item.to} className="flex items-center p-2 text-theme-level-5  group text-lg" replace={item?.replace}>
                              <item.Icon size={22} />
                              <span className="flex-1 ml-3 whitespace-nowrap">{item.title}</span>
                           </Link>
                        </li>
                     </React.Fragment>
                  ))}
                  <li>
                     <Button
                        role="button"
                        type="button"
                        dialog={{
                           title: "you are current logged in you will be automatically logged out in 50 seconds",
                           type: "danger",
                           callback() {
                              dispatch(_logout({ callback: logoutCallback }));
                           },
                        }}>
                        <span className="flex items-center p-3 text-red-600">
                           <MdLogout size={22} />
                           <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                        </span>
                     </Button>
                  </li>
               </ul>
            </div>
            <div className="sm:col-12 md:col-9 h-[100%] p-3">{children}</div>
         </div>
      </>
   );
}
