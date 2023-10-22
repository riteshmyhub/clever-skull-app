"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import ProfilePage from "../../dashboard/profile/page";
import Redirect from "@/app/components/Redirect";

interface AuthGuardType {
   clientRoles: string[];
   children: ReactNode;
}

export default function AuthGuard({ clientRoles, children }: AuthGuardType): JSX.Element {
   const pathname = usePathname();
   const { rootLoading, user } = useAppSelector((state) => state.authReducer);
 
   if (rootLoading) {
      return <p>auth checking...</p>;
   } else {
      if (user) {
         const { allowRoles, profile } = user;
         if (allowRoles && allowRoles.find((role) => clientRoles?.includes(role))) {
            if (profile?.name) {
               return <>{children}</>;
            } else {
               return <ProfilePage />;
            }
         } else {
            return <p>you are unauthorized for page</p>;
         }
      } else {
         return <Redirect matchPath={pathname} to="auth" />;
      }
   }
}
