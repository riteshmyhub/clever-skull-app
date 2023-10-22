import User from "@/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import connect2DB from "@/database/database.config";
import ErrorResponse from "@/helpers/createHttpError";

type Body = {
   email: string;
   password: string;
   confirm_password: string;
};
connect2DB();

export async function POST(request: Request) {
   try {
      const body: Body = await request.json();
      const { email, password, confirm_password } = body;
      if (!email || !password || !confirm_password) {
         return ErrorResponse.BadRequest("email password confirm_password required!");
      }
      if (password !== confirm_password) {
         return ErrorResponse.BadRequest("password is not matching!");
      }
      const user = await User.findOne({ email });
      if (user) {
         return ErrorResponse.BadRequest("user is already exist!");
      }
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(password, salt);
      await User.create({
         email,
         password: hashPassword,
      });
      const response = NextResponse.json({ message: "registration successfully" }, { status: 201 });
      return response;
   } catch (error) {
      return ErrorResponse.InternalServerError();
   }
}
