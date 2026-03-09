import { configureStore } from "@reduxjs/toolkit";
import {authAPI} from './auth'


export const store = configureStore({
    reducer: {
        [authAPI.reducerPath]: authAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch