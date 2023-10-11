import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
   let pathname = request.nextUrl.pathname;
   // protect to app pages
   let privateRoutes: string[] = ["dashboard"];
   const isProtectedRoutes = pathname.split("/").find((route) => privateRoutes.includes(route));
   if (isProtectedRoutes) {
      let accessToken = request.cookies.get("accessToken")?.value;
      if (!accessToken) {
         return NextResponse.redirect(new URL("/auth", request.url));
      }
      return NextResponse.next();
   }
   // protect to Api endpoint
   if (pathname.includes("api")) {
      let privateRoutes: string[] = ["logout"];
      const isPrivateRoutes = pathname.split("/").find((route) => privateRoutes.includes(route));
      if (isPrivateRoutes) {
         let accessToken = request.cookies.get("accessToken")?.value;
         if (!accessToken) {
            return NextResponse.json({ message: "you are unauthorized!" }, { status: 401 });
         }
         return NextResponse.next();
      }
   }
}

// See "Matching Paths" below to learn more
export const config = {
   matcher: ["/", "/api/:path*", "/dashboard/:path*", "/auth/:path*"],
};
