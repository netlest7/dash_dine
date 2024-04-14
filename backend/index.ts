import express from "express";
import { ApolloServer } from "@apollo/server";
const {expressMiddleware} = require("@apollo/server/express4")
import mergedTypeDefs from "./typeDefs/index"
import mergedResolvers from "./resolvers/index"
import cookieparser from "cookie-parser"
import dotenv from "dotenv"
import cors from 'cors'
import { connectDatabase } from "./db/db";
dotenv.config()


async function startServer() {
    const app = express();

 const apolloServer = new ApolloServer({
    //typeDefs
    typeDefs: mergedTypeDefs,
    // resolvers
    resolvers: mergedResolvers
})


app.get('/',(req,res)=>{
    res.status(200).json({
        msg: "Successfull"
    })
})


await apolloServer.start();
app.use(express.json());
app.use(cookieparser())
app.use(cors())

// app.use("/graphql",expressMiddleware(apolloServer),{
//     context: async ({ req }: any) => {
//         return  {
//           des: "Hello"
//         }
//     }
//   });

app.use("/graphql",expressMiddleware(apolloServer),{
    context: async() => {}
})


app.listen(4000,()=> console.log("Server is listening to port 4000...."))

await connectDatabase()
}


startServer();