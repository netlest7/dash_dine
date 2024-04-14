import { timeStamp } from "console";
import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
   owner_storeId: [
    {
        storeId : {
            type: String,
        }
    }
   ],
   owner_paymentDetails : String,
},{timestamps: true})

ownerSchema.pre("save",async function(next) {
    console.log("hinsdflsdf");
    
    if(!this.isModified('owner_password')){
            return next()
    }

    this.owner_password = await bcrypt.hash(this.owner_password,10);
    next();
})


// creating jwt token
ownerSchema.methods.getJwtToken = async function(){
    return await jwt.sign({id: this._id.toString()},process.env.OWNER_SECRET,{expiresIn: "60d"})
}

// comparing password
ownerSchema.methods.comparePassword = async function(userEnteredPassword : String) {
            return bcrypt.comparePassword(userEnteredPassword,this.owner_password);
}

const Owner = mongoose.model("Owner",ownerSchema);
export default Owner;