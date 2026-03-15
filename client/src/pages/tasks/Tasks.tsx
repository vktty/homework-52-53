import { Outlet, useOutlet, useParams } from 'react-router';

import { useGetBoardTasksQuery } from '../../store/boards';
import { Error, Loading, NoTasks } from '../../components';
import { Tasks } from '../../components/task';
import { getError } from '../../components/error';

export const TasksPage = () => {
    const { boardId } = useParams<{ boardId: string }>();
    const { data, isLoading, isError, error } = useGetBoardTasksQuery(boardId!);
    const outlet = useOutlet();

    if (outlet) return <Outlet />;

    return (
        <>
            {isLoading && <Loading />}
            {isError && <Error subTitle={getError(error)} />}
            {data?.data.length === 0 && <NoTasks />}
            {data && <Tasks tasks={data.data} />}
        </>
    );
};
