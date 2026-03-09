import { useFormik } from "formik"
import { useNavigate } from "react-router"

import type { IUserSignIn} from "../../interfaces"
import { validationSchema } from "../../utils"

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
        validationSchema,
        onSubmit
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
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