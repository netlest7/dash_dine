import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/CatchAsyncError";
import Owner from "../db/Schemas/ownerSchema";
import ErrorHandler from "../utils/ErrorHandler";
import Store, { IStore, Item } from "../db/Schemas/store.model";


// creating Store

interface IOStore{
    store_name: string
    store_NoOfTables : number
    store_openTime : number
    store_closeTime : number
    store_acceptingOrder : boolean
    store_logo : {
        public_id: string,
        url: string
    }
}

export const createStore = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

    const id = req.owner?._id
    const {store_name,store_NoOfTables,store_openTime,store_closeTime,store_logo} = req.body as IOStore

    const owner = await Owner.findById({_id: id});

    if(!owner){
        return next(new ErrorHandler("Please login to access these resource" ,400))
    }

    // creating Store....
    const store = await Store.create({
        store_ownerId: id,
        store_name,
        store_NoOfTables,
        store_openTime,
        store_closeTime,
        store_logo
    })

    owner.owner_storeId.push({storeId: store._id});
    await owner.save();

    res.status(200).json({
        success: true,
        message: "store created successfully",
        store
    })

})

// deleting store

export const deleteStore = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

    const storeId = req.params.storeId
    const id = req.owner?._id
  

    const owner = await Owner.findById({_id: id});
    const store = await Store.findById({_id: storeId});

    if(!owner){
        return next(new ErrorHandler("Please login to access these resource" ,400))
    }
    if(!store){
        return next(new ErrorHandler("Store not found :(" ,400))
    }

    await Store.deleteOne({_id: storeId});


    let remainingStore = owner?.owner_storeId.filter((item)=> item.storeId !== storeId)
    
    owner.owner_storeId = remainingStore;
    await owner.save()

    res.status(200).json({
        success: true,
        message: "store deleted successfully",
    })

})


// updateStore

interface IOUpdateRequest {
    store_name? : string ,
    store_NoOfTables?: number;
    store_openTime?: number;
    store_closeTime?:number;
    store_logo?: {
        public_id: string;
        url: string;
    }
}

export const updateStore = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

    const storeId = req.params.storeId
    const id = req.owner?._id
    const {store_name,store_NoOfTables,store_openTime,store_closeTime,store_logo} = req.body

    const owner = await Owner.findById({_id: id});
    const store = await Store.findById({_id: storeId});

    if(!owner){
        return next(new ErrorHandler("Please login to access these resource" ,400))
    }
    if(!store){
        return next(new ErrorHandler("Store not found :(" ,400))
    }

    if(!store_name && !store_NoOfTables && !store_openTime && !store_closeTime && !store_logo){  
    return next(new ErrorHandler("You have to update altest one feld",400));
    }
    if(store_name){
        store.store_name = store_name; 
     }
     if(store_NoOfTables){
        store.store_NoOfTables = store_NoOfTables; 
     }
     if(store_openTime){
        store.store_openTime = store_openTime; 
     }
     if(store_closeTime){
        store.store_closeTime = store_closeTime; 
     }
     if(store_logo){
        store.store_logo = store_logo; 
     }
  
    await store?.save()

    res.status(200).json({
        success: true,
        message: "Store Details Updated successfully",
        store
    })

})

// store turn off

interface IOStoreOFF {
    store_acceptingOrder: boolean;
}
export const storeTurnOff = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

    const storeId = req.params.storeId
    const {store_acceptingOrder} = req.body


    const store = await Store.findById({_id: storeId});
    if(!store){
        return next(new ErrorHandler("Store not found :(" ,400))
    }

    store.store_acceptingOrder = store_acceptingOrder;
  
    await store?.save()

    res.status(200).json({
        success: true,
        message: `Store ${store_acceptingOrder ? "is live" : "shutdown"} successfully. Have a good day 😀`,
    })

})

// get store by id
export const getStoreById = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

    const id = req.params.storeId
    const store = await Store.find({_id: id});
 
     res.status(200).json({
         success: true,
         store
     })
 
 })
 
