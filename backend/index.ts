import express from "express";
import cookieparser from "cookie-parser"
import dotenv from "dotenv"
import cors from 'cors'
import { connectDatabase } from "./db/db";
import userRouter from "./routes/user.Routes";
import { ErrorMiddleware } from "./middleware/Error";
import storeRouter from "./routes/store.Routes";
import ordersRouter from "./routes/order.Routes";
import paymentRouter from "./routes/payment.Routes";
dotenv.config()


async function startServer() {
    const app = express();


app.use(express.json());
app.use(cookieparser())
app.use(cors({
    origin: ['http://localhost:5173','https://dash-dine-8bf6d.web.app'],
    credentials: true
}))

// routes
app.use("/api/v1",userRouter);
app.use("/api/v1",storeRouter);
app.use("/api/v1",ordersRouter);
app.use("/api/v1",paymentRouter);
    
app.get('/',(req,res)=>{
    res.status(200).json({
        msg: "Successfull"
    })
})
app.get("/api/v1/getkey",(req,res)=>{
    return res.status(200).json({
        key: process.env.RAZORPAY_API_KEY
    })
})

app.get("/api/v1/regularPlanId",(req,res)=>{
    return res.status(200).json({
        regularKey: process.env.REGULAR_PLAN_ID
    })
})

app.get("/api/v1/premiumPlanId",(req,res)=>{
    return res.status(200).json({
        premiumKey: process.env.PREMIUM_PLAN_ID
    })
})

app.get("/api/v1/plus",(req,res)=>{
    return res.status(200).json({
        plusKey: process.env.PLUS_PLAN_ID
    })
})

app.use(ErrorMiddleware);

app.listen(4000,()=> console.log("Server is listening to port 4000...."))

await connectDatabase()

}


startServer();


