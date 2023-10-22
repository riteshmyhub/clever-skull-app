import { cookies } from "next/headers";
import NavBar from "./components/Navbar";
import "./globals.css";
import axios from "axios";
import ReduxProvider from "@/redux/ReduxProvider";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
   const data = await getProfile();

   return (
      <html lang="en">
         <body className="bg-theme-level-1" suppressHydrationWarning={true}>
            <ReduxProvider user={data?.user}>
               <NavBar user={null} />
               <main style={{ height: "calc(100vh - 76px)", overflowY: "scroll" }} suppressHydrationWarning={true}>
                  {children}
               </main>
            </ReduxProvider>
         </body>
      </html>
   );
}

async function getProfile() {
   let accessToken = cookies().get("accessToken")?.value;
   const res = await fetch("http://localhost:3000/api/v1/user/profile", {
      headers: {
         Authorization: accessToken as string,
      },
   });
   if (!res.ok) {
      return null;
   }
   return res.json();
}
