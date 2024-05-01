import express from "express";
import cookieparser from "cookie-parser"
import dotenv from "dotenv"
import cors from 'cors'
import { connectDatabase } from "./db/db";
import userRouter from "./routes/user.Routes";
import { ErrorMiddleware } from "./middleware/Error";
import storeRouter from "./routes/store.Routes";
import ordersRouter from "./routes/order.Routes";
dotenv.config()


async function startServer() {
    const app = express();


app.use(express.json());
app.use(cookieparser())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

// routes
app.use("/api/v1",userRouter);
app.use("/api/v1",storeRouter);
app.use("/api/v1",ordersRouter);

app.get('/',(req,res)=>{
    res.status(200).json({
        msg: "Successfull"
    })
})

app.use(ErrorMiddleware);

app.listen(4000,()=> console.log("Server is listening to port 4000...."))

await connectDatabase()

}


startServer();


