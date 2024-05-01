import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    accessToken: "",
    owner: ""
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        ownerLoginIn : (state,action) => {
            state.accessToken = action.payload.access_token;
            state.owner = action.payload.owner;
        },
        ownerLoggedOut: (state) => {
            state.accessToken = "";
            state.owner = "";
        },

    }
})

export const {ownerLoginIn,ownerLoggedOut} = authSlice.actions;
export default authSlice.reducer;