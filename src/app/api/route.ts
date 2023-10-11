import { NextResponse } from "next/server";

export async function GET(req: Request) {
   return NextResponse.json({
      api_version: ["v1"],
      message: "Clever Skull API :)",
   });
}
