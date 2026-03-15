import { redirect } from 'react-router';

import { DashboardLayout } from '../layouts';
import { BoardsPage } from '../pages/boards';
import { TaskEdit, TaskOpen, TasksPage } from '../pages/tasks';
import { CreateBoard, CreateTask } from '../pages/create';

export const dashboardRoute = {
    path: '/',
    Component: DashboardLayout,
    children: [
        {
            index: true,
            middleware: [
                () => {
                    return redirect('boards');
                },
            ],
        },
        {
            path: 'boards',
            Component: BoardsPage,
            children: [
                {
                    path: 'create',
                    Component: CreateBoard,
                },
                {
                    path: ':boardId/tasks',
                    Component: TasksPage,
                },
                {
                    path: ':taskId',
                    Component: TaskOpen,
                },
                {
                    path: ':taskId/edit',
                    Component: TaskEdit,
                },
            ],
        },
        {
            path: 'tasks/create',
            Component: CreateTask,
        },
    ],
};
