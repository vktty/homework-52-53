import { Outlet, useOutlet, useParams } from 'react-router';

import { useGetBoardTasksQuery } from '../../store/boards';
import { Loading } from '../../components';
import { Tasks } from '../../components/task';

export const TasksPage = () => {
    const { boardId } = useParams<{ boardId: string }>();
    const { data, isLoading, isError } = useGetBoardTasksQuery(boardId!);
    const outlet = useOutlet();

    if (outlet) return <Outlet />;

    return (
        <>
            {isLoading && <Loading />}
            {isError && <div>Error loading...</div>}
            {data && <Tasks tasks={data.data} />}
        </>
    );
};
