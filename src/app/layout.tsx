import { CustomizationProvider } from "@/shared/hooks/useCustomization";
import "./globals.css";
import NavBar from "@/shared/components/NavBar";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className="bg-theme-level-1" suppressHydrationWarning={true}>
            <CustomizationProvider splash>
               <NavBar />
               <main style={{ height: "calc(100vh - 76px)", overflowY: "scroll" }} suppressHydrationWarning={true}>
                  {children}
               </main>
            </CustomizationProvider>
         </body>
      </html>
   );
}
