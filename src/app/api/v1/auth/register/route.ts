import User from "@/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import connect2DB from "@/database/database.config";

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
         return NextResponse.json({ message: "email password confirm_password required!" }, { status: 400 });
      }
      if (password !== confirm_password) {
         return NextResponse.json({ message: "password is not matching!" }, { status: 400 });
      }
      const user = await User.findOne({ email });
      if (user) {
         return NextResponse.json({ message: "user is already exist!" }, { status: 400 });
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
      return NextResponse.json({ message: "internal server error" }, { status: 500 });
   }
}
