import Link from "next/link";
import React from "react";

export default function BlogCard() {
   return (
      <>
         <div className="mx-auto group hover:no-underline focus:no-underline bg-theme-level-2">
            <img role="presentation" className="object-fill w-full rounded h-[248px]" src="/placeholder-blog.png" />
            <div className="p-6 space-y-2">
               <span className="text-[22px] font-semibold text-theme-level-5 block">
                  <Link href="/blogs/codding/12">Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year</Link>
               </span>
               <div className="flex items-center">
                  <img src="/avatar.png" width={40} height={40} alt="img" style={{ borderRadius: "50%", width: "40px", height: "40px" }} />
                  <span className="text-sm text-theme-level-5 block ml-2">Jese Leos</span>
               </div>
               <span className="text-xs text-theme-level-5">January 21, 2021</span>
               <p className="text-theme-level-5 text-[16px]">
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
               </p>
            </div>
         </div>
      </>
   );
}
