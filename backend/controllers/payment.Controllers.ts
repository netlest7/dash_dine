import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/CatchAsyncError";
import Owner from "../db/Schemas/ownerSchema";
import ErrorHandler from "../utils/ErrorHandler";
import instance from "../utils/razorpay.instance";
import crypto from "crypto"
import { Payment } from "../db/Schemas/payment.model";
require('dotenv').config()

// create subscription
export const createAndBuySubscription = CatchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{

        const {plan_id} = req.body;
        const owner = await Owner.findById(req.owner?._id);

        if(!owner){
            return next(new ErrorHandler("Please login to continue the purchase",400));
        }


       if(plan_id){
        const subscription = await instance.subscriptions.create({
            plan_id: plan_id,
            customer_notify:1,
            total_count: 12
        })

        owner.subscription.id = subscription.id;
        owner.subscription.status = subscription.status

        await owner.save()

        res.status(200).json({
            success: true,
            subscriptionId: subscription.id,
            order: subscription
        })
       }
})

// payment Verification
interface IPaymentVerificationInput{
    razorpay_payment_id: string;
    razorpay_order_id : string;
    razorpay_signature: string;
}

export const paymentVerification = CatchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body as IPaymentVerificationInput

    const owner = await Owner.findById(req.owner?._id);

    if(!owner){
        return next(new ErrorHandler("Please login to continue the purchase",400));
    }

    const subscriptionId = owner.subscription.id;

    const generated_Signature = crypto.createHmac("sha256",process.env.RAZORPAY_API_SECRET as string).update(razorpay_payment_id + "|" + subscriptionId,"utf-8").digest("hex");

    const isAuthentic = generated_Signature === razorpay_signature;

    if(!isAuthentic){
        return res.redirect(`${process.env.FRONTEND_URL}/paymentfailed`)
    }

    await Payment.create({
        razorpay_payment_id,razorpay_order_id,razorpay_signature
    })
    owner.subscription.status = "active";
    await owner.save();

    res.redirect(`${process.env.FRONTEND_URL}/paymentsuccess?reference=${razorpay_payment_id}`)
})


export const getRazorPayKey = CatchAsyncError(async(req:Request,res:Response,next:NextFunction) => {
    res.status(200).json({
        success:true,
        key: process.env.RAZORPAY_API_KEY
    })
})



// cancel subscription

export const cancelSubscription = CatchAsyncError(async(req:Request,res:Response,next:NextFunction) => {


    const owner = await Owner.findById(req.owner?._id);
    if(!owner){
        return next(new ErrorHandler("Please login to cancel the subscription",400));
    }

    const subscriptionId= owner.subscription.id;


    let refund: boolean = false;

    if(subscriptionId){
        await instance.subscriptions.cancel(subscriptionId);
    }

    const payment:any = await Payment.findOne({
        razorpay_order_id: subscriptionId,
    })

    const gap = Date.now() - payment?.createdAt

  
    if (process.env.REFUND_DAYS) {
        const refundTime: number = parseInt(process.env.REFUND_DAYS) * 24 * 60 * 60 * 1000;

        if(refundTime > gap){

        const paymentId = payment.razorpay_payment_id
         instance.payments.refund(paymentId,{})
            refund = true;
        }
    }

    // await payment.remove()

    owner.subscription.id = undefined
    owner.subscription.status = undefined

    await owner.save()


    res.status(200).json({
        success:true,
        message: refund ? "Subscription cancelled , You will recive full refund within 7 days." : "Subscription cancelled , no refund initiated as subscription was cancelled after 7 days."
    })

})
