import { configureStore } from "@reduxjs/toolkit";
import counterRd from './CreateSlice'
const store = configureStore({
    reducer:{
        
        counter:counterRd
    }
})
export default store