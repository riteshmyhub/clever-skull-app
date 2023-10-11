import NextButton from "@/shared/components/NextButton";
import React from "react";

export default function AdminUsersPage() {
   return (
      <div>
         <div className="text-theme-level-5 bg-theme-level-2 p-3">
            <div className="text-xl text-theme-level-5 mb-5">Admin Users Control</div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((user, idx) => (
               <React.Fragment key={`admin-user-${idx}`}>
                  <div className="row items-center py-2 border-b border-theme-level-3 hover:bg-theme-level-3">
                     <div className="sm:col-12 md:col-2">
                        <img className="rounded-full h-[70px] w-[70px] block mx-auto" src="/avatar.png" alt="Alex Shatov" />
                     </div>
                     <div className="sm:col-12 md:col-8">
                        <div className="row">
                           <div className="sm:col-12 md:col-4">Username : john_doe</div>
                           <div className="sm:col-12 md:col-4">Email : john@example.com</div>
                           <div className="sm:col-12 md:col-4">Full Name : John Doe</div>
                           <div className="sm:col-12 md:col-4">Role : Admin</div>
                           <div className="sm:col-12 md:col-4">Created At : 2023-09-18 10:00:00</div>
                           <div className="sm:col-12 md:col-4">Updated At : 2023-09-18 15:30:00</div>
                        </div>
                     </div>
                     <div className="sm:col-12 md:col-2 text-center">
                        <div className="text-theme-level-5 font-bold py-1 text-md underline">
                           <NextButton role="href" navigate={{ path: "users/123" }}>
                              view
                           </NextButton>
                        </div>
                     </div>
                  </div>
               </React.Fragment>
            ))}
         </div>
      </div>
   );
}