// create store menu
export const createStoreMenu = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

    const {category,items} = req.body
    const store = await Store.findById(req.params.storeId)
    
   
    if(category && items){
        store?.store_menu.push({category,items})
    }
    await store?.save();
    let menu = store?.store_menu
 
     res.status(200).json({
         success: true,
         message: "Menu created successfully",
         menu
     })
 
 })

 // update store category
 interface IOStoreUpdateMenu {
    categoryId: string;
    category: string;
   
 }

 export const updateStoreMenuCategory = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

    const {category,categoryId} = req.body as IOStoreUpdateMenu;
    
    const store = await Store.findById(req.params.storeId);

    

    if(category && categoryId){
        store?.store_menu.map((item: any)=> {
            if(item._id.toString() === categoryId){
                    item.category = category;
                
            }
        }) 
        await store?.save();
    }
    
     res.status(200).json({
        success: true,
        message: "Category Updated Successfully"
     })
 })

// Delete Category
 export const deleteStoreMenuCategory = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

    const {categoryId} = req.body;
    
    const store = await Store.findById(req.params.storeId);

    if(categoryId && store?.store_menu){
        let remainingCategories = store?.store_menu.filter((cat:any) => cat._id.toString() !== categoryId)
        if (remainingCategories.length > 0) {
            store.store_menu = remainingCategories;
        }
    await store?.save();

    }else{
        return next(new ErrorHandler("No Menu in store",500))
    }

     res.status(200).json({
        success: true,
        message: "Category Deleted Successfully"
     })
 })


 // update item

 interface IMItemUpdate {
    categoryId: string;
    item_id: string;
    item_name: string;
    item_price: string;
    item_description: string;
    item_photo: string;
 }
export const updateItemInMenu = CatchAsyncError(async(req: Request,res: Response,next: NextFunction)=>{

    const {categoryId,item_id,item_name,item_description,item_photo,item_price} = req.body as IMItemUpdate;
    
    
    const store = await Store.findById(req.params.storeId);

    store?.store_menu.map((cat: any) => {
        if(cat._id.toString() === categoryId){
            console.log(cat._id,"cat._id",categoryId);
            cat.items.map((item: any)=>{
                if(item._id.toString() === item_id){
                    console.log(item._id,"item id");
                    
                    if(item_name) item.item_name = item_name
                    if(item_price)  item.item_price =  item_price
                    if(item_description)  item.item_description = item_description
                    if(item_photo) item.item_photo = item_photo 
                }
            })
        }

    })
    await store?.save()
    res.status(200).json({
        success: true,
        message: "Item Updated Successfully"
     })
})

 // delete item
 interface IMItemDelete {
    categoryId: string;
    item_id: string;
 }
export const deleteItemInMenu = CatchAsyncError(async(req: Request,res: Response,next: NextFunction)=>{

    const {categoryId,item_id} = req.body as IMItemDelete;
    
    
    const store = await Store.findById(req.params.storeId);

 
    store?.store_menu.map((cat:any)=>{
        if(cat._id.toString() === categoryId){
            let remainingItems = cat.items.filter((item: any) => item._id.toString() !== item_id)
            
            cat.items = remainingItems;
        }
    })

    
    await store?.save()
    res.status(200).json({
        success: true,
        message: "Item deleted Successfully"
     })
})

 // add item
 export const getMenu = CatchAsyncError(async(req: Request,res: Response,next: NextFunction)=>{

    const store = await Store.findById(req.params.storeId);

    if(!store){
        return next(new ErrorHandler("QR is invalid .Plese contact the cafe/Restaurat Manager",400))
    }

   
     const menu = store.store_menu

    res.status(200).json({
        success: true,
        menu
     })
})

// add item in list 

 export const addItemInMenu = CatchAsyncError(async(req: Request,res: Response,next: NextFunction)=>{

    const {categoryId} = req.body 
    const {item_name,item_price,item_description,item_photo} = req.body as Item
    const store = await Store.findById(req.params.storeId);

    store?.store_menu.map((cat:any)=>{
        if(cat._id.toString() === categoryId){
            cat.items.push({
                item_name,item_price,item_description,item_photo
            })
        }
    })
    
    await store?.save()
    res.status(200).json({
        success: true,
        message: "Item Added Successfully"
     })
})

// Admin

// get all stores
export const getAllStores = CatchAsyncError(async(req: Request,res: Response,next: NextFunction) => {

   const stores = await Store.find();

//    store.store_

    res.status(200).json({
        success: true,
        stores
    })

})
