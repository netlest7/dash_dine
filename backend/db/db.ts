import mongoose from "mongoose";

import dotenv from 'dotenv'
import path from "path";


export const connectDatabase = async() => {
   await mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log(`Database connected`); 
   }).catch((err)=> {
    console.log(err);
   })
}