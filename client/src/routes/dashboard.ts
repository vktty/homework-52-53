import { redirect } from "react-router";

import { DashboardLayout } from "../layouts";
import { Boards } from "../pages/boards";

export const dashboardRoute = {
    path: '/',
    Component: DashboardLayout,
    children: [
        {
            index: true,
            middleware: [() => {
                return redirect('/boards')
            }]
        },
        {
            path: 'boards',
            Component: Boards,
            children: [
                {
                    path: 'create',
                    // Component:,
                },
                {
                    path: ':boardId/edit',
                    // Component:,
                },
                {
                    path: ':boardId/tasks',
                    // Component:,
                },
            ]
        },
        {
            path: 'tasks/:taskId',
            // Component:,
            children: [{
                path: 'edit',
                // Component:,
            }]
        },
        {
            path: 'tasks/create',
            // Component:,
        },
    ]
}