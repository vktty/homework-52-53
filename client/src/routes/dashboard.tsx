import { redirect } from 'react-router';

import { DashboardLayout } from '../layouts';
import { BoardsPage } from '../pages/boards';
import { TasksPage } from '../pages/tasks';
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
                    path: ':boardId/edit',
                    // Component:,
                },
            ],
        },
        {
            path: 'boards/:boardId/tasks',
            Component: TasksPage,
        },
        {
            path: 'tasks/:taskId',
            // Component:,
            children: [
                {
                    path: 'edit',
                    // Component:,
                },
            ],
        },
        {
            path: 'tasks/create',
            Component: CreateTask,
        },
    ],
};
