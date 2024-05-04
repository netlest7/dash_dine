import express from "express"
import { isAuthenticatedUser } from "../middleware/auth";
import { createAndBuySubscription, paymentVerification } from "../controllers/payment.Controllers";
const paymentRouter = express.Router();


paymentRouter.post('/createSubscription',isAuthenticatedUser,createAndBuySubscription)

paymentRouter.post('/paymentVerification',isAuthenticatedUser,paymentVerification)



export default paymentRouter;
