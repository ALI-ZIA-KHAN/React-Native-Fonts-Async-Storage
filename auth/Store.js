import { configureStore } from "@reduxjs/toolkit";
import kharchareducer from "../auth/authSlice"
export const store = configureStore({
    reducer: {
        authent: kharchareducer,

    }
})