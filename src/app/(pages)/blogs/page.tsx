import BlogCard from "@/app/components/BlogCard";
import Slider from "@/app/components/Slider";
import { Anton } from "next/font/google";
import Link from "next/link";
import React from "react";
import { VscArrowRight } from "react-icons/vsc";

const anton = Anton({
   weight: "400",
   subsets: ["latin"],
});

export default function BlogsPage() {
   let toolsList = [{ name: "todos" }];
   return (
      <section>
         <div className="md:container md:mx-auto">
            {/*  */}
            <div className="my-4">
               <span className="block text-2xl capitalize text-theme-level-5">categories</span>
               <Slider ID="Slider" />
            </div>
            <div className="my-4 bg-theme-level-2 rounded-lg p-3">
               <div className="flex justify-start items-center p-3">
                  <div className="text-3xl capitalize text-theme-level-5 w-full">Recent News</div>
                  <div className="text-xl capitalize text-theme-level-5 text-end w-full">
                     <Link href="/blogs/recent" className="underline cursor-pointer text-primary">
                        more
                     </Link>
                  </div>
               </div>
               <div className="row rounded-lg">
                  {[1, 2, 3].map(() => (
                     <div className="sm:col-12 md:col-6 lg:col-4 xl:col-4 2xl:col-4 p-2">
                        <div className="border border-theme-level-4">
                           <BlogCard />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="my-4 bg-theme-level-2 rounded-lg p-3">
               <span className="block text-3xl capitalize text-theme-level-5 p-3">Subscription</span>
               <div className="row bg-theme-level-2 items-center justify-center rounded-lg">
                  <div className="sm:col-12 md:col-6 lg:col-6">
                     <div className="p-4">
                        <span className="text-theme-level-5 block sm:text-4xl md:text-6xl mb-4">
                           Newsletter <br /> Subscription
                        </span>
                        <div className="flex">
                           <input
                              type="text"
                              placeholder="Enter your email id"
                              className="bg-theme-level-3 text-xl block p-3 placeholder:text-xl placeholder:capitalize focus:outline-none text-theme-level-5 w-[80%]"
                           />
                           <button className="block p-3 text-theme-level-5 bg-theme-level-4 px-4 text-xl">
                              <VscArrowRight />
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="sm:col-12 md:col-5 lg:col-5">
                     <img src="/email-sub.png" alt="no img" className="w-[50%] mx-auto block" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
