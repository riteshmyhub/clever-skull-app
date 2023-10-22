import User from "@/models/user.model";
import { verifyJWT } from "./token";
import { NextRequest } from "next/server";

export const tokenByUser = async <T>(req: NextRequest) => {
   try {
      let isVerify: any = await verifyJWT((req.cookies.get("accessToken")?.value as string) || (req.headers.get("Authorization") as string));
      let user = await User.findById(isVerify?.sub).select("-password -__v");
      return user;
   } catch (error: any) {
      return null;
   }
};
