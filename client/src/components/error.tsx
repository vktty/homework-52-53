import { Result } from 'antd';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const Error = ({ subTitle }: { subTitle: string }) => {
    return (
        <>
            <Result
                status='error'
                title='An error has occured!'
                subTitle={subTitle}
                style={{ marginTop: '150px' }}
            />
        </>
    );
};

export const getError = (error: unknown): string => {
    if (!error) return 'Unknown error';
    if (typeof error === 'object' && error !== null && 'data' in error) {
        const e = error as FetchBaseQueryError;

        return (
            (e.data as any)?.error?.message ||
            (e.data as any)?.message ||
            'Unknown error'
        );
    }

    if (typeof error === 'object' && error !== null && 'message' in error) {
        return (error as any).message;
    }

    return 'Unknown error';
};
