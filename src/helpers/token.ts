import { SignJWT, jwtVerify } from "jose";

export const signJWT = async (payload: { sub: string }, options: { exp: string }) => {
   try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY!);
      const alg = "HS256";
      return new SignJWT(payload).setProtectedHeader({ alg }).setExpirationTime(options.exp).setIssuedAt().setSubject(payload.sub).sign(secret);
   } catch (error) {
      throw error;
   }
};

export const verifyJWT = async <T>(token: string): Promise<T> => {
   try {
      const verify = (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY))).payload as T;
      return verify;
   } catch (error: any) {
      throw error;
   }
};
