"use client";
import { useRouter } from "next/navigation";
import { ReactNode, forwardRef, useImperativeHandle, useState } from "react";
import { toast } from "react-hot-toast";
import NextButton from "./NextButton";
import useMediaQuery from "../hooks/useMediaQuery";
import axios from "axios";

const Sidebar = ({ children }: { children: ReactNode }, ref: React.Ref<unknown>) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const matches = useMediaQuery("(min-width: 768px)");

   const toggle = () => {
      setIsOpen(!isOpen);
   };

   useImperativeHandle(ref, () => ({
      toggle,
   }));

   return (
      <>
         {matches ? (
            <div className="w-full md:block md:w-auto" id="navbar-dropdown">
               {children}
            </div>
         ) : (
            isOpen && (
               <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-50">
                  <div className="absolute top-0 left-0 p-4 bg-white shadow-md w-[90%] h-[100%]">
                     <div className="flex justify-between items-center pb-2 border-b">
                        <h5 className="text-lg font-semibold" id="offcanvasLabel">
                           Clever Skull
                        </h5>
                        <button onClick={toggle}>isOpen</button>
                     </div>
                     <div className="mt-4">{children}</div>
                  </div>
               </div>
            )
         )}
      </>
   );
};
export default forwardRef(Sidebar);
export const LoginButton = () => {
   let router = useRouter();
   return (
      <NextButton role="button" type="button" color="primary" size="large" onClick={() => router.replace("/auth/login")}>
         login
      </NextButton>
   );
};

export const LogoutButton = () => {
   let router = useRouter();

   const _logout = async () => {
      try {
         const { data } = await axios.get("/api/v1/auth/logout");
         router.replace("/auth/login");
         toast.success(data?.message);
         router.refresh();
      } catch (error: any) {
         toast.error(error.response?.data?.message);
      }
   };

   return (
      <>
         <NextButton
            role="button"
            type="button"
            color="danger"
            size="large"
            dialog={{
               title: "you are current logged in you will be automatically logged out in 50 seconds",
               type: "danger",
               callback() {
                  _logout();
               },
            }}>
            logout
         </NextButton>
      </>
   );
};
