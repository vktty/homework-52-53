import { configureStore } from '@reduxjs/toolkit';
import { authAPI } from './auth';
import { boardsAPI } from './boards';
import { tasksAPI } from './tasks';

export const store = configureStore({
    reducer: {
        [authAPI.reducerPath]: authAPI.reducer,
        [boardsAPI.reducerPath]: boardsAPI.reducer,
        [tasksAPI.reducerPath]: tasksAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authAPI.middleware,
            boardsAPI.middleware,
            tasksAPI.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
