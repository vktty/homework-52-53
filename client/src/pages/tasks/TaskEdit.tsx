import { Button, Flex, Form, Input } from 'antd';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';

import { toastError, toastSuccess } from '../../context';
import { useUpdateTaskMutation } from '../../store/tasks';
import { getError } from '../../components/error';

export const TaskEdit = () => {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const { taskId } = useParams();
	const [submitTaskEdit, updateTaskEdit] = useUpdateTaskMutation();
	const [submittable, setSubmittable] = useState(false);
	const values = Form.useWatch([], form) || {};

	useEffect(() => {
		form.validateFields({ validateOnly: true })
			.then(() => setSubmittable(true))
			.catch(() => setSubmittable(false));
	}, [values, form]);

	const handleCancel = () => {
		toastSuccess('Changes cancelled!');
		navigate(-1);
	};

	const handleSave = async () => {
		try {
			await form.validateFields();
			const filterBody: any = {};

			if (values.changeName) {
				filterBody.title = values.changeName;
			}
			if (values.changeDescription) {
				filterBody.description =
					values.changeDescription;
			}
			await submitTaskEdit({
				taskID: taskId!,
				body: filterBody,
			}).unwrap();
		} catch (error) {
			toastError(getError(error));
		}
	};

	useEffect(() => {
		if (updateTaskEdit.isSuccess) {
			toastSuccess('Changes saved!');
			navigate(-1);
		}
	}, [updateTaskEdit.isSuccess]);

	return (
		<>
			<Form form={form} className='form'>
				<h3>Edit board</h3>
				<Form.Item
					name={'changeName'}
					label={'New task name:'}
					layout='vertical'>
					<Input placeholder='Enter new name' />
				</Form.Item>
				<Form.Item
					name={'changeDescription'}
					label={'New task description:'}
					layout='vertical'>
					<Input.TextArea
						autoSize={{
							minRows: 3,
							maxRows: 6,
						}}
						placeholder='Enter new description'
					/>
				</Form.Item>

				<Flex gap={20} justify='center'>
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
						onClick={handleSave}
						disabled={!submittable}>
						Save
					</Button>
				</Flex>
			</Form>
		</>
	);
};
