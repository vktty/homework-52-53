import { Outlet } from 'react-router';
import { useGetBoardsQuery } from '../../store/boards';
import { Boards, Loading } from '../../components';

export const BoardsPage = () => {
    const { data, isLoading, isError } = useGetBoardsQuery();

    return (
        <>
            <Outlet />
            {isLoading && <Loading />}
            {isError && <div>Error loading...</div>}
            {data && <Boards boards={data.data} />}
        </>
    );
};
