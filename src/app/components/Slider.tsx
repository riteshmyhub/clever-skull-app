import { Anton } from "next/font/google";
import Link from "next/link";
import React from "react";
import SliderBtn from "./SliderBtn";

type Props = {
   ID: string;
};

const anton = Anton({
   weight: "400",
   subsets: ["latin"],
});

export default function Slider({ ID }: Props) {
   return (
      <div>
         <div className="max-w-[100vw] relative">
            <div className="flex gap-5 overflow-y-hidden whitespace-nowrap scroll-smooth relative py-4 px-2 app-slider" id={ID}>
               {["bascket ball", "codding", "trending", "technology", "text", "fggfg", "fggfg"].map((category, idx) => (
                  <div key={`category-${idx}`} className="transition-all duration-150 ease-in cursor-pointer bg-theme-level-2 rounded-lg">
                     <div className="w-[300px] grid grid-cols-1 gap-2">
                        <div className={`row-start-${(idx % 2) - 1}`}>
                           <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png" alt="img" className="block w-20 object-fill mx-auto py-3" />
                        </div>
                        <div className={`flex justify-center items-center p-2 text-center row-start-${(idx % 2) + 1}`}>
                           <span className={`text-md uppercase font-extrabold text-theme-level-5`}>
                              <Link href={`blogs/${category}`}>{category}</Link>
                           </span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <SliderBtn ID={ID} />
         </div>
      </div>
   );
}
