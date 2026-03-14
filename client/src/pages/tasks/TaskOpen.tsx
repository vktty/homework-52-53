import { useNavigate, useParams } from 'react-router';
import { useDeleteTaskMutation, useGetTaskQuery } from '../../store/tasks';
import { TaskOpenComponent } from '../../components/task';
import { Loading } from '../../components';

export const TaskOpen = () => {
    const { taskId } = useParams();
    const { data, isError, isLoading } = useGetTaskQuery(taskId!);
    const navigate = useNavigate();
    const [submitDelete, payloadTaskDelete] = useDeleteTaskMutation();

    const deleteTask = () => {
        submitDelete(taskId!);
    };
    const editTask = () => {
        navigate(`boards/${taskId}/edit`);
    };

    if (isLoading) return <Loading />;

    return (
        <>
            <TaskOpenComponent
                task={data!.data}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        </>
    );
};
