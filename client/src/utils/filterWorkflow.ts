import type { ITask } from '../interfaces';
import type { WorkflowCode } from '../interfaces/enums';

export const filterWorkflowCode = (
	tasks: ITask[],
	workflowCode: WorkflowCode,
) => {
	return tasks.filter((task) => {
		return task.workflow?.code === workflowCode;
	});
};
