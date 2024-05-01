import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    store : []
}

const cafeSlice = createSlice({
    name: "cafe",
    initialState,
    reducers: {
        loadCafe: (state,action) =>{
                state.store = action.payload.store
        }
    }
})

export const {loadCafe} = cafeSlice.actions;
export default cafeSlice.reducer;
