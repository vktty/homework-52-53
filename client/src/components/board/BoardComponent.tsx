import { useNavigate } from 'react-router';
import { Button, Card, Flex } from 'antd';

import type { IBoard } from '../../interfaces';

export const BoardComponent = ({ board }: { board: IBoard }) => {
	const navigate = useNavigate();
	return (
		<Card className='board__card' title={board.name}>
			<div className='board__content'>
				{board.description}
				<Flex justify='space-between' align='center'>
					<div>
						Total tasks:{' '}
						<b>{board.tasksCount || 0}</b>
					</div>

					<Button
						color='orange'
						variant='solid'
						size='medium'
						className='board__button'
						onClick={() =>
							navigate(
								`/boards/${board.id}/tasks`,
							)
						}>
						Check out this board
					</Button>
				</Flex>
			</div>
		</Card>
	);
};
