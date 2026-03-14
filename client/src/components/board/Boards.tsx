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
        <div className='board__wrapper'>
            <Row gutter={[24, 24]} align='stretch'>
                {boardsComponent}
            </Row>
        </div>
    );
};
