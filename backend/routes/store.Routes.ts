import express from "express"
import { isAuthenticatedUser } from "../middleware/auth";
import { addItemInMenu, createStore, createStoreMenu, deleteItemInMenu, deleteStore, deleteStoreMenuCategory, getAllStores, getMenu, getStoreById, storeTurnOff, updateItemInMenu, updateStore, updateStoreMenuCategory } from "../controllers/store.Controllers";
const storeRouter = express.Router()



// create store
storeRouter.post("/createStore",isAuthenticatedUser,createStore)

// delete Store
storeRouter.delete("/deleteStore/:storeId",isAuthenticatedUser,deleteStore)

// update Store
storeRouter.put("/updateStore/:storeId",isAuthenticatedUser,updateStore)

//  Store shutdown
storeRouter.put("/storeOff/:storeId",isAuthenticatedUser,storeTurnOff)

// get store by id
storeRouter.post("/getStore/:storeId",getStoreById)

//*************  Menu ****************

// create Menu
storeRouter.post("/createMenu/:storeId",isAuthenticatedUser,createStoreMenu)

// edit menu category
storeRouter.put("/updateMenuCategory/:storeId",isAuthenticatedUser,updateStoreMenuCategory)

// delete menu category
storeRouter.delete("/deleteCategory/:storeId",isAuthenticatedUser,deleteStoreMenuCategory)

// update item by id
storeRouter.put("/updateItemByID/:storeId",isAuthenticatedUser,updateItemInMenu)

// delete item by id
storeRouter.delete("/deletetemByID/:storeId",isAuthenticatedUser,deleteItemInMenu)

// add item by id
storeRouter.post("/addItemByID/:storeId",isAuthenticatedUser,addItemInMenu)


// get menu
storeRouter.get("/getMenu/:storeId",getMenu)

// Admin Routes

// get all stores
storeRouter.get("/getAllStores",isAuthenticatedUser,getAllStores)


export default storeRouter;