import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: "name",
    initialState:{
        name: "",
    },
    reducers:{
        setName: (state,action) => {
            state.name = action.payload
        }
    }
})

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
export const nameReducer = nameSlice.reducer; 