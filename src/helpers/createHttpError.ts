import { NextResponse } from "next/server";

export default class ErrorResponse {
   constructor() {}

   static CustomError(message: string, status: number) {
      return NextResponse.json(
         {
            error: {
               message: message,
               status: status,
            },
         },
         { status: status }
      );
   }

   static BadRequest(message?: string) {
      let status = 400;
      return NextResponse.json(
         {
            error: {
               message: message || "Bad Request",
               status: status,
            },
         },
         { status: status }
      );
   }
   static Unauthorized(message?: string) {
      let status = 401;
      return NextResponse.json(
         {
            error: {
               message: message || "You are Unauthorized",
               status: status,
            },
         },
         { status: status }
      );
   }
   static PaymentRequired(message?: string) {
      let status = 402;
      return NextResponse.json(
         {
            error: {
               message: message || "Payment Required!",
               status: status,
            },
         },
         { status: status }
      );
   }
   static Forbidden(message?: string) {
      let status = 401;
      return NextResponse.json(
         {
            error: {
               message: message || "Forbidden",
               status: status,
            },
         },
         { status: status }
      );
   }
   static NotFound(message?: string) {
      let status = 404;
      return NextResponse.json(
         {
            error: {
               message: message || "Not Found",
               status: status,
            },
         },
         { status: status }
      );
   }
   static MethodNotAllowed(message?: string) {
      let status = 405;
      return NextResponse.json(
         {
            error: {
               message: message || "Method Not Allowed",
               status: status,
            },
         },
         { status: status }
      );
   }
   static NotAcceptable(message?: string) {
      let status = 406;
      return NextResponse.json(
         {
            error: {
               message: message || "Not Acceptable",
               status: status,
            },
         },
         { status: status }
      );
   }

   static InternalServerError(message?: string) {
      let status = 500;
      return NextResponse.json(
         {
            error: {
               message: message || "Internal Server Error",
               status: status,
            },
         },
         { status: status }
      );
   }

   static NotImplemented(message?: string) {
      let status = 501;
      return NextResponse.json(
         {
            error: {
               message: message || "Not Implemented",
               status: status,
            },
         },
         { status: status }
      );
   }

   static BadGateway(message?: string) {
      let status = 502;
      return NextResponse.json(
         {
            error: {
               message: message || "Bad Gateway",
               status: status,
            },
         },
         { status: status }
      );
   }

   static ServiceUnavailable(message?: string) {
      let status = 503;
      return NextResponse.json(
         {
            error: {
               message: message || "Service Unavailable",
               status: status,
            },
         },
         { status: status }
      );
   }
   static NetworkAuthenticationRequired(message?: string) {
      let status = 511;
      return NextResponse.json(
         {
            error: {
               message: message || "Network Authentication Required",
               status: status,
            },
         },
         { status: status }
      );
   }
}
