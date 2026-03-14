import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { boardsAPI } from './boards';
import type { ITask, TaskDeleteResponse, TaskResponse } from '../interfaces';
import type { WorkflowCode } from '../interfaces/enums';

export const TASKS_API = 'tasksApi';
const BASE_URL = 'http://localhost:3000/api/v1/tasks';

type CreateTaskPayload = Pick<ITask, 'title' | 'description'>;
type EditTaskPayload = {
    taskID: string;
    body: Partial<CreateTaskPayload>;
};
type TransitionWorkflowPayload = {
    taskID: string;
    body: {
        workflow: WorkflowCode;
    };
};

export const tasksAPI = createApi({
    reducerPath: TASKS_API,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials: 'include',
    }),
    tagTypes: ['Task'],
    endpoints: (build) => ({
        getTask: build.query<TaskResponse, string>({
            query: (taskID) => `/${taskID}`,
            providesTags: ['Task'],
        }),
        createTask: build.mutation<TaskResponse, CreateTaskPayload>({
            query: (body) => ({
                url: '/',
                method: 'POST',
                body,
            }),
        }),
        updateTask: build.mutation<TaskResponse, EditTaskPayload>({
            query: ({ body, taskID }) => ({
                url: `/${taskID}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Task'],
        }),
        deleteTask: build.mutation<TaskDeleteResponse, string>({
            query: (taskId) => ({
                url: `/${taskId}`,
                method: 'DELETE',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                await queryFulfilled;
                dispatch(boardsAPI.util.invalidateTags(['Boards']));
            },
        }),
        transitionWorkflow: build.mutation<
            TaskResponse,
            TransitionWorkflowPayload
        >({
            query: ({ body, taskID }) => ({
                url: `/${taskID}/workflow`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Task'],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                await queryFulfilled;
                dispatch(boardsAPI.util.invalidateTags(['Boards']));
            },
        }),
    }),
});

export const {
    useGetTaskQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useTransitionWorkflowMutation,
} = tasksAPI;
