"use client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { getCustomization } from "./slices/customization.slice";
import { useAppDispatch, useAppSelector } from "./store";
import { fontsObj } from "@/shared/utils/fonts";
import AuthService from "./services/auth.service";
const UserContext = createContext({});
function AppProvider({ children, user }: { children: ReactNode; user: any }) {
   const dispatch = useAppDispatch();
   const { loading, theme, font } = useAppSelector((state) => state.customizationReducer);
   const { isRefresh } = useAppSelector((state) => state.authReducer);
   const { _useOnLoad } = new AuthService();

   const applyTheme = (theme: any) => {
      const root = document.documentElement;
      Object.keys(theme).forEach((cssVar) => {
         root.style.setProperty(cssVar, theme[cssVar]);
      });
   };

   const applyFont = (param: string) => {
      document.getElementsByTagName("body")[0].className = `bg-theme-level-1 ${fontsObj[param]?.className}`;
   };

   useEffect(() => {
      dispatch(getCustomization());
      return () => {};
   }, []);

   useEffect(() => {
      if (theme) {
         applyTheme(theme);
      }
      if (font) {
         applyFont(font);
      }
      return () => {};
   }, [theme, font]);

   useEffect(() => {
      dispatch(_useOnLoad());
      return () => {};
   }, [isRefresh]);

   return (
      <div>
         {loading ? (
            <div>
               <section className="h-[100%] w-[100%] flex justify-center items-center fixed" style={{ fontFamily: "Arial, Helvetica, sans-serif", background: "white" }}>
                  <div role="status">
                     <img src="/logo.png" alt="logo" width={100} className="block mx-auto" />
                     <div className="text-2xl font-semibold text-gray-800 text-center">Clever Skull</div>
                  </div>
               </section>
            </div>
         ) : (
            <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
         )}
      </div>
   );
}

function useAuth() {
   return useContext(UserContext);
}

export { AppProvider, useAuth };
