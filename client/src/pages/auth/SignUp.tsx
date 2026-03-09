import { useFormik } from 'formik'
import { useNavigate } from 'react-router'

import type { IUserSignUp } from '../../interfaces'
import { validationSchema } from '../../utils'

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
        validationSchema,
        onSubmit
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label className='required'>Name:</label>
                <input type="text" placeholder="Name" {...formik.getFieldProps('name')} />
                {formik.errors.name && formik.touched.name && <span className='error'>{formik.errors.name}</span>}


                <label className='required'>Email:</label>
                <input type="email" placeholder="Email" {...formik.getFieldProps('email')} />
                {formik.errors.email && formik.touched.email && <span className='error'>{formik.errors.email}</span>}

                <label className='required'>Password:</label>
                <input type="password" placeholder="Password" {...formik.getFieldProps('password')} />
                {formik.errors.password && formik.touched.password && <span className='error'>{formik.errors.password}</span>}

                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}