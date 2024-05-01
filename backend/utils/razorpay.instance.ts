import Razorpay from "razorpay";
require("dotenv").config();


const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY as string,
   key_secret : process.env.RAZORPAY_API_SECRET,
})

export default instance;