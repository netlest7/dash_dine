import { Request,Response,NextFunction } from "express"
import { CatchAsyncError } from "../middleware/CatchAsyncError"
import Owner, { IOwner } from "../db/Schemas/ownerSchema"
import ErrorHandler from "../utils/ErrorHandler"
import Jwt, { JwtPayload, Secret } from "jsonwebtoken"
import ejs from "ejs"
import path from "path"
import sendMail from "../utils/sendMail"
import { accessTokenOptions, refreshTokenOptions, sendToken } from "../utils/sendToken"
import { redis } from "../utils/redis"

require('dotenv').config()

// signup 
interface IOwnerRegistration {
    owner_name : string,
    owner_email: string,
    owner_password: string,
}

export const signUpUser = CatchAsyncError(async(req:Request , res: Response , next: NextFunction) =>{
    
    const {owner_name,owner_email,owner_password} = req.body

    const ownerAlreadyExists = await Owner.findOne({owner_email});

    if(ownerAlreadyExists){
        return next(new ErrorHandler("User alredy exists",400))

    }
    const owner: IOwnerRegistration ={
        owner_name ,
        owner_email,
        owner_password,
    } 

    
    const activationToken = createActivationToken(owner);

    const activationCode = activationToken.activationCode

    const data = {
        user: {
            name:owner.owner_name
        },
        activationCode

    }

    const html = await ejs.renderFile(path.join(__dirname,"../mails/activation-mail.ejs"),data)

    try{
        await sendMail({
            email: owner.owner_email,
            subject: "Activate your account",
            template: "activation-mail.ejs",
            data
        })
        console.log("email sent");


        res.status(201).json({
            success: true,
            message: `Please check your email: ${owner.owner_email} to activate your account`,
            activationToken: activationToken.token
        })
    }catch(error:any){
        return next(new ErrorHandler(error.message,400))
    }
})


// activate token
interface IActivationToken{
    token: string;
    activationCode: string;
}
export const createActivationToken = (user: any): IActivationToken => {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString()
    const token = Jwt.sign(
        {
            user,
            activationCode,
        },
        process.env.ACTIVATION_SECRET as Secret,
        {
            expiresIn: "5m"
        }
    )
    return { token, activationCode }
}

// activate user
interface IActivateOwnerRequest {
    token: string;
    activationCode : string
}
export const activateOwner = CatchAsyncError(async(req:Request ,res: Response ,next: NextFunction) =>{
    try {
        const {token,activationCode} = req.body as IActivateOwnerRequest


    const newUser=  Jwt.verify(token,process.env.ACTIVATION_SECRET as string) as {user:IOwner;activationCode: string};
        
    if(newUser.activationCode !== activationCode){
        return next(new ErrorHandler("Invalid activation code",400))
    }

    const existingUser = await Owner.findOne({owner_email: newUser.user.owner_email})
       console.log(existingUser,'us');
       
    if(existingUser){
       return next(new ErrorHandler("User Already exists",400))
    }
    // stroring user in db
    const user = await Owner.create({
        owner_email: newUser.user.owner_email,
        owner_name: newUser.user.owner_name,
        owner_password: newUser.user.owner_password,
        owner_isVerified: true
      
    })
    console.log(user,"dslkfdsjlf");
    
    res.status(201).json({
        success:true,
        user
    })

    } catch (error:any) {
        next(new ErrorHandler(error.message,400))
    }
    
    
})


// Login user

interface IOwnerLoginRequest {
    owner_email: string;
    owner_password: string;
}


export const loginOwner = CatchAsyncError(async(req: Request , res: Response , next: NextFunction) =>{

   try {
    const {owner_email,owner_password} = req.body as IOwnerLoginRequest;

    if(!owner_email || !owner_password){
        return next(new ErrorHandler("Please enter email and password",400))
    }

    // finding user in db
    const owner = await Owner.findOne({owner_email}).select("+owner_password"); 
        

    if(!owner){
        return next(new ErrorHandler("User not found",400))
    }

    const isPasswordMatched =await owner.comparePassword(owner_password);

    
    if(!isPasswordMatched){
        return next(new ErrorHandler("Password or Email doesn't match",400))
    }
   
   sendToken(owner,200,res)
   }catch(error:any){
    return next(new ErrorHandler(error.message,400))
}
})



