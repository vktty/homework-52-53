import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { Tooltip } from 'antd';

import type { IUserSignIn } from '../../interfaces';
import { signInValidationSchema } from '../../utils';
import { SignInButtonForm } from '../../components';
import './style.scss';
import { useSignInMutation } from '../../store/auth';

export const SignIn = () => {
    const navigate = useNavigate();
    const [signIn] = useSignInMutation();

    const initialValues: IUserSignIn = {
        email: '',
        password: '',
    };

    // const onSubmit = () => {
    //     navigate('/boards');
    // };

    const onSubmit = async (values: IUserSignIn) => {
        try {
            await signIn(values).unwrap();

            navigate('/boards');
        } catch (error) {
            console.error(error);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema: signInValidationSchema,
        onSubmit,
    });

    return (
        <>
            <div className='form'>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Sign In</h2>
                    <div className='form__item'>
                        <Tooltip
                            color={'#ffc53d'}
                            title={formik.touched.email && formik.errors.email}
                            open={formik.touched.email && !!formik.errors.email}
                            placement='right'>
                            <input
                                type='email'
                                placeholder='Email'
                                {...formik.getFieldProps('email')}
                            />
                        </Tooltip>
                    </div>

                    <div className='form__item'>
                        <Tooltip
                            color={'#ffc53d'}
                            title={
                                formik.touched.password &&
                                formik.errors.password
                            }
                            open={
                                formik.touched.password &&
                                !!formik.errors.password
                            }
                            placement='right'>
                            <input
                                type='password'
                                placeholder='Password'
                                {...formik.getFieldProps('password')}
                            />
                        </Tooltip>
                    </div>

                    <SignInButtonForm />
                </form>
            </div>
        </>
    );
};
