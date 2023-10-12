"use client";
import { ReactNode, useEffect } from "react";
import { getCustomization } from "./slices/customization.slice";
import { useAppDispatch, useAppSelector } from "./store";
import { fontsObj } from "@/shared/utils/fonts";

export default function AppProvider({ children }: { children: ReactNode }) {
   const dispatch = useAppDispatch();
   const { loading, theme, font } = useAppSelector((state) => state.customizationReducer);

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

   return (
      <div>
         <div className={loading ? "block" : "hidden"}>
            <section className="h-[100%] w-[100%] flex justify-center items-center fixed" style={{ fontFamily: "Arial, Helvetica, sans-serif", background: "white" }}>
               <div role="status">
                  <img src="/logo.png" alt="logo" width={100} className="block mx-auto" />
                  <div className="text-2xl font-semibold text-gray-800 text-center">Clever Skull</div>
               </div>
            </section>
         </div>
         <div className={!loading ? "block" : "hidden"}>{children}</div>
      </div>
   );
}
