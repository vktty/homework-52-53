import { redirect } from "react-router";

import { AuthLayout } from "../layouts";
import { SignIn, SignUp } from "../pages/auth";
import { store } from "../store";
import { authAPI } from "../store/auth";

export const authRoute = {
    path: '/auth',
    Component: AuthLayout,
    children: [
        {
            index: true,
            middleware: [() => {
                return redirect('#/auth/sign-in')
            }]
        },
        {
            path: 'sign-up',
            Component: SignUp,
        },
        {
            path: 'sign-in',
            Component: SignIn,
        },
    ]
};

export async function authMiddleware() {
    try {
        await store
            .dispatch(authAPI.endpoints.getMe.initiate(undefined, { forceRefetch: true }))
            .unwrap()
    }
    catch {
        throw redirect('#/auth/sign-in')
    }
}