import { useFormik } from 'formik'
import { useNavigate } from 'react-router'
import { Tooltip } from 'antd'

import type { IUserSignUp } from '../../interfaces'
import { signUpValidationSchema } from '../../utils'
import { SignUpButtonForm } from '../../components/button'
import './style.scss'

export const SignUp = () => {
    const navigate = useNavigate()
    const initialValues: IUserSignUp = {
        name: '',
        email: '',
        password: ''
    }
    const onSubmit = () => {
        navigate('/boards')
    }

    const formik = useFormik({
        initialValues,
        validationSchema: signUpValidationSchema,
        onSubmit
    })

    return (
        <>
            <div className='form'>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className='form__item'>
                        <Tooltip
                            color={'#ffc53d'}
                            title={formik.touched.name && formik.errors.name}
                            open={formik.touched.name && !!formik.errors.name}
                            placement="right"
                        >
                            <input
                                type="text"
                                placeholder="Name"
                                {...formik.getFieldProps("name")}
                            />
                        </Tooltip>
                    </div>

                    <div className='form__item'>
                        <Tooltip
                            color={'#ffc53d'}
                            title={formik.touched.email && formik.errors.email}
                            open={formik.touched.email && !!formik.errors.email}
                            placement="right"
                        >
                            <input type="email"
                                placeholder="Email"
                                {...formik.getFieldProps('email')} />
                        </Tooltip>
                    </div>

                    <div className='form__item'>
                        <Tooltip
                            color={'#ffc53d'}
                            title={formik.touched.password && formik.errors.password}
                            open={formik.touched.password && !!formik.errors.password}
                            placement="right"
                        >
                            <input type="password"
                                placeholder="Password"
                                {...formik.getFieldProps('password')} />
                        </Tooltip>
                    </div>

                    <SignUpButtonForm />
                </form>
            </div>

        </>
    )
}