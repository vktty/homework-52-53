import type { WorkflowCode, WorkflowLabel } from './enums';

export interface ITask {
    id: string;
    title: string;
    description: string;
    workflow: {
        code: WorkflowCode;
        label: WorkflowLabel;
    };
}
