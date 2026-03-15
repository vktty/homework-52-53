import { Form, Button, Input, Flex } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { toastSuccess } from '../../context';
import './style.scss';

export const CreateBoard = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [submittable, setSubmittable] = useState(false);
    const values = Form.useWatch([], form);

    useEffect(() => {
        form.validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);

    const handleCreate = () => {
        toastSuccess('New board created!');
        navigate(`/boards`);
    };

    const handleCancel = () => {
        toastSuccess('Сhanges cancelled!');
        navigate(`/boards`);
    };

    return (
        <>
            <Form form={form} className='form'>
                <h3>Create new board</h3>
                <Form.Item
                    name={'boardName'}
                    label={'Board name:'}
                    layout='vertical'
                    rules={[
                        { required: true, message: 'Please input board name!' },
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
                        autoSize={{ minRows: 3, maxRows: 6 }}
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
