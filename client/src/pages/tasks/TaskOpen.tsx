import { useNavigate, useParams } from 'react-router';

import { useDeleteTaskMutation, useGetTaskQuery } from '../../store/tasks';
import { TaskOpenComponent } from '../../components/task';
import { Error, Loading } from '../../components';
import { toastSuccess } from '../../context';
import { getError } from '../../components/error';

export const TaskOpen = () => {
    const { taskId } = useParams();
    const { data, isError, error, isLoading } = useGetTaskQuery(taskId!);
    const navigate = useNavigate();
    const [submitDelete] = useDeleteTaskMutation();

    const deleteTask = () => {
        toastSuccess('Task deleted!');
        submitDelete(taskId!);
    };

    const editTask = () => {
        navigate(`/boards/${taskId}/edit`);
    };

    return (
        <>
            {isLoading && <Loading />}
            {isError && <Error subTitle={getError(error)} />}
            {data && (
                <TaskOpenComponent
                    task={data!.data}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            )}
        </>
    );
};
