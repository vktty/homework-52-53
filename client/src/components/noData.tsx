import { SmileTwoTone } from '@ant-design/icons';
import { Result } from 'antd';

export const NoBoards = () => {
    return (
        <Result
            icon={<SmileTwoTone twoToneColor='#ffa940' />}
            title='There are no boards yet!'
            subTitle='But you can create a new one! Just press the Create button on top left.'
            style={{ marginTop: '100px' }}
        />
    );
};

export const NoTasks = () => {
    return (
        <Result
            icon={<SmileTwoTone twoToneColor='#ffa940' />}
            title='There are no tasks yet!'
            subTitle='But you can create a new one! Just press the Create button on top left.'
            style={{ marginTop: '100px' }}
        />
    );
};
