import { toast } from 'react-toastify';
import './style.scss';

interface IToastParams {
    message: string;
    className: string;
    progressClassName: string;
}

export const Toastify = ({
    message,
    className,
    progressClassName,
}: IToastParams) => {
    return toast(message, {
        className: className,
        progressClassName: progressClassName,
    });
};
