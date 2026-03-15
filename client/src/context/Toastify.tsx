import { toast } from 'react-toastify';
import './style.scss';

export const toastError = (message: string) => {
    return toast.error(message);
};

export const toastSuccess = (message: string) => {
    return toast.success(message);
};
