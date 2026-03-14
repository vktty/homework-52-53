import { Col, Row } from 'antd';
import { useNavigate, useParams } from 'react-router';

import type { ITask } from '../../interfaces';
import { TaskComponent } from './TaskComponent';
import { useGetBoardQuery } from '../../store/boards';
import { filterWorkflowCode } from '../../utils';
import { WorkflowCode, WorkflowLabel } from '../../interfaces/enums';
import {
    useDeleteTaskMutation,
    useTransitionWorkflowMutation,
} from '../../store/tasks';
import './style.scss';

export const Tasks = ({ tasks }: { tasks: ITask[] }) => {
    const { boardId } = useParams();
    const navigate = useNavigate();
    const { data: boardData } = useGetBoardQuery(boardId!);
    const [submitDelete] = useDeleteTaskMutation();
    const [submitTransition] = useTransitionWorkflowMutation();

    const transitionWorkflow = (taskID: string, workflow: WorkflowCode) => {
        submitTransition({ taskID, body: { workflow } });
    };
    const viewTask = (taskId: string) => {
        navigate(`/boards/${taskId}`);
    };
    const editTask = (taskId: string) => {
        navigate(`/boards/${taskId}/edit`);
    };

    const deleteTask = (taskId: string) => {
        submitDelete(taskId);
    };

    const workflow = [
        { code: WorkflowCode.TODO, label: WorkflowLabel.TODO },
        { code: WorkflowCode.PROGRESS, label: WorkflowLabel.PROGRESS },
        { code: WorkflowCode.DONE, label: WorkflowLabel.DONE },
    ];

    const TasksComponent = () => {
        return workflow.map(({ code, label }) => {
            const filteredTasks = filterWorkflowCode(tasks, code);
            return (
                <Col key={code} className='task__label-column'>
                    <h3 className='task__title'>{label}</h3>
                    {filteredTasks.map((task) => (
                        <TaskComponent
                            key={task.id}
                            transitionWorkflow={transitionWorkflow}
                            deleteTask={deleteTask}
                            viewTask={viewTask}
                            editTask={editTask}
                            task={task}
                        />
                    ))}
                </Col>
            );
        });
    };

    return (
        <div>
            <h2 className='task__board-name'>
                {boardData?.data.name || "This board doesn't have a name yet. "}
            </h2>
            <div className='task__wrapper'>
                <Row gutter={16} align='stretch'>
                    <TasksComponent />
                </Row>
            </div>
        </div>
    );
};
