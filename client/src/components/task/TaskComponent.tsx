import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
} from '@ant-design/icons';
import { Card } from 'antd';

import type { ITask } from '../../interfaces';
import { WorkflowCode } from '../../interfaces/enums';
import './style.scss';

interface ITaskProps {
    task: ITask;
    transitionWorkflow(taskId: string, workflowCode: WorkflowCode): void;
    editTask(taskId: string): void;
    viewTask(taskId: string): void;
    deleteTask(taskId: string): void;
}

export const TaskComponent = ({
    task,
    transitionWorkflow,
    editTask,
    viewTask,
    deleteTask,
}: ITaskProps) => {
    const {
        title,
        description,
        workflow: { code },
    } = task;
    const workflowIcons = () => [
        <EditOutlined
            key={`edit-${task.id}`}
            onClick={() => editTask(task.id)}
        />,
        <EyeOutlined
            key={`view-${task.id}`}
            onClick={() => viewTask(task.id)}
        />,
        <DeleteOutlined
            key={`delete-${task.id}`}
            onClick={() => deleteTask(task.id)}
        />,
    ];

    const workflowMove = {
        [WorkflowCode.TODO]: [
            <ArrowRightOutlined
                key={`todo-done-${task.id}`}
                onClick={() =>
                    transitionWorkflow(task.id, WorkflowCode.PROGRESS)
                }
            />,
        ],
        [WorkflowCode.PROGRESS]: [
            <ArrowLeftOutlined
                key={`progress-todo-${task.id}`}
                onClick={() => transitionWorkflow(task.id, WorkflowCode.TODO)}
            />,
            <ArrowRightOutlined
                key={`progress-done-${task.id}`}
                onClick={() => transitionWorkflow(task.id, WorkflowCode.DONE)}
            />,
        ],
        [WorkflowCode.DONE]: [
            <ArrowLeftOutlined
                key={`done-progress-${task.id}`}
                onClick={() =>
                    transitionWorkflow(task.id, WorkflowCode.PROGRESS)
                }
            />,
        ],
    };

    const actions = [...workflowMove[code], ...workflowIcons()];

    return (
        <Card
            key={task.id}
            actions={actions}
            className='task__card'
            title={title}>
            {description}
        </Card>
    );
};
