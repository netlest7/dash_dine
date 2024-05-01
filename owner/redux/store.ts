import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./feature/api/apiSlice"
import authSlice from "./feature/auth/authSlice"
import cafeSlice from "./feature/cafe/cafeSlice"

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth: authSlice,
        cafe: cafeSlice
    },
    devTools:true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})



// call the refresh token function on every page load
const initializeApp = async () => {
    await store.dispatch(apiSlice.endpoints.refreshToken.initiate({},{forceRefetch: true}));
    await store.dispatch(apiSlice.endpoints.loadUser.initiate({},{forceRefetch:true}));
}

initializeApp();