import { useNavigate } from 'react-router';
import type { IBoard } from '../../interfaces';
import { Button, Card, Flex } from 'antd';

export const BoardComponent = ({ board }: { board: IBoard }) => {
    const navigate = useNavigate();
    return (
        <Card className='board__card' title={board.name}>
            <Flex vertical>
                {board.description}
                <Button
                    color='orange'
                    variant='solid'
                    size='medium'
                    className='board__button'
                    onClick={() => navigate(`/boards/${board.id}/tasks`)}>
                    Check out this board
                </Button>
            </Flex>
        </Card>
    );
};
