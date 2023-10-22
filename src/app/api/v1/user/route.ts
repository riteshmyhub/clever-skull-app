import { NextResponse } from "next/server";

async function profileRoute(request: Request) {
   try {
      return NextResponse.json({ message: "profile fetch successfully", success: true }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ message: "internal server error" }, { status: 500 });
   }
}

export { profileRoute as GET };
