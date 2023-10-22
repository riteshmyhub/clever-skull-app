import connect2DB from "@/database/database.config";
import ErrorResponse from "@/helpers/createHttpError";
import { tokenByUser } from "@/helpers/tokenByUser";
import { NextRequest, NextResponse } from "next/server";
connect2DB();

async function getProfileRoute(request: NextRequest) {
   try {
      const user = await tokenByUser(request);
      if (!user) {
         return ErrorResponse.NotFound("User Not Found");
      }
      return NextResponse.json({ message: "profile successfully fetch", user: user }, { status: 200 });
   } catch (error) {
      return ErrorResponse.InternalServerError();
   }
}

export { getProfileRoute as GET };
