import { Form, Button, Input, Flex } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { toastError, toastSuccess } from '../../context';
import './style.scss';
import { useCreateBoardMutation } from '../../store/boards';
import { getError } from '../../components/error';

export const CreateBoard = () => {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const [submittable, setSubmittable] = useState(false);
	const values = Form.useWatch([], form);
	const [submitBoard, addBoard] = useCreateBoardMutation();

	useEffect(() => {
		form.validateFields({ validateOnly: true })
			.then(() => setSubmittable(true))
			.catch(() => setSubmittable(false));
	}, [form, values]);

	const handleCancel = () => {
		toastSuccess('Changes cancelled!');
		navigate(`/boards`);
	};

	const handleCreate = async () => {
		try {
			const values = await form.validateFields();
			await submitBoard({
				name: values.boardName,
				description: values.boardDescription,
			}).unwrap();
		} catch (error) {
			toastError(getError(error));
		}
	};

	useEffect(() => {
		if (addBoard.isSuccess) {
			toastSuccess('New board created!');
			navigate(`/boards`);
		}
	}, [addBoard.isSuccess]);

	return (
		<>
			<Form form={form} className='form'>
				<h3>Create new board</h3>
				<Form.Item
					name={'boardName'}
					label={'Board name:'}
					layout='vertical'
					rules={[
						{
							required: true,
							message: 'Please input board name!',
						},
					]}>
					<Input placeholder='Enter board name' />
				</Form.Item>
				<Form.Item
					name={'boardDescription'}
					label={'Board description:'}
					layout='vertical'
					rules={[
						{
							required: true,
							message: 'Please input board description!',
						},
					]}>
					<Input.TextArea
						autoSize={{
							minRows: 3,
							maxRows: 6,
						}}
						placeholder='Enter board description'
					/>
				</Form.Item>

				<Flex justify='space-around'>
					<Button
						color='orange'
						variant='outlined'
						size='large'
						onClick={handleCancel}>
						Cancel
					</Button>
					<Button
						color='orange'
						variant='solid'
						size='large'
						disabled={!submittable}
						onClick={handleCreate}>
						Create Board
					</Button>
				</Flex>
			</Form>
		</>
	);
};
