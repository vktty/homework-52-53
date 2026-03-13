import { Col, Row } from 'antd';
import type { ITask } from '../../interfaces';
import { TaskComponent } from './TaskComponent';

export const Tasks = ({ tasks }: { tasks: ITask[] }) => {
    const tasksComponent = tasks.map((task) => (
        <Col key={task.id}>
            <TaskComponent task={task} />
        </Col>
    ));

    return <Row>{tasksComponent}</Row>;
};
