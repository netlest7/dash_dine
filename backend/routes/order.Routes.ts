import express from "express";
import { createOder, orderStatus } from "../controllers/order.Controllers";
const ordersRouter = express.Router();


// creating orders
ordersRouter.post("/createOder/:storeId",createOder)

// order served
ordersRouter.post("/orderStatus",orderStatus)


export default ordersRouter;



