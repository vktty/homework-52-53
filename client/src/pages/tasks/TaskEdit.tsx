import { Button, Flex, Form, Input } from 'antd';
import { useNavigate, useParams } from 'react-router';

export const TaskEdit = () => {
    const [form] = Form.useForm();
    const { boardId, taskId } = useParams();
    const navigate = useNavigate();

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
                        autoSize={{ minRows: 3, maxRows: 6 }}
                        placeholder='Enter new description'
                    />
                </Form.Item>

                <Flex gap={20} justify='center'>
                    <Button
                        color='orange'
                        variant='solid'
                        size='large'
                        onClick={() => navigate(`/tasks/${taskId}`)}>
                        Cancel changes
                    </Button>
                    <Button
                        color='orange'
                        variant='solid'
                        size='large'
                        onClick={() => navigate(`/tasks/${taskId}`)}>
                        Save changes
                    </Button>
                </Flex>
            </Form>
        </>
    );
};
