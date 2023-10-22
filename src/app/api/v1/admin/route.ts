import connect2DB from "@/database/database.config";
import ErrorResponse from "@/helpers/createHttpError";
import { tokenByUser } from "@/helpers/tokenByUser";
import { NextRequest, NextResponse } from "next/server";
connect2DB();
async function adminRoute(request: NextRequest) {
   try {
      //AdminAuth
      const user = await tokenByUser(request);
      if (!user.allowRoles.includes("admin")) {
         return ErrorResponse.Unauthorized("only admin access");
      }
      return NextResponse.json({ message: "profile successfully fetch", profile: user }, { status: 200 });
   } catch (error) {
      return ErrorResponse.InternalServerError();
   }
}

export { adminRoute as GET };
