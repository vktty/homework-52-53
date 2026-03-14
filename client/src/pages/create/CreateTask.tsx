import { Button, Form, Input } from 'antd';
import { useNavigate, useParams } from 'react-router';

import './style.scss';
import { useEffect, useState } from 'react';

export const CreateTask = () => {
    const { boardId } = useParams();
    const [form] = Form.useForm();
    const [submittable, setSubmittable] = useState(false);
    const values = Form.useWatch([], form);

    useEffect(() => {
        form.validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);

    const navigate = useNavigate();
    return (
        <Form form={form} className='form'>
            <h3>Create new task</h3>
            <Form.Item
                name={'taskName'}
                label={'Task name:'}
                layout='vertical'
                rules={[
                    { required: true, message: 'Please input task name!' },
                ]}>
                <Input placeholder='Enter task name' />
            </Form.Item>
            <Form.Item
                name={'taskDescription'}
                label={'Task description:'}
                layout='vertical'
                rules={[
                    {
                        required: true,
                        message: 'Please input task description!',
                    },
                ]}>
                <Input.TextArea
                    autoSize={{ minRows: 3, maxRows: 6 }}
                    placeholder='Enter task description'
                />
            </Form.Item>

            <Button
                color='orange'
                variant='solid'
                size='large'
                disabled={!submittable}
                onClick={() => navigate(`/boards/${boardId}/tasks`)}>
                Create Task
            </Button>
        </Form>
    );
};
