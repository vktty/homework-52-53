import type { IUserSignUp } from "./auth"

export interface IApiError {
    message: string,
    code: string,
    details: any[]
} 
export interface IApiResponse<T> {
    data: T,
    error: IApiError
}
export type IUser = Omit<IUserSignUp, 'password'>

export type AuthResponse = IApiResponse<IUser>

