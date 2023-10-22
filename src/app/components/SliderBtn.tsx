"use client";
import React from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

export default function SliderBtn({ ID }: { ID: string }) {
   const slideLeft = () => {
      let slider = document.getElementById(ID);
      if (slider) slider.scrollLeft = slider.scrollLeft - 320;
   };

   const slideRight = () => {
      let slider = document.getElementById(ID);
      if (slider) slider.scrollLeft = slider.scrollLeft + 320;
   };
   return (
      <div className="text-center">
         <button className="font-bold py-4 px-3 absolute top-1/2 left-0 transform translate-y-[-50%]" onClick={slideLeft}>
            <VscChevronLeft className="h-20 w-8 inline-block -ml-1 text-theme-level-5" />
         </button>
         <button className="font-bold py-4 px-3 absolute top-1/2 right-0 transform translate-y-[-50%]" onClick={slideRight}>
            <VscChevronRight className="h-20 w-8 inline-block -mr-1 text-theme-level-5" />
         </button>
      </div>
   );
}
