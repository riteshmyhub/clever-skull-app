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

   const ProtectedRoutes = pathname.includes("api") //
      ? ["logout"] //api protected routes
      : ["dashboard"]; //page routes

   const isProtectedRoutes = pathname.split("/").find((route) => ProtectedRoutes.includes(route));

   //1 SendResponse
   function sendResponse({ message, status, redirect }: SendResponse) {
      if (pathname.includes("api")) {
         return NextResponse.json({ message: message }, { status: status });
      } else {
         return NextResponse.redirect(new URL(redirect, request.url));
      }
   }
   if (isProtectedRoutes) {
      let accessToken = request.cookies.get("accessToken")?.value;
      if (!accessToken) {
         return sendResponse({ message: "you are unauthorized!", status: 401, redirect: "/auth" });
      }
      let isVerify: any = await verifyJWT(accessToken)
         .then((data) => data)
         .catch((error) => console.log(error));
      if (!isVerify) {
         return sendResponse({ message: "you are unauthorized!", status: 401, redirect: "/auth" });
      }
      return NextResponse.next();
   }
}

// See "Matching Paths" below to learn more
export const config = {
   matcher: ["/", "/api/:path*", "/dashboard/:path*", "/auth/:path*"],
};
