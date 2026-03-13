import { Col, Row } from 'antd';

import { BoardComponent } from './BoardComponent';
import type { IBoard } from '../../interfaces';
import './style.scss';

export const Boards = ({ boards }: { boards: IBoard[] }) => {
    const boardsComponent = boards.map((board) => (
        <Col span={8} key={board.id}>
            <BoardComponent board={board} />
        </Col>
    ));

    return (
        <div className='board-wrapper'>
            <Row gutter={[24, 24]}>{boardsComponent}</Row>
        </div>
    );
};
