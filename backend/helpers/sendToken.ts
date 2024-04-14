
import { Response } from "express";
export const sendToken = async(res: Response ,user: any ,message : String,statusCode = 200) => {
    console.log("Hello from send token");
    
        const token = user.getJwtToken();

        const options = {
            expires:new Date(Date.now()+60*24*60*60*1000),
            httpOnly:true,
            sameSite: "lax" as const
        }


        res.cookie("token",token,options);
}