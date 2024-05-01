import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { ownerLoginIn } from "../auth/authSlice";



export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/api/v1/'
    }),

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    endpoints: (builder) => ({
        refreshToken: builder.query({
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            query: (data) => ({
                url: "activateToken",
                method: "GET",
                credentials: "include" as const

            })
        }),
        loadUser: builder.query({
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            query: (data) => ({
                url:"me",
                method:"GET",
                credentials: "include" as const
            }),
            async onQueryStarted(args,{queryFulfilled,dispatch}){
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
        })
    })
})

// eslint-disable-next-line no-empty-pattern
export const {useRefreshTokenQuery,useLoadUserQuery} = apiSlice