// logout user
export const logoutOwner = CatchAsyncError(async(req: Request , res: Response , next: NextFunction) =>{

    try {
        console.log("hello ji");
        
        res.cookie("access_token","",{maxAge:1});
        res.cookie("refresh_token","",{maxAge:1});
        console.log(req.owner?._id);
        
        const userId = req.owner?._id || ""
        console.log(userId,"dklsfjdslkfjdlksjl");
        await redis.del(userId)
        res.status(200).json({
            success:true,
            message: "Logged out successfully"
        })
    }catch(error:any){
     return next(new ErrorHandler(error.message,400))
 }
 })


 // update access token

 export const updateAccessToken = CatchAsyncError(async(req: Request , res: Response , next: NextFunction)=>{
    try{
        const refresh_token = req.cookies.refresh_token ;

        const decoded = Jwt.verify(refresh_token,process.env.REFRESH_TOKEN as string) as JwtPayload;

        if(!decoded){
            return next(new ErrorHandler("Could not get refresh token",400))
        }


        const session = await redis.get(decoded.id);

        
        if(!session){
            return next(new ErrorHandler('Please login for access this resources',404))
        }

        const owner = JSON.parse(session);
        
        const accessToken = Jwt.sign({id: owner._id},process.env.ACCESS_TOKEN as string,{expiresIn: "5m"});
        const refreshToken = Jwt.sign({id: owner._id},process.env.REFRESH_TOKEN as string,{expiresIn: "30d"});


        req.owner = owner;
        res.cookie("access_token",accessToken,accessTokenOptions);
        res.cookie("refresh_token",refreshToken,refreshTokenOptions);
        await redis.set(owner._id,JSON.stringify(owner),"EX",2592000000)
        res.status(200).json({
            status: "success",
            accessToken,
        })

    }catch(error: any){
        return next(new ErrorHandler(error.message , 400))
    }
 })

 // get owner by id
 export const getOwnerById = CatchAsyncError(async(req: Request , res: Response , next: NextFunction)=>{
    
    const id = req.params.id
    const user = await Owner.findById({_id: id});

    if(!user){
        return next(new ErrorHandler("User not found",400))
    }
    res.status(200).json({
       success: true,
       user
    })
})

// update me    [TODO: Testing is remaining]

export const me = CatchAsyncError(async(req: Request , res: Response , next: NextFunction)=>{
    
    const id = req.owner?._id
    const {owner_name,owner_email,owner_phoneNumber,owner_aadharCard,owner_paymentDetails} = req.body
 
    const owner = await Owner.findById({_id:id});
 
     if(!owner){
         return next(new ErrorHandler("User not found",400))
     }
 
 
     if(owner_email){
         const isEmailExists = await Owner.find({owner_email})
         if(isEmailExists){
             return next(new ErrorHandler("Email already exist",400))
         }
 
         owner.owner_email = owner_email
     }
     if(owner_name){
         owner.owner_name = owner_name
     }
     if(owner_phoneNumber){
         owner.owner_phoneNumber = owner_phoneNumber
 
     }
     if( owner_aadharCard ){
         owner.owner_aadharCard
        
     }
     if(owner_paymentDetails){
         owner.owner_paymentDetails = owner_paymentDetails
     }
 
     await owner?.save();
     res.status(200).json({
        success: true,
        owner,

     })
 })


// getDetails of loggedin user
 export const getDetailsOfLoggedInOwner  = CatchAsyncError(async(req: Request , res: Response , next: NextFunction)=>{
    const id = req.owner?._id;


    const owner = await Owner.findById({_id: id});

    if(!owner){
        return  next(new ErrorHandler("User not found",400))
    }

    res.status(200).json({
        success: true,
        owner
    })
   
 })




 // Admin

 export const getAllOwners = CatchAsyncError(async(req: Request , res: Response , next: NextFunction)=>{
     const users = await Owner.find();


     res.status(200).json({
        success: true,
        users
     })
 })


//  update owner
export const updateOwnerById = CatchAsyncError(async(req: Request , res: Response , next: NextFunction)=>{
    
    const id = req.params.id;
    const {owner_name,owner_email,owner_phoneNumber,owner_aadharCard,owner_paymentDetails} = req.body
 
    const owner = await Owner.findById({_id:id});
 
     if(!owner){
         return next(new ErrorHandler("User not found",400))
     }
 
 
     if(owner_email){
         const isEmailExists = await Owner.find({owner_email})
         if(isEmailExists){
             return next(new ErrorHandler("Email already exist",400))
         }
 
         owner.owner_email = owner_email
     }
     if(owner_name){
         owner.owner_name = owner_name
     }
     if(owner_phoneNumber){
         owner.owner_phoneNumber = owner_phoneNumber
 
     }
     if( owner_aadharCard ){
         owner.owner_aadharCard
        
     }
     if(owner_paymentDetails){
         owner.owner_paymentDetails = owner_paymentDetails
     }
 
     await owner?.save();
     res.status(200).json({
        success: true,
        owner
     })
 })



 // update user password
interface IUpdatePassword{
    oldPassword: string;
    newPassword: string;
}

export const updatePassword = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

    try{
        const {oldPassword , newPassword} = req.body as IUpdatePassword;
        const owner = await Owner.findById(req.owner?._id).select("+owner_password");
        
        if(!owner){
            return next(new ErrorHandler("User not found",400))
        }

        const isPasswordMatched = await owner?.comparePassword(oldPassword);

        if(!isPasswordMatched){
            return next(new ErrorHandler("Invalid old password" ,400))
        }

        owner.owner_password = newPassword;

        await owner?.save()

        await redis.set(req.owner?._id,JSON.stringify(owner));

        res.status(201).json({
            success: true,
            owner
        })

    }catch(error: any){
        return next(new ErrorHandler(error.message,400))
    }
})