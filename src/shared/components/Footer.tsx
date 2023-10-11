import React from "react";

export default function Footer() {
   return (
      <>
         <div className="flex flex-wrap px-3 py-6 bg-black">
            <div className="w-[30%]">
               <div className="logo text-4xl uppercase text-white">logo</div>
               <div className="text-xl text-white">Dev Coder</div>
            </div>
            <div className="w-[20%]">
               <ul className="text-white">
                  <li className="mb-4 uppercase">Docs</li>
                  <li className="my-2">Node js</li>
                  <li className="my-2">React</li>
                  <li className="my-2">Angular</li>
                  <li className="my-2">Next js 13</li>
               </ul>
            </div>
            <div className="w-[20%]">
               <ul className="text-white">
                  <li className="mb-4 uppercase">Blogs</li>
                  <li className="my-2">all Blogs</li>
                  <li className="my-2">Recent</li>
                  <li className="my-2">categories</li>
                  <li className="my-2">Saved</li>
               </ul>
            </div>
            <div className="w-[20%]">
               <ul className="text-white">
                  <li className="mb-4 uppercase">About me</li>
                  <li className="my-2">Education</li>
                  <li className="my-2">work experience</li>
                  <li className="my-2">Address</li>
               </ul>
            </div>
         </div>
         <div className="w-[100%] p-2 bg-black">
            <span className="text-white text-xs block text-end">© Copyright 2023 DevCoder All Rights Reserved</span>
         </div>
      </>
   );
}
