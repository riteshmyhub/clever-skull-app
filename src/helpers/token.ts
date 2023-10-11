import jwt from "jsonwebtoken";
export const createAccessToken = async (userID: string) => {
   try {
      const accessToken = jwt.sign({ _id: userID.toString() }, process.env.JWT_SECRET_KEY as string, {
         expiresIn: 60 * parseInt(process.env.TOKEN_EXPIRES_IN as string), //
      });
      return accessToken;
   } catch (error) {
      throw error;
   }
};

// export const verifyJWT = async <T>(token: string) => {
//    try {
//       const verifyUser = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
//       return (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY))).payload as T;
//    } catch (error: any) {
//       throw new Error(error).message;
//    }
// };
