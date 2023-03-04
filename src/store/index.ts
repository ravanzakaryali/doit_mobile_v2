import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";

export const store = configureStore({
    reducer: {
        authStore: authReducer
    }
})

export type StoreType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch