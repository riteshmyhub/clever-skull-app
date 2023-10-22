import connect2DB from "@/database/database.config";
import ErrorResponse from "@/helpers/createHttpError";
import { tokenByUser } from "@/helpers/tokenByUser";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

connect2DB();
type Body = {
   name: string;
   lastname: string;
   gender: string;
   username: string;
};
async function createProfileRoute(request: NextRequest) {
   try {
      const body: Body = await request.json();
      const { name, lastname, gender, username } = body;
      if (!name || !lastname || !gender || !username) {
         return ErrorResponse.BadRequest("name, lastname,username, gender, is required");
      }
      let loggedInUser = await tokenByUser(request);
      const userData = await User.findById(loggedInUser?._id);
      if (!userData) {
         return ErrorResponse.NotFound("user not found!");
      }
      const profile = {
         name: name,
         lastname: lastname,
         gender: gender,
         username: username,
      };

      userData.profile = profile;

      await userData.save({ validateBeforeSave: false });

      return NextResponse.json({ message: "profile successfully create", success: true }, { status: 201 });
   } catch (error) {
      return ErrorResponse.InternalServerError();
   }
}

export { createProfileRoute as POST };
