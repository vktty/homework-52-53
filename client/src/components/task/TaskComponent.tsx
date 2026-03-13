import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
} from '@ant-design/icons';
import { Card } from 'antd';

import type { ITask } from '../../interfaces';

export const TaskComponent = ({ task }: { task: ITask }) => {
    const { title, description } = task;
    return (
        <Card
            style={{ width: 300 }}
            actions={[
                <ArrowLeftOutlined />,
                <ArrowRightOutlined />,
                <EditOutlined />,
                <EyeOutlined />,
                <DeleteOutlined />,
            ]}
            title={title}>
            {description}
        </Card>
    );
};
