
import Owner from "../db/Schemas/ownerSchema";
import { UserLoginInput, UserSignInput } from "../constants/types";
import bcrypt from 'bcryptjs';
import { storeIdGenerator } from "../helpers/storeIdGenerator";
import { sendToken } from "../helpers/sendToken";
const ownerResolvers = {

    Query : {
        getAllUsers : async() => {

            const users = await Owner.find();
            return users;
        },
        getContext: (_:any,params: any,context : any) => {
            console.log("context",context)
            return "okay"
            
        }
    },

    Mutation: {
        createUser: async(_ : any,params : UserSignInput,context: any)=> {
                   
                const {owner_name,owner_email,owner_password} = params;
                const isUserExisist = await Owner.findOne({owner_email});

                if(isUserExisist){
                    return new Error("User already exists");
                }

                // creating Store id
                const storeId = storeIdGenerator(owner_email,true,0);

              

                const user = await Owner.create({
                    owner_name,
                    owner_email,
                    owner_password,
                    owner_storeId : {
                        storeId
                    }
                })
                  // creating token and storing in cookie
                await sendToken(context.res,user,"Registered SuccessFull",201);
                
                return user;
        },

        loginUser: async(_: any , params: UserLoginInput, context: any) => {
                const {owner_email,owner_password} = params;

                if(!owner_email || !owner_password) {
                    return new Error("Please enter all feild.")
                }

                const user = await Owner.findOne({owner_email});

                if(!user) {
                    return new Error("Email or password doesn't match with the account.")
                }

                await sendToken(context.res,user,"User Login SuccessFull",201);

                return user;
        }
    }
  
}

export default ownerResolvers;