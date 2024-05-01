import mongoose,{Document,Model,Schema} from "mongoose";
import validator from 'validator';
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
require('dotenv').config()

export interface IOwner extends Document{
    owner_name :string;
    owner_email :string;
    owner_password: string;
    owner_phoneNumber: string;
    owner_aadharCard: number;
    owner_isVerified: boolean
    owner_paymentDetails: string;
    subscription: {
        id: string | undefined,
        status: string | undefined 
    };
    owner_storeId: Array<{storeId:string}>;
    comparePassword : (password: string) => Promise<boolean>;
    accessToken: ()=> string;
    refreshToken: ()=> string;
}

const ownerSchema = new mongoose.Schema({

   owner_name: {
    type: String,
    require: [true,"Please Enter Your Name"],
    minLength: [1,"Owner name should have more than one characters"]
   },
   owner_email: {
    type: String,
    require: [true,"Please Enter Your Email"],
    unique: [true,'This Email is already registered with us.'],
    validate : [validator.isEmail]
   },
   owner_password: {
    type: String,
    require: [true,"Please Enter Your Password"],
    minLength: [6,"Password should be atleast of 6 characters"],
    maxLength: [20,"Password should be maximum of 20 characters "],
    select: false,
   },
   owner_phoneNumber: {
    type: Number,
    minLength: [10,"Phone Number should be atleast of 10 numbers"],
    maxLength: [10,"Phone Number should be maximum of 10 numbers "]
   },
   owner_aadharCard: {
    type: Number
   },
   owner_isVerified: {
    type: Boolean,
    default: false
   },
   subscription: {
    id: String,
    status: String
   },
   owner_storeId: [
    {
        storeId : {
            type: String
        }
    }
   ],
   owner_paymentDetails :{
    type: String
   },
},{timestamps: true})

ownerSchema.pre<IOwner>("save",async function(next) {
    
    if(!this.isModified('owner_password')){
            return next()
    }

    this.owner_password = await bcrypt.hash(this.owner_password,10);
    next();
})


// creating access token
ownerSchema.methods.accessToken = function(){
    return Jwt.sign({id: this._id.toString()},process.env.ACCESS_TOKEN || "",{expiresIn: "5m"})
}
// creating refresh token
ownerSchema.methods.refreshToken = function(){
    return Jwt.sign({id: this._id.toString()},process.env.REFRESH_TOKEN || "",{expiresIn: "30d"})
}

// comparing password
ownerSchema.methods.comparePassword = async function(userEnteredPassword : string) : Promise<boolean> {
            return bcrypt.compare(userEnteredPassword,this.owner_password);
}

const Owner = mongoose.model<IOwner>("Owner",ownerSchema);
export default Owner;