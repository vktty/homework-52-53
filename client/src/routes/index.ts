import { createBrowserRouter, redirect } from 'react-router'
import { dashboardRoute } from './dashboard'
import { authRoute } from './auth'


export const routes = createBrowserRouter([
    authRoute,
    {
        children: [dashboardRoute]
    },
    {
        path: '*',
        middleware: [() => {
            return redirect('/auth/sign-in')
        }]
    }
])