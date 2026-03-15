import { Navigate, Outlet } from 'react-router';

import { useGetMeQuery } from '../store/auth';
import { Loading } from '../components';
import { toastError } from '../context';
import { getError } from '../components/error';

export const ProtectedRoute = () => {
    const { data, isError, error, isLoading } = useGetMeQuery();
    if (isLoading) {
        return <Loading />;
    }
    if (isError) toastError(getError(error));

    if (isError || !data) {
        return <Navigate to={'/auth/sign-in'} />;
    }

    if (data) {
        return <Outlet />;
    }
};
