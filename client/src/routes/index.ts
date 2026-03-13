import { createBrowserRouter, redirect } from 'react-router';
import { dashboardRoute } from './dashboard';
import { authRoute } from './auth';
import { ProtectedRoute } from './protectedRoute';

export const routes = createBrowserRouter([
    authRoute,
    {
        Component: ProtectedRoute,
        children: [dashboardRoute],
    },
    {
        path: '*',
        middleware: [
            () => {
                return redirect('/auth/sign-in');
            },
        ],
    },
]);
