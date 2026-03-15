import { Button, Card, Flex } from 'antd';
import { DeleteOutlined, EditOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

import type { ITask } from '../../interfaces';
import './style.scss';

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

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <>
            <Flex vertical>
                <Button
                    color='orange'
                    variant='outlined'
                    icon={<LeftOutlined />}
                    onClick={handleClick}
                    className='task__button'>
                    Go back to tasks
                </Button>

                <Card
                    title={title}
                    key={id}
                    className='task-open__wrapper'
                    actions={actions}>
                    {description}
                </Card>
            </Flex>
        </>
    );
};
