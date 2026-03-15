import { WorkflowCode, WorkflowLabel } from '../interfaces/enums';

export const workflow = [
    { code: WorkflowCode.TODO, label: WorkflowLabel.TODO },
    { code: WorkflowCode.PROGRESS, label: WorkflowLabel.PROGRESS },
    { code: WorkflowCode.DONE, label: WorkflowLabel.DONE },
];
