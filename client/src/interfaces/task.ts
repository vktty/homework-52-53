export interface ITask {
    id: string,
    title: string,
    description: string,
    workflow: {
        code: string,
        label: string
    }
}