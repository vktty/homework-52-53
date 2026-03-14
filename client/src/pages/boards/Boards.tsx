import { useGetBoardsQuery } from '../../store/boards';
import { Boards, Loading } from '../../components';
import { Outlet, useOutlet } from 'react-router';

export const BoardsPage = () => {
    const outlet = useOutlet();
    const { data, isLoading, isError } = useGetBoardsQuery();

    if (outlet) return <Outlet />;

    return (
        <>
            {isLoading && <Loading />}
            {isError && <div>Error loading...</div>}
            {data && <Boards boards={data.data} />}
        </>
    );
};
