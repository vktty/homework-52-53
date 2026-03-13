import { Navigate, Outlet } from 'react-router';
import { useGetMeQuery } from '../store/auth';
import { Loading } from '../components';

export const ProtectedRoute = () => {
    const { isSuccess, isError, isLoading } = useGetMeQuery();
    if (isLoading) {
        return <Loading />;
    }

    if (isError || !isSuccess) {
        return <Navigate to={'/auth/sign-in'}></Navigate>;
    }

    if (isSuccess) {
        return <Outlet />;
    }
};
