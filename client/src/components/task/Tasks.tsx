import { Col, Row } from 'antd';
import { useNavigate, useParams } from 'react-router';

import type { ITask } from '../../interfaces';
import { TaskComponent } from './TaskComponent';
import { useGetBoardQuery } from '../../store/boards';
import { filterWorkflowCode } from '../../utils';
import { WorkflowCode } from '../../interfaces/enums';
import { toastSuccess } from '../../context';
import { workflow } from '../../utils';
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
		toastSuccess('Task deleted!');
	};
	const TasksComponent = () => {
		return workflow.map(({ code, label }) => {
			const filteredTasks = filterWorkflowCode(tasks, code);
			return (
				<Col
					key={code}
					span={8}
					className='task__label-column'>
					<h3 className='task__title'>{label}</h3>
					<div className='task__card-wrapper'>
						{filteredTasks.map((task) => (
							<TaskComponent
								key={task.id}
								transitionWorkflow={
									transitionWorkflow
								}
								deleteTask={
									deleteTask
								}
								viewTask={
									viewTask
								}
								editTask={
									editTask
								}
								task={task}
							/>
						))}
					</div>
				</Col>
			);
		});
	};

	return (
		<div>
			<h2 className='task__board-name'>
				{boardData?.data.name ||
					"This board doesn't have a name yet. "}
			</h2>
			<div className='task__wrapper'>
				<Row gutter={16} align='stretch'>
					<TasksComponent />
				</Row>
			</div>
		</div>
	);
};
