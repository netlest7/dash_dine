import { apiSlice } from "../api/apiSlice"
import { ownerLoggedOut, ownerLoginIn} from "./authSlice";


export const autApi = apiSlice.injectEndpoints({
    endpoints: (builder) => (
        {
            login: builder.mutation({
                query: (data)=> ({
                    url: 'loginOwner',
                    method: "POST",
                    body: data,
                    credentials: "include" as const
                }), 

                async onQueryStarted(arg,{queryFulfilled,dispatch}){
                    try {
                        
                        const result = await queryFulfilled;
                        
                        dispatch(
                            ownerLoginIn({
                            accessToken: result.data.access_token,
                            owner: result.data.owner
                        }))

                       
                    } catch (error) {
                        console.log(error);
                        
                    }
                }
            }),

            logout: builder.mutation({
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                query:(data) => ({
                    url: 'logout',
                    method: "POST",
                }),

                async onQueryStarted({queryFulfilled,dispatch}){
                    try {
                        const reuslt = await queryFulfilled;
                        console.log(reuslt,"llllllll");
                        dispatch(ownerLoggedOut())
                    } catch (error) {
                        console.log(error);
                        
                    }
                    
                } 
            })


        }
       
    )
    
})

export const {useLoginMutation,useLogoutMutation} = autApi;