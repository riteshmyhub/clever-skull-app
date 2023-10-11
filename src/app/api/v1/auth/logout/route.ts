import { NextResponse } from "next/server";

type Body = {
   email: string;
   password: string;
};

export async function GET(request: Request) {
   try {
      const response = NextResponse.json({ message: "logout successfully", success: true }, { status: 200 });
      response.cookies.set("accessToken", "", {
         httpOnly: true,
         expires: new Date(0),
      });
      return response;
   } catch (error) {
      return NextResponse.json({ message: "internal server error" }, { status: 500 });
   }
}
