import { Form, Button, Input } from 'antd';
import './style.scss';
import { useEffect, useState } from 'react';

export const CreateBoard = () => {
    const [form] = Form.useForm();
    const [submittable, setSubmittable] = useState(false);
    const values = Form.useWatch([], form);

    useEffect(() => {
        form.validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);

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

                <Button
                    color='orange'
                    variant='solid'
                    size='large'
                    disabled={!submittable}>
                    Create Board
                </Button>
            </Form>
        </>
    );
};
