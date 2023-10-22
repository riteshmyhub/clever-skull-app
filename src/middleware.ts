import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "./helpers/token";

type SendResponse = {
   message: string;
   status: number;
   redirect: string;
};
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
   let pathname = request.nextUrl.pathname;
   const Protected = Object.freeze({
      routes: pathname.includes("api") ? ["logout", "user"] : ["dashboard", "admin"],
   });
   const isProtectedRoutes = pathname.split("/").find((route) => Protected.routes.includes(route));

   //1 SendResponse
   function sendResponse({ message, status, redirect }: SendResponse) {
      if (pathname.includes("api")) {
         return NextResponse.json({ message, status, success: false }, { status: status });
      } else {
         return NextResponse.redirect(new URL(redirect, request.url));
      }
   }
   if (isProtectedRoutes) {
      let accessToken = request.cookies.get("accessToken")?.value || request.headers.get("Authorization");
      if (!accessToken) {
         return sendResponse({ message: "you are unauthorized!", status: 401, redirect: "/auth" });
      }
      try {
         let isVerify: any = await verifyJWT(accessToken);
         return NextResponse.next();
      } catch (error: any) {
         if (error?.code === "ERR_JWT_EXPIRED") {
            return sendResponse({ message: "you are unauthorized!", status: 403, redirect: "/auth" });
         }

         return sendResponse({ message: "you are unauthorized!", status: 401, redirect: "/auth" });
      }
   }
}

// See "Matching Paths" below to learn more
export const config = {
   matcher: ["/", "/api/:path*", "/dashboard/:path*", "/auth/:path*", "/admin/:path*"],
};
