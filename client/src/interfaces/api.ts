import type { IUserSignUp } from './auth';
import type { IBoard } from './board';
import type { ITask } from './task';

export interface IApiError {
    message: string;
    code: string;
    details: any[];
}
export interface IApiResponse<T> {
    data: T;
    error: IApiError;
}
export type IUser = Omit<IUserSignUp, 'password'>;

export type AuthResponse = IApiResponse<IUser>;

export type BoardListResponse = IApiResponse<IBoard[]>;
export type BoardResponse = IApiResponse<IBoard>;
export type BoardTasksResponse = IApiResponse<ITask[]>;
export type BoardDeleteResponse = IApiResponse<void>;

export type TaskResponse = IApiResponse<ITask>;
export type TaskDeleteResponse = IApiResponse<void>;
