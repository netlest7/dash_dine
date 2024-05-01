import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/CatchAsyncError";
import Store from "../db/Schemas/store.model";
import ErrorHandler from "../utils/ErrorHandler";
import { Order } from "../db/Schemas/order.model";


// creating order

export const createOder = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

    const {tableNo,order_cust_name,order_cust_phone,order_type,order_items} = req.body;

    const store = await Store.findById(req.params.storeId);

    if(!store){
        return next(new ErrorHandler("QR is not valid. Please contact the shop owner.",400));
    }

    if(tableNo && order_cust_name && order_cust_phone){

        const order = await Order.create({
            tableNo,
            order_cust_name,
            order_cust_phone,
            store_id: req.params.storeId,
            order_type,
            order_items
        })

        // TODO; :payment
        res.status(200).json({
            success: true,
            message: "Order Successfull",
            order
        })

    }else{
        return next(new ErrorHandler("Please Enter all feilds",400));
    }
})


// order status == Kitchen
export const orderStatus = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

    const {order_id} = req.body

    const order = await Order.findById({_id: order_id})
     
    if(!order){
        return next(new ErrorHandler("Order not found.",400));
    }

    if(order && order.order_status){
     order.order_status = "served"  
    }

      await order.save();
        res.status(200).json({
            success: true,
            message: "Order Served",
        
})
})

