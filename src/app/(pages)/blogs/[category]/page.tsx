import BlogCard from "@/app/components/BlogCard";
import Link from "next/link";
import React, { useEffect } from "react";

export default async function CategoryPage() {
   return (
      <div>
         <div className="row">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((blog, idx) => (
               <React.Fragment key={`blog-list-${idx}`}>
                  <div className="sm:col-12 md:col-6 lg:col-4 xl:col-4 2xl:col-3 p-2">
                     <BlogCard />
                  </div>
               </React.Fragment>
            ))}
         </div>
      </div>
   );
}
