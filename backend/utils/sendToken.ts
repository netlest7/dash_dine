import { IOwner } from "../db/Schemas/ownerSchema";
import { Response } from "express";
import { redis } from "./redis";
require("dotenv").config()



interface ITokenOptions{
    expires: Date;
    maxAge: number;
    httpOnly: boolean;
    sameSite: 'lax'|'strict'|'none';
    secure?: boolean;
}


//  parse environment variables to integrate with fallback values
const accessTokenExpire = parseInt(process.env.ACCESS_TOKEN_EXPIRE || '300' , 10)
const refreshTokenExpire = parseInt(process.env.REFRESH_TOKEN_EXPIRE || '1200' , 10)

// options for cookies
export const accessTokenOptions : ITokenOptions = {
    expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
    maxAge: accessTokenExpire *  60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax',
}

 // options for refresh token 
 export const refreshTokenOptions: ITokenOptions ={
    expires: new Date(Date.now() + refreshTokenExpire * 24 *  60 * 60 * 1000),
    maxAge: accessTokenExpire * 24 *  60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax',
};


export const sendToken = (owner:IOwner,statusCode: number , res: Response)=>{
    const accessToken = owner.accessToken();
    const refreshToken = owner.refreshToken();

    // upload session to redis
    redis.set(owner._id,JSON.stringify(owner)as any);


    // only set secure ot true in production
    if(process.env.NODE_ENV === 'production'){
        accessTokenOptions.secure = true;
    }


    res.cookie("access_token",accessToken,accessTokenOptions);
    res.cookie("refresh_token",refreshToken,refreshTokenOptions);


    res.status(statusCode).json({
        success: true,
        owner,
        accessToken
    })
 }