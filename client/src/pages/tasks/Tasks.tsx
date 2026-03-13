import { Outlet, useParams } from 'react-router';
import { useGetBoardTasksQuery } from '../../store/boards';
import { Loading } from '../../components';
import { Tasks } from '../../components/task';

export const TasksPage = () => {
    const { boardId } = useParams<{ boardId: string }>();
    const { data, isLoading, isError } = useGetBoardTasksQuery(boardId!);

    return (
        <>
            <Outlet />
            {isLoading && <Loading />}
            {isError && <div>Error loading...</div>}
            {data && <Tasks tasks={data.data} />}
        </>
    );
};
