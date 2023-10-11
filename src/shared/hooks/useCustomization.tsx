"use client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { Toaster } from "react-hot-toast";
import { applyTheme } from "../utils/theme";
import { applyFont } from "../utils/fonts";

type Theme =
   | {
        "theme-level-1": string;
        "theme-level-2": string;
        "theme-level-3": string;
        "theme-level-4": string;
        "theme-level-5": string;
     }
   | string;
type State = {
   theme: {
      theme?: Theme;
      setTheme: React.Dispatch<React.SetStateAction<any>>;
   };
   font: {
      font?: string;
      setFont: React.Dispatch<React.SetStateAction<any>>;
   };
};

const CustomizationContext = createContext<State | null>(null);
function CustomizationProvider({ children, splash }: { children?: ReactNode; splash?: boolean }) {
   const isWindow = typeof window !== "undefined";
   const [font, setFont] = useState<string>((isWindow && (localStorage.getItem("font") as string)) || "");
   const [theme, setTheme] = useState(
      (isWindow && JSON.parse(localStorage.getItem("theme") as string)) || {
         //
         "theme-level-1": "#111111",
         "theme-level-2": "#333333",
         "theme-level-3": "#555555",
         "theme-level-4": "#777777",
         "theme-level-5": "#999999",
      }
   );
   const [loading, setLoading] = useState(!isWindow);
   const [isClient, setIsClient] = useState(false);
   useEffect(() => {
      setIsClient(true);
   }, [theme]);
   useEffect(() => {
      if (isWindow && theme) {
         applyTheme(theme);
      }
   }, [theme]);

   useEffect(() => {
      if (isWindow && font) {
         applyFont(font);
      }
   }, [font]);

   return splash && !isClient ? (
      <>
         <section className="h-[100%] w-[100%] flex justify-center items-center fixed" style={{ fontFamily: "Arial, Helvetica, sans-serif", background: "white" }}>
            <div role="status">
               <img src="/logo.png" alt="logo" width={100} className="block mx-auto" />
               <div className="text-2xl font-semibold text-gray-800 text-center">Clever Skull</div>
            </div>
         </section>
      </>
   ) : (
      <CustomizationContext.Provider
         value={{
            theme: { theme, setTheme },
            font: { font, setFont },
         }}>
         {children}
         <Toaster />
      </CustomizationContext.Provider>
   );
}

function useCustomization() {
   return useContext(CustomizationContext);
}

export { CustomizationProvider, useCustomization };
