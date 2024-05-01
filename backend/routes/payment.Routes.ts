import express from "express"
import { isAuthenticatedUser } from "../middleware/auth";
const paymentRouter = express.Router();


paymentRouter.post('/createSubscription',isAuthenticatedUser,)



export default paymentRouter;