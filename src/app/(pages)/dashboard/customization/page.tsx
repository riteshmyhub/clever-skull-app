"use client";
import { Theme, setFont, setTheme } from "@/redux/slices/customization.slice";
import { useAppDispatch } from "@/redux/store";
import { fontsObj } from "@/shared/utils/fonts";
import { color_palettes } from "@/shared/utils/theme";
import React from "react";

export default function ThemesPage() {
   const dispatch = useAppDispatch();
   const setAppTheme = (varObj: Theme) => {
      dispatch(setTheme(varObj));
   };

   const setAppFont = (font: string) => {
      dispatch(setFont(font));
   };
   return (
      <>
         <div>
            <div className="text-xl text-theme-level-5 mb-4">Dashboard</div>
            {/* Themes */}
            <div className="mb-4 bg-theme-level-2 p-4">
               <div className="text-sm text-theme-level-5 mb-3">Themes</div>
               <div className="grid grid-cols-4 gap-4">
                  {color_palettes.map((color, idx) => (
                     <React.Fragment key={color.text}>
                        <div style={{ background: color.palette, color: color.text }}>
                           <div className="uppercase text-center p-5">
                              <button onClick={() => setAppTheme(color.var)}>{color.themeName}</button>
                           </div>
                        </div>
                     </React.Fragment>
                  ))}
               </div>
            </div>
            {/* Fonts */}
            <div className="mb-4 bg-theme-level-2 p-4">
               <div className="text-sm text-theme-level-5 mb-3">Fonts</div>
               <div className="grid grid-cols-4 gap-4">
                  {Object.keys(fontsObj).map((font, idx) => (
                     <React.Fragment key={font}>
                        <div className="border border-theme-level-3">
                           <div className="text-theme-level-5 text-center p-5">
                              <button onClick={() => setAppFont(font)}>{font}</button>
                           </div>
                        </div>
                     </React.Fragment>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}
