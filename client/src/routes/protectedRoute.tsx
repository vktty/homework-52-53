import { Navigate, Outlet } from 'react-router';
import { useGetMeQuery } from '../store/auth';
import { Loading } from '../components';

export const ProtectedRoute = () => {
    const { data, isError, isLoading } = useGetMeQuery();
    if (isLoading) {
        return <Loading />;
    }

    if (isError || !data) {
        return <Navigate to={'/auth/sign-in'}></Navigate>;
    }

    if (data) {
        return <Outlet />;
    }
};
