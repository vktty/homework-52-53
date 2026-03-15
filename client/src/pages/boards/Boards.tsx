import { Outlet, useOutlet } from 'react-router';

import { useGetBoardsQuery } from '../../store/boards';
import { Boards, Error, Loading, NoBoards } from '../../components';
import { getError } from '../../components/error';

export const BoardsPage = () => {
    const outlet = useOutlet();
    const { data, isLoading, isError, error } = useGetBoardsQuery();

    if (outlet) return <Outlet />;

    return (
        <>
            {isLoading && <Loading />}
            {isError && <Error subTitle={getError(error)} />}
            {data?.data.length === 0 && <NoBoards />}
            {data && <Boards boards={data.data} />}
        </>
    );
};
