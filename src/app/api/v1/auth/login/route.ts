import { headers } from "next/headers";
import bcryptjs from "bcryptjs";

import User from "@/models/user.model";
import { NextResponse } from "next/server";
import connect2DB from "@/database/database.config";
import { signJWT } from "@/helpers/token";
import ErrorResponse from "@/helpers/createHttpError";

type Body = {
   email: string;
   password: string;
};
connect2DB();
export async function POST(request: Request) {
   try {
      const body: Body = await request.json();
      const { email, password } = body;
      if (!email || !password) {
         return ErrorResponse.BadRequest("email password required!");
      }
      const dbUser = await User.findOne({ email }).select("+password");
      if (!dbUser) {
         return ErrorResponse.NotFound("user not found!");
      }
      let match = await bcryptjs.compare(password, dbUser.password);
      if (!match) {
         return ErrorResponse.Unauthorized();
      }
      const accessToken = await signJWT({ sub: dbUser._id }, { exp: process.env.TOKEN_EXPIRES_IN?.replace("-", "") as string });

      const response: any = NextResponse.json(
         {
            accessToken: accessToken,
            exp: process.env.TOKEN_EXPIRES_IN,
            message: "login successfully",
         },
         { status: 200 }
      );
      response.cookies.set("accessToken", accessToken, {
         httpOnly: true,
         maxAge: new Date(Date.now() + 60 * parseInt(process.env.TOKEN_EXPIRES_IN?.split("-")[0] as string)),
      });
      return response;
   } catch (error) {
      return ErrorResponse.InternalServerError();
   }
}
