import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IUserSignIn, IUserSignUp, AuthResponse } from '../interfaces';
import { boardsAPI } from './boards';

export const AUTH_API = 'authApi';
const BASE_URL = 'http://localhost:3000/api/v1/auth';

export const authAPI = createApi({
    reducerPath: AUTH_API,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials: 'include',
    }),
    endpoints: (build) => ({
        signUp: build.mutation<AuthResponse, IUserSignUp>({
            query: (body) => ({
                url: 'sign-up',
                method: 'POST',
                body,
            }),
        }),
        signIn: build.mutation<AuthResponse, IUserSignIn>({
            query: (body) => ({
                url: 'sign-in',
                method: 'POST',
                body,
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                await queryFulfilled;
                dispatch(boardsAPI.util.invalidateTags(['Boards']));
            },
        }),
        signOut: build.mutation<void, void>({
            query: (body) => ({
                url: 'sign-out',
                method: 'POST',
                body,
            }),
        }),
        getMe: build.query<AuthResponse, void>({
            query: () => ({
                url: 'me',
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useSignUpMutation,
    useSignInMutation,
    useSignOutMutation,
    useGetMeQuery,
} = authAPI;
