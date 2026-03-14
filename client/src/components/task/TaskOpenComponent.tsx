import { Button, Card } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router';
import type { ITask } from '../../interfaces';

interface TaskOpentProps {
    task: ITask;
    editTask(taskId: string): void;
    deleteTask(taskId: string): void;
}

export const TaskOpenComponent = ({
    task,
    editTask,
    deleteTask,
}: TaskOpentProps) => {
    const { id, title, description } = task;
    const navigate = useNavigate();
    const { boardId } = useParams();

    const actions = [
        <EditOutlined
            key={`edit-${task.id}`}
            onClick={() => editTask(task.id)}
        />,
        <DeleteOutlined
            key={`delete-${task.id}`}
            onClick={() => deleteTask(task.id)}
        />,
    ];

    return (
        <>
            <div>
                <Card
                    title={title}
                    key={id}
                    className='task-open__wrapper'
                    actions={actions}>
                    {description}
                </Card>
                <Button
                    color='orange'
                    variant='solid'
                    size='large'
                    onClick={() => navigate(`boards/${boardId}/tasks`)}>
                    Go back to tasks
                </Button>
            </div>
        </>
    );
};
