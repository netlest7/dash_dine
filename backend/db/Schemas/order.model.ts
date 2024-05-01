import mongoose,{Document} from "mongoose";


export interface IOrders extends Document {

    store_id: string;
    order_cust_name: string;
    order_cust_phone: number;
    order_status: string;
    order_type: string;
    order_items: Array<{item:Item}>;
}

export interface Item {
    item_name: string;
    item_price: number;
    item_instructions?: string;
    item_category: string;
}


const orderSchema = new mongoose.Schema({
    store_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store"
    },
    order_cust_name:{
        type: String,
        required: [true,"Please enter your name"]
    },
    order_cust_phone:{
        type: Number,
        required: [true,"Please enter your whatsapp number"]
    },
    order_status: {
        type:String,
        enum:["pending","served","decline"],
        default: "pending"
    },
    order_type:{
        type:String,
        enum:["dine-in","take-away"],
        required: [true,"Please enter your order type"]
    },
    order_items:[
       {
            item_name: String,
            item_price: Number,
            item_instructions: String,
            item_category: String
       }
    ]
})

export const Order = mongoose.model<IOrders>("Order",orderSchema);
