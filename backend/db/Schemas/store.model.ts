import mongoose, { Document,Model } from "mongoose";

export interface IStore extends Document{
    store_ownerId: string;
    store_name: string;
    store_NoOfTables: number;
    store_openTime: number;
    store_closeTime:number;
    store_acceptingOrder: number;
    store_logo: {
        public_id: string;
        url: string;
    };
    store_menu:Array<{
        category: string;
        items: Item[];
    }>;
}

export interface Item {
    item_name: string;
    item_price: number;
    item_photo: {
        public_id: string;
        url: string;
    };
    item_description : string;
    item_available?: boolean;

}


const storeSchema = new mongoose.Schema({
    store_ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Owner"
    },
    store_name: {
        type: String,
        required: [true,"Please enter store name"]
    },
    store_NoOfTables: {
        type:Number,
        required:  [true,"Please number of tables in your Restaurant"]
    },
    store_openTime: {
        type:Number,
        required:  [true,"Please Restaurant opening time"]
    },
    store_closeTime: {
        type:Number,
        required:  [true,"Please Restaurant closing time"]
    },
    store_acceptingOrder: {
        type:Boolean,
        default: true
    },
    store_logo:{
        public_id:{
            type: String
        },
        url: {
            type: String
        }
    },

    store_menu:[
        {
            category: {
                type: String,
            },
            items: [
                {
                    item_name: {
                        type: String,
                    },
                    item_price: {
                        type: Number,
                    },
                    item_photo: {
                            public_id: String,
                            url: String
                    },
                    item_description: {
                        type: String
                    },
                   item_available: {
                    type: Boolean,
                    default: true
                   }
                }
            ]
        }
    ]

},{timestamps: true})


const Store  = mongoose.model<IStore>("Store",storeSchema)
export default Store;