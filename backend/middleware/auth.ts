import { Request, Response , NextFunction } from "express";
import { CatchAsyncError } from "./CatchAsyncError";
import Jwt, { JwtPayload } from "jsonwebtoken"
import ErrorHandler from "../utils/ErrorHandler";
import Owner from "../db/Schemas/ownerSchema";
import { redis } from "../utils/redis";
require("dotenv").config()

// authenticated user
export const isAuthenticatedUser = CatchAsyncError(async(req: Request , res: Response , next: NextFunction) =>{
            const access_token = req.cookies.access_token

            if(!access_token){
                return next(new ErrorHandler("Please login to access these resource",400));
            }

            const decoded = Jwt.verify(access_token,process.env.ACCESS_TOKEN as string) as JwtPayload
            
            if(!decoded){
                return next(new ErrorHandler("Access token is not valid",400));
            }

           const owner = await redis.get(decoded.id);

           if(!owner){
            return next(new ErrorHandler("User not found",400));
           }

           req.owner = JSON.parse(owner);
           next()
})

// validat user role

// export const authorizeRoles = (...roles: string[]) => {
//     return(req:Request,res: Response,next: NextFunction) => {
//         if(!roles.includes(req))
//     }
// }