import { apiSlice } from "../api/apiSlice"
import { loadCafe } from "./cafeSlice"


export const cafeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => (
        {
            loadStore : builder.mutation({
                query: (url) => ({
                        url:`getStore/${url}`,
                        method: "POST",
                        credentials: "include" as const
                    }),
            
                    async onQueryStarted(args,{queryFulfilled ,dispatch}){
                        try {
                            const result = await queryFulfilled;
                            console.log(result.data,"kuttta");
                            dispatch(
                                loadCafe({
                                    store: result.data.store,
                                })
                            )
                        } catch (error) {
                            console.log(error);   
                        }}
            }),
            
            
            
        }
    )
})

export const {useLoadStoreMutation} = cafeApi