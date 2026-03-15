import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export const Loading = () => {
    return (
        <>
            <div>Loading...</div>
            <Spin indicator={<LoadingOutlined spin />} size='large' />
        </>
    );
};
