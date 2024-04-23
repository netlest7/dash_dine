import express from "express";
import cookieparser from "cookie-parser"
import dotenv from "dotenv"
import cors from 'cors'
import { connectDatabase } from "./db/db";
import userRouter from "./routes/user.Routes";
import ErrorHandler from "./utils/ErrorHandler";
import { ErrorMiddleware } from "./middleware/Error";
dotenv.config()


async function startServer() {
    const app = express();


app.use(express.json());
app.use(cookieparser())
app.use(cors())
// routes
app.use("/api/v1",userRouter);

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


