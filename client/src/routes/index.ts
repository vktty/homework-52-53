import { createHashRouter, redirect } from 'react-router'
import { dashboardRoute } from './dashboard'
import { authRoute, authMiddleware } from './auth'


export const routes = createHashRouter([
    authRoute,
    {
        middleware: [authMiddleware],
        children: [dashboardRoute]
    },
    {
        path: '*',
        middleware: [() => {
            return redirect('#/auth/sign-in')
        }]
    }
])