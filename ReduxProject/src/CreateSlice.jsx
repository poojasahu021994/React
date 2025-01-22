import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name:"counter",
    initialState:{value:0},
    reducers:{
        inc : (state)=>{state.value+=1},
        dec : (state)=>{state.value-=2}
    }
})
export const {inc,dec} = counter.actions
export default counter.reducer