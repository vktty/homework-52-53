import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
	BoardDeleteResponse,
	BoardListResponse,
	BoardResponse,
	BoardTasksResponse,
	IBoard,
} from '../interfaces';

export const BOARDS_API = 'boardsApi';
const BASE_URL = 'http://localhost:3000/api/v1/boards';

type CreateBoardPayload = Pick<IBoard, 'name' | 'description'>;
type EditBoardPayload = {
	boardID: string;
	body: Partial<CreateBoardPayload>;
};

export const boardsAPI = createApi({
	reducerPath: BOARDS_API,
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		credentials: 'include',
	}),
	tagTypes: ['Boards', 'BoardTasks'],
	endpoints: (build) => ({
		getBoards: build.query<BoardListResponse, void>({
			query: () => '/',
			providesTags: ['Boards'],
		}),
		createBoard: build.mutation<BoardResponse, CreateBoardPayload>({
			query: (body) => ({
				url: '/',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Boards'],
		}),
		editBoard: build.mutation<BoardResponse, EditBoardPayload>({
			query: ({ boardID, body }) => ({
				url: `/${boardID}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['Boards'],
		}),
		deleteBoard: build.mutation<BoardDeleteResponse, string>({
			query: (boardID) => ({
				url: `/${boardID}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Boards'],
		}),
		getBoard: build.query<BoardResponse, string>({
			query: (boardID) => `/${boardID}`,
		}),
		getBoardTasks: build.query<BoardTasksResponse, string>({
			query: (boardID) => `/${boardID}/tasks`,
			providesTags: ['BoardTasks'],
		}),
	}),
});

export const {
	useGetBoardsQuery,
	useCreateBoardMutation,
	useEditBoardMutation,
	useDeleteBoardMutation,
	useGetBoardQuery,
	useGetBoardTasksQuery,
} = boardsAPI;
