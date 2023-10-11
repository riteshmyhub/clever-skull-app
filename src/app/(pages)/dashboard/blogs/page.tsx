"use client";
import NextButton from "@/shared/components/NextButton";
import Link from "next/link";
import React, { useRef } from "react";

export default function AdminBlogsPage() {
   return (
      <>
         <div className="text-theme-level-5 bg-theme-level-2 p-3">
            <div className="row items-center mb-2">
               <div className="col-4">
                  <div className="text-xl text-theme-level-5 uppercase">Admin Blogs Control</div>
               </div>
               <div className="col-8 text-end">
                  <NextButton role="button" type="button" color="success" size="large" navigate={{ path: "blogs/categories" }}>
                     + category
                  </NextButton>
                  &nbsp;
                  <NextButton role="button" type="button" color="success" size="large" navigate={{ path: "blogs/add" }}>
                     + blogs
                  </NextButton>
               </div>
            </div>
            {[1, 2, 3, 4, 5].map((user, idx) => (
               <React.Fragment key={`admin-user-${idx}`}>
                  <div className="row items-center py-4 border-b border-theme-level-3 hover:bg-theme-level-3">
                     <div className="sm:col-12 md:col-2">
                        <img className="h-25 w-36 block mx-auto object-fill" src="/placeholder-blog.png" alt="Alex Shatov" />
                     </div>
                     <div className="sm:col-12 md:col-8">
                        <div className="row">
                           <div className="sm:col-12 md:col-12 text-xl mb-3 font-semibold">
                              <NextButton role="href" navigate={{ path: "blogs/100?mode=view" }}>
                                 Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year...
                              </NextButton>
                           </div>
                           <div className="sm:col-12 md:col-4 text-sm mb-1">
                              <span className="font-semibold">Category</span> : john@example.com
                           </div>
                           <div className="sm:col-12 md:col-4 text-sm mb-1">
                              <span className="font-semibold">Author</span> : John Doe
                           </div>
                           <div className="sm:col-12 md:col-4 text-sm mb-1">
                              <span className="font-semibold">Created At</span> : 2023-09-18 10:00:00
                           </div>
                           <div className="sm:col-12 md:col-4 text-sm mb-1">
                              <span className="font-semibold">Updated At</span> : 2023-09-18 15:30:00
                           </div>
                        </div>
                     </div>
                     <div className="sm:col-12 md:col-2 text-center">
                        <NextButton role="button" type="button" size="small" color="warning" navigate={{ path: "blogs/100?mode=edit" }}>
                           edit
                        </NextButton>
                        &nbsp;
                        <NextButton
                           role="button"
                           type="button"
                           size="small"
                           color="danger"
                           dialog={{
                              title: "Are you sure you want to delete this blog?",
                              type: "danger",
                              callback() {
                                 alert("...");
                              },
                           }}>
                           delete
                        </NextButton>
                     </div>
                  </div>
               </React.Fragment>
            ))}
         </div>
      </>
   );
}
