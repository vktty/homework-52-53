import { Button, Flex, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

import { toastError, toastSuccess } from '../../context';
import { useCreateTaskMutation } from '../../store/tasks';
import { getError } from '../../components/error';
import { useGetBoardsQuery } from '../../store/boards';
import { workflow } from '../../utils';
import './style.scss';

export const CreateTask = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [submittable, setSubmittable] = useState(false);
    const [submitTask, addTask] = useCreateTaskMutation();
    const { data: boardsData } = useGetBoardsQuery();
    const values = Form.useWatch([], form);

    useEffect(() => {
        form.validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);

    const handleCancel = () => {
        toastSuccess('Changes cancelled!');
        navigate(-1);
    };

    const handleCreate = async () => {
        try {
            const values = await form.validateFields();
            await submitTask({
                title: values.taskName,
                description: values.taskDescription,
                boardId: values.boardId!,
                workflow: values.boardWorkflow,
            }).unwrap();
        } catch (error) {
            toastError(getError(error));
        }
    };

    useEffect(() => {
        if (addTask.isSuccess) {
            toastSuccess('New task created!');
            navigate(-1);
        }
    }, [addTask.isSuccess]);

    const getBoards = () => {
        return boardsData?.data.map((board) => ({
            label: board.name,
            value: board.id,
        }));
    };

    const workflowOptions = workflow.map((option) => ({
        label: option.label,
        value: option.code,
    }));

    return (
        <Form form={form} className='form'>
            <h3>Create new task</h3>

            <Form.Item
                name='boardId'
                label='Board'
                layout='vertical'
                rules={[{ required: true }]}>
                <Select options={getBoards()} placeholder='Select board' />
            </Form.Item>

            <Form.Item
                name='boardWorkflow'
                label='Workflow'
                layout='vertical'
                rules={[{ required: true }]}>
                <Select
                    options={workflowOptions}
                    placeholder='Select workflow'
                />
            </Form.Item>

            <Form.Item
                name='taskName'
                label='Task name'
                layout='vertical'
                rules={[{ required: true }]}>
                <Input placeholder='Enter task name' />
            </Form.Item>

            <Form.Item
                name='taskDescription'
                label='Task description'
                layout='vertical'
                rules={[{ required: true }]}>
                <Input.TextArea autoSize={{ minRows: 3, maxRows: 6 }} />
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
                    Create Task
                </Button>
            </Flex>
        </Form>
    );
};
