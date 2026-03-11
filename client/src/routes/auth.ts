import { redirect } from "react-router";

import { AuthLayout } from "../layouts";
import { SignIn, SignUp } from "../pages/auth";


export const authRoute = {
    path: '/auth',
    Component: AuthLayout,
    children: [
        {
            index: true,
            middleware: [() => {
                return redirect('/auth/sign-in')
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
