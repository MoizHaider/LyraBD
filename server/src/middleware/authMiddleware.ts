// import { Request as ExpressRequest, Response } from "express";
// import { CustomError } from "../utils/errorUtils";
// import { verifyToken } from "../utils/jwt.util";

// /**
//  * TSOA authentication hook
//  * Validates JWT token and enforces role-based access control
//  */
// export async function expressAuthentication(
//   request: ExpressRequest,
//   securityName: string,
//   scopes?: string[],
// ): Promise<any> {
//   if (securityName === "jwt") {
//     const authHeader = request.headers.authorization;
//     const token = authHeader?.startsWith("Bearer ")
//       ? authHeader.split(" ")[1]
//       : undefined;

//     if (!token) {
//       return Promise.reject(
//         new CustomError(401, "Missing Authorization header"),
//       );
//     }

//     try {
//       // Verify JWT token
//       const decoded = verifyToken(token);

//       const authUser = {
//         userId: decoded.userId,
//         name: decoded.name,
//         email: decoded.email,
//         role: decoded.role,
//       };

//       request.user = authUser;
//       return Promise.resolve(authUser);
//     } catch (err) {
//       // CustomError from verifyToken will be caught here
//       if (err instanceof CustomError) {
//         return Promise.reject(err);
//       }
//       return Promise.reject(new CustomError(401, "Invalid or expired token"));
//     }
//   }

//   return Promise.reject(new CustomError(401, "Unknown security scheme"));
// }
