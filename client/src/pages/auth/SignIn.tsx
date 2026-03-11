import { useFormik } from "formik"
import { useNavigate } from "react-router"
import { Tooltip } from "antd"

import type { IUserSignIn } from "../../interfaces"
import { signInValidationSchema } from "../../utils"
import { SignInButtonForm } from "../../components/button"
import './style.scss'

export const SignIn = () => {
    const navigate = useNavigate()

    const initialValues: IUserSignIn = {
        email: '',
        password: ''
    }

    const onSubmit = () => {
        navigate('/boards')
    }

    const formik = useFormik({
        initialValues,
        validationSchema: signInValidationSchema,
        onSubmit
    })

    return (
        <>
            <div className="form">
                <form onSubmit={formik.handleSubmit}>
                    <h2>Sign In</h2>
                    <div className='form__item'>
                        <Tooltip
                            color={'#ffc53d'}
                            title={formik.touched.email && formik.errors.email}
                            open={formik.touched.email && !!formik.errors.email}
                            placement="right"
                        >
                            <input type="email" placeholder="Email" {...formik.getFieldProps('email')} />
                        </Tooltip>
                    </div>

                    <div className='form__item'>
                        <Tooltip
                            color={'#ffc53d'}
                            title={formik.touched.password && formik.errors.password}
                            open={formik.touched.password && !!formik.errors.password}
                            placement="right"
                        >
                            <input type="password" placeholder="Password" {...formik.getFieldProps('password')} />
                        </Tooltip>
                    </div>

                    <SignInButtonForm />
                </form>
            </div>

        </>
    )
}